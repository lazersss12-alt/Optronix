const fs = require('fs');
const path = require('path');

const rootDir = 'src';

function resolveConflicts(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            resolveConflicts(fullPath);
        } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.js') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            if (content.includes('<<<<<<< HEAD')) {
                // Regex to find conflict blocks and keep only the HEAD part
                // <<<<<<< HEAD\n(OURS)\n=======\n(THEIRS)\n>>>>>>> (HASH)
                const resolved = content.replace(/<<<<<<< HEAD\r?\n([\s\S]*?)\r?\n=======\r?\n[\s\S]*?\r?\n>>>>>>> [a-f0-9A-F]+/g, '$1');
                
                if (resolved !== content) {
                    fs.writeFileSync(fullPath, resolved);
                    console.log(`Resolved conflicts in ${fullPath}`);
                }
            }
        }
    }
}

resolveConflicts(rootDir);
