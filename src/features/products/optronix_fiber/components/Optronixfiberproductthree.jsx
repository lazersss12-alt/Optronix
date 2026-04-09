import { mediaUrl } from '../../../../config/media';
// import React from 'react';
// import './Optronixfiberproduct.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("NEO Series Fiber.png") from "../../../../assets/images/NEO Series Fiber.png"; // Replace with actual image if needed
// import mediaUrl.image("Neo fiber Technical Sheet.png") from "../../../../assets/images/Neo fiber Technical Sheet.png"; // Replace with actual schematic image

// import mediaUrl.image("fiber cable.png") from "../../../../assets/images/fiber cable.png";
// import mediaUrl.image("Drop cable .png") from "../../../../assets/images/Drop cable .png";
// import mediaUrl.image("NEO Series Fiber.png") from "../../../../assets/images/NEO Series Fiber.png";
// import mediaUrl.image("Gold series fiber .png") from "../../../../assets/images/Gold series fiber .png";
import ProductLeadModal from '../../../../components/common/ProductLeadModal';
// import { useState } from 'react';
// import mediaUrl.doc("NEO fiber Technical Sheet.pdf") from "../../../../assets/images/sumitomow1c.pdf";
// const Optronixfiberproductthree = () => {
//   const [productImage, setProductImage] = useState(mediaUrl.image("NEO Series Fiber.png"));
  const [enquireOpen, setEnquireOpen] = useState(false);
//   return (
//     <div>
//        <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">NEO Series Fiber</h1>
//       {/* <p className="hero-split__desc">
//         Our CATV EDFA is a high-performance amplifier for 1550nm fiber transmission, delivering powerful, distortion-free output with excellent gain flatness for analog/digital TV, high-speed internet, and voice over long distances. With ultra-low noise, outstanding OSNR, and intelligent network monitoring (SNMP/Web/RS-232), it ensures carrier-grade reliability. Its compact rack-mount design, redundant power supply, and versatile configurations make it ideal for CATV headends, telecom backbones, and broadband networks.
//       </p> */}

//       <div className="hero-split__cta">
//         <button
//           className="btn-pill btn-primary"
//           onClick={() => setEnquireOpen(true)}
//         >
//           Enquire Now
//         </button>
//         <button
//           className="btn-pill btn-outline"
//           onClick={() => window.open(mediaUrl.image("Neo fiber Technical Sheet.png"), "_blank")}
//         >
//           Download Catalog
//         </button>
//       </div>
//     </div>

//     {/* Right: image */}
//     <div className="hero-split__image-wrap">
//       <img
//         src={mediaUrl.image("NEO Series Fiber.png")} /* or use any of your images like productImage2 */
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>

//       {/* Construction Details Table */}

//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr><th colSpan="2">Construction Details</th></tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td rowSpan={4}>No of Fiber and Color</td>
//                 <td>02F per Tube - Blue, Natural.</td>
//               </tr>
//               <tr>
//                 <td>04F per Tube - Blue, Orange, Green and Natural.</td>
//               </tr>
//               <tr>
//                 <td>06F per Tube - Blue, Orange, Green, Brown, Gray and Natural.</td>
//               </tr>
//               <tr>
//                 <td>12F per Tube - Blue, Orange, Green, Brown, Gray, White, Red, Black, Yellow, Violet, Pink and Natural.</td>
//               </tr>
//               <tr>
//                 <td>FRP</td>
//                 <td>UV-Cured Uncoated dual FRP</td>
//               </tr>
//               <tr>
//                 <td>Loose Tube</td>
//                 <td>PBT Loose Tube Filled With Thixotropic Jelly</td>
//               </tr>
//               <tr>
//                 <td>HDPE Coating</td>
//                 <td>Single / Double Coating</td>
//               </tr>
//               <tr>
//                 <td>Yarn Count</td>
//                 <td>600 / 1200 TEX</td>
//               </tr>
//               <tr>
//                 <td>No of Loose Tube</td>
//                 <td>1 Loose Tube</td>
//               </tr>
//               <tr>
//                 <td>Tube Identification</td>
//                 <td>Natural</td>
//               </tr>
//               <tr>
//                 <td>Strength Member</td>
//                 <td>2 Nos. (0.8mm) - FRP Embedded in Sheath</td>
//               </tr>
//               <tr>
//                 <td>Outer Jacket</td>
//                 <td>PE Black Color</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//       {/* Schematic Diagram Section */}
//       <div className="table-z2c-">
//         <div className="table-container">
//           <h3 className="section-heading">Schematic Diagram (Not to Scale)</h3>
//           <img loading="lazy" src={mediaUrl.image("Neo fiber Technical Sheet.png")} alt="Drop Cable Schematic Diagram" className="diagram-image" style={{ width: '820px', maxWidth: '100%', height: 'auto', margin: '0 auto', display: 'block' }} />
//         </div>
//       </div>

