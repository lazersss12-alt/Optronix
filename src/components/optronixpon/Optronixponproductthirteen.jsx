// import React from 'react';
// import './Optronixponproduct.css';
// import '../../pages/page.css';
// import { Link } from 'react-router-dom';
// import op08 from "../img/OP-101X.png";
// import op08pdf from "../img/OP100P8G.pdf";
// import optronixDiagram821GWV from "../img/product_13_diagram-removebg-preview.png";

// import z2cImg from '../img/op821GwV-Dp.png';
// import c82Img from '../img/OP821GWV-D-removebg-preview.png';
// import w1cImg from '../img/Op821GWV.png';
// import fc8rImg from '../img/OP821GW.png';
// // import featureImg1 from "../img/55.png";
// // import featureImg2 from "../img/10.jpg";
// // import featureImg3 from "../img/AE1001 PORTABLE OTDR.png"; // Ensure correct path
// // import featureImg4 from "../img/9.jpg";
// // import featureImg5 from "../img/33.jpg";
// // import eponoltf1 from "../img/epon olt.jpeg";
// // import eponoltf2 from "../img/eponolt1.jpeg";

// const Optronixponproductthirteen = () => {
//   // const [productImage, setProductImage] = useState(op08);
//   // const [activeIcon, setActiveIcon] = useState(null);

//   // const handleIconClick = (image, icon) => {
//   //   setProductImage(image);
//   //   setActiveIcon(icon);
//   // };       

//   return (
//     <div>
//       {/* Product Top Section */}
//      <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">OP-101X</h1>
//       <p className="hero-split__desc">
//         It is a high-performance, reliable ONU designed for FTTH, FTTO, FTTD, SOHO, and video surveillance applications. 
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
//         src={op08} /* or use any of your images like productImage2 */
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
//               <tr>
//                 <th colSpan={2}>Hardware Parameter</th>
//               </tr>

//             </thead>
//             <tbody>
//               <tr>
//                 <td>Dimension</td>
//                 <td>82mm x 82mm x 25mm(L×W×H)</td>
//               </tr>
//               <tr>
//                 <td>Net weight</td>
//                 <td>0.085Kg</td>
//               </tr>
//               <tr>
//                 <td>Operating condition</td>
//                 <td>
//                   Operating temp: -10 ~ +55C<br></br>
//                   Storing humidity: 5~95% (non-condensing)

//                 </td>
//               </tr>
//               <tr>
//                 <td>Storing condition</td>
//                 <td>
//                   storing temp: -40 ~ +70C<br></br>
//                   Storing humidity: 5~95% (non-condensing)
//                 </td>
//               </tr>
//               <tr>
//                 <td>Power adapter</td>
//                 <td>DC 12V, 0.5A, external AC~DC power adaptor</td>
//               </tr>
//               <tr>
//                 <td>Power supply</td>
//                 <td>less than equal to 4W</td>
//               </tr>
//               <tr>
//                 <td>Interfaces</td>
//                 <td>1GE</td>
//               </tr>
//               <tr>
//                 <td>Indicators</td>
//                 <td>SYS, LINK/ACT, REG</td>
//               </tr>

//             </tbody>
//           </table>
//         </div>


//       {/* Features/Functions Section */}

//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th colSpan={2}>Interface Parameter</th>
//               </tr>

//             </thead>
//             <tbody>
//               <tr><td>PON interface</td><td>1 XPON port(EPON PX20+ & GPON Class B+)<br></br>SC single mode, SC/UPC connector<br></br>TX optical power: 0~+4dBm<br></br>RX sensitivity: -27dBm<br></br>Overload optical power: -3dBm(EPON) or 8dBm(GPON)<br></br>Transmission distance: 20KM<br></br>Wavelength: TX 1310nm, RX1490nm</td></tr>
//               <tr><td>LAN interface</td><td>1GE, Auto-negotition RJ45 connectors</td></tr>

//             </tbody>
//           </table>

//         {/* Layer 2 Features */}
//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//              <tr>
//               <th colSpan={2}>Function Data</th>
//              </tr>

