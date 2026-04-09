// import React from 'react';
// import './Optronixponproduct.css';
// import '../../../../pages/page.css';
// import { Link } from 'react-router-dom';
// import op08 from "../../../../assets/images/OP821GWV-D-removebg-preview.png";
// import optronixDiagram821GWV from "../../../../assets/images/Application Chart.png";

// import z2cImg from '../../../../assets/images/op821GwV-Dp.png';
// import c82Img from '../../../../assets/images/OP821GWV-D-removebg-preview.png';
// import w1cImg from '../../../../assets/images/Op821GWV.png';
// import fc8rImg from '../../../../assets/images/OP821GW.png';
// import op08pdf from "../../../../assets/images/OP100P8G.pdf";
// const Optronixponproductnine = () => {
//   return (
//     <div>
//       {/* Product Top Section */}
//     <div className="hero-split">
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
//           onClick={() => setEnquireOpen(true)}
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
//         src={op08} 
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>
//       <div className="product-container">
//         <div className="highlights-section">
//           <h2 className="highlights-title" >Key Highlights</h2>
//           <ul className="highlights-list">
//             <li>
//               <b>Automatic PON Mode Detection</b>
//               <span>Detects and exchanges PON mode automatically for flexible deployment.</span>
//             </li>
//             <li>
//               <b>Easy Mesh & High-Speed WiFi</b>
//               <span>Supports Easy Mesh protocol and WiFi5 dual band 1200Mbps for strong, reliable wireless coverage.</span>
//             </li>
//             <li>
//               <b>Carrier-grade Features</b>
//               <span>Supports IPv4/IPv6 stack, SIP protocol, and WiFi-FEM module for enhanced performance and compatibility.</span>
//             </li>
//             <li>
//               <b>Plug and Play</b>
//               <span>Easy installation and management, suitable for FTTH and triple play services.</span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Diagrams Section */}
//       <div className="table-z2c-">
//         <div className="table-container">
//           {/* <div className="table-heading">Application Chart</div> */}
//           <h3>Application Chart</h3>
//           <img loading="lazy" src={optronixDiagram821GWV} alt="OP821GWV-D Application Chart" style={{width: "100%", maxWidth: "700px", display: "block", margin: "0 auto"}} />
//         </div>
//       </div>

//       {/* Hardware Parameter Table */}

//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th colSpan={2}>Hardware Parameter</th>
//               </tr>
//               <tr>
//                 <th>Parameter</th>
//                 <th>Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td>Dimension</td><td>178mm × 120mm × 30mm (L × W × H)</td></tr>
//               <tr><td>Net Weight</td><td>0.3kg</td></tr>
//               <tr><td>Operating Condition</td><td>Operating Temp: -10~+55°C<br />Operating Humidity: 5~95% (non-condensing)</td></tr>
//               <tr><td>Storing Condition</td><td>Operating Temp: -40~+70°C<br />Operating Humidity: 5~95% (non-condensing)</td></tr>
//               <tr><td>Power Adapter</td><td>DC 12V, 1.5A External AC-DC Power Adaptor</td></tr>
//               <tr><td>Power Supply</td><td>&lt;10W</td></tr>
//               <tr><td>Interface</td><td>2GE+1POT+WiFi5</td></tr>
//               <tr><td>Indicators</td><td>PWR, PON, LOS, WAN, LAN1, LAN2, 2.4G, 5G, Phone</td></tr>
//             </tbody>
//           </table>
//         </div>


//       {/* Interface Parameter Table */}

