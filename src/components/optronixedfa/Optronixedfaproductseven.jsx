import React, { useState, useEffect } from 'react';

import '../index.css';
import '../../pages/page.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../common/ProductLeadModal';

import op08 from "../img/PE3219M.png";

import subz2c from "../img/CE0416M.png";
import subw1c from "../img/CE0419M.png";
import sub82c from "../img/PE0819M.png";
import subfc8r from "../img/PE1619M.png";

const Optronixedfaproductseven = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(op08);
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
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
    const imgs = [subz2c, subw1c, sub82c, subfc8r];
    return {
      backgroundSize: 'cover, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
      backgroundPosition: 'center, left top, right top, left bottom, right bottom',
      backgroundRepeat: 'no-repeat'
    };
  };

  return (
    <div className="s1v-page">
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/optronixedfa" style={{ color: "#333", textDecoration: "none" }}>Products</Link>
          <span className="sep">/</span>
          <span className="current">PON EDFA PE3219M</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              <h1 className="hero-title">PON EDFA PE3219M</h1>
              <p className="hero-desc">
                Our WDM EDFA/PON EDFA is a high-performance optical amplifier that combines CATV and OLT signals, delivering powerful CATV output for integrated network applications. With low noise, wide dynamic range, and intelligent network management (SNMP, Web, RS-232), it ensures stable, long-distance transmission in FTTx and HFC networks. Its compact rack-mount design, redundant power options, and plug-and-play installation make it ideal for modern broadband access systems.
              </p>
              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
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
                <img src={productImage} alt="PE3219M" />
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
                    <li>8,16,32 uplink optical ports on OLT, 4 & 8 ports of PON and 1550nm CATV EDFA Combine out</li>
                    <li>Each output port is optical amplifier that built-in self-controlled CWDM</li>
                    <li>1550nm CATV output port equipped power adjustable 13/14/16dBm</li>
                    <li>Dual controlling interface port of the pump laser</li>
                    <li>SNMP Port & Plug-in SNMP system enable remote monitoring</li>
                    <li>Status indicator lights</li>
                    <li>High quality, backplane and flat laser</li>
                    <li>LCD displays the working parameters, functions and trouble alarm</li>
                    <li>Switch power supply works in the range of AC90V – 265V AC or -48V DC</li>
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
                            <td>Wavelength</td><td colSpan="4">1310nm / 1490nm / 1550nm</td>
                          </tr>
                          <tr className="custom-table-bg-two">
                            <td>CATV Wavelength</td><td colSpan="4">1550nm</td>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>CATV Input Power</td><td colSpan="4">-3 ~ +10dBm</td>
                          </tr>
                          <tr className="custom-table-bg-two">
                            <td>CATV Output Power</td><td colSpan="4">13/14/16dBm</td>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>CATV Noise Figure</td><td colSpan="4">&lt;5.0dB</td>
                          </tr>
                          <tr className="custom-table-bg-two">
                            <td>CATV Return Loss</td><td colSpan="4">&gt;45dB</td>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>CATV Output Ports</td><td colSpan="4">4 / 8</td>
                          </tr>
                          <tr className="custom-table-bg-two">
                            <td>Network Management</td><td colSpan="4">SNMP, Web, RS232</td>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>Optical Connector</td><td colSpan="4">FC/APC, SC/APC</td>
                          </tr>
                          <tr className="custom-table-bg-two">
                            <td>Power Supply</td><td colSpan="4">AC90V~265V or -48V DC</td>
                          </tr>
                          <tr className="custom-table-bg-one">
                            <td>Working Temperature</td><td colSpan="4">-5~+45°C</td>
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
            <div className="s-media"><img src={subz2c} alt="CE0416M" /></div>
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
            <div className="s-media"><img src={subw1c} alt="CE0419M" /></div>
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
            <div className="s-media"><img src={sub82c} alt="PE0819M" /></div>
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
            <div className="s-media"><img src={subfc8r} alt="PE1619M" /></div>
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
            <img className="lb__img" src={lightboxSrc} alt="Zoomed product" />
          </div>
        </div>
      )}
      <ProductLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pageName="Optronix EDFA - PE3219M"
      />
    </div>
  );
};

export default Optronixedfaproductseven;
