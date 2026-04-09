import { mediaUrl } from '../../config/media';
// import React, { useState } from 'react'; // <-- useState imported here
// import './Deviserproduct.css';
// import { Link } from 'react-router-dom';

// import mediaUrl.image("ls-310.webp") from "../img/ls310.png";
// import ProductBg from "../img/headerbackground.png";
// import productImage4 from "../img/EP310-4.png";
// import mediaUrl.doc("ls300.pdf") from "../img/ls300.pdf";
// import productImage2 from "../img/LS310-2.png";
// import productImage3 from "../img/LS310-3.png";
// import z2cImg from "../img/ae3100_main.jpg";
// import c82Img from "../img/ae210.png";
// import w1cImg from "../img/vfl.png";
// import fc8rImg from "../img/ae3100_main.jpg";

// const sections = [
//   {

//     subtitle: (
//       <>

//          <span className="highlight" style={{color:"#3c5a9f"}}>LS310A Light Source-</span> <br></br>

//          Precision Power For<br></br>
//          Every Fiber Test.

//       </>
//     ),
//     img: mediaUrl.image("ls-310.webp")

//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>TWIN Mode</span><br></br>
//         <span className="highlight" style={{color:"#3c5a9f"}}>Support</span><br></br>

//         <br></br>
//         <h6>Auto-detects wavelength and frequency instantly for effortless, accurate fiber testing.</h6>
//       </>
//     ),
//     img: productImage2,

//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>Dual-Wavelength</span><br></br>
//         <span className="highlight" style={{color:"#3c5a9f"}}>Accuracy</span><br></br>

//         <br></br>

//         <h6>1310 & 1550 nm in One Powerful Light Source.</h6>
//       </>
//     ),
//     img: productImage3,
//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>Powered Longer</span> <br></br>



//         <br></br>
//         <h6>40+ Hours on Just 2 AA Batteries(Backlight Off).</h6>
//       </>
//     ),
//     img: productImage4,
//     buttons: (
//           <>
//           <button className='enquire_button'
//             style={{
//               margin:"10px"
//             }}

//               onClick={() => window.open("/contact", "_self")}
//             >
//               Enquire Now
//             </button>
//             <button className='enquire_button'

//               onClick={() => window.open(mediaUrl.doc("ls300.pdf"), "_blank")}  
//             >
//               Download Catalog
//             </button>
//           </>
//     )

//   }
// ];
// const Deviserproductseven = () => {
// const [productImage] = useState(mediaUrl.image("ls-310.webp"));
//   // Removed unused handleIconClick function

//   return (
//     <div>
//       {/* Header */}
//       <div className="extreme-zoom-container center-col">
// <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">LS-310 Series</h1>
//       <p className="hero-split__desc">
//         Discover the Deviser LS-310 Series Light Source – a high-precision, compact powerhouse crafted by
//         Deviser Instruments. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the LS-310 Series ensures efficient, flawless splicing in any environment.
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
//           onClick={() => window.open(mediaUrl.doc("ls300.pdf"), "_blank")}
//         >
//           Download Catalog
//         </button>
//       </div>
//     </div>

//     {/* Right: image */}
//     <div className="hero-split__image-wrap">
//       <img
//         src={mediaUrl.image("ls-310.webp")} /* or use any of your images like productImage2 */
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>

//         </div>

//       {/* ----------- DATA TABLES ADDED BELOW (with comments) ----------- */}


