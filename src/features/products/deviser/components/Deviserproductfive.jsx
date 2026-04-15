import media_ae210_webp from '../../../../assets/img2/img/ae210.webp';
import media_ae200_pdf from '../../../../assets/img2/img/media/docs/ae200.pdf';
import media_AE1001_webp from '../../../../assets/img2/img/AE1001.webp';
import media_vfl_webp from '../../../../assets/img2/img/vfl.webp';
import media_ep310_webp from '../../../../assets/img2/img/ep310.webp';
// import React, { useState } from 'react'; // <-- useState imported here
// import './Deviserproduct.css';
// import { Link } from 'react-router-dom';

// import media_ae210_webp from "../../../../assets/images/ae210.png";
// import ProductBg from "../../../../assets/images/headerbackground.png";
// import productImage4 from "../../../../assets/images/AE210-4.png";
// import media_ae200_pdf from "../../../../assets/images/ae200.pdf";
// import productImage2 from "../../../../assets/images/AE210-2.png";
// import productImage3 from "../../../../assets/images/AE210-3.png";
// import z2cImg from "../../../../assets/images/ae3100_main.jpg";
// import c82Img from "../../../../assets/images/ls310.png";
// import w1cImg from "../../../../assets/images/vfl.png";
// import fc8rImg from "../../../../assets/images/ep310.png";
// const sections = [
//   {

//     subtitle: (
//       <>

//          <span className="highlight" style={{color:"#3c5a9f"}}>AE210 Series -</span> <br></br>
//          <span className="highlight" style={{color:"#3c5a9f"}}>Precision Power Meters</span> <br></br>
//          for FTTX, CATV & PON<br></br>
//          Networks!

//       </>
//     ),
//     img: media_ae210_webp

//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>Support TWIN</span><br></br>
//         <span className="highlight" style={{color:"#3c5a9f"}}>Mode</span><br></br>

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

//         <h6>From FC/SC to ST/LC with -50dBm to +26dBm precision.</h6>
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

//               onClick={() => window.open(media_ae200_pdf, "_blank")}  
//             >
//               Download Catalog
//             </button>
//           </>
//     )

//   }
// ];
// const Deviserproductfive = () => {
//   const [productImage] = useState(media_ae210_webp);
//   const [enquireOpen, setEnquireOpen] = useState(false);

//   // Removed unused handleIconClick function

//   return (
//     <div>
//       {/* Header */}
//       <div className="extreme-zoom-container center-col">
//  <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">AE210 Series</h1>
//       <p className="hero-split__desc">
//         Discover the Deviser AE210 Series – a high-precision, compact powerhouse crafted by
//         Deviser Instruments. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the AE210 Series ensures efficient, flawless splicing in any environment.
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
//           onClick={() => window.open(media_ae200_pdf, "_blank")}
//         >
//           Download Catalog
//         </button>
//       </div>
//     </div>

//     {/* Right: image */}
//     <div className="hero-split__image-wrap">
//       <img
//         src={media_ae210_webp} /* or use any of your images like productImage2 */
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>

//         </div>

//       {/* ----------- DATA TABLES ADDED BELOW (with comments) ----------- */}

//       {/* Specifications Table */}

//   <div className="table-wrapper">
//     <table className="universal-table">
//       <thead>
//         <tr>
//           <th>Model</th>
//           <th>AE210</th>
//           <th>AE230</th>
//           <th>AE270</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Detector</td>
//           <td>InGaAs &lt; 300μm</td>
//           <td>InGaAs &gt; 2000μm</td>
//           <td>InGaAs &gt; 300μm</td>
//         </tr>
//         <tr>
//           <td>Accuracy</td>
//           <td colSpan={3}>± 0.17dB (± 3%)</td>
//         </tr>
//         <tr>
//           <td>Dynamic Range</td>
//           <td>-50 ~ +26dBm</td>
//           <td>-50 ~ +26dBm</td>
//           <td>-70 ~ +10dBm</td>
//         </tr>
//         <tr>
//           <td>Resolution</td>
//           <td colSpan={3}>0.01dBm; mW; μW; nW</td>
//         </tr>
//         <tr>
//           <td>Calibrated Wavelength</td>
//           <td colSpan={3}>850 / 980 / 1300 / 1310 / 1490 / 1550 / 1610 / 1625 / 1650nm</td>
//         </tr>
//         <tr>
//           <td>Auto Detection</td>
//           <td colSpan={3}>Frequency: 270Hz, 1kHz, 2kHz<br/>Wavelength: 850 / 1310 / 1490 / 1550 / 1610nm</td>
//         </tr>
//         <tr>
//           <td>Connectors</td>
//           <td colSpan={3}>FC / SC (default); ST / LC (optional)</td>
//         </tr>
//         <tr>
//           <td>Environment</td>
//           <td colSpan={3}>-10 ~ +60°C, humidity &lt; 80%</td>
//         </tr>
//         <tr>
//           <td>Battery Life</td>
//           <td colSpan={3}>&gt;100 hrs (with included battery; backlight off)</td>
//         </tr>
//         <tr>
//           <td>Dimensions</td>
//           <td colSpan={3}>7.3" × 3.3" × 1.8" (185mm × 85mm × 45mm)</td>
//         </tr>
//         <tr>
//           <td>Weight</td>
//           <td colSpan={3}>&lt; 300g (without battery)</td>
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
//        <div className='product_s1v1_product'>
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
// };

