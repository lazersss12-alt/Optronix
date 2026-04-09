const fs = require('fs');
const path = require('path');

const srcRoot = path.join(__dirname, '../src');

function getAllFiles(dirPath, arrayOfFiles) {
    const files = fs.readdirSync(dirPath);
    arrayOfFiles = arrayOfFiles || [];

    files.forEach(function (file) {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            if (file.match(/\.(js|jsx|css)$/)) {
                arrayOfFiles.push(path.join(dirPath, "/", file));
            }
        }
    });
    return arrayOfFiles;
}

const files = getAllFiles(srcRoot);
const targets = [
    '../../../../../../../../', // 8
    '../../../../../../../',    // 7
    '../../../../../../',       // 6
    '../../../../../'           // 5
];
const replacement = '../../../../';

let totalFixed = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    targets.forEach(target => {
        if (content.includes(target)) {
            // Check if it's targeting index.css or assets
            // actually, safely replace all deep traversals if they look like they go to root components or assets
            // But be careful. 
            // The logic: if it matches target, it likely WANTS to be replacement.
            content = content.split(target).join(replacement);
        }
    });

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed: ${path.relative(srcRoot, file)}`);
        totalFixed++;
    }
});

console.log(`Finished. Fixed ${totalFixed} files.`);
