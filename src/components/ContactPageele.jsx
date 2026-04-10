import { mediaUrl } from '../config/media';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./index.css"; // Make sure this CSS file has the dropdown styles
import { FaAt } from 'react-icons/fa';
const ContactPageele = () => {
  // Set page title and meta description
  useEffect(() => {
    document.title = 'Contact Optronix: Fiber Optic Cable & Connectivity Experts';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', ' Need Fiber Optic Cable, CATV, or Connectivity solutions? Contact Optronix India’s experts today! Find our head office address, phone numbers, and enquiry form.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = ' Need Fiber Optic Cable, CATV, or Connectivity solutions? Contact Optronix India’s experts today! Find our head office address, phone numbers, and enquiry form.';
      document.head.appendChild(meta);
    }
  }, []);
  const [openBranch, setOpenBranch] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // --- MODIFIED ---
  // The data structure is improved. Each branch now has a 'location' object
  // containing both the link for the pop-up card and the URL for the embedded map.
  const branchDetails = {
    "Corporate Office": {
      address: "A-58, A Block, Sector 58, Noida, Uttar Pradesh-201301, India",
      contactPerson: "Mr. Aditya Gautam",
      designation: "VP Sales",
      mobile: "+91-8588858380",
      email: "aditya@optronix.in",
      location: {
        link: "https://maps.google.com/maps?t=m&f=d&saddr=Current+Location&daddr=28.603552,77.360431",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.548455430857!2d77.35825637620573!3d28.583416975691136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b66b747379%3A0xf63198031024564c!2sCandid%20Optronix%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1716376511477!5m2!1sen!2sin"
      }
    },
    "Kolkata Office": {
      address: "24, Prafulla Sarkar Street, Kolkata, West Bengal-700072, India",
      contactPerson: "Mr. Samarth Parikh",
      designation: "Director",
      mobile: "+91-9830289233, 033-40640110",
      email: "samarth@optronix.in",
      location: {
        link: "https://maps.google.com/maps?t=m&f=d&saddr=Current+Location&daddr=22.5670054,88.3543813",
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.288226955365!2d88.35811097611756!3d22.568341679495024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02779a5aaaaaab%3A0x8e8a34d0b1d55555!2sCandid%20Optronix%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716376615962!5m2!1sen!2sin"
      }
    },
    // ... Repeat this new structure for all other branches ...
    "Siliguri Office": { address: "Bimal Sinha Sarani, Hakimpara, Siliguri, Dist. Darjeeling, West Bengal-734001, India", contactPerson: "Mr. Rushab Tolia", designation: "Branch Manager", mobile: "+91-9836222667", email: "rushab@optronix.in", location: { link: "https://maps.google.com/maps?t=m&f=d&saddr=Current+Location&daddr=26.717747,88.4288639", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.8580007817743!2d88.42628887624131!3d26.71775197676648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4410959f6b0f9%3A0xf438c6428c00537e!2sCandid%20Optronix%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1716376663236!5m2!1sen!2sin" } },
    "Ahmedabad Office": { address: "A-803, The Soltitaire Corporate Park, Near Divya Bhaskar Press, Prahaladnagar, S.G. Highway, Ahmedabad, Gujarat-380051, India", contactPerson: "Mr. Kiran Solanki", designation: "Branch Manager", mobile: "+91-8287959850", email: "kiran@optronix.in", location: { link: "https://maps.google.com/maps?t=m&f=d&saddr=Current+Location&daddr=22.9999377,72.4994806", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.074735237785!2d72.49690557612988!3d22.99994247917549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b23b0000001%3A0x33b8a3e7486e9297!2sThe%20Solitaire%20Corporate%20Park!5e0!3m2!1sen!2sin!4v1716376703598!5m2!1sen!2sin" } },
    "Mumbai Office": { address: "713, 7th Floor Ecstacy Business Park, City Of Joy, ACC Compound, J.S.D Marg, Mulund West, Mumbai, Maharashtra-400080, India", contactPerson: "Mr. Koilraj Manickraj", designation: "Regional Manager", mobile: "+91-8287959879", email: "mh.sales02@optronix.in", location: { link: "https://maps.google.com/maps?t=m&f=d&saddr=Current+Location&daddr=19.1764351,72.9600307", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.109033282299!2d72.95745567603348!3d19.17644007913079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b85845244519%3A0x675f922657e24a9!2sEcstasy%20Business%20Park!5e0!3m2!1sen!2sin!4v1716376742911!5m2!1sen!2sin" } },
    "Patna Office": { address: "Hari Om Commercial Compalex 2nd Floor 204 A1, Exhibition road Chauraha, Near SBI Life, Patna, Bihar-800001, India", contactPerson: "Vikash Kumar Bharti", designation: "Sales Manager", mobile: "+91-8287959905", email: "br.sales02@optronix.in", location: { link: "https://maps.google.com/maps?q=25.6117,85.1426", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.7!2d85.14!3d25.61!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5874431e7795%3A0x8e5c2a1389c9261a!2sHariom%20Commercial%20Complex!5e0!3m2!1sen!2sin!4v1716376785081!5m2!1sen!2sin" } },
    "Chennai Office": { address: "No: 609, 1st Floor, 1-B Lakshmi Bhavan, Sundram Avenue, Anna Salai Landmark: Near VBJ Jewellerws, Gemini flyover, Thousand Lights, Chennai, Tamil Nadu-600006, India", contactPerson: "Mr. Vijayan M", designation: "Branch Manager", mobile: "+91-9289248831", email: "chennai@optronix.in", location: { link: "https://maps.google.com/maps?t=m&f=d&saddr=Current+Location&daddr=13.0568411,80.2548219", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.649699661139!2d80.25224687593674!3d13.056846077271966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526615049339e1%3A0xf65f4b5003c2d431!2sLakshmi%20Bhavan!5e0!3m2!1sen!2sin!4v1716376822588!5m2!1sen!2sin" } },
    "Hyderabad Office": { address: "#310A, 3rd Floor, Topaz Plaza, Punjagutta, Hyderabad, Telangana-500082, India", contactPerson: "Mr. Sharath Babu", designation: "Branch Manager", mobile: "+91-8287959860", email: "sharath@optronix.in", location: { link: "https://www.google.com/maps?q=Banjara+Hills,+Hyderabad,+Telangana,+India", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.918928628037!2d78.44855497599557!3d17.41617267443216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb973e73860001%3A0x94b408801d4a8449!2sTopaz%20Plaza!5e0!3m2!1sen!2sin!4v1716376856037!5m2!1sen!2sin" } },
    "Bangalore Office": { address: "No.289/1, 1st Floor, Between 17th and 18th Cross (above K.C.Das),Sampige Road, Malleshwaram, Bangalore, Karnataka-560003, India", contactPerson: "Sandeep Singh", designation: "Regional Manager", mobile: "+91-9599068940", email: "rm02@optronix.in", location: { link: "https://maps.google.com/maps?t=m&f=d&saddr=Current+Location&daddr=12.9989785,77.5755949", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6710778465697!2d77.57301987593574!3d12.99898317732296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae161b2a9f5d3d%3A0x7d287127e834629c!2s17th%20Cross%20Rd%2C%20Malleswaram%2C%20Bengaluru%2C%20Karnataka%20560003!5e0!3m2!1sen!2sin!4v1716376891696!5m2!1sen!2sin" } },
    "Guwahati Office": { address: "#No:6, 3rd Floor Anil Plaza GS Road, Guwahati, Assam-7810005, India", contactPerson: "Mr. Pranadip Ray(Dip)", designation: "Branch Manager", mobile: "+91-8287959856", email: "deep@optronix.in", location: { link: "https://maps.google.com/maps?t=m&f=d&saddr=Current+Location&daddr=26.1612135,91.7739273", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.8912255734267!2d91.77135227622005!3d26.16121817709971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a597a7322e171%3A0x6b82755e199d3e85!2sAnil%20Plaza!5e0!3m2!1sen!2sin!4v1716376926343!5m2!1sen!2sin" } },
    "Kochi Office": { address: "61/276, Usnaz Tower Medical Trust Hospital Jn Pallimukku, MG Road, Kochi, Kerala-682016, India", contactPerson: "Mr. Sanoop TS", designation: "Regional Manager", mobile: "+91-9289248849, 9289248848", email: "kl.sales01@optronix.in", location: { link: "https://maps.google.com/maps?t=m&f=d&saddr=Current+Location&daddr=9.964182,76.287088", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.626500507297!2d76.28493397589146!3d9.963686072898254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b087396c5555555%3A0x2863372c3d4204b1!2sUsnaz%20Tower!5e0!3m2!1sen!2sin!4v1716376958449!5m2!1sen!2sin" } },
  };

  const headOfficeLabel = "Head Office";
  const headOfficeKey = "Corporate Office";

  // State to hold the current map's embed URL.
  // It's initialized with the Head Office's map.
  const [mapSrc, setMapSrc] = useState(branchDetails[headOfficeKey].location.embedUrl);

  const otherBranchNames = Object.keys(branchDetails).filter(
    (branch) => branch !== headOfficeKey
  );

  const handleBranchClick = (branchKey) => {
    setOpenBranch(branchKey);

    // Update the map source using the new data structure
    if (branchDetails[branchKey] && branchDetails[branchKey].location.embedUrl) {
      setMapSrc(branchDetails[branchKey].location.embedUrl);
    }

    setIsDropdownOpen(false);
  };

  const handleCloseDialog = () => {
    setOpenBranch(null);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="footer-margin" style={{ marginTop: "-0px" }} >
      <div className="main-footer">
        <div className="footer-info">
          <h2>Candid Optronix Private Limited</h2>
          <h4 style={{ padding: "10px 0" }}>
            Concept of One Stop Solution
          </h4>
          <div>
            <iframe
              key={mapSrc}
              title="office map"
              src={mapSrc}
              width="230px"
              height="160px"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* ... Branch Offices and other columns ... */}
        {/* No changes needed in this part of the JSX, it will work with the new logic */}
        <div className="footer-branch">
          <div>
            <h2>Branch Offices</h2>
            <ul>
              <li className="dropdown-container">
                <button className="branch-link dropdown-toggle" onClick={toggleDropdown}>
                  {headOfficeLabel}
                  <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
                </button>

                {isDropdownOpen && (
                  <ul className="dropdown-menu">
                    <li>
                      <button className="branch-link" onClick={() => handleBranchClick(headOfficeKey)}>
                        {headOfficeLabel}
                      </button>
                    </li>

                    {otherBranchNames.map((branch) => (
                      <li key={branch}>
                        <button className="branch-link" onClick={() => handleBranchClick(branch)}>
                          {branch}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-quick">
          <div>
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Products</Link></li>
              <li><Link to="/">Manufacturings</Link></li>
              <li><Link to="/publication">Publications</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-popular">
          <div>
            <h2>Popular Links</h2>
            <ul>
              <li><Link to="/deviser">Deviser</Link></li>
              <li><Link to="/sumitomo">Sumitomo</Link></li>
              <li><Link to="https://www.spectechnology.com/">SPEC CATV</Link></li>
              <li><Link to="https://dot.gov.in/">Ministry of Telecommunications</Link></li>
            </ul>
            <div className="social-media">
              <ul>
                <li><a className="socialmedia" href="https://www.facebook.com/candidoptronix/" aria-label="Facebook" target='_blank' rel="noreferrer"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                <li><a className="socialmedia" href="https://twitter.com/candid_optronix" aria-label="Twitter" target='_blank' rel="noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                <li><a className="socialmedia" href="https://in.linkedin.com/company/candidoptronix" aria-label="LinkedIn" target='_blank' rel="noreferrer"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                <li><a className="socialmedia" href="https://www.instagram.com/candidoptronix/" aria-label="Instagram" target='_blank' rel="noreferrer"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                <li><a className="socialmedia" href="https://www.threads.com/@candidoptronix" aria-label="thread" target='_blank' rel="noreferrer"><FaAt color="#A7402D" style={{ marginTop: "6.5px", fontWeight: "normal" }} /></a></li>
                <li><a className="socialmedia" href="https://wa.me/919811308000" aria-label="Whatsapp" target='_blank' rel="noreferrer"><i className="fab fa-whatsapp" aria-hidden="true"></i></a></li>
                <li><a className="socialmedia" href="https://www.youtube.com/@CandidOptronix" aria-label="Whatsapp" target='_blank' rel="noreferrer"><i className="fab fa-youtube" aria-hidden="true"></i></a></li>
              </ul>
              <ul>
                <li><Link className="indiamartb" to="https://www.indiamart.com/candidoptronix/" aria-label="indiamart" target='_blank' rel="noreferrer"><img src={mediaUrl.image("indiamart.png")} loading="lazy" alt="Indiamart" width="30" /></Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copywrite">
        <p>Copyright @ 2016 optronix.in All rights reserved. | Optronix</p>
      </div>

      {openBranch && (
        <div className="dialog-overlay">
          <div className="dialog-box">
            <h3>{openBranch}</h3>
            <p><strong>Contact Person:</strong> {branchDetails[openBranch].contactPerson}</p>
            <p><strong>Designation:</strong> {branchDetails[openBranch].designation}</p>
            <p><strong>Email:</strong> <a href={`mailto:${branchDetails[openBranch].email}`}>{branchDetails[openBranch].email}</a></p>
            <p><strong>Address:</strong> {branchDetails[openBranch].address}</p>

            {/* --- MODIFIED --- */}
            {/* This now points to the 'link' property inside the new 'location' object. */}
            <p><strong>Location:</strong> <a href={branchDetails[openBranch].location.link} target="_blank" rel="noopener noreferrer">View Location</a></p>

            <button className="closee-btn" onClick={handleCloseDialog}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPageele;