// import React, { useState } from 'react';  
// import { Link } from 'react-router-dom';
// import './Sumitomo.css';
// import S1v from '../img/s1vp.png';
// import S1v_ultra from '../img/s1vuf.png';
// import Z2c from './img-s/Z2C.png';
// import new82c from './img-s/82C+.png';
// import n82m2 from './img-s/82M12.png';
// import w1c from './img-s/w1c.png';
// import fc8r from './img-s/FC-8R.png';
// import sfcs from './img-s/SFCS.png';
// import s1vpdf from '../img/sumitomos1v.pdf';
// import s1vupdf from '../img/sumitomos1vu.pdf';
// import z2cpdf from '../img/Sumitomoz2c.pdf';
// import w1cpdf from '../img/sumitomow1c.pdf';
// import new82cpdf from '../img/sumitomo82cplus.pdf';
// import n82m12pdf from '../img/sumitomo82m12.pdf';
// import fc6s from '../img/FC-6S.png';
// import fc7ls from '../img/FC7LS.png';
// import s70 from "../img/S-70.png";
// import s70pdf from '../img/S-70.pdf';
// import f7lspdf from '../img/F7LS.pdf';
// import fc8rpdf from '../img/FC8R.pdf';
// import cleaver from '../img/cleaver.pdf'

// const productData = {
//   1: [
//     { 
//       image: S1v, 
//       title: "S1V", 
//       description: " Active Clad Fusion Splicer", 
//       readMoreLink: "/sumitomo/S1V",
//       catalogLink: s1vpdf 
//     },
//     { 
//       image: S1v_ultra, 
//       title: "S1V ULTRA", 
//       description: "Active Clad Fusion Splicer", 
//       readMoreLink: "/sumitomo/S1VULTRA",
//       catalogLink: s1vupdf  
//     },
//     { 
//       image: Z2c, 
//       title: "Z2C", 
//       description: "Core Fusion Splicer", 
//       readMoreLink: "/sumitomo/Z2C",
//       catalogLink: z2cpdf  
//     },
//     { 
//         image: w1c, 
//         title: "W1C", 
//         description: "Core  Fusion Splicer", 
//         readMoreLink: "/sumitomo/W1C",
//         catalogLink: w1cpdf  
//       },
//     { 
//       image: new82c, 
//       title: "82C+", 
//       description: "Core  Fusion Splicer", 
//       readMoreLink: "/sumitomo/82CPLUS" ,
//       catalogLink: new82cpdf 
//     },

//     { 
//         image: n82m2, 
//         title: "82M12", 
//         description: "Ribbon Fusion Splicer", 
//         readMoreLink: "/sumitomo/82M12",
//         catalogLink: n82m12pdf 
//       },

//       { 
//         image: fc8r, 
//         title: "FC8R", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/FC8R",
//         catalogLink: fc8rpdf 
//       },

//       { 
//         image: s70, 
//         title: "S-70", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/S70",
//         catalogLink: s70pdf  
//       },

//       { 
//         image: fc7ls, 
//         title: "FC-7LS", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/FC7LS",
//         catalogLink: f7lspdf 
//       },

//       { 
//         image: sfcs, 
//         title: "SFCS", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "/sumitomo/SFCS",
//         catalogLink: cleaver  
//       },

//       { 
//         image: fc6s, 
//         title: "FC-6 Series", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "/sumitomo/FC6S",
//         catalogLink: cleaver  
//       }
//   ],
//   2: [
//     { 
//         image: S1v, 
//         title: "S1V", 
//         description: " Active Clad Fusion Splicer", 
//         readMoreLink: "",
//         catalogLink: s1vpdf 
//       },
//       { 
//         image: S1v_ultra, 
//         title: "S1V ULTRA", 
//         description: "Active Clad Fusion Splicer", 
//         readMoreLink: "" ,
//         catalogLink: s1vupdf 
//       }
//   ],
//   3: [
//     { 
//         image: Z2c, 
//         title: "Z2C", 
//         description: "Core Alignment Fusion Splicer", 
//         readMoreLink: "" ,
//         catalogLink: z2cpdf 
//       },
//       { 
//           image: w1c, 
//           title: "W1C", 
//           description: "Core Alignment Fusion Splicer", 
//           readMoreLink: "" ,
//           catalogLink: w1cpdf 
//         },
//       { 
//         image: new82c, 
//         title: "82C+", 
//         description: "Core Alignment Fusion Splicer", 
//         readMoreLink: "",
//         catalogLink: new82cpdf  
//       }
//   ],
//   4: [
//     { 
//       image: n82m2, 
//       title: "82M12", 
//       description: "Ribbon Fusion Splicer", 
//       readMoreLink: "",
//       catalogLink: n82m12pdf 
//     }
//   ],
//   5: [
//     { 
//         image: fc8r, 
//         title: "FC8R", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: fc8rpdf  
//       },

