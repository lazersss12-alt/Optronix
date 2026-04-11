import { mediaUrl } from '../../../../config/media';
// import React from 'react';
// import './Optronixponproduct.css';
// import '../../../../pages/page.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("gepon-removebg-preview.webp") from "../../../../assets/images/gepon-removebg-preview.png";
// // import featureImg1 from "../../../../assets/images/55.png";
// // import featureImg2 from "../../../../assets/images/10.jpg";
// // import featureImg3 from "../../../../assets/images/AE1001 PORTABLE OTDR.png"; // Ensure correct path
// // import featureImg4 from "../../../../assets/images/9.jpg";
// // import featureImg5 from "../../../../assets/images/33.jpg";
// // import eponoltf1 from "../../../../assets/images/epon olt.jpeg";
// // import eponoltf2 from "../../../../assets/images/eponolt1.jpeg";
// import mediaUrl.image("Gepon 8G.webp") from "../../../../assets/images/Gepon 8G.png";
//   // };       

//   return (
//     <>
//       {/* Product Top Section */}
//      <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">OP-100P8</h1>
//       <p className="hero-split__desc">
//         Optronix OP-100P8 series EPON OLT products are 1U height 19 inch rack mount products. The features of the OLT are small, convenient, flexible, easy to deploy and high performance. It is appropriate to be deployed in compact room environment. The OLT’s can be used for “Triple-Play”, VPN, IP Camera, Enterprise LAN and Internet service provider applications.
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
//         src={mediaUrl.image("gepon-removebg-preview.webp")} /* or use any of your images like productImage2 */
//         alt="OP-100P8"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>


//       <div className="product-container">
//         <div className="highlights-section">
//           <h2 className="highlights-title">Key Highlights</h2>
//           <ul className="highlights-list">
//             <li>
//               <b>Compact 1U rackmount design, flexible deployment</b>
//               <span>
//                 Small, convenient, and high-performance OLT suitable for compact room environments. Supports “Triple-Play”, VPN, IP Camera, Enterprise LAN, and ISP applications.
//               </span>
//             </li>
//             <li>
//               <b>Multiple uplink and downlink ports</b>
//               <span>
//                 8 GE (copper) and 8 SFP uplink slots, 8 EPON OLT ports for downlink. Supports up to 512 ONUs (64 per PON port).
//               </span>
//             </li>
//             <li>
//               <b>Advanced Layer2/Layer3 features</b>
//               <span>
//                 Includes VLAN, QinQ, bandwidth control, multicast, static/dynamic routing, and security management for enterprise and ISP networks.
//               </span>
//             </li>
//             <li>
//               <b>Carrier-class reliability and management</b>
//               <span>
//                 Supports port-based rate limitation, DBA, auto-discovery, remote upgrade, power-off alarm, and advanced monitoring for stable operation.
//               </span>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Technical Specifications Table */}

//         <div className="table-wrapper">

//           <table className="universal-table">
//             <thead>
//        <tr>
//         <th colSpan={2}>Technical Specification</th>
//        </tr>



//             </thead>
//             <tbody>
//               <tr>
//                 <th>Item</th>
//                 <th>OP-100P8</th>
//               </tr>
//               <tr>
//                 <td>Chassis</td>
//                 <td>1U 19inch Standard Box 16</td>
//               </tr>
//               <tr>
//                 <td>Port Count</td>
//                 <td>16</td>
//               </tr>
//               <tr>
//                 <td>Uplink Port</td>
//                 <td>
//                   Copper: 8*10/100/1000M auto-negotiation<br />
//                   SFP: 4<br />
//                   SFP+: 4
//                 </td>
//               </tr>
//               <tr>
//                 <td>EPON Port</td>
//                 <td>
//                   Qty: 8<br />
//                   Physical Interface: SFP Slots<br />
//                   Max splitting ratio: 1:64<br />
//                   Support PON Module level: Px20, Px20+, Px20+++
//                 </td>
//               </tr>
//               <tr>
//                 <td>Backplane Bandwidth (Gbps)</td>
//                 <td>128</td>
//               </tr>
//               <tr>
//                 <td>Port Forwarding rate (Mpps)</td>
//                 <td>89.280</td>
//               </tr>
//               <tr>
//                 <td>Dimension (L×W×H)</td>
//                 <td>442.2mm × 320mm × 43mm</td>
//               </tr>
//               <tr>
//                 <td>Weight</td>
//                 <td>4.5kg</td>
//               </tr>
//               <tr>
//                 <td>Power Supply</td>
//                 <td>AC 100~240 V, 50/60 Hz<br />DC: -48V</td>
//               </tr>
//               <tr>
//                 <td>Power Consumption</td>
//                 <td>55W</td>
//               </tr>
//               <tr>
//                 <td>Operating Environment</td>
//                 <td>
//                   Working Temperature: -20°C~+60°C<br />
//                   Storage Temperature: -40°C~+70°C<br />
//                   Relative Humidity: 5~95% (non-condensing)
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//       {/* Features/Functions Section */}

