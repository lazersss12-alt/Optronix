const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory && !dirPath.includes("node_modules") && !dirPath.includes("src_backup") ? 
            walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

function processFiles() {
    let count = 0;
    walk('src', (filePath) => {
        if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js')) return;
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;
        
        // Match <img tags that don't have loading="lazy", fetchpriority="high", or contain the word "logo" / "banner"
        // It's a rough regex but covers the most common cases safely.
        content = content.replace(/<img(?![^>]*loading=["']lazy["'])(?![^>]*fetchpriority=["']high["'])(\s[^>]*)>/g, (match, p1) => {
            // Check if it's likely a hero/banner image by checking its class name or src naming loosely
            if (/hero|banner|logo/i.test(match)) {
                return match; // skip these
            }
            return `<img loading="lazy"${p1}>`;
        });

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            count++;
            console.log(`Updated images in: ${filePath}`);
        }
    });
    console.log(`Processed ${count} files.`);
}

processFiles();
