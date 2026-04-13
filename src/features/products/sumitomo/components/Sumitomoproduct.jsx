import { mediaUrl } from '../../../../config/media';
// import React, { useState } from 'react';  
// import { Link } from 'react-router-dom';
// import './Sumitomo.css';
// import mediaUrl.image("s1vp.webp") from '../../../../assets/images/s1vp.png';
// import mediaUrl.image("s1vuf.webp") from '../../../../assets/images/s1vuf.png';
// import mediaUrl.image("Z2C.webp") from './img-s/Z2C.png';
// import mediaUrl.image("82C+.webp") from './img-s/82C+.png';
// import mediaUrl.image("82M12.webp") from './img-s/82M12.png';
// import mediaUrl.image("w1c.webp") from './img-s/w1c.png';
// import mediaUrl.image("FC-8R.webp") from './img-s/FC-8R.png';
// import mediaUrl.image("SFCS.webp") from './img-s/SFCS.png';
// import mediaUrl.doc("sumitomos1v.pdf") from '../../../../assets/images/sumitomos1v.pdf';
// import mediaUrl.doc("sumitomos1vu.pdf") from '../../../../assets/images/sumitomos1vu.pdf';
// import mediaUrl.doc("Sumitomoz2c.pdf") from '../../../../assets/images/Sumitomoz2c.pdf';
// import mediaUrl.doc("sumitomow1c.pdf") from '../../../../assets/images/sumitomow1c.pdf';
// import mediaUrl.doc("sumitomo82cplus.pdf") from '../../../../assets/images/sumitomo82cplus.pdf';
// import mediaUrl.doc("sumitomo82m12.pdf") from '../../../../assets/images/sumitomo82m12.pdf';
// import mediaUrl.image("FC-6S.webp") from '../../../../assets/images/FC-6S.png';
// import mediaUrl.image("FC7LS.webp") from '../../../../assets/images/FC7LS.png';
// import mediaUrl.image("S-70.webp") from "../../../../assets/images/S-70.png";
// import mediaUrl.doc("S-70.pdf") from '../../../../assets/images/S-70.pdf';
// import mediaUrl.doc("F7LS.pdf") from '../../../../assets/images/F7LS.pdf';
// import mediaUrl.doc("FC8R.pdf") from '../../../../assets/images/FC8R.pdf';
// import mediaUrl.doc("cleaver.pdf") from '../../../../assets/images/cleaver.pdf'

// const productData = {
//   1: [
//     { 
//       image: mediaUrl.image("s1vp.png"), 
//       title: "S1V", 
//       description: " Active Clad Fusion Splicer", 
//       readMoreLink: "/sumitomo/S1V",
//       catalogLink: mediaUrl.doc("sumitomos1v.pdf") 
//     },
//     { 
//       image: mediaUrl.image("s1vuf.png"), 
//       title: "S1V ULTRA", 
//       description: "Active Clad Fusion Splicer", 
//       readMoreLink: "/sumitomo/S1VULTRA",
//       catalogLink: mediaUrl.doc("sumitomos1vu.pdf")  
//     },
//     { 
//       image: mediaUrl.image("Z2C.png"), 
//       title: "Z2C", 
//       description: "Core Fusion Splicer", 
//       readMoreLink: "/sumitomo/Z2C",
//       catalogLink: mediaUrl.doc("Sumitomoz2c.pdf")  
//     },
//     { 
//         image: mediaUrl.image("w1c.png"), 
//         title: "W1C", 
//         description: "Core  Fusion Splicer", 
//         readMoreLink: "/sumitomo/W1C",
//         catalogLink: mediaUrl.doc("sumitomow1c.pdf")  
//       },
//     { 
//       image: mediaUrl.image("82C+.png"), 
//       title: "82C+", 
//       description: "Core  Fusion Splicer", 
//       readMoreLink: "/sumitomo/82CPLUS" ,
//       catalogLink: mediaUrl.doc("sumitomo82cplus.pdf") 
//     },

//     { 
//         image: mediaUrl.image("82M12.png"), 
//         title: "82M12", 
//         description: "Ribbon Fusion Splicer", 
//         readMoreLink: "/sumitomo/82M12",
//         catalogLink: mediaUrl.doc("sumitomo82m12.pdf") 
//       },

