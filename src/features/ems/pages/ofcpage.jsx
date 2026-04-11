import { mediaUrl } from '../../../config/media';
import React, { useState, useEffect, useLayoutEffect } from 'react';
import '../../../components/ui/SurfaceMountingShowcase.css'; // Responsive CSS
import SMT from './smt';
import { Helmet } from 'react-helmet-async';


// Import media
// Import media
// Helper: force all likely scroll containers to top
function forceScrollToTop() {
  if (typeof window === 'undefined') return;

  // Prevent browser from restoring previous scroll position
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

// Reusable Showcase Section
const ShowcaseSection = ({ title, features, layout, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`showcase-container showcase-${layout}`}>
      <div className={`showcase-text ${layout === 'right' ? 'showcase-text-right' : ''}`}>
        <div className="showcase-content">
          <h1 className="showcase-heading">{title}</h1>
          <ul className="showcase-list">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="showcase-image">
        {images[currentIndex].endsWith('.mp4') ? (
          <video autoPlay loop muted playsInline>
            <source src={images[currentIndex]} type="video/mp4" />
            Your browser does not support video.
          </video>
        ) : (
          <img src={images[currentIndex]} loading="lazy" alt={title} />
        )}

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
                  onClick={() => setCurrentIndex(i)}
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

// Main Page
const Ofcpage = () => {
  // Force top before paint, then again right after mount
  useLayoutEffect(() => {
    forceScrollToTop();
  }, []);
  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(forceScrollToTop);
      const t = setTimeout(forceScrollToTop, 50); // tiny fallback
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
      title: 'Colouring Lines',
      images: [mediaUrl.video("colouring33.mp4"), mediaUrl.image("colouring11.webp"), mediaUrl.image("colouring22.webp")],
      features: [
        'Precision color accuracy',
        'Durable with excellent adhesion',
        'Fully industry standard compliant',
        'High-speed, efficient production',
        'Eco-friendly process'
      ]
    },
    {
      id: 2,
      title: 'Buffering lines',
      images: [mediaUrl.video("chirag.mp4"), mediaUrl.video("Bufferingvideo1.mp4"), mediaUrl.video("Bufferingvideo2.mp4"), mediaUrl.image("Bufferring 3.webp")],
      features: [
        'Optimal protection and mechanical strength',
        'Consistent buffer integrity and reliability',
        'Enhanced durability and performance',
        'Safeguards fibers during handling and installation',
        'Meets stringent industry and environmental standards'
      ]
    },
    {
      id: 3,
      title: 'Fiber Testing',
      images: [mediaUrl.video("Fibertesting.mp4")],
      features: [
        'High precision testing equipment',
        'Ensures performance and durability',
        'Accurate measurement processes',
        'Minimizes failure risks',
        'Complies with global standards'
      ]
    },
    {
      id: 4,
      title: 'Sheathing lines',
      images: [mediaUrl.video("ofc1.mp4"), mediaUrl.image("ofc3.webp"), mediaUrl.image("ofc2.webp"), mediaUrl.image("colouring11.webp")],
      features: [
        'Long-lasting environmental protection',
        'High-quality sheaths with precision',
        'Advanced extrusion technology',
        'Optimal strength and flexibility',
        'Telecom & industrial compliance'
      ]
    },
    {
      id: 5,
      title: 'Ftth sheathing line',
      images: [mediaUrl.video("ftth.mp4"), mediaUrl.image("FTTH 2.webp"), mediaUrl.image("FTTH 1.webp")],
      features: [
        'Fast and reliable data delivery',
        'Easy installation design',
        'Minimal signal loss',
        'Next-gen broadband readiness',
        'High efficiency standards'
      ]
    },
    {
      id: 6,
      title: 'HDPE Testing',
      images: [mediaUrl.video("HDPE2.mp4"), mediaUrl.image("HDPEtesting1.webp")],
      features: [
        'Rigorous HDPE material testing',
        'Ensures durability and quality',
        'Meets industry standards',
        'Advanced testing equipment',
        'Quality assurance protocols'
      ]
    },
    {
      id: 7,
      title: 'Packaging',
      images: [mediaUrl.video("OFC11.mp4"), mediaUrl.image("OFC22.webp"), mediaUrl.image("OFC33.webp")],
      features: [
        'Secure and protective packaging',
        'Efficient packing process',
        'Quality control checks',
        'Safe for transportation',
        'Organized and labeled packages'
      ]
    }
  ];


  return (
    <div>
      <Helmet>
        <title>Precision OFC Manufacturing & Quality Testing | Optronix India</title>
        <meta name="description" content="Leading OFC manufacturer featuring advanced extrusion technology and rigorous quality control. Our cables are rodent-resistant, fire-retardant, and water-resistant, ensuring long-term reliability for telecom and industrial networks." />
      </Helmet>
      <SMT />
      {allSectionsData.map((section, index) => (
        <ShowcaseSection
          key={section.id}
          title={section.title}
          features={section.features}
          images={section.images}
          layout={index % 2 === 0 ? 'left' : 'right'}
        />
      ))}
    </div>
  );
};

export default Ofcpage;