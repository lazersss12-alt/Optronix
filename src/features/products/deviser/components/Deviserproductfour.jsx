import { mediaUrl } from '../../../../config/media';
// import React from 'react';
// import './Deviserproduct.css';
// import { Link } from 'react-router-dom';

// const Deviserproductfour = () => {
//   return (
//     <div>
//       <div className='product_d'>
//         <div className='product1_d1'>
//             <div className='product1_d1_1'>
//               <div className='product1_d1_h1'>
//             <div className='product1_d1_s1'>
//                 <h3 className='product1_d1_s1_name'>Sumitomo <br />S1V</h3>
//                 <p style={{marginLeft: "10px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro asperiores consequatur libero ex quis impedit? Recusandae, architecto numquam! </p>
//             </div>

//                 <div className='product1_d1_s2'>

//                   <Link to={"/contact"}><button className='product_button' >Enquire Now</button></Link>

//                 </div>
//                 </div>
//                 <div className='product1_d1_h2'>

//                   <img loading="lazy" className='product1_icon1 product_icon' src="" alt="Feature Icon" />
//                   <img loading="lazy" className='product1_icon2 product_icon' src="" alt="Feature Icon" />
//                   <img loading="lazy" className='product1_icon3 product_icon' src="" alt="Feature Icon" />
//                   <img loading="lazy" className='product1_icon4 product_icon' src="" alt="Feature Icon" />
//                   <img loading="lazy" className='product1_icon5 product_icon' src="" alt="Feature Icon" />

//                 </div>

//             </div>
//             <div className='product1_d1_2'>

//             <img loading="lazy" className='product1_d1_2_img' src="" alt="product" />


//             </div>
//         </div>
//         </div>

//         <div className='product_d_feature'>
//           <div className='product_d_feature_art'>
//             <h3 style={{fontSize: "32px"}}>All New Technology</h3>
//             <p style={{marginTop: "30px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa error nesciunt libero molestias laboriosam, illum culpa debitis atque? Optio illum, vitae quis cupiditate facere beatae provident possimus mollitia ipsa!</p>
//           </div>
//           <div className='product_d_feature_img'>
//             <img loading="lazy" src="" alt="Feature" style={{width: " 60%", display: "block", margin: "0 auto" }}/>
//           </div>
//         </div>

//         <div className='product_d_product'>
//           <div className='product_d_product1'>
//             <img loading="lazy" className='product_d_img' src="" alt=""  />
//             <h3 className='product_name_option'>Z2C</h3>
//            <Link to={"/sumitomoproductthree"} style={{textDecoration: "none"}}><button className='product_button_option'>Know More</button></Link> 

//           </div>
//           <div className='product_d_product2'>
//             <img loading="lazy" className='product_d_img' src="" alt="" />
//             <h3 className='product_name_option'>S1V Ultra</h3>
//            <Link style={{textDecoration: "none"}}><button className='product_button_option'>Know More</button></Link> 


//           </div>
//           <div className='product_d_product3'>
//             <img loading="lazy" className='product_d_img' src="" alt=""  />
//             <h3 className='product_name_option'>S1V Ultra</h3>
//            <Link to={"/sumitomoproducttwo"} style={{textDecoration: "none"}}><button className='product_button_option'>Know More</button></Link> 

//           </div>
//           <div className='product_d_product4'>
//             <img loading="lazy" className='product_d_img' src="" alt=""  />
//             <h3 className='product_name_option'>82C+</h3>
//            <Link to={"/sumitomoproducttwo"} style={{textDecoration: "none"}}><button className='product_button_option'>Know More</button></Link> 

//           </div>
//         </div>

//     </div>
//   )
// }

// export default Deviserproductfour;
// import React, { useState } from 'react'; // <-- useState imported here
// import './Deviserproduct.css';
// import { Link } from 'react-router-dom';