//       { 
//         image: mediaUrl.image("img15.jpg"), 
//         title: "FC8R", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/FC8R",
//         catalogLink: mediaUrl.doc("FC8R.pdf") 
//       },

//       { 
//         image: mediaUrl.image("S-70.png"), 
//         title: "S-70", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/S70",
//         catalogLink: mediaUrl.doc("S-70.pdf")  
//       },

//       { 
//         image: mediaUrl.image("FC7LS.png"), 
//         title: "FC-7LS", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/FC7LS",
//         catalogLink: mediaUrl.doc("F7LS.pdf") 
//       },

//       { 
//         image: mediaUrl.image("SFCS.png"), 
//         title: "SFCS", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "/sumitomo/SFCS",
//         catalogLink: mediaUrl.doc("cleaver.pdf")  
//       },

//       { 
//         image: mediaUrl.image("FC-6S.png"), 
//         title: "FC-6 Series", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "/sumitomo/FC6S",
//         catalogLink: mediaUrl.doc("cleaver.pdf")  
//       }
//   ],
//   2: [
//     { 
//         image: mediaUrl.image("s1vp.png"), 
//         title: "S1V", 
//         description: " Active Clad Fusion Splicer", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("sumitomos1v.pdf") 
//       },
//       { 
//         image: mediaUrl.image("s1vuf.png"), 
//         title: "S1V ULTRA", 
//         description: "Active Clad Fusion Splicer", 
//         readMoreLink: "" ,
//         catalogLink: mediaUrl.doc("sumitomos1vu.pdf") 
//       }
//   ],
//   3: [
//     { 
//         image: mediaUrl.image("Z2C.png"), 
//         title: "Z2C", 
//         description: "Core Alignment Fusion Splicer", 
//         readMoreLink: "" ,
//         catalogLink: mediaUrl.doc("Sumitomoz2c.pdf") 
//       },
//       { 
//           image: mediaUrl.image("w1c.png"), 
//           title: "W1C", 
//           description: "Core Alignment Fusion Splicer", 
//           readMoreLink: "" ,
//           catalogLink: mediaUrl.doc("sumitomow1c.pdf") 
//         },
//       { 
//         image: mediaUrl.image("82C+.png"), 
//         title: "82C+", 
//         description: "Core Alignment Fusion Splicer", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("sumitomo82cplus.pdf")  
//       }
//   ],
//   4: [
//     { 
//       image: mediaUrl.image("82M12.png"), 
//       title: "82M12", 
//       description: "Ribbon Fusion Splicer", 
//       readMoreLink: "",
//       catalogLink: mediaUrl.doc("sumitomo82m12.pdf") 
//     }
//   ],
//   5: [
//     { 
//         image: mediaUrl.image("img15.jpg"), 
//         title: "FC8R", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("FC8R.pdf")  
//       },

//       { 
//         image: mediaUrl.image("S-70.png"), 
//         title: "S-70", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("S-70.pdf")  
//       },

//       { 
//         image: mediaUrl.image("FC7LS.png"), 
//         title: "FC-7LS", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("F7LS.pdf")  
//       }
//   ],

//   6: [
//     { 
//         image: mediaUrl.image("img15.jpg"), 
//         title: "SFCS", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("cleaver.pdf")  
//       },

//       { 
//         image: mediaUrl.image("FC-6S.png"), 
//         title: "FC-6 Series", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("cleaver.pdf")  
//       }
//   ]
// };

// const tabs = [
//   { id: 1, label: "Sumitomo Product & Accesseries" },
//   { id: 2, label: "Clad Fusion Splicer" },
//   { id: 3, label: "Core Fusion Splicer" },
//   { id: 4, label: "Ribbon Fusion Splicer" },
//   { id: 5, label: "Handheld Cleaver" },
//   { id: 6, label: "Tabletop Cleaver" }
// ];

// const Sumitomoproduct = () => {
//   const [activeButton, setActiveButton] = useState(1);

//   return (
//     <div className="sumitomoproduct-page-main">
//       <div className="product-page">
//         {/* Tabs */}
//         <div className="product-page-controls">
//           {tabs.map((tab) => (
//             <div
//               key={tab.id}
//               className={`button-size ${activeButton === tab.id ? "active" : ""} ${tab.id === 1 ? "special-tab" : ""}`}
//               onClick={() => setActiveButton(tab.id)}
//             >
//               <div className="button-btn">
//                 <h4>{tab.label}</h4>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Products */}
//         <div className="product-grid">
//           {productData[activeButton]?.map((product, index) => (
//             <div
//               key={index}
//               className="card"
//               onClick={() => product.readMoreLink && (window.location.href = product.readMoreLink)}
//               style={{ cursor: product.readMoreLink ? 'pointer' : 'default' }}
//             >
//               {product.image && (
//                 <img loading="lazy" src={product.image} alt={product.title} className="card-image" />
//               )}

//               <h2 className="card-title">{product.title}</h2>
//               <p className="card-description">{product.description}</p>

//               <Link to="/contact" className="card-btn-main" onClick={(e) => e.stopPropagation()}>
//                 Enquire Now
//               </Link>

//               <div className="card-buttons" onClick={(e) => e.stopPropagation()}>
//                 {product.readMoreLink && (
//                   <Link to={product.readMoreLink} className="card-btn-secondary">
//                      <span className="desktop-text">Read More</span>
//                                     <span className="top-text">Read</span>
//                      <span className="bottom-text">More</span>
//                   </Link>
//                 )}

//                 {product.catalogLink && (
//                   <a
//                     href={product.catalogLink}
//                     className="card-btn-secondary"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     download
//                   >
//                      <span className="desktop-text">Download Catalog</span>
//                                     <span className="top-text">Download</span>
//                      <span className="bottom-text">Catalog</span>

//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sumitomoproduct;






// import React, { useState } from 'react';  
// import { Link } from 'react-router-dom';
// import './Sumitomo.css';
// import mediaUrl.image("s1vp.png") from '../../../../assets/images/s1vp.png';
// import mediaUrl.image("s1vuf.png") from '../../../../assets/images/s1vuf.png';
// import mediaUrl.image("Z2C.png") from './img-s/Z2C.png';
// import mediaUrl.image("82C+.png") from './img-s/82C+.png';
// import mediaUrl.image("82M12.png") from './img-s/82M12.png';
// import mediaUrl.image("w1c.png") from './img-s/mediaUrl.image("w1c.png").png';
// import mediaUrl.image("img15.jpg") from './img-s/FC-8R.png';
// import mediaUrl.image("SFCS.png") from './img-s/SFCS.png';
// import mediaUrl.doc("sumitomos1v.pdf") from '../../../../assets/images/sumitomos1v.pdf';
// import mediaUrl.doc("sumitomos1vu.pdf") from '../../../../assets/images/sumitomos1vu.pdf';
// import mediaUrl.doc("Sumitomoz2c.pdf") from '../../../../assets/images/Sumitomoz2c.pdf';
// import mediaUrl.doc("sumitomow1c.pdf") from '../../../../assets/images/sumitomow1c.pdf';
// import mediaUrl.doc("sumitomo82cplus.pdf") from '../../../../assets/images/sumitomo82cplus.pdf';
// import mediaUrl.doc("sumitomo82m12.pdf") from '../../../../assets/images/sumitomo82m12.pdf';
// import mediaUrl.image("FC-6S.png") from '../../../../assets/images/FC-6S.png';
// import mediaUrl.image("FC7LS.png") from '../../../../assets/images/FC7LS.png';
// import mediaUrl.image("S-70.png") from "../../../../assets/images/S-70.png";
// import mediaUrl.doc("S-70.pdf") from '../../../../assets/images/S-70.pdf';
// import mediaUrl.doc("F7LS.pdf") from '../../../../assets/images/F7LS.pdf';
// import mediaUrl.doc("FC8R.pdf") from '../../../../assets/images/FC8R.pdf';
// import mediaUrl.doc("cleaver.pdf") from '../../../../assets/images/mediaUrl.doc("cleaver.pdf").pdf'

