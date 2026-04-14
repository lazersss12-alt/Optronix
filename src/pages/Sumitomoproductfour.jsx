import { mediaUrl } from '../config/media';
// import React, { useState } from 'react';
// import './page.css';
// import '../components/index.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("z2c.webp") from "../components/img/W1C MACHINE.png";
// import ProductBg from "../components/img/headerbackground.png";
// import s1vpdf from "../components/img/sumitomow1c.pdf";
// import productImage4 from "../components/img/w1c4.png";
// import productImage2 from "../components/img/w1c2.png";
// import productImage3 from "../components/img/w1c3.png";
// import eponoltf1 from "../components/img/product4.webp";
// import mediaUrl.image("z2c.webp") from "../components/img/Z2C.png";
// import subs1v from "../components/img/s1vp.png";
// import mediaUrl.image("82c+ 1oct 2024.webp") from "../components/img/82C+ 1Oct 2024.png";
// import mediaUrl.image("fc8r.webp") from "../components/img/FC8r.png";
// const sections = [
//   {

//     subtitle: (
//       <>
//         Built for <span className='highlight' style={{color:"#d45719"}}>FTTH Heavy-Duty Work</span> -AI Technology
//         <br /> 
//          Fusion Splicer
//       </>
//     ),
//     img: mediaUrl.image("z2c.webp")

//   },
//   {

//     subtitle: (
//       <>
//         Experience <span className="highlight" style={{color:"#d45719"}}>Crystal-Clear</span> Fiber Imaging



//         <br></br>
//         <br></br>
//         <h6>With a Vibrant 5.0" WVGA LCD Color Display.</h6>
//       </>
//     ),
//     img: productImage2,

//   },
//   {

//     subtitle: (
//       <>
//         True <span className="highlight" style={{color:"#d45719"}}>Core-to-Core</span>
//         <br></br>
//         Splicing for flawless Connectivity.
//       </>
//     ),
//     img: productImage3,
//   },
//   {

//     subtitle: (
//       <>

//         <span className="highlight" style={{color:"#d45719"}}>Power</span> Through Every Project

//         <br></br>
//         <br></br>
//         <h6>With 300 Cycles of Reliable Battery Backup.</h6>
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
// const Sumitomoproductfour = () => {
//   const [productImage, setProductImage] = useState(mediaUrl.image("z2c.webp"));
//   const [activeIcon, setActiveIcon] = useState(null);

//   const handleIconClick = (image, icon) => {
//     setProductImage(image);
//     setActiveIcon(icon);
//   };       

//   return (
//     <div>
//       {/* Header */}
//     <div className="extreme-zoom-container center-col">
//     <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">SUMITOMO W1C</h1>
//       <p className="hero-split__desc">
//         Discover the Sumitomo W1C Fusion Splicer – a high-precision, compact powerhouse crafted by
//         Sumitomo Electric Industries. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the W1C ensures efficient, flawless splicing in any environment.
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
//         src={mediaUrl.image("z2c.webp")} /* or use any of your images like productImage2 */
//         alt="Sumitomo S1V Fusion Splicer"
//         className="hero-split__img"
//       />
//     </div>
//   </div>
// </div>

//       {/* Banner */}
//       <div className='products1v-feature-section-f2'>
//         <div className='featurez2c-section-f2-a'>
//           <img className='feature-banner' src={eponoltf1} alt="W1C Banner"/>
//         </div>

//       </div>

//       {/* ---------- SPECIFICATIONS ---------- */}
//       <div className="table-wrapper">
//         <table className="universal-table">
//           <thead>
//             <tr><th colSpan="3">Specification</th></tr>
//             <tr><th></th><th>Item</th><th>W1C</th></tr>
//           </thead>
//           <tbody>
//             <tr className="section-header"><td rowSpan="5">Optical Fiber Requirement</td></tr>
//             <tr><td>Material</td><td>Silica glass</td></tr>
//             <tr><td>Fiber count / Profile</td><td>SMF(G.652), MMF(G.651), DSF(G.653), NZDSF(G.655), BIF(G.657), CSF(G.654)</td></tr>
//             <tr><td>Fiber diameter</td><td>Cladding 80–150µm, Coating 100–1000µm</td></tr>
//             <tr><td>Cleave length</td><td>5–16mm with clamp</td></tr>

