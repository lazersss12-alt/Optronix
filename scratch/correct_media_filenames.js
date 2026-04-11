const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file));
    }
  });
  return arrayOfFiles;
}

const srcDir = path.join(process.cwd(), 'src');
const files = getAllFiles(srcDir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Pattern to find the mappings from commented imports
  // // import mediaUrl.image("VariableName.webp") from "../components/img/FileName.png";
  // OR // import VarName from "../components/img/FileName.png";
  const mappingRegex = /\/\/ import (?:mediaUrl\.\w+\("([^"]+)\.\w+"\)|(\w+)) from ["'](.*)\/([^/]+)\.(png|jpg|jpeg|webp|pdf|mp4|webm|ogg)["']/g;
  
  const mappings = {};
  let match;
  while ((match = mappingRegex.exec(content)) !== null) {
    const varName = match[1] || match[2];
    const fileName = match[4];
    if (varName && fileName && varName !== fileName) {
      mappings[varName] = fileName;
    }
  }

  // Now replace active mediaUrl calls that use the VarName instead of the FileName
  Object.keys(mappings).forEach(varName => {
    const fileName = mappings[varName];
    // Create a regex to find mediaUrl.type("VarName.ext")
    // Note: VarName might have spaces if it came from my previous script's error
    const escVarName = varName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const callRegex = new RegExp(`mediaUrl\\.(image|video|doc|root)\\("${escVarName}\\.([^"]+)"\\)`, 'g');
    
    if (callRegex.test(content)) {
      content = content.replace(callRegex, (m, type, ext) => {
        console.log(`Fixing ${file}: ${varName} -> ${fileName}`);
        changed = true;
        return `mediaUrl.${type}("${fileName}.${ext}")`;
      });
    }
  });

  if (changed) {
    fs.writeFileSync(file, content);
  }
});
