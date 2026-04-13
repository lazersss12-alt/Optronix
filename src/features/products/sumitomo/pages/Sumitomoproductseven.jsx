import { mediaUrl } from '../../../../config/media';
// import React, { useState } from 'react';
// import '../../../../pages/page.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("FC8r.png") from "../../../../assets/images/FC8r.png";
// import s1vpdf from "../../../../assets/images/FC6s Cleaver.pdf";
// import ProductBg from "../../../../assets/images/headerbackground.png";
// import productImage4 from "../../../../assets/images/FC8R4.png";
// import productImage2 from "../../../../assets/images/SFCS2.png";
// import productImage3 from "../../../../assets/images/SFCS3.png";
// import eponoltf1 from "../../../../assets/images/fc8rb.png";
// import mediaUrl.image("Backup_of_Z2C 2june.png") from "../../../../assets/images/Backup_of_Z2C 2june.png";
// import mediaUrl.image("W1C file.png") from "../../../../assets/images/W1C file.png";
// import mediaUrl.image("82C+ 1Oct 2024.png") from "../../../../assets/images/82C+ 1Oct 2024.png";
// import subfc6s from "../../../../assets/images/FC-6S.png";

// const sections = [
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>FC-8R: </span>
//         Handheld Cleaver for Single & Ribbon Fiber
//       </>
//     ),
//     img: mediaUrl.image("FC8r.png")






//   },
//   {

//     subtitle: (
//       <>
//          <span className="highlight" style={{color:"#3c5a9f"}}>Auto Rotating Blade</span><br></br>
//         for Perfect Precision
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
//         <h6>Consistent Cleaving Quality for Over 60,000 Fibers.</h6>

//       </>
//     ),
//     img: productImage3,
//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>Ultra-Light & One-Hand</span>   Ready

//         <br></br>
//         <br></br>
//         <h6>Carry Precision Anywhere!</h6>
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

