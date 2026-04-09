import { mediaUrl } from '../../config/media';
import React, { useState, useEffect } from 'react';
import './smt.css';
import '../../pages/PageHeader.css';  // Importing PageHeader styles
  // ✅ Unified stylesheet

// Assets
const SMT = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);
  

  const featuresData = [
    { icon: mediaUrl.image("f4.png"), title: 'Rodent Resistant', description: 'Rodent-resistant sheathing for durability.' },
    { icon: mediaUrl.image("f2.png"), title: 'Standard Length', description: 'Standard lengths for fast installation.' },
    { icon: mediaUrl.image("f3.png"), title: 'External Use', description: 'Weather-resistant jackets for outdoor use.' },
    { icon: mediaUrl.image("png8.png"), title: 'Rapid Deployment', description: 'Quick and efficient installation.', hideOnMobile: true },
    { icon: mediaUrl.image("final png 1.png"), title: 'Fire Retardant', description: 'Flame-retardant materials enhance safety.' },
    { icon: mediaUrl.image("png5.png"), title: 'Premium Quality', description: 'Superior performance and reliability.' },
    { icon: mediaUrl.image("fr.png"), title: 'Internal Use', description: 'Low-smoke & fire-safe for indoor cabling.' },
    { icon: mediaUrl.image("png7.png"), title: 'Water Resistant', description: 'Moisture-blocking design to prevent ingress.' },
    { icon: mediaUrl.image("png6.png"), title: 'Telecommunications', description: 'High-speed fiber for telecom networks.' }
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="header-wrapper">
        <div className="header">
          <div
            className="header-banner"
            style={{
              '--header-height': '75vh',
              '--header-height-mobile': '50vh',
              backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.3)),
                
                url(${mediaUrl.image("Opticalplant.png")})
              `,
            }}
          >
            <div className="header-inner">
              <h1 className="header-title">Optical Fiber Cable Manufacturing Facility</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="intro-inner">
          <p>
            Candid Optronix Pvt. Ltd. operates a state-of-the-art Optical Fiber Cable Manufacturing Facility in Kotdwar, Uttarakhand. Equipped with high-speed production lines, integrated QA, and dedicated utilities, we deliver consistent, high-quality optical fiber cables for backbone, access, and FTTH networks.
          </p>
          <p>
            Our process covers end-to-end manufacturing—from fiber coloring to final cable sheathing—with strict quality controls at every stage.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-heading">Features</h2>
        <div className="features-grid">
          {featuresData
            .filter((feature, index, arr) => {
              if (feature.title === 'Rapid Deployment' && isMobile) return false;
              return index === arr.findIndex(f => f.title === feature.title);
            })
            .map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} loading="lazy" />
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default SMT;