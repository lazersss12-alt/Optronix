// import React, { useState, useEffect } from 'react';
// import '../../../components/Contact.css';
// import opticsphoto1 from '../../../assets/images/Opticalplant.png';

// function Contactpageform() {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     address: '',
//     email: '',
//     enquiry: '',
//   });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const formDataToSend = new FormData();
//       formDataToSend.append('name', formData.name);
//       formDataToSend.append('email', formData.email);
//       formDataToSend.append('phone', formData.mobile);
//       formDataToSend.append('address', formData.address);
//       formDataToSend.append('message', formData.enquiry);
//       formDataToSend.append('_subject', 'New Contact Form Submission - Optronix Website');
//       formDataToSend.append('_template', 'table');
//       formDataToSend.append('_captcha', 'false');
//       formDataToSend.append('_next', 'https://optronix.in/thank-you');
//       formDataToSend.append('_cc', 'shubhankar@optronix.in'); // Add CC recipient
//       formDataToSend.append('_autoresponse', `Dear ${formData.name || 'Customer'},\n\nThank you for contacting Optronix. We have received your message and our team will get back to you shortly.\n\nBest regards,\nOptronix Team`);

//       const response = await fetch('https://formsubmit.co/ajax/info@optronix.in', {
//         method: 'POST',
//         body: formDataToSend,
//       });

//       const result = await response.json();
//       setLoading(false);

//       if (response.ok && result.success === 'true') {
//         alert('Thank you for your message! We will get back to you soon.');
//         setFormData({
//           name: '',
//           mobile: '',
//           address: '',
//           email: '',
//           enquiry: '',
//         });
//       } else {
//         throw new Error(result.message || 'Failed to submit form');
//       }
//     } catch (error) {
//       setLoading(false);
//       console.error("Submission error:", error);
//       alert('Failed to send message. Please try again later or contact us directly at info@optronix.in');
//     }
//   };

//   return (
//     <div className='contact-form-main-grid'>
//       <div className="contact-form-container">
//         <form className="contact-form" onSubmit={handleSubmit}>
//           <h1>Contact Form</h1>
//           {['name', 'mobile', 'address', 'email'].map((field) => (
//             <div className="form-group" key={field}>
//               <label htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
//               <input
//                 type={field === 'email' ? 'email' : 'text'}
//                 id={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 placeholder={`Enter your ${field}`}
//                 required={field !== 'address'}
//               />
//             </div>
//           ))}
//           <div className="form-group">
//             <label htmlFor="enquiry">Enquiry</label>
//             <textarea
//               id="enquiry"
//               name="enquiry"
//               value={formData.enquiry}
//               onChange={handleChange}
//               placeholder="Enter your enquiries"
//               required
//             ></textarea>
//           </div>
//           <button type="submit" className="submit-btn" disabled={loading}>
//             {loading ? 'Submitting...' : 'Submit'}
//           </button>
//         </form>
//       </div>
//       <div className='contact-form-container-art'>
//         <div className='contact_page_art'>
//           <h3>Thank You for Connecting with Candid Optronix Pvt. Ltd.</h3>
//           <p style={{ textAlign: 'justify', marginBottom: '20px' }}>
//             We appreciate your interest and are here to assist you. Please fill out the form below, and our team will get back to you shortly. Your satisfaction is our priority.
//           </p>
//           <div style={{ 
//             display: 'flex', 
//             justifyContent: 'center', 
//             alignItems: 'center',
//             width: '100%',
//             height: '300px',
//             overflow: 'hidden',
//             borderRadius: '8px',
//             boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
//           }}>
//             <img loading="lazy" 
//               src={opticsphoto1} 
//               alt="Thank You" 
//               style={{ 
//                 width: '100%',
//                 height: '100%',
//                 objectFit: 'cover',
//                 objectPosition: 'center'
//               }} 
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contactpageform;




// import React, { useState, useEffect } from 'react';
// import '../../../components/Contact.css';
// import { FiPhone, FiMail, FiClock, FiMapPin, FiExternalLink } from 'react-icons/fi';
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';

