import React from "react";
import "./miimgone.css";
import ems1 from "../img/mi1.webp";
import ems2 from "../img/mi2.webp";
import ems3 from "../img/mi3.webp";
import ems4 from "../img/mi4.webp";
import ems5 from "../img/mi5.webp";

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
          <img src={ems1} alt="img1" className="zigzag-img img1" />
          <img src={ems2} alt="img2" className="zigzag-img img2" />
          <img src={ems3} alt="img3" className="zigzag-img img3" />
          <img src={ems4} alt="img4" className="zigzag-img img4" />
          <img src={ems5} alt="img5" className="zigzag-img img5" />
        </div>
      </div>
    </div>
  );
};

export default Miimgone;
