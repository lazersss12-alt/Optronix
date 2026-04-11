import { mediaUrl } from '../../../../config/media';
// import React from 'react';
// import './Optronixponproduct.css';
// import '../../../../pages/page.css';
// import { Link } from 'react-router-dom';
// import optronixP8GImg from "../../../../assets/images/OP100P16G-removebg-preview.png";
// import op08pdf from "../../../../assets/images/OP100P8G.pdf";
// import mediaUrl.image("Gepon 8G.webp") from "../../../../assets/images/Gepon 8G.png";
// import mediaUrl.image("gpon4.webp") from "../../../../assets/images/gpon4.png";
// import mediaUrl.image("op1.webp") from "../../../../assets/images/op1.png";
// import mediaUrl.image("op2.webp") from "../../../../assets/images/op2.png";

// const Optronixponproducttwo = () => {
//   return (
//     <>
//       {/* Product Top Section */}
//       {/* ===== Product Header Section ===== */}
// <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">OP-100P8G</h1>
//       <p className="hero-split__desc">
//         The OP-100P8G is a pizza-box GPON OLT with 8 GPON ports that meets flexible 
//         and fast FTTx access, suiting scenarios such as sparse/remote/cost-sensitive 
//         areas, smart industrial parks, commercial buildings and FTTM solutions.
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
//         src={optronixP8GImg} /* or use any of your images like productImage2 */
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>


// {/* ===== Key Highlights Section ===== */}
// <div className="product-container">
//   <div className="highlights-section">
//     <h2 className="highlights-title">Key Highlights</h2>
//     <ul className="highlights-list">
//       <li>
//         <b>Compact design, meets various application scenarios</b>
//         <p>
//           Supports the deployment in diverse scenarios including low density 
//           areas, remote areas, sparsely-populated areas and industry parks. 
//           Supports FTTM and sharing site/rack with wireless base stations.
//         </p>
//       </li>
//       <li>
//         <b>Small size and lightweight, easier to deliver and install</b>
//         <p>
//           Small size and lightweight, easy to transport and install. Supports 
//           multiple installation modes, like limited room space, basement, 
//           low-voltage room and small rack or cabinet.
//         </p>
//       </li>
//       <li>
//         <b>Carrier-class security protection, support dynamic routing protocol RIP & OSPF, ensure the safe operation of network</b>
//         <p>
//           Supports uplink redundancy protection including LACP STP, RSTP and 
//           MSTP, and support RIP & OSPF protocol. Supports link protection.
//         </p>
//       </li>
//       <li>
//         <b>Lower TCO</b>
//         <p>
//           Dramatically saves on investment fees in trunk fibers, pipe 
//           engineering, and facilities. Effectively reduces CapEx and OpEx.
//         </p>
//       </li>
//     </ul>
//   </div>
// </div>

//       {/* Technical Specifications Table */}

//         <div className="table-wrapper">

//           <table className="universal-table">
//             <thead>
//               <h3>Technical Specifications</h3>
//               <br></br>

//             </thead>
//             <tbody>

//               <tr>
//                 <th>Item</th>
//                 <th>OP-100P8G</th>
//               </tr>
//               <tr>
//                 <td>Chassis</td>
//                 <td>1U 19inch Standard Box</td>
//               </tr>
//               <tr>
//                 <td>GE/10GE Uplink Port</td>
//                 <td>
//                   RJ45(GE): 4<br />
//                   SFP(GE)/SFP+(10GE): 4
//                 </td>
//               </tr>
//               <tr>
//                 <td>GPON Port</td>
//                 <td>
//                   QTY: 8<br />
//                   Physical Interface: SFP Slots<br />
//                   Connector Type: Class (Class C+/Class C++)<br />
//                   Max splitting ratio: 1:128
//                 </td>
//               </tr>
//               <tr>
//                 <td>Management Ports</td>
//                 <td>
//                   1*10/100/1000BASE-T out-band port, 1*CONSOLE port, 1*USB2.0, 1*Type-C USB (for console)
//                 </td>
//               </tr>
//               <tr>
//                 <td>GPON port speed</td>
//                 <td>
//                   Upstream 1.244Gbps, Downstream 2.488Gbps
//                 </td>
//               </tr>
//               <tr>
//                 <td>Transmission Distance</td>
//                 <td>20KM</td>
//               </tr>
//               <tr>
//                 <td>Wavelength</td>
//                 <td>TX 1490nm, RX 1310nm</td>
//               </tr>
//               <tr>
//                 <td>PON Port Specification (Class C++ module)</td>
//                 <td>
//                   Connector: SC/UPC<br />
//                   Fiber Type: 9/125μm SMF<br />
//                   TX Power: +4.5 ~ +10dBm<br />
//                   RX Sensitivity: -30dBm<br />
//                   Saturation Optical Power: -12dBm
//                 </td>
//               </tr>
//               <tr>
//                 <td>Management Mode</td>
//                 <td>EMS, TR069 VACS, WEB, SNMP, Telnet, CLI</td>
//               </tr>
//               <tr>
//                 <td>Dimension (L*W*H)</td>
//                 <td>442mm*320mm*43.6mm</td>
//               </tr>
//               <tr>
//                 <td>Weight</td>
//                 <td>Net weight of single power: 4.80kg<br />Gross weight of single power: 6.40kg</td>
//               </tr>
//               <tr>
//                 <td>Power Consumption</td>
//                 <td>85W</td>
//               </tr>
//               <tr>
//                 <td>Working Temperature</td>
//                 <td>0°C ~ +50°C</td>
//               </tr>
//               <tr>
//                 <td>Storage Temperature</td>
//                 <td>-40°C ~ +85°C</td>
//               </tr>
//               <tr>
//                 <td>Relative Humidity</td>
//                 <td>5~90% (non-conditioning)</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//       {/* Features/Functions Section */}