//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th colSpan={2}>Interface Parameter</th>
//               </tr>
//               <tr>
//                 <th>Parameter</th>
//                 <th>Value</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>PON Interface</td>
//                 <td>
//                   1*XPON Port (EPON Px20+ & GPON Class B+)<br />
//                   SC Single Mode, SC/UPC Connector<br />
//                   TX Optical Power: 0~+4dBm<br />
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
//                   2.4GHz: 2.4000~2.4835GHz; 5.0GHz: 5.150~5.825GHz<br />
//                   WiFi: 2.4GHz 2×2, 5.8GHz 2×2, 5dBi Antenna, Rate up to 1.167Gbps, Multiple SSID<br />
//                   TX Power: 2.4GHz: 23dBm; 5GHz: 27dBm<br />
//                   RX Power: 2.4GHz: HT40-MCS7 -72dBm, 5GHz: VHT80 MCS9 -63dBm
//                 </td>
//               </tr>
//               <tr>
//                 <td>LAN Interface</td>
//                 <td>2*GE, Auto-Negotiation RJ45 Connectors</td>
//               </tr>
//               <tr>
//                 <td>Pots Interface</td>
//                 <td>1*FXS, RJ11 Connectors</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//       {/* Function Data Table */}

//         <div className="table-wrapper">

//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th colSpan={2}>Function Data</th>
//               </tr>
//               <tr>
//                 <th>Function</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td>O & M</td><td>OAM/OMCI, Telnet, Web, TR069; Support Full Management of HGU Functions by Optronix OLT</td></tr>
//               <tr><td>Connect Mode</td><td>Support Bridge, Router & Bridge/Router Mixed Mode</td></tr>
//               <tr><td>QoS</td><td>Support 4 Queues; Support SP, WRR, 802.1P and DSCP</td></tr>
//               <tr><td>Data Service Functions</td><td>
//                 Full Speed Non-blocking Switching<br />
//                 2K MAC Address Table<br />
//                 8 Full Range VLAN ID<br />
//                 Support VLAN Tag, Untag, Transparent, Trunk, Translation Mode<br />
//                 Integrated Port Monitoring, Port Mirroring, Port Rate Limiting, Port SLA, etc.<br />
//                 Support Auto Polarity Detection of Ethernet Ports (Auto MIDX)<br />
//                 Support IGMP v1/v2/v3 Snooping/Proxy and MLD v1/v2 Snooping/Proxy
//               </td></tr>
//               <tr><td>Wireless</td><td>
//                 Integrated 802.11b/g/n/ac<br />
//                 Authentication: WEP/WAP-PSK(PTKIP)/WAP2-PSK(AES)<br />
//                 Modulation Type: DSSS, CCK and OFDM<br />
//                 Encoding Scheme: BPSK, QPSK, 16QAM and 64QAM<br />
//                 Easymesh
//               </td></tr>
//               <tr><td>VoIP</td><td>
//                 SIP and IMS SIP<br />
//                 G.711a/G.711u/G.722/G.729 Codec<br />
//                 Echo Cancellation, VAD/CNG, DTMF Relay, T.30/T.38 FAX<br />
//                 Caller Identification/Call Waiting/Call Forwarding/Call Transfer/Call Hold/3-way Conference<br />
//                 Line Testing According to GR-909
//               </td></tr>
//               <tr><td>L3</td><td>
//                 IPv4, IPv6 and IPv4/IPv6 Dual Stack<br />
//                 DHCP/PPPoE/Static<br />
//                 Static Route, DHCP Server<br />
//                 NAT/DMZ/DDNS/Virtual Server
//               </td></tr>
//               <tr><td>Security</td><td>
//                 Support Firewall<br />
//                 Support MAC Filter Based on MAC or URL<br />
//                 Support ACL
//               </td></tr>
//             </tbody>
//           </table>
//         </div>

//       {/* Ordering Information Table */}

//         <div className="table-wrapper">

