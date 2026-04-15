import media_indiamart_webp from '../assets/img2/img/indiamart.webp';
import React, { useState } from 'react';
import './index.css';
import './Header.css';
import { FaFacebookF, FaLinkedinIn, FaAt } from 'react-icons/fa';
import { FaYoutube } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { RiInstagramFill, RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

const Header = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/search?query=${query.trim()}`;
    }
  };

  return (
    <section>
      <div className="main-main-header">
        <div className="main-header">
          <div className="header-mob">
            <a href="tel:+919811308000" target="_blank" rel="noopener noreferrer">
              <FaPhoneAlt /> +91-9811308000
            </a>
            <a href="mailto:info@optronix.in?subject=Inquiry" rel="noopener noreferrer">
              <MdEmail /> info@optronix.in
            </a>
          </div>

          <div className="header-social">
            <div className="social-mediah">
              <ul>
                <li>
                  <Link
                    to="https://www.indiamart.com/candidoptronix/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <img src={media_indiamart_webp} loading="lazy" alt="Indiamart" width="20" style={{ marginTop: '3px' }} />
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
                  <a href="https://x.com/candid_optronix" target="_blank" rel="noopener noreferrer" className="social-icon">
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

            <div className="header-search">
              <form onSubmit={handleSearch} className="header-search-form">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="search-input"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;