// import mediaUrl.image("ae3100_main.webp") from "../../../../assets/images/ae3100_main.jpg";
// import mediaUrl.doc("sumitomos1v.pdf") from "../../../../assets/images/sumitomos1v.pdf";
// // import featureImg1 from "../../../../assets/images/i6.png";
// // import featureImg2 from "../../../../assets/images/i7.png";
// // import featureImg3 from "../../../../assets/images/i8.png";
// // import featureImg4 from  "../../../../assets/images/i9.png";
// // import featureImg5 from "../../../../assets/images/i5.png";
// // import eponoltf1 from "../../../../assets/images/ae3100 graphic.jpeg";
// import z2cImg from "../../../../assets/images/ae3100_main.jpg";
// import c82Img from "../../../../assets/images/ae210.png";
// import w1cImg from "../../../../assets/images/vfl.png";
// import fc8rImg from "../../../../assets/images/ep310.png";

// const Deviserproductfour = () => {
//   const [productImage] = useState(mediaUrl.image("ae3100_main.webp"));
//   const [enquireOpen, setEnquireOpen] = useState(false);

//   return (
//     <div>
//       {/* Header */}
//      <div className="hero-split">
//   <div className="hero-split__container">
//     {/* Left: text */}
//     <div className="hero-split__content">
//       <h1 className="hero-split__title">AE3100 Live Series</h1>
//       <p className="hero-split__desc">
//         Discover the Deviser AE3100 Live Series – a high-precision, compact powerhouse crafted by
//         Deviser Instruments. Engineered for exceptional splice accuracy, low loss, and rugged
//         reliability, it's ideal for telecom, data centers, and industrial applications. With cutting-edge
//         features and a user-friendly design, the AE3100 Live Series ensures efficient, flawless splicing in any environment.
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
//           onClick={() => window.open(mediaUrl.doc("sumitomos1v.pdf"), "_blank")}
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

//       {/* Features */}
//       <div className={`products1v-feature-section-f2`}>
//   <div className="featurez2c-section-f2-a">
//     <img className="feature-banner" src={mediaUrl.image("ae3100_main.webp")} alt="S1V Feature" />
//   </div>
// </div>

//   <div className="table-wrapper">
//     <table className="universal-table">
//       <thead>
//         <tr>
//           <th colSpan={4}>Functions & Accessories</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Test Modes</td>
//           <td>Manual; Auto</td>
//           <td>File Formats</td>
//           <td>Compatible with Bellcore GR 196 v1.1 (*.SOR)</td>
//         </tr>
//         <tr>
//           <td>Limit Settings</td>
//           <td>Manual; Auto</td>
//           <td>Loss Test Type</td>
//           <td>LSA, 2pt, 4pt</td>
//         </tr>
//         <tr>
//           <td>Limit Profiles</td>
//           <td>8 customizable profiles</td>
//           <td>UI Style</td>
//           <td>4 styles available</td>
//         </tr>
//         <tr>
//           <td>Distance Shift</td>
//           <td>Yes; display negative events</td>
//           <td>FiberPath Linear View</td>
//           <td>&#10003;</td>
//         </tr>
//         <tr>
//           <td>Real-Time Testing</td>
//           <td>&#10003;</td>
//           <td>Touchscreen Keyboard</td>
//           <td>&#10003;</td>
//         </tr>
//         <tr>
//           <td>Self-Correcting</td>
//           <td>&#10003;</td>
//           <td>Web Browser</td>
//           <td>&#10003;</td>
//         </tr>
//         <tr>
//           <td>Online Help</td>
//           <td>&#10003;</td>
//           <td>Auto Shutdown/Sleep</td>
//           <td>&#10003;</td>
//         </tr>
//         <tr>
//           <td>Factory Reset</td>
//           <td>&#10003;</td>
//           <td>Macrobending Test</td>
//           <td>&#10003;</td>
//         </tr>
//         <tr>
//           <td>Multi-Lingual File Naming</td>
//           <td>&#10003;</td>
//           <td>Dual Wavelength Test</td>
//           <td>&#10003;</td>
//         </tr>
//         <tr>
//           <td>Screenshots</td>
//           <td>&#10003;</td>
//           <td>Multi-Trace Comparison</td>
//           <td>&#10003;</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>


