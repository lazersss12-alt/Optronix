import { mediaUrl } from '../../../../config/media';
// import React, { useState } from 'react';
// import './Deviserproduct.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("ae3100_main.webp") from "../../../../assets/images/ae3100_main.jpg";

// import ProductBg from "../../../../assets/images/headerbackground.png";
// import mediaUrl.doc("ae3100dm.pdf") from "../../../../assets/images/ae3100dm.pdf";
// import productImage4 from "../../../../assets/images/devisor4.png";
// import productImage2 from "../../../../assets/images/devisor2.png";
// import productImage3 from "../../../../assets/images/devisor3.png";
// import z2cImg from "../../../../assets/images/ae3100_main.jpg";
// import c82Img from "../../../../assets/images/ae210.png";
// import w1cImg from "../../../../assets/images/vfl.png";
// import fc8rImg from "../../../../assets/images/ep310.png";

// const sections = [
//   {

//     subtitle: (
//       <>
//        <span className='highlight' style={{color:"#3c5a9f"}}>AE3100DM</span>
//         <br /> 
//         Test,Measure & Locate in One Powerful Device!
//       </>
//     ),
//     img: mediaUrl.image("ae3100_main.webp")

//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>3 Tools, 1 Device</span>
//         - OTDR, OPM & VFL All-In-One!

//       </>
//     ),
//     img: productImage2,

//   },
//   {

//     subtitle: (
//       <>
//         4.3" <span className="highlight" style={{color:"#3c5a9f"}}>Mobile-Style Smooth LCD</span>

//         <br></br>
//         Touchscreen

//         <br></br>
//         <br></br>
//         <h6>Testing at Your Fingertips!</h6>
//       </>
//     ),
//     img: productImage3,
//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>2500 mAh</span>  Powerhouse

//         <br></br>
//         <br></br>
//         <h6>Up to 6 Hours of Uninterrupted Field Performance!</h6>
//       </>
//     ),
//     img: productImage4,
//     buttons: (
//           <>
//             <button className='enquire_button'
//             style={{
//               margin:"10px"
//             }}

//               onClick={() => setEnquireOpen(true)}
//             >
//               Enquire Now
//             </button>
//             <button className='enquire_button'

//               onClick={() => window.open(mediaUrl.doc("ae3100dm.pdf"), "_blank")}  
//             >
//               Download Catalog
//             </button>
//           </>
//         )

//   }
// ];
// const Deviserproductthree = () => {
//   const [productImage] = useState(mediaUrl.image("ae3100_main.webp"));
//   const [enquireOpen, setEnquireOpen] = useState(false);


//   return (
//     <div>
//       {/* Header */}
//      <div className="extreme-zoom-container center-col">
//  <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">DEVISER AE3100 DM</h1>
//       <p className="hero-split__desc">
//         The AE3100 DM OTDR from Deviser Instruments delivers advanced fiber-optic testing with support for 1310nm and 1550nm wavelengths and up to 45dB dynamic range. With intuitive touchscreen controls and real-time data analysis, it’s the perfect tool for building, maintaining, and verifying FTTx and access networks. Multiple models and flexible configurations ensure all your measurement needs are met.
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
//           onClick={() => window.open(mediaUrl.doc("ae3100dm.pdf"), "_blank")}
//         >
//           Download Catalog
//         </button>
//       </div>
//     </div>

//     {/* Right: image */}
//     <div className="hero-split__image-wrap">
//       <img
//         src={mediaUrl.image("ae3100_main.webp")} /* or use any of your images like productImage2 */
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>

//       {/*
//       <div className='product_d_feature'>
//         <div className='product_d_feature_art'>
//           <h3 style={{ fontSize: "32px" }}>All New Technology</h3>
//           <p style={{ marginTop: "30px" }}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa error nesciunt libero molestias laboriosam, illum culpa debitis atque? Optio illum, vitae quis cupiditate facere beatae provident possimus mollitia ipsa!
//           </p>
//         </div>
//         <div className='product_d_feature_img'>

//           {featureImg1 && (
//             <img loading="lazy" src={featureImg1} alt="Feature" style={{ width: "60%", display: "block", margin: "0 auto" }} />
//           )}
//         </div> 

//         <img loading="lazy" style={{width: "100%"}} src={eponoltf1} alt=" EPON OLT FEATURE" />

