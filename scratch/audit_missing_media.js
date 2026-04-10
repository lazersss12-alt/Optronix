import fs from 'fs';
import path from 'path';

const SRC_DIR = './src';
const IMAGES_DIR = './public/media/images';
const VIDEOS_DIR = './public/media/videos';
const DOCS_DIR = './public/media/docs';

const images = fs.readdirSync(IMAGES_DIR);
const videos = fs.readdirSync(VIDEOS_DIR);
const docs = fs.readdirSync(DOCS_DIR);

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.jsx') || file.endsWith('.js')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(SRC_DIR);
let missing = [];

files.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  
  const imgRegex = /mediaUrl\.image\(["']([^"']+)["']\)/g;
  let match;
  while ((match = imgRegex.exec(content)) !== null) {
    if (!images.includes(match[1])) {
      missing.push({ file: filePath, asset: match[1], type: 'image' });
    }
  }

  const vidRegex = /mediaUrl\.video\(["']([^"']+)["']\)/g;
  while ((match = vidRegex.exec(content)) !== null) {
    if (!videos.includes(match[1])) {
      missing.push({ file: filePath, asset: match[1], type: 'video' });
    }
  }

  const docRegex = /mediaUrl\.doc\(["']([^"']+)["']\)/g;
  while ((match = docRegex.exec(content)) !== null) {
    if (!docs.includes(match[1])) {
      missing.push({ file: filePath, asset: match[1], type: 'doc' });
    }
  }
});

console.log(JSON.stringify(missing, null, 2));