// function Contact() {
//   // Page title + meta
//   useEffect(() => {
//     document.title = 'Contact Optronix: Fiber Optic Cable & Connectivity Experts';
//     const metaDescription = document.querySelector('meta[name="description"]');
//     const content =
//       'Need Fiber Optic Cable, CATV, or Connectivity solutions? Contact Optronix Indiaâ€™s experts today! Find our head office address, phone numbers, and enquiry form.';
//     if (metaDescription) {
//       metaDescription.setAttribute('content', content);
//     } else {
//       const meta = document.createElement('meta');
//       meta.name = 'description';
//       meta.content = content;
//       document.head.appendChild(meta);
//     }
//   }, []);

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     company: '',
//     subject: '',
//     mobile: '',
//     address: '',
//     enquiry: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   // Mobile: digits-only, max 10
//   const handleMobileChange = (e) => {
//     const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
//     setFormData(prev => ({ ...prev, mobile: digitsOnly }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       // If you prefer SweetAlert validation instead of native, uncomment below:
//       // if (formData.mobile.length !== 10) {
//       //   await Swal.fire({
//       //     title: 'Invalid mobile number',
//       //     text: 'Please enter a 10-digit mobile number.',
//       //     icon: 'warning',
//       //     confirmButtonColor: '#0a7cff',
//       //   });
//       //   setIsSubmitting(false);
//       //   return;
//       // }
//       // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       //   await Swal.fire({
//       //     title: 'Invalid email',
//       //     text: 'Please enter a valid email address.',
//       //     icon: 'warning',
//       //     confirmButtonColor: '#0a7cff',
//       //   });
//       //   setIsSubmitting(false);
//       //   return;
//       // }

//       const endpoint = 'https://formsubmit.co/ajax/info@optronix.in';

//       const payload = {
//         name: formData.name,
//         company: formData.company,
//         mobile: formData.mobile,
//         email: formData.email,
//         subject: formData.subject,
//         address: formData.address,
//         enquiry: formData.enquiry,

//         _subject: 'New Contact Form Submission - Optronix Website',
//         _template: 'table',
//         _captcha: 'false',
//         _cc: 'shubhankar@optronix.in',
//         _replyto: formData.email || undefined,
//         ...(formData.email
//           ? {
//               _autoresponse: `Dear ${formData.name || 'Customer'},\n\nThank you for contacting Optronix. We have received your message and our team will get back to you shortly.\n\nBest regards,\nOptronix Team`,
//             }
//           : {}),
//       };

//       const res = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Accept: 'application/json',
//         },
//         body: JSON.stringify(payload),
//       });

//       const data = await res.json();
//       const isSuccess = res.ok && (data.success === true || data.success === 'true');
//       if (!isSuccess) {
//         throw new Error(data.message || 'Failed to submit form.');
//       }

//       await Swal.fire({
//         title: 'Thank you!',
//         text: `Hi${formData.name ? ` ${formData.name}` : ''}, we've received your message. Our team will get back to you shortly.`,
//         icon: 'success',
//         confirmButtonText: 'Close',
//         confirmButtonColor: '#0a7cff',
//       });

