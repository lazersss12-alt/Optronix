import { mediaUrl } from '../../config/media';
import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../index.css';
import './Navbar.css';

import { IoIosArrowDown } from 'react-icons/io';
import { IoSearchOutline, IoCloseOutline } from 'react-icons/io5';
import { FaDownload } from 'react-icons/fa';
import { searchProducts } from '../../data/productSearchIndex';

/* Decide when the nav should be collapsed (burger shown) */
const shouldCollapse = () => {
  if (typeof window === 'undefined') return false;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const landscape = w > h;

  // Exact sizes to force collapsed mode
  const specialExact =
    (w === 1280 && h === 800) ||
    (w === 1360 && h === 1024);

  // Broad landscape range to catch similar devices
  const landscapeRange =
    landscape && w >= 1200 && w <= 1366 && h <= 1050;

  // Normal mobile/tablet threshold OR the special landscape sizes
  return w <= 800 || specialExact || landscapeRange;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({ products: false, ems: false });
  const [isMobile, setIsMobile] = useState(() => shouldCollapse());

  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchInputRef = useRef(null);
  const searchWrapperRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);

  const toggleMenu = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    document.body.style.overflow = newIsOpen ? 'hidden' : 'auto';
    if (!newIsOpen) setDropdowns({ products: false, ems: false });
  };

  const closeMenu = () => {
    setIsOpen(false);
    setDropdowns({ products: false, ems: false });
    document.body.style.overflow = 'auto';
  };

  const toggleDropdown = (section, e) => {
    e.stopPropagation();
    // On collapsed (mobile) we only allow dropdowns when menu is open
    if (!isOpen && isMobile) return;
    setDropdowns(prev => ({
      products: section === 'products' ? !prev.products : false,
      ems: section === 'ems' ? !prev.ems : false,
    }));
  };

  // Close menu when clicking/touching outside
  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!navRef.current) return;
      const clickedInside = navRef.current.contains(event.target);
      if (!clickedInside) closeMenu();
    };
    document.addEventListener('mousedown', handlePointerDown, true);
    document.addEventListener('touchstart', handlePointerDown, true);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown, true);
      document.removeEventListener('touchstart', handlePointerDown, true);
    };
  }, []);

  // Close on route change
  useEffect(() => {
    closeMenu();
    setSearchOpen(false);
    setSearchQuery('');
    setSearchDropdownOpen(false);
  }, [location.pathname]);

  // ESC to close
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeMenu();
        setSearchOpen(false);
        setSearchQuery('');
        setSearchDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Live search
  useEffect(() => {
    const q = searchQuery.trim();
    if (q.length === 0) {
      setSearchResults([]);
      setSearchDropdownOpen(false);
      return;
    }
    const found = searchProducts(q, 8);
    setSearchResults(found);
    setSearchDropdownOpen(true);
    setActiveIndex(-1);
  }, [searchQuery]);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }
  }, [searchOpen]);

  // Close search dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (searchWrapperRef.current && !searchWrapperRef.current.contains(e.target)) {
        setSearchDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSearchSelect = useCallback((product) => {
    setSearchQuery('');
    setSearchOpen(false);
    setSearchDropdownOpen(false);
    navigate(product.path);
  }, [navigate]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (!q) return;
    if (activeIndex >= 0 && searchResults[activeIndex]) {
      handleSearchSelect(searchResults[activeIndex]);
      return;
    }
    if (searchResults.length === 1) {
      handleSearchSelect(searchResults[0]);
      return;
    }
    navigate('/products');
    setSearchOpen(false);
    setSearchQuery('');
    setSearchDropdownOpen(false);
  };

  const handleSearchKeyDown = (e) => {
    if (!searchDropdownOpen) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); setActiveIndex(p => Math.min(p + 1, searchResults.length - 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActiveIndex(p => Math.max(p - 1, -1)); }
  };

  // Track viewport and decide collapsed/expanded
  useEffect(() => {
    const handleResize = () => {
      const mobile = shouldCollapse();
      setIsMobile(mobile);
      if (!mobile) closeMenu();
    };
    handleResize(); // initial
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Reflect collapsed mode in <html> so CSS can override desktop rules
  useEffect(() => {
    const root = document.documentElement;
    if (isMobile) root.classList.add('nav-collapsed');
    else root.classList.remove('nav-collapsed');
    return () => root.classList.remove('nav-collapsed');
  }, [isMobile]);

  const isActive = (path) => location.pathname === path;

  const isProductActive = () => {
    const productRoutes = [
      '/sumitomo',
      '/deviser',
      '/optronix-pon',
      '/optronixedfa',
      '/optronix-fiber',
    ];
    return productRoutes.includes(location.pathname);
  };

  const isEmsActive = () => {
    const emsRoutes = ['/surface-mounting', '/mi'];
    return emsRoutes.includes(location.pathname);
  };

  return (
    <div className="main-nav" ref={navRef}>
      <div className="full-nav">
        {/* Logo */}
        <div className="nav-logo">
          <Link to="/" onClick={closeMenu}>
            <img src={mediaUrl.image("logo.webp")} loading="lazy" alt="Optronix Logo" className="logo" />
          </Link>
        </div>

        {/* Navigation menu */}
        <div
          id="main-menu"
          className={`nav-menu ${isOpen ? 'active' : ''}`}
          data-open={isOpen}
          role="navigation"
          aria-label="Primary"
        >
          <ul>
            <li>
              <Link
                to="/"
                className={isActive('/') ? 'active-link' : ''}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>

            {/* Products */}
            <li className={`dropdown ${dropdowns.products ? 'active' : ''}`}>
              <div
                role="button"
                tabIndex={0}
                onClick={(e) => toggleDropdown('products', e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDropdown('products', e);
                  }
                }}
                aria-expanded={dropdowns.products}
                aria-haspopup="true"
                className={`dropdown-toggle toggle-design ${dropdowns.products || isProductActive() ? 'active-link' : ''
                  }`}
              >
                <span className="toggle-label">Products</span>
                <IoIosArrowDown className="dropdown-arrow" />
              </div>

              {isMobile ? (
                <ul
                  id="dropdown-products"
                  className={`mobile-submenu ${dropdowns.products ? 'active' : ''}`}
                >
                  <li><Link to="/sumitomo" onClick={closeMenu} className="dropdown-item">Sumitomo Splicing Product</Link></li>
                  <li><Link to="/deviser" onClick={closeMenu}>Deviser Measuring Instruments</Link></li>
                  <li><Link to="/optronix-pon" onClick={closeMenu}>Optronix Networking (GEPON/GPON)</Link></li>
                  <li><Link to="/optronix-fiber" onClick={closeMenu}>Optronix Fiber-Optics</Link></li>
                  <li><Link to="/optronixedfa" onClick={closeMenu}>Optronix EDFA</Link></li>

                </ul>
              ) : (
                <div
                  id="dropdown-products"
                  className={`dropdown-menu2 ${dropdowns.products ? 'active' : ''}`}
                  role="menu"
                >
                  <ul>
                    <li><Link to="/sumitomo" onClick={closeMenu} className="dropdown-item">Sumitomo Splicing Product</Link></li>
                    <li><Link to="/deviser" onClick={closeMenu}>Deviser Measuring Instruments</Link></li>
                    <li><Link to="/optronix-pon" onClick={closeMenu}>Optronix Networking</Link></li>
                    <li><Link to="/optronix-fiber" onClick={closeMenu}>Optronix Fiber-Optics</Link></li>
                    <li><Link to="/optronixedfa" onClick={closeMenu}>Optronix EDFA</Link></li>

                  </ul>
                </div>
              )}
            </li>

            {/* EMS */}
            <li className={`dropdown ${dropdowns.ems ? 'active' : ''}`}>
              <div
                role="button"
                tabIndex={0}
                onClick={(e) => toggleDropdown('ems', e)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDropdown('ems', e);
                  }
                }}
                aria-expanded={dropdowns.ems}
                aria-haspopup="true"
                className={`dropdown-toggle toggle-design ${dropdowns.ems || isEmsActive() ? 'active-link' : ''
                  }`}
              >
                <span className="toggle-label">EMS Facility</span>
                <IoIosArrowDown className="dropdown-arrow" />
              </div>

              {isMobile ? (
                <ul
                  id="dropdown-ems"
                  className={`mobile-submenu ${dropdowns.ems ? 'active' : ''}`}
                >
                  <li><Link to="/surface-mounting" onClick={closeMenu}>Surface Mounting</Link></li>
                  <li><Link to="/mi" onClick={closeMenu}>Manual Insertion</Link></li>
                </ul>
              ) : (
                <div
                  id="dropdown-ems"
                  className={`dropdown-menu3 ${dropdowns.ems ? 'active' : ''}`}
                  role="menu"
                >
                  <ul>
                    <li><Link to="/surface-mounting" onClick={closeMenu}>Surface Mounting</Link></li>
                    <li><Link to="/mi" onClick={closeMenu}>Manual Insertion</Link></li>
                  </ul>
                </div>
              )}
            </li>

            <li><Link to="/ofcpage" onClick={closeMenu}>Fiber Optics</Link></li>
            <li><Link to="/partner" onClick={closeMenu}>Partners</Link></li>
            <li><Link to="/educationalpage" onClick={closeMenu}>Educational</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            {isMobile && (
              <li className="mobile-download">
                <a
                  href={mediaUrl.root("Optronix_Catalogue.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="mobile-action-btn"
                >
                  Download Catalogue
                </a>
              </li>
            )}
            {isMobile && (
              <li className="mobile-enquire">
                <Link to="/contact" onClick={closeMenu} className="mobile-action-btn">
                  Enquire Now
                </Link>
              </li>
            )}
          </ul>
        </div>

        {/* Search icon — always visible on all screen sizes */}
        {/* Search section */}
        <div className="nav-search-always" ref={searchWrapperRef}>
          {searchOpen ? (
            <button
              type="button"
              className="nav-search-close-circle"
              aria-label="Close search"
              onClick={(e) => {
                e.stopPropagation();
                setSearchOpen(false);
                setSearchQuery('');
                setSearchDropdownOpen(false);
              }}
            >
              <IoCloseOutline />
            </button>
          ) : (
            <button
              className="nav-search-toggle"
              aria-label="Open search"
              onClick={(e) => {
                e.stopPropagation();
                setSearchOpen(true);
              }}
            >
              <IoSearchOutline />
            </button>
          )}
        </div>

        {/* Burger (shown when isMobile === true or forced via special sizes) */}
        <button
          type="button"
          className={`burger ${isOpen ? 'is-open' : ''}`}
          aria-expanded={isOpen}
          aria-controls="main-menu"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Right-side action buttons (hidden on mobile) */}
        <div className="nav-actions" onClick={(e) => e.stopPropagation()}>
          {/* Download Catalog */}
          <span
            className="download-btn tooltip"
            data-tooltip="Download E-Catalog"
            onClick={() => window.open(mediaUrl.root("Optronix_Catalogue.pdf"), "_blank")}
            aria-label="Download Catalog"
          >
            <FaDownload className="download-icon" />
          </span>

          {/* Enquire Now button */}
          <div className="nav-button">
            <Link to="/contact" onClick={(e) => { e.stopPropagation(); closeMenu(); }}>
              <button className="enquire_button"><p>Enquire Now</p></button>
            </Link>
          </div>
        </div>

      </div>

      {/* Search Overlay (Floating Card below Navbar) */}
      {searchOpen && (
        <div className="nav-search-overlay-mobile" onClick={(e) => e.stopPropagation()}>
          <div className="nav-search-card">
            <div className="nav-search-card-header">
              <IoSearchOutline className="nav-search-icon" />
              <form onSubmit={handleSearchSubmit} className="nav-search-form-inner" autoComplete="off">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleSearchKeyDown}
                  className="nav-search-input"
                  aria-label="Search products"
                />
              </form>
            </div>

            {!searchQuery && (
              <div className="nav-search-empty-state">
                <p>Start typing to search across all products and categories</p>
              </div>
            )}

            {searchDropdownOpen && (
              <ul className="nav-search-results-list" role="listbox">
                {searchResults.length > 0 ? (
                  searchResults.map((product, idx) => (
                    <li
                      key={product.path}
                      role="option"
                      aria-selected={idx === activeIndex}
                      className={`nav-search-result-item${idx === activeIndex ? ' nav-search-result-active' : ''}`}
                      onMouseDown={() => handleSearchSelect(product)}
                      onMouseEnter={() => setActiveIndex(idx)}
                    >
                      <div className="nav-result-info">
                        <span className="nav-result-name">{product.name}</span>
                        <span className="nav-result-cat">{product.category}</span>
                      </div>
                    </li>
                  ))
                ) : (
                  <li className="nav-search-no-result">
                    No results —{' '}
                    <span onMouseDown={() => { navigate('/products'); setSearchOpen(false); setSearchQuery(''); setSearchDropdownOpen(false); }}>
                      Browse all
                    </span>
                  </li>
                )}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;