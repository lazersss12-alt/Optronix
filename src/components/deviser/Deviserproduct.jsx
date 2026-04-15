import media_ae3100_webp from '../../assets/img2/img/ae3100.webp';
import media_ae3100_pdf from '../../assets/img2/img/media/docs/ae3100.pdf';
import media_AE1001_webp from '../../assets/img2/img/AE1001.webp';
import media_ae1001_pdf from '../../assets/img2/img/media/docs/ae1001.pdf';
import media_ae3100dm_pdf from '../../assets/img2/img/media/docs/ae3100dm.pdf';
import media_ae3100dpone_pdf from '../../assets/img2/img/media/docs/ae3100dpone.pdf';
import media_ae210_webp from '../../assets/img2/img/ae210.webp';
import media_ae200_pdf from '../../assets/img2/img/media/docs/ae200.pdf';
import media_ep310_webp from '../../assets/img2/img/ep310.webp';
import media_ep300_pdf from '../../assets/img2/img/media/docs/ep300.pdf';
import media_ls310_webp from '../../assets/img2/img/ls310.webp';
import media_ls300_pdf from '../../assets/img2/img/media/docs/ls300.pdf';
import media_ep710_webp from '../../assets/img2/img/ep710.webp';
import media_ep710_pdf from '../../assets/img2/img/media/docs/ep710.pdf';
import media_vfl_webp from '../../assets/img2/img/vfl.webp';
import media_vf10_pdf from '../../assets/img2/img/vf10.pdf';
import media_Devisorbanner_webp from '../../assets/img2/img/Devisorbanner.webp';
import React, { useState, useEffect } from 'react';
import '../../components/index.css';
import '../../components/sumitomo/Sumitomo.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../common/ProductLeadModal';
const productData = {
  1: [
    {
      image: media_ae3100_webp,
      title: "AE3100A~F Series",
      description: "Best OTDR in Segment",
      readMoreLink: "/deviser/AE3100A",
      catalogLink: media_ae3100_pdf
    },
    {
<<<<<<< HEAD
      image: media_AE1001_webp,
=======
      image: mediaUrl.image("ae1001.webp"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
      title: "AE1001",
      description: "Mini OTDR",
      readMoreLink: "/deviser/AE1001",
      catalogLink: media_ae1001_pdf
    },
    {
      image: media_ae3100_webp,
      title: "AE3100DM",
      description: "Best Multimode OTDR",
      readMoreLink: "/deviser/AE3100DM",
      catalogLink: media_ae3100dm_pdf
    },
    {
      image: media_ae3100_webp,
      title: "AE3100 Live Series",
      description: "One of the best Live OTDR",
      readMoreLink: "/deviser/AE3100Live",
      catalogLink: media_ae3100dpone_pdf
    },
    {
      image: media_ae210_webp,
      title: "AE210 Series",
      description: "Best Optical Power Meter",
      readMoreLink: "/deviser/AE210",
      catalogLink: media_ae200_pdf
    },
    {
      image: media_ep310_webp,
      title: "EP-310 ",
      description: "PON Power Meter",
      readMoreLink: "/deviser/EP310",
      catalogLink: media_ep300_pdf
    },
    {
      image: media_ls310_webp,
      title: "LS310 Series",
      description: "Optical Laser Source Meter",
      readMoreLink: "/deviser/LS310",
      catalogLink: media_ls300_pdf
    },
    {
      image: media_ep710_webp,
      title: " EP710 Series",
      description: "Multimeter",
      readMoreLink: "/deviser/EP710",
      catalogLink: media_ep710_pdf
    },
    {
      image: media_vfl_webp,
      title: "VF-10",
      description: "Visual Fault Locator",
      readMoreLink: "/deviser/VF10",
      catalogLink: media_vf10_pdf
    }
  ],
  2: [
    {
      image: media_ae3100_webp,
      title: "AE3100A~F Series",
      description: "Best OTDR in Segment",
      readMoreLink: "/deviser/AE3100A",
      catalogLink: media_ae3100_pdf
    },
    {
<<<<<<< HEAD
      image: media_AE1001_webp,
=======
      image: mediaUrl.image("ae1001.webp"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
      title: "AE1001",
      description: "Mini OTDR",
      readMoreLink: "/deviser/AE1001",
      catalogLink: media_ae1001_pdf
    }
  ],
  3: [
    {
      image: media_ae3100_webp,
      title: "AE3100DM",
      description: "Best Multimode OTDR",
      readMoreLink: "/deviser/AE3100DM",
      catalogLink: media_ae3100dm_pdf
    }
  ],
  4: [
    {
      image: media_ae3100_webp,
      title: "AE3100 Live Series",
      description: "One of the best Live OTDR",
      readMoreLink: "/deviser/AE3100Live",
      catalogLink: media_ae3100dpone_pdf
    }
  ],
  5: [
    {
      image: media_ae210_webp,
      title: "AE210 Series",
      description: "Best Optical Power Meter",
      readMoreLink: "/deviser/AE210",
      catalogLink: media_ae200_pdf
    }
  ],
  6: [
    {
      image: media_ep310_webp,
      title: "EP-310 Series ",
      description: "PON Power Meter",
      readMoreLink: "/deviser/EP310",
      catalogLink: media_ep300_pdf
    }
  ],
  7: [
    {
      image: media_ls310_webp,
      title: "LS300 Series",
      description: "Optical Laser Source Meter",
      readMoreLink: "/deviser/LS310",
      catalogLink: media_ls300_pdf
    }
  ],
  8: [
    {
      image: media_ep710_webp,
      title: " EP710 Series",
      description: "Multimeter",
      readMoreLink: "/deviser/EP710",
      catalogLink: media_ep710_pdf
    }
  ],
  9: [
    {
      image: media_vfl_webp,
      title: "VF-10",
      description: "Visual Fault Locator",
      readMoreLink: "/deviser/VF10",
      catalogLink: media_vf10_pdf
    }
  ]
};

const tabs = [
  { id: 1, label: "Deviser Product & Accessories" },
  { id: 2, label: "Single Mode OTDR" },
  { id: 3, label: "Multi Mode OTDR" },
  { id: 4, label: "Live OTDR" },
  { id: 5, label: "Optical Power Meter" },
  { id: 6, label: "PON Power Meter" },
  { id: 7, label: "Optical Laser Source" },
  { id: 8, label: "Multimeter" },
  { id: 9, label: "Visual Fault Locator (VFL)" }
];

// Component
const Deviserproduct = () => {
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
    <div className="deviserproduct-page-main">
      {/* Banner Section */}
      <div className="deviser-page-banner">
<<<<<<< HEAD
        <img src={media_Devisorbanner_webp} fetchpriority="high" alt="Deviser Products" className="banner-image" />
=======
        <img src={mediaUrl.image("devisorbanner.webp")} fetchpriority="high" alt="Deviser Products" className="banner-image" />
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
      </div>
      <div className="deviserproduct-page-upperline"></div>
      <div className="product-page">

        {/* Tabs */}
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

              {/* Enquire Now row */}
              <button
                className="card-btn-main"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(`Optronix Deviser - ${product.title}`);
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

export default Deviserproduct;
