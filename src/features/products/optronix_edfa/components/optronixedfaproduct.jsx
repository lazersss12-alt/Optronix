import { mediaUrl } from '../../../../config/media';
import React, { useState, useEffect } from 'react';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';
import { Link } from 'react-router-dom';
import '../../../../components/index.css';
import '../../sumitomo/components/Sumitomo.css';
import '../../../../components/layout/Footer.css';
import './optronixedfa.css';
// Using the same banner image as other product pages
const productData = {
  1: [
    {
      image: mediaUrl.image("CE0416M.webp"),
      title: 'CE0416M',
      description: 'CATV 16.5x4 Single Input',
      readMoreLink: '/optronix-edfa/CE0416M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0419M.webp"),
      title: 'CE0419M',
      description: 'CATV 19.5x4 Single Input',
      readMoreLink: '/optronix-edfa/CE0419M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0816M.webp"),
      title: 'CE0819M',
      description: 'CATV 19.5x8 Single Input',
      readMoreLink: '/optronix-edfa/CE0819M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE1 619M.webp"),
      title: 'CE1619M',
      description: 'CATV 19.5x16 Single Input',
      readMoreLink: '/optronix-edfa/CE1619M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("MC04.webp"),
      title: 'MC04',
      description: 'MINI 16.5x4',
      readMoreLink: '',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0416M.webp"),
      title: 'MCE0123',
      description: 'MINI 23.5x1',
      readMoreLink: '',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0416M.webp"),
      title: 'CE0416M+OSW',
      description: 'CATV 16.5x4 Dual Input',
      readMoreLink: '/optronix-edfa/CE0416M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0419M.webp"),
      title: 'CE0419M+OSW',
      description: 'CATV 19.5x4 Dual Input',
      readMoreLink: '/optronix-edfa/CE0419M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0816M.webp"),
      title: 'CE0819M+OSW',
      description: 'CATV 19.5x8 Dual Input',
      readMoreLink: '/optronix-edfa/CE0819M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0416M.webp"),
      title: 'CE0423M+OSW',
      description: 'CATV 23.5x4 Dual Input',
      readMoreLink: '',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0816M.webp"),
      title: 'CE0823M+OSW',
      description: 'CATV 23.5x8 Dual Input',
      readMoreLink: '',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE1 619M.webp"),
      title: 'CE1619M+OSW',
      description: 'CATV 19.5x16 Dual Input',
      readMoreLink: '/optronix-edfa/CE1619M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("PE0819M.webp"),
      title: 'PE0819M',
      description: 'WDM 19.5x8 Single Input',
      readMoreLink: '/optronix-edfa/PE0819M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("PE1619M.webp"),
      title: 'PE1619M',
      description: 'WDM 19.5x16 Single Input',
      readMoreLink: '/optronix-edfa/PE1619M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("PE3219M.webp"),
      title: 'PE3219M',
      description: 'WDM 19.5x32 Single Input',
      readMoreLink: '/optronix-edfa/PE3219M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("PE0819M.webp"),
      title: 'PE0819M+OSW',
      description: 'WDM 19.5x8 Dual Input',
      readMoreLink: '/optronix-edfa/PE0819M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("PE1619M.webp"),
      title: 'PE1619M+OSW',
      description: 'WDM 19.5x16 Dual Input',
      readMoreLink: '/optronix-edfa/PE1619M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("PE3219M.webp"),
      title: 'PE3219M+OSW',
      description: 'WDM 19.5x32 Dual Input',
      readMoreLink: '/optronix-edfa/PE3219M-OSW',
      catalogLink: ''
    }
  ],
  2: [
    {
      image: mediaUrl.image("CE0416M.webp"),
      title: 'CE0416M',
      description: 'CATV 16.5x4 Single Input',
      readMoreLink: '/optronix-edfa/CE0416M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0419M.webp"),
      title: 'CE0419M',
      description: 'CATV 19.5x4 Single Input',
      readMoreLink: '/optronix-edfa/CE0419M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0816M.webp"),
      title: 'CE0819M',
      description: 'CATV 19.5x8 Single Input',
      readMoreLink: '/optronix-edfa/CE0819M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE1 619M.webp"),
      title: 'CE1619M',
      description: 'CATV 19.5x16 Single Input',
      readMoreLink: '/optronix-edfa/CE1619M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0416M.webp"),
      title: 'mediaUrl.image("MC04.webp")',
      description: 'MINI 16.5x4',
      readMoreLink: '',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0416M.webp"),
      title: 'MCE0123',
      description: 'MINI 23.5x1',
      readMoreLink: '',
      catalogLink: ''
    }
  ],
  3: [
    {
      image: mediaUrl.image("CE0416M.webp"),
      title: 'CE0416M+OSW',
      description: 'CATV 16.5x4 Dual Input',
      readMoreLink: '/optronix-edfa/CE0416M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0419M.webp"),
      title: 'CE0419M+OSW',
      description: 'CATV 19.5x4 Dual Input',
      readMoreLink: '/optronix-edfa/CE0419M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0816M.webp"),
      title: 'CE0819M+OSW',
      description: 'CATV 19.5x8 Dual Input',
      readMoreLink: '/optronix-edfa/CE0819M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0416M.webp"),
      title: 'CE0423M+OSW',
      description: 'CATV 23.5x4 Dual Input',
      readMoreLink: '',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE0816M.webp"),
      title: 'CE0823M+OSW',
      description: 'CE0823M+OSW',
      readMoreLink: '',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("CE1 619M.webp"),
      title: 'CE1619M+OSW',
      description: 'CATV 19.5x16 Dual Input',
      readMoreLink: '/optronix-edfa/CE1619M-OSW',
      catalogLink: ''
    }
  ],
  4: [
    {
      image: mediaUrl.image("PE0819M.webp"),
      title: 'PE0819M',
      description: 'WDM 19.5x8 Single Input',
      readMoreLink: '/optronix-edfa/PE0819M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("PE1619M.webp"),
      title: 'PE1619M',
      description: 'WDM 19.5x16 Single Input',
      readMoreLink: '/optronix-edfa/PE1619M',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("PE3219M.webp"),
      title: 'PE3219M',
      description: 'WDM 19.5x32 Single Input',
      readMoreLink: '/optronix-edfa/PE3219M',
      catalogLink: ''
    }
  ],
  5: [
    {
      image: mediaUrl.image("PE0819M.webp"),
      title: 'PE0819M+OSW',
      description: 'WDM 19.5x8 Dual Input',
      readMoreLink: '/optronix-edfa/PE0819M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("PE1619M.webp"),
      title: 'PE1619M+OSW',
      description: 'WDM 19.5x16 Dual Input',
      readMoreLink: '/optronix-edfa/PE1619M-OSW',
      catalogLink: ''
    },
    {
      image: mediaUrl.image("PE3219M.webp"),
      title: 'PE3219M+OSW',
      description: 'WDM 19.5x32 Dual Input',
      readMoreLink: '/optronix-edfa/PE3219M-OSW',
      catalogLink: ''
    }
  ]
};

