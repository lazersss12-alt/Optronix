import { mediaUrl } from '../../config/media';
// import React from 'react';
// import './Optronixponproduct.css';
// import '../../pages/page.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("op821gwv.webp") from '../img/Op821GWV.png'; // Replace with your actual image path
// import optronixDiagram821GWV from '../img/product 11 diagram.png'; // Replace with your actual image path
// import mediaUrl.image("op821gwv-dp.webp") from '../img/op821GwV-Dp.png';
// import mediaUrl.image("op821gwv-d-removebg-preview.webp") from '../img/OP821GWV-D-removebg-preview.png';
// import mediaUrl.image("op821gwv.webp") from '../img/Op821GWV.png';
// import mediaUrl.image("op821gw.webp") from '../img/OP821GW.png';
// import op08pdf from "../img/OP100P8G.pdf";
// const Optronixponproducteleven = () => {
//   return (
//     <>
//       {/* Product Top Section */}
//       <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">OP821GWV-DGB</h1>
//       <p className="hero-split__desc">
//         The OP821GWV is a dual-mode XPON ONU with flexible deployment, 
//         advanced WiFi, and easy plug-and-play installation—perfect for 
//         cost-effective fiber solutions.
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
//         src={mediaUrl.image("op821gwv.webp")} /* or use any of your images like productImage2 */
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>
//       {/* Application Chart */}
//       <div className="highlights-section">
//         <h2 className="highlights-title" style={{ marginLeft: '106px' }}>Application Chart</h2>
//         <img src={optronixDiagram821GWV} alt="OP821GWV Application Chart" style={{width: "100%", maxWidth: "700px", display: "block", margin: "0 auto"}} />
//       </div>
//       {/* Hardware Parameter & Function Data */}

//         <div className="table-wrapper">
//           {/* Hardware Parameter */}


//             <table className="universal-table">
//               <thead>
//                 <tr>
//                   <th colSpan={2}>Hardware Parameter</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr><td>Dimension</td><td>185mm × 120mm × 34mm (L × W × H)</td></tr>
//                 <tr><td>Net Weight</td><td>0.24kg</td></tr>
//                 <tr>
//                   <td>Operating Conditions</td>
//                   <td>
//                     Operating Temp: -10 ~ +55°C<br />
//                     Operating Humidity: 5 ~ 95% (non-Condensing)
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Storing Condition</td>
//                   <td>
//                     Operating Temp: -40 ~ +70°C<br />
//                     Operating Humidity: 5 ~ 95% (non-Condensing)
//                   </td>
//                 </tr>
//                 <tr><td>Power Adaptor</td><td>DC 12V, 1A External AC-DC Power Adaptor</td></tr>
//                 <tr><td>Power Supply</td><td>&lt;6W</td></tr>
//                 <tr><td>Interface</td><td>1GE+1FE+1POT+WiFi</td></tr>
//                 <tr><td>Indicators</td><td>PWR, PON, LOS, LAN1, LAN2, Phone, Pair, WiFi</td></tr>
//               </tbody>
//             </table>

//           {/* Function Data */}


//             <table className="universal-table" style={{ marginBottom: '20px' }}>
//               <thead>
//                 <tr>
//                   <th colSpan={2}>Function Data</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr><td>PON Mode</td><td>XPON Dual Mode, Can Access Mainstream EPON/GPON OLTs</td></tr>
//                 <tr><td>Uplink Mode</td><td>Bridging and Routing Mode</td></tr>
//                 <tr><td>Alarm</td><td>Support Dying Gasp, Port Loop Detect and Eth Port Loss</td></tr>
//                 <tr><td>VLAN</td><td>4K VLAN, VLAN tag, Untag, Transparent, Trunk, Translation Mode</td></tr>
//                 <tr><td>Multicast</td><td>Max Multicast Group 64, IGMPv1/v2/v3/Proxy/Snooping, MLD v1/v2</td></tr>
//                 <tr><td>QoS</td><td>Support 4 Queues, Support SP, WRR, 802.1P and DSCP</td></tr>
//                 <tr><td>L3</td><td>DHCP/PPPoE/Static IP, NAT, DHCPv6 Server, IPv4/IPv6 Static Route, IPv4/IPv6 Dual Stack</td></tr>
//                 <tr>
//                   <td>WiFi</td>
//                   <td>
//                     Authentication: WEP/WPA-PSK(TKIP)/WPA2-PSK(AES)<br />
//                     Multiple SSID and SSID Conceal<br />
//                     Wireless Channel Selection
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>VoIP</td>
//                   <td>
//                     SIP and IMS SIP<br />
//                     G.711a/u, G.722, G.729 Codec<br />
//                     Echo Cancellation, VAD/CNG, DTMF Relay<br />
//                     T.30/T.38 FAX<br />
//                     Caller Identification / Call Waiting / Call Forwarding / Call Transfer / Call Hold / 3-way Conference<br />
//                     Line Testing According to GR-909
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Security</td>
//                   <td>
//                     Flow &amp; Storm Control, Loop Detection<br />
//                     Filtering Based on ACL/MAC/URL
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>Management</td>
//                   <td>
//                     CTC OAM 2.1 and 3.0<br />
//                     ITU984.x OMCI<br />
//                     EMS/WEB/Telnet/CLI and Unified Network management of Optronix OLT
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>



