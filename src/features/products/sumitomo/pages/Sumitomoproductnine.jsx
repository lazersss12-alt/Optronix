import { mediaUrl } from '../../../../config/media';
// import React, { useState } from 'react';
// import '../../../../pages/page.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("FC7LS.png") from "../../../../assets/images/FC7LS1.png";
// import s1vpdf from "../../../../assets/images/F7LS.pdf";
// import ProductBg from "../../../../assets/images/headerbackground.png";
// import productImage4 from "../../../../assets/images/FC7LS4.png";
// import productImage2 from "../../../../assets/images/SFCS2.png";
// import productImage3 from "../../../../assets/images/FC7LS3.png";
// import eponoltf1 from "../../../../assets/images/fc7lsb.png";
// import mediaUrl.image("Backup_of_Z2C 2june.png") from "../../../../assets/images/Backup_of_Z2C 2june.png";
// import mediaUrl.image("W1C file.png") from "../../../../assets/images/W1C file.png";
// import mediaUrl.image("82C+ 1Oct 2024.png") from "../../../../assets/images/82C+ 1Oct 2024.png";
// import mediaUrl.image("FC8r.png") from "../../../../assets/images/FC8r.png";
import ProductLeadModal from '../../../../components/common/ProductLeadModal';


// const sections = [
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>FC-7LS-</span>
//         Precision Cleaving in the Palm of Your Hand.
//       </>
//     ),
//     img: mediaUrl.image("FC7LS.png")






//   },
//   {

//     subtitle: (
//       <>
//          <span className="highlight" style={{color:"#3c5a9f"}}>Auto Rotating Blade</span><br></br>
//         for Perfect Precision



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
//         <h6>Consistent Cleaving Quality for Over 48,000 Fibers.</h6>

