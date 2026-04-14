import { mediaUrl } from '../../../../config/media';
// import React, { useState } from 'react';
// import '../../../../pages/page.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("s-70.png") from "../../../../assets/images/S-70.png";
// import s1vpdf from "../../../../assets/images/cleaver.pdf";
// import ProductBg from "../../../../assets/images/headerbackground.png";
// import productImage4 from "../../../../assets/images/s70.png";
// import productImage2 from "../../../../assets/images/SFCS2.png";
// import productImage3 from "../../../../assets/images/SFCS3.png";
// import eponoltf1 from "../../../../assets/images/s70b.png";
// import mediaUrl.image("backup_of_z2c 2june.png") from "../../../../assets/images/Backup_of_Z2C 2june.png";
// import mediaUrl.image("w1c file.png") from "../../../../assets/images/W1C file.png";
// import mediaUrl.image("82c+ 1oct 2024.png") from "../../../../assets/images/82C+ 1Oct 2024.png";
// import mediaUrl.image("fc8r.png") from "../../../../assets/images/FC8r.png";
import ProductLeadModal from '../../../../components/common/ProductLeadModal';


// const sections = [
//   {

//     subtitle: (
//       <div style={{lineHeight: "1.5"}}>

//         <span className="highlight" style={{color:"#3c5a9f"}}> Sumitomo S-70:</span><br></br>Handheld Power.
//     Professional Cleaving.
//       </div>
//     ),
//     img: mediaUrl.image("s-70.png")






//   },
//   {

//     subtitle: (
//      <div style={{lineHeight: "1.5"}}>
//   <span className="highlight" style={{color:"#3c5a9f"}}>Auto Rotating Blade</span><br /> for Perfect Precision.
// </div>
//     ),
//     img: productImage2,

//   },
//   {

//     subtitle: (
//       <>
//         Built to <span className="highlight" style={{color:"#3c5a9f"}}>Last</span>
//         <br></br>
//         <br></br>
//         <h6>Consistent Cleaving Quality for Over 60,000 Fibers.</h6>

//       </>
//     ),
//     img: productImage3,
//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>Carry Light, Work Fast-</span>

//         <br></br>
//         <br></br>
//         <h6>One-Hand Use with Protective Box Cover.</h6>
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

//               onClick={() => window.open(s1vpdf, "_blank")}  
//             >
//               Download Catalog
//             </button>
//           </>
//         )

