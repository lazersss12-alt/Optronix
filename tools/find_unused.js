const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '../src');
const ENTRY_FILE = path.join(ROOT_DIR, 'index.js');
const PUBLIC_DIR = path.resolve(__dirname, '../public');

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

    // 1. Exact match (file or directory)
    if (fs.existsSync(absPath)) {
        if (fs.statSync(absPath).isFile()) return absPath;
        if (fs.statSync(absPath).isDirectory()) {
            // Try index files
            for (const ext of EXTENSIONS) {
                const indexPath = path.join(absPath, 'index' + ext);
                if (fs.existsSync(indexPath)) return indexPath;
            }
        }
    }

    // 2. Try extensions
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

    // JS/TS Parsing
    if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
        const importRegex = /import\s+(?:[\w\s{},*]*\s+from\s+)?['"](.*?)['"]/g;
        const requireRegex = /require\(['"](.*?)['"]\)/g;
        const dynamicImportRegex = /import\(['"](.*?)['"]\)/g;
        // Catch simple string imports like import './style.css'
        const sideEffectImportRegex = /import\s+['"](.*?)['"]/g;

        const processMatch = (m) => {
            const importPath = m[1];
            // Only process relative paths starting with . or /
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

    // CSS Parsing
    if (['.css', '.scss'].includes(ext)) {
        // url('...') or url("...") or url(...)
        const urlRegex = /url\(\s*['"]?(.*?)['"]?\s*\)/g;
        let match;
        while ((match = urlRegex.exec(content)) !== null) {
            let importPath = match[1];
            // Remove query params or anchors if any (simple)
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

const allFiles = getAllFiles(ROOT_DIR);
const visited = new Set();

if (fs.existsSync(ENTRY_FILE)) {
    parseFile(ENTRY_FILE, visited);
}

// Filter and Categorize
const unusedFiles = allFiles.filter(f => !visited.has(f) && !IGNORED_FILES.includes(path.basename(f)));

const categories = {
    "Code (JS/Start/Pages)": [],
    "Styles (CSS)": [],
    "Images/Assets": [],
    "Other": []
};

unusedFiles.forEach(f => {
    const ext = path.extname(f).toLowerCase();
    const relPath = path.relative(ROOT_DIR, f);

    if (['.js', '.jsx', '.ts', '.tsx'].includes(ext)) {
        categories["Code (JS/Start/Pages)"].push(relPath);
    } else if (['.css', '.scss'].includes(ext)) {
        categories["Styles (CSS)"].push(relPath);
    } else if (['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.mp4', '.mov', '.webm', '.ico'].includes(ext)) {
        categories["Images/Assets"].push(relPath);
    } else {
        categories["Other"].push(relPath);
    }
});

const reportPath = path.resolve(__dirname, '../unused_files.md');
let reportContent = "# Unused Files Report\n\n";
reportContent += `Total files in src: ${allFiles.length}\n`;
reportContent += `Used files: ${visited.size}\n`;
reportContent += `Unused files: ${unusedFiles.length}\n\n`;

for (const [category, files] of Object.entries(categories)) {
    if (files.length > 0) {
        reportContent += `## ${category} (${files.length})\n`;
        files.forEach(f => reportContent += `- ${f}\n`);
        reportContent += '\n';
    }
}

fs.writeFileSync(reportPath, reportContent);
console.log(`Report generated at: ${reportPath}`);