//       {/* Interface Parameter */}



//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th colSpan={2}>Interface Parameter</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>PON Interface</td>
//                 <td>
//                   1*XPON Port (EPON PX20+ &amp; GPON Class B+)<br />
//                   SC Single Mode, SC/UPC Connector<br />
//                   TX Optical Power: 0 ~ +4dBm<br />
//                   RX Sensitivity: -27dBm<br />
//                   Overload Optical Power: -3dBm (EPON) or -8dBm (GPON)<br />
//                   Transmission Distance: 20km<br />
//                   Wavelength: TX 1310nm, RX 1490nm
//                 </td>
//               </tr>
//               <tr>
//                 <td>WiFi Interface</td>
//                 <td>
//                   Compliant with IEEE802.11b/g/n/ac<br />
//                   Operating Frequency: 2.400-2.4835GHz<br />
//                   2T2R, 2 External Antenna 5dBi<br />
//                   Support MIMO, Rate up to 300Mbps<br />
//                   Channel: 13<br />
//                   Modulation Type: DSSS, CCK and OFDM<br />
//                   Encoding Scheme: BPSK, QPSK, 16QAM and 64QAM
//                 </td>
//               </tr>
//               <tr>
//                 <td>User Interface</td>
//                 <td>
//                   1*GE+1FE, Auto-negotiation, RJ45 Connectors<br />
//                   1*POTS, RJ11 Connectors
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>



//       {/* Ordering Information */}

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
//                 <td>OP821GWV</td>
//                 <td>1GE+1FE+1POT+WiFi</td>
//                 <td>AC-DC Power Adaptor: DC 12V / 1A</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//          <div className='product_s1v1_product'>
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

//       {/* Contact Info (optional, as per image) */}
//       <div style={{textAlign: "center", margin: "30px 0 10px 0", color: "#A7402D", fontWeight: 600}}>
//         Contact Us For More Info: <a href="mailto:info@optronix.in" style={{color: "#A7402D"}}>info@optronix.in</a>
//       </div>
//     </>
//   );
// };

// export default Optronixponproducteleven;





import React, { useState, useEffect } from 'react';

import '../index.css';
import '../../pages/page.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../common/ProductLeadModal';

