import React, { useState, useEffect, useCallback } from 'react';
import './ProductLeadModal.css';

/**
 * ProductLeadModal
 *
 * Controlled modal – the parent manages open/close state via props.
 *
 * Props:
 *   isOpen    (bool)     – whether the modal is visible
 *   onClose   (fn)       – called when user dismisses
 *   pageName  (string)   – page identifier sent in the email as "Page Source"
 */
const ProductLeadModal = ({ isOpen, onClose, pageName = 'Product Page' }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  // Close on ESC key
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose && onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      // Reset form after close animation
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', phone: '', message: '' });
      }, 300);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

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
      name: formData.name,
      mobile: formData.phone,
      enquiry: `[${pageName}] ${formData.message || '(no message)'}`,
      subject: `${pageName} Enquiry`,
      // Optionally provide a default email if none collected
      email: 'enquiry@optronix.in' 
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
      alert(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="plm-overlay"
      onClick={(e) => e.target === e.currentTarget && onClose && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Product Enquiry"
    >
      <div className="plm-modal">
        <button className="plm-close" onClick={onClose} aria-label="Close">✕</button>

        {submitted ? (
          <div className="plm-success">
            <div className="plm-success-icon">✅</div>
            <h3>We'll be in touch!</h3>
            <p>
              Thank you, <strong>{formData.name || 'there'}</strong>. Our team will
              contact you on <strong>{formData.phone}</strong> shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="plm-header">
              <span className="plm-tag">Quick Enquiry</span>
              <h2 className="plm-title">Request a Demo</h2>
              <p className="plm-subtitle">
                Our expert will reach out with a personalised demo &amp; pricing.
              </p>
            </div>

            <div className="plm-source-badge">
              <span className="plm-source-dot" />
              {pageName}
            </div>

            <form className="plm-form" onSubmit={handleSubmit} noValidate>
              <div className="plm-field">
                <label htmlFor="plm-name">
                  Name <span className="plm-required">*</span>
                </label>
                <input
                  id="plm-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="plm-field">
                <label htmlFor="plm-phone">
                  Phone <span className="plm-required">*</span>
                </label>
                <input
                  id="plm-phone"
                  name="phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  minLength={10}
                  maxLength={10}
                  title="Enter a 10-digit mobile number"
                  required
                  autoComplete="tel-national"
                />
              </div>

              <div className="plm-field">
                <label htmlFor="plm-message">
                  Message <span style={{ color: '#555', fontWeight: 400 }}>(optional)</span>
                </label>
                <textarea
                  id="plm-message"
                  name="message"
                  placeholder="Tell us briefly what you need…"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="plm-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending…' : 'Send Enquiry →'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductLeadModal;
