import media_Optronixdropcable_webp from '../../../../assets/img2/img/Optronixdropcable.webp';
import media_fiber_cable_webp from '../../../../assets/img2/img/fiber cable.webp';
import media_Drop_cable__webp from '../../../../assets/img2/img/Drop cable .webp';
import media_NEO_Series_Fiber_webp from '../../../../assets/img2/img/NEO Series Fiber.webp';
import media_Gold_series_fiber__webp from '../../../../assets/img2/img/Gold series fiber .webp';
import media_Drop_Cable_Data_Sheet_2_pdf from '../../../../assets/img2/img/media/docs/Drop Cable Data Sheet 2.pdf';
import media_flat_cable__webp from '../../../../assets/img2/img/flat cable .webp';
// import React, { useState } from 'react';
// import './Optronixfiberproduct.css';
// import { Link } from 'react-router-dom';
// legacy imports removed for build stability
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

import React, { useState, useEffect } from 'react';

import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';

const Optronixfiberproducttwo = () => {
  const [activeTab, setActiveTab] = useState('overview');
<<<<<<< HEAD
  const [productImage] = useState(media_Optronixdropcable_webp);
=======
  const [productImage] = useState(mediaUrl.image("optronixdropcable.webp"));
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
  const [enquireOpen, setEnquireOpen] = useState(false);
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const openLightbox = (src) => {
    setLightboxSrc(src);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxSrc(null);
  };
  useEffect(() => {
    document.title = 'OPTRONIX 2F Drop Cable (G.657A) - Unitube SM Fiber Optic Cable for FTTH';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'The OPTRONIX 2F Unitube Drop Cable supports G.657A and G.652D fibers. Compact, lightweight, 100~N tensile strength, ideal for easy, last-mile FTTH and access network installations.';

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    // Cleanup function to reset title when component unmounts
    return () => {
      document.title = 'OPTRONIX 2F Drop Cable (G.657A) - Unitube SM Fiber Optic Cable for FTTH';
    };
  }, []);
  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    if (lightboxOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  // Light mosaic background using your images (no S1Vbanner)
<<<<<<< HEAD
  const mosaicBG = () => ({ backgroundColor: '#ffffff' });
=======
  const mosaicBG = (alpha = 0.92) => {
    const imgs = [mediaUrl.image("fiber cable.webp"), mediaUrl.image("drop cable .webp"), mediaUrl.image("neo series fiber.webp"), mediaUrl.image("gold series fiber .webp")];
    return {
      // backgroundImage:
      //   `linear-gradient(180deg, rgba(255,255,255,${alpha}) 0%, rgba(255,255,255,${alpha}) 100%), ` +
      //   `url(${imgs[0]}), url(${imgs[1]}), url(${imgs[2]}), url(${imgs[3]})`,
      backgroundSize: 'cover, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
      backgroundPosition: 'center, left top, right top, left bottom, right bottom',
      backgroundRepeat: 'no-repeat'
    };
  };
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc

  return (
    <div className="s1v-page">
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/optronix-fiber" style={{ color: "#333", textDecoration: "none" }}>Products</Link>

          <span className="sep">/</span>
          <span className="current">Optronix Drop Cable</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              <h1 className="hero-title">Optronix Drop Cable</h1>
              <p className="hero-desc">The Optronix Drop Cable is engineered for FTTH and last-mile connectivity where compact size, high flexibility, and stable performance are essential. Built with enhanced bend-insensitive fibre options (G.652D/G.657A1/G.657A2), this cable ensures optimal performance even in tight routing conditions.</p>

              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
<<<<<<< HEAD
                <button className="btn btn-outline" onClick={() => window.open(media_Drop_Cable_Data_Sheet_2_pdf, "_blank")}>
=======
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("drop cable data sheet 2.pdf"), "_blank")}>
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
                  Download Catalog
                </button>
              </div>
              <p className="helper-text">Need help choosing? Our team can guide you to the right configuration.</p>
            </div>

            {/* Right (compact, no Views) */}
            <div className="hero-right">

              <div className="product-slot"
                onClick={() => openLightbox(productImage)}
                role="button"
                aria-label="Open larger image"
              >
                <img loading="lazy" src={productImage} alt="Product" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="container">
        <div className="tabs-head">
          <div className="tabs">
            <button className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
            <button className={`tab ${activeTab === 'specs' ? 'active' : ''}`} onClick={() => setActiveTab('specs')}>Specifications</button>

          </div>


        </div>
      </section>

      {/* PANELS */}
      <section className="container">
        {activeTab === 'overview' && (
          <div className="panel" style={mosaicBG(0.92)}>
            <h3 className="panel-title">Key Features</h3>
            <ul className="feature-list">
              <li>G.652D / G.657A1 / G.657A2 fibre options for enhanced bend performance</li>
              <li>Ultra-low attenuation: ≤0.4 dB/km @ 1310 nm, ≤0.2 dB/km @ 1550 nm
              </li>
              <li>Drop Cable Data Sheet 2</li>
              <li>Compact design: 4.5 mm / 4.7 mm / 5.0 mm outer diameter</li>
              <li>PBT loose tube filled with thixotropic jelly for moisture protection</li>
              <li>Single/Dual FRP strength members for added tensile support</li>
              <li>Single HDPE black coating for UV and environmental resistance</li>
              <li>Ideal for FTTH drops, last-mile connectivity, and customer premises</li>
              <li>Wide operating temperature: −20°C to +70°C</li>
            </ul>

            <section className="overview-section" style={{ marginTop: 18 }}>
              <h3 className="section-heading">Schematic Diagram (Not to Scale)</h3>

              <div className="diagram-wrapper">
                <img loading="lazy"
                  src={media_flat_cable__webp}
                  alt="Flat Cable Schematic Diagram"
                  className="diagram-image"
                />
              </div>
            </section>

          </div>

        )}

        {/* ====== SPECIFICATIONS: now rendered as accordions with the same table content ====== */}
        {activeTab === 'specs' && (
          <div className="panel" style={mosaicBG(0.92)}>
            <h3 className="panel-title">Fibre Characteristics (G.652D / G.657A1 / G.657A2)</h3>

            {[
              /* -------------------- FIBRE CHARACTERISTICS -------------------- */
              {
                title: 'Fibre Characteristics (G.652D / G.657A1 / G.657A2)',
                content: (
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr>
                          <th colSpan="3">Fibre Characteristics (G.652D / G.657A1 / G.657A2)</th>
                        </tr>
                        <tr>
                          <th>Parameter Category</th>
                          <th>Parameter</th>
                          <th>Specification</th>
                        </tr>
                      </thead>

                      <tbody>
                        {/* Transmission */}
                        <tr>
                          <td>Transmission</td>
                          <td>@ 1310 nm</td>
                          <td>≤0.4 dB/km</td>
                        </tr>
                        <tr>
                          <td>Transmission</td>
                          <td>@ 1550 nm</td>
                          <td>≤0.2 dB/km</td>
                        </tr>

                        {/* Geometrical */}
                        <tr>
                          <td>Geometrical</td>
                          <td>Mode Field Diameter @ 1310 nm</td>
                          <td>9.2 ± 0.4 µm</td>
                        </tr>
                        <tr>
                          <td>Geometrical</td>
                          <td>Cladding Diameter</td>
                          <td>125 ± 1 µm</td>
                        </tr>

                        {/* Chromatic Dispersion */}
                        <tr>
                          <td>Chromatic Dispersion</td>
                          <td>1550 nm</td>
                          <td>≤18 ps/nm·km</td>
                        </tr>

                        {/* PMD */}
                        <tr>
                          <td>Polarization Mode Dispersion</td>
                          <td>At Fibre Stage</td>
                          <td>≤0.2 ps/√km</td>
                        </tr>

                        {/* Cutoff */}
                        <tr>
                          <td>Cut Off Wavelength</td>
                          <td>Cable Cut Off Wavelength</td>
                          <td>≤1260 nm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
              },

              /* -------------------- CONSTRUCTION & MECHANICAL -------------------- */
              {
                title: 'Construction & Mechanical Characteristics',
                content: (
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr>
                          <th colSpan="2">Construction & Mechanical Characteristics</th>
                        </tr>
                        <tr>
                          <th>Parameters</th>
                          <th>Specifications</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Fiber Count</td>
                          <td>2F</td>
                        </tr>

                        <tr>
                          <td>No of Loose Tube</td>
                          <td>1 Loose Tube (Unitube)</td>
                        </tr>

                        <tr>
                          <td>Loose Tube Material</td>
                          <td>PBT Loose Tube Filled With Thixotropic Jelly</td>
                        </tr>

                        <tr>
                          <td>Strength Member</td>
                          <td>Single (0.5mm) FRP (Thermal / UV-Uncoated / UV-Coated)</td>
                        </tr>

                        <tr>
                          <td>Outer Jacket</td>
                          <td>PE Black Color</td>
                        </tr>

                        <tr>
                          <td>Max. Tensile Strength (Short Term)</td>
                          <td>100 N</td>
                        </tr>

                        <tr>
                          <td>Crush Resistance (Short Term)</td>
                          <td>250 N / 10 cm</td>
                        </tr>

                        <tr>
                          <td>Impact Resistance</td>
                          <td>10 N @ 0.5 m</td>
                        </tr>

                        <tr>
                          <td>Min. Bending Radius (Long Term)</td>
                          <td>20D (D = Cable Diameter mm)</td>
                        </tr>

                        <tr>
                          <td>Test Standard Requirement</td>
                          <td>Change in attenuation ≤0.05 dB/km as per IEC Standards</td>
                        </tr>

                        <tr>
                          <td>Cable Diameter</td>
                          <td>4.5 / 4.7 / 5 mm</td>
                        </tr>

                        <tr>
                          <td>Nominal Cable Weight</td>
                          <td>Approx. 16 kg/km</td>
                        </tr>

                        <tr>
                          <td>Packing Length</td>
                          <td>0.5 / 1 km ±5%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
              }

            ].map((section, i) => (
              <details className="acc" open={i === 0} key={section.title}>
                <summary className="acc-sum">
                  <span className="acc-title">{section.title}</span>
                </summary>
                <div className="acc-content">{section.content}</div>
              </details>
            ))}
          </div>
        )}


        {/* ORDERING remains unchanged */}

      </section>

      {/* Similar products — primary gradient section */}
      <section className="container similar-wrap similar--pro">
        <div className="similar-head">
          <h3>Similar products</h3>
        </div>


        <div className="s-grid">
          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img src={media_fiber_cable_webp} loading="lazy" alt="Optronix Platinum" /></div>
            <div className="s-body">
              <h4 className="s-title">Optronix Platinum</h4>
              <p className="s-desc">Premium outdoor optical cable series.</p>
            </div>
            <Link to="/optronix-fiber/optronix-platinum" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
<<<<<<< HEAD
            <div className="s-media"><img src={media_Drop_cable__webp} loading="lazy" alt="Optronix Drop Cable" /></div>
=======
            <div className="s-media"><img src={mediaUrl.image("drop cable .webp")} loading="lazy" alt="Optronix Drop Cable" /></div>
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
            <div className="s-body">
              <h4 className="s-title">Optronix Drop Cable</h4>
              <p className="s-desc">FTTH drop cable options.</p>
            </div>
            <Link to="/optronix-fiber/optronix-drop-cable" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
<<<<<<< HEAD
            <div className="s-media"><img src={media_NEO_Series_Fiber_webp} loading="lazy" alt="Optronix NEO" /></div>
=======
            <div className="s-media"><img src={mediaUrl.image("neo series fiber.webp")} loading="lazy" alt="Optronix NEO" /></div>
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
            <div className="s-body">
              <h4 className="s-title">Optronix NEO</h4>
              <p className="s-desc">High-density NEO series fiber.</p>
            </div>
            <Link to="/optronix-fiber/optronix-neo" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
<<<<<<< HEAD
            <div className="s-media"><img src={media_Gold_series_fiber__webp} loading="lazy" alt="Optronix Gold" /></div>
=======
            <div className="s-media"><img src={mediaUrl.image("gold series fiber .webp")} loading="lazy" alt="Optronix Gold" /></div>
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
            <div className="s-body">
              <h4 className="s-title">Optronix Gold</h4>
              <p className="s-desc">Ruggedized cable for harsh environments.</p>
            </div>
            <Link to="/optronix-fiber/optronix-gold" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="lb" role="dialog" aria-modal="true" aria-label="Product image (zoomed)" onClick={closeLightbox}>
          <div className="lb__dialog" onClick={(e) => e.stopPropagation()}>
            <button className="lb__close" aria-label="Close image" onClick={closeLightbox}>×</button>
            <img className="lb__img" src={lightboxSrc} loading="lazy" alt="Zoomed product" />
          </div>
        </div>
      )}
    
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Optronix Drop Cable"
      /></div>
  );
};

export default Optronixfiberproducttwo;
