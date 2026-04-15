import media_colouring33_mp4 from '../../../assets/img2/img/media/videos/colouring33.mp4';
import media_colouring11_webp from '../../../assets/img2/img/colouring11.webp';
import media_colouring22_webp from '../../../assets/img2/img/colouring22.webp';
import media_chirag_mp4 from '../../../assets/img2/img/media/videos/chirag.mp4';
import media_Bufferingvideo1_mp4 from '../../../assets/img2/img/media/videos/Bufferingvideo1.mp4';
import media_Bufferingvideo2_mp4 from '../../../assets/img2/img/media/videos/Bufferingvideo2.mp4';
import media_Bufferring_3_webp from '../../../assets/img2/img/Bufferring 3.webp';
import media_Fibertesting_mp4 from '../../../assets/img2/img/media/videos/Fibertesting.mp4';
import media_ofc1_mp4 from '../../../assets/img2/img/ofc1.mp4';
import media_ofc3_webp from '../../../assets/img2/img/ofc3.webp';
import media_ofc2_webp from '../../../assets/img2/img/ofc2.webp';
import media_ftth_mp4 from '../../../assets/img2/img/media/videos/ftth.mp4';
import media_FTTH_2_webp from '../../../assets/img2/img/FTTH 2.webp';
import media_FTTH_1_webp from '../../../assets/img2/img/FTTH 1.webp';
import media_HDPE2_mp4 from '../../../assets/img2/img/media/videos/HDPE2.mp4';
import media_HDPEtesting1_webp from '../../../assets/img2/img/HDPEtesting1.webp';
import media_OFC11_mp4 from '../../../assets/img2/img/OFC11.mp4';
import media_OFC22_webp from '../../../assets/img2/img/OFC22.webp';
import media_OFC33_webp from '../../../assets/img2/img/OFC33.webp';
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
      images: [media_colouring33_mp4, media_colouring11_webp, media_colouring22_webp],
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
<<<<<<< HEAD
      images: [media_chirag_mp4, media_Bufferingvideo1_mp4, media_Bufferingvideo2_mp4, media_Bufferring_3_webp],
=======
      images: [mediaUrl.video("chirag.mp4"), mediaUrl.video("Bufferingvideo1.mp4"), mediaUrl.video("Bufferingvideo2.mp4"), mediaUrl.image("bufferring 3.webp")],
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
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
      images: [media_Fibertesting_mp4],
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
      images: [media_ofc1_mp4, media_ofc3_webp, media_ofc2_webp, media_colouring11_webp],
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
<<<<<<< HEAD
      images: [media_ftth_mp4, media_FTTH_2_webp, media_FTTH_1_webp],
=======
      images: [mediaUrl.video("ftth.mp4"), mediaUrl.image("ftth 2.webp"), mediaUrl.image("ftth 1.webp")],
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
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
<<<<<<< HEAD
      images: [media_HDPE2_mp4, media_HDPEtesting1_webp],
=======
      images: [mediaUrl.video("HDPE2.mp4"), mediaUrl.image("hdpetesting1.webp")],
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
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
<<<<<<< HEAD
      images: [media_OFC11_mp4, media_OFC22_webp, media_OFC33_webp],
=======
      images: [mediaUrl.video("OFC11.mp4"), mediaUrl.image("ofc22.webp"), mediaUrl.image("ofc33.webp")],
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
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