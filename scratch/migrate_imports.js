const fs = require('fs');
const path = require('path');

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else if (filePath.endsWith('.jsx')) {
      fileList.push(filePath);
    }
  });
  return fileList;
}

const projectRoot = path.join(process.cwd(), 'src');
const allFiles = getAllFiles(projectRoot);

// Regex for active media imports
// Matches: import <VAR> from '<PATH>.<EXT>'
// Skips lines that are commented out
const importRegex = /^import\s+([\w\d_]+)\s+from\s+['"].*\.([\w\d]+)['"]/gm;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // We process line by line to handle comments easily
  const lines = content.split('\n');
  let modified = false;
  let hasMediaUrl = content.includes('import { mediaUrl }') || content.includes('import {mediaUrl}');

  const newLines = lines.map(line => {
    const trimmed = line.trim();
    if (trimmed.startsWith('import ') && !trimmed.includes('mediaUrl')) {
      const match = trimmed.match(/^import\s+([\w\d_]+)\s+from\s+['"].*\.([\w\d]+)['"];?$/);
      if (match) {
        const varName = match[1];
        const ext = match[2].toLowerCase();
        
        const filename = trimmed.split('/').pop().split('.')[0];
        
        if (['png', 'jpg', 'jpeg'].includes(ext)) {
          modified = true;
          return `const ${varName} = mediaUrl.image("${filename}.webp");`;
        } else if (ext === 'pdf') {
          modified = true;
          return `const ${varName} = mediaUrl.doc("${filename}.pdf");`;
        } else if (ext === 'mp4') {
          modified = true;
          return `const ${varName} = mediaUrl.video("${filename}.mp4");`;
        }
      }
    }
    return line;
  });

  if (modified) {
    let newContent = newLines.join('\n');
    if (!hasMediaUrl) {
      const relativePath = path.relative(path.dirname(file), path.join(projectRoot, 'config/media')).replace(/\\/g, '/');
      const importPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
      newContent = `import { mediaUrl } from '${importPath}';\n` + newContent;
    }
    fs.writeFileSync(file, newContent);
    console.log(`Import Migrated: ${path.relative(projectRoot, file)}`);
  }
});

console.log('Import migration complete.');