// export default Deviserproductfive;





import React, { useState, useEffect } from 'react';
import './Deviserproduct.css';
import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';
import AccordionTable from '../../../../components/ui/AccordionTable';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';




const Deviserproductfive = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(media_ae210_webp);
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
    document.title = 'Optronix: Deviser AE210 Optical Power Meter | -50 to +26dBm | 9λ';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix supplies the Deviser AE210 Power Meter, perfect for FTTx and PON. Features a wide -50 to +26 dBm range, 9 calibrated wavelengths, and 100+ hours of battery life for reliable field use.';

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
      document.title = 'Optronix: Deviser AE210 Optical Power Meter | -50 to +26dBm | 9λ';
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
          <span className="current">DEVISER AE210 Series</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}
              <h1 className="hero-title">AE210 Series</h1>
              <p className="hero-desc">
                Deviser AE210 Series precision optical power meters are engineered for FTTx, CATV, and PON networks.
                With TWIN Mode for instant wavelength and frequency auto‑detection, wide dynamic range, and broad
                connector compatibility, AE210 delivers fast, accurate power measurements in the field.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(media_ae200_pdf, "_blank")}>
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
              <h3 className="panel-title">Why AE210 stands out</h3>
              <p className="panel-sub">
                Precision power meters for FTTx, CATV, and PON — fast, compatible, and long‑lasting.
              </p>
              <ul className="feature-list">
                <li>TWIN Mode: instantly auto‑detects wavelength and modulation frequency.</li>
                <li>Wide dynamic range: −50 ~ +26 dBm (model dependent).</li>
                <li>Calibrated wavelengths: 850/980/1300/1310/1490/1550/1610/1625/1650 nm.</li>
                <li>FC/SC default, ST/LC optional connectors.</li>
                <li>Up to 100 hours runtime (backlight off).</li>
                <li>Compact and field‑ready.</li>
                <li>High-accuracy measurements suitable for certification and maintenance work.
                </li>
                <li>Fast response time for efficient field testing.</li>
                <li>Low battery indicator for uninterrupted operation planning.
                </li>
                <li>Rugged housing designed for outdoor and dusty environments.
                </li>
                <li>Easy-read backlight display for low-light or night-time use.
                </li>
                <li>Data-hold function for quick recording during field tasks.</li>

              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr>
                        <th>Accuracy</th>
                        <td> ± 0.17dB (± 3%)</td>
                      </tr>
                      <tr>
                        <th>Environment</th>
                        <td>-10 ~ +60°C, humidity less than 80%</td>
                      </tr>
                      <tr>
                        <th>Weight</th>
                        <td> less than 300g (without battery)</td>
                      </tr>
                      <tr>
                        <th>Dimensions</th>
                        <td> 7.3" x 3.3" x 1.8" (185mm x 85mm x 45mm)</td>
                      </tr>
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

              <AccordionTable
                title="Optical Power Meter Specifications"
                defaultOpen={true}
                columns={["Parameter", "AE210", "AE230", "AE270"]}
                rows={[
                  ["Detector", "InGaAs < 300 μm", "InGaAs > 2000 μm", "InGaAs > 300 μm"],
                  ["Accuracy", "±0.17 dB (±3%)", "±0.17 dB (±3%)", "±0.17 dB (±3%)"],
                  ["Dynamic Range", "−50 ~ +26 dBm", "−50 ~ +26 dBm", "−70 ~ +10 dBm"],
                  ["Resolution", "0.01 dBm / mW / μW / nW", "", ""],
                  ["Calibrated Wavelengths",
                    "850 / 980 / 1300 / 1310 / 1490 / 1550 / 1610 / 1625 / 1650 nm",
                    "",
                    ""
                  ],
                  [
                    "Auto Detection",
                    "Freq: 270Hz, 1kHz, 2kHz\nλ: 850 / 1310 / 1490 / 1550 / 1610 nm",
                    "",
                    ""
                  ],
                  ["Connectors", "FC / SC (default); ST / LC optional", "", ""],
                  ["Environment", "−10°C ~ +60°C, <80% RH", "", ""],
                  ["Battery Life", ">100 hrs (backlight off)", "", ""],
                  ["Dimensions", '185 × 85 × 45 mm (7.3" × 3.3" × 1.8")', "", ""],
                  ["Weight", "< 300 g (without battery)", "", ""],
                ]}
              />

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
<<<<<<< HEAD
            <div className="s-media"><img src={media_AE1001_webp} loading="lazy" alt="AE1001" /></div>
=======
            <div className="s-media"><img src={mediaUrl.image("ae1001.webp")} loading="lazy" alt="AE1001" /></div>
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
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
            <div className="s-media"><img src={media_ae210_webp} loading="lazy" alt="AE210 Series" /></div>
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
            <div className="s-media"><img src={media_vfl_webp} loading="lazy" alt="VF-10" /></div>
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
            <div className="s-media"><img src={media_ep310_webp} loading="lazy" alt="EP-310 Series" /></div>
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
        pageName="AE210 Series"
      /></div>
  );
};

export default Deviserproductfive;