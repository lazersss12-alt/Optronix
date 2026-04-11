const fs = require('fs');
const path = require('path');
const https = require('https');

const MEDIA_BASE = 'https://candid.optronix.in/assets/images/';

async function checkWebpExists(filename) {
    return new Promise((resolve) => {
        const url = `${MEDIA_BASE}${filename}.webp`;
        https.request(url, { method: 'HEAD' }, (res) => {
            // Check if it's actually an image and not the index.html fallback
            const isImage = res.headers['content-type'] && res.headers['content-type'].includes('image/webp');
            resolve(res.statusCode === 200 && isImage);
        }).on('error', () => resolve(false)).end();
    });
}

function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (!file.startsWith('.')) getAllFiles(filePath, fileList);
        } else if (filePath.endsWith('.jsx')) {
            fileList.push(filePath);
        }
    });
    return fileList;
}

async function run() {
    console.log('Starting conditional .webp audit...');
    const projectRoot = path.join(process.cwd(), 'src');
    const allFiles = getAllFiles(projectRoot);
    const checkedAssets = new Map(); // Cache results

    for (const file of allFiles) {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        
        // Find mediaUrl.image("...") calls
        const regex = /mediaUrl\.image\(['"]([^'"]+)\.(png|jpg|jpeg)['"]\)/g;
        let match;
        const replacements = [];

        while ((match = regex.exec(content)) !== null) {
            const [fullMatch, filename, ext] = match;
            
            if (!checkedAssets.has(filename)) {
                console.log(`Probing: ${filename}.webp ...`);
                const exists = await checkWebpExists(filename);
                checkedAssets.set(filename, exists);
            }

            if (checkedAssets.get(filename)) {
                replacements.push({ fullMatch, filename });
            }
        }

        // Apply replacements in reverse order to avoid index shifts
        for (let i = replacements.length - 1; i >= 0; i--) {
            const { fullMatch, filename } = replacements[i];
            content = content.replace(fullMatch, `mediaUrl.image("${filename}.webp")`);
        }

        if (content !== originalContent) {
            fs.writeFileSync(file, content);
            console.log(`Updated ${path.relative(projectRoot, file)}`);
        }
    }
    console.log('Bulk update complete.');
}

run().catch(console.error);
