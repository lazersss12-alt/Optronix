import { mediaUrl } from '../../config/media';
// import React, { useState } from 'react';
// import './Deviserproduct.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("AE1001.png") from "../img/devisor3.png";
// import ProductBg from "../img/headerbackground.png";
// import mediaUrl.doc("ae1001.pdf") from "../img/ae1001.pdf";
// import productImage4 from "../img/devisor4.png";
// import productImage2 from "../img/devisor2.png";
// import productImage3 from "../img/devisor3.png";

// import z2cImg from "../img/ae3100_main.jpg";
// import c82Img from "../img/ae210.png";
// import w1cImg from "../img/vfl.png";
// import fc8rImg from "../img/ep310.png";
// const sections = [
//   {

//     subtitle: (
//       <>
//        <span className='highlight' style={{color:"#3c5a9f"}}>AE1001 OTDR-</span>
//         <br /> 
//         Test,Measure & Locate in One Powerful Device!
//       </>
//     ),
//     img: mediaUrl.image("AE1001.png")

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

//         <span className="highlight" style={{color:"#3c5a9f"}}>2500 mAh</span> Powerhouse

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

//               onClick={() => window.open("/contact", "_self")}
//             >
//               Enquire Now
//             </button>
//             <button className='enquire_button'

//               onClick={() => window.open(mediaUrl.doc("ae1001.pdf"), "_blank")}  
//             >
//               Download Catalog
//             </button>
//           </>
//         )

//   }
// ];
// const Deviserproducttwo = () => {
//   const [productImage] = useState(mediaUrl.image("AE1001.png"));


//   return (
//     <div>
//        {/* Header */}
//       <div className="extreme-zoom-container center-col">
//   <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">DEVISER AE1001</h1>
//       <p className="hero-split__desc">
//         The AE1001 from Deviser Instruments is designed with the fiber maintenance technician in mind, offering a lightweight and streamlined OTDR solution that eliminates unnecessary bulk and complexity. Weighing under 1 kg, the AE1001 delivers fast, reliable testing at 1310 and 1550nm wavelengths in just 5 seconds. Its efficient power usage and robust 2500mAH battery provide over 4 hours of continuous operation, whether in automated, manual, or real-time test modes. Convenient features like the built-in OPM and VFL make the AE1001 an essential, hassle-free tool for fieldwork.
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
//           onClick={() => window.open(mediaUrl.doc("ae1001.pdf"), "_blank")}
//         >
//           Download Catalog
//         </button>
//       </div>
//     </div>

//     {/* Right: image */}
//     <div className="hero-split__image-wrap">
//       <img
//         src={mediaUrl.image("AE1001.png")} /* or use any of your images like productImage2 */
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
//             <img src={featureImg1} alt="Feature" style={{ width: "60%", display: "block", margin: "0 auto" }} />
//           )}
//         </div> 

//         <img style={{width: "100%"}} src={eponoltf1} alt=" EPON OLT FEATURE" />

//       </div>**/}


//       <div className='products1v-feature-section-f2'>

//       {/* <div className='featurez2c-section-f2-a'>
//       <img style={{width: "100%"}} src={eponoltf1} alt="EPON OLT FEATURE" />

//       </div> */}


//         </div>


//       {/* SPECIFICATION TABLE */}

//         <div className="table-wrapper">
// <table className="universal-table">
// <thead>
// <tr><th colSpan="7" style={{color: "white"}}>Optical Parameters</th></tr>

//   <tr>
//     <th>Test Wavelength</th>
//     <th>1310nm ± 20nm</th>
//     <th>1550nm ± 20nm</th>


//   </tr>


// </thead>

// <tbody>
//   <tr>
//     <td>Dynamic range*</td>
//     <td>20dB</td>
//     <td>24dB</td>
//   </tr>

//   <tr>
//     <td>Event deadzone**</td>
//     <td colSpan={2}>≤3m</td>
//   </tr>

//   <tr>
//     <td>Attenuation deadzone**</td>
//     <td colSpan={2}>≤ 10m</td>
//   </tr>

//   <tr>
//     <td>Measurement range</td>
//     <td colSpan={2}>150m, 300m, 500m, 1km, 2km, 5km, 10km, 20km, 40km, 80km</td>
//   </tr>

//   <tr>
//     <td>Pulse width</td>
//     <td colSpan={2}>3ns, 5ns, 10ns, 30ns, 50ns, 100ns, 200ns, 500ns, 1μs, 2μs, 5μs, 10μs, 20μs</td>
//   </tr>

//   <tr>
//     <td>Sampling resolution</td>
//     <td colSpan={2}>Auto / high-resolution modes</td>
//   </tr>