//         {/* Management Function & Layer2 Switch & Multicast */}
//         <div className="table-wrapper">

//           <table className="universal-table">
//             <thead>
//               <h3>Management Function / Layer2 Switch / Multicast</h3>
//               <br></br>
//               <tr>
//                 <th>Feature</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td>Management Function</td><td>SNMP, Telnet, CLI, WEB, SSH v2</td></tr>
//               <tr><td>Management Function</td><td>Fan Group Control</td></tr>
//               <tr><td>Management Function</td><td>Port Status monitoring and configuration management</td></tr>
//               <tr><td>Management Function</td><td>Online ONT configuration and management</td></tr>
//               <tr><td>Management Function</td><td>User management</td></tr>
//               <tr><td>Management Function</td><td>Alarm management</td></tr>
//               <tr><td>Layer2 Switch</td><td>32K MAC address</td></tr>
//               <tr><td>Layer2 Switch</td><td>Support 4096 VLANs</td></tr>
//               <tr><td>Layer2 Switch</td><td>Support port VLAN and protocol VLAN</td></tr>
//               <tr><td>Layer2 Switch</td><td>Support VLAN tag/Untag, VLAN transparent transmission</td></tr>
//               <tr><td>Layer2 Switch</td><td>Support VLAN translation and QinQ</td></tr>
//               <tr><td>Layer2 Switch</td><td>Support storm control based on port</td></tr>
//               <tr><td>Layer2 Switch</td><td>Support port isolation</td></tr>
//               <tr><td>Layer2 Switch</td><td>Support port rate limitation</td></tr>
//               <tr><td>Layer2 Switch</td><td>Support 802.1D and 802.1w</td></tr>
//               <tr><td>Layer2 Switch</td><td>Support static LACP, Dynamic LACP</td></tr>
//               <tr><td>Layer2 Switch</td><td>QoS based on port, VID, TOS and MAC address</td></tr>
//               <tr><td>Layer2 Switch</td><td>Access control list</td></tr>
//               <tr><td>Layer2 Switch</td><td>IEEE802.1x</td></tr>
//               <tr><td>Layer2 Switch</td><td>Port stability statistic and monitoring</td></tr>
//               <tr><td>Multicast</td><td>IGMP snooping</td></tr>
//               <tr><td>Multicast</td><td>2048 IP Multicast Groups</td></tr>
//             </tbody>
//           </table>
//         </div>
//         {/* DHCP & Layer 3 Route & IPv6 & GPON Function */}
//         <div className="table-wrapper">

