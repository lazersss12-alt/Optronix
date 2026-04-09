import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "./Footer.css";

import { FaAt } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import indiamartimg from '../../assets/images/india.webp';

/* Dropdown menu that can open up or down based on available space */
const DropdownMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${({ $dropUp }) => ($dropUp ? "0 0 -2px 0" : "-2px 0 0 0")};
  position: absolute;
  top: ${({ $dropUp }) => ($dropUp ? "auto" : "100%")};
  bottom: ${({ $dropUp }) => ($dropUp ? "100%" : "auto")};
  left: 0;
  width: 100%;
  background-color: #a7402d;
  border: 2px solid #a7402d;
  ${({ $dropUp }) => ($dropUp ? "border-bottom: none;" : "border-top: none;")}
  border-radius: 4px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  z-index: 80;
  max-height: 200px;
  overflow-y: auto;

  /* SHOW SCROLLBAR */
  scrollbar-width: thin;
  -ms-overflow-style: auto;
& li button {
  background: none !important;     /* remove box */
  border: none !important;         /* remove border */
  color: #ffffff !important;       /* white text */
  cursor: pointer;
  padding: 10px 16px;
  height: 40px;
  width: 100%;
  text-align: left;
  font-size: 14px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

& li button:hover {
  background-color: rgba(255, 255, 255, 0.12) !important; /* subtle hover */
}
  &::-webkit-scrollbar {
  width: 6px;
}

&::-webkit-scrollbar-track {
  background: #8e3625; 
}

&::-webkit-scrollbar-thumb {
  background: #a7402d; 
  border-radius: 10px;
}

&::-webkit-scrollbar-thumb:hover {
  background: #c14d38; 
}

  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  opacity: ${({ $isOpen }) => ($isOpen ? "1" : "0")};
  transition: opacity 0.2s ease-in-out`;

const StyledDropdown = styled.div`
  position: relative;
  width: 200px;
  font-size: 16px;
  color: #f0f0f0;
  display: inline-block;
  z-index: 80;
  overflow: visible !important;

  .dropdown-toggle {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid #8e3625;
    border-radius: 4px;
    padding: 8px 12px;
    width: 100%;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }

  .dropdown-arrow {
    display: inline-block;
    transition: transform 0.2s ease;
  }
  .dropdown-arrow.open {
    transform: rotate(180deg);
  }
`;

// Define branch details outside component to optimize performance
const branchDetails = {
  "New Delhi Office": {
    address: "Plot No. A-129 2, Nirankari Colony, Mukherjee Nagar, Delhi, 110009",
    contactPerson: "Shubhankar Gautam",
    designation: " Manager",
    mobile: "+91-9811273572",
    email: "shubhankar@optronix.in",
    mapLink: "https://www.google.com/maps?q=28.7154528,77.2082415",
    lat: 28.7154528,
    lon: 77.2082415
  },
  "Noida Office": {
    address: "A85, A Block, Sector 58, Noida, Uttar Pradesh 201309",
    contactPerson: "Mr. Aditya Gautam",
    designation: "VP Sales",
    mobile: "+91-8588858380",
    email: "aditya@optronix.in",
    mapLink: "https://maps.google.com/maps?q=28.603552,77.360431",
    lat: 28.603552,
    lon: 77.360431
  },
  "Kolkata Office": {
    address: "24, Prafulla Sarkar St, Esplanade, Chowringhee North, Bow Barracks, Kolkata, West Bengal, 700001",
    contactPerson: "Mr. Samarth Parikh",
    designation: "Director",
    mobile: "+91-9830289233, 033-40640110",
    email: "samarth@optronix.in",
    mapLink: "https://maps.google.com/maps?q=22.5670054,88.3543813",
    lat: 22.5670054,
    lon: 88.3543813
  },
  "Ahmedabad Office": {
    address: "A-803,The Soltitaire Corporate Park, Near Divya Bhaskar Press, Prahlad Nagar, Ahmedabad, Gujarat, 380015",
    contactPerson: "Mr. Kiran Solanki",
    designation: "Branch Manager",
    mobile: "+91-8287959850",
    email: "kiran@optronix.in",
    mapLink: "https://maps.google.com/maps?q=22.9999377,72.4994806",
    lat: 22.9999377,
    lon: 72.4994806
  },
  "Mumbai Office": {
    address: "7th Floor, Ecstacy Business Park, ACC Compound, 713, JSD, Ashok Nagar, Mulund West, Mumbai, Maharashtra, 400080",
    contactPerson: "Mr. Koilraj Manickraj",
    designation: "Regional Manager",
    mobile: "+91-8287959879",
    email: "mh.sales02@optronix.in",
    mapLink: "https://maps.google.com/maps?q=19.1764351,72.9600307",
    lat: 19.1764351,
    lon: 72.9600307
  },
  "Patna Office": {
    address: "Hari Om Commercial Compalex 2nd Floor 204 A1, Exhibition road Chauraha, Near SBI Life, Patna, Bihar-800001, India",
    contactPerson: "Vikash Kumar Bharti",
    designation: "Sales Manager",
    mobile: "+91-8287959905",
    email: "br.sales02@optronix.in",
    mapLink: "https://maps.google.com/maps?q=25.6117,85.1426",
    lat: 25.6117,
    lon: 85.1426
  },
  "Chennai Office": {
    address: "Sundaram Ave, Thousand Lights West, Thousand Lights, Chennai, Tamil Nadu, 600006",
    contactPerson: "Mr. Vijayan M",
    designation: "Branch Manager",
    mobile: "+91-9289248831",
    email: "chennai@optronix.in",
    mapLink: "https://maps.google.com/maps?q=13.0568411,80.2548219",
    lat: 13.0568411,
    lon: 80.2548219
  },
  "Hyderabad Office": {
    address: "310A, 3rd floor, TOPAZ PLAZA, Punjagutta Officers Colony, Punjagutta, Hyderabad, Telangana, 500082",
    contactPerson: "Mr. Sharath Babu",
    designation: "Branch Manager",
    mobile: "+91-8287959860",
    email: "sharath@optronix.in",
    mapLink: "https://maps.google.com/maps?q=17.416172,78.448554",
    lat: 17.416172,
    lon: 78.448554
  },
  "Bangalore Office": {
    address: "No.289/1, 1st Floor, Between 17th and 18th Cross (above K.C.Das),Sampige Road, Malleshwaram, Bangalore, Karnataka-560003, India",
    contactPerson: "Rajendra",
    designation: "Branch Manager",
    mobile: "+91-8287959883",
    email: "ka.sr01@optronix.in",
    mapLink: "https://maps.google.com/maps?q=12.9989785,77.5755949",
    lat: 12.9989785,
    lon: 77.5755949
  },
  "Guwahati Office": {
    address: "Candid Optronix, Room no - 201, 2nd floor The Institution of Engineers India Building, Assam State Centre, East Lane, Pan Bazaar Over Bridge, Guwahati, Assam, 781001",
    contactPerson: "Mr. Pranadip Ray(Dip)",
    designation: "Branch Manager",
    mobile: "+91-8287959856",
    email: "deep@optronix.in",
    mapLink: "https://www.google.com/maps/search/?api=1&query=26.1825214,91.7461436",
    lat: 26.1825214,
    lng: 91.7461436,
    lon: 91.7461436
  },
  "Kochi Office": {
    address: "Usnaz Tower, Medical Trust Hospital, 61/276, Mahatma Gandhi Rd, Pallimukku, Ernakulam, Kerala 682016",
    contactPerson: "Mr. Sanoop TS",
    designation: "Manager",
    mobile: "+91-9289248849, 9289248848",
    email: "mh.sales02@optronix.in",
    mapLink: "https://maps.google.com/maps?q=9.964182,76.287088",
    lat: 9.964182,
    lon: 76.287088
  },
  "Jammu Office": {
    address: "",
    contactPerson: "Vijay Ganju",
    designation: "Branch Manager",
    mobile: "+91-7889855626",
    email: "vijay@optronix.in",
    mapLink: "https://maps.google.com/maps?q=32.7378753,74.8206638",
    lat: 32.7378753,
    lon: 74.8206638
  },
  "Siliguri Office": {
    address: "Sumeet Electronics, Bimla Sinha Sarani, Hakimpura, Siliguri - 734001, Darjeeling, West Bengal",
    contactPerson: "Samarth",
    designation: "Branch Manager",
    mobile: "+91-9830289233",
    email: "samarth@optronix.in",
    mapLink: "https://maps.google.com/maps?q=29.5314094,77.5760871",
    lat: 29.5314094,
    lon: 77.5760871
  },
  "Udaipur Office": {
    address: "Rawat Communication, B - 102, Mid Down Business Center, Udipole, Udaipur, Rajasthan - 313001",
    contactPerson: "Ram Chandra Rawat",
    designation: "Branch Manager",
    mobile: "+91-9928583113",
    email: "ramchandra@optronix.in",
    mapLink: "https://maps.google.com/maps?q=24.5773488,73.697678",
    lat: 24.5773488,
    lon: 73.697678
  },
  "Raipur Office": {
    address: "BDS Tower Tourist Beside of Hosptal Simran Station Road, Raipur, Chhattisgarh - 429009",
    contactPerson: "Manish Yadav",
    designation: "Branch Manager",
    mobile: "+91-92892448847",
    email: "manish@optronix.in",
    mapLink: "https://maps.google.com/maps?q=21.2618854,81.5365002",
    lat: 21.2618854,
    lon: 81.5365002
  },
  "Sangrur Office": {
    address: "Moderns Elecronics, Opp. - Guggamarri, Out Side Dhuri Gate, Sangrur, Punjab - 148001",
    contactPerson: "Charanjit Pal Singh",
    designation: "Branch Manager",
    mobile: "+91-9872636096",
    email: "charanjit@optronix.in",
    mapLink: "https://maps.google.com/maps?q=30.2422116,75.8221433",
    lat: 30.2422116,
    lon: 75.8221433
  },
  "Ranchi Office": {
    address: "Ranchi Jharkhand - 834001",
    contactPerson: "Shubhankar Gautam",
    designation: "Branch Manager",
    mobile: "+91-9811273572",
    email: "shubhankar@optronix.in",
    mapLink: "https://maps.google.com/maps?q=23.3431832,85.2387532",
    lat: 23.3431832,
    lon: 85.2387532
  },
  "Lucknow Office": {
    address: "lucknow Uttar Pradesh - 226002",
    contactPerson: "Shubhankar Gautam",
    designation: "Branch Manager",
    mobile: "+91-9811273572",
    email: "shubhankar@optronix.in",
    mapLink: "https://maps.google.com/maps?q=26.848668,80.8599398",
    lat: 26.848668,
    lon: 80.8599398
  }
};

const headOfficeKey = "New Delhi Office";
const headOfficeLabel = "New Delhi Office";
const otherBranchNames = Object.keys(branchDetails)
  .filter((branch) => branch !== headOfficeKey)
  .sort((a, b) => a.localeCompare(b));

const Footer = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false); // controls open direction
  const dropdownRef = useRef(null);
  const mapRef = useRef(null);
  const [loadMap, setLoadMap] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const [selectedBranchKey, setSelectedBranchKey] = useState(headOfficeKey);
  const selectedBranchDetails = branchDetails[selectedBranchKey];

  const mapSrc = `https://www.openstreetmap.org/export/embed.html?bbox=${selectedBranchDetails.lon - 0.01},${selectedBranchDetails.lat - 0.01},${selectedBranchDetails.lon + 0.01},${selectedBranchDetails.lat + 0.01}&layer=mapnik&marker=${selectedBranchDetails.lat},${selectedBranchDetails.lon}`;

  const handleBranchClick = useCallback((branchKey) => {
    setSelectedBranchKey(branchKey);
    setIsDropdownOpen(false);
  }, []);

  // Decide up/down: open down only if enough space
  // Wrapped in useCallback to fix ESLint dependency warning
  const computeDropUp = useCallback(() => {
    if (!dropdownRef.current) return false;
    const rect = dropdownRef.current.getBoundingClientRect();
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;

    const MENU_ROW_HEIGHT = 40;
    const MENU_MAX_HEIGHT = 200;
    const itemCount = otherBranchNames.length + 1;
    const desiredHeight = Math.min(
      itemCount * MENU_ROW_HEIGHT,
      MENU_MAX_HEIGHT
    );

    const spaceBelow = viewportH - rect.bottom;
    return spaceBelow < desiredHeight;
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => {
      const willOpen = !prev;
      if (willOpen) setDropUp(computeDropUp());
      return willOpen;
    });
  }, [computeDropUp]);

  useEffect(() => {
    if (!isDropdownOpen) return;
    const recalc = () => setDropUp(computeDropUp());
    window.addEventListener("resize", recalc);
    window.addEventListener("scroll", recalc, true);
    return () => {
      window.removeEventListener("resize", recalc);
      window.removeEventListener("scroll", recalc, true);
    };
  }, [isDropdownOpen, computeDropUp]);

  useEffect(() => {
    const node = mapRef.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setLoadMap(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="footer-margin" style={{ marginTop: "0px" }}>
      <div className="main-footer">
        {/* --- Column 1: Static Title with DYNAMIC Map --- */}
        <div className="footer-info">
          <h2>Candid Optronix Private Limited</h2>
          <h4 style={{ padding: "10px 0" }}>
            Concept of One Stop Solution
          </h4>
          <div className="footer-map-wrap" ref={mapRef}>
            {!loadMap && (
              <div className="footer-map-placeholder" aria-hidden="true" />
            )}
            <iframe
              title={`Map of ${selectedBranchKey}`}
              width="230"
              height="160"
              style={{ border: 0, maxWidth: "100%" }}
              loading="lazy"
              src={loadMap ? mapSrc : undefined}
            ></iframe>
            <a
              className="footer-map-overlay"
              href={selectedBranchDetails.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${selectedBranchKey} in Maps`}
              title={`Open ${selectedBranchKey} in Maps`}
            />
          </div>
        </div>

        {/* --- Column 2: Branch Dropdown AND Dynamic Details --- */}
        <div className="footer-branch">
          <div>
            <h2>Branch Offices</h2>
            <StyledDropdown ref={dropdownRef}>
              <button
                className="dropdown-toggle"
                onClick={toggleDropdown}
              >
                <span>
                  {selectedBranchKey === headOfficeKey
                    ? headOfficeLabel
                    : selectedBranchKey}
                </span>
                <span
                  className={`dropdown-arrow ${isDropdownOpen ? "open" : ""
                    }`}
                >
                  <IoIosArrowDown />
                </span>
              </button>

              <DropdownMenu $isOpen={isDropdownOpen} $dropUp={dropUp}>
                <li>
                  <button
                    onClick={() => handleBranchClick(headOfficeKey)}
                  >
                    {headOfficeLabel}
                  </button>
                </li>
                {otherBranchNames.map((branch) => (
                  <li key={branch}>
                    <button onClick={() => handleBranchClick(branch)}>
                      {branch}
                    </button>
                  </li>
                ))}
              </DropdownMenu>
            </StyledDropdown>

            <div className="branch-details" style={{ fontSize: "13px" }}>
              <p>
                <strong>Address:</strong> {selectedBranchDetails.address}
              </p>
              <p>
                <strong>Contact:</strong>{" "}
                {selectedBranchDetails.contactPerson} (
                {selectedBranchDetails.designation})
              </p>
              <p>
                <strong>Mobile:</strong> {selectedBranchDetails.mobile}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${selectedBranchDetails.email}`}
                  style={{ color: "white" }}
                >
                  {selectedBranchDetails.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* --- Column 3: Quick Links --- */}
        <div className="footer-quick">
          <div>
            <h2>Quick Links</h2>

            <ul>
              <li>
                <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>Home</Link>

              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>About Us</Link>
              </li>
              <li>
                <Link to="/sumitomo" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>Products</Link>
              </li>
              <li>
                <Link to="/surface-mounting" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>Manufacturings</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>Publications</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>Contact Us</Link>

              </li>
            </ul>
          </div>
        </div>

        {/* --- Column 4: Popular Links and Social Media --- */}
        <div className="footer-popular">
          <div>
            <h2>Popular Links</h2>
            <ul>
              <li>
                <Link to="/deviser" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>Deviser</Link>
              </li>
              <li>
                <Link to="/sumitomo" onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}>Sumitomo</Link>
              </li>
              <li>
                <a href="https://www.spectechnology.com/">
                  SPEC CATV
                </a>
              </li>
              <li>
                <a href="https://dot.gov.in/">
                  Ministry of Telecommunications
                </a>
              </li>
            </ul>
            <div className="social-media">
              <ul>
                <li>
                  <a
                    className="socialmedia"
                    href="https://www.facebook.com/candidoptronix/"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-facebook"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    className="socialmedia"
                    href="https://x.com/candid_optronix"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-twitter-x-line"></i>
                  </a>
                </li>
                <li>
                  <a
                    className="socialmedia"
                    href="https://in.linkedin.com/company/candidoptronix"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-linkedin"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    className="socialmedia"
                    href="https://www.instagram.com/candidoptronix/"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-instagram"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    className="socialmedia"
                    href="https://www.threads.com/@candidoptronix"
                    aria-label="Threads"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaAt style={{ marginTop: "6.5px", fontWeight: "normal" }} />
                  </a>
                </li>
                <li>
                  <a
                    className="socialmedia"
                    href="https://wa.me/919811308000"
                    aria-label="Whatsapp"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-whatsapp"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <a
                    className="socialmedia"
                    href="https://www.youtube.com/@CandidOptronix"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fab fa-youtube"
                      aria-hidden="true"
                    ></i>
                  </a>
                </li>
                <li>
                  <Link
                    className="socialmedia"
                    to="https://www.indiamart.com/candidoptronix/"
                    aria-label="IndiaMART"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={indiamartimg}
                      loading="lazy"
                      alt="Indiamart"
                      width="30"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copywrite">
        <p>
          Copyright © 2026 optronix.in All rights reserved. | Optronix
        </p>
      </div>
    </div>
  );
};

export default Footer;