//             <tr className="section-header"><td rowSpan="9">Standard Performance</td></tr>
//             <tr><td>Splicing Loss</td><td>SMF:0.02dB, MMF:0.01dB...</td></tr>
//             <tr><td>Return loss</td><td>60dB or greater</td></tr>
//             <tr><td>Splice time</td><td>6s Quick, 8s Auto</td></tr>
//             <tr><td>Heating time</td><td>8s Quick sleeve</td></tr>
//             <tr><td>Splice & Heat per charge</td><td>~310 (BU-16)</td></tr>
//             <tr><td>Fiber view</td><td>2 CMOS, 350X (700X zoom)</td></tr>
//             <tr><td>Proof test</td><td>1.96~2.09N</td></tr>
//             <tr><td>Protection Sleeve</td><td>60mm, 40mm, Nano</td></tr>

//             {/* ... keep ALL table rows fully present ... */}
//             <tr className="section-header"><td rowSpan="11">Functions</td></tr>
//             <tr><td>Splice storage</td><td>200 images, 10k splice</td></tr>
//             <tr><td>Multi clamp</td><td>Supports 250µm, 900µm, 2/3mm, drop cable</td></tr>
//             <tr><td>Reversible clamps</td><td>Yes</td></tr>
//             <tr><td>Dual ovens</td><td>Yes</td></tr>
//             <tr><td>User-select oven clamps</td><td>Yes</td></tr>
//             <tr><td>Onboard training video</td><td>Provided</td></tr>
//             <tr><td>Fiber ID</td><td>SMF/MMF/DSF/NZDSF/BIF/Other</td></tr>
//             <tr><td>Arc calibration</td><td>Automatic</td></tr>
//             <tr><td>Remaining cycle display</td><td>Yes</td></tr>
//             <tr><td>Wireless LAN (optional)</td><td>Yes</td></tr>

//             {/* ... and so on: Size/Weight, Terminals, Power Supply, Operating, Storage, Electrode Life, Software updates, Data Mgmt, Tests */}
//           </tbody>
//         </table>
//       </div>

//       {/* ---------- ACCESSORIES ---------- */}
//       <div className="table-wrapper">
//         <table className="universal-table">
//           <thead>
//             <tr><th colSpan="6">Accessories</th></tr>
//             <tr><th></th><th>Part Name</th><th>Part No</th><th colSpan={2}>Remarks</th></tr>
//           </thead>
//           <tbody>
//             <tr className="section-header"><td rowSpan="12">Accessories for Splicer</td></tr>
//             <tr><td rowSpan="7">Fiber Holder</td></tr>
//             <tr><td>FHS-025</td><td colSpan={2}>For 0.25mm</td></tr>
//             <tr><td>FHS-09</td><td colSpan={2}>For 0.9mm</td></tr>
//             <tr><td>FHS-025/LB5</td><td colSpan={2}>For 0.9mm loose buffered</td></tr>
//             {/* ... rest of Fiber Holder rows ... */}
//             <tr><td>Battery Pack</td><td>BU-16</td><td>Li-ion 6400mAh</td></tr>
//             <tr><td>Battery Charger</td><td>BC-16</td><td>-</td></tr>
//             <tr><td>Car Battery Cable</td><td>PCV-16</td><td>Vehicle 12V</td></tr>
//             <tr><td>Electrode</td><td>ER-10</td><td colSpan={2}>-</td></tr>

