import { mediaUrl } from '../../config/media';
// import React from 'react';
// import './Optronixponproduct.css';
// import '../../pages/page.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("product_12_img-removebg-preview.webp") from "../img/product_12_img-removebg-preview.png";
// import optronixDiagram821GWV from "../img/product 12 diagram 2.png"

// import mediaUrl.image("op821gwv-dp.webp") from '../img/op821GwV-Dp.png';
// import mediaUrl.image("op821gwv-d-removebg-preview.webp") from '../img/OP821GWV-D-removebg-preview.png';
// import mediaUrl.image("op821gwv.webp") from '../img/Op821GWV.png';
// import mediaUrl.image("op821gw.webp") from '../img/OP821GW.png';
// import op08pdf from "../img/OP100P8G.pdf";
// // import featureImg1 from "../img/55.png";
// // import featureImg2 from "../img/10.jpg";
// // import featureImg3 from "../img/AE1001 PORTABLE OTDR.png"; // Ensure correct path
// // import featureImg4 from "../img/9.jpg";
// // import featureImg5 from "../img/33.jpg";
// // import eponoltf1 from "../img/epon olt.jpeg";
// // import eponoltf2 from "../img/eponolt1.jpeg";

// const Optronixponproducttwelve = () => {
//   // const [productImage, setProductImage] = useState(mediaUrl.image("product_12_img-removebg-preview.webp"));
//   // const [activeIcon, setActiveIcon] = useState(null);

//   // const handleIconClick = (image, icon) => {
//   //   setProductImage(image);
//   //   setActiveIcon(icon);
//   // };       

//   return (
//     <>
//       {/* Product Top Section */}
//       <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">OP801GW</h1>
//       <p className="hero-split__desc">
//         Optronix OP-100P8 series EPON OLTs are compact, high-performance 1U rack-mount devices ideal for small spaces. They support Triple-Play, VPN, IP Camera, Enterprise LAN, and ISP applications. The OP-100P8 offers 8 GE (copper), 8 SFP uplink slots, and 8 EPON OLT ports, supporting up to 512 ONUs (64 per port).
//       </p>

//       <div className="hero-split__cta">
//         <button
//           className="btn-pill btn-primary"
//           onClick={() => window.open("/contact", "_self")}
//         >
//           Enquire Now
//         </button>
//         <button
//           className="btn-pill btn-outline"
//           onClick={() => window.open(op08pdf, "_blank")}
//         >
//           Download Catalog
//         </button>
//       </div>
//     </div>

//     {/* Right: image */}
//     <div className="hero-split__image-wrap">
//       <img
//         src={mediaUrl.image("product_12_img-removebg-preview.webp")} /* or use any of your images like productImage2 */
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>

//       {/* Application Chart */}
//       <div className="highlights-section">
//         <h2 className="highlights-title" style={{fontSize: "24px", fontWeight: "600", marginLeft: "55px"}}>Application Chart</h2>
//         <img src={optronixDiagram821GWV} alt="OP821GWV Application Chart" style={{width: "100%", maxWidth: "700px", display: "block", margin: "0 auto"}} />
//       </div>

//       {/* Technical Specifications Table */}

//         <div className="table-wrapper">

//           <table className="universal-table">
//             <thead>
//        <tr>
//         <th colSpan={2}>Hardware Parameter</th>
//        </tr>

//             </thead>
//             <tbody>
//               <tr>
//                 <td>Dimension</td>
//                 <td>120mmx78mmx30mm(LxWxH)</td>
//               </tr>
//               <tr>
//                 <td>Net Weight</td>
//                 <td>0.15kg</td>
//               </tr>
//               <tr>
//                 <td>Operating Condition</td>
//                 <td>
//                   Operating temp:-10 ~ +55°C<br />
//                   Operating humidity: 5~95%(non-condensing)<br />

//                 </td>
//               </tr>
//               <tr>
//                 <td>Storing Condition</td>
//                 <td>
//                   Storing temp: -40 ~ +70°C<br />
//                   Storing humidity: 5 ~ 95%(non-condensing)<br />
//                   <br />