//   }
// ];
// const Sumitomoproducteight = () => {
//   const [productImage, setProductImage] = useState(mediaUrl.image("s-70.png"));
//   const [enquireOpen, setEnquireOpen] = useState(false);
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleIconClick = (image, icon) => {
//     setProductImage(image);
//     setActiveIcon(icon);
//   };       

//   return (
//     <div>
//        <div className="extreme-zoom-container center-col">
//   <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">SUMITOMO S-70</h1>
//       <p className="hero-split__desc">
//         Discover the Sumitomo S-70 Fusion Splicer – a high-precision, compact powerhouse crafted by
//         Sumitomo Electric Industries. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the S-70 ensures efficient, flawless splicing in any environment.
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
//         src={mediaUrl.image("s-70.png")} /* or use any of your images like productImage2 */
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>




//       <div className='products1v-feature-section-f2'>

//       <div className='featurez2c-section-f2-a'>
//       <img loading="lazy" style={{width: "100%"}} src={eponoltf1} alt="EPON OLT FEATURE" />

//       </div>


//         </div>


//         <div className='table-wrapper'>
//       <div className="table-container">
//       <table className="universal-table">
//         <thead>
//           <tr>
//            <th colSpan="3">Specification</th>
//           </tr>
//           <tr>
//             <th colSpan={2}> Item</th>
//             <th>S-70</th>

//           </tr>
//         </thead>
//         <tbody>
//           <tr className="section-header">
//             <td rowSpan="4">Applicable Fiber</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Material</td>
//             <td >Silica glass</td>
//           </tr>
//           <tr className='table-row-odd'>
//             <td> Cladding Diameter</td>
//             <td >Φ 125 um</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Fiber Count</td>
//             <td> Single</td>

//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Cleave Length </td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>6~20mm (Φ 0.25) <br /> 10~20mm (Φ 0.9)</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Cleave angle (Typ.)</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Signle fiber adapter AP-FC7(A)</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Off-cut collector / fiber bin</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>6~20mm (Φ 0.25) <br /> 10~20mm (Φ 0.9)</td>
//           </tr>


//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Automatic blade rotation</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Provided</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Lid opening angle</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Switchable (Wide/Narrow)</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}>Size </td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>58(W)x98(D)x49(H) mm</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Weight</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Approx 260 g</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Field replaceable blade</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Yes, use FCP-20BL(7R)</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Operating condition</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>-10~50 degree C and 0~95% RH (non-condensing)</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Storage condition</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>-40~80 degree C and 0~95% RH (non-condensing)</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Blade life</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>60,000 fibers (2,500 fibers x 24 positions)</td>
//           </tr>







//         </tbody>
//       </table>



//     </div>




//       </div>  




//       <div className='similerproduct'>
//         <h3 style={{textAlign: "center"}}>Similar Product</h3>
//       </div>

//       <div className='product_s1v1_product'>
//                     <div className='product_s1v1_product1'>
//                       <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("backup_of_z2c 2june.png")} alt="Z2C" />
//                       <h3 className='products1v_name_option'>Z2C</h3>
//                       <Link to="/sumitomoproductthree" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product2'>
//                       <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("82c+ 1oct 2024.png")} alt="82C+" />
//                       <h3 className='products1v_name_option'>82C+</h3>
//                       <Link to="/sumitomoproductfive" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product3'>
//                       <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("w1c file.png")} alt="W1C" />
//                       <h3 className='products1v_name_option'>W1C</h3>
//                       <Link to="/sumitomoproductfour" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product4'>
//                       <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("fc8r.png")} alt="FC8R" />
//                       <h3 className='productz2c_name_option'>FC8R</h3>
//                       <Link to="/sumitomoproductseven" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                   </div>
//     </div>
//   </div>
//   );
// };

// export default Sumitomoproducteight;



import React, { useState, useEffect } from 'react';
import '../../../../pages/page.css';
import '../../../../components/index.css';
import { Link } from 'react-router-dom';

const Sumitomoproducteight = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("s-70.png"));
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
    document.title = 'Sumitomo S-70 Handheld Fiber Cleaver';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix provides the Sumitomo S-70 Handheld Fiber Cleaver. It features a 60,000-fiber life blade, auto-rotation, and 0.5° cleave angle for optimal, high-precision fiber preparation.';

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
      document.title = 'Sumitomo S-70 Handheld Fiber Cleaver';
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
    const imgs = [mediaUrl.image("backup_of_z2c 2june.png"), mediaUrl.image("82c+ 1oct 2024.png"), mediaUrl.image("w1c file.png"), mediaUrl.image("fc8r.png")];
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
          <span className="current">S-70</span>
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
              <h1 className="hero-title">SUMITOMO S-70</h1>
              <p className="hero-desc">
                Sumitomo S-70 is a handheld single-fiber cleaver with auto blade rotation and
                compact, one-hand operation. It delivers consistent, low-angle cleaves and long
                service life for demanding field work.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("s-70.pdf"), "_blank")}>
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
              <h3 className="panel-title">Why S-70 stands out</h3>
              <p className="panel-sub">
                Built for fast, consistent fiber prep with one‑hand usability and long blade life.
              </p>
              <ul className="feature-list">
                <li>Handheld single-fiber cleaver.</li>
                <li>Auto-rotating blade for consistent cleaves.</li>
                <li>Typical cleave angle 0.5° (single fiber).</li>
                <li>Switchable lid opening (Wide/Narrow).</li>
                <li>Field-replaceable blade (FCP-20BL(7R)).</li>
                <li>Compact and lightweight (≈ 260 g).</li>
                <li>Stable cleaving mechanism for reduced fiber waste.</li>
                <li>Precision fiber alignment for repeatable high-quality cleaves.</li>
                <li>Low-maintenance design with easy cleaning access.</li>
                <li>Designed for fast FTTH and backbone field operations.</li>
                <li>Rugged construction suitable for outdoor environments.</li>
                <li>Smooth operation with minimal hand-force required.</li>


              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr>
                        <th>Cleave angle (typ.)</th>
                        <td>0.5° (single fiber)</td>
                      </tr>
                      <tr>
                        <th>Blade life</th>
                        <td>60,000 fibers (2,500 × 24)</td>
                      </tr>
                      <tr>
                        <th>Cleave length</th>
                        <td>6–20 mm (Φ0.25), 10–20 mm (Φ0.9)</td>
                      </tr>
                      <tr>
                        <th>Weight</th>
                        <td>Approx. 260 g</td>
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
              <details className="acc" open>
                <summary className="acc-sum">
                  <span className="acc-title">Specifications</span>
                </summary>
                <div className="acc-content">
                  <div className="acc-table three">
                    <div className="acc-row acc-head"><span>Feature</span><span>FC‑8R‑F</span><span>FC‑8R‑FC</span></div>

                    <div className="acc-row"><span>Material</span><span>Silica glass</span><span>Silica glass</span></div>
                    <div className="acc-row"><span>Cladding diameter</span><span>Φ125 µm</span><span>Φ125 µm</span></div>
                    <div className="acc-row"><span>Fiber count</span><span>Single to 12</span><span>Single to 12</span></div>
                    <div className="acc-row">
                      <span>Cleave length</span>
                      <span>10 mm; 6–20 mm (Φ0.25); 10–20 mm (Φ0.9)</span>
                      <span>10 mm; 6–20 mm (Φ0.25); 10–20 mm (Φ0.9)</span>
                    </div>
                    <div className="acc-row">
                      <span>Fiber placing</span>
                      <span>Fiber holder; Single fiber adapter (AP‑FC7)</span>
                      <span>Fiber holder; Single fiber adapter (AP‑FC7)</span>
                    </div>
                    <div className="acc-row"><span>Cleave angle (typ.)</span><span>0.5° (single fiber)</span><span>0.5° (single fiber)</span></div>
                    <div className="acc-row"><span>Off‑cut collector / fiber bin</span><span>Pre‑fitted / TR‑FC8R</span><span>Pre‑fitted / TR‑FC8R</span></div>
                    <div className="acc-row"><span>Automatic blade rotation</span><span>Provided (switchable to fixed)</span><span>Provided (switchable to fixed)</span></div>
                    <div className="acc-row"><span>Cleave operation counter</span><span>N/A</span><span>Provided (CR1220 coin battery)</span></div>
                    <div className="acc-row"><span>Lid opening angle</span><span>Switchable (Wide/Narrow)</span><span>Switchable (Wide/Narrow)</span></div>
                    <div className="acc-row"><span>Dimensions & weight</span><span>58(W)×98(D)×47(H) mm; ≈260 g</span><span>58(W)×98(D)×47(H) mm; ≈260 g</span></div>
                    <div className="acc-row"><span>Field replaceable blade</span><span>Yes, FCP‑20BL(7R)</span><span>Yes, FCP‑20BL(7R)</span></div>
                    <div className="acc-row"><span>Operating condition</span><span>-10~50°C; 0–95% RH (non‑cond.)</span><span>-10~50°C; 0–95% RH (non‑cond.)</span></div>
                    <div className="acc-row"><span>Storage condition</span><span>-40~80°C; 0–95% RH (non‑cond.)</span><span>-40~80°C; 0–95% RH (non‑cond.)</span></div>
                    <div className="acc-row"><span>Blade life</span><span>60,000 fibers (2,500 × 24)</span><span>60,000 fibers (2,500 × 24)</span></div>
                  </div>

                  <p className="acc-note">
                    Notes: Single fiber adapter AP‑FC7, fiber bin TR‑FC8R. Blade life depends on fiber and handling.
                  </p>
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
            <div className="s-media"><img src={mediaUrl.image("backup_of_z2c 2june.png")} loading="lazy" alt="Z2C" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("82c+ 1oct 2024.png")} loading="lazy" alt="82C+" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("w1c file.png")} loading="lazy" alt="W1C" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("fc8r.png")} loading="lazy" alt="FC8R" /></div>
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
        pageName="SUMITOMO S-70"
      /></div>
  );
};

export default Sumitomoproducteight;