//             <tr className="section-header"><td rowSpan="10">Accessories</td></tr>
//             <tr><td>Fiber Cleaver</td><td>S-70</td><td>Auto blade rotation</td></tr>
//             <tr><td>Jacket Remover</td><td>JR-M03</td><td colspan={2}>-</td></tr>
//             <tr><td>Loose Tube Cutter</td><td>LTC-01</td><td colspan={2}>-</td></tr>
//             <tr><td>Alcohol Dispenser</td><td>HR-3</td><td colspan={2}>-</td></tr>
//             <tr><td>Fiber Protection Sleeve</td><td>FPS-1, FPS-40, FPS-61-2.6</td><td colspan={2}>60mm/40mm/61mm</td></tr>
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
//             <tr><td>AC Adapter</td><td>ADC-16</td><td>1 pc</td></tr>
//             <tr><td>AC Power Cord</td><td>PC-AC</td><td>1 pc</td></tr>
//             <tr><td>Cooling Tray</td><td>-</td><td>1 pc</td></tr>
//             <tr><td>Battery Pack</td><td>BU-16</td><td>1 pc</td></tr>
//             <tr><td>Spare Electrode</td><td>ER-10</td><td>1 pair</td></tr>
//             <tr><td>Quick Reference Guide</td><td>-</td><td>1 pc</td></tr>
//             <tr><td>Carrying Case</td><td>CC-82</td><td>1 pc</td></tr>
//             <tr><td>Hand Strap</td><td>-</td><td>1 pc</td></tr>
//             <tr><td>USB Cable</td><td>-</td><td>1 pc</td></tr>
//           </tbody>
//         </table>
//       </div>

//       {/* ---------- SIMILAR PRODUCTS (unchanged) ---------- */}
//       <div className='similerproduct'>
//         <h3 style={{textAlign: "center"}}>Similar Product</h3>
//       </div>
//       <div className='product_s1v1_product'>
//         <div className='product_s1v1_product1'>
//           <img className='product_s1v1_img' src={mediaUrl.image("z2c.webp")} alt="Z2C" />
//           <h3 className='products1v_name_option'>Z2C</h3>
//           <Link to="/sumitomoproductthree">
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//         <div className='product_s1v1_product2'>
//           <img className='product_s1v1_img' src={mediaUrl.image("82c+ 1oct 2024.webp")} alt="82C+" />
//           <h3 className='products1v_name_option'>82C+</h3>
//           <Link to="/sumitomoproductfive">
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//         <div className='product_s1v1_product3'>
//           <img className='product_s1v1_img' src={subs1v} alt="S1V" />
//           <h3 className='products1v_name_option'>S1V</h3>
//           <Link to="/sumitomoproductone">
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//         <div className='product_s1v1_product4'>
//           <img className='product_s1v1_img' src={mediaUrl.image("fc8r.webp")} alt="FC8R" />
//           <h3 className='productz2c_name_option'>FC8R</h3>
//           <Link to="/sumitomoproductseven">
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Sumitomoproductfour;




// import React, { useState } from 'react';
// import './page.css';
// import '../components/index.css';
// import { Link } from 'react-router-dom';
// import mediaUrl.image("z2c.webp") from "../components/img/Z2C.png";
// import ProductBg from "../components/img/headerbackground.png";
// import productImage4 from "../components/img/82M4.png";
// import s1vpdf from "../components/img/Sumitomoz2c.pdf";
// import productImage2 from "../components/img/Z2C2 (2).png";
// import productImage3 from "../components/img/Z2C3 (2).png";
// import eponoltf1 from "../components/img/product3.webp";
// import subs1vu from "../components/img/s1vuf.png";
// import mediaUrl.image("w1c file.webp") from "../components/img/W1C file.png";
// import mediaUrl.image("82c+ 1oct 2024.webp") from "../components/img/82C+ 1Oct 2024.png";
// import mediaUrl.image("fc8r.webp") from "../components/img/FC8r.png";
// const sections = [
//   {

//     subtitle: (
//       <>
//          <span className="highlight" style={{color:"#2287db"}}>Next-Level Fiber Fusion with Core Precision.</span>


