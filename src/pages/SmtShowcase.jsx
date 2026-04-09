import { mediaUrl } from '../config/media';
// src/pages/SmtShowcase.jsx
import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import '../components/ems/SurfaceMountingShowcase.css';
import '../components/ems/ems.css';
import MIheader from './MIheader';
import { Helmet } from 'react-helmet-async';

// --- Import your images & videos ---
// Helper: force all likely scroll containers to top
function forceScrollToTop() {
  // Stop browser from restoring previous scroll
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  const html = document.documentElement;
  const prevBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto'; // ensure instant

  // Window/document
  window.scrollTo(0, 0);
  html.scrollTop = 0;
  document.body.scrollTop = 0;

  // If you use a custom scroll container, add its id here
  const candidates = ['scroll-root', 'root', 'app', 'page-root', 'main'];
  candidates.forEach((id) => {
    const el = document.getElementById(id);
    if (el && typeof el.scrollTop === 'number') el.scrollTop = 0;
  });

  html.style.scrollBehavior = prevBehavior || '';
}

const ShowcaseSection = ({ images, title, features, layout }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (slideIndex) => setCurrentIndex(slideIndex);

  return (
    <div className={`showcase-container showcase-${layout}`}>
      <div className={`showcase-text ${layout === 'right' ? 'showcase-text-right' : ''}`}>
        <h1 className="showcase-heading">{title}</h1>
        <ul className="showcase-list">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="showcase-image">
        <div className="media-wrapper">
          {images[currentIndex].endsWith('.mp4') ? (
            <video autoPlay loop muted playsInline>
              <source src={images[currentIndex]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={images[currentIndex]} loading="lazy" alt={title} />
          )}
        </div>

        {images.length > 1 && (
          <>
            <div className="showcase-controls">
              <div className="showcase-arrow left" onClick={goToPrevious}>
                &#10094;
              </div>
              <div className="showcase-arrow right" onClick={goToNext}>
                &#10095;
              </div>
            </div>

            <div className="showcase-dots">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`showcase-dot ${currentIndex === i ? 'active' : ''}`}
                  onClick={() => goToSlide(i)}
                >
                  •
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const InfoSection = ({ children }) => (
  <div className="info-section">
    <div>{children}</div>
  </div>
);

const SmtShowcase = () => {
  // Force top before paint, then once more after mount
  useLayoutEffect(() => {
    forceScrollToTop();
  }, []);
  useEffect(() => {
    // run again after paint to beat late layout/asset loads
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(forceScrollToTop);
      // small fallback
      const t = setTimeout(forceScrollToTop, 50);
      return () => {
        cancelAnimationFrame(raf2);
        clearTimeout(t);
      };
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  const allSectionsData = [
    {
      id: 1,
      title: 'LEAD FREE WAVE SOLDERING M/C (JT-WS-350)',
      images: [mediaUrl.video("WS12.mp4"), mediaUrl.image("WS1.webp"), mediaUrl.image("WS2.webp")],
      features: [
        'Features a robust PC + PLC control system for maximum reliability',
        'PID + SSR control loop with stable heating up to 300°C',
        '4 distinct zones over an 1800 mm length.',
        'Spray control (0.25-0.4 MPa) & flow (10-100 ml/min).',
        'Built-in up & down exhaust system to manage fumes.',
      ],
    },
    {
      id: 2,
      title: 'TOUCHUP & TESTING LINE',
      images: [mediaUrl.video("TU1.mp4"), mediaUrl.image("Testing2.webp")],
      features: [
        'Meticulous Touch-ups',
        'Thorough Testing',
        'Ensured Perfection',
        'Committed to Quality',
        'Trusted Delivery',
        'Production Line Excellence',
      ],
    },
    {
      id: 3,
      title: 'ONU/ONT TESTING LINE',
      images: [mediaUrl.video("onttesting1.mp4"), mediaUrl.image("ONU Testing.webp")],
      features: [
        'Expert-Led Testing',
        'Precision ONU/OLT Validation',
        'Engineered for Peak Performance',
        'Guaranteed Long-Term Reliability',
        'Exceeding Industry Standards',
      ],
    },
    {
      id: 4,
      title: 'Utility',
      images: [mediaUrl.video("coldstorage2.mp4"), mediaUrl.image("coldstorage1.webp"), mediaUrl.image("ESDcontrol1.webp"), mediaUrl.video("ESDcontrol.mp4"), mediaUrl.video("Preform1.mp4"), mediaUrl.video("Preform2.mp4"), mediaUrl.image("Reeltray1.webp"), mediaUrl.video("Reeltray2.mp4"), mediaUrl.image("VacuumSealing1.webp"), mediaUrl.video("Reelcounter.mp4")],
      features: ['Cold storage', 'ESD Control System', 'Preform', 'Reeltray', 'Vacuum Sealing Machine', 'Reel Counter'],
    },
  ];



  return (
    <div>
      <Helmet>
        <title>High-Reliability MI Line & Through-Hole PCB Assembly | Optronix</title>
        <meta name="description" content="Achieve peak performance with Optronix’s Manual Insertion (MI) line. From prototype PCBAs to large-scale production, we ensure perfection through advanced wave soldering and expert-led ONU/ONT validation." />
      </Helmet>
      <MIheader />
      <InfoSection>
        <p>
          Our world-class manufacturing facility in Kotdwar is meticulously engineered to deliver end-to-end production
          capabilities, encompassing a broad spectrum of product solutions — from low-volume, high-mix prototype PCBAs
          to large-scale, high-reliability production batches and fully integrated, complex box-build assemblies.
        </p>
        <p>
          This advanced infrastructure supports the manufacturing of a wide array of technologically sophisticated product
          categories, including:
        </p>
      </InfoSection>

      {allSectionsData.map((section, index) => {
        const layout = index % 2 === 0 ? 'left' : 'right';
        return (
          <ShowcaseSection
            key={section.id}
            title={section.title}
            images={section.images}
            features={section.features}
            layout={layout}
          />
        );
      })}

      {/* Footer Call-to-Action */}
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '200px',
          padding: '60px 20px',
          backgroundColor: '#000000',
          margin: '0',
          width: '100%',
          borderTop: '1px solid #333',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <Link
          to="/ofcpage"
          style={{
            display: 'inline-block',
            padding: '12px 30px',
            backgroundColor: '#ffffff',
            color: '#000000',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          }}
          className="next-page-button"
        >
          View Fiber Optics Solutions →
        </Link>
      </div> */}
      <div className="next-page-cta">
        <Link
          to="/ofcpage"
          onClick={() => window.scrollTo(0, 0)}
          className="next-page-button"
        >
          View Fiber Optics Solutions →
        </Link>
      </div>

    </div>

  );
};

export default SmtShowcase;