//       </>
//     ),
//     img: productImage3,
//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#3c5a9f"}}>Ultra-Light & One-Hand</span> Ready

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
// const Sumitomoproductnine = () => {
//   const [productImage, setProductImage] = useState(mediaUrl.image("FC7LS.png"));
  const [enquireOpen, setEnquireOpen] = useState(false);
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleIconClick = (image, icon) => {
//     setProductImage(image);
//     setActiveIcon(icon);
//   };       

//   return (

//        <div>
//       <div className="extreme-zoom-container center-col">
// <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">SUMITOMO FC-7LS</h1>
//       <p className="hero-split__desc">
//         Discover the Sumitomo FC-7LS Fusion Splicer – a high-precision, compact powerhouse crafted by
//         Sumitomo Electric Industries. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the FC-7LS ensures efficient, flawless splicing in any environment.
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
//         src={mediaUrl.image("FC7LS.png")} /* or use any of your images like productImage2 */
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
//            <th colSpan="3">Standard package</th>
//           </tr>
//           <tr>
//           <th> Part Name</th>
//             <th>Part No.</th>
//             <th>Note</th>

//           </tr>
//         </thead>
//         <tbody>
//             <tr className='table-row-even'>
//                 <td className='section-header'>Main Body</td>
//                 <td>FC-7LS</td>
//                 <td>1pc</td>
//             </tr>

//             <tr className='table-row-odd'>
//                 <td className='section-header'>Carrying case</td>
//                 <td>CC-FC7LS</td>
//                 <td>1pc</td>
//             </tr>
//         </tbody>
//       </table>



//     </div>

//     <div className="table-container-two">
//     <table className="universal-table">
//         <thead>
//           <tr>
//            <th colSpan="3">Specification</th>
//           </tr>
//           <tr>
//             <th colSpan={2}> Item</th>
//             <th>FC-7LS</th>

//           </tr>
//         </thead>
//         <tbody>
//           <tr className="section-header">
//             <td rowSpan="6">Applicable Fiber</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Material</td>
//             <td >Silica glass</td>
//           </tr>
//           <tr className='table-row-odd'>
//             <td> Cladding Diameter</td>
//             <td >Φ 125 μm</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Coating diameter</td>
//             <td> Φ 0.2, 0.25, 0.9mm buffered fiber, 2 & 3mm jacketed cord </td>

//           </tr>

//           <tr className='table-row-odd'>
//             <td>Cable Type</td>
//             <td>Rectangular drop cable (2x3mm), 3.5mm round drop cable</td>
//           </tr>

//           <tr className='table-row-even'>
//           <td>Fiber Count</td>
//           <td> Single</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Cleave Length</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>10-20mm</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Fibre Placing</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Single fibre adapter  AP-FC7LS</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Cleave angle (Typ.)</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Avg. 0.3 to 0.9 degrees</td>
//           </tr>


//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Off-cut Collector / Fiber offcut bin</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Pre-fitted, TR-FC7LS</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Dimensions and weight</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>51(W)x106(D)x83(H) mm, Approx 124 g</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}>Placeable blade</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>FCP-20BL</td>
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
//             <td>-40~80<sup style={{fontSize:"8px"}}>o</sup>C and 0~95% RH (non-condensing)</td>
//           </tr>

//           <tr className="section-header">
//             <td colSpan={2} rowSpan={2}> Blade life <sup>*3</sup></td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>48,000 fibers (2,000 fibers x 24 positions)</td>
//           </tr>







//         </tbody>
//       </table>

//     </div>

//     <div className="table-container-three">
//       <table className="universal-table">
//         <thead>
//           <tr>
//            <th colSpan="3">Optional accessories / Consumables</th>
//           </tr>
//           <tr>
//             <th> Part Name</th>
//             <th>Part No.</th>
//             <th>Note</th>

//           </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td className='section-header'>Single Fiber adapter</td>
//                 <td>AP-FC7LS</td>
//                 <td>-</td>
//             </tr>

//             <tr>
//                 <td className='section-header'>Fibre offcut bin</td>
//                 <td>TR-FC7LS</td>
//                 <td>10 pcs per set</td>
//             </tr>

//             <tr>
//                 <td className='section-header'>Replacement blade</td>
//                 <td>FCP-20BL</td>
//                 <td>Common for FC-6+ series</td>
//             </tr>
//         </tbody>
//       </table>



//     </div>

//     <div className="table-container-four">
//       <table className="universal-table">
//         <thead>
//           <tr>
//            <th colSpan="6">Fibre Holders</th>
//           </tr>
//           <tr>
//             <th rowSpan={3}>  Item</th>
//           </tr>

//           <tr>
//             <th colSpan={5}>Part Name</th>
//           </tr>

//           <tr>
//             <th>FHS-025</th>
//             <th>FHS-09</th>
//             <th>FHS-025/LBS</th>
//             <th>FHD-1</th>
//             <th>FHC-3</th>
//           </tr>
//         </thead>

//         <tbody>
//             <tr className="section-header">
//                 <td rowSpan={2}>Applicable fibre</td>
//             </tr>
//             <tr className='table-row-even'>
//                 <td>Single <br />250 μm</td>
//                 <td>Single <br /> 900 μm</td>
//                 <td>Single 900 μm <br />Loose buffered fiber</td>
//                 <td> Single 250μm Drop <br /> / Indoor cable</td>
//                 <td> 3mm <br />cable</td>
//             </tr>

//             <tr className="section-header">
//                 <td rowSpan={2}>Cleave length</td>
//             </tr>
//             <tr className='table-row-odd'>
//                 <td colSpan={5}>10mm</td>

//             </tr>
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
//                       <img loading="lazy" className='product_s1v1_img' src={mediaUrl.image("FC8r.png")} alt="FC8R" />
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

// export default Sumitomoproductnine;





import React, { useState, useEffect } from 'react';
import '../../../../pages/page.css';
import '../../../../components/index.css';
import { Link } from 'react-router-dom';

const Sumitomoproductnine = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("FC7LS.png"));
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
    document.title = 'Sumitomo FC7LS Handheld Fiber Cleaver';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix offers the Sumitomo FC7LS Optical Fiber Cleaver. This lightweight, one-hand tool is ideal for narrow spaces, delivering precise cleaves with a durable 48,000-fiber life blade.';

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
      document.title = 'Sumitomo FC7LS Handheld Fiber Cleaver';
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
          <span className="current">FC-7LS</span>
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
              <h1 className="hero-title">SUMITOMO FC-7LS</h1>
              <p className="hero-desc">
                Sumitomo FC‑7LS is a handheld single‑fiber cleaver with auto blade rotation and a compact,
                one‑hand design. It supports 0.2/0.25/0.9 mm buffered fibers, drop and indoor cables, and
                delivers stable, low‑angle cleaves with long service life.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("F7LS.pdf"), "_blank")}>
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
              <h3 className="panel-title">Why FC‑7LS stands out</h3>
              <p className="panel-sub">
                Built for fast, consistent fiber prep with one‑hand usability and long blade life.
              </p>
              <ul className="feature-list">
                <li>Handheld single-fiber cleaver.</li>
                <li>Auto-rotating blade for consistent cleaves.</li>
                <li>Typical cleave angle 0.5° (single fiber).</li>
                <li>Switchable lid opening (Wide/Narrow).</li>
                <li>Field-replaceable blade (FCP-20BL(7R)).</li>
                <li>Compact and lightweight (≈ 124 g).</li>
                <li>Stable cleaving mechanism for reduced fiber waste
                  .</li>
                <li>Precision fiber alignment for repeatable, high-quality cleaves.</li>



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
                        <td>0.3° to 0.9° </td>
                      </tr>
                      <tr>
                        <th>Blade life</th>
                        <td>48,000 fibers (2,000 × 24)</td>
                      </tr>
                      <tr>
                        <th>Cleave length</th>
                        <td>10–20 mm</td>
                      </tr>
                      <tr>
                        <th>Weight</th>
                        <td>Approx. 124 g</td>
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
              {/* Standard package */}
              <details className="acc" open>
                <summary className="acc-sum">
                  <span className="acc-title">Standard package</span>
                </summary>
                <div className="acc-content">
                  <div className="acc-table three">
                    <div className="acc-row acc-head"><span>Part Name</span><span>Part No.</span><span>Note</span></div>
                    <div className="acc-row"><span>Main Body</span><span>FC-7LS</span><span>1 pc</span></div>
                    <div className="acc-row"><span>Carrying case</span><span>CC-FC7LS</span><span>1 pc</span></div>
                  </div>
                </div>
              </details>

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
                    <div className="kv acc-kv"><span className="k">Coating diameter</span><span className="v">Φ 0.2, 0.25, 0.9 mm buffered fiber; 2 & 3 mm jacketed cord</span></div>
                    <div className="kv acc-kv"><span className="k">Cable type</span><span className="v">Rectangular drop cable (2×3 mm), 3.5 mm round drop cable</span></div>
                    <div className="kv acc-kv"><span className="k">Fiber count</span><span className="v">Single</span></div>

                    {/* Cleave length / placing / angle */}
                    <div className="kv acc-kv"><span className="k">Cleave length</span><span className="v">10–20 mm</span></div>
                    <div className="kv acc-kv"><span className="k">Fibre placing</span><span className="v">Single fibre adapter AP‑FC7LS</span></div>
                    <div className="kv acc-kv"><span className="k">Cleave angle (typ.)</span><span className="v">Avg. 0.3 to 0.9 degrees</span></div>

                    {/* Collector / size / blade */}
                    <div className="kv acc-kv"><span className="k">Off‑cut collector</span><span className="v">Pre‑fitted, TR‑FC7LS</span></div>
                    <div className="kv acc-kv"><span className="k">Dimensions & weight</span><span className="v">51(W) × 106(D) × 83(H) mm; Approx. 124 g</span></div>
                    <div className="kv acc-kv"><span className="k">Replaceable blade</span><span className="v">FCP‑20BL</span></div>

                    {/* Environmental / blade life */}
                    <div className="kv acc-kv"><span className="k">Operating condition</span><span className="v">-10~50°C; 0~95% RH (non‑condensing)</span></div>
                    <div className="kv acc-kv"><span className="k">Storage condition</span><span className="v">-40~80°C; 0~95% RH (non‑condensing)</span></div>
                    <div className="kv acc-kv"><span className="k">Blade life</span><span className="v">48,000 fibers (2,000 × 24 positions)</span></div>
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
                    <div className="acc-row"><span>Single Fiber adapter</span><span>AP-FC7LS</span><span>-</span></div>
                    <div className="acc-row"><span>Fibre offcut bin</span><span>TR-FC7LS</span><span>10 pcs per set</span></div>
                    <div className="acc-row"><span>Replacement blade</span><span>FCP-20BL</span><span>Common for FC-6+ series</span></div>
                  </div>
                </div>
              </details>

              {/* Fibre Holders */}
              <details className="acc">
                <summary className="acc-sum">
                  <span className="acc-title">Fibre Holders</span>
                </summary>
                <div className="acc-content">
                  <div className="acc-table" style={{ display: 'grid', gap: 8 }}>
                    <div className="acc-row acc-head" style={{ gridTemplateColumns: '1.2fr repeat(5, 1fr)' }}>
                      <span>Item</span>
                      <span>FHS-025</span>
                      <span>FHS-09</span>
                      <span>FHS-025/LBS</span>
                      <span>FHD-1</span>
                      <span>FHC-3</span>
                    </div>
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(5, 1fr)' }}>
                      <span>Applicable fibre</span>
                      <span>Single 250 μm</span>
                      <span>Single 900 μm</span>
                      <span>Single 900 μm, Loose buffered fiber</span>
                      <span>Single 250 μm Drop / Indoor cable</span>
                      <span>3 mm cable</span>
                    </div>
                    <div className="acc-row" style={{ gridTemplateColumns: '1.2fr repeat(5, 1fr)' }}>
                      <span>Cleave length</span>
                      <span style={{ gridColumn: '2 / span 5' }}>10mm</span>
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
        pageName="SUMITOMO FC-7LS"
      /></div>
  );
};

export default Sumitomoproductnine;
