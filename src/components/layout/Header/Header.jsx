import { mediaUrl } from '../../../config/media';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../../../index.css';
import styles from './Header.module.css';
import { FaFacebookF, FaLinkedinIn, FaAt } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { searchProducts } from '../../../data/productSearchIndex';

const Header = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const inputRef = useRef(null);

  // Run search on query change
  useEffect(() => {
    const q = query.trim();
    if (q.length === 0) {
      setResults([]);
      setIsOpen(false);
      return;
    }
    const found = searchProducts(q, 8);
    setResults(found);
    setIsOpen(true);
    setActiveIndex(-1);
  }, [query]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = useCallback((product) => {
    setQuery('');
    setIsOpen(false);
    navigate(product.path);
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;

    // If keyboard navigation has selected something, go there
    if (activeIndex >= 0 && results[activeIndex]) {
      handleSelect(results[activeIndex]);
      return;
    }

    // Exact match → go to product page
    if (results.length === 1) {
      handleSelect(results[0]);
      return;
    }

    // Partial / multiple matches → go to general products page
    navigate('/products');
    setIsOpen(false);
    setQuery('');
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <section>
      <div className={styles['main-main-header']}>
        <div className={styles['main-header']}>
          <div className={styles['header-mob']}>
            <a href="tel:+919811308000" target="_blank" rel="noopener noreferrer">
              <FaPhoneAlt /> +91-9811308000
            </a>
            <a href="mailto:info@optronix.in?subject=Inquiry" rel="noopener noreferrer">
              <MdEmail /> info@optronix.in
            </a>
          </div>

          <div className={styles['header-social']}>
            <div className={styles['social-mediah']}>
              <ul>
                <li>
                  <Link
                    to="https://www.indiamart.com/candidoptronix/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <img src={mediaUrl.image("indiamart.png")} loading="lazy" alt="Indiamart" width="20" style={{ marginTop: '3px' }} />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.threads.com/@candidoptronix" target="_blank" rel="noopener noreferrer">
                    <FaAt />
                  </Link>
                </li>
                <li>
                  <a href="https://www.facebook.com/candidoptronix/" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/candid_optronix" target="_blank" rel="noopener noreferrer" className={styles['social-icon']}>
                    <i className="ri-twitter-x-line"></i>
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/candidoptronix" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/candidoptronix/" target="_blank" rel="noopener noreferrer">
                    <RiInstagramFill />
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/919811308000" target="_blank" rel="noopener noreferrer">
                    <RiWhatsappFill />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/@CandidOptronix" target="_blank" rel="noopener noreferrer">
                    <FaYoutube />
                  </a>
                </li>
              </ul>
            </div>

            {/* ── Search Bar ── */}
            <div className={styles['header-search']} ref={wrapperRef}>
              <form onSubmit={handleSubmit} className={styles['header-search-form']} autoComplete="off">
                <IoSearchOutline className={styles['search-icon']} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search products…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className={styles['search-input']}
                  aria-label="Search products"
                  aria-autocomplete="list"
                  aria-expanded={isOpen}
                />
              </form>

              {/* Live Dropdown */}
              {isOpen && (
                <ul className={styles['search-dropdown']} role="listbox">
                  {results.length > 0 ? (
                    results.map((product, idx) => (
                      <li
                        key={product.path}
                        role="option"
                        aria-selected={idx === activeIndex}
                        className={`${styles['search-result-item']} ${idx === activeIndex ? styles['search-result-active'] : ''}`}
                        onMouseDown={() => handleSelect(product)}
                        onMouseEnter={() => setActiveIndex(idx)}
                      >
                        <span className={styles['result-name']}>{product.name}</span>
                        <span className={styles['result-category']}>{product.category}</span>
                      </li>
                    ))
                  ) : (
                    <li className={styles['search-no-result']}>
                      No products found — <span onMouseDown={() => { navigate('/products'); setIsOpen(false); setQuery(''); }}>Browse all</span>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;