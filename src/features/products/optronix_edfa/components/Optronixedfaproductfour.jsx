import { mediaUrl } from '../../../../config/media';
import React, { useState, useEffect, useCallback } from 'react';

import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import ProductLeadModal from '../../../../components/common/ProductLeadModal';


const Optronixedfaproductfour = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("CE1 619M.png"));
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

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    if (lightboxOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  // Light mosaic background using your images (no S1Vbanner)
  const mosaicBG = (alpha = 0.92) => {
    const imgs = [mediaUrl.image("CE0416M.png"), mediaUrl.image("CE0419M.png"), mediaUrl.image("PE0819M.png"), mediaUrl.image("PE1619M.png")];
    return {
      backgroundSize: 'cover, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
      backgroundPosition: 'center, left top, right top, left bottom, right bottom',
      backgroundRepeat: 'no-repeat'
    };
  };

  return (
    <div className="s1v-page">
      <Helmet>
        <title>Optronix CE1619M 1550nm CATV EDFA | 16 Port 19.5dBm Amplifier</title>
        <meta name="description" content="Optronix CE1619M: High-performance 1550nm CATV EDFA with 16 ports and 19.5dBm output. Features SNMP management, redundant power supply, and low noise for FTTH." />
        <meta name="keywords" content="Optronix CE1619M, 19.5dBm EDFA, CATV EDFA, 16 Port Optical Amplifier, 1550nm EDFA, Optronix India, Fiber Optic Amplifier, SNMP EDFA, CATV Headend Equipment." />
      </Helmet>
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/optronixedfa" style={{ color: "#333", textDecoration: "none" }}>Products</Link>
          <span className="sep">/</span>
          <span className="current">CATV EDFA CE1619M</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              <h1 className="hero-title">CATV EDFA CE1619M</h1>
              <p className="hero-desc">
                Our CATV EDFA is a high-performance amplifier for 1550nm fiber transmission, delivering powerful, distortion-free output with excellent signal flatness for analog/digital TV, high-speed internet, and voice over long distances. With ultra-low noise, outstanding CSNR, and intelligent network monitoring (SNMP/Web/RS-232), it ensures carrier-grade reliability. Its compact rack-mount design, redundant power supply, and versatile configurations make it ideal for CATV headends, backbone, and broadband networks.
              </p>
              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
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
                <img loading="lazy" src={productImage} alt="CE1619M" />
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
            {[
              {
                title: "Key Highlights",
                content: (
                  <ul className="feature-list">
                    <li>PD/AC & DC/AC Redundant Power are used for Better Maximum Output Power Stability</li>
                    <li>Erbium Ytterbium Co-Doped Double Clad Fibre Technology</li>
                    <li>Modern Design for Easy Maintenance & Management</li>
                    <li>Complete Redundant & Visual Alarm Function Supporting Both Indicator Light and Buzzer</li>
                    <li>One Touch Double Power Supply</li>
                    <li>Output Power Range -5 to +8 dBm is Adjustable</li>
                    <li>Standard Network Management Interface (SNMP) Support Web Management</li>
                  </ul>
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

        {activeTab === 'specs' && (
          <div className="panel" style={mosaicBG(0.92)}>
            {[
              {
                title: "Specifications",
                content: (
                  <div className="table-wrapper" style={{ marginTop: "40px" }}>
                    <div className="table-container">
                      <table className="universal-table">
                        <thead>
                          <tr><th colSpan="5">Technical Parameters</th></tr>
                        </thead>
                        <tbody>
                          <tr className="section-header">
                            <th>Item</th><th colSpan="4">Parameters</th>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>Wavelength</td><td colSpan="4">1550±15nm</td>
                          </tr>
                          <tr className="custom-table-bg-two">
                            <td>Optical Input Power</td><td colSpan="4">-3 ~ +10dBm</td>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>Optical Output Power Stability</td><td colSpan="4">±0.5dB</td>
                          </tr>
                          <tr className="custom-table-bg-two">
                            <td>Noise Figure</td><td colSpan="4">&lt;5.0dB</td>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>Return Loss (Input)</td><td colSpan="4">&gt;45dB</td>
                          </tr>
                          <tr className="custom-table-bg-two">
                            <td>Return Loss (Output)</td><td colSpan="4">&gt;45dB</td>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>Pump Leakage Input</td><td colSpan="4">&lt; -30dBm</td>
                          </tr>
                          <tr className="custom-table-bg-two">
                            <td>Optical Connector (Input/Output)</td><td colSpan="4">FC/APC, SC/APC</td>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>Power Source (AC/DC)</td><td colSpan="4">115~260V, Plug-in type Power</td>
                          </tr>
                          <tr className="custom-table-bg-two">
                            <td>Working Temperature</td><td colSpan="4">-5~+45°C</td>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>Size</td><td colSpan="4">19×1U×375mm</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
      </section>

      {/* Similar products */}
      <section className="container similar-wrap similar--pro">
        <div className="similar-head">
          <h3>Similar products</h3>
        </div>

        <div className="s-grid">
          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img loading="lazy" src={mediaUrl.image("CE0416M.png")} alt="CE0416M" /></div>
            <div className="s-body">
              <h4 className="s-title">CE0416M</h4>
              <p className="s-desc">CATV 4x16.5 dBm EDFA.</p>
            </div>
            <Link to="/optronix-edfa/CE0416M" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img loading="lazy" src={mediaUrl.image("CE0419M.png")} alt="CE0419M" /></div>
            <div className="s-body">
              <h4 className="s-title">CE0419M</h4>
              <p className="s-desc">High stability 4‑port model.</p>
            </div>
            <Link to="/optronix-edfa/CE0419M" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>
          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img loading="lazy" src={mediaUrl.image("PE0819M.png")} alt="PE0819M" /></div>
            <div className="s-body">
              <h4 className="s-title">PE0819M</h4>
              <p className="s-desc">8‑port PON EDFA.</p>
            </div>
            <Link to="/optronix-edfa/PE0819M" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>
          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img loading="lazy" src={mediaUrl.image("PE1619M.png")} alt="PE1619M" /></div>
            <div className="s-body">
              <h4 className="s-title">PE1619M</h4>
              <p className="s-desc">16‑port EDFA for large networks.</p>
            </div>
            <Link to="/optronix-edfa/PE1619M" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div className="lb" role="dialog" aria-modal="true" aria-label="Product image (zoomed)" onClick={closeLightbox}>
          <div className="lb__dialog" onClick={(e) => e.stopPropagation()}>
            <button className="lb__close" aria-label="Close image" onClick={closeLightbox}>×</button>
            <img loading="lazy" className="lb__img" src={lightboxSrc} alt="Zoomed product" />
          </div>
        </div>
      )}
    
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Optronix CE1619M 1550nm CATV EDFA"
      /></div>
  );
};

export default Optronixedfaproductfour;
