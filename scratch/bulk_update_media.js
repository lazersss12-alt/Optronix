const fs = require('fs');
const path = require('path');

function getAllFiles(dir, fileList = []) {
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

// Regex for mediaUrl calls
// 1. Image: change .png, .jpg, .jpeg to .webp
const imageRegex = /mediaUrl\.image\(['"]([^'"]+)\.(png|jpg|jpeg)['"]\)/g;
// 2. Doc/PDF: ensure mediaUrl.doc() is used if not already (safely)
const docRegex = /mediaUrl\.doc\(['"]([^'"]+)\.pdf['"]\)/g;
// 3. Video/mp4: ensure mediaUrl.video() is used
const videoRegex = /mediaUrl\.video\(['"]([^'"]+)\.mp4['"]\)/g;

allFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const originalContent = content;
  
  // Update Images to .webp
  content = content.replace(imageRegex, (match, filename, ext) => {
    // console.log(`Updating ${path.relative(projectRoot, file)}: ${filename}.${ext} -> ${filename}.webp`);
    return `mediaUrl.image("${filename}.webp")`;
  });

  // (We skip doc/video as they are likely already using the correct helpers or were handled manually)
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content);
    console.log(`Updated ${path.relative(projectRoot, file)}`);
  }
});

console.log('Bulk media update complete.');
