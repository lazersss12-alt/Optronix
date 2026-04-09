const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, 'src');

const moves = [
    // Layout
    { old: 'src/components/layout/Header.jsx', new: 'src/components/layout/Header/Header.jsx' },
    { old: 'src/components/layout/Header.css', new: 'src/components/layout/Header/Header.module.css' },

    // Landing
    { old: 'src/components/LandingAbout.jsx', new: 'src/features/landing/sections/LandingAbout.jsx' },
    { old: 'src/components/BrandSlider.jsx', new: 'src/features/landing/sections/BrandSlider.jsx' },
    { old: 'src/components/Testimonials.jsx', new: 'src/features/landing/sections/Testimonials.jsx' },
    { old: 'src/components/testimonials.css', new: 'src/features/landing/sections/testimonials.css' },
    { old: 'src/components/partner.jsx', new: 'src/features/landing/sections/partner.jsx' },
    { old: 'src/components/partner.css', new: 'src/features/landing/sections/partner.css' },
    { old: 'src/components/LatestEvent.jsx', new: 'src/features/landing/sections/LatestEvent.jsx' },
    { old: 'src/components/LatestEvent.css', new: 'src/features/landing/sections/LatestEvent.css' },
    { old: 'src/components/MaincomPro.jsx', new: 'src/features/landing/sections/MaincomPro.jsx' },
    { old: 'src/components/MaincomPro.css', new: 'src/features/landing/sections/MaincomPro.css' },
    { old: 'src/components/LazySection.jsx', new: 'src/features/landing/sections/LazySection.jsx' },

    // Contact
    { old: 'src/components/ContactPageele.jsx', new: 'src/pages/Contact/components/ContactPageele.jsx' },
    { old: 'src/components/Contactpageform.jsx', new: 'src/pages/Contact/components/Contactpageform.jsx' },
    { old: 'src/components/contactheader.jsx', new: 'src/pages/Contact/components/contactheader.jsx' },
    { old: 'src/pages/ContactPage.jsx', new: 'src/pages/Contact/ContactPage.jsx' },

    // Educational
    { old: 'src/components/Educational.jsx', new: 'src/pages/Educational/Educational.jsx' },
    { old: 'src/components/educationalpage.jsx', new: 'src/pages/Educational/educationalpage.jsx' },
    { old: 'src/components/educational.css', new: 'src/pages/Educational/educational.css' },
    { old: 'src/components/educationalpage.css', new: 'src/pages/Educational/educationalpage.css' },

    // UI
    { old: 'src/components/ImageSlider.jsx', new: 'src/components/ui/ImageSlider.jsx' },
    { old: 'src/components/ImageSlider.css', new: 'src/components/ui/ImageSlider.css' },
    { old: 'src/components/AccordionTable.jsx', new: 'src/components/ui/AccordionTable.jsx' },
    { old: 'src/components/ems/SurfaceMountingShowcase.css', new: 'src/components/ui/SurfaceMountingShowcase.css' },
    { old: 'src/components/ems/SurfaceMountingShowcase.jsx', new: 'src/components/ui/SurfaceMountingShowcase.jsx' },
    { old: 'src/components/ems/VideoModal.jsx', new: 'src/components/ui/VideoModal.jsx' },

    // EMS
    { old: 'src/components/ems/ems.css', new: 'src/features/ems/styles/ems.css' },
    { old: 'src/components/ems/mi.jsx', new: 'src/features/ems/pages/mi.jsx' },
    { old: 'src/components/ems/miimgone.css', new: 'src/features/ems/styles/miimgone.css' },
    { old: 'src/components/ems/miimgone.jsx', new: 'src/features/ems/components/miimgone.jsx' },
    { old: 'src/components/ems/ofcpage.jsx', new: 'src/features/ems/pages/ofcpage.jsx' },
    { old: 'src/components/ems/smt.css', new: 'src/features/ems/styles/smt.css' },
    { old: 'src/components/ems/smt.jsx', new: 'src/features/ems/pages/smt.jsx' },
];

const movesMap = new Map();
const oldPaths = new Set();
moves.forEach(m => {
    const absOld = path.resolve(m.old);
    const absNew = path.resolve(m.new);
    movesMap.set(absOld.toLowerCase(), absNew); // Case insensitive for Windows safety
    oldPaths.add(absOld.toLowerCase());
});