//       </div>**/}


//       <div className='products1v-feature-section-f2'>

//       {/* <div className='featurez2c-section-f2-a'>
//       <img loading="lazy" style={{width: "100%"}} src={eponoltf1} alt="EPON OLT FEATURE" />

//       </div> */}


//         </div>


//       {/* SPECIFICATION TABLE */}

//         <div className="table-wrapper">
//     <table className="universal-table">
//       <thead>
//         <tr><th colSpan="7" style={{color: "white"}}>Optical Parameters</th></tr>

//         <tr>
//           <th>Test Wavelength</th>
//           <th>1310nm ± 20nm</th>
//           <th>1550nm ± 20nm</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Dynamic range*</td>
//           <td>20dB</td>
//           <td>24dB</td>
//         </tr>
//         <tr>
//           <td>Event deadzone**</td>
//           <td colSpan={2}>≤3m</td>
//         </tr>
//         <tr>
//           <td>Attenuation deadzone**</td>
//           <td colSpan={2}>≤ 10m</td>
//         </tr>
//         <tr>
//           <td>Measurement range</td>
//           <td colSpan={2}>150m, 300m, 500m, 1km, 2km, 5km, 10km, 20km, 40km, 80km</td>
//         </tr>
//         <tr>
//           <td>Pulse width</td>
//           <td colSpan={2}>3ns, 5ns, 10ns, 30ns, 50ns, 100ns, 200ns, 500ns, 1μs, 2μs, 5μs, 10μs, 20μs</td>
//         </tr>
//         <tr>
//           <td>Sampling resolution</td>
//           <td colSpan={2}>Auto / high-resolution modes</td>
//         </tr>
//         <tr>
//           <td>Sampling points</td>
//           <td colSpan={2}>Up to 12,800</td>
//         </tr>
//         <tr>
//           <td>Group refractive index***</td>
//           <td colSpan={2}>1.000000 - 2.000000</td>
//         </tr>
//         <tr>
//           <td>Distance Uncertainty</td>
//           <td colSpan={2}>±(0.75+0.005%x fiber length + sample resolution)</td>
//         </tr>
//         <tr>
//           <td>Linearity</td>
//           <td colSpan={2}>0.05dB/dB</td>
//         </tr>
//         <tr>
//           <td>Loss threshold</td>
//           <td colSpan={2}>0.001 dB</td>
//         </tr>
//         <tr>
//           <td>Loss resolution</td>
//           <td colSpan={2}>0.001dB</td>
//         </tr>
//         <tr>
//           <td>Refresh rate</td>
//           <td colSpan={2}>10 fields/s</td>
//         </tr>
//         <tr>
//           <td>Reflectacne accuracy</td>
//           <td colSpan={2}>±3 dB</td>
//         </tr>
//         <tr>
//           <td>Mesurement time range</td>
//           <td colSpan={2}>5s - 5 Min, real time</td>
//         </tr>
//         <tr>
//           <td>Date Storage</td>
//           <td colSpan={2}>16 GB, up to 160,000 OTDR traces</td>
//         </tr>
//       </tbody>
//     </table>


//   {/* Other Test Modes Table */}
//   <div className="table-wrapper">
//     <table className="universal-table">
//       <thead>
//         <tr><th colSpan="7" style={{color: "white"}}>Other Test Modes</th></tr>