//       {/* Fibre Characteristics Table */}

//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr><th colSpan="2">Fibre Characteristics (As per ITU-T Rec. G.652 D)</th></tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td colSpan={2}><b>Attenuation (Transmission Characteristics)</b></td>
//               </tr>
//               <tr>
//                 <td>@ 1310 nm</td>
//                 <td>≤ 0.4 (dB/Km) &nbsp; | &nbsp; Mode Field Diameter @ 1310 nm: 9.2 ± 0.4 μm</td>
//               </tr>
//               <tr>
//                 <td>@ 1550 nm</td>
//                 <td>≤ 0.2 (dB/Km) &nbsp; | &nbsp; Mode Field Diameter @ 1550 nm: 10.3 ± 0.5 μm</td>
//               </tr>
//               <tr>
//                 <td>Cladding Diameter</td>
//                 <td>125 ± 1 μm</td>
//               </tr>
//               <tr>
//                 <td colSpan={2}><b>Dispersion</b></td>
//               </tr>
//               <tr>
//                 <td>Cladding Non Circularity</td>
//                 <td>≤ 1%</td>
//               </tr>
//               <tr>
//                 <td>Core Clad Concentricity Error</td>
//                 <td>≤ 0.5 μm</td>
//               </tr>
//               <tr>
//                 <td>1285-1330nm</td>
//                 <td>≤ 3.5 ps/nm.km &nbsp; | &nbsp; Coating Diameter (Uncolored): 245 ± 10 μm</td>
//               </tr>
//               <tr>
//                 <td>1270-1340nm</td>
//                 <td>≤ 5.3 ps/nm.km &nbsp; | &nbsp; Coating/Cladding Concentricity: ≤ 12 μm</td>
//               </tr>
//               <tr>
//                 <td>1550nm</td>
//                 <td>≤ 18 ps/nm.km &nbsp; | &nbsp; Cut Off Wavelength: Cable Cut Off Wavelength ≤ 1260 nm</td>
//               </tr>
//               <tr>
//                 <td>1625nm</td>
//                 <td>≤ 22.0 ps/nm.km &nbsp; | &nbsp; Fiber Cut Off Wavelength: ≤ 1320 nm</td>
//               </tr>
//               <tr>
//                 <td colSpan={2}><b>B. Polarization Mode Dispersion at 1310 & 1550 nm</b></td>
//               </tr>
//               <tr>
//                 <td>At Fibre Stage</td>
//                 <td>≤ 0.2 ps/sqrt.km</td>
//               </tr>
//               <tr>
//                 <td>At Cable Stage</td>
//                 <td>≤ 0.3 ps/sqrt.km</td>
//               </tr>
//               <tr>
//                 <td colSpan={2}><b>C. Dispersion Slope & Wave Length</b></td>
//               </tr>
//               <tr>
//                 <td>Zero Dispersion Wavelength</td>
//                 <td>1300-1324 nm</td>
//               </tr>
//               <tr>
//                 <td>Zero Dispersion Slope</td>
//                 <td>≤ 0.092 ps/nm².km</td>
//               </tr>
//               <tr>
//                 <td colSpan={2}><b>Cable Mechanical & Physical Characteristics</b></td>
//               </tr>
//               <tr>
//                 <td><b>Cable Mechanical Characteristics</b></td>
//                 <td><b>Cable Physical Characteristics</b></td>
//               </tr>
//               <tr>
//                 <td>Max. Tensile Strength: 280 N (Short Term)</td>
//                 <td>Cable Diameter: 5.8mm / 6mm</td>
//               </tr>
//               <tr>
//                 <td>Crush Resistance: 1000 N/10 CM (Short Term)</td>
//                 <td>Nominal Cable Weight: Approx. 28 kg/km</td>
//               </tr>
//               <tr>
//                 <td>Impact Resistance: 10.0 N.m</td>
//                 <td>Packing Length: 1/2 km ± 5%</td>
//               </tr>
//               <tr>
//                 <td>Min. Bending Radius (Long Term): 25D (D= Cable Diameter mm)</td>
//                 <td>Packing Details: 1 Coil Form</td>
//               </tr>
//               <tr>
//                 <td colSpan={2}><b>Mechanical & Operating Characteristics</b></td>
//               </tr>
//               <tr>
//                 <td>Operating Temperature</td>
//                 <td>-20°C to +70°C</td>
//               </tr>
//               <tr>
//                 <td>Fibre Proof Test</td>
//                 <td>1%</td>
//               </tr>
//               <tr>
//                 <td>Stripability Force</td>
//                 <td>1.3 &lt; f &lt; 8.9 N</td>
//               </tr>
//               <tr>
//                 <td>Fibre Curl</td>
//                 <td>4 meter radius of curvature</td>
//               </tr>
//               <tr>
//                 <td colSpan={2} style={{color: "black"}}>
//                   All Tests Shall be Carried out as per IEC Standards. Change in attenuation Shall be ≤0.05 dB/km
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//       {/* Cable Printing Details */}
//       <div className='similerproduct'>
//        <h2 style={{ textAlign: "center" }}>Similar Products</h2>
//       </div>
//      <div className='product_s1v1_product'>
//   <div className='product_s1v1_product1'>
//     <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("fiber cable.png")} alt="OP-100P8G" />
//     <h3 className='product_s1v1_name_option'>Optronix Platinum</h3>
//     <Link to="/optronixfiberproductfive" style={{ textDecoration: "none" }}>
//       <button className='productz2c_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product2'>
//     <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("Drop cable .png")} alt="82C+" />
//     <h3 className='product_s1v1_name_option'>Optronix Drop Cable</h3>
//     <Link to="/optronixfiberproducttwo" style={{ textDecoration: "none" }}>
//       <button className='productz2c_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product3'>
//     <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("NEO Series Fiber.png")} alt="W1C" />
//     <h3 className='product_s1v1_name_option'>Optronix NEO</h3>
//     <Link to="/optronixfiberproductthree" style={{ textDecoration: "none" }}>
//       <button className='productz2c_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product4'>
//     <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("Gold series fiber .png")} alt="FC8R" />
//     <h3 className='product_s1v1_name_option'>Optronix Gold</h3>
//     <Link to="/optronixfiberproductfour" style={{ textDecoration: "none" }}>
//       <button className='productz2c_button_option'>Know More</button>
//     </Link>
//   </div>
//   </div>
//     </div>
//   );
// };

