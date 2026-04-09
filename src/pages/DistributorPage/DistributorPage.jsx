import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './DistributorPage.css';

const NETWORK_SIZE_OPTIONS = [
  'Below 100 connections',
  '100 – 500 connections',
  '500 – 1,000 connections',
  '1,000 – 5,000 connections',
  'Above 5,000 connections',
];

const BUSINESS_OPTIONS = [
  'Yes – Active Telecom Business',
  'Yes – CATV / Cable Operator',
  'Yes – ISP / Network Integrator',
  'Yes – IT / AV Solutions',
  'No – New to Telecom',
];

const DistributorPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    contactPerson: '',
    city: '',
    phone: '',
    email: '',
    networkSize: '',
    existingBusiness: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData(prev => ({ ...prev, phone: value.replace(/\D/g, '').slice(0, 10) }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const contactPayload = {
      name: formData.contactPerson,
      company: formData.company,
      mobile: formData.phone,
      email: formData.email,
      enquiry: `
        City: ${formData.city}
        Network Size: ${formData.networkSize || 'N/A'}
        Existing Telecom Business: ${formData.existingBusiness || 'N/A'}
        Message: ${formData.message || '(no message)'}
      `.trim(),
      subject: `Distributor Inquiry – ${formData.company || formData.contactPerson}`,
    };

    try {
      // Use URLSearchParams to avoid CORS preflight
      const searchParams = new URLSearchParams();
      Object.keys(contactPayload).forEach(key => {
        if (contactPayload[key]) searchParams.append(key, contactPayload[key]);
      });

      await fetch('https://script.google.com/macros/s/AKfycbyJ_0rS7xGqMi8ZJQ5s12T2ksx8H7Tr2aQl2uiWq5KCVvjTCnYMp7Rh2OkdOcrSvgKtoA/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: searchParams
      });

      setSubmitted(true);
    } catch (err) {
      alert(err.message || 'Something went wrong. Please try again or email us at info@optronix.in');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="dp-page">
      <Helmet>
        <title>Distributor Inquiry | Optronix – Deviser & Sumitomo Partner</title>
        <meta
          name="description"
          content="Apply for an Optronix distributorship today. We are India's leading Deviser test equipment India partner and Sumitomo fusion splicer wholesaler. Become a fiber optic instrument dealer, CATV equipment distributor, or OTDR supplier now!"
        />
      </Helmet>

      {/* Hero */}
      <div className="dp-hero">
        <div className="dp-hero-inner">
          <span className="dp-eyebrow">Authorized Distributor Network</span>
          <h1>Become an Optronix <span>Authorized Distributor</span></h1>
          <p>
            Join India's growing network of fiber optic solution partners. As a premier CATV equipment distributor and OTDR supplier, Optronix offers dedicated support for your Optronix distributorship growth.
          </p>
        </div>
      </div>

      {/* Benefits */}
      <div className="dp-benefits">
        {[
          { icon: '💰', label: 'Competitive Margins' },
          { icon: '🛠️', label: 'Technical Training' },
          { icon: '📦', label: 'Priority Stock Access' },
          { icon: '📣', label: 'Co-Marketing Support' },
          { icon: '🤝', label: 'Dedicated Account Manager' },
          { icon: '🌐', label: '18+ PAN India Offices' },
        ].map(({ icon, label }) => (
          <div className="dp-benefit-chip" key={label}>
            <span className="chip-icon">{icon}</span>
            {label}
          </div>
        ))}
      </div>

      {/* Form section */}
      <div className="dp-body">
        <p className="dp-section-label">Distributor Application</p>
        <h2>Tell Us About Your Business</h2>
        <p className="dp-intro">
          Fill out the form below to apply. As a leading <strong>Sumitomo fusion splicer wholesaler</strong> and <strong>fiber optic instrument dealer</strong>, we help you become a certified <strong>Deviser test equipment India</strong> partner. Our team will connect with you within 2 business days.
        </p>

        <div className="dp-card">
          {submitted ? (
            <div className="dp-success">
              <div className="dp-success-icon">🎉</div>
              <h2>Application Received!</h2>
              <p>
                Thank you, <strong>{formData.contactPerson || formData.company}</strong>. Our
                partnerships team will review your application and reach out to you
                at <strong>{formData.phone}</strong> within 2 business days.
              </p>
            </div>
          ) : (
            <form className="dp-form-grid" onSubmit={handleSubmit} noValidate>
              {/* Company Name */}
              <div className="dp-field">
                <label htmlFor="dp-company">
                  Company Name <span className="req">*</span>
                </label>
                <input
                  id="dp-company" name="company" type="text"
                  placeholder="Your company / firm name"
                  value={formData.company} onChange={handleChange} required
                  autoComplete="organization"
                />
              </div>

              {/* Contact Person */}
              <div className="dp-field">
                <label htmlFor="dp-contactPerson">
                  Contact Person <span className="req">*</span>
                </label>
                <input
                  id="dp-contactPerson" name="contactPerson" type="text"
                  placeholder="Your name"
                  value={formData.contactPerson} onChange={handleChange} required
                  autoComplete="name"
                />
              </div>

              {/* City */}
              <div className="dp-field">
                <label htmlFor="dp-city">
                  City <span className="req">*</span>
                </label>
                <input
                  id="dp-city" name="city" type="text"
                  placeholder="City where you operate"
                  value={formData.city} onChange={handleChange} required
                  autoComplete="address-level2"
                />
              </div>

              {/* Phone */}
              <div className="dp-field">
                <label htmlFor="dp-phone">
                  Phone <span className="req">*</span>
                </label>
                <input
                  id="dp-phone" name="phone" type="tel"
                  inputMode="numeric"
                  placeholder="10-digit mobile number"
                  value={formData.phone} onChange={handleChange}
                  pattern="[0-9]{10}" minLength={10} maxLength={10}
                  title="Enter a 10-digit mobile number" required
                  autoComplete="tel-national"
                />
              </div>

              {/* Email */}
              <div className="dp-field">
                <label htmlFor="dp-email">Business Email</label>
                <input
                  id="dp-email" name="email" type="email"
                  placeholder="your@company.com"
                  value={formData.email} onChange={handleChange}
                  autoComplete="email"
                />
              </div>

              {/* Network Size */}
              <div className="dp-field">
                <label htmlFor="dp-networkSize">Network Size</label>
                <select
                  id="dp-networkSize" name="networkSize"
                  value={formData.networkSize} onChange={handleChange}
                >
                  <option value="">Select range</option>
                  {NETWORK_SIZE_OPTIONS.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Existing Telecom Business */}
              <div className="dp-field dp-full">
                <label htmlFor="dp-existingBusiness">Existing Telecom Business</label>
                <select
                  id="dp-existingBusiness" name="existingBusiness"
                  value={formData.existingBusiness} onChange={handleChange}
                >
                  <option value="">Select your current situation</option>
                  {BUSINESS_OPTIONS.map(o => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="dp-field dp-full">
                <label htmlFor="dp-message">Additional Information</label>
                <textarea
                  id="dp-message" name="message"
                  placeholder="Tell us about your coverage area, customers you serve, or any specific questions…"
                  value={formData.message} onChange={handleChange} rows={4}
                />
              </div>

              {/* Submit */}
              <div className="dp-full dp-submit-row">
                <button
                  type="submit"
                  className="dp-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting…' : 'Submit Application →'}
                </button>
                <p className="dp-note">
                  We respond within 2 business days. Your information is kept confidential.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DistributorPage;