//       { 
//         image: s70, 
//         title: "S-70", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: s70pdf  
//       },

//       { 
//         image: fc7ls, 
//         title: "FC-7LS", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: f7lspdf  
//       }
//   ],

//   6: [
//     { 
//         image: fc8r, 
//         title: "SFCS", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "",
//         catalogLink: cleaver  
//       },

//       { 
//         image: fc6s, 
//         title: "FC-6 Series", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "",
//         catalogLink: cleaver  
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
//                 <img src={product.image} alt={product.title} className="card-image" />
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
// import S1v from '../img/s1vp.png';
// import S1v_ultra from '../img/s1vuf.png';
// import Z2c from './img-s/Z2C.png';
// import new82c from './img-s/82C+.png';
// import n82m2 from './img-s/82M12.png';
// import w1c from './img-s/w1c.png';
// import fc8r from './img-s/FC-8R.png';
// import sfcs from './img-s/SFCS.png';
// import s1vpdf from '../img/sumitomos1v.pdf';
// import s1vupdf from '../img/sumitomos1vu.pdf';
// import z2cpdf from '../img/Sumitomoz2c.pdf';
// import w1cpdf from '../img/sumitomow1c.pdf';
// import new82cpdf from '../img/sumitomo82cplus.pdf';
// import n82m12pdf from '../img/sumitomo82m12.pdf';
// import fc6s from '../img/FC-6S.png';
// import fc7ls from '../img/FC7LS.png';
// import s70 from "../img/S-70.png";
// import s70pdf from '../img/S-70.pdf';
// import f7lspdf from '../img/F7LS.pdf';
// import fc8rpdf from '../img/FC8R.pdf';
// import cleaver from '../img/cleaver.pdf'

// const productData = {
//   1: [
//     { 
//       image: S1v, 
//       title: "S1V", 
//       description: " Active Clad Fusion Splicer", 
//       readMoreLink: "/sumitomo/S1V",
//       catalogLink: s1vpdf 
//     },
//     { 
//       image: S1v_ultra, 
//       title: "S1V ULTRA", 
//       description: "Active Clad Fusion Splicer", 
//       readMoreLink: "/sumitomo/S1VULTRA",
//       catalogLink: s1vupdf  
//     },
//     { 
//       image: Z2c, 
//       title: "Z2C", 
//       description: "Core Fusion Splicer", 
//       readMoreLink: "/sumitomo/Z2C",
//       catalogLink: z2cpdf  
//     },
//     { 
//         image: w1c, 
//         title: "W1C", 
//         description: "Core  Fusion Splicer", 
//         readMoreLink: "/sumitomo/W1C",
//         catalogLink: w1cpdf  
//       },
//     { 
//       image: new82c, 
//       title: "82C+", 
//       description: "Core  Fusion Splicer", 
//       readMoreLink: "/sumitomo/82CPLUS" ,
//       catalogLink: new82cpdf 
//     },

//     { 
//         image: n82m2, 
//         title: "82M12", 
//         description: "Ribbon Fusion Splicer", 
//         readMoreLink: "/sumitomo/82M12",
//         catalogLink: n82m12pdf 
//       },

//       { 
//         image: fc8r, 
//         title: "FC8R", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/FC8R",
//         catalogLink: fc8rpdf 
//       },

//       { 
//         image: s70, 
//         title: "S-70", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/S70",
//         catalogLink: s70pdf  
//       },

//       { 
//         image: fc7ls, 
//         title: "FC-7LS", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "/sumitomo/FC7LS",
//         catalogLink: f7lspdf 
//       },