// export default Optronixfiberproductthree;




import React, { useState, useEffect } from 'react';

import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';

const Optronixfiberproductthree = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("NEO Series Fiber.png"));

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
    document.title = 'OPTRONIX NEO SERIES Unitube SM G.652D Fiber Optic Cable (2F-12F)';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'The OPTRONIX NEO SERIES is a cost-effective, un-armoured Unitube cable (2F-12F). Features SM G.652D fiber, low $\le0.4~dB/Km$ attenuation, and $280~N$ tensile strength. Ideal for lightweight indoor/outdoor FTTx.';

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
      document.title = 'OPTRONIX NEO SERIES Unitube SM G.652D Fiber Optic Cable (2F-12F)';
    };
  }, []);
  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    if (lightboxOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

  // Light mosaic background using your images
  const mosaicBG = (alpha = 0.92) => {
    const imgs = [mediaUrl.image("fiber cable.png"), mediaUrl.image("Drop cable .png"), mediaUrl.image("NEO Series Fiber.png"), mediaUrl.image("Gold series fiber .png")];
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
          <Link to="/optronix-fiber" style={{ color: "#333", textDecoration: "none" }}>Products</Link>

          <span className="sep">/</span>
          <span className="current">NEO Series Fiber</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              <h1 className="hero-title">Optronix NEO Series</h1>
              <p className="hero-desc"> The NEO Series delivers dependable performance in a compact, easy-to-deploy design. Built for FTTH, ISP, enterprise, and campus networks, it offers stable optical performance and robust mechanical strength at a cost-efficient level.</p>

              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("NEO fiber Technical Sheet.pdf"), "_blank")}>
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
            <button className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
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
              <li>ITU-T G.652D compliant single-mode fibre for consistent long-distance transmission</li>
              <li>Low attenuation: ≤0.4 dB/km @ 1310 nm, ≤0.2 dB/km @ 1550 nm</li>
              <li>NEO fiber Technical Sheet</li>
              <li>Central PBT loose tube construction filled with thixotropic jelly for moisture protection</li>
              <li>UV-cured dual FRP rods for stable tensile strength</li>
              <li>PE black outer jacket with optional single/double coating</li>
              <li>Compact diameter (5.8–6.0 mm) for easy pulling and installation</li>
              <li>Stable performance across −20°C to +70°C environments</li>
              <li>Perfect for FTTH, drop routes, campus networking, and short-distance fibre runs</li>
            </ul>

            <section className="overview-section" style={{ marginTop: 18 }}>
              <h3 className="section-heading">Schematic Diagram (Not to Scale)</h3>

              <div className="diagram-wrapper">
                <img loading="lazy"
                  src={mediaUrl.image("Neo fiber Technical Sheet.png")}
                  alt="Flat Cable Schematic Diagram"
                  className="diagram-image"
                />
              </div>
            </section>

          </div>

        )}

        {/* SPECIFICATIONS as accordions */}
        {activeTab === 'specs' && (
          <div className="panel" style={mosaicBG(0.92)}>
            <h3 className="panel-title">Fibre Characteristics (ITU-T Rec. G.652.D)</h3>

            {[
              /* -------------------- FIBRE CHARACTERISTICS -------------------- */
              {
                title: 'Fibre Characteristics (ITU-T G.652.D)',
                content: (
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr><th colSpan="3">Fibre Characteristics (ITU-T G.652.D)</th></tr>
                        <tr>
                          <th>Parameter Category</th>
                          <th>Parameter</th>
                          <th>Specification</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Transmission</td>
                          <td>@ 1310 nm</td>
                          <td>≤0.4 dB/km</td>
                        </tr>
                        <tr>
                          <td>Transmission</td>
                          <td>@ 1550 nm</td>
                          <td>≤0.2 dB/km</td>
                        </tr>

                        <tr>
                          <td>Geometrical</td>
                          <td>Mode Field Diameter @ 1310 nm</td>
                          <td>9.2 ± 0.4 µm</td>
                        </tr>
                        <tr>
                          <td>Geometrical</td>
                          <td>Cladding Diameter</td>
                          <td>125 ± 1 µm</td>
                        </tr>

                        <tr>
                          <td>Chromatic Dispersion</td>
                          <td>1550 nm</td>
                          <td>≤18 ps/nm·km</td>
                        </tr>

                        <tr>
                          <td>Polarization Mode Dispersion</td>
                          <td>At Fibre Stage</td>
                          <td>≤0.2 ps/√km</td>
                        </tr>

                        <tr>
                          <td>Cut Off Wavelength</td>
                          <td>Cable Cut Off Wavelength</td>
                          <td>≤1260 nm</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )
              },

              /* -------------------- CONSTRUCTION & MECHANICAL -------------------- */
              {
                title: 'Construction & Mechanical Characteristics',
                content: (
                  <div className="table-wrapper">
                    <table className="universal-table">
                      <thead>
                        <tr><th colSpan="2">Construction & Mechanical Characteristics</th></tr>
                        <tr><th>Parameters</th><th>Specifications</th></tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Fiber Count Options</td>
                          <td>2F, 4F, 6F, 12F</td>
                        </tr>

                        <tr>
                          <td>No. of Loose Tube</td>
                          <td>1 Loose Tube</td>
                        </tr>

                        <tr>
                          <td>Loose Tube Material</td>
                          <td>PBT Loose Tube filled with Thixotropic Jelly</td>
                        </tr>

                        <tr>
                          <td>Strength Member</td>
                          <td>2 Nos. (0.8 mm) – FRP embedded in sheath</td>
                        </tr>

                        <tr>
                          <td>Outer Jacket</td>
                          <td>PE Black Color</td>
                        </tr>

                        <tr>
                          <td>Max. Tensile Strength (Short Term)</td>
                          <td>280 N</td>
                        </tr>

                        <tr>
                          <td>Crush Resistance (Short Term)</td>
                          <td>1000 N / 10 cm</td>
                        </tr>

                        <tr>
                          <td>Min. Bending Radius (Long Term)</td>
                          <td>25D (D = Cable Diameter in mm)</td>
                        </tr>

                        <tr>
                          <td>Test Standard Requirement</td>
                          <td>Change in attenuation shall be ≤0.05 dB/km as per IEC standards</td>
                        </tr>

                        <tr>
                          <td>Cable Diameter</td>
                          <td>5.8 mm / 6 mm</td>
                        </tr>

                        <tr>
                          <td>Nominal Cable Weight</td>
                          <td>Approx. 28 kg/km</td>
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


        {/* ORDERING */}

      </section>

      {/* Similar products */}
      <section className="container similar-wrap similar--pro">
        <div className="similar-head">
          <h3>Similar products</h3>
        </div>



        <div className="s-grid">
          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img src={mediaUrl.image("fiber cable.png")} loading="lazy" alt="Optronix Platinum" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("Drop cable .png")} loading="lazy" alt="Optronix Drop Cable" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("NEO Series Fiber.png")} loading="lazy" alt="Optronix NEO" /></div>
            <div className="s-body">
              <h4 className="s-title">Optronix NEO</h4>
              <p className="s-desc">High-density NEO series fiber.</p>
            </div>
            <Link to="/optronix-fiber/optronix-neo" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">OPTRONIX</span>
            <div className="s-media"><img src={mediaUrl.image("Gold series fiber .png")} loading="lazy" alt="Optronix Gold" /></div>
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
    
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Optronix NEO Series"
      /></div>
  );
};

export default Optronixfiberproductthree;
