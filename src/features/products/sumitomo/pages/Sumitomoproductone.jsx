// import React, { useState } from 'react';
// import '../../../../pages/page.css';
// import '../../../../components/index.css';
// import { Link } from 'react-router-dom';
// import op08 from "../../../../assets/images/S1V.png";

// import s1vpdf from "../../../../assets/images/sumitomos1v.pdf";
// import s1vindipage from "../../../../assets/images/S1Vbanner.webp";
// import subz2c from "../../../../assets/images/Backup_of_Z2C 2june.png";
// import subw1c from "../../../../assets/images/W1C file.png";
// import sub82c from "../../../../assets/images/82C+ 1Oct 2024.png";
// import subfc8r from "../../../../assets/images/FC8r.png";
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

// const Sumitomoproductone = () => {
//   const [productImage, setProductImage] = useState(op08);
  const [enquireOpen, setEnquireOpen] = useState(false);
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleIconClick = (image, icon) => {
//     setProductImage(image);
//     setActiveIcon(icon);
//   };       

//   return (
//     <div>
//      {/* Hero Section */}

//     {/* Container for centered content on extreme zoom out */}
// {/* HERO — split layout like the screenshot */}
// <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">SUMITOMO S1V Series</h1>
//       <p className="hero-split__desc">
//         Discover the Sumitomo S1V Fusion Splicer – a high-precision, compact powerhouse crafted by
//         Sumitomo Electric Industries. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the S1V ensures efficient, flawless splicing in any environment.
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

//       {/* Features */}
//       <div className={`products1v-feature-section-f2`}>
//   <div className="featurez2c-section-f2-a">
//     <img className="feature-banner" src={s1vindipage} alt="S1V Feature" />
//   </div>
// </div>

//       {/* Features Table */}
//       <div className="table-wrapper">
//         <table className="universal-table">
//           <thead>
//             <tr><th colSpan="3">Features</th></tr>

//           </thead>
//           <tbody>
//             <tr><td>Compact , Smart & Tough</td></tr>
//             <tr><td>Universal Clamp fiber Holder
//             </td></tr>
//             <tr><td>4.3 inch Capacitive Touch Screen</td></tr>
//             <tr><td>Minimum Splicing Loss</td></tr>
//             <tr><td>Electrode Life: 6,000 Arc Discharges
//             </td></tr>
//             <tr><td>Long Life Battery for Approx 250 Splice & Heat Cycle</td></tr>
//             <tr><td>Handheld Fusion Splicer
//             </td></tr>
//             <tr><td>Improved Enviromental Durability includes Shock , Water &
//             Dust Resistance and Wind Proof Features</td></tr>
//             <tr><td>Suitable for Drop and Indoor Cable Splicer
//             </td></tr>
//             <tr><td>Built in Help Videos Play on Splicer Display
//             </td></tr>
//             <tr><td>Software updates and Remote Diagnosis Services Via Internet
//             </td></tr>

//           </tbody>
//         </table>
//       </div>

//       {/* SPECIFICATION TABLE */}
//       <div className="table-wrapper">
//         <table className="universal-table">
//           <thead>
//             <tr><th colSpan="3">Specification</th></tr>
//             <tr><th></th><th>Item</th><th>S1V</th></tr>
//           </thead>
//           <tbody>
//             <tr className="section-header"><td rowSpan="5">Optical Fiber Requirement</td></tr>
//             <tr><td>Material</td><td>Silica glass</td></tr>
//             <tr><td>Fiber count / Profile types</td><td>Single / SMF(G.652), MMF(G.651), DSF(G.653), NZDSF(G.655), BIF(G.657)</td></tr>
//             <tr><td>Fiber diameter</td><td>Cladding diameter: 125 µm, Coating diameter: 250 ~ 1,000 µm</td></tr>
//             <tr><td>Cleave length</td><td>5 to 16mm for single fiber</td></tr>

//             <tr className="section-header"><td rowSpan="9">Standard Performance</td></tr>
//             <tr><td>Splicing Loss (Typical)</td><td>SMF: 0.03dB, MMF: 0.01dB, DSF: 0.05dB, NZDSF: 0.05dB</td></tr>
//             <tr><td>Return loss (Typical)</td><td>60dB or greater</td></tr>
//             <tr><td>Splice time (Typical)</td><td>6 sec (SM G652 Quick Mode)</td></tr>
//             <tr><td>Heating time (Typical)</td><td>17 sec (FPS-61–2.6 sleeve, S60mm 0.25 Mode)</td></tr>
//             <tr><td>Splice & Heat cycles per battery charge</td><td>Approx. 250 (BU-17)</td></tr>
//             <tr><td>Fiber view & magnification</td><td>2 CMOS cameras, 140X (370X zoom)</td></tr>
//             <tr><td>Proof test</td><td>1.96 ~ 2.09N</td></tr>
//             <tr><td>Applicable protection sleeve</td><td>60mm, 40mm & Sumitomo Nano sleeves</td></tr>

//             <tr className="section-header"><td rowSpan="3">Programs</td></tr>
//             <tr><td>Splice programs</td><td>Max. 300, 16 pre-optimised, 284 editable</td></tr>
//             <tr><td>Heating programs</td><td>Max. 100, 23 pre-optimised, 77 editable</td></tr>

//             <tr className="section-header"><td rowSpan="8">Functions</td></tr>
//             <tr><td>Splice image capture / storage</td><td>200 images / 10,000 splice data (internal), 50,200 / 20,000 (with 16GB SD)</td></tr>
//             <tr><td>Auto-start</td><td>Splice/Heating</td></tr>
//             <tr><td>Multi clamp</td><td>250μm, 900μm, 2/3mm cord, drop cable supported</td></tr>
//             <tr><td>Heater clamp for connector</td><td>3.5mm round drop cable Provided</td></tr>
//             <tr><td>Automatic arc calibration</td><td>Compensates for environmental changes</td></tr>
//             <tr><td>Onboard training video</td><td>Provided</td></tr>
//             <tr><td>Onboard help guide</td><td>Provided</td></tr>

//             <tr className="section-header"><td rowSpan="4">Size / Weight</td></tr>
//             <tr><td>Size</td><td>126(W) x 154(D) x 83(H) mm</td></tr>
//             <tr><td>Weight</td><td>0.9kg (without battery), 1.2kg (with BU-17)</td></tr>
//             <tr><td>Monitor</td><td>4.3″ color LCD</td></tr>

//             <tr className="section-header"><td rowSpan="3">Terminals</td></tr>
//             <tr><td>USB port</td><td>USB 2.0 (mini-B)</td></tr>
//             <tr><td>Storage media</td><td>SD / SDHC Max 32GB</td></tr>

//             <tr className="section-header"><td rowSpan="4">Power supply</td></tr>
//             <tr><td>AC input</td><td>AC 100 ~240V</td></tr>
//             <tr><td>DC input</td><td>DC 10 ~ 15V</td></tr>
//             <tr><td>Battery pack</td><td>Li-ion 10.8V, 4,560mAh</td></tr>

//             <tr className="section-header"><td rowSpan="2">Operating condition</td></tr>
//             <tr><td colSpan="2">Altitude 0–5000m, Temp -10~+50°C, Humidity 0–95%, Wind ≤15m/s</td></tr>

//             <tr className="section-header"><td rowSpan="2">Storage condition</td></tr>
//             <tr><td colSpan="2">Temp -40~+80°C, Humidity 0–95%, Battery -20~+30°C</td></tr>

//             <tr className="section-header"><td rowSpan="2">Electrode life</td></tr>
//             <tr><td colSpan="2">6,000 arc discharges</td></tr>

//             <tr className="section-header"><td rowSpan="2">Software updates</td></tr>
//             <tr><td colSpan="2">Internet</td></tr>

//             <tr className="section-header"><td rowSpan="2">Data Management</td></tr>
//             <tr><td colSpan="2">Stored, edited & analyzed with PC software</td></tr>

//             <tr className="section-header"><td rowSpan="6">Test Details</td></tr>
//             <tr><td>Shock resistance</td><td>Drop from 76cm on 5 faces, 4 edges, bottom corners</td></tr>
//             <tr><td>Impact resistance</td><td>2J impact (500g at 40cm)</td></tr>
//             <tr><td>Water resistance</td><td>IPx2</td></tr>
//             <tr><td>Dust resistance</td><td>IP5x</td></tr>
//           </tbody>
//         </table>
//       </div>

//       {/* ACCESSORIES TABLE */}
//       <div className="table-wrapper">
//         <table className="universal-table">
//           <thead>
//             <tr><th colSpan="4">Accessories</th></tr>
//             <tr><th></th><th>Part Name</th><th>Part No</th><th>Remarks</th></tr>
//           </thead>
//           <tbody>
//             <tr className="section-header"><td rowSpan="10">Accessories for Splicer</td></tr>
//             <tr><td>Battery Pack</td><td>BU-17</td><td>Li-ion 10.8V, 4,560mAh</td></tr>
//             <tr><td>Battery Charger</td><td>BC-17</td><td>For BU-17</td></tr>
//             <tr><td>Car battery cable</td><td>PC-V25</td><td>Cigarette Socket Type</td></tr>
//             <tr><td>V-groove cleaning brush</td><td>VGT-2</td><td>Brush for cleaning</td></tr>
//             <tr><td>Electrode</td><td>ER-17</td><td>-</td></tr>
//             <tr><td>Working tray strap kit</td><td>WSK-18</td><td>Neck hanging kit</td></tr>
//             <tr><td>Tripod Adapter</td><td>TA-18</td><td>For tripod use</td></tr>
//             <tr><td>USB cable</td><td>-</td><td>-</td></tr>
//             <tr><td>Shoulder belt</td><td>-</td><td>-</td></tr>

//             <tr className="section-header"><td rowSpan="9">Accessories</td></tr>
//             <tr><td>Fiber Cleaver</td><td>
//               <div>SFC-S</div><div>FC-7LS</div></td><td><div>TableTop</div><div>Handhold</div></td></tr>
//             <tr><td>Jacket Remover</td><td>JR-M03</td><td>Single fiber</td></tr>
//             <tr><td>Loose Tube Cutter</td><td>LTC-01</td><td>-</td></tr>
//             <tr><td>Alcohol Dispenser</td><td>ASB-17</td><td>-</td></tr>

//             <tr><td rowSpan="4">Fiber Protection Sleeve</td><td>FPS-1</td><td>60 mm shrink</td></tr>
//             <tr><td>FPS-40</td><td>3.2 mm, 40mm shrink</td></tr>
//             <tr><td>FPS-61-2.6</td><td>3.2 mm, 61mm shrink</td></tr>
//             <tr><td>FPS-D60</td><td>2.6mm 60mm for drop cables</td></tr>
//           </tbody>
//         </table>
//       </div>

//       {/* BASIC ACCESSORIES TABLE */}
//       <div className="table-wrapper">
//         <table className="universal-table">
//           <thead>
//             <tr><th colSpan="3">Basic Accessories</th></tr>
//             <tr><th>Part Name</th><th>Part No</th><th>QTY</th></tr>
//           </thead>
//           <tbody>
//             <tr><td>AC Adaptor</td><td>ADC-15</td><td>1 pc</td></tr>
//             <tr><td>AC Power Cord</td><td>PC-AC X-2P</td><td>1 pc</td></tr>
//             <tr><td>Battery pack</td><td>BU-17</td><td>1 pc</td></tr>
//             <tr><td>Quick reference guide</td><td>-</td><td>1 pc</td></tr>
//             <tr><td>Carrying case</td><td>CC-18</td><td>1 pc</td></tr>
//             <tr><td>Working Tray</td><td>WT-18</td><td>1 pc</td></tr>
//           </tbody>
//         </table>
//       </div>

//       {/* SIMILAR */}
//       <div className='similerproduct'><h3 style={{textAlign: "center"}}>Similar Product</h3></div>
//       <div className='product_s1v1_product'>
//         <div className='product_s1v1_product1'>
//           <img loading="lazy" className='product_s1v1_img' src={subz2c} alt="Z2C" />
//           <h3 className='products1v_name_option'>Z2C</h3>
//           <Link to="/sumitomoproductthree"><button className='products1v_button_option'>Know More</button></Link>
//         </div>
//         <div className='product_s1v1_product2'>
//           <img loading="lazy" className='product_s1v1_img' src={sub82c} alt="82C+" />
//           <h3 className='products1v_name_option'>82C+</h3>
//           <Link to="/sumitomoproductfive"><button className='products1v_button_option'>Know More</button></Link>
//         </div>
//         <div className='product_s1v1_product3'>
//           <img loading="lazy" className='product_s1v1_img' src={subw1c} alt="W1C" />
//           <h3 className='products1v_name_option'>W1C</h3>
//           <Link to="/sumitomoproductfour"><button className='products1v_button_option'>Know More</button></Link>
//         </div>
//         <div className='product_s1v1_product4'>
//           <img loading="lazy" className='product_s1v1_img' src={subfc8r} alt="FC8R" />
//           <h3 className='products1v_name_option'>FC8R</h3>
//           <Link to="/sumitomoproductseven"><button className='products1v_button_option'>Know More</button></Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sumitomoproductone;






import React, { useState, useEffect } from 'react';
import '../../../../pages/page.css';
import '../../../../components/index.css';
import { Link } from 'react-router-dom';

import op08 from "../../../../assets/images/S1V.png";
import s1vpdf from "../../../../assets/images/sumitomos1v.pdf";
import subz2c from "../../../../assets/images/Backup_of_Z2C 2june.png";
import subw1c from "../../../../assets/images/W1C file.png";
import sub82c from "../../../../assets/images/82C+ 1Oct 2024.png";
import subfc8r from "../../../../assets/images/FC8r.png";

const Sumitomoproductone = () => {
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
    document.title = 'Sumitomo S1V Fusion Splicer for FTTH Networks';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix offers the Sumitomo S1V Fusion Splicer—the tough, compact Active Clad alignment machine ideal for FTTH. Featuring NanoTune™ AI technology, 6s splice time, and 250 cycle battery life.';

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
      document.title = 'Optronix - Fiber Optic Solutions';
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
  const specAccordions = [
    {
      title: "Optical Fiber Requirement",
      items: [
        { label: "Material", value: "Silica glass" },
        { label: "Fiber count / Profile types", value: "Single / SMF(G.652), MMF(G.651), DSF(G.653), NZDSF(G.655), BIF(G.657)" },
        { label: "Fiber diameter", value: "Cladding diameter: 125 µm, Coating diameter: 250 ~ 1,000 µm" },
        { label: "Cleave length", value: "5 to 16mm for single fiber" },
      ],
    },
    {
      title: "Standard Performance",
      items: [
        { label: "Splicing Loss (Typical)", value: "SMF: 0.03dB, MMF: 0.01dB, DSF: 0.05dB, NZDSF: 0.05dB" },
        { label: "Return loss (Typical)", value: "60dB or greater" },
        { label: "Splice time (Typical)", value: "6 sec (SM G652 Quick Mode)" },
        { label: "Heating time (Typical)", value: "17 sec (FPS-61–2.6 sleeve, S60mm 0.25 Mode)" },
        { label: "Splice & Heat cycles per battery charge", value: "Approx. 250 (BU-17)" },
        { label: "Fiber view & magnification", value: "2 CMOS cameras, 140X (370X zoom)" },
        { label: "Proof test", value: "1.96 ~ 2.09N" },
        { label: "Applicable protection sleeve", value: "60mm, 40mm & Sumitomo Nano sleeves" },
      ],
    },
    {
      title: "Programs",
      items: [
        { label: "Splice programs", value: "Max. 300, 16 pre-optimised, 284 editable" },
        { label: "Heating programs", value: "Max. 100, 23 pre-optimised, 77 editable" },
      ],
    },
    {
      title: "Functions",
      items: [
        { label: "Splice image capture / storage", value: "200 images / 10,000 splice data (internal), 50,200 / 20,000 (with 16GB SD)" },
        { label: "Auto-start", value: "Splice/Heating" },
        { label: "Multi clamp", value: "250μm, 900μm, 2/3mm cord, drop cable supported" },
        { label: "Heater clamp for connector", value: "3.5mm round drop cable Provided" },
        { label: "Automatic arc calibration", value: "Compensates for environmental changes" },
        { label: "Onboard training video", value: "Provided" },
        { label: "Onboard help guide", value: "Provided" },
      ],
    },
    {
      title: "Size / Weight",
      items: [
        { label: "Size", value: "126(W) x 154(D) x 83(H) mm" },
        { label: "Weight", value: "0.9kg (without battery), 1.2kg (with BU-17)" },
        { label: "Monitor", value: "4.3″ color LCD" },
      ],
    },
    {
      title: "Terminals",
      items: [
        { label: "USB port", value: "USB 2.0 (mini-B)" },
        { label: "Storage media", value: "SD / SDHC Max 32GB" },
      ],
    },
    {
      title: "Power supply",
      items: [
        { label: "AC input", value: "AC 100 ~240V" },
        { label: "DC input", value: "DC 10 ~ 15V" },
        { label: "Battery pack", value: "Li-ion 10.8V, 4,560mAh" },
      ],
    },
    { title: "Operating condition", note: "Altitude 0–5000m, Temp -10~+50°C, Humidity 0–95%, Wind ≤15m/s" },
    { title: "Storage condition", note: "Temp -40~+80°C, Humidity 0–95%, Battery -20~+30°C" },
    { title: "Electrode life", note: "6,000 arc discharges" },
    { title: "Software updates", note: "Internet" },
    { title: "Data Management", note: "Stored, edited & analyzed with PC software" },
    {
      title: "Test Details",
      items: [
        { label: "Shock resistance", value: "Drop from 76cm on 5 faces, 4 edges, bottom corners" },
        { label: "Impact resistance", value: "2J impact (500g at 40cm)" },
        { label: "Water resistance", value: "IPx2" },
        { label: "Dust resistance", value: "IP5x" },
      ],
    },
  ];

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
      { name: "Shoulder belt", part: "-", remarks: <span style={{ color: "green", fontWeight: "bold" }}>&#10003;</span> },
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
          <Link to="/sumitomo" style={{ color: "#333", textDecoration: "none" }}>Products</Link>

          <span className="sep">/</span>
          <span className="current">SUMITOMO S1V </span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}
              <h1 className="hero-title">SUMITOMO S1V </h1>
              <p className="hero-desc">
                The Sumitomo S1V Fusion Splicer is a compact, high-precision tool engineered for telecom,
                data center, and industrial networks. It delivers low splice loss, fast operation, and rugged
                reliability in the toughest environments.
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
            <button className={`tab ${activeTab === 'accessories' ? 'active' : ''}`} onClick={() => setActiveTab('accessories')}>Accessories</button>
          </div>

        </div>
      </section>

      {/* PANELS */}
      <section className="container">
        {activeTab === 'overview' && (
          <div className="panel-grid">
            <div className="panel" style={mosaicBG(0.92)}>
              <h3 className="panel-title">Why S1V stands out</h3>
              <p className="panel-sub">
                Designed for technicians who demand speed, accuracy, and durability, the S1V combines smart
                automation with a rugged, portable form factor.
              </p>
              <ul className="feature-list">

                <li>Universal clamp fiber holder.</li>
                <li>4.3 inch capacitive touch screen.</li>

                <li>Electrode life of 6,000 arc discharges.</li>
                <li>Long-life battery for approx. 250 splice & heat cycles.</li>
                <li>Handheld fusion splicer.</li>
                <li>Improved environmental durability (shock, water & dust resistant, wind proof).</li>

                <li>Auto-start function for faster and more efficient splicing workflow.</li>
                <li>Dual CMOS cameras with up to 370× zoom for precise fiber observation.</li>


                <li>High-capacity internal memory supporting up to 10,000 splice data entries.</li>


              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr>
                        <th>Fiber types</th>
                        <td>SMF (G.652), MMF (G.651), DSF (G.653), NZDSF (G.655), BIF (G.657)</td>
                      </tr>
                      <tr>
                        <th>Splicing Loss (typ.)</th>
                        <td>SMF: 0.03 dB (typ.), MMF: 0.01 dB (typ.), DSF/NZDSF: 0.05 dB (typ.)</td>
                      </tr>
                      <tr>
                        <th>Proof test</th>
                        <td>1.96 ~ 2.09 N</td>
                      </tr>
                      <tr>
                        <th>Environmental</th>
                        <td>Shock-resistant (76 cm drop), impact protected (2J), Water ~ IPx2, Dust ~ IP5x</td>
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
              {specAccordions.map((section, i) => (
                <details className="acc" open={i === 0} key={section.title}>
                  <summary className="acc-sum">
                    <span className="acc-title">{section.title}</span>
                  </summary>
                  <div className="acc-content">
                    {section.items ? (
                      <div className="acc-kv-list">
                        {section.items.map((it, idx) => (
                          <div className="kv acc-kv" key={`${section.title}-${idx}`}>
                            <span className="k">{it.label}</span>
                            <span className="v">{it.value}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="acc-note">{section.note}</p>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'accessories' && (
          <div className="stack">
            <div className="panel" style={mosaicBG(0.92)}>
              <h3 className="panel-title">Accessories & bundles</h3>
              <p className="panel-sub">
                The S1V ecosystem includes a complete range of accessories and basic items to keep your field
                teams productive and your splices consistent.
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

        <div className="s-grid-wrapper">
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

            {/* Spacer for last card visibility */}
            <div className="s-grid-spacer"></div>
          </div>
        </div>
      </section>
      {lightboxOpen && (
        <div className="lb" role="dialog" aria-modal="true" aria-label="Product image (zoomed)" onClick={closeLightbox}>
          <div className="lb__dialog" onClick={(e) => e.stopPropagation()}>
            <button className="lb__close" aria-label="Close image" onClick={closeLightbox}>×</button>
            <img loading="lazy" className="lb__img" src={lightboxSrc} alt="Zoomed product" />
          </div>
        </div>
      )}
    
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="SUMITOMO S1V"
      /></div>
  );
};

export default Sumitomoproductone;