//   <tr>
//     <td>Sampling points</td>
//     <td colSpan={2}>Up to 12,800</td>
//   </tr>

//   <tr>
//     <td>Group refractive index***</td>
//     <td colSpan={2}>1.000000 - 2.000000</td>
//   </tr>

//   <tr>
//     <td>Distance Uncertainty</td>
//     <td colSpan={2}>±(0.75+0.005%x fiber length + sample resolution)</td>
//   </tr>

//   <tr>
//     <td>Linearity</td>
//     <td colSpan={2}>0.05dB/dB</td>
//   </tr>

//   <tr>
//     <td>Loss threshold</td>
//     <td colSpan={2}>0.001 dB</td>
//   </tr>

//   <tr>
//     <td>Loss resolution</td>
//     <td colSpan={2}>0.001dB</td>
//   </tr>

//   <tr>
//     <td>Refresh rate</td>
//     <td colSpan={2}>10 fields/s</td>
//   </tr>

//   <tr>
//     <td>Reflectacne accuracy</td>
//     <td colSpan={2}>±3 dB</td>
//   </tr>

//   <tr>
//     <td>Mesurement time range</td>
//     <td colSpan={2}>5s - 5 Min, real time</td>
//   </tr>

//   <tr>
//     <td>Date Storage</td>
//     <td colSpan={2}>16 GB, up to 160,000 OTDR traces</td>
//   </tr>


// </tbody>


// </table>



// </div>
// <div className="table-wrapper">
// <table className="universal-table">
// <thead>
//  <tr><th colSpan="7" style={{color: "white"}}>Other Test Modes</th></tr>

//   <tr>
//         <th>Function</th>
//         <th>Parameter</th>
//         <th>Value</th>
//       </tr>


// </thead>


// <tbody>
//   <tr>
//         <th rowSpan="4" style={{color: "white"}}>Optical Power Meter</th></tr>
//        <tr> <td>Calibrated λ</td>
//         <td>1310, 1550nm</td>
//       </tr>

//   <tr>
//     <td>Calibrated λ</td>
//     <td>1310, 1550nm</td>
//   </tr>

//   <tr>
//     <td>Operating λ</td>
//     <td>850, 980, 1300, 1310, 1490, 1550, 1610, 1625, 1650nm</td>
//   </tr>

//   <tr>
//     <td>Power range</td>
//     <td>Select from [-70 - +10 dBm] or [-50 - +26 dBm]</td>
//   </tr>

//   <tr>
//     <td>Power Accuracy</td>
//     <td colspan={6}>± 0.23dB</td>
//   </tr>

//   <tr>
//     <td colspan={4}>Visual Fault <br /> Locator (VFL)</td>
//   </tr>
//   <tr>
//     <td>Wavelength</td>
//     <td colSpan={6}>650 ± 10nm</td>
//   </tr>

//   <tr>
//     <td>Power</td>
//     <td colSpan={6}>1mW</td>
//   </tr>
//   <tr>
//     <td>Compliance</td>
//     <td colSpan={6}>Laser Safety Class II</td>
//   </tr>

//   <tr>
//     <td >Optical part type</td>
//     <td colSpan={6}>PC (default); SC/APC [optional]</td>
//   </tr>

//   <tr>
//     <td >Optical adapter type</td>
//     <td colSpan={6}>FC [default]; SC, ST, LC, SC/APC [optional]</td>
//   </tr>

//   {/* <tr style={{ backgroundColor: "#a7402d"}}>
//     <td colSpan={3}>General Specifications</td>
//   </tr> */}

//   <tr>
//     <td > Display</td>
//     <td colSpan={6}> 4.3" dot matrix TFT LCD touchscreen </td>
//   </tr>

//   <tr>
//     <td >Interface</td>
//     <td colSpan={6}>1xUSB 2.0; 1xRJ45 LAN (10M/100M/1000M, Optional)</td>
//   </tr>

//   <tr>
//     <td rowSpan={3}>Power</td>
//   </tr>

//   <tr>
//     <td>Supply</td>
//     <td>100 - 240V, 1.5A, 50-60Hz (AC); max 12V / 2Ah [DC]; <br />total max power 20 W</td>
//   </tr>

//   <tr>
//     <td>Consumption</td>
//     <td> Less than 3W</td>
//   </tr>

//   <tr>
//     <td colSpan={2}>Battery</td>
//     <td>7.4V / 2500 mAh Li-ion battery, 18.5 Wh</td>
//   </tr>

//   <tr>
//     <td colSpan={2}>Operating Time</td>
//     <td>-6 hrs on full charge (4 hrs continuous testing)</td>
//   </tr>

