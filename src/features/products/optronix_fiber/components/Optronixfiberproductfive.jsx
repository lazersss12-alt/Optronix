import media_fiber_cable_webp from '../../../../assets/img2/img/fiber cable.webp';
import media_Drop_cable__webp from '../../../../assets/img2/img/Drop cable .webp';
import media_NEO_Series_Fiber_webp from '../../../../assets/img2/img/NEO Series Fiber.webp';
import media_Gold_series_fiber__webp from '../../../../assets/img2/img/Gold series fiber .webp';
import media_PLATINUMFIBER_pdf from '../../../../assets/img2/img/PLATINUMFIBER.pdf';
import media_GoldFibrediagram_webp from '../../../../assets/img2/img/GoldFibrediagram.webp';
import React, { useState, useEffect } from 'react';

import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';

import ProductLeadModal from '../../../../components/common/ProductLeadModal';

const Optronixfiberproductfive = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [productImage] = useState(media_fiber_cable_webp);
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
    document.title = 'Optronix PLATINUM Dual Tube Fibre Cable';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Buy Optronix PLATINUM SERIES Dual Tube Un-Armoured Fibre Cable (2-24 Core). G.652.D SMF, Jelly-Filled PBT tubes, FRP strength. Excellent for FTTx & LAN.';

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
      document.title = 'Optronix PLATINUM Dual Tube Fibre Cable';
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
          <span className="current">Optronix Platinum</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              <h1 className="hero-title">Optronix Platinum</h1>
              <p className="hero-desc">Engineered for Performance. Designed for Reliability. Built for India’s Networks. Experience superior optical transmission with the Optronix Platinum Series, a complete lineup of 2F to 24F Single-Mode G.652D optical fibre cables.</p>

              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
<<<<<<< HEAD
                <button className="btn btn-outline" onClick={() => window.open(media_PLATINUMFIBER_pdf, "_blank")}>
=======
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("platinumfiber.pdf"), "_blank")}>
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
            <button className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
              Overview
            </button>
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
              <li>ITU-T G.652D compliant single-mode fibre for stable long-distance communication</li>
              <li>Ultra-low attenuation: ≤0.4 dB/km @ 1310 nm, ≤0.2 dB/km @ 1550 nm</li>
              <li>Robust mechanical design with FRP strength members for tensile stability</li>
              <li>PBT loose tube construction filled with thixotropic jelly for excellent fibre protection</li>
              <li>Lining option: (L1) Black line on orange cable • (L2) Orange line on black cable</li>
              <li>UV-stable HDPE outer jacket ensures durability in harsh climates</li>
              <li>Operating temperature: −20°C to +70°C</li>
              <li>Low PMD and dispersion for high-speed applications</li>
              <li>Available in multiple fibre counts (2F–24F) to suit all deployment needs</li>
            </ul>
            <section className="overview-section" style={{ marginTop: 18 }}>
              <h3 className="section-heading">Schematic Diagram (Not to Scale)</h3>

              <div className="diagram-wrapper">
                <img loading="lazy"
<<<<<<< HEAD
                  src={media_GoldFibrediagram_webp}
=======
                  src={mediaUrl.image("goldfibrediagram.webp")}
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
                  alt="Flat Cable Schematic Diagram"
                  className="diagram-image"
                />
              </div>
            </section>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="panel" style={mosaicBG(0.92)}>
            <h3 className="panel-title">Fibre Characteristics (ITU-T Rec. G.652.D)</h3>

            {/* define sections once so markup is cleaner */}
            {[
              {
                title: 'Fibre Characteristics (ITU-T Rec. G.652.D)',
                content: (
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr><th colSpan="3">Fibre Characteristics (ITU-T Rec. G.652.D)</th></tr>
                        <tr><th>Parameter Category</th><th>Parameter</th><th>Specification</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Transmission</td><td>Attenuation @ 1310 nm</td><td>≤ 0.4 dB/km</td></tr>
                        <tr><td>Transmission</td><td>Attenuation @ 1550 nm</td><td>≤ 0.2 dB/km</td></tr>
                        <tr>
                          <td>Geometrical</td>
                          <td>Mode field diameter @ 1310 nm</td><td>9.2 ± 0.4 μm</td></tr>
                        <tr>
                          <td>Geometrical</td>
                          <td>Cladding Diameter</td><td>125±0.7 µm</td></tr>
                        <tr><td>Chromatic Dispersion</td><td>@ 1550 nm</td><td>≤18.0 ps/(nm.km)</td></tr>
                        <tr><td>Polarization Mode Dispersion</td><td>At Fibre Stage</td><td>≤0.2 ps/sqrt.km</td></tr>
                        <tr><td>Cut Off Wavelength</td><td>Fibre Cut Off Wavelength</td><td>≤1320 nm</td></tr>

                      </tbody>
                    </table>
                  </div>
                )
              },
              {
                title: 'Construction & Mechanical Characteristics',
                content: (
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr><th colSpan="2">Construction & Mechanical Characteristics</th></tr>
                        <tr><th>Parameter</th><th>Specifications</th></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Cable Type</td>
                          <td>
                            Dual Tube Un-Armoured Optical Fibre Cable
                          </td>
                        </tr>
                        <tr>
                          <td>Fibre Count Range</td>
                          <td>
                            2F to 24F
                          </td>
                        </tr>
                        <tr>
                          <td>Loose Tube Material</td>
                          <td>
                            PBT (Polybutylene Terephthalate)
                          </td>
                        </tr>
                        <tr>
                          <td>Tube Filling</td>
                          <td>
                            Thixotropic Jelly
                          </td>
                        </tr>
                        <tr>
                          <td>Strength Member</td>
                          <td>
                            2 Nos. 1.0 mm UV Coated FRP (Embedded in Sheath) + Glass Yarn
                          </td>
                        </tr>
                        <tr>
                          <td>Outer Jacket</td>
                          <td>
                            HDPE UV Black Colour
                          </td>
                        </tr>
                        <tr>
                          <td>Max. Tensile Strength</td>
                          <td>
                            350 N (Short Term)
                          </td>
                        </tr>
                        <tr>
                          <td>Crush Resistance</td>
                          <td>
                            1000 N/10 CM (Short Term)
                          </td>
                        </tr>
                        <tr>
                          <td>Operating Temperature</td>
                          <td>
                            -20∘C to +70∘C
                          </td>
                        </tr>
                        <tr>
                          <td>Nominal Cable Weight</td>
                          <td>
                            Approx. 40 kg/km
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
              },

            ].map((section, i) => (
              <details className="acc" open={i === 0} key={section.title}>
                <summary className="acc-sum">
                  <span className="acc-title">{section.title}</span>
                </summary>
                <div className="acc-content">
                  {section.content}
                </div>
              </details>
            ))}

          </div>
        )}

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
                <p className="s-desc">High‑density NEO series fiber.</p>
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
      </section>
    
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Optronix Platinum"
      /></div>
  );
};

export default Optronixfiberproductfive;
