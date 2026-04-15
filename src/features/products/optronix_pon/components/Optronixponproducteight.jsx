import media_OP100P4_webp from '../../../../assets/img2/img/OP100P4.webp';
import media_wifi8_removebg_preview_webp from '../../../../assets/img2/img/wifi8-removebg-preview.webp';
import media_op821GwV_Dp_webp from '../../../../assets/img2/img/op821GwV-Dp.webp';
import media_OP821GWV_D_removebg_preview_webp from '../../../../assets/img2/img/OP821GWV-D-removebg-preview.webp';
import media_Op821GWV_webp from '../../../../assets/img2/img/Op821GWV.webp';
import media_OP821GW_webp from '../../../../assets/img2/img/OP821GW.webp';
import media_op841gwvd_pdf from '../../../../assets/img2/img/op841gwvd.pdf';






import React, { useState, useEffect } from 'react';
import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';

<<<<<<< HEAD
// remove subz2c, subw1c, sub82c, media_OP100P4_webp imports
=======
// remove subz2c, subw1c, sub82c, mediaUrl.image("op100p4.webp") imports
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
import ProductLeadModal from '../../../../components/common/ProductLeadModal';



const Optronixponproducteight = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [productImage] = useState(media_wifi8_removebg_preview_webp);
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
    document.title = 'Deviser LS310 Optical Light Source | Fiber Optic FTTx Tester';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'The Optronix Deviser LS310 Series provides stable, high-precision multi-wavelength laser output for FTTx/PON testing. Features auto-ID pairing with Deviser OPMs and 40+ hours battery life.';

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
      document.title = 'Deviser LS310 Optical Light Source | Fiber Optic FTTx Tester';
    };
  }, []);
  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    if (lightboxOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  // Light mosaic background using your images (no S1Vbanner)
  const mosaicBG = (alpha = 0.92) => {
<<<<<<< HEAD
    const imgs = [media_op821GwV_Dp_webp, media_OP821GWV_D_removebg_preview_webp, media_Op821GWV_webp, media_OP821GW_webp];
=======
    const imgs = [mediaUrl.image("op821gwv-dp.webp"), mediaUrl.image("op821gwv-d-removebg-preview.webp"), mediaUrl.image("op821gwv.webp"), mediaUrl.image("op821gw.webp")];
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
    return {
      // backgroundImage:
      //   `linear-gradient(180deg, rgba(255,255,255,${alpha}) 0%, rgba(255,255,255,${alpha}) 100%), ` +
      //   `url(${imgs[0]}), url(${imgs[1]}), url(${imgs[2]}), url(${imgs[3]})`,
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
          <Link to="/optronix-pon" style={{ color: "#333", textDecoration: "none" }}>Products</Link>

          <span className="sep">/</span>
          <span className="current">OPTRONIX OP-841GWV-DG</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}


              <h1 className="hero-title">OP-841GWV-DGB</h1>
              <p className="hero-desc">
                The OP841GWV is a dual-mode XPON ONU with flexible deployment, advanced WiFi, and easy plug-and-play
                installation—perfect for cost-effective fiber solutions.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(media_op841gwvd_pdf, "_blank")}>
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
                <img src={productImage} loading="lazy" alt="Product" />
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
            <button className={`tab ${activeTab === 'ordering' ? 'active' : ''}`} onClick={() => setActiveTab('ordering')}>Ordering</button>
          </div>




        </div>
      </section>

      {/* PANELS */}
      <section className="container">
        {activeTab === 'overview' && (
          <div className="panel-grid">
            <div className="panel" style={mosaicBG(0.92)}>
              <h3 className="panel-title">Key Highlights</h3>
              <ul className="feature-list">
                <li><strong>XPON Dual Mode</strong> — EPON/GPON auto-detection and configuration.</li>
                <li><strong>High-performance WiFi</strong> — Dual band 802.11n/ac with enhanced FEM.</li>
                <li><strong>Comprehensive QoS & Management</strong> — IPv4/IPv6, full HGU management.</li>
                <li><strong>Plug and Play</strong> — Auto-configuration for quick install.</li>
              </ul>


              <h4 className="panel-title-sm">Performance at a glance</h4>
              <div className="perf-table-wrap" style={{ marginTop: '12px' }}>
                <table className="perf-table">
                  <tbody>
                    <tr><th>Interfaces</th><td>4×GE + 1×POTS + WiFi 5</td></tr>
                    <tr><th>WiFi</th><td>2.4G 2×2 + 5G 2×2, up to 1.167 Gbps</td></tr>
                    <tr><th>XPON</th><td>EPON PX20+ / GPON Class B+, 20 km</td></tr>
                    <tr><th>Power</th><td>12 W, DC 12V/1.5A adaptor</td></tr>
                  </tbody>
                </table>
              </div>


              <h4 className="panel-title-sm">At a glance</h4>
              <div className="perf-table-wrap" style={{ marginTop: '12px' }}>
                <table className="perf-table">
                  <tbody>
                    <tr><th>Chassis</th><td>1U 19″ Standard Box</td></tr>
                    <tr><th>Uplink</th><td>4×RJ45 GE + 4×SFP/SFP+</td></tr>
                    <tr><th>EPON</th><td>4×EPON ports (SFP slots)</td></tr>
                    <tr><th>Split ratio</th><td>1:64 per port</td></tr>
                  </tbody>
                </table>
              </div>

            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap" style={{ marginTop: '12px' }}>
                  <table className="perf-table">
                    <tbody>
                      <tr><th>Backplane bandwidth</th><td>128 Gbps</td></tr>
                      <tr><th>Forwarding rate</th><td>71.424 Mpps</td></tr>
                      <tr><th>Max split / ONUs</th><td>1:64 per PON (256 ONUs total)</td></tr>
                      <tr><th>Power consumption</th><td>30 W</td></tr>
                    </tbody>
                  </table>
                </div>

              </div>


            </div>
          </div>
        )}




        {activeTab === 'specs' && (
          <div className="panel" style={mosaicBG(0.92)}>
            <div className="acc-group">

              {/* Hardware Parameter */}
              <details className="acc" open>
                <summary className="acc-sum">
                  <span className="acc-title">Hardware Parameter</span>
                </summary>
                <div className="acc-content">
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr><th colSpan="2">Hardware Parameter</th></tr>
                        <tr><th>Parameter</th><th>Value</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Dimension</td><td>178mm×120mm×30mm (L×W×H)</td></tr>
                        <tr><td>Net weight</td><td>0.3KG</td></tr>
                        <tr><td>Operating condition</td><td>Operating temp: -10°C~+55°C<br />Operating humidity: 5%~95% (non-condensing)</td></tr>
                        <tr><td>Storing condition</td><td>Storing temp: -40°C~+70°C<br />Storing humidity: 5%~95% (non-condensing)</td></tr>
                        <tr><td>Power adapter</td><td>DC 12V/1.5A</td></tr>
                        <tr><td>Power supply</td><td>12W</td></tr>
                        <tr><td>Interface</td><td>4GE+1POTS+WiFi 5</td></tr>
                        <tr><td>LED Indicators</td><td>PWR, LOS, PON, 2.4G, 5G, PHONE</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

              {/* Interface Parameter */}
              <details className="acc">
                <summary className="acc-sum">
                  <span className="acc-title">Interface Parameter</span>
                </summary>
                <div className="acc-content">
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr><th colSpan="2">Interface Parameter</th></tr>
                        <tr><th>Parameter</th><th>Value</th></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PON interface</td>
                          <td>
                            1×XPON port (EPON PX20+ & GPON Class B+)<br />
                            SC single mode, SC/UPC connector<br />
                            TX optical power: 0~+4dBm • RX sensitivity: -27dBm<br />
                            Overload optical power: -3dBm (EPON) / -8dBm (GPON)<br />
                            Transmission distance: 20KM • Wavelength: TX 1310nm, RX 1490nm
                          </td>
                        </tr>
                        <tr>
                          <td>WIFI interface</td>
                          <td>
                            IEEE802.11b/g/n/ac<br />
                            2.4GHz: 2.4000~2.4835GHz; 5.0GHz: 5.150~5.825GHz<br />
                            2.4G 2×2 + 5.8G 2×2, 5dBi antenna, up to 1.167Gbps, Multiple SSID<br />
                            TX: 2.4G 23dBm; 5G 27dBm • RX: 2.4G HT40-MCS7 -72dBm; 5G VHT80 MCS9 -63dBm
                          </td>
                        </tr>
                        <tr><td>LAN interface</td><td>4×GE, Auto-negotiation RJ45 connectors</td></tr>
                        <tr><td>POTS interface</td><td>1×FXS, RJ11 connector</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

              {/* Function Data */}
              <details className="acc">
                <summary className="acc-sum">
                  <span className="acc-title">Function Data</span>
                </summary>
                <div className="acc-content">
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr><th colSpan="2">Function Data</th></tr>
                        <tr><th>Function</th><th>Description</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>O&M</td><td>OAM/OMCI, Telnet, WEB, TR069; Full HGU management by OPTRONIX OLT</td></tr>
                        <tr><td>Connect Mode</td><td>Bridge / Router / Bridge+Router mixed</td></tr>
                        <tr><td>QoS</td><td>4 queues; SP, WRR, 802.1P, DSCP</td></tr>
                        <tr><td>Data Service</td><td>Non-blocking switching; 2K MAC; VLAN tag/untag/transparent/trunk/translation; port monitor/mirror/rate limit/SLA; Auto MIDX; IGMP v1/v2/v3 and MLD v1/v2 snooping/proxy</td></tr>
                        <tr><td>Wireless</td><td>802.11b/g/n/ac; Auth: WEB/WAP-PSK(PTKIP)/WAP2-PSK(AES); DSSS/CCK/OFDM; BPSK/QPSK/16QAM/64QAM</td></tr>
                        <tr><td>VoIP</td><td>SIP, IMS SIP; G.711a/u, G.722, G.729; Echo cancel, VAD/CNG, DTMF Relay, T.30/T.38 FAX; Caller ID/Waiting/Forward/Transfer/Hold/3-way; GR-909 line test</td></tr>
                        <tr><td>L3</td><td>IPv4/IPv6 dual stack; DHCP/PPPoE/Static; Static route, DHCP Server; NAT/DMZ/DDNS/Virtual Server</td></tr>
                        <tr><td>Security</td><td>Firewall; MAC/URL-based filtering; ACL</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

            </div>
          </div>
        )}


        {activeTab === 'ordering' && (
          <div className="stack">
            <div className="panel" style={mosaicBG(0.92)}>
              <h3 className="panel-title">Ordering Information</h3>
              <div className="table-wrapper">
                <table className="universal-table">
                  <thead>
                    <tr><th colSpan="3">Ordering Information</th></tr>
                    <tr>
                      <th>Product Name</th>
                      <th>Product Description</th>
                      <th>Accessories</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>OP841GWV-DGB</td>
                      <td>4GE+1POTS+WiFi5</td>
                      <td>AC‑DC power adaptor: DC12V / 1.5A</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: 12 }}>
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Get pricing and availability
                </button>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Similar products — primary gradient section */}
      <section className="container similar-wrap similar--pro">
        <div className="similar-head">
          <h3>Similar products</h3>

        </div>

        <div className="s-grid">
          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
