import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../../components/index.css';
import '../../sumitomo/components/Sumitomo.css';
import '../../../../components/layout/Footer.css';
import bannerImage from '../../../../assets/images/Optronix PON.jpeg'; // You'll need to add this image
import ProductLeadModal from '../../../../components/common/ProductLeadModal';


import op01 from "../../../../assets/images/OP1008P.png";
import op02 from "../../../../assets/images/op2.png";
import gpon8g from "../../../../assets/images/ponimg2.png";
import gpon16 from "../../../../assets/images/gpon16.png";
import gpon4 from "../../../../assets/images/gpon4.png"
import px20 from "../../../../assets/images/px20++.png";
import cccc from "../../../../assets/images/c++.png";
import op101x from '../../../../assets/images/OP-101Xp.png';
import op801g from '../../../../assets/images/OP801.png';
import op821gwv from '../../../../assets/images/Op821GWV.png';
import op821gwvd from '../../../../assets/images/fem router-01.png';
import op821gwvd1 from '../../../../assets/images/OP821GWV-D.png';
import op821gwvdgb from '../../../../assets/images/wifi8-removebg-preview.png';

import op100p16gpdf from '../../../../assets/images/OP100P16G.pdf';
import op100p8gpdf from '../../../../assets/images/OP100P8G.pdf';
import op100p8pdf from '../../../../assets/images/OP100P8.pdf';
import op100p4pdf from '../../../../assets/images/OP100P4.pdf';
import op100p4gpdf from '../../../../assets/images/OP-100P4G.pdf';
import op101xpdf from '../../../../assets/images/op101x.pdf';

import op821gwvdpdf from '../../../../assets/images/OP821GWV-D with FEM.pdf';
import op821gwvpdf from '../../../../assets/images/op821gwv.pdf';
import op801gwpdf from '../../../../assets/images/op801gw.pdf';

const productData = {
  1: [
    {
      image: gpon16,
      title: "OP-100P16G",
      description: "GPON 16 PORT OLT",
      readMoreLink: "/optronix-pon/OP-100P16G",
      catalogLink: op100p16gpdf
    },
    {
      image: gpon8g,
      title: "OP-100P8G",
      description: "GPON 8 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P8G",
      catalogLink: op100p8gpdf
    },
    {
      image: gpon4,
      title: "OP-100P4G",
      description: "GPON 4 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P4G",
      catalogLink: op100p4gpdf
    },
    {
      image: op01,
      title: "OP100P8",
      description: "EPON 8 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P8",
      catalogLink: op100p8pdf
    },
    {
      image: op02,
      title: "OP100P4",
      description: "EPON 4 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P4",
      catalogLink: op100p4pdf
    },
    {
      image: px20,
      title: "PX20++++",
      description: "EPON SFP +9dBm",

    },
    {
      image: cccc,
      title: "C++++",
      description: "GPON SFP +9dBm",

    },


    {
      image: op821gwvd,
      title: "OP821GWV-D FEM",
      description: "Dual Band ONU",
      readMoreLink: "/optronix-pon/OP821GWVDGB",
      catalogLink: op821gwvdpdf
    },
    {
      image: op821gwvd1,
      title: "OP821GW-D",
      description: "Dual Band ONU",
      readMoreLink: "/optronix-pon/OP821GWVD",
      catalogLink: op821gwvdpdf
    },
    {
      image: op821gwv,
      title: "OP821GWV",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP821GWV",
      catalogLink: op821gwvpdf
    },
    {
      image: op801g,
      title: "OP801GW",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP801GW",
      catalogLink: op801gwpdf
    },
    {
      image: op101x,
      title: "OP-101X",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP101X",
      catalogLink: op101xpdf
    }
  ],
  2: [
    {
      image: gpon16,
      title: "OP-100P16G",
      description: "GPON 16 PORT OLT",
      readMoreLink: "/optronix-pon/OP-100P16G",
      catalogLink: op100p16gpdf
    },
    {
      image: op01,
      title: "OP-100P8G",
      description: "GPON 8 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P8G",
      catalogLink: op100p8gpdf
    },
    {
      image: op01,
      title: "OP-100P4G",
      description: "GPON 4 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P4G",
      catalogLink: op100p4pdf
    }
  ],
  3: [
    {
      image: op01,
      title: "OP100P8",
      description: "EPON 8 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P8",
      catalogLink: op100p8pdf
    },
    {
      image: gpon16,
      title: "OP100P4",
      description: "EPON 4 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P4",
      catalogLink: op100p4pdf
    }
  ],
  4: [
    {
      image: px20,
      title: "EPON PX20++++",
      description: "High-power EPON PX20++ module.",

    },
    {
      image: cccc,
      title: "GPON C++++",
      description: "Reliable GPON C++++ SFP module.",

    }
  ],
  5: [


    {
      image: op821gwvd,
      title: "OP821GWV-D FEM",
      description: "Dual Band ONU",
      readMoreLink: "/optronix-pon/OP821GWVDGB",
      catalogLink: op821gwvdpdf
    },
    {
      image: op821gwvd,
      title: "OP821GW-D",
      description: "Dual Band ONU",
      readMoreLink: "/optronix-pon/OP821GWVD",
      catalogLink: op821gwvdpdf
    },
    {
      image: op821gwv,
      title: "OP821GWV",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP821GWV",
      catalogLink: op821gwvpdf
    },
    {
      image: op801g,
      title: "OP801GW",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP801GW",
      catalogLink: op801gwpdf
    },
    {
      image: op101x,
      title: "OP-101X",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP101X",
      catalogLink: op101xpdf
    }
  ]
};

