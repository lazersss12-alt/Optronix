// import React, { useState } from 'react';
// import './page.css';
// import '../components/index.css';
// import { Link } from 'react-router-dom';
// import op08 from "../components/img/82C+.webp";
// import ProductBg from "../components/img/headerbackground.png";
// import productImage4 from "../components/img/82C4.png";
// import s1vpdf from "../components/img/sumitomo82m12.pdf";
// import productImage2 from "../components/img/82C2.png";
// import productImage3 from "../components/img/82C3.png";
// import eponoltf1 from "../components/img/productsix.webp";
// import subz2c from "../components/img/Backup_of_Z2C 2june.png";
// import subw1c from "../components/img/W1C file.png";
// import sub82c from "../components/img/82C+ 1Oct 2024.png";
// import subfc8r from "../components/img/FC8r.png";



// const Sumitomoproductsix = () => {
//   const [productImage, setProductImage] = useState(op08);
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleIconClick = (image, icon) => {
//     setProductImage(image);
//     setActiveIcon(icon);
//   };       

//   return (
//     <div><div className="extreme-zoom-container center-col">

// <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">SUMITOMO 82C+</h1>
//       <p className="hero-split__desc">
//         Discover the Sumitomo 82C+ Fusion Splicer – a high-precision, compact powerhouse crafted by
//         Sumitomo Electric Industries. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the 82C+ ensures efficient, flawless splicing in any environment.
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



//       <div className="table-wrapper">
//       <table className="universal-table">
//         <thead>
//           <tr><th colSpan="3">Specification</th></tr>
//           <tr><th></th><th>Item</th><th>82M12</th></tr>
//         </thead>
//         <tbody>
//           <tr className="section-header">
//             <td rowSpan="8">Optical Fiber Requirement</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Material</td>
//             <td>Silica glass</td>
//           </tr>
//           <tr className='table-row-odd'>
//             <td>Fiber count / Profile types</td>
//             <td>
//               Single / SMF(G.652), MMF(G.651), DSF(G.653), NZDSF(G.655),
//               BIF(G.657)
//             </td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Fiber Count</td>
//             <td>1, 2, 4, 5, 6, 8, 10, 12</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Cladding diameter</td>
//             <td>125µm</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Coating diameter</td>
//             <td>Single Fiber coating dia: 200µm, 250µm, 500µm, 900µm
//               Ribbon Fiber Thickness: 200-400µm
//             </td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Applicable Cable</td>
//             <td>Drop cable (2.0mm x 3.1mm, or 2.6mm), Indoor cable (2.0mm x 1.6mm)</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Cleave length</td>
//             <td>10mm</td>
//           </tr>

//           <tr className="section-header">
//             <td rowSpan="9">Standard Performance</td>
//           </tr>
//           <tr className='table-row-odd'>
//             <td>Splicing Loss (Typical)</td>
//             <td>SMF: 0.01dB, MMF: 0.01dB, DSF: 0.03dB, NZDSF: 0.03dB</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Return loss (Typical)</td>
//             <td>60dB or greater</td>
//           </tr>
//           <tr className='table-row-odd'>
//             <td>Splice time (Typical)</td>
//             <td>5 sec (SM G652 Quick Mode), 7 sec (SM G652 Std. Mode), 7 sec (Auto Mode)</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Heating time (Typical)</td>
//             <td>8 sec (FPS-61-2.6 sleeve, S60mm 0.25 Quick)
//             </td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Splice & Heat cycles per battery full charge <sup>*2</sup></td>
//             <td>Approx. 320 (BU-16)</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Fiber view & magnification</td>
//             <td>2 CMOS cameras observation, 380X (zoom 760X) for X or Y single axis view, 270X for both X & Y dual axis view</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Proof test</td>
//             <td>1.96 ~ 2.09N</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Applicable protection sleeve</td>
//             <td>60mm, 40mm & Sumitomo Nano sleeves</td>
//           </tr>

//           <tr className="section-header">
//             <td rowSpan="3">Programs</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Splice programs</td>
//             <td>Max. 300, 74 are pre-optimised, 226 editable by user</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Heating programs</td>
//             <td>Max. 100, 27 are pre-optimised, 73 editable by user</td>
//           </tr>

//           <tr className="section-header">
//             <td rowSpan="11">Functions</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Splice image capture / Splice data storage</td>
//             <td>200 images / 10,000 splice data (internal memory only), 50,200 / 20,000 (With 8GB SD card)</td>
//           </tr>


//           <tr className='table-row-even'>
//             <td>Universal clamp</td>
//             <td>Provided, 200µm, 900µm tight & loose buffer fiber </td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Reversible coating clamps</td>
//             <td>Provided</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Dual automatic independent ovens</td>
//             <td>Provided</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>User-selectable oven clamp operation</td>
//             <td>Provided</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Onboard User Training Video</td>
//             <td>Provided</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Automatic fiber identification</td>
//             <td> SMF / MMF / DSF / NZDSF/ BIF/ Other</td>
//           </tr>



//           <tr className='table-row-even'>
//             <td>Automatic arc calibration</td>
//             <td>Automatically compensates for environmental condition changes</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Display of remaining Splice & Heat cycle</td>
//             <td>Provided (Battery mode)</td>
//           </tr> 

//           <tr className='table-row-even'>
//             <td>Wireless LAN connectivity (Option)</td>
//             <td>Provided</td>
//           </tr>



//           <tr className="section-header">
//             <td rowSpan="4">Size / Weight</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Size</td>
//             <td> 128(W) x 154(D) x 130(H) mm (without anti-shock rubber)</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Weight</td>
//             <td>1.9kg (without Battery), 2.2kg (with Battery BU-16 )</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Monitor</td>
//             <td>5.0″ touch screen color LCD display</td>
//           </tr>

//           <tr className="section-header">
//             <td rowSpan="4">Terminals</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>DC output</td>
//             <td>DC 12V (for JR-6+)</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>USB port</td>
//             <td>USB 2.0 (mini-B type)</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Storage media</td>
//             <td>SD / SDHC memory card MAX32GB</td>
//           </tr>

//           <tr className="section-header">
//             <td rowSpan="4">Power supply</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>AC input</td>
//             <td>AC 100 - 240V, 50/60Hz (ADC-16)</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>DC input</td>
//             <td>DC 10 - 15V</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Battery pack</td>
//             <td>Li-ion 10.8V, 6,400mAh (BU-16)</td>
//           </tr>

//           <tr className="section-header">
//             <td rowSpan="2">Operating condition</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td colSpan="2">Altitude : 0 ~ 6,000m, Temperature : -10 ~ +50°C, Humidity : 0 ~ 95%RH (non-condensing), Wind velocity : up to 15m/sec</td>
//           </tr>

//           <tr className="section-header">
//             <td rowSpan="2">Storage condition</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td colSpan="2">Temperature : -40 ~ +80°C, Humidity : 0 ~ 95% (non-condensing), Battery : -20 ~ +30°C (long term)</td>

//           </tr>

//           <tr className="section-header">
//             <td rowSpan="2">Electrode life</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td colSpan="2">6,000 arc discharges </td>
//           </tr>
//           <tr className="section-header">
//             <td rowSpan="2">Software updates</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td colSpan="2">Internet</td>
//           </tr>

//           <tr className="section-header">
//             <td rowSpan="2">Data management</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td colSpan="2">Can be stored, edited and analyzed by dedicated PC software</td>
//           </tr>

//           <tr className="section-header">
//             <td rowSpan="5">Test Details</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Shock resistance</td>
//             <td>Drop from 76cm on 5 faces(excluding top face)</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Impact resistance</td>
//             <td>Equivalent to IK07 on LCD monitor (Protected against 2J impact, it is equivalent to a 500g force from 40cm)</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Water resistance</td>
//             <td>Equivalent to IPx2 (Operates normally after being exposed to water dripping at 3mm/min, for at least 2.5min on each of 4 surfaces tilted at 15 degree)</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Dust resistance</td>
//             <td>Equivalent to IP5x (Operates normally after 8 hours in test chamber wth circulating dust particles smaller then 75 µm) </td>
//           </tr>
//         </tbody>
//       </table>






//     <div className='table-wrapper'>
//       <table className='universal-table'>
//       <thead>
//       <tr>
//            <th colSpan="4">Accessories</th>
//           </tr>
//           <tr>
//             <th></th>
//             <th>Part Name</th>
//             <th>Part No.</th>
//             <th>Remarks</th>

//           </tr>
//         </thead>
//         <tbody>
//           <tr className='section-header'>
//             <td rowSpan="14">Accessories for Splicer</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>SumiCloud Card</td>
//             <td> WLSD Series</td>
//             <td>For SumiCloud <sup>TM</sup> connection</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td rowSpan="7">Fiber Holder</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>FHS-025</td>
//             <td> For Φ 0.25mm single fiber</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>FHS-09</td>
//             <td>For Φ 0.9mm single fiber</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>FHS-025/LB5</td>
//             <td>For 0.9mm loose buffered single fiber</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>FHD-1</td>
//             <td>For drop/indoor cable(cable size: typical 2.0 x 3.1 or 2.6mm) </td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>1SM-ST</td>
//             <td>For indoor cable (Cable size : typical 1.6 x 2.0mm)</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>FHC-3</td>
//             <td> For 3mm cable</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Battery pack</td>
//             <td>BU-16</td>
//             <td>Li-ion 6,400mAh</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Battery Charger</td>
//             <td>BC-16</td>
//             <td>-</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>
//               Car Battery Cable
//             </td>
//             <td>PCV-16</td>
//             <td>For car battery operation (cigarette socket type)</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>V-Groove Cleaning Brush</td>
//             <td>VGT-2</td>
//             <td>Brush for Cleaning V-Groove</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Electrode</td>
//             <td>ER-10</td>
//             <td>-</td>
//           </tr>

//           <tr className="section-header">
//             <td rowSpan="14">Accessories</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td rowSpan="3">Handheld fiber cleaver</td>

//           </tr>

//           <tr className='table-row-even'>
//             <td>FC-8R-FC</td>
//             <td>Automatic Blade Rotation Cleaver With Cleave Counter</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>FC-8R-F</td>
//             <td>Automatic blade Rotation Cleaver</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td rowSpan="3">Fiber Cleaver</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>FC-6S-C</td>
//             <td>Table-top high precision cleaver</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>FC-6RS-C</td>
//             <td>Automatic blade rotation cleaver</td>
//           </tr>




//           <tr className='table-row-odd'>
//             <td>Jacket Remover</td>
//             <td>JR-M03</td>
//             <td>Jacket remover for single fiber</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Loose tube cutter</td>
//             <td>LTC-01</td>
//             <td>-</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Alcohol dispenser</td>
//             <td>HR-3</td>
//             <td>-</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td rowSpan="4">Fiber protection sleeve</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>FPS-1</td>
//             <td>60mm, diameter after shrink approx. Φ3.2mm</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>FPS-40</td>
//             <td>40mm, Diameter after shrink approx. Φ3.2mm</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>FPS-61-2.6</td>
//             <td>61mm, diameter after Shrink approx. Φ2.6mm</td>
//           </tr>



//         </tbody>

//       </table>

//     </div>


//     <div className= 'table-wrapper' >
//       <table className='universal-table'>
//       <thead>
//       <tr>
//            <th colSpan="4"> Basic Accessories</th>
//           </tr>
//           <tr>

//             <th>Part Name</th>
//             <th>Part No</th>
//             <th>Qty</th>

//           </tr>
//         </thead>
//         <tbody>

//           <tr className='table-row-even'>
//             <td>AC adapter</td>
//             <td>ADC-16 series</td>
//             <td>1 pc</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>AC power cord</td>
//             <td>PC-AC</td>
//             <td>1 pc</td>
//           </tr>
//           <tr className='table-row-even'>
//             <td>Cooling tray</td>
//             <td>-</td>
//             <td>1 pc</td>
//           </tr>



//           <tr className='table-row-odd'>
//             <td>Spare electrode</td>
//             <td>ER-10</td>
//             <td>1 pair</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Quick reference guide</td>
//             <td>-</td>
//             <td>1 pc</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>Carrying case with worktable</td>
//             <td>CC-82</td>
//             <td>1 pc</td>
//           </tr>

//           <tr className='table-row-even'>
//             <td>Hand strap</td>
//             <td>-</td>
//             <td>1 pc</td>
//           </tr>

//           <tr className='table-row-odd'>
//             <td>USB cable</td>
//             <td>-</td>
//             <td>1 pc</td>
//           </tr>



//         </tbody>

//       </table>

//     </div>

//       </div>

//         <div className='similerproduct'>
//         <h3 style={{textAlign: "center"}}>Similar Product</h3>
//       </div>
//       <div className='product_s1v1_product'>
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
//                       <Link to="/sumitomoproductone" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product3'>
//                       <img className='product_s1v1_img' src={subw1c} alt="W1C" />
//                       <h3 className='products1v_name_option'>W1C</h3>
//                       <Link to="/sumitomoproducttwo" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                     <div className='product_s1v1_product4'>
//                       <img className='product_s1v1_img' src={subfc8r} alt="FC8R" />
//                       <h3 className='productz2c_name_option'>FC8R</h3>
//                       <Link to="/sumitomoproducttwo" style={{ textDecoration: "none" }}>
//                         <button className='products1v_button_option'>Know More</button>
//                       </Link>
//                     </div>
//                   </div>
//     </div>
//   </div>
//   );
// };

// export default Sumitomoproductsix;





import React, { useState, useEffect } from 'react';
import './page.css';
import '../components/index.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../components/common/ProductLeadModal';

import op08 from "../components/img/82C+.png";
import eightyTwoPdf from "../components/img/sumitomo82cplus.pdf";
import subz2c from "../components/img/Backup_of_Z2C 2june.png";
import subw1c from "../components/img/W1C file.png";
import sub82c from "../components/img/82C+ 1Oct 2024.png";
import subfc8r from "../components/img/FC8r.png";

const Sumitomoproductfive = () => {
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
    document.title = 'Sumitomo 82C+ AI HD Core Alignment Fusion Splicer';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix offers the Sumitomo 82C+ with AI-powered NanoTune technology. Achieve ultra-fast 5s splicing, 8s heating, 320 cycles/charge, and 6,000 electrode life.';

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
        { label: "Fiber count / Profile types", value: "Single / SMF (G.652), MMF (G.651), DSF (G.653), NZDSF (G.655), BIF (G.657), CSF (G.654), EDF" },
        { label: "Fiber diameter", value: "Cladding diameter: 80 ~ 150 µm, Coating diameter: 100 ~ 1,000 µm" },
        { label: "Cleave length", value: "5 ~ 16 mm with coating clamp" }
      ],
    },
    {
      title: "Standard Performance",
      items: [
        { label: "Splice loss (typical)", value: "SMF: 0.01 dB; MMF: 0.01 dB; DSF: 0.03 dB; NZDSF: 0.03 dB" },
        { label: "Return loss (typical)", value: "60 dB or greater" },
        { label: "Splice time (typical)", value: "5 sec (SM G652 Quick Mode); 7 sec (SM G652 Std. Mode / Auto Mode)" },
        { label: "Heating time (typical)", value: "8 sec (FPS-61-2.6 sleeve, S60mm 0.25 Quick Mode)" },
        { label: "Splice & Heat cycles per battery full charge", value: "Approx. 320 (BU-16)" },
        { label: "Fiber view & magnification", value: "2 CMOS cameras, 380× observation (zoom 760× for single-axis), 270× for both X & Y dual-axis view" },
        { label: "Proof test", value: "1.96 ~ 2.09 N" },
        { label: "Applicable protection sleeve", value: "60 mm, 40 mm & Sumitomo Nano sleeves" }
      ],
    },
    {
      title: "Programs",
      items: [
        { label: "Splice programs", value: "Max. 300, 74 are pre-optimised, 226 editable by user" },
        { label: "Heating programs", value: "Max. 100, 27 are pre-optimised, 73 editable by user" },
        { label: "Splice image capture / Splice data storage", value: "200 images / 10,000 splice data (internal memory). With SD card: e.g. 50,200 images / 20,000 splice data (with 8GB SD card)" }
      ],
    },
    {
      title: "Functions",
      items: [
        { label: "Attenuation splicing", value: "0.1 dB to 15 dB in 0.1 dB increments" },
        { label: "Universal clamps", value: "Provided — 200 µm, 900 µm tight & loose buffer fiber" },
        { label: "Reversible coating clamps", value: "Provided" },
        { label: "Dual automatic independent ovens", value: "Provided" },
        { label: "User-selectable oven clamp operation", value: "Provided" },
        { label: "Onboard user training video", value: "Provided" },
        { label: "Automatic fiber identification", value: "SMF / MMF / DSF / NZDSF / BIF / Other" },
        { label: "Automatic arc calibration", value: "Automatically compensates for environmental condition changes" },
        { label: "Display of remaining Splice & Heat cycles", value: "Provided (Battery mode)" },
        { label: "Wireless LAN connectivity (Option)", value: "Provided (optional)" }
      ],
    },
    {
      title: "Size / Weight",
      items: [
        { label: "Size", value: "128 (W) x 154 (D) x 130 (H) mm (without anti-shock rubber)" },
        { label: "Weight", value: "1.9 kg (without Battery) / 2.2 kg (with Battery BU-16)" },
        { label: "Monitor", value: "5.0\" touch screen color LCD display" }
      ],
    },
    {
      title: "Terminals",
      items: [
        { label: "DC output", value: "DC 12V (for JR-6+)" },
        { label: "USB port", value: "USB 2.0 (mini-B type)" },
        { label: "Storage media", value: "SD / SDHC memory card MAX 32GB" }
      ],
    },
    {
      title: "Power supply",
      items: [
        { label: "AC input", value: "AC 100 - 240V, 50/60Hz (ADC-16)" },
        { label: "DC input", value: "DC 10 - 15V" },
        { label: "Battery pack", value: "Li-ion 10.8V, 6,400mAh (BU-16)" },
      ],
    },
    {
      title: "Operating / Storage condition",
      items: [
        { label: "Operating condition", value: "Altitude: 0 ~ 6,000 m; Temperature: -10 ~ +50°C; Humidity: 0 ~ 95% RH (non-condensing); Wind velocity: up to 15 m/s" },
        { label: "Storage condition", value: "Temperature: -40 ~ +80°C; Humidity: 0 ~ 95% RH (non-condensing); Battery: -20 ~ +30°C (long term)" }
      ]
    },
    {
      title: "Environmental Durability",
      items: [
        { label: "Shock resistance", value: "Drop from 76cm on 5 faces (excluding top face)" },
        { label: "Water resistance", value: "IPx2 (operates normally after being exposed to water dripping at 3mm/min for at least 2.5 min on each of 4 surfaces)" },
        { label: "Dust resistance", value: "IP5x (operates normally after 8 hours in a dust chamber containing dust with particle size of 75um or less)" }
      ]
    },

    {
      title: "Other",
      items: [
        { label: "Electrode life", value: "6,000 arc discharges" },
        { label: "Software updates", value: "Internet" },
        { label: "Data management", value: "Can be stored, edited and analyzed by dedicated PC software" }
      ]
    }
  ];

  const accessoriesData = {
    forSplicer: [
      { name: "SumiCloud Card", part: "WLSD series", remarks: "For SumiCloud™ connection" },
      { name: "Fiber holder Φ0.25", part: "FHS-025", remarks: "For Φ0.25 mm single fiber" },
      { name: "Fiber holder Φ0.9", part: "FHS-09", remarks: "For Φ0.9 mm single fiber" },
      { name: "Fiber holder Φ0.9 loose buffer", part: "FHS-025/LB5", remarks: "For Φ0.9 mm loose buffered single fiber" },
      { name: "Fiber holder (drop/indoor)", part: "FHD-1", remarks: "For drop/indoor cable (typical 2.0 x 3.1 or 2.6 mm)" },
      { name: "Fiber holder (indoor)", part: "1SM-ST", remarks: "For indoor cable (typical 1.6 x 2.0 mm)" },
      { name: "Fiber holder (3mm)", part: "FHC-3", remarks: "For 3 mm cable" },
      { name: "Battery pack", part: "BU-16", remarks: "Li-ion 6,400 mAh" },
      { name: "Battery charger", part: "BC-16", remarks: "For BU-16" },
      { name: "Car battery cable", part: "PCV-16", remarks: "For car battery operation (vehicle 12V outlet)" },
      { name: "V-groove cleaning brush", part: "VGT-2", remarks: "Brush for cleaning V-groove" },
      { name: "Electrode", part: "ER-10", remarks: "Spare electrode" }
    ],

    accessories: [
      { name: "Handheld fiber cleaver", part: "FC-8R", remarks: "Automatic blade rotation cleaver with cleave counter" },

      { name: "Jacket remover", part: "JR-M03", remarks: "Jacket remover for single fiber" },
      { name: "Loose tube cutter", part: "LTC-01", remarks: "—" },
      { name: "Alcohol dispenser", part: "HR-3", remarks: "—" }
    ],

    fiberSleeves: [
      { name: "FPS-1", part: "60 mm", remarks: "60 mm, diameter after shrink approx. φ3.2 mm" },
      { name: "FPS-40", part: "40 mm", remarks: "40 mm, diameter after shrink approx. φ3.2 mm" },
      { name: "FPS-61-2.6", part: "61 mm", remarks: "61 mm, diameter after shrink approx. φ2.6 mm" }
    ],

    basic: [
      { name: "AC adapter", part: "ADC-16 series", qty: "1 pc" },
      { name: "AC power cord", part: "PC-AC<X>*", qty: "1 pc" },
      { name: "Cooling tray", part: "—", qty: "1 pc" },
      { name: "Spare electrode", part: "ER-10", qty: "1 pair" },
      { name: "Quick reference guide", part: "—", qty: "1 pc" },
      { name: "Carrying case with worktable", part: "CC-82", qty: "1 pc" },
      { name: "Hand strap", part: "—", qty: "1 pc" },
      { name: "USB cable", part: "—", qty: "1 pc" }
    ]
  };


  return (
    <div className="s1v-page">
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/sumitomo" style={{ color: "#333", textDecoration: "none" }}>Products</Link>

          <span className="sep">/</span>
          <span className="current">82C+</span>
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
              <h1 className="hero-title">SUMITOMO 82C+</h1>
              <p className="hero-desc">
                Discover the Sumitomo 82C+ Fusion Splicer – a high-precision, compact powerhouse crafted by
                Sumitomo Electric Industries. Engineered for exceptional splice accuracy, low loss, and rugged
                reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
                features and a user-friendly design, the 82C+ ensures efficient, flawless splicing in any environment.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(eightyTwoPdf, "_blank")}>
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
              <h3 className="panel-title">Why 82C+ stands out</h3>
              <p className="panel-sub">
                Designed for technicians who demand speed, accuracy, and durability, the 82C+ combines smart
                automation with a rugged, portable form factor.
              </p>
              <ul className="feature-list">
                <li>Ultra-fast 5-second splice time for high-volume FTTH & backbone work.</li>
                <li>Quick 8-second heating cycle keeps workflow continuous and efficient.</li>
                <li>Long-lasting 6,000-arc electrode life minimizes maintenance and cost.</li>
                <li>Strong battery delivering up to 320 splice + heat cycles per full charge.</li>

                <li>Flexible 5–16 mm cleave length for diverse field conditions.</li>
                <li>Universal clamps for 200 μm & 900 μm fibers (tight & loose buffer)
                </li>

                <li>Bright 5.0″ monitor ensures visibility in outdoor sunlight.</li>

                <li>Large splice data storage — up to 50,200 images & 20,000 splice records with SD card.</li>
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
                        <td>
                          SMF (G.652), MMF (G.651), DSF (G.653), NZDSF (G.655), BIF (G.657), CSF (G.654), EDF
                        </td>
                      </tr>
                      <tr>
                        <th>Splicing Loss (typ.)</th>
                        <td>
                          5 sec (SM G652 Quick Mode) · 7 sec (SM G652 Std. Mode / Auto Mode)
                        </td>
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
                The 82C+ ecosystem includes a complete range of accessories and basic items to keep your field
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
        pageName="Sumitomo - 82C+"
      />
    </div>
  );
};

export default Sumitomoproductfive;