// const Sumitomoproductseven = () => {
//   const [productImage, setProductImage] = useState(mediaUrl.image("FC8r.png"));
//   const [enquireOpen, setEnquireOpen] = useState(false);
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleIconClick = (image, icon) => {
//     setProductImage(image);
//     setActiveIcon(icon);
//   };       

//   return (

//       <div>
//        <div className="extreme-zoom-container center-col">
// <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">SUMITOMO FC-8R</h1>
//       <p className="hero-split__desc">
//         Discover the Sumitomo FC-8R Fusion Splicer – a high-precision, compact powerhouse crafted by
//         Sumitomo Electric Industries. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the FC-8R ensures efficient, flawless splicing in any environment.
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
//         src={mediaUrl.image("FC8r.png")} /* or use any of your images like productImage2 */
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
//            <th colSpan="7">Specification</th>
//           </tr>
//           <tr>
//             <th colSpan={2}> Part Number</th>
//             <th colSpan={2}>FC-8R-F</th>
//             <th colSpan={2}>FC-8R-FC</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr className="section-header">
//             <td rowSpan="4">Applicable Fiber</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Material</td>
//             <td colSpan={4}>Silica glass</td>
//           </tr>
//           <tr className='table-row-odd'>
//             <td> Cladding Diameter</td>
//             <td colSpan={4}>Φ 125 um</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Fiber Count</td>
//             <td> Single to 12</td>
//             <td>Single</td>
//             <td> Single to 12</td>
//             <td>Single fiber adapter (AP-FC7)
//             </td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Cleave Length</td>
//           </tr>

//           <tr className='table-row-even'>
//           <td>10mm</td>
//             <td>6~20mm (Φ 0.25) <br /> 10~20mm (Φ 0.9)</td>
//             <td>10mm</td>
//             <td>6~20mm (Φ 0.25) <br /> 10~20mm (Φ 0.9)</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}> Fiber Placing</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Fiber Holder</td>
//             <td>Single Fiber adapter (AP-FC7)</td>
//             <td>Fiber Holder</td>
//             <td>Single Fiber adapter (AP-FC7)</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}> Cleaver angle (Typ.)</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td colSpan={4}>0.5 degrees with single fiber</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}> Off-cut Collector / Fiber bin</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td colSpan={4}>Pre-fiited / TR-FC8R</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Automatic blade rotation</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td colSpan={4}>Provided (Switchable to Fixed)</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Cleave operation counter</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td colSpan={2}>N/A</td>
//             <td colSpan={2}>Provided  <br /> DC power supply : Coin type Lithium battery CR1220</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Lid opening angle</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td colSpan={4}>Switchable (Wide / Narrow )</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Dimensions and Weight</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td colSpan={4}> 58(W)x98(D)x47(H) mm, Approx 260 g</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Field replaceable blade</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td colSpan={4}>Yes, use FCP-20BL(7R)</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Operating condition</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td colSpan={4}>-10~50 degree C and 0~95% RH (non-condensing)</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Storage condition</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td colSpan={4}>-40~80 degree C and 0~95% RH (non-condensing)</td>
//           </tr>

//           <tr className='section-header'>
//             <td colSpan={2} rowSpan={2}>Blade life *1</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td colSpan={4}>60,000 fibers (2,500 fibers x 24 positions)</td>
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
//                       <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("Backup_of_Z2C 2june.png")} alt="Z2C" />
//                       <h3 className='products1v_name_option'>Z2C</h3>
//                       <Link to="/sumitomoproductthree" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product2'>
//                       <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("82C+ 1Oct 2024.png")} alt="82C+" />
//                       <h3 className='products1v_name_option'>82C+</h3>
//                       <Link to="/sumitomoproductfive" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product3'>
//                       <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("W1C file.png")} alt="W1C" />
//                       <h3 className='products1v_name_option'>W1C</h3>
//                       <Link to="/sumitomoproductfour" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product4'>
//                       <img loading="lazy" className='product_s1v1_img' src={subfc6s} alt="FC-6S" />
//                       <h3 className='productz2c_name_option'>FC-6 Series</h3>
//                       <Link to="/sumitomoproducteleven" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                   </div>
//     </div>
//   </div>
//   );
// };

// export default Sumitomoproductseven;




import React, { useState, useEffect } from 'react';
import '../../../../pages/page.css';
import '../../../../components/index.css';
import { Link } from 'react-router-dom';

import ProductLeadModal from '../../../../components/common/ProductLeadModal';

const Sumitomoproductseven = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("FC8r.png"));
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
    document.title = 'Sumitomo FC-8R Handheld Fiber Cleaver';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Buy the Sumitomo FC-8R Handheld Cleaver from Optronix. Features 1-step cleaving, automatic blade rotation, 1-12 fiber ribbon capacity, and a 60,000-fiber blade life.';

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
      document.title = 'Sumitomo FC-8R Handheld Fiber Cleaver';
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
    const imgs = [mediaUrl.image("Backup_of_Z2C 2june.png"), mediaUrl.image("82C+ 1Oct 2024.png"), mediaUrl.image("W1C file.png"), mediaUrl.image("FC8r.png")];
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
      { name: "Main body", part: "FC-8R-*", remarks: "Model: FC-8R-F or FC-8R-FC" },
      { name: "Single fibre adapter", part: "AP-FC8R", remarks: "1 pc (with 1 screw) — standard" },
      { name: "Single fibre adapter (alt)", part: "AP-FC7", remarks: "Optional — with 1 screw / spacer block" },
      { name: "Desktop spacer block", part: "DTS-01", remarks: "1 pc" },
      { name: "Carrying case", part: "CC-8RH / CC-8RSH", remarks: "Case included depending on variant" },
      { name: "Operation manual", part: "-", remarks: "1 set" },
      { name: "Cleaning brush", part: "-", remarks: "1 pc" },
      { name: "Hexagonal wrench", part: "-", remarks: "1 pc" },
      { name: "Strap", part: "-", remarks: "1 pc" }
    ],

    optionalConsumables: [
      { name: "Single fibre adapter", part: "AP-FC7", note: "With 1 screw" },
      { name: "Single fibre adapter", part: "AP-FC8R", note: "With 1 desktop spacer block & 1 screw" },
      { name: "Fibre offcut bin", part: "TR-FC8R", note: "10 pcs per set" },
      { name: "Coin type lithium battery", part: "CR1220", note: "For FC-8R-FC cleave counter (commercial item)" },
      { name: "Replacement blade", part: "FCP-20BL(7R)", note: "Common for FC-6R/7R series" }
    ],

    fibreHolders: [
      { part: "FHS-025", fibre: "Single 250 µm", cleave: "10 mm" },
      { part: "FHS-09", fibre: "Single 900 µm", cleave: "10 mm" },
      { part: "FHS-025/LB5", fibre: "Single 900 µm loose buffered fibre", cleave: "10 mm" },
      { part: "FHD-1", fibre: "Single 250 µm, Drop/Indoor cable", cleave: "10 mm" },
      { part: "FHC-3", fibre: "3 mm cable", cleave: "10 mm" },
      // ribbon holders...
      { part: "FHM-2", fibre: "2-fibre ribbon", cleave: "10 mm" },
      { part: "FHM-4", fibre: "4-fibre ribbon", cleave: "10 mm" },
      { part: "FHM-6", fibre: "6-fibre ribbon", cleave: "10 mm" },
      { part: "FHM-8", fibre: "8-fibre ribbon", cleave: "10 mm" },
      { part: "FHM-10", fibre: "10-fibre ribbon", cleave: "10 mm" },
      { part: "FHM-12", fibre: "12-fibre ribbon", cleave: "10 mm" }
    ]
  };


  return (
    <div className="s1v-page">
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/sumitomo" style={{ color: "#333", textDecoration: "none" }}>Products</Link>

          <span className="sep">/</span>
          <span className="current">FC‑8R</span>
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
              <h1 className="hero-title">SUMITOMO FC‑8R</h1>
              <p className="hero-desc">
                Sumitomo FC‑8R is a handheld fiber cleaver for single and ribbon fibers (up to 12),
                featuring an auto‑rotating 12-step blade and compact, one‑hand operation. It delivers
                stable, low-angle cleaves and long life for demanding field work.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("FC8R.pdf"), "_blank")}>
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
              <h3 className="panel-title">Why FC‑8R stands out</h3>
              <p className="panel-sub">
                Built for fast, consistent fiber prep with one‑hand usability and long blade life.
              </p>
              <ul className="feature-list">
                <li>Handheld cleaver for single and ribbon fibers (1–12).</li>
                <li>Auto‑rotating, 12‑step blade for consistent cleaves.</li>
                <li>Typical cleave angle 0.5° (single fiber).</li>
                <li>Pre‑fitted off‑cut collector (TR‑FC8R).</li>
                <li>Switchable lid opening (Wide/Narrow).</li>
                <li>Field‑replaceable blade (FCP‑20BL(7R)).</li>
                <li>Compact and lightweight (≈ 260 g).</li>
                <li>Optional cleave counter on FC‑8R‑FC (CR1220).</li>
                <li>Stable cleaving mechanism for reduced fiber waste.</li>
                <li>Precision fiber alignment for repeatable high-quality cleaves
                  .</li>
                <li>Low-maintenance design with easy cleaning access
                  .</li>


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
                        <td>0.5° with single fiber</td>
                      </tr>
                      <tr>
                        <th>Cleave length</th>
                        <td>
                          6–20 mm (Φ0.25 mm), 10–20 mm (Φ0.9 mm)
                        </td>
                      </tr>
                      <tr>
                        <th>Blade rotation</th>
                        <td>Automatic (switchable to fixed)</td>
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
            <div className="s-media"><img src={mediaUrl.image("Backup_of_Z2C 2june.png")} loading="lazy" alt="Z2C" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("82C+ 1Oct 2024.png")} loading="lazy" alt="82C+" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("W1C file.png")} loading="lazy" alt="W1C" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("FC8r.png")} loading="lazy" alt="FC8R" /></div>
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
        pageName="SUMITOMO FC‑8R"
      /></div>
  );
};

export default Sumitomoproductseven;