//       {/* Functions & Accessories (cont'd) Table */}
//     {/* Functions & Accessories (cont'd) Table */}

//   <div className="table-wrapper">
//     <table className="universal-table">
//       <thead>
//         <tr>
//           <th colSpan={3}>Functions & Accessories (cont'd)</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Calibration λ</td>
//           <td colSpan={2}>1310 / 1550nm</td>
//         </tr>
//         <tr>
//           <td>Operating λ</td>
//           <td colSpan={2}>850 / 980 / 1300 / 1310 / 1490 / 1550 / 1610nm</td>
//         </tr>
//         <tr>
//           <td>Range</td>
//           <td colSpan={2}>Select from [-70 ~ +10dBm] or [-50 ~ +26dBm]</td>
//         </tr>
//         <tr>
//           <td>Resolution</td>
//           <td colSpan={2}>&plusmn; 0.17dB</td>
//         </tr>
//         <tr>
//           <td>Laser Output Power</td>
//           <td colSpan={2}>&gt; -48dBm</td>
//         </tr>
//         <tr>
//           <td>VFL Power</td>
//           <td colSpan={2}>1mW</td>
//         </tr>
//         <tr>
//           <td>USB FiberSpot Mode</td>
//           <td colSpan={2}>Available by option only</td>
//         </tr>
//         <tr>
//           <td>FiberPath</td>
//           <td colSpan={2}>Available by option only</td>
//         </tr>
//         <tr>
//           <td>Fiber Cleaning Pen</td>
//           <td colSpan={2}>Up to 200 uses</td>
//         </tr>
//         <tr>
//           <td>Remote Testing</td>
//           <td colSpan={2}>Requires SYNCOR software configuration</td>
//         </tr>
//         <tr>
//           <td>Cloud Asset Management</td>
//           <td colSpan={2}>Requires SYNCOR software configuration</td>
//         </tr>
//         <tr>
//           <td>Optical Port Type</td>
//           <td colSpan={2}>PC (default); APC (optional)</td>
//         </tr>
//         <tr>
//           <td>Optical Adapter Type</td>
//           <td colSpan={2}>FC (default); SC, ST, LC, SC/APC (optional)</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>


// {/* AFEI400 Auto Fiber Endface Inspector Table */}

//   <div className="table-wrapper">
//     <table className="universal-table">
//       <thead>
//         <tr>
//           <th colSpan={3}>AFEI400 Auto Fiber Endface Inspector</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Field of View</td>
//           <td colSpan={2}>425 x 360&mu;m</td>
//         </tr>
//         <tr>
//           <td>Resolution</td>
//           <td colSpan={2}>&lt; 1.5&mu;m</td>
//         </tr>
//         <tr>
//           <td>Fault Size Detection</td>
//           <td colSpan={2}>0.75&mu;m</td>
//         </tr>
//         <tr>
//           <td>Focus Range</td>
//           <td colSpan={2}>&plusmn;1mm (max &plusmn;3mm), auto-focus</td>
//         </tr>
//         <tr>
//           <td>Light Source</td>
//           <td colSpan={2}>Blue LED</td>
//         </tr>
//         <tr>
//           <td>Power Source</td>
//           <td colSpan={2}>USB 2.0 port</td>
//         </tr>
//         <tr>
//           <td>Dimensions (HxWxL)</td>
//           <td colSpan={2}>1.9" x 1.0" x 7.1" (47mm x 24.5mm x 181mm)</td>
//         </tr>
//         <tr>
//           <td>Compatibility</td>
//           <td colSpan={2}>Use with AE3100, AE1000, or Windows PC</td>
//         </tr>
//         <tr>
//           <td>Magnification</td>
//           <td colSpan={2}>400x</td>
//         </tr>
//         <tr>
//           <td>Camera</td>
//           <td colSpan={2}>1.3 million megapixel, 1/2" CMOS</td>
//         </tr>
//         <tr>
//           <td>Live Image</td>
//           <td colSpan={2}>800 x 800, JPG</td>
//         </tr>
//         <tr>
//           <td>Storage Temp.</td>
//           <td colSpan={2}>-20 ~ +70&deg;C</td>
//         </tr>
//         <tr>
//           <td>Measure speed</td>
//           <td colSpan={2}>&lt; 1s</td>
//         </tr>
//         <tr>
//           <td>Weight</td>
//           <td colSpan={2}>5.4oz (152g)</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>