//       </>
//     ),
//     img: mediaUrl.image("z2c.webp")

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
// const Sumitomoproductthree = () => {
//   const [productImage, setProductImage] = useState(mediaUrl.image("z2c.webp"));
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
//         src={mediaUrl.image("z2c.webp")} /* or use any of your images like productImage2 */
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
//           <img className='product_s1v1_img' src={subs1vu} alt="S1V Ultra" />
//           <h3 className='products1v_name_option'>S1V Ultra</h3>
//           <Link to="/sumitomoproducttwo" style={{ textDecoration: "none" }}>
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//         <div className='product_s1v1_product2'>
//           <img className='product_s1v1_img' src={mediaUrl.image("82c+ 1oct 2024.webp")} alt="82C+" />
//           <h3 className='products1v_name_option'>82C+</h3>
//           <Link to="/sumitomoproductfive" style={{ textDecoration: "none" }}>
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//         <div className='product_s1v1_product3'>
//           <img className='product_s1v1_img' src={mediaUrl.image("w1c file.webp")} alt="W1C" />
//           <h3 className='products1v_name_option'>W1C</h3>
//           <Link to="/sumitomoproductfour" style={{ textDecoration: "none" }}>
//             <button className='products1v_button_option'>Know More</button>
//           </Link>
//         </div>
//         <div className='product_s1v1_product4'>
//           <img className='product_s1v1_img' src={mediaUrl.image("fc8r.webp")} alt="FC8R" />
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
import './page.css';
import '../components/index.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../components/common/ProductLeadModal';