//       setFormData({
//         name: '',
//         email: '',
//         company: '',
//         subject: '',
//         mobile: '',
//         address: '',
//         enquiry: '',
//       });
//     } catch (err) {
//       await Swal.fire({
//         title: 'Submission failed',
//         text: err.message || 'Something went wrong. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'Close',
//         confirmButtonColor: '#0a7cff',
//       });
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const branchDetails = {
//     "New Delhi Office": {
//       address: "CANDID OPTRONIX PRIVATE LIMITED - HEAD OFFICE, Plot No. A-129, 2, Nirankari Colony, Mukherjee Nagar, Delhi, 110009",
//       contactPerson: "Shubhankar Gautam",
//       designation: "Manager",
//       mobile: "+91-9811273572",
//       email: "shubhankar@optronix.in",
//       mapLink: "https://www.google.com/maps?q=28.7154528,77.2082415",
//       lat: 28.7154528,
//       lon: 77.2082415
//     },
//     "Noida Office": {
//       address: "A-58, A Block, Sector 58, Noida, Uttar Pradesh-201301, India",
//       contactPerson: "Mr. Aditya Gautam",
//       designation: "VP Sales",
//       mobile: "+91-8588858380",
//       email: "aditya@optronix.in",
//       mapLink: "https://maps.google.com/maps?q=28.603552,77.360431",
//       lat: 28.603552,
//       lon: 77.360431
//     },
//     "Kolkata Office": {
//       address: "24, Prafulla Sarkar Street, Kolkata, West Bengal-700072, India",
//       contactPerson: "Mr. Samarth Parikh",
//       designation: "Director",
//       mobile: "+91-9830289233, 033-40640110",
//       email: "samarth@optronix.in",
//       mapLink: "https://maps.google.com/maps?q=22.5670054,88.3543813",
//       lat: 22.5670054,
//       lon: 88.3543813
//     },
//     "Siliguri Office": {
//       address: "Bimal Sinha Sarani, Hakimpara, Siliguri, Dist. Darjeeling, West Bengal-734001, India",
//       contactPerson: "Mr. Rushab Tolia",
//       designation: "Branch Manager",
//       mobile: "+91-9836222667",
//       email: "rushab@optronix.in",
//       mapLink: "https://maps.google.com/maps?q=26.717747,88.4288639",
//       lat: 26.717747,
//       lon: 88.4288639
//     },
//     "Ahmedabad Office": {
//       address: "A-803, The Soltitaire Corporate Park, Near Divya Bhaskar Press, Prahaladnagar, S.G. Highway, Ahmedabad, Gujarat-380051, India",
//       contactPerson: "Mr. Kiran Solanki",
//       designation: "Branch Manager",
//       mobile: "+91-8287959850",
//       email: "kiran@optronix.in",
//       mapLink: "https://maps.google.com/maps?q=22.9999377,72.4994806",
//       lat: 22.9999377,
//       lon: 72.4994806
//     },
//     "Mumbai Office": {
//       address: "713, 7th Floor Ecstacy Business Park, City Of Joy, ACC Compound, J.S.D Marg, Mulund West, Mumbai, Maharashtra-400080, India",
//       contactPerson: "Mr. Koilraj Manickraj",
//       designation: "Regional Manager",
//       mobile: "+91-8287959879",
//       email: "mh.sales02@optronix.in",
//       mapLink: "https://maps.google.com/maps?q=19.1764351,72.9600307",
//       lat: 19.1764351,
//       lon: 72.9600307
//     },
//     "Patna Office": {
//       address: "Hari Om Commercial Compalex 2nd Floor 204 A1, Exhibition road Chauraha, Near SBI Life, Patna, Bihar-800001, India",
//       contactPerson: "Vikash Kumar Bharti",
//       designation: "Sales Manager",
//       mobile: "+91-8287959905",
//       email: "br.sales02@optronix.in",
//       mapLink: "https://maps.google.com/maps?q=25.6148124,85.1430729",
//       lat: 25.6148124,
//       lon: 85.1430729
//     },
//     "Chennai Office": {
//       address: "No: 609, 1st Floor, 1-B Lakshmi Bhavan, Sundram Avenue, Anna Salai Landmark: Near VBJ Jewellerws, Gemini flyover, Thousand Lights, Chennai, Tamil Nadu-600006, India",
//       contactPerson: "Mr. Vijayan M",
//       designation: "Branch Manager",
//       mobile: "+91-9289248831",
//       email: "chennai@optronix.in",
//       mapLink: "https://maps.google.com/maps?q=13.0568411,80.2548219",
//       lat: 13.0568411,
//       lon: 80.2548219
//     },
//     "Hyderabad Office": {
//       address: "#310A, 3rd Floor, Topaz Plaza, Punjagutta, Hyderabad, Telangana-500082, India",
//       contactPerson: "Mr. Sharath Babu",
//       designation: "Branch Manager",
//       mobile: "+91-8287959860",
//       email: "sharath@optronix.in",
//       mapLink: "https://maps.google.com/maps?q=17.416172,78.448554",
//       lat: 17.416172,
//       lon: 78.448554
//     },
//     "Bangalore Office": {
//       address: "No.289/1, 1st Floor, Between 17th and 18th Cross (above K.C.Das), Sampige Road, Malleshwaram, Bangalore, Karnataka-560003, India",
//       contactPerson: "Rajendra",
//       designation: "Branch Manager",
//       mobile: "+91-8287959883",
//       email: "ka.sr01@optronix.in",
//       mapLink: "https://maps.google.com/maps?q=12.9989785,77.5755949",
//       lat: 12.9989785,
//       lon: 77.5755949
//     },
//     "Guwahati Office": {
//       address: "Over Bridge, Candid Optronix, Room no - 201, 2nd floor The Institution of Engineers India Building, Assam State Centre, East Lane, Pan Bazaar, Guwahati, Assam 781001",
//       contactPerson: "Mr. Pranadip Ray(Dip)",
//       designation: "Branch Manager",
//       mobile: "+91-8287959856",
//       email: "deep@optronix.in",
//       mapLink: "https://www.google.com/maps/search/?api=1&query=26.1825214,91.7461436",
//       lat: 26.1825214,
//       lng: 91.7461436,
//       lon: 91.7461436
//     },
//     "Kochi Office": {
//       address: "61/276, Usnaz Tower Medical Trust Hospital Jn Pallimukku, MG Road, Kochi, Kerala-682016, India",
//       contactPerson: "Renjith Raja Gopalan",
//       designation: "Sales Executive",
//       mobile: "+91-9289248848",
//       email: "kl.sales01@optronix.in",
//       mapLink: "https://maps.google.com/maps?q=9.9636814,76.287509",
//       lat: 9.9636814,
//       lon: 76.287509
//     },
//   };

//   const headOfficeKey = "New Delhi Office";
//   const [selectedBranchKey, setSelectedBranchKey] = useState(headOfficeKey);
//   const selectedBranchDetails = branchDetails[selectedBranchKey];

//   return (
//     <section className="contact-page">
//       <div className="contact-header">
//         <span className="eyebrow">Contact us</span>
//         <h1>Get in Touch with Our Team</h1>
//         <p className="sub">
//           We understand every clientâ€™s need is different. whether youâ€™re planning a new setup, upgrading equipment, or facing technical challenges.
//           Our team will connect with the right solution for you.
//         </p>
//       </div>

//       <div className="contact-grid">
//         {/* Left: Form */}
//         <div className="c-card form-card">
//           <h2>Letâ€™s Talk</h2>

//           {/* Submit via AJAX to FormSubmit and show SweetAlert2 popup */}
//           <form className="optronix-form" onSubmit={handleSubmit}>
//             <div className="form-field">
//               <label htmlFor="name">Name</label>
//               <input
//                 id="name"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Required"
//                 required
//                 autoComplete="name"
//               />
//             </div>

//             <div className="form-field">
//               <label htmlFor="company">Company Name</label>
//               <input
//                 id="company"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleChange}
//                 placeholder="Optional"
//                 autoComplete="organization"
//               />
//             </div>

//             <div className="form-field">
//               <label htmlFor="mobile">Mobile</label>
//               <input
//                 id="mobile"
//                 name="mobile"
//                 type="tel"
//                 inputMode="numeric"
//                 pattern="[0-9]{10}"
//                 minLength={10}
//                 maxLength={10}
//                 title="Enter a 10-digit mobile number"
//                 value={formData.mobile}
//                 onChange={handleMobileChange}
//                 placeholder="Required"
//                 required
//                 autoComplete="tel-national"
//               />
//             </div>

//             <div className="form-field">
//               <label htmlFor="email">Email Address</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 inputMode="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Optional"
//                 required
//                 autoComplete="email"
//                 spellCheck="false"
//               />
//             </div>

//             <div className="form-field">
//               <label htmlFor="subject">Subject</label>
//               <input
//                 id="subject"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 placeholder="Required"
//                 required
//               />
//             </div>

//             <div className="form-field">
//               <label htmlFor="address">Address</label>
//               <input
//                 id="address"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//                 placeholder="Optional"
//                 autoComplete="street-address"
//               />
//             </div>

//             <div className="form-field form-span-2">
//               <label htmlFor="enquiry">Message</label>
//               <textarea
//                 id="enquiry"
//                 name="enquiry"
//                 rows="5"
//                 value={formData.enquiry}
//                 onChange={handleChange}
//               />
//             </div>

//             <div className="form-actions form-span-2">
//               <button type="submit" className="btn-primary" disabled={isSubmitting}>
//                 {isSubmitting ? 'Sendingâ€¦' : 'Send Message'}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Right: Info + Map */}
//         <div className="right-col">
//           <div className="c-card info-card">
//             <h3>Prefer a Direct Approach?</h3>
//             <ul className="info-list">
//               <li><FiPhone /> <a href="tel:+919811308000">+91-9811308000</a></li>
//               <li><FiMail /> <a href="mailto:info@optronix.in">info@optronix.in</a></li>
//               <li><FiClock /> Monday to Saturday, 10:00 AM â€“ 7:00 PM (GMT+5:30)</li>
//             </ul>
//           </div>

//           <div className="c-card map-card">
//             <div className="map-head">
//               <div className="map-title">
//                 <FiMapPin />
//                 <div>
//                   <strong>Visit Our Office</strong>
//                   <p className="muted">{selectedBranchKey}</p>
//                 </div>
//               </div>
//               <div className="map-select">
//                 <label htmlFor="branch" className="sr-only">Choose branch</label>
//                 <select
//                   id="branch"
//                   value={selectedBranchKey}
//                   onChange={(e) => setSelectedBranchKey(e.target.value)}
//                 >
//                   {Object.keys(branchDetails).map(b => (
//                     <option key={b} value={b}>{b}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             <div className="map-embed">
//               <iframe
//                 title={`Map of ${selectedBranchKey}`}
//                 width="100%"
//                 height="100%"
//                 style={{ border: 0 }}
//                 src={`https://www.openstreetmap.org/export/embed.html?bbox=${
//                   selectedBranchDetails.lon - 0.01
//                 },${selectedBranchDetails.lat - 0.01},${
//                   selectedBranchDetails.lon + 0.01
//                 },${selectedBranchDetails.lat + 0.01}&layer=mapnik&marker=${
//                   selectedBranchDetails.lat
//                 },${selectedBranchDetails.lon}`}
//               />
//               <a
//                 className="map-overlay"
//                 href={selectedBranchDetails.mapLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 title={`Open ${selectedBranchKey} in Maps`}
//                 aria-label={`Open ${selectedBranchKey} in Maps`}
//               />
//             </div>

//             <div className="map-footer">
//               <p className="address">{selectedBranchDetails.address}</p>
//               <a
//                 className="btn-outline"
//                 href={selectedBranchDetails.mapLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Get a Direction <FiExternalLink />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Contact;


















import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../../components/Contact.css';
import { FiPhone, FiMail, FiClock, FiMapPin, FiExternalLink } from 'react-icons/fi';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Escape user input to avoid HTML injection in the email
const escapeHtml = (str = '') =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

// HTML autoresponse email content (your template)
const thankYouEmailHTML = (customerName = 'Customer') => `
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Thank You Email</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f4f6f8; margin:0; padding:0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:30px auto; background-color:#ffffff; border-radius:10px; box-shadow:0 3px 10px rgba(0,0,0,0.1);">
    
    <tr>
      <td style="padding:20px; text-align:center; background-color:#ffffff; border-top-left-radius:10px; border-top-right-radius:10px;">
        <img src="${process.env.PUBLIC_URL}/img/logo.png" loading="lazy" alt="Candid Optronix Pvt. Ltd." style="max-width:180px; height:auto;">
      </td>
    </tr>
    
    <tr>
      <td style="padding:15px 20px; text-align:center; background-color:#A7402D; color:#ffffff; font-size:22px; font-weight:bold; border-radius:0 0 10px 10px;">
        Thank You for Contacting Us
      </td>
    </tr>
    
    <tr>
      <td style="padding:25px 20px; color:#333333; line-height:1.6;">
        <p>Dear ${escapeHtml(customerName)},</p>
        <p>Thank you for reaching out to <strong>Candid Optronix Pvt. Ltd.</strong></p>
        <p>We have received your enquiry and our team will review it shortly. A representative will get in touch with you within <strong>24 working hours</strong> to assist with your request.</p>
        <p>If you need immediate assistance, you can contact us directly:</p>
        <p style="text-align:center; font-size:16px;">
          ðŸ“ž <a href="tel:+919811308000" style="color:#004aad; text-decoration:none;">9811308000</a> | âœ‰ï¸ <a href="mailto:info@optronix.in" style="color:#004aad; text-decoration:none;">info@optronix.in</a>
        </p>
        <p style="text-align:center;">
          <a href="https://www.optronix.in" style="display:inline-block; background-color:#A7402D; color:#ffffff; text-decoration:none; padding:12px 25px; border-radius:5px; font-weight:bold;">Visit Our Website</a>
        </p>
        <p>We appreciate your interest in <strong>Candid Optronix Pvt. Ltd.</strong> and look forward to serving you.</p>
      </td>
    </tr>
    
    <tr>
      <td style="padding:20px; text-align:center; border-top:1px solid #e0e0e0; color:#555555; font-size:14px;">
        <p>Warm regards,<br>
        <strong>Team Candid Optronix Pvt. Ltd.</strong></p>
        <p>ðŸ“ž <a href="tel:+919811308000" style="color:#004aad; text-decoration:none;">9811308000</a> | âœ‰ï¸ <a href="mailto:info@optronix.in" style="color:#004aad; text-decoration:none;">info@optronix.in</a><br>
        ðŸŒ <a href="https://www.optronix.in" style="color:#004aad; text-decoration:none;">www.optronix.in</a></p>
      </td>
    </tr>
    
  </table>
</body>
</html>
`;

function Contact() {
  // Page title + meta
  useEffect(() => {
    document.title = 'Contact Optronix: Fiber Optic Cable & Connectivity Experts';
    const metaDescription = document.querySelector('meta[name="description"]');
    const content =
      'Need Fiber Optic Cable, CATV, or Connectivity solutions? Contact Optronix Indiaâ€™s experts today! Find our head office address, phone numbers, and enquiry form.';
    if (metaDescription) {
      metaDescription.setAttribute('content', content);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    service: '',
    mobile: '',
    address: '',
    enquiry: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Mobile: digits-only, max 10
  const handleMobileChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData(prev => ({ ...prev, mobile: digitsOnly }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const endpoint = 'https://script.google.com/macros/s/AKfycbyJ_0rS7xGqMi8ZJQ5s12T2ksx8H7Tr2aQl2uiWq5KCVvjTCnYMp7Rh2OkdOcrSvgKtoA/exec';

      const payload = {
        name: formData.name,
        company: formData.company,
        mobile: formData.mobile,
        email: formData.email,
        subject: formData.subject,
        service: formData.service,
        address: formData.address,
        enquiry: formData.enquiry,
      };

      // Using URLSearchParams to ensure a strictly "simple" request (application/x-www-form-urlencoded)
      // This is the most robust way to avoid CORS preflight blocks.
      const searchParams = new URLSearchParams();
      Object.keys(payload).forEach(key => {
        if (payload[key]) searchParams.append(key, payload[key]);
      });

      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: searchParams
      });

      await Swal.fire({
        title: 'Thank you!',
        text: `Hi${formData.name ? ` ${formData.name}` : ''}, we've received your message. Our team will get back to you shortly.`,
        icon: 'success',
        confirmButtonText: 'Close',
        confirmButtonColor: '#A7402D',
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        service: '',
        mobile: '',
        address: '',
        enquiry: '',
      });
    } catch (err) {
      await Swal.fire({
        title: 'Submission failed',
        text: err.message || 'Something went wrong. Please try again.',
        icon: 'error',
        confirmButtonText: 'Close',
        confirmButtonColor: '#A7402D',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      designation: "Regional Manager",
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
  const [selectedBranchKey, setSelectedBranchKey] = useState(headOfficeKey);
  const selectedBranchDetails = branchDetails[selectedBranchKey];

  return (
    <section className="contact-page">
      <div className="contact-header">
        <span className="eyebrow">Contact us</span>
        <h1>Get in Touch with Our Team</h1>
        <p className="sub">
          We understand every clientâ€™s need is different. whether youâ€™re planning a new setup, upgrading equipment, or facing technical challenges.
          Our team will connect with the right solution for you.
        </p>
      </div>

      <div className="contact-grid">
        {/* Left: Form - updated */}
        <div className="c-card form-card">
          <h2>Letâ€™s Talk</h2>

          {/* Submit via AJAX to FormSubmit and show SweetAlert2 popup */}
          <form className="optronix-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Required"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-field">
              <label htmlFor="company">Company Name</label>
              <input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Optional"
                autoComplete="organization"
              />
            </div>

            <div className="form-field">
              <label htmlFor="mobile">Mobile</label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                inputMode="numeric"
                pattern="[0-9]{10}"
                minLength={10}
                maxLength={10}
                title="Enter a 10-digit mobile number"
                value={formData.mobile}
                onChange={handleMobileChange}
                placeholder="Required"
                required
                autoComplete="tel-national"
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Optional"
                autoComplete="email"
                spellCheck="false"
              />
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Required"
                required
              />
            </div>

            <div className="form-field form-span-2">
              <label htmlFor="service">Service of Interest</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">-- Select a Service --</option>
                <optgroup label="Fiber Optic Products">
                  <option value="Fiber Optic Cables">Fiber Optic Cables</option>
                  <option value="FTTH / GPON / GEPON Solutions">FTTH / GPON / GEPON Solutions</option>

                  <option value="OFC Accessories">OFC Accessories</option>
                </optgroup>
                <optgroup label="Sumitomo Products">
                  <option value="Sumitomo Fusion Splicers">Sumitomo Fusion Splicers</option>
                  <option value="Sumitomo Fiber Cleavers">Sumitomo Fiber Cleavers</option>
                </optgroup>
                <optgroup label="Deviser Instruments">
                  <option value="Deviser OTDR">Deviser OTDR</option>
                  <option value="Deviser OPM / Light Source">Deviser OPM / Light Source</option>

                </optgroup>
                <optgroup label="Optronix Networking">
                  <option value="GEPON / GPON OLT">GEPON / GPON OLT</option>
                  <option value="ONU / ONT Devices">ONU / ONT Devices</option>
                  <option value="EDFA Amplifiers">EDFA Amplifiers</option>
                </optgroup>
                <optgroup label="EMS Facility">
                  <option value="Surface Mounting (SMT)">Surface Mounting (SMT)</option>
                  <option value="Manual Insertion (MI)">Manual Insertion (MI)</option>
                </optgroup>
                <optgroup label="Other">
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="After-Sales Support">After-Sales Support</option>
                  <option value="Other">Other</option>
                </optgroup>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Optional"
                autoComplete="street-address"
              />
            </div>

            <div className="form-field form-span-2">
              <label htmlFor="enquiry">Message</label>
              <textarea
                id="enquiry"
                name="enquiry"
                rows="5"
                value={formData.enquiry}
                onChange={handleChange}
              />
            </div>

            <div className="form-actions form-span-2">
              <button type="submit" className="btn-primary" disabled={isSubmitting}>
                {isSubmitting ? 'Sendingâ€¦' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>

        {/* Right: Info + Map */}
        <div className="right-col">
          <div className="c-card info-card">
            <h3>Prefer a Direct Approach?</h3>
            <ul className="info-list">
              <li><FiPhone /> <a href="tel:+919811308000">+91-9811308000</a></li>
              <li><FiMail /> <a href="mailto:info@optronix.in">info@optronix.in</a></li>
              <li><FiClock /> Monday to Saturday, 10:00 AM â€“ 7:00 PM (GMT+5:30)</li>
            </ul>
          </div>

          <div className="c-card map-card">
            <div className="map-head">
              <div className="map-title">
                <FiMapPin />
                <div>
                  <strong>Visit Our Office</strong>
                  <p className="muted">{selectedBranchKey}</p>
                </div>
              </div>
              <div className="map-select">
                <label htmlFor="branch" className="sr-only">Choose branch</label>
                <select
                  id="branch"
                  value={selectedBranchKey}
                  onChange={(e) => setSelectedBranchKey(e.target.value)}
                >
                  {Object.keys(branchDetails).map(b => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="map-embed">
              <iframe
                title={`Map of ${selectedBranchKey}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedBranchDetails.lon - 0.01
                  },${selectedBranchDetails.lat - 0.01},${selectedBranchDetails.lon + 0.01
                  },${selectedBranchDetails.lat + 0.01}&layer=mapnik&marker=${selectedBranchDetails.lat
                  },${selectedBranchDetails.lon}`}
              />
              <a
                className="map-overlay"
                href={selectedBranchDetails.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                title={`Open ${selectedBranchKey} in Maps`}
                aria-label={`Open ${selectedBranchKey} in Maps`}
              />
            </div>

            <div className="map-footer">
              <p className="address">{selectedBranchDetails.address}</p>
              <a
                className="btn-outline"
                href={selectedBranchDetails.mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a Direction <FiExternalLink />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Distributor CTA */}
      <div className="distributor-cta-section">
        <div className="distributor-cta-card">
          <div className="distributor-cta-icon">🤝</div>
          <div className="distributor-cta-content">
            <h3>Looking to become a Partner?</h3>
            <p>
              Join Optronix's growing distributor network across India. Get access to
              premium fiber optic products, competitive margins, and dedicated support.
            </p>
          </div>
          <Link to="/become-a-distributor" className="distributor-cta-btn">
            Become a Distributor →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Contact;