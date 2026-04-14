import { mediaUrl } from '../../../../config/media';
// import React, { useState } from 'react'; // <-- useState imported here
// import './Deviserproduct.css';
// import { Link } from 'react-router-dom';

// import mediaUrl.image("ls300.webp") from "../../../../assets/images/ep710.png";
// import ProductBg from "../../../../assets/images/headerbackground.png";
// import productImage4 from "../../../../assets/images/EP310-4.png";
// import mediaUrl.doc("ls300.pdf") from "../../../../assets/images/ls300.pdf";
// import productImage2 from "../../../../assets/images/EP710-2.png";
// import productImage3 from "../../../../assets/images/LS310-3.png";
// // import eponoltf1 from "../../../../assets/images/eight.jpg";
// import z2cImg from "../../../../assets/images/ae3100_main.jpg";
// import c82Img from "../../../../assets/images/ae210.png";
// import w1cImg from "../../../../assets/images/vfl.png";
// import fc8rImg from "../../../../assets/images/ae3100_main.jpg";

// const sections = [
//   {

//     subtitle: (
//       <>

//          <span className="highlight" style={{color:"#3c5a9f"}}>EP710A Multimeter:</span> <br></br>
//          Light Source + Power<br></br>
//          Meter in One Smart<br></br>
//          Device.



//       </>
//     ),
//     img: mediaUrl.image("ls300.webp")

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

//         <span className="highlight" style={{color:"#3c5a9f"}}>Wide</span><br></br>
//         <span className="highlight" style={{color:"#3c5a9f"}}>Compatibility,</span><br></br>
//         <span className="highlight" style={{color:"#3c5a9f"}}>Wide Range -</span><br></br>

//         <br></br>

//         <h6>FC/SC Ready, ST/LC Optional,</h6>
//         <h6>-50 to +26dBm Input Power.</h6>
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

//               onClick={() => setEnquireOpen(true)}
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
// const Deviserproducteight = () => {
// const [productImage] = useState(mediaUrl.image("ls300.webp"));
//   const [enquireOpen, setEnquireOpen] = useState(false);

// // Removed unused handleIconClick function

//   return (
//     <div>
//       {/* Header */}
//       <div className="extreme-zoom-container center-col">
//  <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">EP-710 Series</h1>
//       <p className="hero-split__desc">
//         Discover the Deviser EP-710 Series – a high-precision, compact powerhouse crafted by
//         Deviser Instruments. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the EP-710 Series ensures efficient, flawless splicing in any environment.
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
//           onClick={() => window.open(mediaUrl.doc("ls300.pdf"), "_blank")}
//         >
//           Download Catalog
//         </button>
//       </div>
//     </div>

//     {/* Right: image */}
//     <div className="hero-split__image-wrap">
//       <img
//         src={mediaUrl.image("ls300.webp")} /* or use any of your images like productImage2 */
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
//        <tr><th colSpan="6">Optical Power Meter</th></tr>

//         <tr>
//           <th></th>
//           <th>EP710A</th>
//           <th>EP710B</th>
//           <th>EP710C</th>
//           <th>EP710D</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Input range</td>
//           <td colSpan={3}>-50 ~ +26dBm</td>
//           <td>-70 ~ +10dBm</td>
//         </tr>
//         <tr>
//           <td>Accuracy</td>
//           <td colSpan={4}>± 0.17dB (± 3%)</td>
//         </tr>
//         <tr>
//           <td>Liner</td>
//           <td colSpan={4}>± 0.07dB</td>
//         </tr>
//         <tr>
//           <td>Resolution</td>
//           <td colSpan={4}>0.01 dBm, mW, μW, nW</td>
//         </tr>
//         <tr>
//           <td>Calibrated wavelength</td>
//           <td colSpan={4}>850, 980, 1300, 1310, 1490, 1550, 1610, 1625, 1650 nm</td>
//         </tr>
//         <tr>
//           <td>Connectors</td>
//           <td colSpan={4}>FC/SC (default); ST/LC (optional)</td>
//         </tr>
//         <tr>
//           <td>Auto detection</td>
//           <td colSpan={4}>Frequency: 270 Hz, 1kHz, 2kHz<br/>Wavelength: 850, 1310, 1490, 1550, 1610nm</td>
//         </tr>
//         <tr>
//           <td>Insertion loss accuracy</td>
//           <td colSpan={4}>&lt; 1 dB</td>
//         </tr>
//         <tr>
//           <th colSpan={5}>Light Source</th>
//         </tr>
//         <tr>
//           <td>Central wavelength</td>
//           <td>1310 ± 20nm, 1550 ± 20nm (FP)</td>
//           <td>1310 ± 20nm, 1550 ± 20nm (FP)<br/>1490 ± 3 nm (DFB)</td>
//           <td>1310 ± 20nm, 1550 ± 20nm (FP)</td>
//           <td>1310 ± 20nm, 1550 ± 20nm (FP)<br/>1490 ± 3 nm (DFB)</td>
//         </tr>
//         <tr>
//           <td>Output power</td>
//           <td colSpan={3}>&gt; -5dBm</td>
//           <td>&gt; -3dBm</td>
//         </tr>
//         <tr>
//           <td>Power stability<br/>(after 15min. warmup)</td>
//           <td colSpan={4}>± 0.04dB @ 20°C (30min)<br/>± 0.08dB @ 20°C (8hrs)</td>
//         </tr>
//         <tr>
//           <td>Tone generation</td>
//           <td colSpan={4}>270Hz, 1kHz, 2kHz</td>
//         </tr>
//         <tr>
//           <td>Optical adapter</td>
//           <td colSpan={4}>PC, FC/SC (default); APC, ST/LC (optional)</td>
//         </tr>
//         <tr>
//           <td>VFL</td>
//           <td colSpan={4}>10mW</td>
//         </tr>
//         <tr>
//           <td>Power</td>
//           <td colSpan={4}>2x AA batteries<br/>AC 100~240V ±10% output / DC 5V (adapter)</td>
//         </tr>
//         <tr>
//           <td>Working time (backlight off)</td>
//           <td colSpan={4}>&gt;100 hrs (OPM); &gt;40 hrs (light source); &gt;10 hrs (VFL)</td>
//         </tr>
//         <tr>
//           <td>Operating temperature</td>
//           <td colSpan={4}>-10°C ~ +60°C (14°F ~ +140°F)</td>
//         </tr>
//         <tr>
//           <td>Storage temperature</td>
//           <td colSpan={4}>-20°C ~ +70°C (-4°F ~ +158°F)</td>
//         </tr>
//         <tr>
//           <td>Dimensions (L×W×H)</td>
//           <td colSpan={4}>7.3" × 3.3" × 1.8" (185mm × 85mm × 45mm)</td>
//         </tr>
//         <tr>
//           <td>Weight</td>
//           <td colSpan={4}>&lt; 300g (w/o batteries)</td>
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
//           <img loading="lazy" src="{eponoltf1}" alt="Feature" style={{ width: " 60%", display: "block", margin: "0 auto" }} />
//         </div>
//       </div> */}
//  <div className='similerproduct'><h3 style={{textAlign: "center"}}>Similar Product</h3></div>
//          <div className='product_s1v1_product'>
//   <div className='product_s1v1_product1'>
//     <img loading="lazy" className='product_s1v1_img' src={z2cImg} alt="Z2C" />
//     <h3 className='products1v_name_option'>AE1001</h3>
//     <Link to="/deviserproducttwo" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product2'>
//     <img loading="lazy" className='product_s1v1_img' src={c82Img} alt="82C+" />
//     <h3 className='products1v_name_option'>AE210 Series</h3>
//     <Link to="/deviserproductfive" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product3'>
//     <img loading="lazy" className='product_s1v1_img' src={w1cImg} alt="W1C" />
//     <h3 className='products1v_name_option'>VF-10</h3>
//     <Link to="/deviserproductnine" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   <div className='product_s1v1_product4'>
//     <img loading="lazy" className='product_s1v1_img' src={fc8rImg} alt="FC8R" />
//     <h3 className='products1v_name_option'>EP-310 Series</h3>
//     <Link to="/deviserproductsix" style={{ textDecoration: "none" }}>
//       <button className='products1v_button_option'>Know More</button>
//     </Link>
//   </div>
//   </div>
//     </div>
//   )
// }