//       </thead>
//       <tbody>
//         <tr>
//           <td rowSpan={5}>Optical Power Meter</td>
//         </tr>
//         <tr>
//           <td>Calibrated λ</td>
//           <td>1310, 1550nm</td>
//         </tr>
//         <tr>
//           <td>Operating λ</td>
//           <td>850, 980, 1300, 1310, 1490, 1550, 1610, 1625, 1650nm</td>
//         </tr>
//         <tr>
//           <td>Power range</td>
//           <td>Select from [-70 - +10 dBm] or [-50 - +26 dBm]</td>
//         </tr>
//         <tr>
//           <td>Power Accuracy</td>
//           <td>± 0.23dB</td>
//         </tr>
//         <tr>
//           <td rowSpan={4}>Visual Fault <br /> Locator (VFL)</td>
//         </tr>
//         <tr>
//           <td>Wavelength</td>
//           <td>650 ± 10nm</td>
//         </tr>
//         <tr>
//           <td>Power</td>
//           <td>1mW</td>
//         </tr>
//         <tr>
//           <td>Compliance</td>
//           <td>Laser Safety Class II</td>
//         </tr>
//         <tr>
//           <td >Optical part type</td>
//           <td colSpan={6}>PC (default); SC/APC [optional]</td>
//         </tr>
//         <tr>
//           <td>Optical adapter type</td>
//           <td colSpan={6}>FC [default]; SC, ST, LC, SC/APC [optional]</td>
//         </tr>
//         <tr>
//           <th colSpan={3} >General Specifications</th>
//         </tr>
//         <tr>
//           <td colSpan={2}> Display</td>
//           <td> 4.3" dot matrix TFT LCD touchscreen </td>
//         </tr>
//         <tr>
//           <td colSpan={2}>Interface</td>
//           <td>1xUSB 2.0; 1xRJ45 LAN (10M/100M/1000M, Optional)</td>
//         </tr>
//         <tr>
//           <td rowSpan={3}>Power</td>
//         </tr>
//         <tr>
//           <td>Supply</td>
//           <td>100 - 240V, 1.5A, 50-60Hz (AC); max 12V / 2Ah [DC]; <br />total max power 20 W</td>
//         </tr>
//         <tr>
//           <td>Consumption</td>
//           <td> Less than 3W</td>
//         </tr>
//         <tr>
//           <td colSpan={2}>Battery</td>
//           <td>7.4V / 2500 mAh Li-ion battery, 18.5 Wh</td>
//         </tr>
//         <tr>
//           <td colSpan={2}>Operating Time</td>
//           <td>-6 hrs on full charge (4 hrs continuous testing)</td>
//         </tr>
//         <tr>
//           <td colSpan={2}>Operating Temperature</td>
//           <td>-10 <sup style={{fontSize: "8px"}}>o</sup>  C - +50 <sup style={{fontSize: "8px"}}>o</sup> C</td>
//         </tr>
//         <tr>
//           <td colSpan={2}> Storage Temperature</td>
//           <td>-40 <sup style={{fontSize: "8px"}}>o</sup>  C - +70 <sup style={{fontSize: "8px"}}>o</sup> C</td>
//         </tr>
//         <tr>
//           <td colSpan={2}>Relative Humidity</td>
//           <td>0 - 95% non-condensing</td>
//         </tr>
//         <tr>
//           <td colSpan={2}>Dimensions (L x W x H)</td>
//           <td>7.1" x 5.7" x 2.2" (180mm x 145mm x 55mm)</td>
//         </tr>
//         <tr>
//           <td colSpan={2}>Weight</td>
//           <td> Less than 2.2 lbs (less than 1 kg)</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>

//   {/* Functions & Accessories Table */}
//   <div className="table-wrapper">
//     <table className="universal-table">
//       <thead>
//         <tr><th colSpan="7" style={{color: "white"}}>Functions & Accessories</th></tr>

//       </thead>
//       <tbody>
//         <tr>
//           <td>Tast Modes</td>
//           <td>Manual; Auto</td>
//           <td>File Format</td>
//           <td>Campatible with Bellcare GR 196V1.1(*.SOR)</td>
//         </tr>
//         <tr>
//           <td>Limit Settings</td>
//           <td>Manual; Auto</td>
//           <td>Loss Test Type</td>
//           <td>LSA 2pt, 4pt</td>
//         </tr>
//         <tr>
//           <td>Limit Profiles</td>
//           <td>8 Customizable profiles</td>
//           <td>UI Style</td>
//           <td>4 Styles available</td>
//         </tr>
//         <tr>
//           <td>Distance Shift</td>
//           <td>Yes; display negative events</td>
//           <td>FiberPath Linear View</td>
//           <td>✔</td>
//         </tr>
//         <tr>
//           <td>Real-Time Testing</td>
//           <td>✔</td>
//           <td>Touchscreen Keyboard</td>
//           <td>✔</td>
//         </tr>
//         <tr>
//           <td>Self-Correcting</td>
//           <td>✔</td>
//           <td>Web Browser</td>
//           <td>✔</td>
//         </tr>
//         <tr>
//           <td>Online Help</td>
//           <td>✔</td>
//           <td>Auto Shutdown/Sleep</td>
//           <td>✔</td>
//         </tr>
//         <tr>
//           <td>Factory Reset</td>
//           <td>✔</td>
//           <td>Macrobending Test</td>
//           <td>✔</td>
//         </tr>
//         <tr>
//           <td>Multi-Lingual File Naming</td>
//           <td>✔</td>
//           <td>Dual/Quad-λ Testing</td>
//           <td>✔</td>
//         </tr>
//         <tr>
//           <td>Screenshots</td>
//           <td>✔</td>
//           <td>Multi-Trace Comparison</td>
//           <td>✔</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div>



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
// </div>
// </div>
//   );
// };