const Sumitomoproductfour = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [productImage] = useState(mediaUrl.image("z2c.webp"));
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

    document.title = 'Sumitomo W1C Core Alignment Fusion Splicer';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix presents the Sumitomo W1C Core Fusion Splicer. Features 6s splice time, up to 300 cycles per charge, 6,000 arc electrode life, and rugged resistance.';

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
    const imgs = [mediaUrl.image("z2c.webp"), mediaUrl.image("82c+ 1oct 2024.webp"), mediaUrl.image("w1c file.webp"), mediaUrl.image("fc8r.webp")];
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
        { label: "Fiber count / Profile", value: "SMF(G.652), MMF(G.651), DSF(G.653), NZDSF(G.655), BIF(G.657), CSF(G.654)" },
        { label: "Fiber diameter", value: "Cladding 80–150µm, Coating 100–1000µm" },
        { label: "Cleave length", value: "5–16mm with clamp" },
      ],
    },
    {
      title: "Standard Performance",
      items: [
        { label: "Splicing Loss (typ.)", value: "SMF: 0.02dB, MMF: 0.01dB, DSF: 0.04dB, NZDSF: 0.04dB, BIF: 0.02dB" },
        { label: "Return loss", value: "60dB or greater" },
        { label: "Splice time", value: "6s Quick, 8s Auto" },
        { label: "Heating time", value: "8s (Quick sleeve)" },
        { label: "Splice & Heat per charge", value: "Approx. 310 (BU-16)" },
        { label: "Fiber view & magnification", value: "2 CMOS, 350X (700X zoom)" },
        { label: "Proof test", value: "1.96~2.09N" },
        { label: "Protection sleeve", value: "60mm / 40mm / Nano" },
      ],
    },
    {
      title: "Programs",
      items: [
        { label: "Splice programs", value: "Max 300, 54 are pre-optimized, 246 editable by user" },
        { label: "Heating programs", value: "Max 100, 27 are pre-optimised, 73 editable by user" },
      ],
    },
    {
      title: "Functions",
      items: [
        { label: "Splice storage", value: "200 image/10k splice(internal memory) 50,200/20k(with 16GB SD Card) " },
        { label: "Multi clamp", value: "Supports 250µm, 900µm, 2/3mm, drop cable" },
        { label: "Reversible clamps", value: "Yes" },
        { label: "Dual ovens", value: "Yes" },
        { label: "User-select oven clamps", value: "Yes" },
        { label: "Onboard training video", value: "Provided" },
        { label: "Fiber ID", value: "SMF/MMF/DSF/NZDSF/BIF/Other" },
        { label: "Arc calibration", value: "Automatic" },
        { label: "Remaining cycle display", value: "Yes" },
        { label: "Wireless LAN (optional)", value: "Yes" },
      ],
    },
    {
      title: "Size / Weight",
      items: [
        { label: "Size", value: "128 x 154 x 130 mm" },
        { label: "Weight", value: "1.9kg (no battery), 2.1kg (with BU-16)" },
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
      { name: "Fiber Holder", part: "FHS-025/LB5", remarks: "For 0.9mm loose buffered fiber" },
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
      { name: "Fiber Cleaver", part: "S-70", remarks: "Auto blade rotation" },
      { name: "Jacket Remover", part: "JR-M03", remarks: "For single fiber" },
      { name: "Loose Tube Cutter", part: "LTC-01", remarks: "-" },
      { name: "Alcohol Dispenser", part: "HR-3", remarks: "-" },
      { name: "Fiber Protection Sleeves", part: "FPS-1, FPS-40, FPS-61-2.6", remarks: "60mm / 40mm / 61mm" },
    ],

    fiberSleeves: [
      { name: "FPS-1", part: "", remarks: "60mm" },
      { name: "FPS-40", part: "", remarks: "40mm" },
      { name: "FPS-61-2.6", part: "", remarks: "61mm" },
    ],

    basic: [
      { name: "AC Adapter", part: "ADC-16", qty: "1 pc" },
      { name: "AC Power Cord", part: "PC-AC", qty: "1 pc" },
      { name: "Cooling Tray", part: "-", qty: "1 pc" },
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
          <span className="current">SUMITOMO W1C</span>
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
              <h1 className="hero-title">SUMITOMO W1C</h1>
              <p className="hero-desc">
                Discover the Sumitomo W1C Fusion Splicer – a high-precision, compact powerhouse crafted by
                Sumitomo Electric Industries. Engineered for exceptional splice accuracy, low loss, and rugged
                reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
                features and a user-friendly design, the W1C ensures efficient, flawless splicing in any environment.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("w1c.pdf"), "_blank")}>
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
              <h3 className="panel-title">Why W1C stands out</h3>
              <p className="panel-sub">
                Built for the Grind. Engineered for Precision. The W1C empowers technicians with rapid-fire automation in a chassis that’s as tough as the job site.
              </p>
              <ul className="feature-list">

                <li>Supports a wide range of fiber profiles: SMF, MMF, DSF, NZDSF, BIF, CSF.</li>
                <li>Industry-leading low splicing loss (SMF: 0.02 dB typ., MMF: 0.01 dB typ.).</li>
                <li>Fast splice times — approx. 6 seconds (SM G652 Quick Mode) and 8 seconds in Auto Mode.</li>
                <li>Quick heating cycles — approx. 8 seconds (FPS-61-2.6 sleeve, S60mm quick mode).</li>

                <li>Long electrode life to 6,000 arc discharges for reduced maintenance.</li>
                <li>Dual independent ovens for simultaneous/continuous heat-shrink operations.</li>
                <li>User-selectable oven/clamp operation and reversible coating clamps for flexible sleeve handling.</li>

                <li>5.0" touch-screen color LCD display for clear controls and menus in the field.</li>


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
                          SMF (G.652), MMF (G.651), DSF (G.653), NZDSF (G.655), BIF (G.657), CSF (G.654)
                        </td>
                      </tr>

                      <tr>
                        <th>Splicing Loss (typ.)</th>
                        <td>
                          SMF: 0.02 dB · MMF: 0.01 dB · DSF: 0.04 dB · NZDSF: 0.04 dB · BIF: 0.02 dB
                        </td>
                      </tr>

                      <tr>
                        <th>Splice time (typ.)</th>
                        <td>
                          6 sec (SM G652 Quick Mode), 8 sec (Auto Mode)
                        </td>
                      </tr>

                      <tr>
                        <th>Heating time (typ.)</th>
                        <td>
                          8 sec (FPS-61-2.6 sleeve, S60mm 0.25 Quick Mode)
                        </td>
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
            <div className="s-media"><img src={mediaUrl.image("z2c.webp")} loading="lazy" alt="Z2C" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("82c+ 1oct 2024.webp")} loading="lazy" alt="82C+" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("w1c file.webp")} loading="lazy" alt="W1C" /></div>
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
            <div className="s-media"><img src={mediaUrl.image("fc8r.webp")} loading="lazy" alt="FC8R" /></div>
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
        pageName="Sumitomo - W1C"
      />
    </div>
  );
};

export default Sumitomoproductfour;