//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th colSpan={3}>Ordering Information</th>
//               </tr>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Product Description</th>
//                 <th>Accessories</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>OP821GWV-D</td>
//                 <td>2GE+1POT+WiFi5</td>
//                 <td>AC-DC Power Adaptor: DC 12V / 1.5A</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//      <div className='product_s1v1_product'>
//   <div className='product_s1v1_product1'>
//     <img loading="lazy" className='product_s1v1_img' src={z2cImg} alt="Z2C" />
//     <h3 className='products1v_name_option'>OP821GWV-DGB</h3>
//     <Link to="/optronix-pon/OP821GWVDGB" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product2'>
//     <img loading="lazy" className='product_s1v1_img' src={c82Img} alt="82C+" />
//     <h3 className='products1v_name_option'>OP821GWV-D</h3>
//     <Link to="/optronix-pon/OP821GWVD" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product3'>
//     <img loading="lazy" className='product_s1v1_img' src={w1cImg} alt="W1C" />
//     <h3 className='products1v_name_option'>OP821GWV</h3>
//     <Link to="/optronix-pon/OP821GWV" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product4'>
//     <img loading="lazy" className='product_s1v1_img' src={fc8rImg} alt="FC8R" />
//     <h3 className='products1v_name_option'>OP801GW</h3>
//     <Link to="/optronix-pon/OP801GW" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   </div>
//     </div>
//   )
// }

// export default Optronixponproductnine;




import React, { useState, useEffect } from 'react';

import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';

import op08 from "../../../../assets/images/fem router-01.png";
import opPdf from "../../../../assets/images/op821gwvd.pdf";
// remove subz2c, subw1c, sub82c, subfc8r imports
import z2cImg from '../../../../assets/images/op821GwV-Dp.png';
import c82Img from '../../../../assets/images/OP821GWV-D-removebg-preview.png';
import w1cImg from '../../../../assets/images/Op821GWV.png';
import fc8rImg from '../../../../assets/images/OP821GW.png';
import subfc8r from "../../../../assets/images/OP100P4.webp";
import ProductLeadModal from '../../../../components/common/ProductLeadModal';



