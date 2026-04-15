import media_machine1video2_mp4 from '../../assets/img2/img/media/videos/machine1video2.mp4';
import media_smt_machine_2_webp from '../../assets/img2/img/smt machine 2.webp';
import media_smt_machine_2_up_webp from '../../assets/img2/img/smt machine 2 up.webp';
import media_smt_machine_3_webp from '../../assets/img2/img/smt machine 3.webp';
import media_smtvideo2_mp4 from '../../assets/img2/img/smtvideo2.mp4';
import media_smt_machine_15_up_webp from '../../assets/img2/img/smt machine 15 up.webp';
import media_chipmounter_mp4 from '../../assets/img2/img/media/videos/chipmounter.mp4';
import media_smt_machine_8_updated_webp from '../../assets/img2/img/smt machine 8 updated.webp';
import media_smt_machine_9_updated_webp from '../../assets/img2/img/smt machine 9 updated.webp';
import media_smt_machine_11_webp from '../../assets/img2/img/smt machine 11.webp';
import media_smt_machine_12_up_webp from '../../assets/img2/img/smt machine 12 up.webp';
import media_smt_machine_13_up_webp from '../../assets/img2/img/smt machine 13 up.webp';
import media_smtvideo5_mp4 from '../../assets/img2/img/smtvideo5.mp4';
import media_smt_machine_5_up2_webp from '../../assets/img2/img/smt machine 5 up2.webp';
import media_smt_machine_14_webp from '../../assets/img2/img/smt machine 14.webp';
import media_X_ray_inspection_machine_webp from '../../assets/img2/img/X ray inspection machine.webp';
import media_pcboven_mp4 from '../../assets/img2/img/pcboven.mp4';
import media_stencils1_mp4 from '../../assets/img2/img/stencils1.mp4';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './SurfaceMountingShowcase.css';

// Import all your images
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
        {images[currentIndex].endsWith('.mp4') || images[currentIndex].endsWith('.webm') ? (
          <video autoPlay loop muted playsInline>
            <source src={images[currentIndex]} type="video/mp4" />
            Your browser does not support the video tag.
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

ShowcaseSection.propTypes = {
  title: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  layout: PropTypes.oneOf(['left', 'right']).isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Main Page
const SurfaceMountingShowcase = () => {
  const allSectionsData = [
    {
      id: 1,
      title: 'SOLDER PASTE PRINTER- GKG (G – TITAN)',
      images: [media_machine1video2_mp4, media_smt_machine_2_webp, media_smt_machine_2_up_webp, media_smt_machine_3_webp],
      features: [
        'Board Size: 50×50mm to 510×510mm',
        'PCB Thickness: 0.4–6mm',
        'Process Accuracy: 2Cpk @ ±18μm',
        'Cycle Time: <8.5s (excl. printing/cleaning)',
        'Auto Paste Dispensing (OPC)',
        'Stencil Frame: 470×370mm to 737mm',
      ],
    },
    {
      id: 2,
      title: 'SOLDER PASTE INSPECTION SPI KOH YOUNG (Ky8080)',
      images: [media_smtvideo2_mp4, media_smt_machine_15_up_webp],
      features: [
        'Inspects: Volume, Area, Height, Offset & more',
        'Camera: 2M Pix',
        'XY Resolution: 20µm',
        'Z Resolution: 0.37µm',
        'Gage R&R: <10% at 6 Sigma',
        'Gerber Import & Barcode Reader',
      ],
    },
    {
      id: 3,
      title: 'CHIP MOUNTER NPM –D3 –A (PANASONIC)',
      images: [media_chipmounter_mp4, media_smt_machine_8_updated_webp, media_smt_machine_9_updated_webp],
      features: [
        'Dual Line Mode: up to 510×300mm',
        'Ultra-High Speed: 400,000 CPH',
        'Placement Accuracy: ±30-40µm',
        'Component Size: 0402 to 100×90mm',
        'Component Supply: Tape, Stick, Tray',
      ],
    },
    {
      id: 4,
      title: 'REFLOW OVEN (JT RS- 1000 II - N2)',
      images: [media_smt_machine_11_webp, media_smt_machine_12_up_webp, media_smt_machine_13_up_webp],
      features: [
        'Heating Zones: 10 Top / 10 Bottom',
        'Cooling Methods: Air Oven & Forced Air',
        'Nitrogen Oven (Optional)',
        'Water Chiller Support',
      ],
    },
    {
      id: 5,
      title: '3D AUTOMATIC OPTICAL INSPECTION (AOI) KOH YOUNG ZENIT',
      images: [media_smtvideo5_mp4, media_smt_machine_5_up2_webp, media_smt_machine_14_webp],
      features: [
        'Min. Component Size: 01005',
        'Max. PCB Size: 490×510mm',
        'Camera: 8M Pixel / 15µm resolution',
        '3D Inspection Speed: 27.14cm²/sec',
        'Advanced 4/8 Projection System',
        'Full Barcode & Offline Programming Support',
      ],
    },
    {
      id: 6,
      title: 'X-RAY INSPECTION MACHINE',
      images: [media_X_ray_inspection_machine_webp],
      features: [
        'High-resolution X-ray imaging for BGA, QFN, and other hidden joints',
        'Automatic defect detection and classification',
        '3D CT scanning capability',
        'Real-time image processing',
        'High magnification and resolution',
        'Automated inspection programs',
      ],
    },
    {
      id: 7,
      title: 'PCB BAKING OVEN',
      images: [media_pcboven_mp4],
      features: [
        'Temperature range: Ambient to 200°C',
        'Uniform temperature distribution',
        'Programmable temperature profiles',
        'Moisture removal for sensitive components',
        'Multiple shelf capacity',
        'Over-temperature protection',
      ],
    },
    {
      id: 8,
      title: 'STENCIL CLEANING MACHINE',
      images: [media_stencils1_mp4],
      features: [
        'Automated cleaning process',
        'Quick and efficient cleaning',
        'Suitable for all stencil sizes',
        'Eco-friendly cleaning solutions',
        'Drying system included',
        'Low maintenance design',
      ],
    },
  ];

  return (
    <div className="surface-mounting-showcase">
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

export default SurfaceMountingShowcase;