//         {/* Security Management */}
//         <div className="table-wrapper">

//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th>Feature</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td>Security Management</td><td>Support IEEE802.1x, Radius, Tacacs+</td></tr>
//               <tr><td>Security Management</td><td>Support DHCP Snooping, DHCP Option82, IP Source Guard</td></tr>
//               <tr><td>Security Management</td><td>Support HTTPS, SSHv2</td></tr>
//               <tr><td>PON Port Specification</td><td>Support IPv6 Neighbor Discovery, SLAAC Snooping</td></tr>
//               <tr><td>PON Port Specification</td><td>Support DHCPv6 Server, DHCPv6 Relay, DHCPv6 Snooping</td></tr>
//               <tr><td>PON Port Specification</td><td>Support IPv6 Static Route</td></tr>
//               <tr><td>PON Port Specification</td><td>Support IPv6 Dynamic Route Protocol: RIPng, OSPF6</td></tr>
//               <tr><td>PON Port Specification</td><td>Support MLD v1/v2</td></tr>
//               <tr><td>PON Port Specification</td><td>Support IPv6 ACL</td></tr>
//               <tr><td>PON Port Specification</td><td>Support IPv6 SNMP, Telnet, Https, SSH Management</td></tr>
//             </tbody>
//           </table>

//         {/* Layer 2 Features */}
//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th>Feature</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td>Layer 2 Features</td><td>Support Port-based rate Limitation and bandwidth Control</td></tr>
//               <tr><td>Layer 2 Features</td><td>In compliant with IEEE802.3ah Standard</td></tr>
//               <tr><td>Layer 2 Features</td><td>Support data encryption, Multi-cast, Port VLAN, Separation, RSTP etc</td></tr>
//               <tr><td>Layer 2 Features</td><td>Support Dynamic Bandwidth Allocation (DBA)</td></tr>
//               <tr><td>Layer 2 Features</td><td>Support ONU Auto-discovery/link detection/remote Upgrade of Software</td></tr>
//               <tr><td>Layer 2 Features</td><td>Support VLAN division and User Separation to avoid Broadcast Storm</td></tr>
//               <tr><td>Layer 2 Features</td><td>Support Various LLID Configuration and Single LLID Configuration</td></tr>
//               <tr><td>Layer 2 Features</td><td>Different User and Different Service Could Provide Different QoS by Means of Different LLID Channels</td></tr>
//             </tbody>
//           </table>
//         </div>
//         {/* Other Features */}
//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th>Feature</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td>Other Features</td><td>Support Power-Off Alarm Function, Easy for Link Problem Detection</td></tr>
//               <tr><td>Other Features</td><td>Support Broadcasting Storm Resistance Function</td></tr>
//               <tr><td>Other Features</td><td>Support Port Isolation Between Different Ports</td></tr>
//               <tr><td>Other Features</td><td>Support ACL to Configure Data Packet Filter Flexibly</td></tr>
//               <tr><td>Other Features</td><td>Specialized Design for System Breakdown Prevention to Maintain Stable System</td></tr>
//               <tr><td>Other Features</td><td>Support Dynamic Distance Calculation on EMS Online</td></tr>
//             </tbody>
//           </table>
//         </div>
//         {/* Multicast, DHCP, Layer 3 Features */}
//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th>Feature</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td>Multicast</td><td>IGMP Snooping</td></tr>
//               <tr><td>Multicast</td><td>256 IP Multicast Groups</td></tr>
//               <tr><td>DHCP</td><td>DHCP Server</td></tr>
//               <tr><td>DHCP</td><td>DHCP Relay</td></tr>
//               <tr><td>DHCP</td><td>DHCP snooping</td></tr>
//               <tr><td>Layer 3 Features</td><td>ARP Proxy</td></tr>
//               <tr><td>Layer 3 Features</td><td>Static Route</td></tr>
//               <tr><td>Layer 3 Features</td><td>1024 Hardware Host Routes</td></tr>
//               <tr><td>Layer 3 Features</td><td>512 Hardware Subnet Routes</td></tr>
//               <tr><td>Layer 3 Features</td><td>Support RIP v1/v2, OSPF v2/v3</td></tr>
//               <tr><td>Layer 3 Features</td><td>Support PPPoE+</td></tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Ordering Information Table */}