const tabs = [
  { id: 1, label: "PON Products" },
  { id: 2, label: "GPON OLT" },
  { id: 3, label: "EPON OLT" },
  { id: 4, label: "PON SFP" },
  { id: 5, label: "XPON ONT" }
];

const Optronixponproduct = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [enquireModal, setEnquireModal] = useState(null);


  // lock body scroll when mobile filter is open
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
    <div className="optronixponproduct-page-main">
      {/* Banner Section */}
      <div className="optronixpon-page-banner">
        <img src={bannerImage} fetchpriority="high" alt="Optronix PON Products" className="banner-image" />
      </div>
      <div className="optronixponproduct-page-upperline"></div>
      <div className="product-page">

        {/* Tabs / Desktop Sidebar */}
        <div className="product-page-controls">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`button-size ${activeButton === tab.id ? "active" : ""} ${tab.id === 1 ? "special-tab" : ""}`}
              onClick={() => setActiveButton(tab.id)}
            >
              <div className="button-btn">
                <h4>{tab.label}</h4>
              </div>
            </div>
          ))}
        </div>

        <div className="product-grid">
          {productData[activeButton]?.map((product, index) => (
            <div
              key={index}
              className={`card ${product.title === 'C++++' ? 'c-plus-card' : ''} ${product.title === 'PX20++++' ? 'px20-card' : ''}`}
              onClick={() => product.readMoreLink && (window.location.href = product.readMoreLink)}
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
                onClick={e => {
                  e.stopPropagation();
                  setEnquireModal(product.title);
                }}
              >
                Enquire Now
              </button>

              <div className="card-links" onClick={(e) => e.stopPropagation()}>
                {product.readMoreLink && (
                  <Link to={product.readMoreLink} className="card-text-link">
                    <span>Read More</span>
                  </Link>
                )}

                {/* Catalog download left commented intentionally */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductLeadModal
        isOpen={!!enquireModal}
        onClose={() => setEnquireModal(null)}
        pageName={`Optronix PON – ${enquireModal}`}
      />


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
        <span>Filter</span>
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
    </div>
  );
};

export default Optronixponproduct;