// const productData = {
//   1: [
//     { 
//       image: mediaUrl.image("s1vp.png"), 
//       title: "S1V", 
//       description: " Active Clad Fusion Splicer", 
//       readMoreLink: "/sumitomo/S1V",
//       catalogLink: mediaUrl.doc("sumitomos1v.pdf") 
//     },
//     { 
//       image: mediaUrl.image("s1vuf.png"), 
//       title: "S1V ULTRA", 
//       description: "Active Clad Fusion Splicer", 
//       readMoreLink: "/sumitomo/S1VULTRA",
//       catalogLink: mediaUrl.doc("sumitomos1vu.pdf")  
//     },
//     { 
//       image: mediaUrl.image("Z2C.png"), 
//       title: "Z2C", 
//       description: "Core Fusion Splicer", 
//       readMoreLink: "/sumitomo/Z2C",
//       catalogLink: mediaUrl.doc("Sumitomoz2c.pdf")  
//     },
//     { 
//         image: mediaUrl.image("w1c.png"), 
//         title: "W1C", 
//         description: "Core  Fusion Splicer", 
//         readMoreLink: "/sumitomo/W1C",
//         catalogLink: mediaUrl.doc("sumitomow1c.pdf")  
//       },
//     { 
//       image: mediaUrl.image("82C+.png"), 
//       title: "82C+", 
//       description: "Core  Fusion Splicer", 
//       readMoreLink: "/sumitomo/82CPLUS" ,
//       catalogLink: mediaUrl.doc("sumitomo82cplus.pdf") 
//     },

//     { 
//         image: mediaUrl.image("82M12.png"), 
//         title: "82M12", 
//         description: "Ribbon Fusion Splicer", 
//         readMoreLink: "/sumitomo/82M12",
//         catalogLink: mediaUrl.doc("sumitomo82m12.pdf") 
//       },

//       { 
//         image: mediaUrl.image("img15.jpg"), 
//         title: "FC8R", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/FC8R",
//         catalogLink: mediaUrl.doc("FC8R.pdf") 
//       },

//       { 
//         image: mediaUrl.image("S-70.png"), 
//         title: "S-70", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/S70",
//         catalogLink: mediaUrl.doc("S-70.pdf")  
//       },

//       { 
//         image: mediaUrl.image("FC7LS.png"), 
//         title: "FC-7LS", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/FC7LS",
//         catalogLink: mediaUrl.doc("F7LS.pdf") 
//       },

//       { 
//         image: mediaUrl.image("SFCS.png"), 
//         title: "SFCS", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "/sumitomo/SFCS",
//         catalogLink: mediaUrl.doc("cleaver.pdf")  
//       },

//       { 
//         image: mediaUrl.image("FC-6S.png"), 
//         title: "FC-6 Series", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "/sumitomo/FC6S",
//         catalogLink: mediaUrl.doc("cleaver.pdf")  
//       }
//   ],
//   2: [
//     { 
//         image: mediaUrl.image("s1vp.png"), 
//         title: "S1V", 
//         description: " Active Clad Fusion Splicer", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("sumitomos1v.pdf") 
//       },
//       { 
//         image: mediaUrl.image("s1vuf.png"), 
//         title: "S1V ULTRA", 
//         description: "Active Clad Fusion Splicer", 
//         readMoreLink: "" ,
//         catalogLink: mediaUrl.doc("sumitomos1vu.pdf") 
//       }
//   ],
//   3: [
//     { 
//         image: mediaUrl.image("Z2C.png"), 
//         title: "Z2C", 
//         description: "Core Alignment Fusion Splicer", 
//         readMoreLink: "" ,
//         catalogLink: mediaUrl.doc("Sumitomoz2c.pdf") 
//       },
//       { 
//           image: mediaUrl.image("w1c.png"), 
//           title: "W1C", 
//           description: "Core Alignment Fusion Splicer", 
//           readMoreLink: "" ,
//           catalogLink: mediaUrl.doc("sumitomow1c.pdf") 
//         },
//       { 
//         image: mediaUrl.image("82C+.png"), 
//         title: "82C+", 
//         description: "Core Alignment Fusion Splicer", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("sumitomo82cplus.pdf")  
//       }
//   ],
//   4: [
//     { 
//       image: mediaUrl.image("82M12.png"), 
//       title: "82M12", 
//       description: "Ribbon Fusion Splicer", 
//       readMoreLink: "",
//       catalogLink: mediaUrl.doc("sumitomo82m12.pdf") 
//     }
//   ],
//   5: [
//     { 
//         image: mediaUrl.image("img15.jpg"), 
//         title: "FC8R", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("FC8R.pdf")  
//       },