// export default Deviserproductthree;




import React, { useState, useEffect } from 'react';
import './Deviserproduct.css';
import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';
import AccordionTable from '../../../../components/ui/AccordionTable';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';




const Deviserproductthree = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("ae3100_main.webp"));
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
    document.title = 'Optronix: Deviser AE3100DM Quad MM/SM OTDR | 40dB';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix provides the Deviser AE3100DM Single Mode OTDR. Ideal for FTTx and LAN, it features a 7" touchscreen, 40/38 dB dynamic range, and integrated VFL/OPM/Light Source.';

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
      document.title = 'Optronix: Deviser AE3100DM Quad MM/SM OTDR | 40dB';
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
      { name: "Main battery pack", part: "BU-17", remarks: "Li-ion 10.8V / 4,560 mAh" },
      { name: "AC adapter", part: "ADC-15", remarks: "AC 100–240V (region plug dependent)" },
      { name: "AC power cord", part: "PC-AC<X>", remarks: "1 pc (region specific)" },
      { name: "Car battery cable", part: "PC-V25", remarks: "For car battery operation (cigarette socket)" },
      { name: "Carrying case", part: "CC-18", remarks: "Padded carrying case with pockets" },
      { name: "Quick reference guide", part: "QRG-AE1001", remarks: "User quick start & safety" },
      { name: "USB cable", part: "USB-A→Micro-B", remarks: "For firmware / trace export" },
      { name: "SD card (OEM)", part: "SD-8GB", remarks: "Optional — SD/SDHC up to 32GB supported" },
    ],

    accessories: [
      { name: "Launch cable (1 km)", part: "LAUNCH-1KM", remarks: "Single-mode launch cord for OTDR tests" },
      { name: "Launch cable (500 m)", part: "LAUNCH-500M", remarks: "Shorter launch cord option" },
      { name: "Optical Power Meter (OPM)", part: "OPM-AE", remarks: "Handheld reference OPM (optional)" },
      { name: "Visual Fault Locator (VFL)", part: "VFL-RED", remarks: "650 nm, ~1 mW, Class II (built-in model dependent)" },
      { name: "Connector adapter kit", part: "ADP-KIT", remarks: "FC/SC/ST/LC adapters (set)" },
      { name: "Protective screen film", part: "FILM-3100", remarks: "Touchscreen protector" },
      { name: "Optical fiber cleaning kit", part: "CLEAN-KIT", remarks: "Wipes, alcohol, swabs" },
      { name: "Protective pouch / belt", part: "PCH-CASE", remarks: "Field pouch for quick access" }
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
          <span className="current">DEVISER AE3100 DM</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}
              <h1 className="hero-title">DEVISER AE3100 DM</h1>
              <p className="hero-desc">
                The AE3100 DM OTDR from Deviser Instruments delivers advanced fiber-optic testing with support for
                1310nm and 1550nm wavelengths. With intuitive touchscreen controls and real-time data analysis, it’s the
                perfect tool for building, maintaining, and verifying FTTx and access networks. Optimized for mobility,
                it offers fast startup and reliable results in the field.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("ae3100dm.pdf"), "_blank")}>
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
            <button className={`tab ${activeTab === 'accessories' ? 'active' : ''}`} onClick={() => setActiveTab('accessories')}>Accessories</button>
          </div>

        </div>
      </section>

      {/* PANELS */}
      <section className="container">
        {activeTab === 'overview' && (
          <div className="panel-grid">
            <div className="panel" style={mosaicBG(0.92)}>
              <h3 className="panel-title">Why AE3100 DM stands out</h3>
              <p className="panel-sub">
                Lightweight, fast, and field‑friendly OTDR with built‑in OPM & VFL and a 7″ touchscreen.
              </p>
              <ul className="feature-list">
                <li>High-performance single and multimode OTDR for FTTx networks</li>
                <li>Minimum 5cm resolution</li>
                <li>7″ mobile‑style touchscreen LCD.</li>
                <li>Intelligent event analysis</li>
                <li>Excellent stability and repeatability</li>
                <li>"FiberPath" fiber link mapping mode</li>
                <li>Complete user data ports: supports LAN, USB, SD, & more</li>
                <li>Fast event analysis for quick fault detection and troubleshooting.</li>


              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr>
                        <th>Dynamic range</th>
                        <td>25/27/40/38 db</td>
                      </tr>
                      <tr>
                        <th>Event deadzone</th>
                        <td>≤ 0.8 m</td>
                      </tr>
                      <tr>
                        <th>Attenuation deadzone</th>
                        <td>≤ 5 m</td>
                      </tr>
                      <tr>
                        <th>Sampling Resolution</th>
                        <td>5cm - 6.4cm</td>
                      </tr>
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

              {/* GENERAL (first image) */}
              <AccordionTable
                title="General"
                columns={["Item", "Single-mode", "Multi-mode"]}
                defaultOpen={true}
                rows={[
                  ["Wavelength Accuracy", "± 20 nm", ""],

                  ["Event Dead Zone", "≤ 0.8 m", "≤ 0.8 m"],
                  ["Attenuation Dead Zone", "≤ 4 m", "≤ 5 m"],

                  [
                    "Distance Range",
                    "100m, 400m, 1.5km, 3km, 6km, 12km, 25km, 50km, 100km, 200km, 400km",
                    "100m, 400m, 1.5km, 3km, 6km, 12km, 25km, 50km"
                  ],
                  [
                    "Pulse Width",
                    "3ns, 5ns, 10ns, 30ns, 50ns, 100ns, 200ns, 500ns, 1μs, 2μs, 5μs, 10μs, 20μs",
                    "5ns, 10ns, 30ns, 50ns, 100ns, 200ns, 500ns, 1μs"
                  ],

                  ["Sampling Resolution", "5cm ~ 6.4m", ""],
                  ["Sampling Points", "256,000 max", ""],
                  [
                    "Distance Accuracy (m)",
                    "± (0.75m + 0.005% × Distance + Sampling Resolution)",
                    ""
                  ],
                  ["Group Refractive Index", "1.300000 ~ 1.700000", ""],
                  ["Loss Threshold", "0.01 dB", ""],
                  ["Loss Resolution", "0.001 dB", ""],
                  ["Refresh Rate", "4 fields/second", ""],
                  ["Reflectance Accuracy", "± 2 dB", ""],
                  ["Measurement Time Range", "5s ~ 5min, real time", ""],
                  ["Data Storage", ">10,000 OTDR traces, exportable to USB or PC", ""],
                  ["Calibration Period", "Valid for 1 year", ""],
                  ["Quality Compliance", "Complies with ISO-9001:2015", ""]
                ]}
              />

              {/* FUNCTIONS & ACCESSORIES (second image) */}


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
                <AccordionTable
                  title="Functions & Accessories"
                  columns={["Feature", "Value", "Feature", "Value"]}
                  rows={[
                    ["Test Modes", "Manual; Auto", "File Formats", "Compatible with Bellcore GR-196 v1.1 (*.SOR)"],
                    ["Limit Settings", "Manual; Auto", "Loss Test Type", "LSA, 2pt, 4pt"],
                    ["Limit Profiles", "8 customizable profiles", "UI Style", "4 styles available"],
                    ["Distance Shift", "Yes; display negative events", "FiberPath Linear View", "✔"],
                    ["Real-Time Testing", "✔", "Touchscreen Keyboard", "✔"],
                    ["Self-Correcting", "✔", "Web Browser", "✔"],
                    ["Online Help", "✔", "Auto Shutdown/Sleep", "✔"],
                    ["Factory Reset", "✔", "Macrobending Test", "✔"],
                    ["Multi-Lingual File Naming", "✔", "Dual Wavelength Test", "✔"],
                    ["Screenshots", "✔", "Multi-Trace Comparison", "✔"]
                  ]}
                />
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
        pageName="DEVISER AE3100 DM"
      /></div>
  );
};

export default Deviserproductthree;