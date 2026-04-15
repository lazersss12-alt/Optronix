import media_Z2C_webp from '../../../../assets/img2/img/Z2C.webp';
import media_Sumitomoz2c_pdf from '../../../../assets/img2/img/Sumitomoz2c.pdf';
import media_W1C_file_png from '../../../../assets/img2/img/W1C file.png';
import media_82C__1Oct_2024_png from '../../../../assets/img2/img/media/images/82C+ 1Oct 2024.png';
import media_FC8r_png from '../../../../assets/img2/img/media/images/fc8r.png';
import media_Z2C_jpg from '../../../../assets/img2/img/Z2C.jpg';
import media_Backup_of_Z2C_2june_png from '../../../../assets/img2/img/media/images/backup_of_z2c 2june.png';
// import React, { useState } from 'react';
// import '../../../../pages/page.css';
// import '../../../../components/index.css';
// import { Link } from 'react-router-dom';
// import media_Z2C_webp from "../../../../assets/images/Z2C.png";
// import ProductBg from "../../../../assets/images/headerbackground.png";
// import productImage4 from "../../../../assets/images/82M4.png";
// import media_Sumitomoz2c_pdf from "../../../../assets/images/Sumitomoz2c.pdf";
// import productImage2 from "../../../../assets/images/Z2C2 (2).png";
// import productImage3 from "../../../../assets/images/Z2C3 (2).png";
// import eponoltf1 from "../../../../assets/images/product3.webp";
// import subs1vu from "../../../../assets/images/s1vuf.png";
// import media_W1C_file_png from "../../../../assets/images/W1C file.png";
// import media_82C__1Oct_2024_png from "../../../../assets/images/82C+ 1Oct 2024.png";
// import media_FC8r_png from "../../../../assets/images/FC8r.png";
import ProductLeadModal from '../../../../components/common/ProductLeadModal';
// const sections = [
//   {

//     subtitle: (
//       <>
//          <span className="highlight" style={{color:"#2287db"}}>Next-Level Fiber Fusion with Core Precision.</span>


//       </>
//     ),
//     img: media_Z2C_webp

//   },
//   {

//     subtitle: (
//       <>
//          <span className="highlight" style={{color:"#2287db"}}>Play, Work, Test</span> - All on a Brilliant 5.0"WVGa Screen.
//          <br></br>
//          <br></br>
//          <h6>Play help videos anytime, anywhere, for faster,smarter,hassle-free operations!</h6>
//       </>
//     ),
//     img: productImage2,

//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#2287db"}}>Up to 6000 Splices with Trusted ER-10 Electrodes.</span>
//       </>
//     ),
//     img: productImage3,
//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#2287db"}}>Massive Storage</span><br></br>
//          <span className="highlight" style={{color:"#2287db"}}>Made simple</span>
//         <br></br>
//         <br></br>
//         <h6>Store up to 50,200 images & 20,000 data with internal + external memory support!</h6>
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

//               onClick={() => window.open(media_Sumitomoz2c_pdf, "_blank")}  
//             >
//               Download Catalog
//             </button>
//           </>
//         )

