import media_DC_webp from '../../assets/img2/img/DC.webp';
import media_dropcablef_pdf from '../../assets/img2/img/media/docs/dropcablef.pdf';
import media_OptronixNeo_webp from '../../assets/img2/img/OptronixNeo.webp';
import media_NEOFIBER_pdf from '../../assets/img2/img/NEOFIBER.pdf';
import media_Optronixgold_webp from '../../assets/img2/img/Optronixgold.webp';
import media_GOLDFIBER_pdf from '../../assets/img2/img/media/docs/GOLDFIBER.pdf';
import media_Optronixgold__2__webp from '../../assets/img2/img/Optronixgold (2).webp';
import media_PLATINUMFIBER_pdf from '../../assets/img2/img/PLATINUMFIBER.pdf';
import media_Fbanner_webp from '../../assets/img2/img/Fbanner.webp';
import React, { useState, useEffect } from 'react';
import '../../index.css';
import '../sumitomo/Sumitomo.css';
import '../Footer.css';
import { Link } from 'react-router-dom';
// Using the same banner image as PON
import ProductLeadModal from '../common/ProductLeadModal';
const productData = {
  1: [
    {
<<<<<<< HEAD
      image: media_DC_webp,
=======
      image: mediaUrl.image("dc.webp"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
      title: "Optronix Flat Cable",
      description: "2F",
      readMoreLink: "/optronix-fiber/optronix-flat-cable",
      catalogLink: media_dropcablef_pdf,
    },
    {
<<<<<<< HEAD
      image: media_DC_webp,
=======
      image: mediaUrl.image("dc.webp"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
      title: "Optronix Drop Cable",
      description: "2F",
      readMoreLink: "/optronix-fiber/optronix-drop-cable",
      catalogLink: media_dropcablef_pdf,
    },
    {
<<<<<<< HEAD
      image: media_OptronixNeo_webp,
      title: "Optronix NEO",
      description: "2F, 4F, 6F, 12F",
      readMoreLink: "/optronix-fiber/optronix-neo",
      catalogLink: media_NEOFIBER_pdf,
    },
    {
      image: media_Optronixgold_webp,
      title: "Optronix Gold",
      description: "2F, 4F, 6F, 12F",
      readMoreLink: "/optronix-fiber/optronix-gold",
      catalogLink: media_GOLDFIBER_pdf,
    },
    {
      image: media_Optronixgold__2__webp,
      title: "Optronix Platinum",
      description: "2F, 4F, 6F, 12F, 24F",
      readMoreLink: "/optronix-fiber/optronix-platinum",
      catalogLink: media_PLATINUMFIBER_pdf,
=======
      image: mediaUrl.image("optronixneo.webp"),
      title: "Optronix NEO",
      description: "2F, 4F, 6F, 12F",
      readMoreLink: "/optronix-fiber/optronix-neo",
      catalogLink: mediaUrl.doc("neofiber.pdf"),
    },
    {
      image: mediaUrl.image("optronixgold.webp"),
      title: "Optronix Gold",
      description: "2F, 4F, 6F, 12F",
      readMoreLink: "/optronix-fiber/optronix-gold",
      catalogLink: mediaUrl.doc("goldfiber.pdf"),
    },
    {
      image: mediaUrl.image("optronixgold (2).webp"),
      title: "Optronix Platinum",
      description: "2F, 4F, 6F, 12F, 24F",
      readMoreLink: "/optronix-fiber/optronix-platinum",
      catalogLink: mediaUrl.doc("platinumfiber.pdf"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
    },
  ],
  2: [
    {
<<<<<<< HEAD
      image: media_DC_webp,
=======
      image: mediaUrl.image("dc.webp"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
      title: "Optronix Dropcable",
      description: "Flat Cable",
      readMoreLink: "/optronix-fiber/optronix-flat-cable",
      catalogLink: media_dropcablef_pdf,
    },
  ],
  3: [
    {
<<<<<<< HEAD
      image: media_DC_webp,
=======
      image: mediaUrl.image("dc.webp"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
      title: "Optronix Drop Cable",
      description: "2F",
      readMoreLink: "/optronix-fiber/optronix-drop-cable",
      catalogLink: media_dropcablef_pdf,
    }
  ],
  4: [
    {
<<<<<<< HEAD
      image: media_OptronixNeo_webp,
      title: "Optronix NEO",
      description: "2F, 4F, 6F, 12F",
      readMoreLink: "/optronix-fiber/optronix-neo",
      catalogLink: media_NEOFIBER_pdf,
=======
      image: mediaUrl.image("optronixneo.webp"),
      title: "Optronix NEO",
      description: "2F, 4F, 6F, 12F",
      readMoreLink: "/optronix-fiber/optronix-neo",
      catalogLink: mediaUrl.doc("neofiber.pdf"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
    },
  ],
  5: [
    {
<<<<<<< HEAD
      image: media_Optronixgold_webp,
      title: "Optronix Gold",
      description: "2F, 4F, 6F, 12F",
      readMoreLink: "/optronix-fiber/optronix-gold",
      catalogLink: media_GOLDFIBER_pdf,
=======
      image: mediaUrl.image("optronixgold.webp"),
      title: "Optronix Gold",
      description: "2F, 4F, 6F, 12F",
      readMoreLink: "/optronix-fiber/optronix-gold",
      catalogLink: mediaUrl.doc("goldfiber.pdf"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
    },
  ],
  6: [
    {
<<<<<<< HEAD
      image: media_Optronixgold__2__webp,
      title: "Optronix Platinum",
      description: "2F, 4F, 6F, 12F, 24F",
      readMoreLink: "/optronix-fiber/optronix-platinum",
      catalogLink: media_PLATINUMFIBER_pdf,
=======
      image: mediaUrl.image("optronixgold (2).webp"),
      title: "Optronix Platinum",
      description: "2F, 4F, 6F, 12F, 24F",
      readMoreLink: "/optronix-fiber/optronix-platinum",
      catalogLink: mediaUrl.doc("platinumfiber.pdf"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
    },
  ]
};

const tabs = [
  { id: 1, label: "Optical Fiber Cable" },
  { id: 2, label: "Optronix Flat Cable" },
  { id: 3, label: "Optronix Drop Cable" },
  { id: 4, label: "Optronix NEO" },
  { id: 5, label: "Optronix Gold" },
  { id: 6, label: "Optronix Platinum" }
];

const Optronixfiberproduct = () => {
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
    <div className="optronixfiberproduct-page-main">
      {/* Banner Section */}
      <div className="optronixfiber-page-banner">
<<<<<<< HEAD
        <img src={media_Fbanner_webp} alt="Optronix Fiber Products" fetchpriority="high" className="banner-image" />
=======
        <img src={mediaUrl.image("fbanner.webp")} alt="Optronix Fiber Products" fetchpriority="high" className="banner-image" />
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
      </div>
      <div className="optronixfiberproduct-page-upperline"></div>
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

        {/* Products */}
        <div className="product-grid">
          {productData[activeButton]?.map((product, index) => (
            <div
              key={index}
              className="card"
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
                className="fbtn_product1"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(`Optronix Fiber - ${product.title}`);
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

export default Optronixfiberproduct;