//                 </td>
//               </tr>
//               <tr>
//                 <td>Power adapter</td>
//                 <td>DC 12V, 1A, external AC-DC power adaptor</td>
//               </tr>
//               <tr>
//                 <td>Power supply</td>
//                 <td>less than or equal to 6W</td>
//               </tr>
//               <tr>
//                 <td>Interfaces</td>
//                 <td>1GE+WIFI4</td>
//               </tr>
//               <tr>
//                 <td>Indicators</td>
//                 <td>POWER, LOS, PON, LAN, WIFI</td>
//               </tr>

//             </tbody>
//           </table>
//         </div>


//       {/* Features/Functions Section */}

//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th colSpan={2}>Function Data</th>
//               </tr>

//             </thead>
//             <tbody>
//               <tr><td>PON mode</td><td>XPON Dual mode, Can access to mainstream EPON/GPON OLTs</td></tr>
//               <tr><td>Software mode</td><td>Routing mode</td></tr>
//               <tr><td>WiFi</td><td>WiFi Authentication:WEP/WAP-PSK(TKIP)/WAP2-PSK(AES)<br></br>Support: multiple SSID</td></tr>
//               <tr><td>Firewall</td><td>DDOS, Filtering Based on ACL/MAC/URL</td></tr>
//               <tr><td>Layer2</td><td>802.1D&B02.1ad bridge, 802.1p Cos, 802.1Q VLAN.</td></tr>
//               <tr><td>Layer3</td><td>IPv4/IPv6, DHCP Client/Server, PPPoE, NAT, DMZ, DDNS</td></tr>
//               <tr><td>Multicast</td><td>IGMP v1/v2/v3, IGMP snooping</td></tr>
//               <tr><td>Security</td><td>Flow & Storm control, Loop Detection</td></tr>
//               <tr><td>O&M</td><td>WEB/TELNET/OAM/OMCI/TR069</td></tr>

//             </tbody>
//           </table>

//         {/* Layer 2 Features */}
//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th colSpan={2}>Interface Parameter</th>
//               </tr>

//             </thead>
//             <tbody>
//               <tr rowSpan={3}><td >PON interface</td><td>1 XPON port(EPON PX20+ & GPON Class B+)<br></br>SC single mode, SC/UPC connector<br></br>TX optical power: 0~+4dBm<br></br>RX sensitivity: -27dBm<br></br>Overload optical power: -3dBm(EPON) or ~ 8dBm(GPON)<br></br>Transmission distance: 20KM</td></tr>
//               <tr><td>LAN interface</td><td>1°GE Auto-neogotiation RJ45 ports</td></tr>
//               <tr><td>WiFi interface</td><td>IEEE802.11b/g/n(TX power:17dBm/16dBm/15dBm),300Mbps<br></br>Support 13 Channels</td></tr>
//               <tr><td>Layer 2 Features</td><td>Support Dynamic Bandwidth Allocation (DBA)</td></tr>
//               <tr><td>Layer 2 Features</td><td>Support ONU Auto-discovery/link detection/remote Upgrade of Software</td></tr>
//               <tr><td>Layer 2 Features</td><td>Support VLAN division and User Separation to avoid Broadcast Storm</td></tr>
//               <tr><td>Layer 2 Features</td><td>Support Various LLID Configuration and Single LLID Configuration</td></tr>
//               <tr><td>Layer 2 Features</td><td>Different User and Different Service Could Provide Different QoS by Means of Different LLID Channels</td></tr>
//             </tbody>
//           </table>
//         </div>



//       </div>

//       {/* Ordering Information Table */}

//         <div className="table-wrapper">

//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th colSpan={2}>Ordering Information</th>
//               </tr>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Product Description</th>
//                 <th>Accessories</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>OP801GW</td>
//                 <td>1GE+WiFi 4</td>
//                 <td>AC-DC power adaptor: DC12V/1A</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//        <div className='product_s1v1_product'>
//   <div className='product_s1v1_product1'>
//     <img className='product_s1v1_img' src={mediaUrl.image("op821gwv-dp.webp")} alt="Z2C" />
//     <h3 className='products1v_name_option'>OP821GWV-DGB</h3>
//     <Link to="/optronix-pon/OP821GWVDGB" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product2'>
//     <img className='product_s1v1_img' src={mediaUrl.image("op821gwv-d-removebg-preview.webp")} alt="82C+" />
//     <h3 className='products1v_name_option'>OP821GWV-D</h3>
//     <Link to="/optronix-pon/OP821GWVD" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product3'>
//     <img className='product_s1v1_img' src={mediaUrl.image("op821gwv.webp")} alt="W1C" />
//     <h3 className='products1v_name_option'>OP821GWV</h3>
//     <Link to="/optronix-pon/OP821GWV" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product4'>
//     <img className='product_s1v1_img' src={mediaUrl.image("op821gw.webp")} alt="FC8R" />
//     <h3 className='products1v_name_option'>OP801GW</h3>
//     <Link to="/optronix-pon/OP801GW" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   </div>
//     </>
//   );
// };