//   <tr>
//     <td colSpan={2}>Operating Temperature</td>
//     <td>-10 <sup style={{fontSize: "8px"}}>o</sup>  C - +50 <sup style={{fontSize: "8px"}}>o</sup> C</td>
//   </tr>

//   <tr>
//     <td colSpan={2}> Storage Temperature</td>
//     <td>-40 <sup style={{fontSize: "8px"}}>o</sup>  C - +70 <sup style={{fontSize: "8px"}}>o</sup> C</td>
//   </tr>

//   <tr>
//     <td colSpan={2}>Relative Humidity</td>
//     <td>0 - 95% non-condensing</td>
//   </tr>

//   <tr>
//     <td colSpan={2}>Dimensions (L x W x H)</td>
//     <td>7.1" x 5.7" x 2.2" (180mm x 145mm x 55mm)</td>
//   </tr>

//   <tr>
//     <td colSpan={2}>Weight</td>
//     <td> Less than 2.2 lbs (less than 1 kg)</td>
//   </tr>

// </tbody>     
// </table>






// <div className="table-wrapper">
// <table className="universal-table">
// <thead>
//  <tr><th colSpan="7" style={{color: "white"}}>Functions & Accesories</th></tr>



// </thead>

// <tbody>

//   <tr>
//     <td>Tast Modes</td>
//     <td>Manual; Auto</td>
//     <td>File Format</td>
//     <td>Campatible with Bellcare GR 196V1.1(*.SOR)</td>
//   </tr>

//   <tr>
//     <td>Limit Settings</td>
//     <td>Manual; Auto</td>
//     <td>Loss Test Type</td>
//     <td>LSA 2pt, 4pt</td>
//   </tr>

//   <tr>
//     <td>Limit Profiles</td>
//     <td>8 Customizable profiles</td>
//     <td>UI Style</td>
//     <td>4 Styles available</td>
//   </tr>

//   <tr>
//     <td>Distance Shift</td>
//     <td>Yes; display negative events</td>
//     <td>FiberPath Linear View</td>
//     <td>✔</td>
//   </tr>

//   <tr>
//     <td>Real-Time Testing</td>
//     <td>✔</td>
//     <td>Touchscreen Keyboard</td>
//     <td>✔</td>
//   </tr>


//   <tr>
//     <td>Self-Correcting</td>
//     <td>✔</td>
//     <td>Web Browser</td>
//     <td>✔</td>
//   </tr>

//   <tr>
//     <td>Online Help</td>
//     <td>✔</td>
//     <td>Auto Shutdown/Sleep</td>
//     <td>✔</td>
//   </tr>

//   <tr>
//     <td>Factory Reset</td>
//     <td>✔</td>
//     <td>Macrobending Test</td>
//     <td>✔</td>
//   </tr>

//   <tr>
//     <td>Multi-Lingual File Naming</td>
//     <td>✔</td>
//     <td>Dual/Quad-λ Testing</td>
//     <td>✔</td>
//   </tr>

//   <tr>
//     <td>Screenshots</td>
//     <td>✔</td>
//     <td>Multi-Trace Comparison</td>
//     <td>✔</td>
//   </tr>

// </tbody>
// </table>



// </div>







// </div>





// <div className='similerproduct'><h3 style={{textAlign: "center"}}>Similar Product</h3></div>
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
// </div>
// </div>
//   );
// };

// export default Deviserproducttwo;





