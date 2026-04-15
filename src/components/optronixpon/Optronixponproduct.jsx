import media_gpon16_webp from '../../assets/img2/img/gpon16.webp';
import media_OP100P16G_pdf from '../../assets/img2/img/OP100P16G.pdf';
import media_ponimg2_webp from '../../assets/img2/img/ponimg2.webp';
import media_OP100P8G_pdf from '../../assets/img2/img/OP100P8G.pdf';
import media_gpon4_webp from '../../assets/img2/img/gpon4.webp';
import media_OP_100P4G_pdf from '../../assets/img2/img/OP-100P4G.pdf';
import media_OP1008P_webp from '../../assets/img2/img/OP1008P.webp';
import media_OP100P8_pdf from '../../assets/img2/img/OP100P8.pdf';
import media_op2_webp from '../../assets/img2/img/op2.webp';
import media_OP100P4_pdf from '../../assets/img2/img/OP100P4.pdf';
import media_px20___webp from '../../assets/img2/img/px20++.webp';
import media_c___webp from '../../assets/img2/img/c++.webp';
import media_fem_router_01_webp from '../../assets/img2/img/fem router-01.webp';
import media_OP821GWV_D_with_FEM_pdf from '../../assets/img2/img/OP821GWV-D with FEM.pdf';
import media_OP821GWV_D_webp from '../../assets/img2/img/OP821GWV-D.webp';
import media_Op821GWV_webp from '../../assets/img2/img/Op821GWV.webp';
import media_op821gwv_pdf from '../../assets/img2/img/op821gwv.pdf';
import media_OP801_webp from '../../assets/img2/img/OP801.webp';
import media_op801gw_pdf from '../../assets/img2/img/op801gw.pdf';
import media_OP_101Xp_webp from '../../assets/img2/img/OP-101Xp.webp';
import media_op101x_pdf from '../../assets/img2/img/op101x.pdf';
import media_Optronix_PON_webp from '../../assets/img2/img/Optronix PON.webp';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../components/index.css';
import '../sumitomo/Sumitomo.css';
import '../Footer.css';
// You'll need to add this image
import ProductLeadModal from '../common/ProductLeadModal';

const productData = {
  1: [
    {
      image: media_gpon16_webp,
      title: "OP-100P16G",
      description: "GPON 16 PORT OLT",
      readMoreLink: "/optronix-pon/OP-100P16G",
      catalogLink: media_OP100P16G_pdf
    },
    {
      image: media_ponimg2_webp,
      title: "OP-100P8G",
      description: "GPON 8 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P8G",
      catalogLink: media_OP100P8G_pdf
    },
    {
      image: media_gpon4_webp,
      title: "OP-100P4G",
      description: "GPON 4 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P4G",
      catalogLink: media_OP_100P4G_pdf
    },
    {
      image: media_OP1008P_webp,
      title: "OP100P8",
      description: "EPON 8 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P8",
      catalogLink: media_OP100P8_pdf
    },
    {
      image: media_op2_webp,
      title: "OP100P4",
      description: "EPON 4 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P4",
      catalogLink: media_OP100P4_pdf
    },
    {
      image: media_px20___webp,
      title: "PX20++++",
      description: "EPON SFP +9dBm",

    },
    {
      image: media_c___webp,
      title: "C++++",
      description: "GPON SFP +9dBm",

    },


    {
      image: media_fem_router_01_webp,
      title: "OP821GWV-D FEM",
      description: "Dual Band ONU",
      readMoreLink: "/optronix-pon/OP821GWVDGB",
      catalogLink: media_OP821GWV_D_with_FEM_pdf
    },
    {
      image: media_OP821GWV_D_webp,
      title: "OP821GW-D",
      description: "Dual Band ONU",
      readMoreLink: "/optronix-pon/OP821GWVD",
      catalogLink: media_OP821GWV_D_with_FEM_pdf
    },
    {
      image: media_Op821GWV_webp,
      title: "OP821GWV",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP821GWV",
      catalogLink: media_op821gwv_pdf
    },
    {
      image: media_OP801_webp,
      title: "OP801GW",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP801GW",
      catalogLink: media_op801gw_pdf
    },
    {
      image: media_OP_101Xp_webp,
      title: "OP-101X",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP101X",
      catalogLink: media_op101x_pdf
    }
  ],
  2: [
    {
      image: media_gpon16_webp,
      title: "OP-100P16G",
      description: "GPON 16 PORT OLT",
      readMoreLink: "/optronix-pon/OP-100P16G",
      catalogLink: media_OP100P16G_pdf
    },
    {
      image: media_OP1008P_webp,
      title: "OP-100P8G",
      description: "GPON 8 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P8G",
      catalogLink: media_OP100P8G_pdf
    },
    {
      image: media_OP1008P_webp,
      title: "OP-100P4G",
      description: "GPON 4 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P4G",
      catalogLink: media_OP100P4_pdf
    }
  ],
  3: [
    {
      image: media_OP1008P_webp,
      title: "OP100P8",
      description: "EPON 8 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P8",
      catalogLink: media_OP100P8_pdf
    },
    {
      image: media_gpon16_webp,
      title: "OP100P4",
      description: "EPON 4 PORT OLT",
      readMoreLink: "/optronix-pon/OP100P4",
      catalogLink: media_OP100P4_pdf
    }
  ],
  4: [
    {
      image: media_px20___webp,
      title: "EPON PX20++++",
      description: "High-power EPON PX20++ module.",

    },
    {
      image: media_c___webp,
      title: "GPON C++++",
      description: "Reliable GPON C++++ SFP module.",

    }
  ],
  5: [


    {
      image: media_fem_router_01_webp,
      title: "OP821GWV-D FEM",
      description: "Dual Band ONU",
      readMoreLink: "/optronix-pon/OP821GWVDGB",
      catalogLink: media_OP821GWV_D_with_FEM_pdf
    },
    {
      image: media_fem_router_01_webp,
      title: "OP821GW-D",
      description: "Dual Band ONU",
      readMoreLink: "/optronix-pon/OP821GWVD",
      catalogLink: media_OP821GWV_D_with_FEM_pdf
    },
    {
      image: media_Op821GWV_webp,
      title: "OP821GWV",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP821GWV",
      catalogLink: media_op821gwv_pdf
    },
    {
      image: media_OP801_webp,
      title: "OP801GW",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP801GW",
      catalogLink: media_op801gw_pdf
    },
    {
      image: media_OP_101Xp_webp,
      title: "OP-101X",
      description: "Single Band ONU",
      readMoreLink: "/optronix-pon/OP101X",
      catalogLink: media_op101x_pdf
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

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const openModal = (productTitle) => {
    setSelectedProduct(productTitle);
    setIsModalOpen(true);
  };

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
        <img src={media_Optronix_PON_webp} fetchpriority="high" alt="Optronix PON Products" className="banner-image" />
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
              className={`card ${product.title === 'C++++' ? 'c-plus-card' : ''} ${product.title === 'PX20++++' ? 'media_px20___webp-card' : ''}`}
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
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(`Optronix PON - ${product.title}`);
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

      <ProductLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pageName={selectedProduct}
      />
    </div>
  );
};

export default Optronixponproduct;
