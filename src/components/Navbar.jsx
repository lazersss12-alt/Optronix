import media_logo_webp from '../assets/img2/img/logo.webp';
import media_Optronix_Catalogue_pdf from '../assets/img2/img/Optronix_Catalogue.pdf';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './index.css';
import './Navbar.css';


import { IoIosArrowDown } from 'react-icons/io';
import { FaDownload } from 'react-icons/fa';
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
  const location = useLocation();
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
  }, [location.pathname]);

  // ESC to close
  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') closeMenu(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

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
            <img src={media_logo_webp} loading="lazy" alt="Optronix Logo" className="logo" />
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
                  href={media_Optronix_Catalogue_pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Download Catalogue
                </a>
              </li>
            )}
            {isMobile && (
              <li className="mobile-enquire">
                <Link to="/contact" onClick={closeMenu}>
                  Enquire Now
                </Link>
              </li>
            )}
          </ul>
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

        {/* Right-side action buttons */}
        <div className="nav-actions" onClick={(e) => e.stopPropagation()}>
          {/* Download Catalog */}
          <span
            className="download-btn tooltip"
            data-tooltip="Download E-Catalog"
            onClick={() => window.open(media_Optronix_Catalogue_pdf, "_blank")}


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
    </div>
  );
};

export default Navbar;