//   <div className="table-wrapper">
//     <table className="universal-table">
//       <thead>
//         <tr>
//           <th>Model</th>
//           <th>LS310A</th>
//           <th>LS310B</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Designation</td>
//           <td>Double Wavelength Light Source</td>
//           <td>Triple Wavelength Light Source</td>
//         </tr>
//         <tr>
//           <td>Wavelengths</td>
//           <td>1310 ± 20nm (FP-LD)<br/>1550 ± 20nm (FP-LD)</td>
//           <td>1310 ± 20nm (FP-LD)<br/>1550 ± 20nm (FP-LD)<br/>1490 ± 3nm (DFB)</td>
//         </tr>
//         <tr>
//           <td>Output power</td>
//           <td>&gt; -5dBm</td>
//           <td>&gt; -3dBm</td>
//         </tr>
//         <tr>
//           <td>RMS</td>
//           <td colSpan={2}>&lt; 5nm</td>
//         </tr>
//         <tr>
//           <td>Fiber</td>
//           <td colSpan={2}>Single-mode, 9/125μm</td>
//         </tr>
//         <tr>
//           <td>Power stability<br/>(after 15min warmup)</td>
//           <td>± 0.04dB @ 20°C (30 min)<br/>± 0.08dB @ 20°C (8 hrs)</td>
//           <td>± 0.04dB @ 20°C (30 min)<br/>± 0.08dB @ 20°C (8 hrs)</td>
//         </tr>
//         <tr>
//           <td>Optical adapter</td>
//           <td colSpan={2}>PC, FC / ST (default); APC, ST / LC (optional)</td>
//         </tr>
//         <tr>
//           <td>Tone generation</td>
//           <td colSpan={2}>270 Hz, 1kHz, 2kHz</td>
//         </tr>
//         <tr>
//           <td>Battery</td>
//           <td colSpan={2}>2x AA batteries; ≥ 40hrs continuous operation (backlight off)</td>
//         </tr>
//         <tr>
//           <td>Adapter</td>
//           <td colSpan={2}>AC 100V~240V ± 10% output / DC 5V</td>
//         </tr>
//         <tr>
//           <td>Operating Temperature</td>
//           <td colSpan={2}>-10°C ~ +60°C</td>
//         </tr>
//         <tr>
//           <td>Storage Temperature</td>
//           <td colSpan={2}>-20°C ~ +70°C</td>
//         </tr>
//         <tr>
//           <td>Dimensions</td>
//           <td colSpan={2}>7.3" × 3.3" × 1.8" (185mm × 85mm × 45mm)</td>
//         </tr>
//         <tr>
//           <td>Weight</td>
//           <td colSpan={2}>&lt; 230g (without battery)</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>



//       {/* ----------- END DATA TABLES ----------- */}

//       {/* Rest of your component remains unchanged */}
//       {/* <div className='product_d_feature'>
//         <div className='product_d_feature_art'>
//           <h3 style={{ fontSize: "32px" }}>All New Technology</h3>
//           <p style={{ marginTop: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa error nesciunt libero molestias laboriosam, illum culpa debitis atque? Optio illum, vitae quis cupiditate facere beatae provident possimus mollitia ipsa!</p>
//         </div>
//         <div className='product_d_feature_img'>
//           <img src="{eponoltf1}" alt="Feature" style={{ width: " 60%", display: "block", margin: "0 auto" }} />
//         </div>
//       </div> */}
//  <div className='similerproduct'><h3 style={{textAlign: "center"}}>Similar Product</h3></div>
//         <div className='product_s1v1_product'>
//   <div className='product_s1v1_product1'>
//     <img className='product_s1v1_img' src={z2cImg} alt="Z2C" />
//     <h3 className='products1v_name_option'>AE1001</h3>
//     <Link to="/deviserproducttwo" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product2'>
//     <img className='product_s1v1_img' src={c82Img} alt="82C+" />
//     <h3 className='products1v_name_option'>AE210 Series</h3>
//     <Link to="/deviserproductfive" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product3'>
//     <img className='product_s1v1_img' src={w1cImg} alt="W1C" />
//     <h3 className='products1v_name_option'>VF-10</h3>
//     <Link to="/deviserproductnine" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product4'>
//     <img className='product_s1v1_img' src={fc8rImg} alt="FC8R" />
//     <h3 className='products1v_name_option'>EP-310 Series</h3>
//     <Link to="/deviserproductsix" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   </div>
//     </div>
//   )
// }

// export default Deviserproductseven;