// {/* General Specifications Table */}

//   <div className="table-wrapper">
//     <table className="universal-table">
//       <thead>
//         <tr>
//           <th colSpan={3}>General Specifications</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Display</td>
//           <td colSpan={2}>7" 800x480 dot matrix TFT LCD touchscreen</td>
//         </tr>
//         <tr>
//           <td>Interface</td>
//           <td colSpan={2}>2x USB 2.0; 1x RJ45 LAN (10M/100M); 1x SD card slot (64GB max)</td>
//         </tr>
//         <tr>
//           <td>Power Supply</td>
//           <td colSpan={2}>100 ~ 240V, 1.5A, 50~60Hz (AC); max 12V / 2A (DC); total max power 24W</td>
//         </tr>
//         <tr>
//           <td>Power Consumption</td>
//           <td colSpan={2}>&lt; 3.5W</td>
//         </tr>
//         <tr>
//           <td>Battery</td>
//           <td colSpan={2}>7.4V / 5300mAh Li-ion battery, 39.22 Wh</td>
//         </tr>
//         <tr>
//           <td>Operating Time</td>
//           <td colSpan={2}>&gt; 11 hrs on full charge</td>
//         </tr>
//         <tr>
//           <td>Languages</td>
//           <td colSpan={2}>Chinese, English, Spanish, Portuguese, French, Russian, Italian (German, Korean, Arabic optional)</td>
//         </tr>
//         <tr>
//           <td>Temperature (Operation/Storage)</td>
//           <td colSpan={2}>-10&deg;C ~ +50&deg;C / -40&deg;C ~ +70&deg;C</td>
//         </tr>
//         <tr>
//           <td>Relative Humidity</td>
//           <td colSpan={2}>0 ~ 95%, non-condensing</td>
//         </tr>
//         <tr>
//           <td>Dimensions (LxWxH)</td>
//           <td colSpan={2}>8.1" x 6.7" x 3.0" (206mm x 171mm x 75mm)</td>
//         </tr>
//         <tr>
//           <td>Weight</td>
//           <td colSpan={2}>&lt; 4.4 lbs (&lt; 2kg)</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>

//       {/* ----------- END DATA TABLES ----------- */}

//       {/* Rest of your component remains unchanged */}
//       {/* <div className='product_d_feature'>
//         <div className='product_d_feature_art'>
//           <h3 style={{ fontSize: "32px" }}>All New Technology</h3>
//           <p style={{ marginTop: "30px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsa error nesciunt libero molestias laboriosam, illum culpa debitis atque? Optio illum, vitae quis cupiditate facere beatae provident possimus mollitia ipsa!</p>
//         </div>
//         <div className='product_d_feature_img'>
//           <img loading="lazy" src="{eponoltf1}" alt="Feature" style={{ width: " 60%", display: "block", margin: "0 auto" }} />
//         </div>
//       </div> */}
//  <div className='similerproduct'><h3 style={{textAlign: "center"}}>Similar Product</h3></div>
//         <div className='product_s1v1_product'>
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
//     </div>
//   )
// };

// export default Deviserproductfour;





import React, { useState, useEffect } from 'react';
import './Deviserproduct.css';
import '../../../../components/index.css';
import '../../../../pages/page.css';
import { Link } from 'react-router-dom';
import AccordionTable from '../../../../components/ui/AccordionTable';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';