const Optronixponproductnine = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [productImage] = useState(op08);
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
    document.title = 'Optronix: OP821GWV-D FEM: Long Range WiFi5 ONT';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Get the Optronix OP821GWV-D with FEM for Long-Range Wi-Fi coverage. This Dual-Mode XPON ONT features 2GE, 1POTS VoIP, and 1200Mbps Dual-Band WiFi5 (802.11ac).';

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
      document.title = 'Optronix: OP821GWV-D FEM: Long Range WiFi5 ONT';
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
    const imgs = [z2cImg, c82Img, w1cImg, fc8rImg];
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
          <span className="current">OP821GWV-D FEM</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}



              <h1 className="hero-title">OP821GWV-D FEM</h1>
              <p className="hero-desc">
                The OP821GWV-D is a 2GE+1POTS+WiFi5 XPON HGU ONT (Home Gateway Unit Optical Network Terminal). It is a broadband access device specially designed to meet the needs of fixed network operators for FTTH (Fiber to the Home) and triple-play services (data, voice, and Wi-Fi).
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(opPdf, "_blank")}>
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
                <li><strong>XPON Dual Mode:</strong> EPON/GPON auto-detection and configuration.</li>
                <li><strong>High-performance WiFi:</strong> Dual band 802.11n/ac with enhanced FEM.</li>
                <li><strong>Comprehensive QoS & Management:</strong> IPv4/IPv6, full HGU management.</li>
                <li><strong>Plug and Play:</strong> Auto-configuration for quick install.</li>
                <li><strong>Auto PON Detection:</strong> Detect and Exchange PON Mode Automatically.</li>
                <li><strong>Wi-Fi Standard:</strong> WiFi5 Dual Band 1200Mbps.</li>
                <li><strong>Wi-Fi System:</strong> Supports Easy Mesh Protocol</li>
                <li><strong>Wi-Fi Range:</strong> Includes a WiFi-FEM Module to improve coverage and reception sensitivity.
                </li>
                <li><strong>Networking:</strong> Supports IPv4/IPv6 Stack (Dual Stack).</li>
                <li><strong>Voice (VoIP):</strong> Supports SIP Protocol for voice services.
                </li>
                <li><strong>Ports:</strong> Features 2GE (Gigabit Ethernet) ports and 1 POTS (Voice) port</li>
              </ul>







            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap" style={{ marginTop: '12px' }}>
                  <table className="perf-table">
                    <tbody>
                      <tr><th> Dimension</th><td>178mm x 120mm x 30mm(L X W X H)</td></tr>
                      <tr><th>Net Weight</th><td>0.3kg</td></tr>
                      <tr><th>Power Supply</th><td> less than 10W</td></tr>
                      <tr><th>Interface</th><td>2GE+1POTS+WiFi5</td></tr>
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
                        <tr><td>Product Type</td><td>2GE + 1POTS + WiFi5 XPON HGU ONT</td></tr>
                        <tr><td>Connector Type</td><td>SC Single Mode, SC/UPC Connector</td></tr>
                        <tr><td>Wavelength</td><td>TX 1310nm, Rx 1490nm</td></tr>
                        <tr><td>TX Optical Power</td><td>0 dBm∼+4 dBm</td></tr>
                        <tr><td>RX Sensitivity</td><td>−27 dBm</td></tr>
                        <tr><td>Transmission Distance</td><td>20km</td></tr>
                        <tr><td>LAN Interface</td><td>2*GE (Gigabit Ethernet), Auto-Negotiation Rj45 Connectors</td></tr>
                        <tr><td>POTS Interface</td><td>1*FXS (Voice Port), Rj11 Connectors</td></tr>
                        <tr><td>Wi-Fi Standard</td><td>IEEE802.11b/g/n/ac</td></tr>
                        <tr><td>Wi-Fi Rate</td><td>Up to 1.167Gbps</td></tr>
                        <tr><td>Antenna Config</td><td>2.4GHz 2x2 and 5.8GHz 2x2, 5dBi Antenna</td></tr>
                        <tr><td>Dimensions (L×W×H)</td><td>178 mm×120 mm×30 mm</td></tr>
                        <tr><td>PON Interface</td><td>1 XPON Port (EPON Px20+ & GPON Class B+)</td></tr>
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
                          <td>Network Modes</td>
                          <td>
                            Bridge, Router, & Bridge/Router Mixed Mod
                          </td>
                        </tr>
                        <tr>
                          <td>Layer 3 (L3)</td>
                          <td>
                            IPv4, IPv6 and IPv4/IPv6 Dual Stack
                          </td>
                        </tr>
                        <tr><td>L3 Services</td><td>DHCP/PPPoE/Static, Static Route, DHCP Server, NAT/DMZ/DDNS/Virtual Server</td></tr>
                        <tr><td>VLAN</td><td>8 Full Range VLAN ID, Tag, Untag, Transparent, Trunk, Translation Mode</td></tr>
                        <tr><td>Multicast</td><td>IGMP v1/v2/v3 Snooping/Proxy and MLD v1/v2 Snooping/Proxy</td></tr>
                        <tr><td>QoS</td><td>Support 4 Queues, SP, WRR, 802.1P and DSCP</td></tr>
                        <tr><td>VoIP Protocol</td><td>SIP and IMS SIP</td></tr>
                        <tr><td>VoIP Features</td><td>T.30/T.38 FAX, Echo Cancellation, VAD/CNG, DTMF Relay, Call features (ID, Waiting, Forwarding, etc.)</td></tr>
                        <tr><td>Wi-Fi</td><td>Supports Easymesh, Multiple SSID</td></tr>
                        <tr><td>Security</td><td>Support Firewall, MAC Filter (based on MAC or URL), ACL</td></tr>
                        <tr><td>Management (O&M)</td><td>OAM/OMCI, Telnet, Web, Tr069, Full Management of HGU Functions by Optronix OLT</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

              {/* Function Data */}


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
            <div className="s-media"><img src={z2cImg} loading="lazy" alt="OP821GWV-DGB" /></div>
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
            <div className="s-media"><img src={c82Img} loading="lazy" alt="OP821GWV-D" /></div>
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
            <div className="s-media"><img src={w1cImg} loading="lazy" alt="OP821GWV" /></div>
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
            <div className="s-media"><img src={fc8rImg} loading="lazy" alt="OP801GW" /></div>
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
        pageName="OP821GWV-D FEM"
      /></div>
  );
};

export default Optronixponproductnine;