import React, { useState, useEffect } from 'react';
import './Deviserproduct.css';
import '../index.css';
import '../../pages/page.css';
import { Link } from 'react-router-dom';
import AccordionTable from '../AccordionTable';
import ProductLeadModal from '../common/ProductLeadModal';
const Deviserproducttwo = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("AE1001.png"));
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
    document.title = 'Optronix: Deviser AE1001 Mini OTDR | 26/24dB, 1310/1550nm | Portable';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Get the Deviser AE1001 Portable OTDR from Optronix. A lightweight, 4.3\" touchscreen device for FTTx/Last-Mile testing. Features 26/24dB DR, built-in VFL, and OPM.';

    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }

    return () => {
      document.title = 'Optronix: Deviser AE1001 Mini OTDR | 26/24dB, 1310/1550nm | Portable';
    };
  }, []);

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeLightbox(); };
    if (lightboxOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen]);

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
          <span className="current">DEVISER AE1001</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            <div className="hero-left">
              <h1 className="hero-title">DEVISER AE1001</h1>
              <p className="hero-desc">
                The AE1001 from Deviser Instruments is designed with the fiber maintenance technician in mind — lightweight,
                fast and field-friendly. Built-in OPM and VFL plus a 4.3" touchscreen make quick verification and reporting simple.
              </p>

              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>Enquire Now</button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("ae1001.pdf"), "_blank")}>Download Catalog</button>
              </div>
              <p className="helper-text">Need help choosing? Our team can guide you to the right configuration.</p>
            </div>

            <div className="hero-right">
              <div className="product-slot" onClick={() => openLightbox(productImage)} role="button" aria-label="Open larger image">
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
              <h3 className="panel-title">Why AE1001 stands out</h3>
              <p className="panel-sub">Lightweight, fast, and field-friendly OTDR with built-in OPM & VFL and a 4.3″ touchscreen.</p>

              <ul className="feature-list">
                <li>All-in-one: OTDR + OPM + VFL in a compact handheld.</li>
                <li>1310 / 1550 nm testing with model DR of 26 dB (1310) / 24 dB (1550).</li>
                <li>4.3″ dot-matrix TFT touchscreen for easy operation.</li>
                <li>Fast start/test time with 5s quick modes.</li>
                <li>Auto / Manual / Real-time modes and onboard auto-analysis.</li>
                <li>Up to ~6 hrs battery runtime (2500 mAh), ~4 hrs continuous testing.</li>
                <li>Holds traces offline (16 GB, up to 160,000 traces) with USB/SD export.</li>
                <li>Compact: 180 × 145 × 55 mm and less 1 kg — ideal for field use.</li>
                <li>Low power consumption (less 3 W) and robust operating range.</li>
                <li>VFL built-in (650 ±10 nm, 1 mW) and laser safety Class II compliant.</li>
                <li>Accurate measurements (loss resolution 0.001 dB, distance uncertainty per spec).</li>
                <li>Multiple pulse widths & sampling modes for both short and long-range testing.</li>
              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>
                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr><th>Dynamic range</th><td>1310 nm: 26 dB · 1550 nm: 24 dB</td></tr>
                      <tr><th>Event deadzone</th><td>≤ 3 m</td></tr>
                      <tr><th>Attenuation deadzone</th><td>≤ 10 m</td></tr>
                      <tr><th>Sampling points</th><td>Up to 12,800</td></tr>
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

              {/* OPTICAL PARAMETERS */}
              <AccordionTable
                title="Optical Parameters"
                columns={["Parameter", "1310 nm ±20nm", "1550 nm ±20nm"]}
                defaultOpen={true}
                rows={[
                  ["Dynamic range*", "26 dB", "24 dB"],
                  ["Event deadzone**", "≤ 3 m", "≤ 3 m"],
                  ["Attenuation deadzone**", "≤ 10 m", "≤ 10 m"],
                  ["Measurement range", "150m, 300m, 500m, 1km, 2km, 5km, 10km, 20km, 40km, 80km", ""],
                  ["Pulse width", "3ns, 5ns, 10ns, 30ns, 50ns, 100ns, 200ns, 500ns, 1µs, 2µs, 5µs, 10µs, 20µs", ""],
                  ["Sampling resolution", "Auto / high-resolution modes", ""],
                  ["Sampling points", "Up to 12,800", ""],
                  ["Group refractive index***", "1.000000 – 2.000000", ""],
                  ["Distance uncertainty", "±(0.75 + 0.005% × fiber length + sampling resolution)", ""],
                  ["Linearity", "0.05 dB/dB", ""],
                  ["Loss threshold", "0.001 dB", ""],
                  ["Loss resolution", "0.001 dB", ""],
                  ["Refresh rate", "10 fields/s", ""],
                  ["Reflectance accuracy", "±3 dB", ""],
                  ["Measurement time range", "5 s – 5 min, real time", ""],
                  ["Data storage", "16 GB (up to 160,000 OTDR traces)", ""]
                ]}
              />

              {/* OTHER TEST MODES */}
              <AccordionTable
                title="Other Test Modes"
                columns={["Feature", "Value"]}
                rows={[
                  ["Optical Power Meter — Calibrated λ", "1310, 1550 nm"],
                  ["OPM — Operating λ", "850, 980, 1300, 1310, 1490, 1550, 1610, 1625, 1650 nm"],
                  ["OPM — Power range", "Select from [-70 ~ +10 dBm] or [-50 ~ +26 dBm]"],
                  ["OPM — Power accuracy", "±0.23 dB"],
                  ["VFL — Wavelength", "650 ± 10 nm"],
                  ["VFL — Power", "1 mW"],
                  ["VFL — Compliance", "Laser Safety Class II"],
                  ["Optical port type", "PC (default); APC optional"],
                  ["Optical adapter type", "FC (default); SC, ST, LC, SC/APC optional"]
                ]}
              />

              {/* GENERAL SPECIFICATIONS */}
              <AccordionTable
                title="General Specifications"
                columns={["Feature", "Value"]}
                rows={[
                  ["Display", '4.3" dot matrix TFT LCD touchscreen'],
                  ["Interface", "1x USB 2.0; 1x RJ45 LAN (10M/100M/1000M) optional"],
                  ["Power supply", "100 ~ 240V, 1.5A, 50/60Hz (AC); max 12V / 2Ah (DC); total max power 24 W"],
                  ["Power consumption", "< 3 W"],
                  ["Battery", "7.4V / 2500 mAh Li-ion (18.5 Wh)"],
                  ["Operating time", "~6 hrs on full charge (≈4 hrs continuous testing)"],
                  ["Operating temperature", "-10°C ~ +50°C"],
                  ["Storage temperature", "-40°C ~ +70°C"],
                  ["Relative humidity", "0 ~ 95% non-condensing"],
                  ["Dimensions (L×W×H)", "180 × 145 × 55 mm (7.1\" × 5.7\" × 2.2\")"],
                  ["Weight", "< 1 kg (≈2.2 lbs)"]
                ]}
              />

            </div>
          </div>
        )}

        {activeTab === 'accessories' && (
          <div className="stack">
            <div className="panel" style={mosaicBG(0.92)}>
              <h3 className="panel-title">Accessories & bundles</h3>
              <p className="panel-sub">Available launch cords, adapters and optional test tools for full field capability.</p>

              <div className="acc-group">
                <details className="acc" open>
                  <summary className="acc-sum"><span className="acc-title">Accessories for AE1001</span></summary>
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
                  <summary className="acc-sum"><span className="acc-title">Accessories</span></summary>
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
                  <summary className="acc-sum"><span className="acc-title">Storage / Extras</span></summary>
                  <div className="acc-content">
                    <div className="acc-table">
                      <div className="acc-row acc-head"><span>Part</span><span>Part No</span><span>Remarks</span></div>
                      {accessoriesData.fiberSleeves.map((r, i) => (
                        <div className="acc-row" key={`fps-${i}`}><span>{r.name}</span><span>{r.part}</span><span>{r.remarks}</span></div>
                      ))}
                    </div>
                  </div>
                </details>

                <details className="acc">
                  <summary className="acc-sum"><span className="acc-title">Basic Accessories</span></summary>
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

      {/* Similar products */}
      <section className="container similar-wrap similar--pro">
        <div className="similar-head"><h3>Similar products</h3></div>
        <div className="s-grid">
          <div className="s-card">
            <span className="s-brand">DEVISER</span>
            <div className="s-media"><img src={mediaUrl.image("AE1001.png")} loading="lazy" alt="AE1001" /></div>
            <div className="s-body"><h4 className="s-title">AE1001</h4><p className="s-desc">Handheld OTDR & OPM</p></div>
            <Link to="/deviser/AE1001" className="s-cta"><span>Know more</span><span className="s-cta-end">↗</span></Link>
          </div>

          <div className="s-card">
            <span className="s-brand">DEVISER</span>
            <div className="s-media"><img src={mediaUrl.image("ae210.png")} loading="lazy" alt="AE210 Series" /></div>
            <div className="s-body"><h4 className="s-title">AE210 Series</h4><p className="s-desc">Portable OPM/OLS</p></div>
            <Link to="/deviser/AE210" className="s-cta"><span>Know more</span><span className="s-cta-end">↗</span></Link>
          </div>

          <div className="s-card">
            <span className="s-brand">DEVISER</span>
            <div className="s-media"><img src={mediaUrl.image("vfl.png")} loading="lazy" alt="VF-10" /></div>
            <div className="s-body"><h4 className="s-title">VF-10</h4><p className="s-desc">Visual Fault Locator</p></div>
            <Link to="/deviser/VF10" className="s-cta"><span>Know more</span><span className="s-cta-end">↗</span></Link>
          </div>

          <div className="s-card">
            <span className="s-brand">DEVISER</span>
            <div className="s-media"><img src={mediaUrl.image("ep310.png")} loading="lazy" alt="EP-310 Series" /></div>
            <div className="s-body"><h4 className="s-title">EP-310 Series</h4><p className="s-desc">PON power meters</p></div>
            <Link to="/deviser/EP310" className="s-cta"><span>Know more</span><span className="s-cta-end">↗</span></Link>
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
        pageName="Deviser - AE1001"
      />
    </div>
  );
};

export default Deviserproducttwo;