//           <table className="universal-table">
//             <thead>
//               <h3>DHCP / Layer 3 Route / IPv6 / GPON Function</h3>
//               <br></br>
//               <tr>
//                 <th>Feature</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td>DHCP</td><td>DHCP server, DHCP relay, DHCP snooping</td></tr>
//               <tr><td>DHCP</td><td>DHCP option82</td></tr>
//               <tr><td>Layer 3 Route</td><td>ARP proxy</td></tr>
//               <tr><td>Layer 3 Route</td><td>4096 hardware Host Routes, 512 hardware Subnet Routes</td></tr>
//               <tr><td>Layer 3 Route</td><td>Support 802.1X, Radius, Tacacs+</td></tr>
//               <tr><td>Layer 3 Route</td><td>Support IP source guard</td></tr>
//               <tr><td>Layer 3 Route</td><td>Support static route, dynamic route RIP v1/v2, RIPng and OSPF v2/v3</td></tr>
//               <tr><td>IPv6</td><td>Support NDP</td></tr>
//               <tr><td>IPv6</td><td>Support ICMPv6, Ping6, Telnet6, IPv6 routing</td></tr>
//               <tr><td>IPv6</td><td>Support ACL based on source IPv6 address, destination IPv6 address, L4 port, protocol type, etc.</td></tr>
//               <tr><td>IPv6</td><td>Support MLD v1/v2 snooping (Multicast Listener Discovery snooping)</td></tr>
//               <tr><td>GPON Function</td><td>Toon Data</td></tr>
//               <tr><td>GPON Function</td><td>Gemport traffic</td></tr>
//               <tr><td>GPON Function</td><td>Compliant with ITU-T984.x standard</td></tr>
//               <tr><td>GPON Function</td><td>Up to 20KM transmission Distance</td></tr>
//               <tr><td>GPON Function</td><td>Support data encryption, multi-cast, port VLAN, separation, RSTP, etc.</td></tr>
//               <tr><td>GPON Function</td><td>Support ONT auto-discovery/link detection/remote upgrade of software</td></tr>
//             </tbody>
//           </table>

//         {/* Other Features */}
//         <div className="table-wrapper">

//           <table className="universal-table">
//             <thead>
//               <h3>Other Features</h3>
//               <br></br>
//               <tr>
//                 <th>Feature</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr><td>Other Features</td><td>Support VLAN division and user separation</td></tr>
//               <tr><td>Other Features</td><td>Support power-off alarm function, easy for link problem detection</td></tr>
//               <tr><td>Other Features</td><td>Support broadcasting storm resistance function</td></tr>
//               <tr><td>Other Features</td><td>Support port isolation between different ports</td></tr>
//               <tr><td>Other Features</td><td>Support ACL and SNMP to configure data packet filter flexibly</td></tr>
//               <tr><td>Other Features</td><td>Specialized design for system breakdown prevention to maintain stable system</td></tr>
//               <tr><td>Other Features</td><td>Support RSTP, IGMP Proxy</td></tr>
//             </tbody>
//           </table>
//         </div>

//      <div className='product_s1v1_product'>
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
//   </div>
//     </>
//   );
// };

// export default Optronixponproducttwo;







import React, { useState, useEffect } from 'react';

import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';

// 🔹 Reusable accordion table component
import AccordionTable from "../../../../components/ui/AccordionTable";
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