//       { 
//         image: mediaUrl.image("S-70.png"), 
//         title: "S-70", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("S-70.pdf")  
//       },

//       { 
//         image: mediaUrl.image("FC7LS.png"), 
//         title: "FC-7LS", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("F7LS.pdf")  
//       }
//   ],

//   6: [
//     { 
//         image: mediaUrl.image("img15.jpg"), 
//         title: "SFCS", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("cleaver.pdf")  
//       },

//       { 
//         image: mediaUrl.image("FC-6S.png"), 
//         title: "FC-6 Series", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "",
//         catalogLink: mediaUrl.doc("cleaver.pdf")  
//       }
//   ]
// };

// const tabs = [
//   { id: 1, label: "Sumitomo Product & Accesseries" },
//   { id: 2, label: "Clad Fusion Splicer" },
//   { id: 3, label: "Core Fusion Splicer" },
//   { id: 4, label: "Ribbon Fusion Splicer" },
//   { id: 5, label: "Handheld Cleaver" },
//   { id: 6, label: "Tabletop Cleaver" }
// ];

// const Sumitomoproduct = () => {
//   const [activeButton, setActiveButton] = useState(1);

//   return (

//     <div className="sumitomoproduct-page-main">

//       <div className="product-page">

//         <div className="product-page-controls">
//           {tabs.map((tab) => (
//             <div
//               key={tab.id}
//               className={`button-size ${activeButton === tab.id ? "active" : ""} ${tab.id === 1 ? "special-tab" : ""}`}
//               onClick={() => setActiveButton(tab.id)}
//             >
//               <div className="button-btn">
//                 <h4>{tab.label}</h4>
//               </div>
//             </div>
//           ))}
//         </div>


//         {/* Products */}
//         <div className="product-grid">
//           {productData[activeButton]?.map((product, index) => (
//             <div
//               key={index}
//               className="card"
//               onClick={() => product.readMoreLink && (window.location.href = product.readMoreLink)}
//               style={{ cursor: product.readMoreLink ? 'pointer' : 'default' }}
//             >
//               {product.image && (
//                 <img loading="lazy" src={product.image} alt={product.title} className="card-image" />
//               )}

//               <h2 className="card-title">{product.title}</h2>
//               <p className="card-description">{product.description}</p>

//               <Link to="/contact" className="card-btn-main" onClick={(e) => e.stopPropagation()}>
//                 Enquire Now
//               </Link>

//               <div className="card-buttons" onClick={(e) => e.stopPropagation()}>
//                 {product.readMoreLink && (
//                   <Link to={product.readMoreLink} className="card-btn-secondary">
//                      <span className="desktop-text">Read More</span>
//                                     <span className="top-text">Read</span>
//                      <span className="bottom-text">More</span>
//                   </Link>
//                 )}

//                 {product.catalogLink && (
//                   <a
//                     href={product.catalogLink}
//                     className="card-btn-secondary"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     download
//                   >
//                      <span className="desktop-text">Download Catalog</span>
//                                     <span className="top-text">Download</span>
//                      <span className="bottom-text">Catalog</span>

//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sumitomoproduct;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Sumitomo.css';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';


