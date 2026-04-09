const fs = require('fs');
const path = require('path');

const baseDir = path.join('c:', 'Users', 'HP', 'Desktop', 'candid optronix', 'src', 'features', 'products');
const categories = ['deviser', 'optronix_edfa', 'optronix_fiber', 'optronix_pon', 'sumitomo'];

const modalImport = "import ProductLeadModal from '../../../../components/common/ProductLeadModal';\n";

categories.forEach(category => {
    // Individual pages are usually in 'components' for most, but 'pages' for Sumitomo
    const subDirs = ['components', 'pages'];
    
    subDirs.forEach(subDir => {
        const dirPath = path.join(baseDir, category, subDir);
        if (!fs.existsSync(dirPath)) return;

        const files = fs.readdirSync(dirPath);
        files.forEach(file => {
            // Target individual product pages (e.g. Optronixedfaproducttwo.jsx, Deviserproductone.jsx)
            // Skip list pages (like Deviserproduct.jsx, optronixedfaproduct.jsx) and reference page (one)
            // But user said "all", so I'll include all that match the "product[number]" pattern mostly.
            // Actually, let's target all .jsx files that have a Helmet title and an Enquire Now button.
            
            if (!file.endsWith('.jsx')) return;
            const filePath = path.join(dirPath, file);
            let content = fs.readFileSync(filePath, 'utf8');

            // Skip if already has ProductLeadModal
            if (content.includes('ProductLeadModal')) {
                console.log(`Skipping ${file} (already integrated)`);
                return;
            }

            // Check if it's an individual product page (has Enquire Now and Helmet title)
            if (content.includes('Enquire Now') && content.includes('<Helmet>')) {
                console.log(`Processing ${file}...`);

                // 1. Update React import
                content = content.replace(/import React, { useState, useEffect }/, "import React, { useState, useEffect, useCallback }");

                // 2. Add Modal import (relative path might vary, but for components/ and pages/ it's usually the same depth)
                // Components depth: src/features/products/cat/components -> src/components/common/ProductLeadModal
                // ../../../../components/common/ProductLeadModal is correct for both components/ and pages/ inside a feature
                if (!content.includes('import ProductLeadModal')) {
                    const lines = content.split('\n');
                    let lastImportIndex = -1;
                    lines.forEach((line, idx) => {
                        if (line.startsWith('import')) lastImportIndex = idx;
                    });
                    lines.splice(lastImportIndex + 1, 0, modalImport);
                    content = lines.join('\n');
                }

                // 3. Add state
                const stateMatch = content.match(/const \[productImage\] = useState\(.*?\);/);
                if (stateMatch) {
                   content = content.replace(stateMatch[0], `${stateMatch[0]}\n  const [enquireOpen, setEnquireOpen] = useState(false);`);
                } else {
                   // Fallback for PON/Fiber which might not have productImage state
                   content = content.replace(/const (.*?) = \(\) => {/, "const $1 = () => {\n  const [enquireOpen, setEnquireOpen] = useState(false);");
                }

                // 4. Update Enquire Now button
                content = content.replace(/onClick={() => window.open\("\/contact", "_self"\)}/g, "onClick={() => setEnquireOpen(true)}");
                // Some files might use a different style
                content = content.replace(/<Link to="\/contact" className="btn btn-primary">/g, '<button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>');
                content = content.replace(/<\/Link>\s*<\/div>\s*<p className="helper-text">/g, '</button></div><p className="helper-text">');

                // 5. Extract Title
                const titleMatch = content.match(/<title>(.*?)<\/title>/);
                const pageName = titleMatch ? titleMatch[1].split('|')[0].trim() : "Product Page";

                // 6. Add Modal before closing div
                // Find the last </div> before the final export/return end
                const lastDivIndex = content.lastIndexOf('</div>');
                if (lastDivIndex !== -1) {
                    const modalJsx = `\n      <ProductLeadModal\n        isOpen={enquireOpen}\n        onClose={() => setEnquireOpen(false)}\n        pageName="${pageName}"\n      />`;
                    content = content.slice(0, lastDivIndex) + modalJsx + content.slice(lastDivIndex);
                }

                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Successfully updated ${file}`);
            }
        });
    });
});
