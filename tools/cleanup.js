const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../src');
const ENTRY_FILE = path.join(ROOT_DIR, 'index.js');
const TIMESTAMP = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15);
const BACKUP_DIR_NAME = `optronix-unused-backup-${TIMESTAMP}`;
const BACKUP_DIR = path.resolve(__dirname, `../${BACKUP_DIR_NAME}`);

// Extensions to look for when resolving imports
const EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.mp4', '.webm', '.webp', '.MOV'];

// Known standard files to exclude from "unused" list
const IGNORED_FILES = [
    'setupTests.js',
    'reportWebVitals.js',
    '.antigravityignore'
];

function getAllFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            fileList.push(filePath);
        }
    });
    return fileList;
}

function resolveImport(sourceFile, importPath) {
    const dir = path.dirname(sourceFile);
    let absPath = path.resolve(dir, importPath);

    if (fs.existsSync(absPath)) {
        if (fs.statSync(absPath).isFile()) return absPath;
        if (fs.statSync(absPath).isDirectory()) {
            for (const ext of EXTENSIONS) {
                const indexPath = path.join(absPath, 'index' + ext);
                if (fs.existsSync(indexPath)) return indexPath;
            }
        }
    }

    for (const ext of EXTENSIONS) {
        if (fs.existsSync(absPath + ext)) return absPath + ext;
    }

    return null;
}

function parseFile(filePath, visited) {
    if (visited.has(filePath)) return;
    visited.add(filePath);

    const ext = path.extname(filePath);
    const content = fs.readFileSync(filePath, 'utf-8');

    if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
        const importRegex = /import\s+(?:[\w\s{},*]*\s+from\s+)?['"](.*?)['"]/g;
        const requireRegex = /require\(['"](.*?)['"]\)/g;
        const dynamicImportRegex = /import\(['"](.*?)['"]\)/g;
        const sideEffectImportRegex = /import\s+['"](.*?)['"]/g;

        const processMatch = (m) => {
            const importPath = m[1];
            if (importPath.startsWith('.')) {
                const resolved = resolveImport(filePath, importPath);
                if (resolved) {
                    parseFile(resolved, visited);
                }
            }
        };

        let match;
        while ((match = importRegex.exec(content)) !== null) processMatch(match);
        while ((match = requireRegex.exec(content)) !== null) processMatch(match);
        while ((match = dynamicImportRegex.exec(content)) !== null) processMatch(match);
        while ((match = sideEffectImportRegex.exec(content)) !== null) processMatch(match);
    }

    if (['.css', '.scss'].includes(ext)) {
        const urlRegex = /url\(\s*['"]?(.*?)['"]?\s*\)/g;
        let match;
        while ((match = urlRegex.exec(content)) !== null) {
            let importPath = match[1];
            importPath = importPath.split('#')[0].split('?')[0];

            if (importPath.startsWith('.')) {
                const resolved = resolveImport(filePath, importPath);
                if (resolved) {
                    parseFile(resolved, visited);
                }
            }
        }
    }
}

// 1. Identify Unused Files
console.log("Identifying unused files...");
const allFiles = getAllFiles(ROOT_DIR);
const visited = new Set();
if (fs.existsSync(ENTRY_FILE)) {
    parseFile(ENTRY_FILE, visited);
}
const unusedFiles = allFiles.filter(f => !visited.has(f) && !IGNORED_FILES.includes(path.basename(f)));
console.log(`Found ${unusedFiles.length} unused files.`);

if (unusedFiles.length === 0) {
    console.log("No unused files to clean up.");
    process.exit(0);
}

// 2. Prepare Backup Directory
console.log(`Creating backup directory: ${BACKUP_DIR_NAME}`);
if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

// 3. Move Files
console.log("Moving files to backup...");
unusedFiles.forEach(file => {
    const relativePath = path.relative(ROOT_DIR, file);
    const backupPath = path.join(BACKUP_DIR, 'src', relativePath);
    const backupDir = path.dirname(backupPath);

    if (!fs.existsSync(backupDir)) {
        fs.mkdirSync(backupDir, { recursive: true });
    }

    fs.renameSync(file, backupPath);
    // console.log(`Moved: ${relativePath}`);
});

// 4. Generate Restore Script
const restoreScriptContent = `
const fs = require('fs');
const path = require('path');

const BACKUP_DIR = __dirname;
const TARGET_ROOT = path.resolve(__dirname, '../src');

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const backupSrcDir = path.join(BACKUP_DIR, 'src');
console.log("Restoring files from: " + backupSrcDir);

if (!fs.existsSync(backupSrcDir)) {
    console.error("Backup src directory not found!");
    process.exit(1);
}

const files = getAllFiles(backupSrcDir);
let restoredCount = 0;

files.forEach(file => {
    const relativePath = path.relative(backupSrcDir, file);
    const targetPath = path.join(TARGET_ROOT, relativePath);
    const targetDir = path.dirname(targetPath);

    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }

    // Only restore if target doesn't exist (prevent overwriting logic if user added it back manually, though strictly restore means put back)
    // For full undo, we just move it back.
    fs.renameSync(file, targetPath);
    restoredCount++;
});

console.log(\`Restored \${restoredCount} files.\`);
console.log("Restore complete.");
`;

const restoreScriptPath = path.join(BACKUP_DIR, 'restore.js');
fs.writeFileSync(restoreScriptPath, restoreScriptContent);

console.log("Cleanup complete.");
console.log(`Backup created at: ${BACKUP_DIR}`);
console.log(`To UNDO, run: node ${path.join(BACKUP_DIR_NAME, 'restore.js')}`);