const productData = {
  1: [
    {
      image: mediaUrl.image("s1vp.png"),
      title: 'S1V',
      description: ' Active Clad Fusion Splicer',
      readMoreLink: '/sumitomo/S1V',
      catalogLink: mediaUrl.doc("sumitomos1v.pdf"),
    },
    {
      image: mediaUrl.image("s1vuf.png"),
      title: 'S1V ULTRA',
      description: 'Active Clad Fusion Splicer',
      readMoreLink: '/sumitomo/S1VULTRA',
      catalogLink: mediaUrl.doc("sumitomos1vu.pdf"),
    },
    {
      image: mediaUrl.image("Z2C.jpg"),
      title: 'Z2C',
      description: 'Core Fusion Splicer',
      readMoreLink: '/sumitomo/Z2C',
      catalogLink: mediaUrl.doc("Sumitomoz2c.pdf"),
    },
    {
      image: mediaUrl.image("w1c-machine.png"),
      title: 'W1C',
      description: 'Core  Fusion Splicer',
      readMoreLink: '/sumitomo/W1C',
      catalogLink: mediaUrl.doc("sumitomow1c.pdf"),
    },
    {
      image: mediaUrl.image("82C+.png"),
      title: '82C+',
      description: 'Core  Fusion Splicer',
      readMoreLink: '/sumitomo/82CPLUS',
      catalogLink: mediaUrl.doc("sumitomo82cplus.pdf"),
    },
    {
      image: mediaUrl.image("82m12.png"),
      title: '82M12',
      description: 'Ribbon Fusion Splicer',
      readMoreLink: '/sumitomo/82M12',
      catalogLink: mediaUrl.doc("sumitomo82m12.pdf"),
    },
    {
      image: mediaUrl.image("FC8r.png"),
      title: 'FC8R',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/FC8R',
      catalogLink: mediaUrl.doc("FC8R.pdf"),
    },
    {
      image: mediaUrl.image("S-70.png"),
      title: 'S-70',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/S70',
      catalogLink: mediaUrl.doc("S-70.pdf"),
    },
    {
      image: mediaUrl.image("FC7LS.png"),
      title: 'FC-7LS',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/FC7LS',
      catalogLink: mediaUrl.doc("F7LS.pdf"),
    },
    {
      image: mediaUrl.image("SFCS.png"),
      title: 'SFCS',
      description: 'Tabletop Cleaver',
      readMoreLink: '/sumitomo/SFCS',
      catalogLink: mediaUrl.doc("cleaver.pdf"),
    },
    {
      image: mediaUrl.image("FC-6S.png"),
      title: 'FC-6 Series',
      description: 'Tabletop Cleaver',
      readMoreLink: '/sumitomo/FC6S',
      catalogLink: mediaUrl.doc("cleaver.pdf"),
    },
  ],
  2: [
    {
      image: mediaUrl.image("s1vp.png"),
      title: 'S1V',
      description: ' Active Clad Fusion Splicer',
      readMoreLink: '/sumitomo/S1V',
      catalogLink: mediaUrl.doc("sumitomos1v.pdf"),
    },
    {
      image: mediaUrl.image("s1vuf.png"),
      title: 'S1V ULTRA',
      description: 'Active Clad Fusion Splicer',
      readMoreLink: '/sumitomo/S1VULTRA',
      catalogLink: mediaUrl.doc("sumitomos1vu.pdf"),
    },
  ],
  3: [
    {
      image: mediaUrl.image("Z2C.jpg"),
      title: 'Z2C',
      description: 'Core Alignment Fusion Splicer',
      readMoreLink: '/sumitomo/Z2C',
      catalogLink: mediaUrl.doc("Sumitomoz2c.pdf"),
    },
    {
      image: mediaUrl.image("w1c-machine.png"),
      title: 'W1C',
      description: 'Core Alignment Fusion Splicer',
      readMoreLink: '/sumitomo/W1C',
      catalogLink: mediaUrl.doc("sumitomow1c.pdf"),
    },
    {
      image: mediaUrl.image("82C+.png"),
      title: '82C+',
      description: 'Core Alignment Fusion Splicer',
      readMoreLink: '/sumitomo/82CPLUS',
      catalogLink: mediaUrl.doc("sumitomo82cplus.pdf"),
    },
  ],
  4: [
    {
      image: mediaUrl.image("82m12.png"),
      title: '82M12',
      description: 'Ribbon Fusion Splicer',
      readMoreLink: '/sumitomo/82M12',
      catalogLink: mediaUrl.doc("sumitomo82m12.pdf"),
    },
  ],
  5: [
    {
      image: mediaUrl.image("FC8r.png"),
      title: 'FC8R',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/FC8R',
      catalogLink: mediaUrl.doc("FC8R.pdf"),
    },
    {
      image: mediaUrl.image("S-70.png"),
      title: 'S-70',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/S70',
      catalogLink: mediaUrl.doc("S-70.pdf"),
    },
    {
      image: mediaUrl.image("FC7LS.png"),
      title: 'FC-7LS',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/FC7LS',
      catalogLink: mediaUrl.doc("F7LS.pdf"),
    },
  ],
  6: [
    {
      image: mediaUrl.image("SFCS.png"),
      title: 'SFCS',
      description: 'Tabletop Cleaver',
      readMoreLink: '/sumitomo/SFCS',
      catalogLink: mediaUrl.doc("cleaver.pdf"),
    },
    {
      image: mediaUrl.image("FC-6S.png"),
      title: 'FC-6 Series',
      description: 'Tabletop Cleaver',
      readMoreLink: '/sumitomo/FC6S',
      catalogLink: mediaUrl.doc("cleaver.pdf"),
    },
  ],
};