// export default Optronixponproducttwelve;




import React, { useState, useEffect } from 'react';

import '../index.css';
import '../../pages/page.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../common/ProductLeadModal';

// remove subz2c, subw1c, sub82c, mediaUrl.image("op100p4.webp") imports
const Optronixponproducttwelve = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("product_12_img-removebg-preview.webp"));
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
  useEffect(() => {
    document.title = 'Optronix: OP801GW XPON ONT with Wi-Fi | 1GE GPON Router';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix offers the OP801GW XPON ONT Router. This 1GE GPON/EPON terminal provides high-speed FTTH triple-play services with built-in 300Mbps Wi-Fi (802.11n)';

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
      document.title = 'Optronix: OP801GW XPON ONT with Wi-Fi | 1GE GPON Router';
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
    const imgs = [mediaUrl.image("op821gwv-dp.webp"), mediaUrl.image("op821gwv-d-removebg-preview.webp"), mediaUrl.image("op821gwv.webp"), mediaUrl.image("op821gw.webp")];
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
          <span className="current">OPTRONIX OP-801GW</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}






              <h1 className="hero-title">OP-801GW</h1>
              <p className="hero-desc">
                The OP801GW is a highly reliable 1GE + WiFi 4 XPON ONT designed primarily for FTTH and SOHO access requirements. It is based on a high-performance Realtek chip solution and supports both Layer 2 and Layer 3 functions.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("op801gw.pdf"), "_blank")}>
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

          </div>






        </div>
      </section>

      {/* PANELS */}
      <section className="container">
        {activeTab === 'overview' && (
          <div className="panel-grid">
            <div className="panel" style={mosaicBG(0.92)}>
              <h3 className="panel-title">Key Product Specifications (OP801GW)</h3>
              <ul className="feature-list">
                <li><strong>XPON Dual Mode:</strong> Automatically compatible with both EPON (IEEE802.3ah) and GPON (ITU-T G.984.X) OLTs.</li>
                <li><strong>Data Ports:</strong> Features 1 Gigabit Ethernet (GE) auto-adaptive port.</li>
                <li><strong>Integrated Wi-Fi:</strong> Built-in Wi-Fi 4 (802.11b/g/n) supporting up to 300Mbps wireless speed.</li>
                <li><strong>Operating Modes:</strong> Supports flexible Routing and Bridging modes (Layer 2/Layer 3 functions).
                  <li><strong>Security:</strong> Robust Firewall functionality (DDOS, ACL/MAC/URL Filtering) and Rogue ONU Detection.</li></li>
                <li><strong>Management:</strong> Multiple management options including WEB, TELNET, OMCI, and TR069.</li>
                <li><strong>Application:</strong> Ideal solution for FTTH (Fiber to the Home) and SOHO broadband access.</li>
              </ul>





            </div>

            <div className="side-stack">


              <h4 className="panel-title-sm">Performance at a glance</h4>

              <div className="perf-table-wrap" style={{ marginTop: '12px' }}>
                <table className="perf-table">
                  <tbody>
                    <tr><th> Dimension </th><td>120mm x 78mm x 30mm(L X W X H)</td></tr>
                    <tr><th> Net Weight</th><td> 0.15kg</td></tr>
                    <tr><th> Power Supply</th><td> less than 6W</td></tr>
                    <tr><th>Interface</th><td>1GE+WiFi14</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}




        {activeTab === 'specs' && (
          <div className="panel" style={mosaicBG(0.92)}>
            <div className="acc-group">
              {/* 1. Hardware Parameter */}
              <details className="acc" open>
                <summary className="acc-sum">
                  <span className="acc-title">Interface & PON Parameters</span>
                </summary>
                <div className="acc-content">
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr><th colSpan="2">Interface & PON Parameters</th></tr>
                        <tr><th>Parameter</th><th>Specification</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Product Type</td><td>1*XPON + 1GE + WiFi 4 ONT</td></tr>
                        <tr><td>PON Interface</td><td>1 XPON port</td></tr>
                        <tr>
                          <td>PON Mode</td>
                          <td>

                            XPON Dual mode (Auto-access to EPON/GPON OLTs)</td>
                        </tr>
                        <tr>
                          <td>PON Standard</td>
                          <td>EPON PX20+ & GPON Class B+</td>
                        </tr>
                        <tr><td>Connector Type</td><td>SC single mode, SC/UPC connector</td></tr>
                        <tr><td>Wavelength</td><td>TX 1310nm, RX 1490nm</td></tr>
                        <tr><td>TX Optical Power</td><td>0~+4dBm</td></tr>
                        <tr><td>RX Sensitivity</td><td>−27 dBm</td></tr>
                        <tr><td>Overload Optical Power</td><td>−3 dBm (EPON) or -8 dBm (GPON)</td></tr>
                        <tr><td>Transmission Distance</td><td>20km</td></tr>
                        <tr><td>LAN Interface</td><td>1*GE Auto-negotiation RJ45 port</td></tr>
                        <tr><td>WiFi Interface</td><td>IEEE802.11b/g/n (300Mbps)</td></tr>
                        <tr><td>Wi-Fi Channels</td><td>Supports 13 Channels</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

              {/* 2. Interface Parameter */}
              <details className="acc">
                <summary className="acc-sum">
                  <span className="acc-title">Functional & Network Features</span>
                </summary>
                <div className="acc-content">
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr><th colSpan="2">Functional & Network Features</th></tr>
                        <tr><th>Feature Category</th><th>Supported Functions/Protocols</th></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>PON Mode</td>
                          <td>
                            XPON Dual Mode (EPON/GPON Auto-access)
                          </td>
                        </tr>
                        <tr>
                          <td>Software Mode</td>
                          <td>
                            Routing mode
                          </td>
                        </tr>
                        <tr>
                          <td>Layer 3 (L3)</td>
                          <td>IPv4/IPv6, DHCP Client/Server, PPPOE, NAT, DMZ, DDNS</td>
                        </tr>
                        <tr>
                          <td>Layer 2 (L2)</td>
                          <td>802.1D & 802.1ad bridge, 802.1p Cos, 802.1Q VLAN </td>
                        </tr>
                        <tr>
                          <td>Security</td>
                          <td>Flow & Storm control, Loop Detection</td>
                        </tr>
                        <tr>
                          <td>Multicast</td>
                          <td>IGMP v1/v2/v3, IGMP snooping </td>
                        </tr>
                        <tr>
                          <td>Firewall</td>
                          <td>DDOS, Filtering Based on ACL/MAC/URL </td>
                        </tr>
                        <tr>
                          <td>WiFi Auth.</td>
                          <td>WEP/WAP-PSK(TKIP)/WAP2-PSK(AES), supports multiple SSID</td>
                        </tr>
                        <tr>
                          <td>O&M</td>
                          <td>WEB/TELNET/OAM/OMCI/TR069</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

              {/* 3. Function Data */}

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
            <div className="s-media"><img src={mediaUrl.image("op821gwv-dp.webp")} loading="lazy" alt="OP821GWV-DGB" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("op821gwv-d-removebg-preview.webp")} loading="lazy" alt="OP821GWV-D" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("op821gwv.webp")} loading="lazy" alt="OP821GWV" /></div>
            <div className="s-body">
              <h4 className="s-title">OP821GWV</h4>
              <p className="s-desc">HGU with 4GE and dual‑band WiFi.</p>
            </div>
            <Link to="/optronix-pon/OP821GWV" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img src={mediaUrl.image("op821gw.webp")} loading="lazy" alt="OP801GW" /></div>
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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pageName="Optronix PON - OP801GW"
      />
    </div>
  );
};

export default Optronixponproducttwelve;