//   }
// ];
// const Sumitomoproductthree = () => {
//   const [productImage, setProductImage] = useState(media_Z2C_webp);
//   const [enquireOpen, setEnquireOpen] = useState(false);
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleIconClick = (image, icon) => {
//     setProductImage(image);
//     setActiveIcon(icon);
//   };       

//   return (
//     <div>
//       {/* Product Header */}
//     <div className="extreme-zoom-container center-col">
//   <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">SUMITOMO Z2C</h1>
//       <p className="hero-split__desc">
//         Our Core Fusion Splicer offers high-precision core alignment using advanced imaging for ultra-low splice loss— typically under 0.02 dB. Ideal for backbone networks and data centers, it features AI-powered splicing, fast operation (6–8 sec splice time), and a rugged, portable design. Compatible with multiple fiber types, it ensures consistent performance even in challenging environments.
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
//           onClick={() => window.open(media_Sumitomoz2c_pdf, "_blank")}
//         >
//           Download Catalog
//         </button>
//       </div>
//     </div>

//     {/* Right: image */}
//     <div className="hero-split__image-wrap">
//       <img
//         src={media_Z2C_webp} /* or use any of your images like productImage2 */
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>

//       {/* Banner */}
//       <div className='products1v-feature-section-f2'>
//         <div className='featurez2c-section-f2-a'>
//           <img className='feature-banner' src={eponoltf1} alt="Z2C Banner"/>
//         </div>

//       </div>

//       {/* ---------- SPECIFICATIONS ---------- */}
//       <div className="table-wrapper">
//         <table className="universal-table">
//           <thead>
//             <tr><th colSpan="3">Specification</th></tr>
//             <tr><th></th><th>Item</th><th>Z2C</th></tr>
//           </thead>
//           <tbody>
//             <tr className="section-header"><td rowSpan="5">Optical Fiber Requirement</td></tr>
//             <tr><td>Material</td><td>Silica glass</td></tr>
//             <tr><td>Fiber count / Profile types</td><td>SMF(G.652), MMF(G.651), DSF(G.653), NZDSF(G.655), BIF(G.657)</td></tr>
//             <tr><td>Fiber diameter</td><td>Cladding 80–125µm, Coating 100–1000µm</td></tr>
//             <tr><td>Cleave length</td><td>5 to 16 mm with coating clamp</td></tr>

//             <tr className="section-header"><td rowSpan="9">Standard Performance</td></tr>
//             <tr><td>Splicing Loss</td><td>SMF:0.02dB, MMF:0.01dB, DSF:0.04dB, NZDSF:0.04dB, BIF:0.02dB</td></tr>
//             <tr><td>Return loss</td><td>60dB or greater</td></tr>
//             <tr><td>Splice time</td><td>6s Quick, 8s Auto</td></tr>
//             <tr><td>Heating time</td><td>15s</td></tr>
//             <tr><td>Splice & Heat per charge</td><td>Approx 310 (BU-16)</td></tr>
//             <tr><td>Fiber view</td><td>2 CMOS, 350X (700X)</td></tr>
//             <tr><td>Proof test</td><td>1.96~2.09N</td></tr>
//             <tr><td>Protection Sleeve</td><td>60mm / 40mm / Nano</td></tr>

//             <tr className="section-header"><td rowSpan="3">Programs</td></tr>
//             <tr><td>Splice programs</td><td>Max 300 (40 preset)</td></tr>
//             <tr><td>Heating programs</td><td>Max 100 (23 preset)</td></tr>

//             <tr className="section-header"><td rowSpan="8">Functions</td></tr>
//             <tr><td>Splice storage</td><td>200 images, 10k data internal</td></tr>
//             <tr><td>Multi clamp</td><td>Supports 250µm, 900µm, 2/3mm, drop cable</td></tr>
//             <tr><td>Reversible coating clamps</td><td>Yes</td></tr>
//             <tr><td>Onboard training video</td><td>Provided</td></tr>
//             <tr><td>Auto fiber ID</td><td>SMF/MMF/Other</td></tr>
//             <tr><td>Arc calibration</td><td>Automatic</td></tr>
//             <tr><td>Display remaining cycles</td><td>Yes</td></tr>

//             <tr className="section-header"><td rowSpan="4">Size / Weight</td></tr>
//             <tr><td>Size</td><td>128x154x130mm</td></tr>
//             <tr><td>Weight</td><td>1.7kg (no batt), 2.1kg (with BU-16)</td></tr>
//             <tr><td>Monitor</td><td>5.0″ touchscreen LCD</td></tr>

//             <tr className="section-header"><td rowSpan="4">Terminals</td></tr>
//             <tr><td>DC output</td><td>DC 12V</td></tr>
//             <tr><td>USB</td><td>USB 2.0 mini-B</td></tr>
//             <tr><td>Storage media</td><td>SD/SDHC up to 32GB</td></tr>

//             <tr className="section-header"><td rowSpan="4">Power Supply</td></tr>
//             <tr><td>AC input</td><td>100–240V 50/60Hz (ADC-16)</td></tr>
//             <tr><td>DC input</td><td>10–15V</td></tr>
//             <tr><td>Battery</td><td>BU-16 10.8V, 6400mAh</td></tr>

//             <tr className="section-header"><td rowSpan="2">Operating Condition</td></tr>
//             <tr><td colSpan="2">0–6000m altitude, -10~+50°C, ≤95%RH</td></tr>

//             <tr className="section-header"><td rowSpan="2">Storage Condition</td></tr>
//             <tr><td colSpan="2">-40~+80°C, ≤95%RH</td></tr>

//             <tr className="section-header"><td rowSpan="2">Electrode Life</td></tr>
//             <tr><td colSpan="2">~6000 discharges</td></tr>

//             <tr className="section-header"><td rowSpan="2">Software Updates</td></tr>
//             <tr><td colSpan="2">Via Internet</td></tr>

//             <tr className="section-header"><td rowSpan="2">Data Management</td></tr>
//             <tr><td colSpan="2">PC software</td></tr>

//             <tr className="section-header"><td rowSpan="5">Test Details</td></tr>
//             <tr><td>Shock resistance</td><td>Drop from 76cm, 5 faces</td></tr>
//             <tr><td>Impact resistance</td><td>2J impact</td></tr>
//             <tr><td>Water resistance</td><td>IPx2</td></tr>
//             <tr><td>Dust resistance</td><td>IP5x</td></tr>
//           </tbody>
//         </table>
//       </div>

//       {/* ---------- ACCESSORIES ---------- */}
//       <div className="table-wrapper">
//         <table className="universal-table">
//           <thead>
//             <tr><th colSpan="4">Accessories</th></tr>
//             <tr><th></th><th>Part Name</th><th>Part No</th><th>Remarks</th></tr>
//           </thead>
//           <tbody>
//             <tr className="section-header"><td rowSpan="12">Accessories for Splicer</td></tr>
//             <tr><td rowSpan="7">Fiber Holder</td></tr>
//             <tr><td>FHS-025</td><td>For 0.25mm single fiber</td></tr>
//             <tr><td>FHS-09</td><td>For 0.9mm single fiber</td></tr>
//             <tr><td>FHS-025/LB5</td><td>Loose buffered 0.9mm fiber</td></tr>
//             <tr><td>FHD-1</td><td>Rectangular drop cable</td></tr>
//             <tr><td>1SM-ST</td><td>Indoor drop cable</td></tr>
//             <tr><td>FHC-3</td><td>3mm cable</td></tr>
//             <tr><td>Battery Pack</td><td>BU-16</td><td>Li-ion 6400mAh</td></tr>
//             <tr><td>Battery Charger</td><td>BC-16</td><td>-</td></tr>
//             <tr><td>Car Battery Cable</td><td>PCV-16</td><td>Vehicle 12V</td></tr>
//             <tr><td>Electrode</td><td>ER-10</td><td>-</td></tr>

//             <tr className="section-header"><td rowSpan="10">Accessories</td></tr>
//             <tr><td>Handheld Fiber Cleaver</td><td>FC-8R-FC / FC-8R-F</td><td>Auto blade rotation</td></tr>
//             <tr><td>Fiber Cleaver</td><td>FC-6S-C / FC-6RS-C</td><td>High precision/Auto-rotation</td></tr>
//             <tr><td>Jacket Remover</td><td>JR-M03</td><td>For single fiber</td></tr>
//             <tr><td>Loose Tube Cutter</td><td>LTC-01</td><td>-</td></tr>
//             <tr><td>Alcohol Dispenser</td><td>HR-3</td><td>-</td></tr>
//             <tr><td>Fiber Protection Sleeves</td><td>FPS-1, FPS-40, FPS-61-2.6</td><td>60/40/61mm</td></tr>
//           </tbody>
//         </table>
//       </div>

//       {/* ---------- BASIC ACCESSORIES ---------- */}
//       <div className="table-wrapper">
//         <table className="universal-table">
//           <thead>
//             <tr><th colSpan="3">Basic Accessories</th></tr>
//             <tr><th>Part Name</th><th>Part No</th><th>Qty</th></tr>
//           </thead>
//           <tbody>
//             <tr><td>AC adapter</td><td>ADC-16</td><td>1 pc</td></tr>
//             <tr><td>AC power cord</td><td>PC-AC</td><td>1 pc</td></tr>
//             <tr><td>Cooling tray</td><td>-</td><td>1 pc</td></tr>
//             <tr><td>Battery Pack</td><td>BU-16</td><td>1 pc</td></tr>
//             <tr><td>Spare Electrode</td><td>ER-10</td><td>1 pair</td></tr>
//             <tr><td>Quick Reference Guide</td><td>-</td><td>1 pc</td></tr>
//             <tr><td>Carrying Case</td><td>CC-82</td><td>1 pc</td></tr>
//             <tr><td>Hand Strap</td><td>-</td><td>1 pc</td></tr>
//             <tr><td>USB Cable</td><td>-</td><td>1 pc</td></tr>
//           </tbody>
//         </table>
//       </div>

//       {/* ---------- SIMILAR PRODUCTS (UNCHANGED) ---------- */}
//       <div className='similerproduct'>
//         <h3 style={{textAlign: "center"}}>Similar Product</h3>
//       </div>
//       <div className='product_s1v1_product'>
//         <div className='product_s1v1_product1'>
//           <img loading="lazy" className='product_s1v1_img' src={subs1vu} alt="S1V Ultra" />
//           <h3 className='products1v_name_option'>S1V Ultra</h3>
//           <Link to="/sumitomoproducttwo" style={{ textDecoration: "none" }}>
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//         <div className='product_s1v1_product2'>
//           <img loading="lazy" className='product_s1v1_img' src={media_82C__1Oct_2024_png} alt="82C+" />
//           <h3 className='products1v_name_option'>82C+</h3>
//           <Link to="/sumitomoproductfive" style={{ textDecoration: "none" }}>
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//         <div className='product_s1v1_product3'>
//           <img loading="lazy" className='product_s1v1_img' src={media_W1C_file_png} alt="W1C" />
//           <h3 className='products1v_name_option'>W1C</h3>
//           <Link to="/sumitomoproductfour" style={{ textDecoration: "none" }}>
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//         <div className='product_s1v1_product4'>
//           <img loading="lazy" className='product_s1v1_img' src={media_FC8r_png} alt="FC8R" />
//           <h3 className='productz2c_name_option'>FC8R</h3>
//           <Link to="/sumitomoproductseven" style={{ textDecoration: "none" }}>
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default Sumitomoproductthree;







import React, { useState, useEffect } from 'react';
import '../../../../pages/page.css';
import '../../../../components/index.css';
import { Link } from 'react-router-dom';

const Sumitomoproductthree = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(media_Z2C_jpg);
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
    document.title = 'Sumitomo Z2C Core Alignment Fusion Splicer';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix offers the Sumitomo Z2C Core Alignment Fusion Splicer. Achieve ultra-low splice loss (0.02dB) and high speed (6s) for backbone networks and data centers.';

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
  const mosaicBG = () => ({ backgroundColor: '#ffffff' });

  // ---- ACCORDION DATA ----
  const specAccordions = [
    {
      title: "Optical Fiber Requirement",
      items: [
        { label: "Material", value: "Silica glass" },
        { label: "Fiber count / Profile types", value: "SMF(G.652), MMF(G.651), DSF(G.653), NZDSF(G.655), BIF(G.657)" },
        { label: "Fiber diameter", value: "Cladding 80–125µm, Coating 100–1000µm" },
        { label: "Cleave length", value: "5 to 16 mm with coating clamp" },
      ],
    },
    {
      title: "Standard Performance",
      items: [
        { label: "Splicing Loss", value: "SMF:0.02dB, MMF:0.01dB, DSF:0.04dB, NZDSF:0.04dB, BIF:0.02dB" },
        { label: "Return loss", value: "60dB or greater" },
        { label: "Splice time", value: "6s Quick, 8s Auto" },
        { label: "Heating time", value: "15s" },
        { label: "Splice & Heat per charge", value: "Approx 300 (BU-16)" },
        { label: "Fiber view", value: "2 CMOS, 350X (700X)" },
        { label: "Proof test", value: "1.96~2.09N" },
        { label: "Protection Sleeve", value: "60mm / 40mm / Nano" },
      ],
    },
    {
      title: "Programs",
      items: [
        { label: "Splice programs", value: "Max 300 (40 preset)" },
        { label: "Heating programs", value: "Max 100 (23 preset)" },
      ],
    },
    {
      title: "Functions",
      items: [
        { label: "Splice storage", value: "200 images/10k data (internal) 50200/20k(with 16GB)" },
        { label: "Multi clamp", value: "Supports 250µm, 900µm, 2/3mm, drop cable" },
        { label: "Reversible coating clamps", value: "Yes" },
        { label: "Onboard training video", value: "Provided" },
        { label: "Auto fiber ID", value: "SMF/MMF/Other" },
        { label: "Arc calibration", value: "Automatic" },
        { label: "Display remaining cycles", value: "Yes" },
      ],
    },
    {
      title: "Size / Weight",
      items: [
        { label: "Size", value: "128x154x130mm" },
        { label: "Weight", value: "1.7kg (no batt), 2.1kg (with BU-16)" },
        { label: "Monitor", value: "5.0″ touchscreen LCD" },
      ],
    },
    {
      title: "Terminals",
      items: [
        { label: "DC output", value: "DC 12V" },
        { label: "USB", value: "USB 2.0 mini-B" },
        { label: "Storage media", value: "SD/SDHC up to 32GB" },
      ],
    },
    {
      title: "Power Supply",
      items: [
        { label: "AC input", value: "100–240V 50/60Hz (ADC-16)" },
        { label: "DC input", value: "10–15V" },
        { label: "Battery", value: "BU-16 10.8V, 6400mAh" },
      ],
    },
    { title: "Operating Condition", note: "0–6000m altitude, -10~+50°C, ≤95%RH" },
    { title: "Storage Condition", note: "-40~+80°C, ≤95%RH" },
    { title: "Electrode Life", note: "~6000 discharges" },
    { title: "Software Updates", note: "Via Internet" },
    { title: "Data Management", note: "PC software" },
    {
      title: "Test Details",
      items: [
        { label: "Shock resistance", value: "Drop from 76cm, 5 faces" },
        { label: "Impact resistance", value: "2J impact" },
        { label: "Water resistance", value: "IPx2" },
        { label: "Dust resistance", value: "IP5x" },
      ],
    },
  ];

  const accessoriesData = {
    forSplicer: [
      // Fiber Holder family
      { name: "Fiber Holder", part: "FHS-025", remarks: "For 0.25mm single fiber" },
      { name: "Fiber Holder", part: "FHS-09", remarks: "For 0.9mm single fiber" },
      { name: "Fiber Holder", part: "FHS-025/LB5", remarks: "Loose buffered 0.9mm fiber" },
      { name: "Fiber Holder", part: "FHD-1", remarks: "Rectangular drop cable" },
      { name: "Fiber Holder", part: "1SM-ST", remarks: "Indoor drop cable" },
      { name: "Fiber Holder", part: "FHC-3", remarks: "3mm cable" },

      // Power/consumables
      { name: "Battery Pack", part: "BU-16", remarks: "Li-ion 6400mAh" },
      { name: "Battery Charger", part: "BC-16", remarks: "-" },
      { name: "Car Battery Cable", part: "PCV-16", remarks: "Vehicle 12V" },
      { name: "Electrode", part: "ER-10", remarks: "-" },
    ],

    accessories: [
      { name: "Handheld Fiber Cleaver", part: "FC-8R-FC / FC-8R-F", remarks: "Auto blade rotation" },
      { name: "Fiber Cleaver", part: "FC-6S-C / FC-6RS-C", remarks: "High precision / Auto-rotation" },
      { name: "Jacket Remover", part: "JR-M03", remarks: "For single fiber" },
      { name: "Loose Tube Cutter", part: "LTC-01", remarks: "-" },
      { name: "Alcohol Dispenser", part: "HR-3", remarks: "-" },
    ],

    // Split sleeves into their own panel for your existing UI
    fiberSleeves: [
      { name: "FPS-1", part: "", remarks: "60mm" },
      { name: "FPS-40", part: "", remarks: "40mm" },
      { name: "FPS-61-2.6", part: "", remarks: "61mm" },
    ],

    basic: [
      { name: "AC adapter", part: "ADC-16", qty: "1 pc" },
      { name: "AC power cord", part: "PC-AC", qty: "1 pc" },
      { name: "Cooling tray", part: "-", qty: "1 pc" },
      { name: "Battery Pack", part: "BU-16", qty: "1 pc" },
      { name: "Spare Electrode", part: "ER-10", qty: "1 pair" },
      { name: "Quick Reference Guide", part: "-", qty: "1 pc" },
      { name: "Carrying Case", part: "CC-82", qty: "1 pc" },
      { name: "Hand Strap", part: "-", qty: "1 pc" },
      { name: "USB Cable", part: "-", qty: "1 pc" },
    ],
  };

  return (
    <div className="s1v-page">
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/sumitomo" style={{ color: "#333", textDecoration: "none" }}>Products</Link>

          <span className="sep">/</span>
          <span className="current">SUMITOMO Z2C</span>
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
              <h1 className="hero-title">SUMITOMO Z2C</h1>
              <p className="hero-desc">
                Our Core Fusion Splicer offers high-precision core alignment using advanced imaging for ultra-low splice loss— typically under 0.02 dB. Ideal for backbone networks and data centers, it features AI-powered splicing, fast operation (6–8 sec splice time), and a rugged, portable design. Compatible with multiple fiber types, it ensures consistent performance even in challenging environments.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(media_Sumitomoz2c_pdf, "_blank")}>
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
              <h3 className="panel-title">Why Z2C stands out</h3>
              <p className="panel-sub">
                Designed for technicians who demand speed, accuracy, and durability, the S1V combines smart
                automation with a rugged, portable form factor.
              </p>
              <ul className="feature-list">
                <li>Compact, Smart & Tough.</li>
                <li>Universal Clamp fiber Holder.</li>
                <li>5.0 inch Capacitive Touch Screen.</li>

                <li>Electrode Life: 6,000 Arc Discharges.</li>
                <li>Long Life Battery for Approx 310 Splice & Heat Cycle.</li>
                <li>Handheld Fusion Splicer.</li>
                <li>Improved Enviromental Durability includes Shock, Water & Dust Resistance and Wind Proof Features.</li>
                <li>Suitable for Drop and Indoor Cable Splicer.</li>


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
                        <td>SMF, MMF, DSF, NZDSF, BIF</td>
                      </tr>
                      <tr>
                        <th>Splicing Loss (typ.)</th>
                        <td>As low as 0.01 dB</td>
                      </tr>
                      <tr>
                        <th>Proof test</th>
                        <td>1.96 ~ 2.09 N</td>
                      </tr>
                      <tr>
                        <th>Environmental</th>
                        <td>Shock, water &amp; dust resistant</td>
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

        <div className="s-grid">
          <div className="s-card">
            <span className="s-brand">SUMITOMO</span>
            <div className="s-media"><img src={media_Backup_of_Z2C_2june_png} loading="lazy" alt="Z2C" /></div>
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
            <div className="s-media"><img src={media_82C__1Oct_2024_png} loading="lazy" alt="82C+" /></div>
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
            <div className="s-media"><img src={media_W1C_file_png} loading="lazy" alt="W1C" /></div>
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
            <div className="s-media"><img src={media_FC8r_png} loading="lazy" alt="FC8R" /></div>
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
            <img loading="lazy" className="lb__img" src={lightboxSrc} alt="Zoomed product" />
          </div>
        </div>
      )}

      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="SUMITOMO Z2C"
      /></div>
  );
};

export default Sumitomoproductthree;