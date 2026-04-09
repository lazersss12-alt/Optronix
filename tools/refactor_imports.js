const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '../');
const srcRoot = path.join(projectRoot, 'src');

// Map of OLD absolute paths (as if they were still there) to NEW absolute paths
const moves = {
    // Phase 1: Layout Components
    'src/components/Header.jsx': 'src/components/layout/Header.jsx',
    'src/components/Header.css': 'src/components/layout/Header.css',
    'src/components/Navbar.jsx': 'src/components/layout/Navbar.jsx',
    'src/components/Navbar.css': 'src/components/layout/Navbar.css',
    'src/components/Footer.jsx': 'src/components/layout/Footer.jsx',
    'src/components/Footer.css': 'src/components/layout/Footer.css',
    // Phase 1: Common Components
    'src/components/Loading.jsx': 'src/components/common/Loading.jsx',
    'src/components/Scroolltop.jsx': 'src/components/common/Scroolltop.jsx',
    // Phase 1: Image Directory
    'src/components/img': 'src/assets/images',

    // Phase 2: Feature Components
    'src/components/sumitomo': 'src/features/products/sumitomo/components',
    'src/components/deviser': 'src/features/products/deviser/components',
    'src/components/optronixpon': 'src/features/products/optronix_pon/components',
    'src/components/optronixfiber': 'src/features/products/optronix_fiber/components',
    'src/components/optronixedfa': 'src/features/products/optronix_edfa/components'
};

// Add Page Mappings
const sumitomoPages = [
    'Sumitomo.jsx',
    'Sumitomoproductone.jsx', 'Sumitomoproducttwo.jsx', 'Sumitomoproductthree.jsx',
    'Sumitomoproductfour.jsx', 'Sumitomoproductfive.jsx', 'Sumitomoproductsix.jsx',
    'Sumitomoproductseven.jsx', 'Sumitomoproducteight.jsx', 'Sumitomoproductnine.jsx',
    'Sumitomoproductten.jsx', 'Sumitomoproducteleven.jsx', 'Sumitomoproducttwelve.jsx'
];
sumitomoPages.forEach(p => moves[`src/pages/${p}`] = `src/features/products/sumitomo/pages/${p}`);

moves['src/pages/Deviser.jsx'] = 'src/features/products/deviser/pages/Deviser.jsx';
moves['src/pages/OptronixPON.jsx'] = 'src/features/products/optronix_pon/pages/OptronixPON.jsx';
moves['src/pages/Optronixfiber.jsx'] = 'src/features/products/optronix_fiber/pages/Optronixfiber.jsx';
moves['src/pages/optronixedfa.jsx'] = 'src/features/products/optronix_edfa/pages/optronixedfa.jsx';

// Normalize paths to system specific
const normalize = (p) => p.split('/').join(path.sep);

const map = {};
Object.keys(moves).forEach(k => {
    map[path.join(projectRoot, normalize(k))] = path.join(projectRoot, normalize(moves[k]));
});

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

function resolveOldPath(currentFileNewPath, importPath) {
    // To resolve where the file WAS, we need to see if currentFileNewPath is in our 'destinations'.
    // If currentFileNewPath is a compilation of a move, we reverse map it to find where it WAS.
    // However, for Phase 2, the files we are processing (e.g. inside src/features/products/sumitomo/components)
    // ARE at their new location.
    // And their content is relative to their OLD location (src/components/sumitomo).

    // 1. Find the OLD location of the current file
    let oldFilePath = null;

    // Exact match check
    for (const [oldP, newP] of Object.entries(map)) {
        if (currentFileNewPath === newP) {
            oldFilePath = oldP;
            break;
        }
    }

    // Directory match check (reverse)
    if (!oldFilePath) {
        for (const [oldP, newP] of Object.entries(map)) {
            if (currentFileNewPath.startsWith(newP)) {
                const relative = currentFileNewPath.substring(newP.length);
                oldFilePath = path.join(oldP, relative);
                break;
            }
        }
    }

    // If this file wasn't moved, its old path is same as current path
    if (!oldFilePath) oldFilePath = currentFileNewPath;

    const oldDir = path.dirname(oldFilePath);

    // Resolve the IMPORT path relative to the OLD directory
    if (importPath.startsWith('.')) {
        // purely relative
        return path.resolve(oldDir, importPath);
    } else {
        return null;
    }
}

function getNewPathFor(absoluteOldPath) {
    // Check specific file rewrites
    if (map[absoluteOldPath]) return map[absoluteOldPath];

    // Check with extensions if not found
    const extensions = ['', '.js', '.jsx', '.css'];
    for (const ext of extensions) {
        if (map[absoluteOldPath + ext]) return map[absoluteOldPath + ext];
    }

    // Check directory rewrites (like images)
    for (const [oldP, newP] of Object.entries(map)) {
        if (absoluteOldPath.startsWith(oldP)) {
            // It's inside a moved directory
            const relative = absoluteOldPath.substring(oldP.length);
            return path.join(newP, relative);
        }
    }

    // If not moved, it stays same
    return absoluteOldPath;
}

const files = getAllFiles(srcRoot);

let updatedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    const isCss = file.endsWith('.css');

    const replacer = (fullMatch, quote, importPath) => {
        // Resolve absolute path PRE-MOVE
        const absoluteOldImportTarget = resolveOldPath(file, importPath);

        if (!absoluteOldImportTarget) return fullMatch; // External package or unresolvable

        // Determine where that target IS NOW
        const absoluteNewImportTarget = getNewPathFor(absoluteOldImportTarget);

        // If paths are same, no change needed? 
        // NO, because valid relative path might change if the CONSUMER (file) moved but target didn't!

        // Calculate new relative path from CURRENT file location to NEW target location
        const currentDir = path.dirname(file);
        let newRelativePath = path.relative(currentDir, absoluteNewImportTarget);

        // Ensure ./ prefix if not going up
        if (!newRelativePath.startsWith('.')) {
            newRelativePath = './' + newRelativePath;
        }

        // Normalize separators
        newRelativePath = newRelativePath.split(path.sep).join('/');

        // console.log(`${path.basename(file)}: ${importPath} -> ${newRelativePath}`);

        return fullMatch.replace(importPath, newRelativePath);
    };

    if (isCss) {
        // url('...') or url("...")
        content = content.replace(/url\((['"]?)(.*?)\1\)/g, (match, quote, p) => {
            // CSS usually relative.
            if (p.startsWith('data:')) return match;
            const newPath = replacer(`url('${p}')`, "'", p);
            return newPath.replace(`url('./`, `url('`).replace(`url('${p}')`, `url('${p}')`);
            const absoluteOld = resolveOldPath(file, p);
            if (!absoluteOld) return match;
            const absoluteNew = getNewPathFor(absoluteOld);
            const currentDir = path.dirname(file);
            let rel = path.relative(currentDir, absoluteNew).split(path.sep).join('/');
            return `url(${rel})`;
        });
    } else {
        // JS/JSX
        content = content.replace(/from\s+(['"])(.*?)\1/g, replacer);
        content = content.replace(/import\s+(['"])(.*?)\1/g, replacer);
        content = content.replace(/require\((['"])(.*?)\1\)/g, replacer);
        content = content.replace(/import\((['"])(.*?)\1\)/g, replacer);
    }

    if (content !== originalContent) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
        console.log(`Updated: ${path.relative(projectRoot, file)}`);
    }
});

console.log(`Finished. Updated ${updatedCount} files.`);