//       { 
//         image: sfcs, 
//         title: "SFCS", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "/sumitomo/SFCS",
//         catalogLink: cleaver  
//       },

//       { 
//         image: fc6s, 
//         title: "FC-6 Series", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "/sumitomo/FC6S",
//         catalogLink: cleaver  
//       }
//   ],
//   2: [
//     { 
//         image: S1v, 
//         title: "S1V", 
//         description: " Active Clad Fusion Splicer", 
//         readMoreLink: "",
//         catalogLink: s1vpdf 
//       },
//       { 
//         image: S1v_ultra, 
//         title: "S1V ULTRA", 
//         description: "Active Clad Fusion Splicer", 
//         readMoreLink: "" ,
//         catalogLink: s1vupdf 
//       }
//   ],
//   3: [
//     { 
//         image: Z2c, 
//         title: "Z2C", 
//         description: "Core Alignment Fusion Splicer", 
//         readMoreLink: "" ,
//         catalogLink: z2cpdf 
//       },
//       { 
//           image: w1c, 
//           title: "W1C", 
//           description: "Core Alignment Fusion Splicer", 
//           readMoreLink: "" ,
//           catalogLink: w1cpdf 
//         },
//       { 
//         image: new82c, 
//         title: "82C+", 
//         description: "Core Alignment Fusion Splicer", 
//         readMoreLink: "",
//         catalogLink: new82cpdf  
//       }
//   ],
//   4: [
//     { 
//       image: n82m2, 
//       title: "82M12", 
//       description: "Ribbon Fusion Splicer", 
//       readMoreLink: "",
//       catalogLink: n82m12pdf 
//     }
//   ],
//   5: [
//     { 
//         image: fc8r, 
//         title: "FC8R", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: fc8rpdf  
//       },

//       { 
//         image: s70, 
//         title: "S-70", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: s70pdf  
//       },

//       { 
//         image: fc7ls, 
//         title: "FC-7LS", 
//         description: "Handheld Cleaver", 
//         readMoreLink: "",
//         catalogLink: f7lspdf  
//       }
//   ],

//   6: [
//     { 
//         image: fc8r, 
//         title: "SFCS", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "",
//         catalogLink: cleaver  
//       },

//       { 
//         image: fc6s, 
//         title: "FC-6 Series", 
//         description: "Tabletop Cleaver", 
//         readMoreLink: "",
//         catalogLink: cleaver  
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
//                 <img src={product.image} alt={product.title} className="card-image" />
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
import ProductLeadModal from '../common/ProductLeadModal';

import S1v from '../img/s1vp.png';
import S1v_ultra from '../img/s1vuf.png';
import Z2c from './img-s/Z2C.png';
import new82c from './img-s/82C+.png';
import n82m2 from './img-s/82M12.png';
import w1c from './img-s/w1c.png';
import fc8r from './img-s/img15.jpg';
import sfcs from './img-s/SFCS.png';
import s1vpdf from '../img/sumitomos1v.pdf';
import s1vupdf from '../img/sumitomos1vu.pdf';
import z2cpdf from '../img/Sumitomoz2c.pdf';
import w1cpdf from '../img/sumitomow1c.pdf';
import new82cpdf from '../img/sumitomo82cplus.pdf';
import n82m12pdf from '../img/sumitomo82m12.pdf';
import fc6s from '../img/FC-6S.png';
import fc7ls from '../img/FC7LS.png';
import s70 from '../img/S-70.png';
import s70pdf from '../img/S-70.pdf';
import f7lspdf from '../img/F7LS.pdf';
import fc8rpdf from '../img/FC8R.pdf';
import cleaver from '../img/cleaver.pdf';

import sumitomoBanner from '../img/sumitomoproduct5.jpeg';