const tabs = [
  { id: 1, label: 'All EDFA Products' },
  { id: 2, label: 'CATV Single Input' },
  { id: 3, label: 'CATV Dual Input' },
  { id: 4, label: 'WDM Single Input' },
  { id: 5, label: 'WDM Dual Input' }
];

const Optronixedfaproduct = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  const [enquireModal, setEnquireModal] = useState(null);

  return (
    <div className="optronixedfaproduct-page-main">
      {/* Banner Section */}
      <div className="optronixedfa-page-banner">
        <img src={mediaUrl.image("EDFABanner.webp")} alt="Optronix EDFA Products" className="banner-image" />
      </div>
      <div className="optronixedfaproduct-page-upperline"></div>
      <div className="product-page">
        {/* Tabs */}
        <div className="product-page-controls">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`button-size ${activeButton === tab.id ? 'active' : ''} ${tab.id === 1 ? 'special-tab' : ''}`}
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
                  alt={product.title}
                  className="card-image"
                  loading={index < 6 ? "eager" : "lazy"}
                  fetchpriority={index < 6 ? "high" : "auto"}
                />
              )}

              <h2 className="card-title">{product.title}</h2>
              <p className="card-description">{product.description}</p>

              <button
                className="card-btn-main"
                onClick={(e) => { e.stopPropagation(); setEnquireModal(product.title); }}
              >
                Enquire Now
              </button>

              <div className="card-links" onClick={(e) => e.stopPropagation()}>
                {product.readMoreLink && (
                  <Link to={product.readMoreLink} className="card-text-link">

                    <span>Read More</span>
                  </Link>
                )}

                {/* {product.catalogLink && (
                                <a
                                  href={product.catalogLink}
                                  className="card-btn-secondary"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  download
                                >
                                   <span className="desktop-text">Download Catalog</span>
      <span className="top-text">Download</span>
      <span className="bottom-text">Catalog</span>
                                </a>
                              )} */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lead form modal for card Enquire Now */}
      <ProductLeadModal
        isOpen={!!enquireModal}
        onClose={() => setEnquireModal(null)}
        pageName={enquireModal ? `Optronix EDFA – ${enquireModal}` : ''}
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

export default Optronixedfaproduct;