import React, { useState, useEffect } from 'react';
import './Deviserproduct.css';
import '../index.css';
import '../../pages/page.css';
import { Link } from 'react-router-dom';
import AccordionTable from '../AccordionTable';
import ProductLeadModal from '../common/ProductLeadModal';
const Deviserproductseven = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("ls-310.webp"));
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
    const imgs = [mediaUrl.image("AE1001.png"), mediaUrl.image("ae210.png"), mediaUrl.image("vfl.png"), mediaUrl.image("ep310.png")];
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
          <Link to="/deviser" style={{ color: "#333", textDecoration: "none" }}>Products</Link>
          <span className="sep">/</span>

          <span className="current">DEVISER LS-310 Series</span>

        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}
              <h1 className="hero-title">LS-310 Series</h1>
              <p className="hero-desc">
                Deviser LS‑310 Series light sources are precision, field‑ready transmitters designed for
                fast, reliable fiber testing. With TWIN Mode support, dual/triple wavelengths, and long battery
                life, LS‑310 pairs seamlessly with optical power meters for accurate loss measurements.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("ls300.pdf"), "_blank")}>
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
              <h3 className="panel-title">Why LS‑310 stands out</h3>
              <p className="panel-sub">
                Accurate, stable light source with dual/triple wavelengths and long battery life.
              </p>
              <ul className="feature-list">
                <li>TWIN Mode support for effortless, accurate testing.</li>
                <li>Dual wavelengths (LS310A) or triple wavelengths (LS310B).</li>
                <li>Stable output with excellent long‑term drift performance.</li>
                <li>PC, FC/ST default; APC, ST/LC optional adapters.</li>
                <li>40+ hours on 2×AA (backlight off).</li>
                <li>Compact, field‑ready build.</li>
                <li>High output stability ideal for precise loss measurements.</li>


                <li>Auto-shutdown feature to preserve battery life.</li>
                <li>Compatible with both single-mode and multimode fibers.</li>

              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr><th>Wavelengths</th><td>LS310A: 1310/1550 nm • LS310B: 1310/1490/1550 nm</td></tr>
                      <tr><th>Output power</th><td> −5 dBm (A) • −3 dBm (B)</td></tr>
                      <tr><th>Tone generation</th><td>270 Hz, 1 kHz, 2 kHz</td></tr>
                      <tr><th>Battery life</th><td>≥ 40 hrs (backlight off), 2×AA</td></tr>
                    </tbody>
                  </table>
                </div>

              </div>


            </div>
          </div>
        )}
        {activeTab === "specs" && (
          <div className="panel" style={mosaicBG(0.92)}>
            <div className="acc-group">

              {/* Optical Parameters */}
              <details className="acc" open>
                <summary className="acc-sum">
                  <span className="acc-title">Optical Parameters</span>
                </summary>

                <div className="acc-content">
                  <div className="acc-table">
                    <div className="acc-row acc-head">
                      <span>Model</span>
                      <span>LS310A</span>
                      <span>LS310B</span>
                    </div>

                    <div className="acc-row">
                      <span>Designation</span>
                      <span>Double Wavelength Light Source</span>
                      <span>Triple Wavelength Light Source</span>
                    </div>

                    <div className="acc-row">
                      <span>Wavelengths</span>
                      <span>
                        1310 ± 20 nm (FP-LD)<br />1550 ± 20 nm (FP-LD)
                      </span>
                      <span>
                        1310 ± 20 nm (FP-LD)<br />
                        1550 ± 20 nm (FP-LD)<br />
                        1490 ± 3 nm (DFB)
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>Output power</span>
                      <span>&gt; −5 dBm</span>
                      <span>&gt; −3 dBm</span>
                    </div>

                    <div className="acc-row">
                      <span>RMS</span>
                      <span colSpan="2">&lt; 5 nm</span>
                    </div>

                    <div className="acc-row">
                      <span>Fiber</span>
                      <span colSpan="2">Single-mode, 9/125 μm</span>
                    </div>

                    <div className="acc-row">
                      <span>Power stability (after 15 min)</span>
                      <span>
                        ± 0.04 dB @ 20°C (30 min)<br />± 0.08 dB @ 20°C (8 hrs)
                      </span>
                      <span>
                        ± 0.04 dB @ 20°C (30 min)<br />± 0.08 dB @ 20°C (8 hrs)
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>Optical adapter</span>
                      <span colSpan="2">PC, FC / ST (default); APC, ST / LC (optional)</span>
                    </div>

                    <div className="acc-row">
                      <span>Tone generation</span>
                      <span colSpan="2">270 Hz, 1 kHz, 2 kHz</span>
                    </div>

                    <div className="acc-row">
                      <span>Battery</span>
                      <span colSpan="2">2×AA; ≥ 40 hrs continuous (backlight off)</span>
                    </div>

                    <div className="acc-row">
                      <span>Adapter</span>
                      <span colSpan="2">AC 100–240 V ±10% / DC 5 V</span>
                    </div>

                    <div className="acc-row">
                      <span>Operating Temperature</span>
                      <span colSpan="2">−10 ~ +60 °C</span>
                    </div>

                    <div className="acc-row">
                      <span>Storage Temperature</span>
                      <span colSpan="2">−20 ~ +70 °C</span>
                    </div>

                    <div className="acc-row">
                      <span>Dimensions</span>
                      <span colSpan="2">7.3″ × 3.3″ × 1.8″ (185 × 85 × 45 mm)</span>
                    </div>

                    <div className="acc-row">
                      <span>Weight</span>
                      <span colSpan="2">&lt; 320 g (without battery)</span>
                    </div>
                  </div>
                </div>
              </details>

            </div>
          </div>
        )}


        {activeTab === 'accessories' && (
          <div className="stack">
            <div className="panel" style={mosaicBG(0.92)}>
              <h3 className="panel-title">Accessories & bundles</h3>
              <p className="panel-sub">
                The Deviser ecosystem includes a complete range of accessories and basic items to keep your field
                teams productive and your testing efficient.
              </p>

              <div className="acc-group">
                <details className="acc" open>
                  <summary className="acc-sum">
                    <span className="acc-title">Accessories for Splicer</span>
                  </summary>
                  <div className="acc-content">
                    <div className="acc-table">
                      <div className="acc-row acc-head"><span>Part Name</span><span>Part No</span><span>Remarks</span></div>
                      {accessoriesData.forSplicer.map((r, i) => (
                        <div className="acc-row" key={`fs-${i}`}><span>{r.name}</span><span>{r.part}</span><span>{r.remarks}</span></div>
                      ))}
                    </div>
                  </div>
                </details>

                <details className="acc">
                  <summary className="acc-sum">
                    <span className="acc-title">Accessories</span>
                  </summary>
                  <div className="acc-content">
                    <div className="acc-table">
                      <div className="acc-row acc-head"><span>Part Name</span><span>Part No</span><span>Remarks</span></div>
                      {accessoriesData.accessories.map((r, i) => (
                        <div className="acc-row" key={`acc-${i}`}><span>{r.name}</span><span>{r.part}</span><span>{r.remarks}</span></div>
                      ))}
                    </div>
                  </div>
                </details>

                <details className="acc">
                  <summary className="acc-sum">
                    <span className="acc-title">Fiber Protection Sleeve</span>
                  </summary>
                  <div className="acc-content">
                    <div className="acc-table">
                      <div className="acc-row acc-head"><span>Part</span><span></span><span>Remarks</span></div>
                      {accessoriesData.fiberSleeves.map((r, i) => (
                        <div className="acc-row" key={`fps-${i}`}><span>{r.name}</span><span>{r.part}</span><span>{r.remarks}</span></div>
                      ))}
                    </div>
                  </div>
                </details>

                <details className="acc">
                  <summary className="acc-sum">
                    <span className="acc-title">Basic Accessories</span>
                  </summary>
                  <div className="acc-content">
                    <div className="acc-table three">
                      <div className="acc-row acc-head"><span>Part Name</span><span>Part No</span><span>QTY</span></div>
                      {accessoriesData.basic.map((r, i) => (
                        <div className="acc-row" key={`basic-${i}`}><span>{r.name}</span><span>{r.part}</span><span>{r.qty}</span></div>
                      ))}
                    </div>
                  </div>
                </details>
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
            <span className="s-brand">DEVISER</span>
            <div className="s-media"><img src={mediaUrl.image("AE1001.png")} loading="lazy" alt="AE1001" /></div>
            <div className="s-body">
              <h4 className="s-title">AE1001</h4>
              <p className="s-desc">Handheld optical power meter/light source.</p>
            </div>
            <Link to="/deviser/AE1001" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">DEVISER</span>
            <div className="s-media"><img src={mediaUrl.image("ae210.png")} loading="lazy" alt="AE210 Series" /></div>
            <div className="s-body">
              <h4 className="s-title">AE210 Series</h4>
              <p className="s-desc">Portable OPM/OLS series for field testing.</p>
            </div>
            <Link to="/deviser/AE210" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">DEVISER</span>
            <div className="s-media"><img src={mediaUrl.image("vfl.png")} loading="lazy" alt="VF-10" /></div>
            <div className="s-body">
              <h4 className="s-title">VF-10</h4>
              <p className="s-desc">Visual fault locator for quick breaks/leaks.</p>
            </div>
            <Link to="/deviser/VF10" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">DEVISER</span>
            <div className="s-media"><img src={mediaUrl.image("ep310.png")} loading="lazy" alt="EP-310 Series" /></div>
            <div className="s-body">
              <h4 className="s-title">EP-310 Series</h4>
              <p className="s-desc">PON power meters for GPON/EPON testing.</p>
            </div>
            <Link to="/deviser/EP310" className="s-cta">
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
        pageName="Deviser - EP710"
      />
    </div>
  );
};

export default Deviserproductseven;