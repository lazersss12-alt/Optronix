/**
 * Central Product Search Index
 * Each entry: { name, keywords, path, category }
 * - name: Display name shown in search results
 * - keywords: Additional aliases/model numbers to match against
 * - path: Exact React Router path to navigate to on selection
 * - category: Used as a sub-label in the dropdown
 */
const productSearchIndex = [
    // ── SUMITOMO ──────────────────────────────────────────────────
    { name: 'Sumitomo S1V', keywords: ['s1v', 'sumitomo s1v', 'fusion splicer'], path: '/sumitomo/S1V', category: 'Sumitomo' },
    { name: 'Sumitomo S1V Ultra', keywords: ['s1v ultra', 's1vultra', 'sumitomo ultra'], path: '/sumitomo/S1VULTRA', category: 'Sumitomo' },
    { name: 'Sumitomo Z2C', keywords: ['z2c', 'sumitomo z2c'], path: '/sumitomo/Z2C', category: 'Sumitomo' },
    { name: 'Sumitomo W1C', keywords: ['w1c', 'sumitomo w1c'], path: '/sumitomo/W1C', category: 'Sumitomo' },
    { name: 'Sumitomo 82C Plus', keywords: ['82c', '82cplus', '82c plus', 'sumitomo 82c'], path: '/sumitomo/82CPLUS', category: 'Sumitomo' },
    { name: 'Sumitomo 82M12', keywords: ['82m12', 'sumitomo 82m12', '12-fiber'], path: '/sumitomo/82M12', category: 'Sumitomo' },
    { name: 'Sumitomo FC-8R', keywords: ['fc8r', 'fc-8r', 'fiber cleaver'], path: '/sumitomo/FC8R', category: 'Sumitomo' },
    { name: 'Sumitomo S70', keywords: ['s70', 'sumitomo s70'], path: '/sumitomo/S70', category: 'Sumitomo' },
    { name: 'Sumitomo FC-7LS', keywords: ['fc7ls', 'fc-7ls'], path: '/sumitomo/FC7LS', category: 'Sumitomo' },
    { name: 'Sumitomo SFCS', keywords: ['sfcs', 'sumitomo sfcs'], path: '/sumitomo/SFCS', category: 'Sumitomo' },
    { name: 'Sumitomo FC-6S', keywords: ['fc6s', 'fc-6s'], path: '/sumitomo/FC6S', category: 'Sumitomo' },

    // ── DEVISER ──────────────────────────────────────────────────
    { name: 'Deviser AE3100A', keywords: ['ae3100a', 'deviser ae3100a', 'otdr'], path: '/deviser/AE3100A', category: 'Deviser' },
    { name: 'Deviser AE1001', keywords: ['ae1001', 'deviser ae1001'], path: '/deviser/AE1001', category: 'Deviser' },
    { name: 'Deviser AE3100DM', keywords: ['ae3100dm', 'deviser ae3100dm'], path: '/deviser/AE3100DM', category: 'Deviser' },
    { name: 'Deviser AE3100Live', keywords: ['ae3100live', 'deviser ae3100live', 'ae3100 live'], path: '/deviser/AE3100Live', category: 'Deviser' },
    { name: 'Deviser AE210', keywords: ['ae210', 'deviser ae210'], path: '/deviser/AE210', category: 'Deviser' },
    { name: 'Deviser EP310', keywords: ['ep310', 'deviser ep310'], path: '/deviser/EP310', category: 'Deviser' },
    { name: 'Deviser LS310', keywords: ['ls310', 'deviser ls310'], path: '/deviser/LS310', category: 'Deviser' },
    { name: 'Deviser EP710', keywords: ['ep710', 'deviser ep710'], path: '/deviser/EP710', category: 'Deviser' },
    { name: 'Deviser VF10', keywords: ['vf10', 'deviser vf10'], path: '/deviser/VF10', category: 'Deviser' },

    // ── OPTRONIX PON ─────────────────────────────────────────────
    { name: 'Optronix OP-100P16G', keywords: ['op100p16g', 'op-100p16g', 'pon'], path: '/optronix-pon/OP-100P16G', category: 'Optronix PON' },
    { name: 'Optronix OP100P8G', keywords: ['op100p8g', 'pon'], path: '/optronix-pon/OP100P8G', category: 'Optronix PON' },
    { name: 'Optronix OP100P8', keywords: ['op100p8'], path: '/optronix-pon/OP100P8', category: 'Optronix PON' },
    { name: 'Optronix OP100P4', keywords: ['op100p4'], path: '/optronix-pon/OP100P4', category: 'Optronix PON' },
    { name: 'Optronix OP100P4G', keywords: ['op100p4g'], path: '/optronix-pon/OP100P4G', category: 'Optronix PON' },
    { name: 'Optronix OP841GWVDGB', keywords: ['op841gwvdgb', 'onu'], path: '/optronix-pon/OP841GWVDGB', category: 'Optronix PON' },
    { name: 'Optronix OP821GWVDGB', keywords: ['op821gwvdgb'], path: '/optronix-pon/OP821GWVDGB', category: 'Optronix PON' },
    { name: 'Optronix OP821GWVD', keywords: ['op821gwvd'], path: '/optronix-pon/OP821GWVD', category: 'Optronix PON' },
    { name: 'Optronix OP821GWV', keywords: ['op821gwv'], path: '/optronix-pon/OP821GWV', category: 'Optronix PON' },
    { name: 'Optronix OP801GW', keywords: ['op801gw'], path: '/optronix-pon/OP801GW', category: 'Optronix PON' },
    { name: 'Optronix OP101X', keywords: ['op101x'], path: '/optronix-pon/OP101X', category: 'Optronix PON' },

    // ── OPTRONIX FIBER ───────────────────────────────────────────
    { name: 'Optronix Flat Drop Cable', keywords: ['flat cable', 'flat drop', 'optronix flat'], path: '/optronix-fiber/optronix-flat-cable', category: 'Optronix Fiber' },
    { name: 'Optronix Drop Cable', keywords: ['drop cable', 'optronix drop'], path: '/optronix-fiber/optronix-drop-cable', category: 'Optronix Fiber' },
    { name: 'Optronix NEO', keywords: ['optronix neo', 'neo cable'], path: '/optronix-fiber/optronix-neo', category: 'Optronix Fiber' },
    { name: 'Optronix Gold', keywords: ['optronix gold', 'gold cable'], path: '/optronix-fiber/optronix-gold', category: 'Optronix Fiber' },
    { name: 'Optronix Platinum', keywords: ['optronix platinum', 'platinum cable'], path: '/optronix-fiber/optronix-platinum', category: 'Optronix Fiber' },

    // ── OPTRONIX EDFA ────────────────────────────────────────────
    { name: 'Optronix CE0416M', keywords: ['ce0416m', 'edfa'], path: '/optronix-edfa/CE0416M', category: 'Optronix EDFA' },
    { name: 'Optronix CE0419M', keywords: ['ce0419m'], path: '/optronix-edfa/CE0419M', category: 'Optronix EDFA' },
    { name: 'Optronix CE0819M', keywords: ['ce0819m'], path: '/optronix-edfa/CE0819M', category: 'Optronix EDFA' },
    { name: 'Optronix CE1619M', keywords: ['ce1619m'], path: '/optronix-edfa/CE1619M', category: 'Optronix EDFA' },
    { name: 'Optronix PE0819M', keywords: ['pe0819m'], path: '/optronix-edfa/PE0819M', category: 'Optronix EDFA' },
    { name: 'Optronix PE1619M', keywords: ['pe1619m'], path: '/optronix-edfa/PE1619M', category: 'Optronix EDFA' },
    { name: 'Optronix PE3219M', keywords: ['pe3219m'], path: '/optronix-edfa/PE3219M', category: 'Optronix EDFA' },
    { name: 'Optronix PE0819M-OSW', keywords: ['pe0819m-osw', 'pe0819mosw'], path: '/optronix-edfa/PE0819M-OSW', category: 'Optronix EDFA' },
    { name: 'Optronix PE1619M-OSW', keywords: ['pe1619m-osw'], path: '/optronix-edfa/PE1619M-OSW', category: 'Optronix EDFA' },
    { name: 'Optronix PE3219M-OSW', keywords: ['pe3219m-osw'], path: '/optronix-edfa/PE3219M-OSW', category: 'Optronix EDFA' },
    { name: 'Optronix CE0416M-OSW', keywords: ['ce0416m-osw'], path: '/optronix-edfa/CE0416M-OSW', category: 'Optronix EDFA' },
    { name: 'Optronix CE0419M-OSW', keywords: ['ce0419m-osw'], path: '/optronix-edfa/CE0419M-OSW', category: 'Optronix EDFA' },
    { name: 'Optronix CE0819M-OSW', keywords: ['ce0819m-osw'], path: '/optronix-edfa/CE0819M-OSW', category: 'Optronix EDFA' },
    { name: 'Optronix CE1619M-OSW', keywords: ['ce1619m-osw'], path: '/optronix-edfa/CE1619M-OSW', category: 'Optronix EDFA' },
];

/**
 * Search products by query string.
 * Returns an array of matching products (max `limit` results).
 * Matching logic:
 *   1. Exact model name match → always first
 *   2. name starts with query
 *   3. keyword starts with query
 *   4. name contains query
 *   5. keyword contains query
 */
export function searchProducts(query, limit = 8) {
    if (!query || query.trim().length === 0) return [];
    const q = query.trim().toLowerCase();

    const scored = productSearchIndex.map((product) => {
        const nameLower = product.name.toLowerCase();
        const keywordsLower = product.keywords.map((k) => k.toLowerCase());

        // Score: lower = higher priority
        if (nameLower === q || keywordsLower.includes(q)) return { product, score: 0 };
        if (nameLower.startsWith(q)) return { product, score: 1 };
        if (keywordsLower.some((k) => k.startsWith(q))) return { product, score: 2 };
        if (nameLower.includes(q)) return { product, score: 3 };
        if (keywordsLower.some((k) => k.includes(q))) return { product, score: 4 };
        return null;
    });

    return scored
        .filter(Boolean)
        .sort((a, b) => a.score - b.score)
        .slice(0, limit)
        .map((item) => item.product);
}

export default productSearchIndex;