//         <div className="table-wrapper">
//             <table className="universal-table">
//             <thead>
//               <tr>
//                 <th>Product Name</th>
//                 <th>Product Description</th>
//                 <th>Power Configuration</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>OP-100P8</td>
//                 <td>8*EPON, 8*RJ45+4*SFP +4*SFP+</td>
//                 <td>1*AC Power<br />2*AC Power<br />1*AC Power + 1*DC Power</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//        <div className='product_s1v1_product'>
//   <div className='product_s1v1_product1'>
//     <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("Gepon 8G.webp")} alt="OP-100P8G" />
//     <h3 className='products1v_name_option'>OP-100P8G</h3>
//     <Link to="/optronixponproducttwo" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product2'>
//     <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("gpon4.webp")} alt="82C+" />
//     <h3 className='products1v_name_option'>OP-100P4G</h3>
//     <Link to="/optronixponproductthree" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product3'>
//     <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("op1.webp")} alt="W1C" />
//     <h3 className='products1v_name_option'>OP100P8</h3>
//     <Link to="/optronixponproductfour" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product4'>
//     <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("op2.webp")} alt="FC8R" />
//     <h3 className='products1v_name_option'>OP100P4</h3>
//     <Link to="/optronixponproductfive" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   </div>
//     </>
//   );
// };

// export default Optronixponproductfour;




import React, { useState, useEffect } from 'react';

import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';

// 🔹 Reusable accordion table
import AccordionTable from "../../../../components/ui/AccordionTable";
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

