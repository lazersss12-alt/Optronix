import { mediaUrl } from '../../../config/media';
// Testimonials.jsx (drop-in)
import React, { useRef, useEffect, useState } from "react";
import "./testimonials.css";
const testimonialsData = [
  { id: 1, image: mediaUrl.image("t1.webp"), name: "Gaurav Sharma", text: "Optronix provides excellent quality equipment and reliable performance for all our fiber projects." },
  { id: 2, image: mediaUrl.image("t2.webp"), name: "Deepali Verma", text: "I have been consistently impressed with Optronix’s products and after-sales service. Highly recommended!" },
  { id: 3, image: mediaUrl.image("t3.webp"), name: "Chetan (Gautam Rion)", text: "The build quality and precision of Optronix tools make installation work smooth and efficient." },
  { id: 4, image: mediaUrl.image("t4.webp"), name: "Gaurav Tyagi", text: "Optronix offers durable and accurate solutions that make fiber deployment much easier for our team." },
  { id: 5, image: mediaUrl.image("t5.webp"), name: "Sayyed Danish", text: "Their customer support is outstanding — quick response and genuine care for client satisfaction." },
  { id: 6, image: mediaUrl.image("t6.webp"), name: "Computer kings", text: "High-quality equipment, timely delivery, and professional service. Optronix is a trusted brand for us." },
  { id: 7, image: mediaUrl.image("t7.webp"), name: "Ravinder Ji", text: "I have been using Optronix products for years and never faced performance issues. Great experience overall." },
  { id: 8, image: mediaUrl.image("t1.webp"), name: "Ankit Kumar", text: "Optronix’s fiber optic tools are reliable and user-friendly, making our installation jobs hassle-free." },
];

const Testimonials = () => {
  const groupRef = useRef(null);
  const [duration, setDuration] = useState(30); // seconds

  // Auto-calc duration from content height for constant speed
  useEffect(() => {
    const calc = () => {
      const h = groupRef.current?.offsetHeight || 1000;
      const pxPerSec = 50; // speed (higher = faster)
      const d = Math.max(12, Math.min(120, h / pxPerSec));
      setDuration(d);
    };
    calc();

    const ro = "ResizeObserver" in window ? new ResizeObserver(calc) : null;
    if (ro && groupRef.current) ro.observe(groupRef.current);

    window.addEventListener("load", calc);
    window.addEventListener("resize", calc);

    return () => {
      ro?.disconnect();
      window.removeEventListener("load", calc);
      window.removeEventListener("resize", calc);
    };
  }, []);

  return (
    <section className="t-section white-bg">
      <div className="t-container">
        {/* LEFT SIDE INTRO */}
        <div className="t-left">
          <h5 className="t-subtitle">Testimonials</h5>
          <h2 className="t-heading">We believe in the power of connection</h2>
          <p className="t-desc">
            Our mission is to create high‑quality, reliable fiber tools and instruments
            designed to make your work efficient and professional. We listen to your feedback
            and continually improve our products — because your success matters to{" "}
            <span className="t-em">Optronix</span>.
          </p>
        </div>

        {/* RIGHT SIDE: INFINITE VERTICAL MARQUEE (2 cards per row) */}
        <div className="t-right">
          <div className="vmarquee" style={{ "--vm-duration": `${duration}s` }}>
            <div className="vm-track">
              {/* Group A */}
              <div className="vm-group" ref={groupRef}>
                {testimonialsData.map((t) => (
                  <div key={`a-${t.id}`} className="t-card vm-card">
                    <p className="t-text">“{t.text}”</p>
                    <div className="t-user">
                      <img src={t.image} loading="lazy" alt={t.name} className="t-avatar" />
                      <div className="t-info"><h4 className="t-name">{t.name}</h4></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Group B (duplicate for seamless loop) */}
              <div className="vm-group" aria-hidden="true">
                {testimonialsData.map((t) => (
                  <div key={`b-${t.id}`} className="t-card vm-card">
                    <p className="t-text">“{t.text}”</p>
                    <div className="t-user">
                      <img src={t.image} loading="lazy" alt="" className="t-avatar" />
                      <div className="t-info"><h4 className="t-name">{t.name}</h4></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* If you want hover to pause, leave as-is.
              To always run, remove the :hover pause rule in CSS below. */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;