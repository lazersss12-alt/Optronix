import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';
const MEDIA_DIR = './public/media/images';

// Get list of all actual files in public/media/images
const actualFiles = fs.readdirSync(MEDIA_DIR);

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(SRC_DIR);

files.forEach(filePath => {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Find all mediaUrl.image("...") calls
  const regex = /mediaUrl\.image\(["']([^"']+)["']\)/g;
  content = content.replace(regex, (match, fileName) => {
    const baseName = fileName.replace(/\.[^/.]+$/, "");
    
    // Check if the current extension exists in public/media/images
    if (actualFiles.includes(fileName)) {
       return match; // Existing file is fine
    }

    // Try finding the file with other extensions
    const extensions = ['.png', '.jpg', '.jpeg', '.JPG', '.JPEG', '.webp', '.PNG'];
    for (const ext of extensions) {
        if (actualFiles.includes(baseName + ext)) {
            console.log(`Fixing ${fileName} -> ${baseName}${ext} in ${filePath}`);
            changed = true;
            return `mediaUrl.image("${baseName}${ext}")`;
        }
    }

    // Try a fuzzy match if no exact base name match (case insensitive)
    const fuzzyMatch = actualFiles.find(f => f.toLowerCase() === fileName.toLowerCase());
    if (fuzzyMatch) {
        console.log(`Fixing Case ${fileName} -> ${fuzzyMatch} in ${filePath}`);
        changed = true;
        return `mediaUrl.image("${fuzzyMatch}")`;
    }

    return match; // No match found, leave as is
  });

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