const Optronixponproducttwo = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [productImage] = useState(mediaUrl.image("OP100P8G.webp"));
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
    document.title = 'Optronix OP-100P8G Layer 3 OLT: 8-Port GPON, 10GE Uplink';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Buy Optronix OP-100P8G, a Layer 3, 8-Port GPON OLT for FTTx. Features OSPF/RIP Routing, 10GE Uplink, and robust L2/L3 services (ITU-T G.984.x)';

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
      document.title = 'Optronix OP-100P8G Layer 3 OLT: 8-Port GPON, 10GE Uplink';
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
      // backgroundImage:
      //   `linear-gradient(180deg, rgba(255,255,255,${alpha}) 0%, rgba(255,255,255,${alpha}) 100%), ` +
      //   `url(${imgs[0]}), url(${imgs[1]}), url(${imgs[2]}), url(${imgs[3]})`,
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
          <span className="current">OPTRONIX OP-100P8G</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              <h1 className="hero-title">OP-100P8G</h1>
              <p className="hero-desc">
                The OP-100P8G is a high-density, Layer 3 GPON Optical Line Terminal (OLT) housed in a 1U 19-inch rack-mount chassis. It features 8 GPON ports and is designed to meet the growing demands for flexible and fast FTTx access.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("OP100P8.pdf"), "_blank")}>
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
                  <strong>Compact Design, Versatile Applications:</strong> Deploy in low-density/remote areas, industrial parks, and FTTM; can share site/rack with wireless base stations.

                </li>
                <li>
                  <strong>Small Size and Lightweight:</strong> Easy to transport/install. Multiple mounting modes: small rooms, basements, low-voltage rooms, small racks/cabinets.

                </li>
                <li>
                  <strong>Security:</strong> Carrier-Class Protection
                </li>
                <li>
                  <strong>Lower TCO:</strong> Saves trunk fiber, ducting, and facility costs; reduces CapEx and OpEx.

                </li>
                <li>
                  <strong>8-Port Layer 3 GPON OLT:</strong> Ideal for medium to large-scale deployments requiring robust GPON access.

                </li>

                <li>
                  <strong>High Scalability:</strong> Supports a high splitting ratio — typically 1:128 per PON port for large user coverage.

                </li>

                <li>
                  <strong>Flexible Uplinks:</strong> Equipped with 4 GE (copper) + 4 SFP/SFP+ (10GE) uplink slots (total 8 slots).

                </li>

                <li>
                  <strong>High Capacity:</strong> Comes with a powerful 128 Gbps backplane bandwidth for heavy network loads.

                </li>

                <li>
                  <strong>Full L3 Routing Support:</strong> Includes Static Route, RIPv1/v2, OSPFv2/v3 for advanced routing needs.

                </li>

                <li>
                  <strong>Security & Redundancy:</strong>  Supports LACP, STP, RSTP, MSTP for uplink protection; plus carrier-class security features.

                </li>

                <li>
                  <strong>IPv6 Support:</strong> Includes IPv6 Static/Dynamic Route, NDP, and MLD v1/v2 snooping.

                </li>
              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>
                <h4 className="panel-title-sm">Performance at a glance</h4>
                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr><th>Wavelength</th><td>TX 1490nm, RX 1310nm</td></tr>
                      <tr><th>Fiber Type</th><td>9/125μm SMF</td></tr>
                      <tr><th>TX Power</th><td>+4.5 ~ +10dBm</td></tr>
                      <tr><th>Connector</th><td>PC, 2.5 mm universal</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>


            </div>
          </div>
        )}

        {/* 🔹 SPECS TAB WITH ACCORDION TABLES */}
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
                        <tr><td>Product Type</td><td>Layer3 8 Ports GPON OLT</td></tr>
                        <tr><td>Chassis</td><td>1U 19inch Standard Box</td></tr>

                        <tr>
                          <td>Uplink Ports</td>
                          <td>4xGE (RJ45 Copper) + 4xSFP/SFP+ Slots</td>
                        </tr>

                        <tr><td>Downlink Ports</td><td>8x GPON OLT Ports</td></tr>

                        <tr>
                          <td>Max ONU Support</td>
                          <td>1:128 Splitting Ratio (Max)</td>
                        </tr>

                        <tr><td>Backplane Bandwidth</td><td>128 Gbps</td></tr>

                        <tr><td>Forwarding Rate</td><td>89.280 Mpps</td></tr>

                        <tr>
                          <td>PON Speed</td>
                          <td>Downstream: 2.5Gbps, Upstream: 1.25Gbps</td>
                        </tr>

                        <tr><td>PON Standard</td><td>Compliant with ITU-T G.984.x</td></tr>

                        <tr><td>Transmission Distance</td><td>Up to 20KM</td></tr>

                        <tr><td>Power Consumption</td><td>85W</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </details>

              {/* Functional & Network Features */}
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
                          <td>Layer 3 (L3)</td>
                          <td>Static Route, Dynamic Route (RIPv1/v2, OSPFv2/v3, RIPng), ARP Proxy</td>
                        </tr>

                        <tr>
                          <td>L3 Routing</td>
                          <td>4096 Hardware Host Routes, 512 Hardware Subnet Routes</td>
                        </tr>

                        <tr>
                          <td>Layer 2 (L2)</td>
                          <td>Port-based Rate Limitation, RSTP/MSTP/STP, Port VLAN, DBA (Dynamic Bandwidth Allocation)</td>
                        </tr>

                        <tr>
                          <td>VLAN</td>
                          <td>VLAN tag/Un-tag, Transparent Transmission</td>
                        </tr>

                        <tr>
                          <td>Multicast</td>
                          <td>IGMP Snooping/Proxy, 2048 IP Multicast Groups, MLD v1/v2 snooping</td>
                        </tr>

                        <tr>
                          <td>DHCP</td>
                          <td>DHCP Server, DHCP Relay, DHCP Snooping, Option82</td>
                        </tr>

                        <tr>
                          <td>QoS</td>
                          <td>Based on Port, VID, TOS, MAC Address; SP, WRR</td>
                        </tr>

                        <tr>
                          <td>Security</td>
                          <td>802.1X, Radius, Tacacs+, IP Source Guard, ACL (IPv4 & IPv6)</td>
                        </tr>

                        <tr>
                          <td>IPv6</td>
                          <td>NDP, IPv6 Ping, IPv6 Telnet, IPv6 Routing, IPv6 ACL</td>
                        </tr>

                        <tr>
                          <td>Management</td>
                          <td>SNMP, Telnet, CLI, WEB, SSH v2, OMCI, TR069</td>
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
        pageName="OP-100P8G"
      /></div>
  );
};

export default Optronixponproducttwo;
