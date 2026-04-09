// import React, { useState } from 'react';
// import './page.css';
// import { Link } from 'react-router-dom';
// import op08 from "../components/img/FC6S1.png";
// import s1vpdf from "../components/img/FC6s Cleaver.pdf";
// import ProductBg from "../components/img/headerbackground.png";
// import productImage4 from "../components/img/SFCS4.png";
// import productImage2 from "../components/img/SFCS2.png";
// import productImage3 from "../components/img/FC6S3.png";
// import eponoltf1 from "../components/img/fc6b.webp";
// import subz2c from "../components/img/Backup_of_Z2C 2june.png";
// import subw1c from "../components/img/W1C file.png";
// import sub82c from "../components/img/82C+ 1Oct 2024.png";
// import subfc8r from "../components/img/FC8r.png";

// const sections = [
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>FC-6S:</span> Precision Benchtop Cleaving for Single Fiber Excellence.

//       </>
//     ),
//     img: op08






//   },
//   {

//     subtitle: (
//       <>
//          <span className="highlight" style={{color:"#3c5a9f"}}>Premium Blade</span> for<br></br>
//          Perfect Precision
//         <br></br>
//         <br></br>
//         <h6>12 Steps Surface Blade</h6>


//       </>
//     ),
//     img: productImage2,

//   },
//   {

//     subtitle: (
//       <>
//         Built to <span className="highlight" style={{color:"#3c5a9f"}}>Last</span>
//         <br></br>
//         <br></br>
//         <h6>Consistent Cleaving Quality for Over 54,000 Fibers.</h6>

//       </>
//     ),
//     img: productImage3,
//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>Durability</span>  on the Go-

//         <br></br>
//         <br></br>
//         <h6>Cleaver Secured in a Strong Protective Box.</h6>
//       </>
//     ),
//     img: productImage4,
//     buttons: (
//           <>
//             <button className='enquire_button'
//             style={{
//               margin:"10px"
//             }}

//               onClick={() => window.open("/contact", "_self")}
//             >
//               Enquire Now
//             </button>
//             <button className='enquire_button'

//               onClick={() => window.open(s1vpdf, "_blank")}  
//             >
//               Download Catalog
//             </button>
//           </>
//         )

//   }
// ];