const Optronixponproductfour = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("gepon-removebg-preview.webp"));

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
    document.title = 'Optronix OP-100P8 Layer 3 OLT: 8-Port EPON, 512 ONU';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Buy Optronix OP-100P8, a Layer 3, 8-Port EPON OLT. Supports 512 ONUs, 8GE Uplink, RIP/OSPF Routing, and full L2/L3 services for Triple Play.';

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
      document.title = 'Optronix OP-100P8 Layer 3 OLT: 8-Port EPON, 512 ONU';
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
    const imgs = [mediaUrl.image("AE1001.webp"), mediaUrl.image("ae210.webp"), mediaUrl.image("vfl.webp"), mediaUrl.image("OP100P4.webp")];
    return {
      backgroundSize: 'cover, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
      backgroundPosition: 'center, left top, right top, left bottom, right bottom',
      backgroundRepeat: 'no-repeat'
    };
  };

  const accessoriesData = {
    forSplicer: [
      { name: "Battery Pack", part: "BU-17", remarks: "Li-ion 10.8V, 4,560mAh" },
      { name: "Battery Charger", part: "BC-17", remarks: "For BU-17" },
      { name: "Car battery cable", part: "PC-V25", remarks: "Cigarette Socket Type" },
      { name: "V-groove cleaning brush", part: "VGT-2", remarks: "Brush for cleaning" },
      { name: "Electrode", part: "ER-17", remarks: "-" },
      { name: "Working tray strap kit", part: "WSK-18", remarks: "Neck hanging kit" },
      { name: "Tripod Adapter", part: "TA-18", remarks: "For tripod use" },
      { name: "USB cable", part: "-", remarks: "-" },
      { name: "Shoulder belt", part: "-", remarks: "-" },
    ],
    accessories: [
      { name: "Fiber Cleaver", part: "SFC-S", remarks: "TableTop" },
      { name: "Fiber Cleaver", part: "FC-7LS", remarks: "Handhold" },
      { name: "Jacket Remover", part: "JR-M03", remarks: "Single fiber" },
      { name: "Loose Tube Cutter", part: "LTC-01", remarks: "-" },
      { name: "Alcohol Dispenser", part: "ASB-17", remarks: "-" },
    ],
    fiberSleeves: [
      { name: "FPS-1", part: "", remarks: "60 mm shrink" },
      { name: "FPS-40", part: "", remarks: "3.2 mm, 40mm shrink" },
      { name: "FPS-61-2.6", part: "", remarks: "3.2 mm, 61mm shrink" },
      { name: "FPS-D60", part: "", remarks: "2.6mm 60mm for drop cables" },
    ],
    basic: [
      { name: "AC Adaptor", part: "ADC-15", qty: "1 pc" },
      { name: "AC Power Cord", part: "PC-AC X-2P", qty: "1 pc" },
      { name: "Battery pack", part: "BU-17", qty: "1 pc" },
      { name: "Quick reference guide", part: "-", qty: "1 pc" },
      { name: "Carrying case", part: "CC-18", qty: "1 pc" },
      { name: "Working Tray", part: "WT-18", qty: "1 pc" },
    ],
  };

  return (
    <div className="s1v-page">
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/optronix-pon" style={{ color: "#333", textDecoration: "none" }}>Products</Link>
          <span className="sep">/</span>
          <span className="current">OPTRONIX OP-100P8</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              <h1 className="hero-title">OP-100P8</h1>
              <p className="hero-desc">
                The Optronix OP-100P8 series EPON OLT is a Layer 3 Optical Line Terminal  designed for large-scale network deployment. It comes in a 1U height, 19-inch rack-mount form factor , making it an ideal choice for compact room environments.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("OP100P8G.pdf"), "_blank")}>
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
            <button
              className={`tab ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`tab ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              Specifications
            </button>

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
                <li>
                  <strong>High Capacity:</strong> Supports 512 ONUs in total.

                </li>
                <li>
                  <strong>Uplinks:</strong> Features 8 GE (copper) and 8 SFP/SFP+ slots (4 SFP, 4 SFP+).

                </li>
                <li>
                  <strong>High Bandwidth:</strong> 128 Gbps Backplane Bandwidth.

                </li>
                <li>
                  <strong>Full L3 Routing:</strong> Supports RIPv1/v2, OSPFv2/v3, Static Route, and PPPoE+.

                </li>
                <li>
                  <strong>IPv6 Support:</strong> Supports DHCPv6, IPv6 Static/Dynamic Route (RIPng, OSPF6), and MLD v1/v2.

                </li>
                <li>
                  <strong>Management:</strong> Managed via SNMP, Telnet, CLI, WEB, and SSH v2.

                </li>

                <li>
                  <strong>Design:</strong> Compact 1U rackmount design, flexible deployment

                </li>
                <li>
                  <strong>Connectivity:</strong>  Multiple uplink and downlink ports

                </li>
                <li>
                  <strong>Functionality:</strong> Advanced Layer2/Layer3 features

                </li>
                <li>
                  <strong>Reliability:</strong> Carrier-class reliability and management

                </li>
                <li>
                  <strong>Specification:</strong> 8-Port Layer 3 EPON OLT.

                </li>

              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>
                <h4 className="panel-title-sm">Performance at a glance</h4>
                <div className="perf-table-wrap" style={{ marginTop: '12px' }}>
                  <table className="perf-table">
                    <tbody>
                      <tr><th>Backplane bandwidth</th><td>128 Gbps</td></tr>
                      <tr><th>Forwarding rate</th><td>89.280 Mpps</td></tr>
                      <tr><th>Max split / ONUs</th><td>1:64 per PON (512 ONUs total)</td></tr>
                      <tr><th>Power consumption</th><td>55 W</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>


            </div>
          </div>
        )}

        {/* 🔹 Specs tab with Accordions */}
        {activeTab === 'specs' && (
          <div className="panel" style={mosaicBG(0.92)}>
            <div className="acc-group">

              {/* Technical Specifications */}
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
                        <tr><td>Product Type</td><td>Layer3 4 Ports EPON OLT</td></tr>
                        <tr>
                          <td>Chassis</td>
                          <td>1U 19inch Standard Box</td>
                        </tr>
                        <tr>
                          <td>Uplink Ports</td>
                          <td>8xGE (RJ45 Copper) + 4xSFP + 4xSFP+ (8 Slots Total)</td>
                        </tr>
                        <tr><td>Downlink Ports</td><td>8xEPON OLT Ports (SFP Slots)</td></tr>
                        <tr><td>Max ONU Support</td><td>512 ONUs (1:64 Splitting Ratio)</td></tr>

                        <tr><td>PON Speed</td><td>Symmetrical 1.25Gbps</td></tr>

                        <tr><td> Connector</td><td>SC/UPC </td></tr>
                        <tr>
                          <td>Backplane Bandwidth</td>
                          <td>128 Gbps</td>
                        </tr>
                        <tr>
                          <td>Forwarding Rate</td>
                          <td>89.280 Mbps</td>
                        </tr>
                        <tr>
                          <td>Wavelength</td>
                          <td>TX-1490nm, RX-1310nm</td>
                        </tr>
                        <tr>
                          <td>Transmission Distance</td>
                          <td>20km</td>
                        </tr>

                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

              {/* Security Management / PON Port Specification */}
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
                        <tr><td>Layer 3 (L3)</td><td>RIPv1/v2, OSPFv2/v3, Static Route, PPPoE+ </td></tr>

                        <tr><td>Layer 2 (L2)</td><td>16k MAC Address, Port VLAN, QinQ, IEEE802.3D Trunk, RSTP, MSTP </td></tr>
                        <tr><td>VLAN</td><td>Support 4096 VLANS, Tag/Un-tag, Transparent Transmission </td></tr>
                        <tr><td>Multicast</td><td>IGMP Snooping, 256 IP Multicast Groups, MLD v1/v2 </td></tr>
                        <tr><td>DHCP</td><td>DHCP Server, DHCP Relay, DHCP Snooping, Option82 </td></tr>
                        <tr><td>QoS</td><td>Based on Port, VID, TOS, and MAC Address; Port-based Rate Limitation </td></tr>
                        <tr><td>Security</td><td>IEEE802.1x, Radius, Tacacs+, IP Source Guard, ACL </td></tr>
                        <tr><td>IPv6</td><td>DHCPv6 Server/Relay/Snooping, IPv6 Static/Dynamic Route (RIPng, OSPF6), IPv6 ACL</td></tr>
                        <tr><td>Management</td><td>SNMP, Telnet, CLI, WEB, SSH v2, OAM/OMCI, TR069 </td></tr>
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
            <div className="s-media"><img src={mediaUrl.image("Gepon 8G.webp")} loading="lazy" alt="OP-100P8G" /></div>
            <div className="s-body">
              <h4 className="s-title">OP-100P8G</h4>
              <p className="s-desc">Pizza-box OLT with 8 GPON ports.</p>
            </div>
            <Link to="/optronix-pon/OP100P8G" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img src={mediaUrl.image("gpon4.webp")} loading="lazy" alt="OP-100P4G" /></div>
            <div className="s-body">
              <h4 className="s-title">OP-100P4G</h4>
              <p className="s-desc">4-port GPON OLT for compact deployments.</p>
            </div>
            <Link to="/optronix-pon/OP100P4G" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img src={mediaUrl.image("op1.webp")} loading="lazy" alt="OP100P8" /></div>
            <div className="s-body">
              <h4 className="s-title">OP100P8</h4>
              <p className="s-desc">EPON variant with 8 PON ports.</p>
            </div>
            <Link to="/optronix-pon/OP100P8" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img src={mediaUrl.image("OP100P4.webp")} loading="lazy" alt="OP100P4" /></div>
            <div className="s-body">
              <h4 className="s-title">OP100P4</h4>
              <p className="s-desc">EPON 4-port option for edge sites.</p>
            </div>
            <Link to="/optronix-pon/OP100P4G" className="s-cta">
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
        pageName="OP-100P8"
      /></div>
  );
};

export default Optronixponproductfour;
