import media_SUMITOMOupdated_webp from '../../../assets/img2/img/SUMITOMOupdated.webp';
import media_deviser_webp from '../../../assets/img2/img/deviser.webp';
import media_spec_webp from '../../../assets/img2/img/spec.webp';
import media_invas_webp from '../../../assets/img2/img/invas.webp';
import React from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import './partner.css';
import '../../../components/index.css';

// Styles for the partners section
const styles = `
  .partners-section {
    padding: 20px 0;
    background: transparent !important;
    text-align: center;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  
  .partner-card {
    border: 1px solid rgba(171, 167, 167, 0.83);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .partner-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .section-header {
    margin-bottom: 20px;
    background: transparent !important;
  }
  
  .section-header h2 {
    font-size: 2rem;
    color: #000000;
    margin: 0;
    background: transparent !important;
    padding: 0;
  }
  
  .section-header p {
    font-size: 1.1rem;
    max-width: 100vh;
    margin: 0 auto;
  }
  
  /* Partners Slider - Desktop */
  .partners-slider {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  
  .partners-slider .partner-card {
    min-width: 220px;
    max-width: 260px;
  }
  
  /* Mobile Styles - Horizontal Scroll with Peek */
  @media (max-width: 768px) {
    .partners-section {
      padding: 10px 0;
      overflow: visible;
    }
    
    .partners-slider {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      align-items: stretch;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      padding: 15px 20px;
      padding-right: 40px;
      margin: 0;
      width: 100%;
      gap: 15px;
      
      /* Hide scrollbar */
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    
    .partners-slider::-webkit-scrollbar {
      display: none;
    }
    
    .partners-slider .partner-card {
      flex: 0 0 calc(75% - 10px);
      min-width: calc(75% - 10px);
      max-width: calc(75% - 10px);
      scroll-snap-align: start;
      padding: 15px;
      box-sizing: border-box;
    }
    
    .partner-card h3 {
      font-size: 1rem;
      margin: 8px 0 4px;
    }
    
    .partner-card p {
      font-size: 0.85rem;
      margin: 0;
    }
    
    .partner-logo {
      height: 50px !important;
    }
    
    .partner-logo img {
      max-height: 40px !important;
      width: auto !important;
    }
  }
  
  /* Tablet Styles */
  @media (min-width: 769px) and (max-width: 1024px) {
    .partners-slider {
      display: flex;
      flex-wrap: nowrap;
      justify-content: flex-start;
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      scroll-snap-type: x mandatory;
      scroll-behavior: smooth;
      padding: 15px 30px;
      padding-right: 60px;
      width: 100%;
      gap: 20px;
      
      /* Hide scrollbar */
      scrollbar-width: none;
      -ms-overflow-style: none;
    }
    
    .partners-slider::-webkit-scrollbar {
      display: none;
    }
    
    .partners-slider .partner-card {
      flex: 0 0 calc(45% - 10px);
      min-width: calc(45% - 10px);
      max-width: calc(45% - 10px);
      scroll-snap-align: start;
    }
  }
  
  /* Small Mobile Styles */
  @media (max-width: 480px) {
    .partners-slider .partner-card {
      flex: 0 0 calc(80% - 10px);
      min-width: calc(80% - 10px);
      max-width: calc(80% - 10px);
    }
    
    .partners-slider {
      padding-left: 15px;
      padding-right: 30px;
      gap: 12px;
    }
  }
`;

const BrandSlider = () => {
  useEffect(() => {
    const slider = document.getElementById("partnersSlider");

    if (!slider) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    // Touch events for mobile
    const handleTouchStart = (e) => {
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleTouchMove = (e) => {
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", handleMouseDown);
    slider.addEventListener("mouseleave", handleMouseLeave);
    slider.addEventListener("mouseup", handleMouseUp);
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);

    return () => {
      slider.removeEventListener("mousedown", handleMouseDown);
      slider.removeEventListener("mouseleave", handleMouseLeave);
      slider.removeEventListener("mouseup", handleMouseUp);
      slider.removeEventListener("mousemove", handleMouseMove);
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  // Add styles to the document head
  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    return () => document.head.removeChild(styleElement);
  }, []);

  const partners = [
    {
      name: 'Sumitomo Electric',
      desc: 'Connect with Innovation',
<<<<<<< HEAD
      logo: media_SUMITOMOupdated_webp,
=======
      logo: mediaUrl.image("sumitomoupdated.webp"),
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
      link: 'https://global-sei.com/'
    },
    {
      name: 'Deviser',
      desc: 'Over 30 Years of Experience',
      logo: media_deviser_webp,
      link: 'https://deviserinstruments.com/'
    },
    {
      name: 'SPEC Technology',
      desc: 'CATV Product',
      logo: media_spec_webp,
      link: 'https://spectechnology.com/'
    },
    {
      name: 'Invas Technologies',
      desc: 'Complete Telecom Solution',
      logo: media_invas_webp,
      link: 'https://invas.in/'
    }
  ];

  return (
    <div className="import-wrapper" style={{ background: 'transparent' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          padding: '20px 0'
        }}
      >
        {/* Heading: Our Partners */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            textAlign: 'center',
            marginBottom: '20px'
          }}
        >
          <Link to="/partners" style={{ textDecoration: 'none', color: 'black' }}>
            <h3
              className='heading-underline'
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                textAlign: 'center',
                margin: '0 auto',
                display: 'block'
              }}
            >
              Our Partners
            </h3>
          </Link>
        </div>

        {/* Partners Section */}
        <section
          className="partners-section"
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <div
            className="partners-slider"
            id="partnersSlider"
          >
            {partners.map((partner, index) => (
              <a
                className="partner-card"
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="partner-logo">
                  <img src={partner.logo} loading="lazy" decoding="async" alt={partner.name} />
                </div>
                <h3>{partner.name}</h3>
                <p>{partner.desc}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrandSlider;