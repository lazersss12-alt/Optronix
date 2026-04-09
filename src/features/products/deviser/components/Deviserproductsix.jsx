// import React, { useState } from 'react';
// import './Deviserproduct.css';
// import { Link } from 'react-router-dom';
// import op08 from "../../../../assets/images/ep310.png";
// import ProductBg from "../../../../assets/images/headerbackground.png";
// import productImage4 from "../../../../assets/images/EP310-4.png";
// import s1vpdf from "../../../../assets/images/ae200.pdf";
// import productImage2 from "../../../../assets/images/EP310-2.png";
// import productImage3 from "../../../../assets/images/AE210-3.png";
// import z2cImg from "../../../../assets/images/ae3100_main.jpg";
// import c82Img from "../../../../assets/images/ls310.png";
// import w1cImg from "../../../../assets/images/vfl.png";
// import fc8rImg from "../../../../assets/images/ae3100_main.jpg";
// const sections = [
//   {

//     subtitle: (
//       <>

//          <span className="highlight" style={{color:"#3c5a9f"}}>EP310 Series -</span> One <br></br>
//          Power Meter for Every PON Wavelength.


//       </>
//     ),
//     img: op08

//   },
//   {

//     subtitle: (
//       <>

//          <span className="highlight" style={{color:"#3c5a9f"}}>Wavelengths</span><br></br>
//         <span className="highlight" style={{color:"#3c5a9f"}}>1310/1490/1550nm</span><br></br>
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
//         <span className="highlight" style={{color:"#3c5a9f"}}>Wider Range</span><br></br>
//         <br></br>

//         <h6>From FC/SC to ST/LC with -45dBm to +25dBm precision.</h6>
//       </>
//     ),
//     img: productImage3,
//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>Power That</span> <br></br>
//         <span className="highlight" style={{color:"#3c5a9f"}}>Lasts</span> <br></br>


//         <br></br>
//         <h6>Up to 100 Hours on a Single Charge.</h6>
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

//               onClick={() => window.open(s1vpdf, "_blank")}  
//             >
//               Download Catalog
//             </button>
//           </>
//     )

//   }
// ];
// const Deviserproductsix = () => {
//   const [productImage] = useState(op08);
  const [enquireOpen, setEnquireOpen] = useState(false);

//   return (
//     <div>
//       {/* Header */}
//       <div className="extreme-zoom-container center-col">
//  <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">EP-310 Series</h1>
//       <p className="hero-split__desc">
//         Discover the Deviser EP-310 Series – a high-precision, compact powerhouse crafted by
//         Deviser Instruments. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the EP-310 Series ensures efficient, flawless splicing in any environment.
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
//           onClick={() => window.open(s1vpdf, "_blank")}
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

//         </div>

//       {/* SPECIFICATION TABLE */}

//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th>Model</th>
//                 <th>Features</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>EP300</td>
//                 <td>Classic, impact-resistant body with USB port</td>
//               </tr>
//               <tr>
//                 <td>EP310</td>
//                 <td>Improved design offers equivalent performance at lower cost; new dustcap allows easier test port access</td>
//               </tr>
//               <tr>
//                 <td>EP90</td>
//                 <td>See EP310. Includes Visual Fault Locator (VFL) to detect faults, bends, and splices in test fiber.</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//       {/* SPECIFICATION TABLE */}

//         <div className="table-wrapper">
//           <table className="universal-table">
//             <thead>
//               <tr>
//                 <th colSpan="4" style={{ color: "white" }}>Optical Parameters</th>
//               </tr>
//               <tr>
//                 <th> </th>
//                 <th>1310nm</th>
//                 <th>1490nm</th>
//                 <th>1550nm</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>Measurement range</td>
//                 <td>CW: -45 ~ +10dBm<br/>BW: -30 ~ +8dBm</td>
//                 <td>CW: -45 ~ +12dBm<br/>BW: -45 ~ +12dBm</td>
//                 <td>CW: -40 ~ +25dBm</td>
//               </tr>
//               <tr>
//                 <td>Passthrough insertion loss</td>
//                 <td colSpan={3}>&lt; 1.5dB</td>
//               </tr>
//               <tr>
//                 <td>Spectral Passband</td>
//                 <td>1260 ~ 1360nm</td>
//                 <td>1480 ~ 1500nm</td>
//                 <td>1540 ~ 1560nm</td>
//               </tr>
//               <tr>
//                 <td>Wave Isolation</td>
//                 <td>1490nm &gt;30dB<br/>1550nm &gt;50dB</td>
//                 <td>1310nm &gt;40dB<br/>1550nm &gt;40dB</td>
//                 <td>1310nm &gt;40dB<br/>1490nm &gt;40dB</td>
//               </tr>
//               <tr>
//                 <td>ORL</td>
//                 <td colSpan={3}>&gt;55dB (APC connector)</td>
//               </tr>
//               <tr>
//                 <td>Fiber Type</td>
//                 <td colSpan={3}>Single-mode fiber, 9/125μm</td>
//               </tr>
//               <tr>
//                 <td>Connector Type</td>
//                 <td colSpan={3}>FC/SC/ST-UPC (default), APC (optional)</td>
//               </tr>
//               <tr>
//                 <th colSpan={4}>General</th>
//               </tr>
//               <tr>
//                 <td>Power uncertainty</td>
//                 <td colSpan={3}>&lt; 0.5 dB</td>
//               </tr>
//               <tr>
//                 <td>Units</td>
//                 <td colSpan={3}>dBm; dB; mW; μW; nW</td>
//               </tr>
//               <tr>
//                 <td>Resolution</td>
//                 <td colSpan={3}>0.1 dBm</td>
//               </tr>
//               <tr>
//                 <td>Battery</td>
//                 <td colSpan={3}>3x AA batteries (EP300); 2x AA batteries (EP310); AC 100~240V ±10% output / DC 5V (adapter)</td>
//               </tr>
//               <tr>
//                 <td>Limit function</td>
//                 <td colSpan={3}>12 programmable limit profiles with Toolbox software</td>
//               </tr>
//               <tr>
//                 <td>Data storage</td>
//                 <td colSpan={3}>Up to 1,800 measurements; save &amp; transfer data with USB port</td>
//               </tr>
//               <tr>
//                 <td>Environment</td>
//                 <td colSpan={3}>Operating temperature: -10 ~ +60°C; storage temperature: -20 ~ +70°C</td>
//               </tr>
//               <tr>
//                 <td>Dimensions</td>
//                 <td colSpan={3}>7.3" × 3.3" × 1.8" (185mm × 85mm × 45mm)</td>
//               </tr>
//               <tr>
//                 <td>Weight</td>
//                 <td colSpan={3}>&lt; 300g (w/o batteries)</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>


//       {/* SIMILAR */}

//       <div className='similerproduct'><h3 style={{textAlign: "center"}}>Similar Product</h3></div>
//       <div className='product_s1v1_product'>
//         <div className='product_s1v1_product1'>
//           <img loading="lazy" className='product_s1v1_img' src={z2cImg} alt="AE1001" />
//           <h3 className='products1v_name_option'>AE1001</h3>
//           <Link to="/deviserproducttwo"><button className='products1v_button_option'>Know More</button></Link>
//         </div>
//         <div className='product_s1v1_product2'>
//           <img loading="lazy" className='product_s1v1_img' src={c82Img} alt="AE210 Series" />
//           <h3 className='products1v_name_option'>AE210 Series</h3>
//           <Link to="/deviserproductfive"><button className='products1v_button_option'>Know More</button></Link>
//         </div>
//         <div className='product_s1v1_product3'>
//           <img loading="lazy" className='product_s1v1_img' src={w1cImg} alt="VF-10" />
//           <h3 className='products1v_name_option'>VF-10</h3>
//           <Link to="/deviserproductnine"><button className='products1v_button_option'>Know More</button></Link>
//         </div>
//         <div className='product_s1v1_product4'>
//           <img loading="lazy" className='product_s1v1_img' src={fc8rImg} alt="EP-310 Series" />
//           <h3 className='products1v_name_option'>EP-310 Series</h3>
//           <Link to="/deviserproductsix"><button className='products1v_button_option'>Know More</button></Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Deviserproductsix;




import React, { useState, useEffect } from 'react';
import './Deviserproduct.css';
import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';
import AccordionTable from '../../../../components/ui/AccordionTable';
import op08 from "../../../../assets/images/ep310.png";
import s1vpdf from "../../../../assets/images/ep300.pdf";
import subz2c from "../../../../assets/images/AE1001.png";
import subw1c from "../../../../assets/images/vfl.png";
import sub82c from "../../../../assets/images/ae210.png";
import subfc8r from "../../../../assets/images/ep310.png";
import ProductLeadModal from '../../../../components/common/ProductLeadModal';




const Deviserproductsix = () => {
  const [activeTab, setActiveTab] = useState('overview');
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
    document.title = 'Optronix: Deviser EP310 PON Power Meter | 3-Wavelength FTTx Tester';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'The Optronix Deviser EP310 is a PON Power Meter that simultaneously measures 1310/1490/1550 nm wavelengths. Features instant Pass/Fail analysis and 1800 measurement data storage.';

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
      document.title = 'Optronix: Deviser EP310 PON Power Meter | 3-Wavelength FTTx Tester';
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
          <Link to="/deviser" style={{ color: "#333", textDecoration: "none" }}>Products</Link>
          <span className="sep">/</span>
          <span className="current">DEVISER EP-310 Series</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}
              <h1 className="hero-title">EP-310 Series</h1>
              <p className="hero-desc">
                Deviser EP‑310 Series PON power meters measure upstream and downstream PON signals at
                1310/1490/1550 nm with low insertion loss and strong wavelength isolation. Designed for
                quick, accurate field testing, the EP‑310 supports FC/SC/ST‑UPC connectors (APC optional),
                stores results, and runs for up to 100 hours on batteries.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(s1vpdf, "_blank")}>
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
              <h3 className="panel-title">Why EP‑310 stands out</h3>
              <p className="panel-sub">
                One power meter for every PON wavelength — accurate, compatible, and field‑ready.
              </p>
              <ul className="feature-list">
                <li>PON wavelengths: 1310/1490/1550 nm.</li>
                <li>Low insertion loss passthrough (1.5 dB).</li>
                <li>Strong wavelength isolation for reliable measurements.</li>
                <li>FC/SC/ST‑UPC default, APC optional.</li>
                <li>Stores up to 1,800 measurements via USB.</li>
                <li>Up to 100 hours battery life.</li>
                <li>Real-time monitoring for accurate live-fiber evaluation.
                </li>
                <li>High measurement accuracy suitable for FTTx certification.</li>
                <li>Fast response time for efficient field troubleshooting.
                </li>
                <li>Rugged, field-ready housing for harsh outdoor environments.</li>
                <li>backlight LCD for clear visibility in low-light conditions.
                </li>
                <li>Auto-shutdown to extend battery life during long field operations.</li>

              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr><th>PON wavelengths</th><td>1310 / 1490 / 1550 nm</td></tr>
                      <tr><th>Passthrough IL</th><td>&lt; 1.5 dB</td></tr>
                      <tr><th>Isolation</th><td>Up to &gt; 50 dB (per band)</td></tr>
                      <tr><th>Connectors</th><td>FC/SC/ST‑UPC (APC optional)</td></tr>
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

              {/* Model Lineup */}
              <details className="acc" open>
                <summary className="acc-sum">
                  <span className="acc-title">Model Lineup</span>
                </summary>
                <div className="acc-content">
                  <div className="acc-table">
                    <div className="acc-row acc-head">
                      <span>Model</span>
                      <span>Features</span>
                    </div>

                    <div className="acc-row">
                      <span>EP300</span>
                      <span>Classic, impact-resistant body with USB port</span>
                    </div>

                    <div className="acc-row">
                      <span>EP310</span>
                      <span>Improved design, lower cost; new dustcap for easier port access</span>
                    </div>

                    <div className="acc-row">
                      <span>EP90</span>
                      <span>Same as EP310 + Visual Fault Locator (VFL)</span>
                    </div>
                  </div>
                </div>
              </details>

              {/* Optical Parameters */}
              <details className="acc">
                <summary className="acc-sum">
                  <span className="acc-title">Optical Parameters</span>
                </summary>

                <div className="acc-content">
                  <div className="acc-table">
                    <div className="acc-row acc-head">
                      <span>Parameter</span>
                      <span>1310 nm</span>
                      <span>1490 nm</span>
                      <span>1550 nm</span>
                    </div>

                    <div className="acc-row">
                      <span>Measurement range</span>
                      <span>CW: −45 ~ +10 dBm<br />BW: −30 ~ +8 dBm</span>
                      <span>CW: −45 ~ +12 dBm<br />BW: −45 ~ +12 dBm</span>
                      <span>CW: −40 ~ +25 dBm</span>
                    </div>

                    <div className="acc-row"><span>Passthrough IL</span><span colSpan="3">&lt;1.5 dB</span></div>

                    <div className="acc-row">
                      <span>Spectral Passband</span>
                      <span>1260 ~ 1360 nm</span>
                      <span>1480 ~ 1500 nm</span>
                      <span>1540 ~ 1560 nm</span>
                    </div>

                    <div className="acc-row">
                      <span>Wave Isolation</span>
                      <span>1490 &gt;30 dB<br />1550 &gt;50 dB</span>
                      <span>1310 &gt;40 dB<br />1550 &gt;40 dB</span>
                      <span>1310 &gt;40 dB<br />1490 &gt;40 dB</span>
                    </div>

                    <div className="acc-row"><span>ORL</span><span colSpan="3">&gt;55 dB (APC)</span></div>
                    <div className="acc-row"><span>Fiber Type</span><span colSpan="3">SM 9/125 μm</span></div>
                    <div className="acc-row"><span>Connector Type</span><span colSpan="3">FC/SC/ST-UPC; APC optional</span></div>

                    <div className="acc-row acc-head"><span>General</span></div>

                    <div className="acc-row"><span>Power uncertainty</span><span colSpan="3">&lt;0.5 dB</span></div>
                    <div className="acc-row"><span>Units</span><span colSpan="3">dBm; dB; mW; μW; nW</span></div>
                    <div className="acc-row"><span>Resolution</span><span colSpan="3">0.1 dB</span></div>

                    <div className="acc-row">
                      <span>Battery</span>
                      <span colSpan="3">
                        3×AA (EP300); 2×AA (EP310); AC 100–240V / DC 5V adapter
                      </span>
                    </div>

                    <div className="acc-row">
                      <span>Limit function</span>
                      <span colSpan="3">12 profiles (Toolbox software)</span>
                    </div>

                    <div className="acc-row">
                      <span>Data storage</span>
                      <span colSpan="3">Up to 1,800 measurements; USB save/transfer</span>
                    </div>

                    <div className="acc-row">
                      <span>Environment</span>
                      <span colSpan="3">−10 ~ +60°C (operating); −20 ~ +70°C storage</span>
                    </div>

                    <div className="acc-row">
                      <span>Dimensions</span>
                      <span colSpan="3">185 × 85 × 45 mm (7.3″ × 3.3″ × 1.8″)</span>
                    </div>

                    <div className="acc-row">
                      <span>Weight</span>
                      <span colSpan="3">&lt;300 g (without batteries)</span>
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
            <div className="s-media"><img src={subz2c} loading="lazy" alt="AE1001" /></div>
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
            <div className="s-media"><img src={sub82c} loading="lazy" alt="AE210 Series" /></div>
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
            <div className="s-media"><img src={subw1c} loading="lazy" alt="VF-10" /></div>
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
            <div className="s-media"><img src={subfc8r} loading="lazy" alt="EP-310 Series" /></div>
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
        pageName="EP-310 Series"
      /></div>
  );
};

export default Deviserproductsix;