<<<<<<< HEAD
            <div className="s-media"><img src={media_op821GwV_Dp_webp} loading="lazy" alt="OP821GWV-DGB" /></div>
=======
            <div className="s-media"><img src={mediaUrl.image("op821gwv-dp.webp")} loading="lazy" alt="OP821GWV-DGB" /></div>
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
            <div className="s-body">
              <h4 className="s-title">OP821GWV-DGB</h4>
              <p className="s-desc">XPON ONU with dual-band WiFi.</p>
            </div>
            <Link to="/optronix-pon/OP821GWVDGB" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
<<<<<<< HEAD
            <div className="s-media"><img src={media_OP821GWV_D_removebg_preview_webp} loading="lazy" alt="OP821GWV-D" /></div>
=======
            <div className="s-media"><img src={mediaUrl.image("op821gwv-d-removebg-preview.webp")} loading="lazy" alt="OP821GWV-D" /></div>
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
            <div className="s-body">
              <h4 className="s-title">OP821GWV-D</h4>
              <p className="s-desc">ONU with POTS and WiFi.</p>
            </div>
            <Link to="/optronix-pon/OP821GWVD" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
<<<<<<< HEAD
            <div className="s-media"><img src={media_Op821GWV_webp} loading="lazy" alt="OP821GWV" /></div>
=======
            <div className="s-media"><img src={mediaUrl.image("op821gwv.webp")} loading="lazy" alt="OP821GWV" /></div>
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
            <div className="s-body">
              <h4 className="s-title">OP821GWV</h4>
              <p className="s-desc">HGU with 4GE and single‑band WiFi.</p>
            </div>
            <Link to="/optronix-pon/OP821GWV" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
<<<<<<< HEAD
            <div className="s-media"><img src={media_OP821GW_webp} loading="lazy" alt="OP801GW" /></div>
=======
            <div className="s-media"><img src={mediaUrl.image("op821gw.webp")} loading="lazy" alt="OP801GW" /></div>
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
            <div className="s-body">
              <h4 className="s-title">OP801GW</h4>
              <p className="s-desc">Entry‑level Gigabit WiFi ONU.</p>
            </div>
            <Link to="/optronix-pon/OP801GW" className="s-cta">
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
        pageName="OP-841GWV-DGB"
      /></div>
  );
};

export default Optronixponproducteight;