// export default Deviserproducteight;

import React, { useState, useEffect } from 'react';
import './Deviserproduct.css';
import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';
import AccordionTable from '../../../../components/ui/AccordionTable';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';




const Deviserproducteight = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("ep710.webp"));
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
    document.title = 'Optronix: Deviser EP710 Optical Multimeter | OPM, OLS, VFL for FTTx';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'The Optronix Deviser EP710 is a 3-in-1 Optical Multimeter (OPM/OLS/VFL) for FTTx, PON, and CATV. Features wide power range (-70 to +26 dBm) and TWIN Mode auto-ID testing.';

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
      document.title = 'Optronix: Deviser EP710 Optical Multimeter | OPM, OLS, VFL for FTTx';
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
    const imgs = [mediaUrl.image("ae1001.webp"), mediaUrl.image("ae210.webp"), mediaUrl.image("vfl.webp"), mediaUrl.image("ep310.webp")];
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

          <span className="current">DEVISER EP-710 Series</span>

        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}
              <h1 className="hero-title">EP-710 Series</h1>
              <p className="hero-desc">
                EP710A multimeter combines a light source, optical power meter, and VFL in one compact device.
                With TWIN Mode support, wide power range, and broad connector compatibility, EP‑710 delivers fast,
                accurate fiber testing in the field.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
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
              <h3 className="panel-title">Why EP‑710 stands out</h3>
              <p className="panel-sub">
                Light source + power meter + VFL, in one long‑running handheld for quick, accurate testing.
              </p>
              <ul className="feature-list">
                <li>TWIN Mode support for effortless, accurate testing.</li>
                <li>OPM input range: −50 ~ +26 dBm (A/B/C), −70 ~ +10 dBm (D).</li>
                <li>LS wavelengths: 1310/1550 nm (A/C) +1490 nm DFB on B/D.</li>
                <li>FC/SC default, ST/LC optional; PC default, APC optional.</li>
                <li>Battery life: 100 hrs (OPM); 40 hrs (LS); 10 hrs (VFL).</li>
                <li>Compact, field‑ready build.</li>
                <li>High output stability for precise and repeatable measurements.
                </li>
                <li>Fast switching between test modes for efficient field workflows.</li>
                <li>Rugged housing designed for harsh outdoor and dusty environments.</li>
                <li>backlight display for clear visibility in low-light conditions.</li>
                <li>Auto-shutdown to extend battery life across long shifts.</li>
                <li>Supports continuous and modulated light for flexible testing.</li>

              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr><th>VFL</th><td>10mW</td></tr>
                      <tr><th>Weight</th><td>less than 300g</td></tr>
                      <tr><th>Tone generation</th><td>270 Hz, 1 kHz, 2 kHz</td></tr>
                      <tr><th>Dimensions</th><td>7.3" x 3.3" x 1.8"</td></tr>
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

              {/* Optical Power Meter */}
              <details className="acc" open>
                <summary className="acc-sum">
                  <span className="acc-title">Optical Power Meter</span>
                </summary>

                <div className="acc-content">
                  <div className="acc-table">

                    {/* Head Row */}
                    <div className="acc-row acc-head">
                      <span></span>
                      <span>EP710A</span>
                      <span>EP710B</span>
                      <span>EP710C</span>
                      <span>EP710D</span>
                    </div>

                    <div className="acc-row">
                      <span>Input range</span>
                      <span colSpan="3">-50 ~ +26 dBm</span>
                      <span>-70 ~ +10 dBm</span>
                    </div>

                    <div className="acc-row">
                      <span>Accuracy</span>
                      <span colSpan="4">± 0.17 dB (± 3%)</span>
                    </div>

                    <div className="acc-row">
                      <span>Linearity</span>
                      <span colSpan="4">± 0.07 dB</span>
                    </div>

                    <div className="acc-row">
                      <span>Resolution</span>
                      <span colSpan="4">0.01 dBm, mW, μW, nW</span>
                    </div>

                    <div className="acc-row">
                      <span>Calibrated wavelength</span>
                      <span colSpan="4">
                        850, 980, 1300, 1310, 1490, 1550, 1610, 1625, 1650 nm
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>Connectors</span>
                      <span colSpan="4">FC/SC (default); ST/LC (optional)</span>
                    </div>

                    <div className="acc-row">
                      <span>Auto detection</span>
                      <span colSpan="4">
                        Frequency: 270 Hz, 1 kHz, 2 kHz<br />
                        Wavelength: 850, 1310, 1490, 1550, 1610 nm
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>Insertion loss accuracy</span>
                      <span colSpan="4">&lt; 1 dB</span>
                    </div>

                  </div>
                </div>
              </details>

              {/* Light Source */}
              <details className="acc">
                <summary className="acc-sum">
                  <span className="acc-title">Light Source</span>
                </summary>

                <div className="acc-content">
                  <div className="acc-table">

                    <div className="acc-row acc-head">
                      <span></span>
                      <span>EP710A</span>
                      <span>EP710B</span>
                      <span>EP710C</span>
                      <span>EP710D</span>
                    </div>

                    <div className="acc-row">
                      <span>Central wavelength</span>
                      <span>1310 ± 20 nm, 1550 ± 20 nm (FP)</span>
                      <span>
                        1310 ± 20 nm, 1550 ± 20 nm (FP)<br />1490 ± 3 nm (DFB)
                      </span>
                      <span>1310 ± 20 nm, 1550 ± 20 nm (FP)</span>
                      <span>
                        1310 ± 20 nm, 1550 ± 20 nm (FP)<br />1490 ± 3 nm (DFB)
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>Output power</span>
                      <span colSpan="3">&gt; -5 dBm</span>
                      <span>&gt; -3 dBm</span>
                    </div>

                    <div className="acc-row">
                      <span>Power stability</span>
                      <span colSpan="4">
                        ±0.04 dB @ 20°C (30 min)<br />
                        ±0.08 dB @ 20°C (8 hrs)
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>Tone generation</span>
                      <span colSpan="4">270 Hz, 1 kHz, 2 kHz</span>
                    </div>

                    <div className="acc-row">
                      <span>Optical adapter</span>
                      <span colSpan="4">
                        PC, FC/SC (default); APC, ST/LC (optional)
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>VFL</span>
                      <span colSpan="4">10 mW</span>
                    </div>
                  </div>
                </div>
              </details>

              {/* General Specs */}
              <details className="acc">
                <summary className="acc-sum">
                  <span className="acc-title">General Specifications</span>
                </summary>

                <div className="acc-content">
                  <div className="acc-table">

                    <div className="acc-row">
                      <span>Power</span>
                      <span colSpan="4">
                        2×AA batteries<br />
                        AC 100~240V ±10% / DC 5V (adapter)
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>Working time</span>
                      <span colSpan="4">
                        &gt;100 hrs (OPM) • &gt;40 hrs (Light source) • &gt;10 hrs (VFL)
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>Operating temperature</span>
                      <span colSpan="4">-10°C ~ +60°C</span>
                    </div>

                    <div className="acc-row">
                      <span>Storage temperature</span>
                      <span colSpan="4">-20°C ~ +70°C</span>
                    </div>

                    <div className="acc-row">
                      <span>Dimensions</span>
                      <span colSpan="4">
                        7.3" × 3.3" × 1.8" (185 mm × 85 mm × 45 mm)
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>Weight</span>
                      <span colSpan="4">&lt; 300 g (without batteries)</span>
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
            <div className="s-media"><img src={mediaUrl.image("ae1001.webp")} loading="lazy" alt="AE1001" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("ae210.webp")} loading="lazy" alt="AE210 Series" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("vfl.webp")} loading="lazy" alt="VF-10" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("ep310.webp")} loading="lazy" alt="EP-310 Series" /></div>
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
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="EP-710 Series"
      /></div>
  );
};

export default Deviserproducteight;