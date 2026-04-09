import { mediaUrl } from '../../config/media';
import React from "react";
import "./miimgone.css";
const Miimgone = () => {
  return (
    <div className="zigzag-container">
      {/* LEFT SECTION */}
      <div className="left-content">
        <div className="animated-dots">
          {[...Array(12)].map((_, i) => {
            let shape = "circle";
            if (i === 0 || i === 6) shape = "triangle";
            else if (i === 1 || i === 4) shape = "square";
            else if (i === 2 || i === 7) shape = "rounded-square";

            return <span key={i} className={`dot dot${i + 1} ${shape}`} />;
          })}
        </div>

        <div className="dots-background">
          <h2 style={{ marginBottom: "20px" }}> MI FACILITY</h2>
          <p style={{ textAlign: "justify" }}>
            Electronics Manufacturing Services (EMS) operates a world-class
            facility in Kotdwara, Uttarakhand, spanning over 100,000 sq. ft.
            and equipped with fully automated SMT lines, Panasonic chip
            mounters, 3D SPI/AOI systems, solder paste printers, and manual
            insertion lines. The facility supports end-to-end production of a
            wide range of products including LED TVs, telecom equipment, energy
            meters, surveillance systems, and GPON/EPON/ONU/OLT assemblies.
            Advanced inspection tools like X-ray machines and ICT ensure
            high-quality standards, while dedicated lines for ONU/ONT testing
            and rework stations enhance reliability.
          </p>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-collage">
        <div className="animated-dots right-dots">
          {[...Array(12)].map((_, i) => {
            let shape = "circle";
            if (i === 3 || i === 8) shape = "triangle";
            else if (i === 5 || i === 10) shape = "square";
            else if (i === 9 || i === 11) shape = "rounded-square";

            return <span key={i} className={`dot dot${i + 1} ${shape}`} />;
          })}
        </div>

        <div className="zigzag">
          <img src={mediaUrl.image("mi1.webp")} alt="img1" className="zigzag-img img1" />
          <img src={mediaUrl.image("mi2.webp")} alt="img2" className="zigzag-img img2" />
          <img src={mediaUrl.image("mi3.webp")} alt="img3" className="zigzag-img img3" />
          <img src={mediaUrl.image("mi4.webp")} alt="img4" className="zigzag-img img4" />
          <img src={mediaUrl.image("mi5.webp")} alt="img5" className="zigzag-img img5" />
        </div>
      </div>
    </div>
  );
};

export default Miimgone;