function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList);
        } else {
            if (filePath.endsWith('.js') || filePath.endsWith('.jsx') || filePath.endsWith('.css')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

function resolveImport(importPath, currentFileAbsPath) {
    // Return absolute path of what is being imported
    if (importPath.startsWith('.')) {
        return path.resolve(path.dirname(currentFileAbsPath), importPath);
    }
    // Absolute imports from src root (if configured) or node_modules
    // Assuming relative imports for now predominantly.
    return null;
}

function getNewPathForFile(originalPath) {
    // If the file was moved, return its new path.
    // If not, return original.
    // BUT we are iterating over files as they exist on disk NOW.
    // So currentPath IS the new path if it moved.
    // Wait, the script runs AFTER moves.
    return originalPath;
}

function getOriginalPathIfItMoved(currentPath) {
    // Reverse lookup? No.
    // We need to know what this file WAS before move to resolve its OLD imports.
    // currentPath is where the file is NOW.
    // We need to find if this `currentPath` is a `new` in `moves`.
    for (const m of moves) {
        if (path.resolve(m.new).toLowerCase() === currentPath.toLowerCase()) {
            return path.resolve(m.old);
        }
    }
    return currentPath;
}

const allFiles = getAllFiles(projectRoot);

allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    const currentFileAbs = path.resolve(file);
    const oldFileAbs = getOriginalPathIfItMoved(currentFileAbs); // Where this file used to be

    // Regex for imports: import ... from '...'; or require('...'); or import '...';
    // Also css @import ?? Use simple regex for JS imports first.
    const importRegex = /(import\s+(?:[\w\s{},*]+\s+from\s+)?['"])([^'"]+)(['"])|(require\(['"])([^'"]+)(['"])|(import\(['"])([^'"]+)(['"])/g;

    content = content.replace(importRegex, (match, p1, p2, p3, p4, p5, p6, p7, p8, p9) => {
        const prefix = p1 || p4 || p7;
        const importPath = p2 || p5 || p8;
        const suffix = p3 || p6 || p9;

        if (!importPath.startsWith('.')) return match; // Ignore node_modules

        // 1. Resolve what was originally imported, based on where the file USED to be.
        // Because the content is still the old content (imports haven't changed yet).
        let oldImportAbs = path.resolve(path.dirname(oldFileAbs), importPath);

        // Check if we can find the file.
        // The file at `oldImportAbs` might have moved.
        // We check if `oldImportAbs` is in our `moves` list as an `old` path.
        let newImportAbs = oldImportAbs;
        if (movesMap.has(oldImportAbs.toLowerCase())) {
            newImportAbs = movesMap.get(oldImportAbs.toLowerCase());
        } else {
            // Maybe the import path didn't have extension?
            // simple try extensions
            const exts = ['.js', '.jsx', '.css'];
            let found = false;
            for (const ext of exts) {
                if (movesMap.has((oldImportAbs + ext).toLowerCase())) {
                    newImportAbs = movesMap.get((oldImportAbs + ext).toLowerCase());
                    found = true;
                    break;
                }
            }
        }

        // Now we know where the imported file IS (newImportAbs).
        // And we know where the current file IS (currentFileAbs).
        // Calculate relative path.
        let newRelativeImport = path.relative(path.dirname(currentFileAbs), newImportAbs);

        // meaningful path
        if (!newRelativeImport.startsWith('.')) {
            newRelativeImport = './' + newRelativeImport;
        }

        // Ensure slash on windows
        newRelativeImport = newRelativeImport.replace(/\\/g, '/');

        // Remove extension if original didn't have it (and it's js/jsx)
        if (!path.extname(importPath) && (newRelativeImport.endsWith('.js') || newRelativeImport.endsWith('.jsx'))) {
            newRelativeImport = newRelativeImport.substring(0, newRelativeImport.lastIndexOf('.'));
        }

        console.log(`Updated ${file}: ${importPath} -> ${newRelativeImport}`);
        return `${prefix}${newRelativeImport}${suffix}`;
    });

    if (content !== originalContent) {
        fs.writeFileSync(file, content);
    }
});

console.log('Import refactoring complete.');