//             </thead>
//             <tbody>
//               <tr><td>XPON Mode</td><td>Dual mode, Auto-access to EPON/GPON OLT</td></tr>
//               <tr><td>Uplink Mode</td><td>Bridging and Routing Mode</td></tr>
//               <tr><td>Abnormal protection</td><td>Detecting Rogue ONU, Hardware Dying Gasp</td></tr>
//               <tr><td>Firewall</td><td>DDOS, Filtering Based on ACL/MAC/URL</td></tr>

//             </tbody>
//           </table>
//         </div>

//         {/* Other Features */}
//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>

//             <tr>
//               <th colSpan={2}>Basic Features</th>
//             </tr>

//             </thead>
//             <tbody>
//               <tr><td>Basic</td><td>Support MPCP discover&register<br></br>Support authentication Mac/Loid/Mac+Loid<br></br>Support Triple Chuming<br></br>Support DBA bandwidth<br></br>Support auto-detecting, auto-configuration, and auto firmware upgrade<br></br>Support SN/Psw/Loid/Loid+Psw authentication</td></tr>
//               <tr><td>Alarm</td><td>Support Dying Gasp<br></br>Support Port Loop Detect<br></br>Support Eth Port Los</td></tr>
//               <tr><td>LAN</td><td>Support Port rate limiting<br></br>Support Loop detection<br></br>Support Flow control<br></br>Support Storm control</td></tr>
//               <tr><td>VLAN</td><td>Support VLAN tag mode<br></br>Support VLAN transparent mode<br></br>Support VLAN trunk mode(max 8 vlans)<br></br>Support VLAN 1:1 translation mode(less than 8 vlans)</td></tr>
//               <tr><td>Multicast</td><td>Support IGMPv1/v2/Snooping<br></br>Max Multicast vlan 8 <br></br> Max Multicast Group 64
//           </td></tr>
//               <tr><td>QOS</td><td>Support 4 queues<br></br>Support SP and WRR<br></br>Support 802.1P</td></tr>
//               <tr><td>L3</td><td>Support IPv4/IPv6<br></br>Support DHCP/PPPOE/Static NAT</td></tr>
//               <tr><td>Management</td><td>Support CTC OAM 2.0 and 2.1<br></br>Support ITUT984.x OMCI<br></br>Support WEB<br></br>Support TELNET<br></br>Support CLI</td></tr>
//             </tbody>
//           </table>
//         </div>
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
//                 <td>OP-101X</td>
//                 <td>IGE</td>
//                 <td>AC-DC power adaptor: DC12V/0.5A</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//         <div className='product_s1v1_product'>
//   <div className='product_s1v1_product1'>
//     <img className='product_s1v1_img' src={z2cImg} alt="Z2C" />
//     <h3 className='products1v_name_option'>OP821GWV-DGB</h3>
//     <Link to="/optronix-pon/OP821GWVDGB" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product2'>
//     <img className='product_s1v1_img' src={c82Img} alt="82C+" />
//     <h3 className='products1v_name_option'>OP821GWV-D</h3>
//     <Link to="/optronix-pon/OP821GWVD" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product3'>
//     <img className='product_s1v1_img' src={w1cImg} alt="W1C" />
//     <h3 className='products1v_name_option'>OP821GWV</h3>
//     <Link to="/optronix-pon/OP821GWV" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product4'>
//     <img className='product_s1v1_img' src={fc8rImg} alt="FC8R" />
//     <h3 className='products1v_name_option'>OP801GW</h3>
//     <Link to="/optronix-pon/OP801GW" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   </div>
//     </div>
//   );
// };

// export default Optronixponproductthirteen;




import React, { useState, useEffect } from 'react';

import '../index.css';
import '../../pages/page.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../common/ProductLeadModal';

import op08 from "../img/OP101X.png";
import opPdf from "../img/op101x.pdf";
// remove subz2c, subw1c, sub82c, subfc8r imports
import z2cImg from '../img/op821GwV-Dp.png';
import c82Img from '../img/OP821GWV-D-removebg-preview.png';
import w1cImg from '../img/Op821GWV.png';
import fc8rImg from '../img/OP821GW.png';
import subfc8r from "../img/OP100P4.webp";