const productData = {
  1: [
    {
      image: S1v,
      title: 'S1V',
      description: ' Active Clad Fusion Splicer',
      readMoreLink: '/sumitomo/S1V',
      catalogLink: s1vpdf,
    },
    {
      image: S1v_ultra,
      title: 'S1V ULTRA',
      description: 'Active Clad Fusion Splicer',
      readMoreLink: '/sumitomo/S1VULTRA',
      catalogLink: s1vupdf,
    },
    {
      image: Z2c,
      title: 'Z2C',
      description: 'Core Fusion Splicer',
      readMoreLink: '/sumitomo/Z2C',
      catalogLink: z2cpdf,
    },
    {
      image: w1c,
      title: 'W1C',
      description: 'Core  Fusion Splicer',
      readMoreLink: '/sumitomo/W1C',
      catalogLink: w1cpdf,
    },
    {
      image: new82c,
      title: '82C+',
      description: 'Core  Fusion Splicer',
      readMoreLink: '/sumitomo/82CPLUS',
      catalogLink: new82cpdf,
    },
    {
      image: n82m2,
      title: '82M12',
      description: 'Ribbon Fusion Splicer',
      readMoreLink: '/sumitomo/82M12',
      catalogLink: n82m12pdf,
    },
    {
      image: fc8r,
      title: 'FC8R',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/FC8R',
      catalogLink: fc8rpdf,
    },
    {
      image: s70,
      title: 'S-70',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/S70',
      catalogLink: s70pdf,
    },
    {
      image: fc7ls,
      title: 'FC-7LS',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/FC7LS',
      catalogLink: f7lspdf,
    },
    {
      image: sfcs,
      title: 'SFCS',
      description: 'Tabletop Cleaver',
      readMoreLink: '/sumitomo/SFCS',
      catalogLink: cleaver,
    },
    {
      image: fc6s,
      title: 'FC-6 Series',
      description: 'Tabletop Cleaver',
      readMoreLink: '/sumitomo/FC6S',
      catalogLink: cleaver,
    },
  ],
  2: [
    {
      image: S1v,
      title: 'S1V',
      description: ' Active Clad Fusion Splicer',
      readMoreLink: '/sumitomo/S1V',
      catalogLink: s1vpdf,
    },
    {
      image: S1v_ultra,
      title: 'S1V ULTRA',
      description: 'Active Clad Fusion Splicer',
      readMoreLink: '/sumitomo/S1VULTRA',
      catalogLink: s1vupdf,
    },
  ],
  3: [
    {
      image: Z2c,
      title: 'Z2C',
      description: 'Core Alignment Fusion Splicer',
      readMoreLink: '/sumitomo/Z2C',
      catalogLink: z2cpdf,
    },
    {
      image: w1c,
      title: 'W1C',
      description: 'Core Alignment Fusion Splicer',
      readMoreLink: '/sumitomo/W1C',
      catalogLink: w1cpdf,
    },
    {
      image: new82c,
      title: '82C+',
      description: 'Core Alignment Fusion Splicer',
      readMoreLink: '/sumitomo/82CPLUS',
      catalogLink: new82cpdf,
    },
  ],
  4: [
    {
      image: n82m2,
      title: '82M12',
      description: 'Ribbon Fusion Splicer',
      readMoreLink: '/sumitomo/82M12',
      catalogLink: n82m12pdf,
    },
  ],
  5: [
    {
      image: fc8r,
      title: 'FC8R',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/FC8R',
      catalogLink: fc8rpdf,
    },
    {
      image: s70,
      title: 'S-70',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/S70',
      catalogLink: s70pdf,
    },
    {
      image: fc7ls,
      title: 'FC-7LS',
      description: 'Handheld Cleaver',
      readMoreLink: '/sumitomo/FC7LS',
      catalogLink: f7lspdf,
    },
  ],
  6: [
    {
      image: sfcs,
      title: 'SFCS',
      description: 'Tabletop Cleaver',
      readMoreLink: '/sumitomo/SFCS',
      catalogLink: cleaver,
    },
    {
      image: fc6s,
      title: 'FC-6 Series',
      description: 'Tabletop Cleaver',
      readMoreLink: '/sumitomo/FC6S',
      catalogLink: cleaver,
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

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const openModal = (productTitle) => {
    setSelectedProduct(productTitle);
    setIsModalOpen(true);
  };

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
        <img src={sumitomoBanner} fetchpriority="high" alt="Sumitomo Splicing Products" />
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
                  openModal(`Sumitomo - ${product.title}`);
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
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pageName={selectedProduct}
      />
    </div>
  );
};

export default Sumitomoproduct;