const tabs = [
  { id: 1, label: 'All Products' },
  { id: 2, label: 'Clad Fusion Splicer' },
  { id: 3, label: 'Core Fusion Splicer' },
  { id: 4, label: 'Ribbon Fusion Splicer' },
  { id: 5, label: 'Handheld Cleaver' },
  { id: 6, label: 'Tabletop Cleaver' },
];

const Sumitomoproduct = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [enquireModal, setEnquireModal] = useState(null);


  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFilterOpen]);

  const handleFilterSelect = (tabId) => {
    setActiveButton(tabId);
    setIsFilterOpen(false);
  };

  return (
    <div className="sumitomoproduct-page-main">
      {/* Banner section */}
      <div className="sumitomo-page-banner">
        <img src={mediaUrl.image("sumitomoproduct5.webp")} fetchpriority="high" alt="Sumitomo Splicing Products" />
      </div>

      <div className="product-page">
        {/* Desktop Sidebar Controls */}
        <div className="product-page-controls">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`button-size ${activeButton === tab.id ? 'active' : ''} ${tab.id === 1 ? 'special-tab' : ''
                }`}
              onClick={() => setActiveButton(tab.id)}
            >
              <div className="button-btn">
                <h4>{tab.label}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid */}
        <div className="product-grid">
          {productData[activeButton]?.map((product, index) => (
            <div
              key={index}
              className="card"
              onClick={() =>
                product.readMoreLink && (window.location.href = product.readMoreLink)
              }
              style={{ cursor: product.readMoreLink ? 'pointer' : 'default' }}
            >
              {product.image && (
                <img
                  src={product.image}
                  loading={index < 6 ? "eager" : "lazy"}
                  fetchpriority={index < 6 ? "high" : "auto"}
                  alt={product.title}
                  className="card-image"
                />
              )}

              <h2 className="card-title">{product.title}</h2>
              <p className="card-description">{product.description}</p>

              <button
                className="card-btn-main"
                onClick={(e) => {
                  e.stopPropagation();
                  setEnquireModal(product.title);
                }}
              >
                Enquire Now
              </button>

              {/* Updated Links Section - Styled as text links */}
              {/* Updated Links Section - No Separator, Closer to Button */}
              <div className="card-links" onClick={(e) => e.stopPropagation()}>
                {product.readMoreLink && (
                  <Link to={product.readMoreLink} className="card-text-link">

                    <span>Read More</span>
                  </Link>
                )}

                {/* {product.catalogLink && (
    <a
      href={product.catalogLink}
      className="card-text-link"
      target="_blank"
      rel="noopener noreferrer"
      download
    >
    
      <span>Catalog</span>
    </a>
  )} */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Filter Button - Mobile Only */}
      <button
        className="floating-filter-btn"
        onClick={() => setIsFilterOpen(true)}
        aria-label="Open filters"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"

          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
        </svg>
        <span >Filter</span>
      </button>

      {/* Mobile Filter Modal/Overlay */}
      <div
        className={`mobile-filter-overlay ${isFilterOpen ? 'open' : ''}`}
        onClick={() => setIsFilterOpen(false)}
      >
        <div className="mobile-filter-modal" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-filter-header-modal">
            <h3>Filter Products</h3>
            <button className="close-filter-btn" onClick={() => setIsFilterOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div className="mobile-filter-options">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`mobile-filter-option ${activeButton === tab.id ? 'active' : ''}`}
                onClick={() => handleFilterSelect(tab.id)}
              >
                <span>{tab.label}</span>
                {activeButton === tab.id && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <ProductLeadModal
        isOpen={!!enquireModal}
        onClose={() => setEnquireModal(null)}
        pageName={`Optronix Sumitomo – ${enquireModal}`}
      />

    </div>
  );
};

export default Sumitomoproduct;