const Optronixponproductthirteen = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(op08);
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
    document.title = 'Optronix: OP-101X XPON ONU | 1GE Router for FTTH (EPON/GPON)';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'The Optronix OP-101X is a compact 1GE XPON ONU (ONT) featuring dual-mode auto-switching between EPON and GPON. Ideal for high-speed FTTH, FTTO, and FTTD broadband access.';

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
      document.title = 'Optronix: OP-101X XPON ONU | 1GE Router for FTTH (EPON/GPON)';
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
          <span className="current">OP-101X</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}







              <h1 className="hero-title">OP-101X</h1>
              <p className="hero-desc">
                A highly reliable, dual-mode ONU designed for FTTH, FTTO, and FTTD applications. It automatically accesses EPON/GPON OLTs, features a powerful firewall, and supports Layer 2/Layer 3 functions.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
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
                <li><strong>XPON Dual Mode:</strong> Automatic EPON/GPON OLT Access.</li>
                <li><strong>Port Configuration:</strong> 1 Gigabit Ethernet (GE) Port.</li>
                <li><strong>Advanced Security:</strong> Powerful Firewall (DDOS, ACL/MAC/URL Filtering) and Rogue ONU Detection.</li>
                <li><strong>Compliance:</strong> Meets IEEE802.3ah and ITU-T G.984 international standards.</li>
                <li><strong>Versatile:</strong> Supports both Bridging and Routing Mode.</li>
                <li><strong>Wide Temperature Range:</strong> Operates from -10°C to +55°C.</li>
              </ul>





            </div>

            <div className="side-stack">


              <h4 className="panel-title-sm">Performance at a glance</h4>

              <div className="perf-table-wrap" style={{ marginTop: '12px' }}>
                <table className="perf-table">
                  <tbody>
                    <tr><th> Dimension </th><td>82mm x 82mm x 25mm(L X W X H)</td></tr>
                    <tr><th> Net Weight</th><td> 0.085kg</td></tr>
                    <tr><th> Power Supply</th><td> less than 4W</td></tr>
                    <tr><th>Interface</th><td>1GE</td></tr>
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
                        <tr><th>Feature</th><th>Specification</th></tr>
                      </thead>
                      <tbody>
                        <tr><td>Product Type</td><td>1*XPON + 1GE ONU</td></tr>
                        <tr><td>PON Interface</td><td>1 XPON port (EPON PX20+ & GPON Class B+)</td></tr>
                        <tr>
                          <td>LAN Interface</td>
                          <td>1*GE, Auto-negotiation RJ45 connector</td>
                        </tr>
                        <tr>
                          <td>

                            Connector Type</td>
                          <td>SC single mode, SC/UPC</td>
                        </tr>
                        <tr><td>

                          Wavelength</td><td>TX 1310nm, RX 1490nm</td></tr>
                        <tr><td>

                          TX Optical Power</td><td>0 ~ +4dBm</td></tr>
                        <tr><td>RX Sensitivity</td><td>-27dBm</td></tr>
                        <tr><td>

                          Transmission Distance</td><td>

                            20KM</td></tr>
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
                        <tr><th>Feature Category</th><th>Key Functions</th></tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Layer 3 (L3)</td>
                          <td>
                            Supports IPv4/IPv6, DHCP/PPPOE/Static IP, Static route, NAT
                          </td>
                        </tr>
                        <tr>
                          <td>Management</td>
                          <td>
                            WEB, TELNET, CLI, CTC OAM 2.0/2.1, ITUT984.x OMCI
                          </td>
                        </tr>
                        <tr>
                          <td>VLAN</td>
                          <td>Tag, Transparent, Trunk (max 8 vlans), 1:1 Translation</td>
                        </tr>
                        <tr>
                          <td>QOS</td>
                          <td>4 queues, SP and WRR, 802.1P</td>
                        </tr>
                        <tr>
                          <td>Security/Protection</td>
                          <td>DDOS Filtering, Rogue ONU Detection, Hardware Dying Gasp</td>
                        </tr>
                        <tr>
                          <td>Authentication</td>
                          <td>SN/Psw/Loid/Loid+Psw, Mac/Loid/Mac+Loid</td>
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
              <p className="s-desc">HGU with 4GE and dual‑band WiFi.</p>
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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pageName="Optronix PON - OP-101X"
      />
    </div>
  );
};

export default Optronixponproductthirteen;