// const Sumitomoproducteleven = () => {
//   const [productImage, setProductImage] = useState(op08);
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleIconClick = (image, icon) => {
//     setProductImage(image);
//     setActiveIcon(icon);
//   };       

//   return (
//     <div>
//       <div className="extreme-zoom-container center-col">
//  <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">SUMITOMO FC-6S</h1>
//       <p className="hero-split__desc">
//         Discover the Sumitomo FC-6S Fusion Splicer – a high-precision, compact powerhouse crafted by
//         Sumitomo Electric Industries. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the FC-6S ensures efficient, flawless splicing in any environment.
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




//       <div className='products1v-feature-section-f2'>

//       <div className='featurez2c-section-f2-a'>
//       <img className='feature-banner' src={eponoltf1} alt="EPON OLT FEATURE" />

//       </div>


//         </div>


//         <div className='table-wrapper'>
//       <div className="table-container">
//       <table className="universal-table">
//         <thead>
//           <tr>
//            <th colSpan="6">Specification</th>
//           </tr>
//           <tr>
//             <th colSpan={2}> Part  Number</th>
//             <th>FC-6RM</th>
//             <th> FC-6RM-C</th>
//             <th>FC-6RS</th>
//             <th> FC-6RS-C</th>
//           </tr>
//         </thead>

//         <tbody>
//           <tr className='section-header'>
//             <td rowSpan={4}>Applicable Fiber</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Material</td>
//             <td colSpan={4}>Silica Glass</td>
//           </tr>
//           <tr className='table-row-odd'>
//             <td>Cladding Diameter</td>
//             <td colSpan={4}>Φ 125 μm</td>
//           </tr>

//           <tr className='custom-table-bg-two'>
//             <td>fiber Count</td>
//             <td colSpan={2}>Single to 12</td>
//             <td colSpan={2}>Single</td>
//           </tr>

//           <tr className='section-header-fc6s'>
//             <td colSpan={2} rowSpan={2}>Cleave Lenght</td>
//           </tr>

//           <tr className='custom-table-bg-one'>
//             <td colSpan={2}>10mm</td>
//             <td colSpan={2}>S~20mm (Φ 0.25) / 10~20mm (Φ 0.9)</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Cleave Angle (Typ.)</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td colSpan={4}>0.5 degree with single fiber</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}> Off-cut Collector</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Option</td>
//             <td>Pre-fitted (CU-FC6)</td>
//             <td>Option</td>
//             <td>Pre-Fitted (CU-FC6)</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}> Single Fiber adapter</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td colSpan={2}>Fiber Holder (Option)</td>
//             <td colSpan={2}> Pre-Fitted (Ap-FC6M)</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Dimensions (mm)</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>63(W)x77(D)x63(H)</td>
//             <td>100(W)x81(D)x63(H)</td>
//             <td>63(W)x77(D)x63(H)</td>
//             <td>100(W)x81(D)x63(H)</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Weight</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Approx 380g</td>
//             <td>Approx 420g</td>
//             <td>Approx 380g</td>
//             <td>Approx 420g</td>
//           </tr>
//           <tr>
//             <td colSpan={2} rowSpan={2}>Field Replaceable Blade</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td colSpan={4}>Yes, use FCP-20BL</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Blade Life *1</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td colSpan={4}>54,000 Fibers (2,250 x 24 positions)</td>
//           </tr>

//         </tbody>

//       </table>

//     </div>


//       </div>  


//     <div className='similerproduct'>
//         <h3 style={{textAlign: "center"}}>Similar Product</h3>
//       </div>

// <div className='product_s1v1_product'>
//                     <div className='product_s1v1_product1'>
//                       <img className='product_s1v1_img' src={subz2c} alt="Z2C" />
//                       <h3 className='products1v_name_option'>Z2C</h3>
//                       <Link to="/sumitomoproductthree" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product2'>
//                       <img className='product_s1v1_img' src={sub82c} alt="82C+" />
//                       <h3 className='products1v_name_option'>82C+</h3>
//                       <Link to="/sumitomoproductfive" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product3'>
//                       <img className='product_s1v1_img' src={subw1c} alt="W1C" />
//                       <h3 className='products1v_name_option'>W1C</h3>
//                       <Link to="/sumitomoproductfour" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product4'>
//                       <img className='product_s1v1_img' src={subfc8r} alt="FC8R" />
//                       <h3 className='products1v_name_option'>FC8R</h3>
//                       <Link to="/sumitomoproductseven" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                   </div>
//     </div>
//     </div>
//   );
// };

// export default Sumitomoproducteleven;




import React, { useState, useEffect } from 'react';
import './page.css';
import '../components/index.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../components/common/ProductLeadModal';

import op08 from "../components/img/Cleaver 32.png";
import fc6pdf from "../components/img/FC6s.pdf";
import subz2c from "../components/img/Backup_of_Z2C 2june.png";
import subw1c from "../components/img/W1C file.png";
import sub82c from "../components/img/82C+ 1Oct 2024.png";
import subfc8r from "../components/img/FC8r.png";

const Sumitomoproducteleven = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(op08);
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
    document.title = 'Sumitomo FC-6S Precision Benchtop Fiber Cleaver';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix supplies the Sumitomo FC-6S High-Precision Fiber Cleaver. Designed for fusion splicing, it features a stable benchtop platform and a long-life 54,000-fiber blade.';

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
      document.title = 'Sumitomo FC-6S Precision Fiber Cleaver';
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
    const imgs = [subz2c, sub82c, subw1c, subfc8r];
    return {
      backgroundImage:
        `linear-gradient(180deg, rgba(255,255,255,${alpha}) 0%, rgba(255,255,255,${alpha}) 100%), ` +
        `url(${imgs[0]}), url(${imgs[1]}), url(${imgs[2]}), url(${imgs[3]})`,
      backgroundSize: 'cover, 50% 50%, 50% 50%, 50% 50%, 50% 50%',
      backgroundPosition: 'center, left top, right top, left bottom, right bottom',
      backgroundRepeat: 'no-repeat'
    };
  };

  // ---- ACCORDION DATA ----
  // const specAccordions = [
  //   {
  //     title: "Optical Fiber Requirement",
  //     items: [
  //       { label: "Material", value: "Silica glass" },
  //       { label: "Fiber count / Profile types", value: "Single / SMF(G.652), MMF(G.651), DSF(G.653), NZDSF(G.655), BIF(G.657)" },
  //       { label: "Fiber Count", value: "1, 2, 4, 5, 6, 8, 10, 12" },
  //       { label: "Cladding diameter", value: "125µm" },
  //       { label: "Coating diameter", value: "Single Fiber: 200µm, 250µm, 500µm, 900µm; Ribbon Fiber Thickness: 200–400µm" },
  //       { label: "Applicable Cable", value: "Drop cable (2.0mm x 3.1mm, or 2.6mm), Indoor cable (2.0mm x 1.6mm)" },
  //       { label: "Cleave length", value: "10mm" },
  //     ],
  //   },
  //   {
  //     title: "Standard Performance",
  //     items: [
  //       { label: "Splicing Loss (Typical)", value: "SMF: 0.01dB, MMF: 0.01dB, DSF: 0.03dB, NZDSF: 0.03dB" },
  //       { label: "Return loss (Typical)", value: "60dB or greater" },
  //       { label: "Splice time (Typical)", value: "5 sec (SM G652 Quick), 7 sec (SM G652 Std.), 7 sec (Auto)" },
  //       { label: "Heating time (Typical)", value: "8 sec (FPS-61-2.6 sleeve, S60mm 0.25 Quick)" },
  //       { label: "Splice & Heat cycles per battery full charge", value: "Approx. 320 (BU-16)" },
  //       { label: "Fiber view & magnification", value: "2 CMOS cameras, 380X (760X zoom) for X or Y, 270X for both X & Y" },
  //       { label: "Proof test", value: "1.96 ~ 2.09N" },
  //       { label: "Applicable protection sleeve", value: "60mm, 40mm & Sumitomo Nano sleeves" },
  //     ],
  //   },
  //   {
  //     title: "Programs",
  //     items: [
  //       { label: "Splice programs", value: "Max. 300, 74 pre-optimised, 226 editable" },
  //       { label: "Heating programs", value: "Max. 100, 27 pre-optimised, 73 editable" },
  //     ],
  //   },
  //   {
  //     title: "Functions",
  //     items: [
  //       { label: "Splice image capture / Splice data storage", value: "200 images / 10,000 splice data (internal); 50,200 / 20,000 with 8GB SD" },
  //       { label: "Universal clamp", value: "Provided; 200µm, 900µm tight & loose buffer fiber" },
  //       { label: "Reversible coating clamps", value: "Provided" },
  //       { label: "Dual automatic independent ovens", value: "Provided" },
  //       { label: "User-selectable oven clamp operation", value: "Provided" },
  //       { label: "Onboard User Training Video", value: "Provided" },
  //       { label: "Automatic fiber identification", value: "SMF / MMF / DSF / NZDSF / BIF / Other" },
  //       { label: "Automatic arc calibration", value: "Automatically compensates for environmental condition changes" },
  //       { label: "Display of remaining Splice & Heat cycle", value: "Provided (Battery mode)" },
  //       { label: "Wireless LAN connectivity (Option)", value: "Provided" },
  //     ],
  //   },
  //   {
  //     title: "Size / Weight",
  //     items: [
  //       { label: "Size", value: "128(W) x 154(D) x 130(H) mm (without anti-shock rubber)" },
  //       { label: "Weight", value: "1.9kg (without Battery), 2.2kg (with Battery BU-16)" },
  //       { label: "Monitor", value: "5.0″ touch screen color LCD display" },
  //     ],
  //   },
  //   {
  //     title: "Terminals",
  //     items: [
  //       { label: "DC output", value: "DC 12V (for JR-6+)" },
  //       { label: "USB port", value: "USB 2.0 (mini-B type)" },
  //       { label: "Storage media", value: "SD / SDHC memory card MAX32GB" },
  //     ],
  //   },
  //   {
  //     title: "Power supply",
  //     items: [
  //       { label: "AC input", value: "AC 100 - 240V, 50/60Hz (ADC-16)" },
  //       { label: "DC input", value: "DC 10 - 15V" },
  //       { label: "Battery pack", value: "Li-ion 10.8V, 6,400mAh (BU-16)" },
  //     ],
  //   },
  //   { title: "Operating condition", note: "Altitude: 0 ~ 6,000m; Temp: -10 ~ +50°C; Humidity: 0 ~ 95%RH (non-condensing); Wind: up to 15m/sec" },
  //   { title: "Storage condition", note: "Temp: -40 ~ +80°C; Humidity: 0 ~ 95% (non-condensing); Battery: -20 ~ +30°C (long term)" },
  //   { title: "Electrode life", note: "6,000 arc discharges" },
  //   { title: "Software updates", note: "Internet" },
  //   { title: "Data management", note: "Can be stored, edited and analyzed by dedicated PC software" },
  //   {
  //     title: "Test Details",
  //     items: [
  //       { label: "Shock resistance", value: "Drop from 76cm on 5 faces (excluding top face)" },
  //       { label: "Impact resistance", value: "Equivalent to IK07 on LCD (2J impact ≈ 500g @40cm)" },
  //       { label: "Water resistance", value: "Equivalent to IPx2 (operates after water dripping 3mm/min, 2.5min on 4 surfaces at 15°)" },
  //       { label: "Dust resistance", value: "Equivalent to IP5x (operates after 8h in chamber with dust < 75µm)" },
  //     ],
  //   },
  // ];

  const accessoriesData = {
    forSplicer: [
      { name: "SumiCloud Card", part: "WLSD Series", remarks: "For SumiCloud™ connection" },

      // Fiber Holder family
      { name: "Fiber Holder", part: "FHS-025", remarks: "For Φ0.25mm single fiber" },
      { name: "Fiber Holder", part: "FHS-09", remarks: "For Φ0.9mm single fiber" },
      { name: "Fiber Holder", part: "FHS-025/LB5", remarks: "For 0.9mm loose buffered single fiber" },
      { name: "Fiber Holder", part: "FHD-1", remarks: "For drop/indoor cable (typ. 2.0 x 3.1 or 2.6mm)" },
      { name: "Fiber Holder", part: "1SM-ST", remarks: "For indoor cable (typ. 1.6 x 2.0mm)" },
      { name: "Fiber Holder", part: "FHC-3", remarks: "For 3mm cable" },

      // Power/consumables
      { name: "Battery pack", part: "BU-16", remarks: "Li-ion 6,400mAh" },
      { name: "Battery Charger", part: "BC-16", remarks: "-" },
      { name: "Car Battery Cable", part: "PCV-16", remarks: "For car battery operation (cigarette socket type)" },
      { name: "V-Groove Cleaning Brush", part: "VGT-2", remarks: "Brush for cleaning V-groove" },
      { name: "Electrode", part: "ER-10", remarks: "-" },
    ],

    accessories: [
      // Handheld fiber cleaver
      { name: "Handheld Fiber Cleaver", part: "FC-8R-FC", remarks: "Automatic blade rotation, with cleave counter" },
      { name: "Handheld Fiber Cleaver", part: "FC-8R-F", remarks: "Automatic blade rotation" },

      // Fiber cleaver (tabletop)
      { name: "Fiber Cleaver", part: "FC-6S-C", remarks: "Table-top high precision cleaver" },
      { name: "Fiber Cleaver", part: "FC-6RS-C", remarks: "Automatic blade rotation cleaver" },

      { name: "Jacket Remover", part: "JR-M03", remarks: "Jacket remover for single fiber" },
      { name: "Loose Tube Cutter", part: "LTC-01", remarks: "-" },
      { name: "Alcohol Dispenser", part: "HR-3", remarks: "-" },
    ],

    fiberSleeves: [
      { name: "FPS-1", part: "", remarks: "60mm, diameter after shrink ≈ Φ3.2mm" },
      { name: "FPS-40", part: "", remarks: "40mm, diameter after shrink ≈ Φ3.2mm" },
      { name: "FPS-61-2.6", part: "", remarks: "61mm, diameter after shrink ≈ Φ2.6mm" },
    ],

    basic: [
      { name: "AC adapter", part: "ADC-16 series", qty: "1 pc" },
      { name: "AC power cord", part: "PC-AC", qty: "1 pc" },
      { name: "Cooling tray", part: "-", qty: "1 pc" },
      { name: "Spare electrode", part: "ER-10", qty: "1 pair" },
      { name: "Quick reference guide", part: "-", qty: "1 pc" },
      { name: "Carrying case with worktable", part: "CC-82", qty: "1 pc" },
      { name: "Hand strap", part: "-", qty: "1 pc" },
      { name: "USB cable", part: "-", qty: "1 pc" },
    ],
  };

  return (
    <div className="s1v-page">
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/sumitomo" style={{ color: "#333", textDecoration: "none" }}>Products</Link>

          <span className="sep">/</span>
          <span className="current">SUMITOMO FC-6S</span>
        </nav>
      </div>
      {/* <span className="current">SUMITOMO Z2C</span> */}

      {/* Hero left */}


      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">

            {/* Left */}
            <div className="hero-left">
              <h1 className="hero-title">SUMITOMO FC-6S</h1>
              <p className="hero-desc">
                Sumitomo FC‑6S series are benchtop, high‑precision cleavers for single and ribbon fibers (depending on model),
                featuring a premium 12‑step blade and optional auto‑rotation. Built for stable, low‑angle cleaves and long service life.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(fc6pdf, "_blank")}>
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
                <img src={productImage} fetchpriority="high" alt="Product" />
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
              <h3 className="panel-title">Why FC‑6S stands out</h3>
              <ul className="feature-list">
                <li>Benchtop precision cleaver for single or ribbon fibers (model dependent).</li>
                <li>Premium 12‑step blade with long life.</li>
                <li>0.5° typical cleave (single fiber).</li>
                <li>Auto‑rotation available on -C models.</li>
                <li>Off‑cut collector options and pre‑fit on -C models.</li>
                <li>Stable mechanical design for highly repeatable cleaves.</li>
                <li>Precision fiber positioning for consistent splice-quality results.</li>
                <li>Rugged construction suitable for long-term lab or field use.</li>
                <li>Supports efficient workflow in high-volume splicing environments.</li>
                <li>Smooth, low-force operation for technician comfort.</li>
                <li>Easy blade height adjustment for extended usability.</li>
                <li>Minimal maintenance with simple cleaning access.</li>

              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr><th>Cleave angle (typ.)</th><td>0.5° (single fiber)</td></tr>
                      <tr><th>Blade life</th><td>54,000 fibers (2,250 × 24)</td></tr>
                      <tr><th>Blade</th><td>12‑step, field replaceable (FCP‑20BL)</td></tr>
                    </tbody>
                  </table>
                </div>

              </div>


            </div>
          </div>
        )}

        {/* {activeTab === 'specs' && (
          <div className="panel" style={mosaicBG(0.92)}>
            <div className="acc-group">
              <details className="acc" open>
                <summary className="acc-sum">
                  <span className="acc-title">Specifications</span>
                </summary>
                <div className="acc-content">
                  <div className="acc-table" style={{ display: 'grid', gap: 8 }}>
                    
                    <div className="acc-row acc-head" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Part Number</span>
                      <span>FC-6RM</span>
                      <span>FC-6RM-C</span>
                      <span>FC-6RS</span>
                      <span>FC-6RS-C</span>
                    </div>

                  
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Material</span>
                      <span colSpan={4}>Silica glass</span>
                      <span style={{ display: 'none' }} />
                      <span style={{ display: 'none' }} />
                      <span style={{ display: 'none' }} />
                    </div>
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Cladding Diameter</span>
                      <span colSpan={4}>Φ125 μm</span>
                      <span style={{ display: 'none' }} />
                      <span style={{ display: 'none' }} />
                      <span style={{ display: 'none' }} />
                    </div>
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Fiber Count</span>
                      <span>Single to 12</span>
                      <span>Single to 12</span>
                      <span>Single</span>
                      <span>Single</span>
                    </div>

                 
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Cleave Length</span>
                      <span>10 mm</span>
                      <span>10 mm</span>
                      <span>6–20 mm (Φ0.25) / 10–20 mm (Φ0.9)</span>
                      <span>6–20 mm (Φ0.25) / 10–20 mm (Φ0.9)</span>
                    </div>

            
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Cleave Angle (typ.)</span>
                      <span colSpan={4}>0.5° with single fiber</span>
                      <span style={{ display: 'none' }} />
                      <span style={{ display: 'none' }} />
                      <span style={{ display: 'none' }} />
                    </div>

       
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Off‑cut Collector</span>
                      <span>Option</span>
                      <span>Pre‑fitted (CU‑FC6)</span>
                      <span>Option</span>
                      <span>Pre‑fitted (CU‑FC6)</span>
                    </div>

                
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Single Fiber Adapter</span>
                      <span>Fiber Holder (Option)</span>
                      <span>Pre‑fitted (AP‑FC6M)</span>
                      <span>Fiber Holder (Option)</span>
                      <span>Pre‑fitted (AP‑FC6M)</span>
                    </div>

               
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Dimensions (mm)</span>
                      <span>63(W) × 77(D) × 63(H)</span>
                      <span>100(W) × 81(D) × 63(H)</span>
                      <span>63(W) × 77(D) × 63(H)</span>
                      <span>100(W) × 81(D) × 63(H)</span>
                    </div>

                 
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Weight</span>
                      <span>Approx. 380 g</span>
                      <span>Approx. 420 g</span>
                      <span>Approx. 380 g</span>
                      <span>Approx. 420 g</span>
                    </div>

                
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Field Replaceable Blade</span>
                      <span colSpan={4}>Yes — use FCP‑20BL</span>
                      <span style={{ display: 'none' }} />
                      <span style={{ display: 'none' }} />
                      <span style={{ display: 'none' }} />
                    </div>
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(4, 1fr)' }}>
                      <span>Blade Life</span>
                      <span colSpan={4}>54,000 fibers (2,250 × 24 positions)</span>
                      <span style={{ display: 'none' }} />
                      <span style={{ display: 'none' }} />
                      <span style={{ display: 'none' }} />
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        )} */}

        {activeTab === 'specs' && (
          <div className="panel" style={mosaicBG(0.92)}>
            <div className="acc-group">
              {/* Specification */}
              <details className="acc" open>
                <summary className="acc-sum">
                  <span className="acc-title">Specification</span>
                </summary>
                <div className="acc-content">
                  <div className="acc-kv-list">
                    {/* Applicable fiber */}
                    <div className="kv acc-kv"><span className="k">Material</span><span className="v">Silica glass</span></div>
                    <div className="kv acc-kv"><span className="k">Cladding diameter</span><span className="v">Φ125 μm</span></div>
                    <div className="kv acc-kv"><span className="k">Fiber count</span><span className="v">Single</span></div>

                    {/* Cleave length */}
                    <div className="kv acc-kv"><span className="k">Cleave length</span><span className="v">6–20 mm (Φ0.25), 10–20 mm (Φ0.9)</span></div>

                    {/* Mechanism */}
                    <div className="kv acc-kv"><span className="k">Blade</span><span className="v">12‑step premium blade</span></div>
                    <div className="kv acc-kv"><span className="k">Blade life</span><span className="v">54,000 fibers</span></div>

                    {/* Build/pack */}
                    <div className="kv acc-kv"><span className="k">Build</span><span className="v">Metal body; cleaver secured in protective box</span></div>
                  </div>
                </div>
              </details>

              {/* Optional accessories / Consumables */}
              <details className="acc">
                <summary className="acc-sum">
                  <span className="acc-title">Optional accessories / Consumables</span>
                </summary>
                <div className="acc-content">
                  <div className="acc-table three">
                    <div className="acc-row acc-head"><span>Part Name</span><span>Part No.</span><span>Note</span></div>
                    <div className="acc-row"><span>Replacement blade</span><span>FCP‑20BL</span><span>12‑step blade</span></div>
                    <div className="acc-row"><span>Carry/protective box</span><span>—</span><span>Included with unit</span></div>
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
            <span className="s-brand">SUMITOMO</span>
            <div className="s-media"><img src={subz2c} loading="lazy" alt="Z2C" /></div>
            <div className="s-body">
              <h4 className="s-title">Z2C</h4>
              <p className="s-desc">Core alignment fusion splicer for heavy-duty projects.</p>
            </div>
            <Link to="/sumitomo/Z2C" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">SUMITOMO</span>
            <div className="s-media"><img src={sub82c} loading="lazy" alt="82C+" /></div>
            <div className="s-body">
              <h4 className="s-title">82C+</h4>
              <p className="s-desc">High-speed splicer with advanced automation.</p>
            </div>
            <Link to="/sumitomo/82CPLUS" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">SUMITOMO</span>
            <div className="s-media"><img src={subw1c} loading="lazy" alt="W1C" /></div>
            <div className="s-body">
              <h4 className="s-title">W1C</h4>
              <p className="s-desc">Compact splicer optimized for FTTH deployments.</p>
            </div>
            <Link to="/sumitomo/W1C" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>

          <div className="s-card">
            <span className="s-brand">SUMITOMO</span>
            <div className="s-media"><img src={subfc8r} loading="lazy" alt="FC8R" /></div>
            <div className="s-body">
              <h4 className="s-title">FC8R</h4>
              <p className="s-desc">Precision cleaver for stable fiber preparation.</p>
            </div>
            <Link to="/sumitomo/FC8R" className="s-cta">
              <span>Know more</span><span className="s-cta-end">↗</span>
            </Link>
          </div>
        </div>


      </section>
      {lightboxOpen && (
        <div className="lb" role="dialog" aria-modal="true" aria-label="Product image (zoomed)" onClick={closeLightbox}>
          <div className="lb__dialog" onClick={(e) => e.stopPropagation()}>
            <button className="lb__close" aria-label="Close image" onClick={closeLightbox}>×</button>
            <img className="lb__img" src={lightboxSrc} alt="Zoomed product" />
          </div>
        </div>
      )}
      <ProductLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pageName="Sumitomo - FC-6S"
      />
    </div>
  );
};

export default Sumitomoproducteleven;
