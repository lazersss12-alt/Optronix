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

// Pattern 1: Hardcoded strings in attributes like src="..." or href="..." 
// but NOT already using mediaUrl
// Example: src="../../assets/img/logo.png" -> src={mediaUrl.image("logo.webp")}
// Example: href="/Optronix_Catalogue.pdf" -> href={mediaUrl.root("Optronix_Catalogue.pdf")}

const hardcodedRegex = /(src|href|background|poster)=['"]([^'"]+)\.(png|jpg|jpeg|pdf|mp4)['"]/g;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  content = content.replace(hardcodedRegex, (match, attr, fullPath, ext) => {
    const filename = fullPath.split('/').pop(); // Get just the filename
    
    // Check if it's the Catalogue
    if (filename === 'Optronix_Catalogue' && ext === 'pdf') {
      return `${attr}={mediaUrl.root("Optronix_Catalogue.pdf")}`;
    }

    if (['png', 'jpg', 'jpeg'].includes(ext)) {
      return `${attr}={mediaUrl.image("${filename}.webp")}`;
    } else if (ext === 'pdf') {
       return `${attr}={mediaUrl.doc("${filename}.pdf")}`;
    } else if (ext === 'mp4') {
       return `${attr}={mediaUrl.video("${filename}.mp4")}`;
    }
    
    return match;
  });

  if (content !== originalContent) {
    // Check if mediaUrl is imported
    if (!content.includes('import { mediaUrl }') && !content.includes('import {mediaUrl}')) {
      // Find import relative path
      const relativePath = path.relative(path.dirname(file), path.join(projectRoot, 'config/media')).replace(/\\/g, '/');
      const importPath = relativePath.startsWith('.') ? relativePath : `./${relativePath}`;
      content = `import { mediaUrl } from '${importPath}';\n` + content;
    }
    
    fs.writeFileSync(file, content);
    console.log(`Deep Migrated: ${path.relative(projectRoot, file)}`);
  }
});

console.log('Deep migration complete.');