// remove subz2c, subw1c, sub82c, mediaUrl.image("op100p4.webp") imports
const Optronixponproducteleven = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("op821gwv.webp"));
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
    document.title = 'Optronix: OP821GWV Single Band XPON ONT | Wi-Fi 4 VoIP Gateway';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Buy the Optronix OP821GWV XPON ONT Router. This Single Band GPON/EPON terminal supports high-speed internet, VoIP (1 POTS), and triple-play FTTH services.';

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
      document.title = 'Optronix: OP821GWV Single Band XPON ONT | Wi-Fi 4 VoIP Gateway';
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
          <span className="current">OPTRONIX OP-821GWV</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}





              <h1 className="hero-title">OP-821GWV</h1>
              <p className="hero-desc">
                The OP821GWV is a broadband access device designed for FTTH, FTTO, FTTD, and SOHO access, providing comprehensive triple-play services (data, voice, and Wi-Fi). It is built on a high-performance Realtek Chipset and supports the XPON Dual Mode technology.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("op821gwv.pdf"), "_blank")}>
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
              <h3 className="panel-title">Key Highlights</h3>
              <ul className="feature-list">
                <li><strong>XPON Dual Mode:</strong> Automatically accesses EPON (IEEE802.3ah) and GPON (ITU-T G.984) OLTs.</li>
                <li><strong>Multi-Port:</strong> Features 1 Gigabit Ethernet (GE), 1 Fast Ethernet (FE), and 1 POTS (Voice) port.</li>
                <li><strong>Integrated Wi-Fi:</strong> Supports 802.11b/g/n Wi-Fi 4 with up to 300Mbps.</li>
                <li><strong>Voice (VoIP):</strong> Supports SIP and IMS SIP protocols.</li>
                <li><strong>Modes:</strong> Supports both Bridging and Routing Mode.</li>
                <li><strong>Security:</strong> Advanced security features, including filtering based on ACL/MAC/URL and Loop Detection.</li>

              </ul>





            </div>

            <div className="side-stack">
              <h4 className="panel-title-sm">Performance at a glance</h4>

              <div className="perf-table-wrap" style={{ marginTop: '12px' }}>
                <table className="perf-table">
                  <tbody>
                    <tr><th> Dimension </th><td>185mm x 120mm x 34mm(L X W X H)</td></tr>
                    <tr><th> Net Weight</th><td> 0.24kg</td></tr>
                    <tr><th> Power Supply</th><td> less than 6W</td></tr>
                    <tr><th>Interface</th><td>1GE+1FE+1POT+WiFi</td></tr>
                  </tbody>
                </table>
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
                        <tr><td>Product Type</td><td>1GE + 1FE + 1POT + WiFi XPON ONT</td></tr>
                        <tr><td>PON Interface</td><td>1 XPON Port</td></tr>
                        <tr>
                          <td>PON Standard</td>
                          <td>EPON Px20+ & GPON Class B+</td>
                        </tr>
                        <tr>
                          <td>Connector Type</td>
                          <td>SC Single Mode, SC/UPC Connector </td>
                        </tr>
                        <tr><td>Wavelength</td><td>TX 1310nm, Rx 1490nm </td></tr>
                        <tr><td>TX Optical Power</td><td>0 dBm∼+4 dBm</td></tr>
                        <tr><td>RX Sensitivity</td><td>−27 dBm</td></tr>
                        <tr><td>Transmission Distance</td><td>20km</td></tr>
                        <tr><td>Ethernet Interfaces</td><td>1*GE + 1*FE (RJ45 Connectors)</td></tr>
                        <tr><td>

                          POTS Interface</td><td>1*POTS (RJ11 Connector) </td></tr>
                        <tr><td>Wi-Fi Standard</td><td>IEEE802.11b/g/n</td></tr>
                        <tr><td>Wi-Fi Speed/Rate</td><td>Up to 300Mbps</td></tr>
                        <tr><td>Wi-Fi Antenna</td><td>2T2R, 2 External Antenna 5dBi </td></tr>
                        <tr><td>Dimensions (L×W×H)</td><td>185 mm×120 mm×34 mmc</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

              {/* Interface Parameter */}
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
                          <td>PON Connectivity</td>
                          <td>
                            XPON Dual Mode (Auto-access to EPON/GPON OLTs)
                          </td>
                        </tr>
                        <tr>
                          <td>Network Modes</td>
                          <td>
                            Bridging and Routing Mode
                          </td>
                        </tr>
                        <tr>
                          <td>Layer 3 (L3)</td>
                          <td>IPv4/IPv6 Dual Stack, DHCP/PPPoE/Static IP, NAT, DHCPv6 Server, Static Route</td>
                        </tr>
                        <tr>
                          <td>VLAN</td>
                          <td>4K VLAN, Tag, Untag, Transparent, Trunk, Translation Mode</td>
                        </tr>
                        <tr>
                          <td>Multicast</td>
                          <td>IGMPv1/v2/v3/Proxy/Snooping, MLD v1/v2 (Max 64 Multicast Groups)</td>
                        </tr>
                        <tr>
                          <td>Quality of Service (QoS)</td>
                          <td>Support 4 Queues, SP, WRR, 802.1P, and DSCP</td>
                        </tr>
                        <tr>
                          <td>Voice (VoIP)</td>
                          <td>SIP and IMS SIP, G.711a/u/G.722/G.729 Codec</td>
                        </tr>
                        <tr>
                          <td>VoIP Features</td>
                          <td>T.30/T.38 FAX, Echo Cancellation, Caller ID, Call Waiting/Hold/Transfer, 3-way Conference</td>
                        </tr>
                        <tr>
                          <td>Wi-Fi</td>
                          <td>WEP/WAP-PSK/WAP2-PSK Authentication, Multiple SSID, SSID Conceal</td>
                        </tr>
                        <tr>
                          <td>Security</td>
                          <td>Filtering Based on ACL/MAC/URL, Flow & Storm Control, Loop Detection</td>
                        </tr>
                        <tr>
                          <td>Management</td>
                          <td>CTC OAM 2.1 & 3.0, ITUT984.x OMCI, EMS/WEB/Telnet/CLI</td>
                        </tr>
                        <tr>
                          <td>Alarms & Protection</td>
                          <td>Support Dying Gasp, Port Loop Detect, and Eth Port Los</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </details>



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
              <p className="s-desc">HGU with 4GE and single‑band WiFi.</p>
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
        pageName="Optronix PON - OP821GWV"
      />
    </div>
  );
};

export default Optronixponproducteleven;