const Deviserproductfour = () => {
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
    document.title = 'Optronix: Deviser AE3100 Live OTDR | PON Ready 1625nm | 40dB';

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix offers the Deviser AE3100 Live Fiber OTDR. Ideal for in-service PON/FTTx testing, it features a filtered 1625nm port, 40dB dynamic range, 0.8m EDZ, and 4-in-1 integrated functions.';

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
      document.title = 'Optronix: Deviser AE3100 Live OTDR | PON Ready 1625nm | 40dB';
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
      { name: "Test Modes", part: "", remarks: "Manual; Auto" },
      { name: "Limit Settings", part: "", remarks: "Manual; Auto" },
      { name: "Limit Profiles", part: "", remarks: "8 customizable profiles" },
      { name: "Distance Shift", part: "", remarks: "Yes; display negative events" },
      { name: "Real-Time Testing", part: "", remarks: "✔" },
      { name: "Self-Correcting", part: "", remarks: "✔" },
      { name: "Online Help", part: "", remarks: "✔" },
      { name: "Factory Reset", part: "", remarks: "✔" },
      { name: "Multi-Lingual File Naming", part: "", remarks: "✔" },
      { name: "Screenshots", part: "", remarks: "✔" }
    ],

    accessories: [
      { name: "File Formats", part: "", remarks: "Bellcore GR-196 v1.1 (*.SOR)" },
      { name: "Loss Test Type", part: "", remarks: "LSA, 2pt, 4pt" },
      { name: "UI Style", part: "", remarks: "4 styles available" },
      { name: "FiberPath Linear View", part: "", remarks: "✔" },
      { name: "Touchscreen Keyboard", part: "", remarks: "✔" },
      { name: "Web Browser", part: "", remarks: "✔" },
      { name: "Auto Shutdown / Sleep", part: "", remarks: "✔" },
      { name: "Macrobending Test", part: "", remarks: "✔" },
      { name: "Dual Wavelength Test", part: "", remarks: "✔" },
      { name: "Multi-Trace Comparison", part: "", remarks: "✔" }
    ],

    fiberSleeves: [
      { name: "—", part: "", remarks: "No fiber sleeves — replaced with feature set" }
    ],

    basic: [
      { name: "Display", part: "", qty: "4.3\" TFT LCD touchscreen" },
      { name: "Interface", part: "", qty: "USB 2.0; RJ45 LAN (optional)" },
      { name: "Power Supply", part: "", qty: "100–240V AC / 12V DC" },
      { name: "Battery", part: "", qty: "7.4V / 2500 mAh Li-ion" },
      { name: "Operating Time", part: "", qty: "~6 hrs (4 hrs continuous)" },
      { name: "Temperature", part: "", qty: "-10°C to +50°C (operating)" },
      { name: "Dimensions", part: "", qty: "180 × 145 × 55 mm" },
      { name: "Weight", part: "", qty: "< 1 kg" }
    ]
  };


  return (
    <div className="s1v-page">
      {/* Breadcrumbs */}
      <div className="container">
        <nav className="breadcrumb">
          <Link to="/deviser" style={{ color: "#333", textDecoration: "none" }}>Products</Link>
          <span className="sep">/</span>
          <span className="current">DEVISER AE3100 Live Series</span>
        </nav>
      </div>

      {/* HERO */}
      <section className="container">
        <div className="hero-card" style={mosaicBG(0.92)}>
          <div className="hero-grid">
            {/* Left */}
            <div className="hero-left">
              {/* <span className="pill">New generation handheld fusion splicer</span> */}
              <h1 className="hero-title">DEVISER AE3100 Live Series</h1>
              <p className="hero-desc">
                The AE3100 OTDR from Deviser Instruments delivers advanced fiber-optic testing with support for
                1310nm and 1550nm wavelengths. With intuitive touchscreen controls and real-time data analysis, it’s the
                perfect tool for building, maintaining, and verifying FTTx and access networks. Optimized for mobility,
                it offers fast startup and reliable results in the field.
              </p>



              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => setEnquireOpen(true)}>
                  Enquire Now
                </button>
                <button className="btn btn-outline" onClick={() => window.open(mediaUrl.doc("sumitomos1v.pdf"), "_blank")}>
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
                <img loading="lazy" src={productImage} alt="Product" />
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
              <h3 className="panel-title">Why AE3100 Live Series stands out</h3>
              <p className="panel-sub">
                Lightweight, fast, and field‑friendly OTDR with built‑in OPM & VFL and a 4.3″ touchscreen.
              </p>
              <ul className="feature-list">
                <li>High-performance OTDR for FTTx and RFoG networks</li>
                <li>7″ 800×480 LCD touchscreen for easy operation</li>
                <li>Excellent short-distance performance: 0.8m event dead zone & 3m attenuation dead zone</li>
                <li>Triple-wavelength testing with strong dynamic range</li>
                <li>Minimum 5cm sampling resolution with intelligent event analysis</li>
                <li>Excellent stability and repeatability in all field conditions</li>
                <li>"FiberPath" automatic fiber-link mapping mode</li>
                <li>Multiple measurement tools: VFL, OPM, light source, microscope & full data ports (LAN/USB/SD)</li>

              </ul>
            </div>

            <div className="side-stack">
              <div className="panel side" style={mosaicBG(0.90)}>


                <h4 className="panel-title-sm">Performance at a glance</h4>

                <div className="perf-table-wrap">
                  <table className="perf-table">
                    <tbody>
                      <tr>
                        <th> Wavelengths (nm)</th>
                        <td>1310 / 1550 / 1625</td>
                      </tr>
                      <tr>
                        <th> Dynamic Range (dB)</th>
                        <td>40 / 38 / 38</td>
                      </tr>
                      <tr>
                        <th> Event Deadzone* (m)</th>
                        <td> ≤ 0.8</td>
                      </tr>
                      <tr>
                        <th> Attenuation Deadzone* (m)</th>
                        <td> ≤ 3.0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>


            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div className="panel" style={mosaicBG(0.92)}>
            <div className="acc-group">

              {/* Optical Parameters */}
              <AccordionTable
                title="General (AE3100DM)"
                defaultOpen={true}
                columns={["Item", "Value"]}
                rows={[
                  ["Wavelength Accuracy", "± 20nm"],
                  ["Event Dead Zone", "≤ 0.8m"],
                  ["Attenuation Dead Zone", "≤ 4m"],
                  [
                    "Distance Range",
                    "100m, 400m, 1.5km, 3km, 6km, 12km, 25km, 50km, 100km, 200km, 400km"
                  ],
                  ["Sampling Resolution", "5cm ~ 12.8m"],
                  ["Sampling Points", "256,000 max"],
                  [
                    "Distance Accuracy (m)",
                    "± (0.75m + 0.001% × Distance + Sampling Resolution)"
                  ],
                  ["Group Refractive Index", "1.30000 ~ 1.70000"],
                  ["Linearity", "0.03 dB/dB"],
                  ["Loss Threshold", "0.001 dB"],
                  ["Loss Resolution", "0.001 dB"],
                  ["Refresh Rate", "4 fields/second"],
                  ["Reflectance Accuracy", "± 2 dB"],
                  [
                    "Pulse Width",
                    "3ns, 5ns, 10ns, 30ns, 50ns, 100ns, 200ns, 500ns, 1µs, 2µs, 5µs, 10µs, 20µs"
                  ],
                  ["Measurement Time Range", "5s ~ 5min, real time"],
                  ["Data Storage", ">80,000 OTDR traces, exportable to USB or Computer"]
                ]}
              />





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
                    ["Test Modes", "Manual; Auto", "File Formats", "Compatible with Bellcore GR 196 v1.1 (*.SOR)"],
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
        pageName="DEVISER AE3100 Live Series"
      /></div>
  );
};

export default Deviserproductfour;