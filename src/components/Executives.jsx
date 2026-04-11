import { mediaUrl } from '../config/media';
import React, { useEffect, useRef } from "react";
import "./executives.css";
const Executives = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="founders-section" ref={sectionRef}>
      <div className="founders-container">
        <div className="founders-image-container">
          <div className="image-frame">
            <img src={mediaUrl.image("ceoo.webp")} loading="lazy" alt="Mr. Awnish Gautam - Founder and CEO" />
          </div>
        </div>
        
        <div className="founders-content">
          <div className="content-header">
            <h2 className="section-title">
              <span className="title-highlight">Founder's Message</span>
            </h2>
          </div>
          
          <div className="message-content">
            <span className="quote-mark">"</span>
            <p>
              We launched Spec Technology in 1997 with a small trustworthy team and a dream to provide top of the line goods and services in the CATV industry. We moved forward by improving our work, day after day and today Spec Technology is the industry leader.
            </p>
            <p>
              The expertise I gained at SPEC has inspired me to create COPL—an enterprise purpose-built to support the next wave of our industry's evolution. Drawing on every lesson from our previous organization, we're turning past missteps into opportunities for relentless improvement and a culture of uncompromising excellence.
            </p>
            <p>
              We've invested in world-class infrastructure and assembled an elite team to deliver outputs that set new benchmarks. The trust our customers place in us energizes our vision, and with these resources we're ready to serve this emerging sector at the highest level.
            </p>
            <span className="quote-mark closing">"</span>
          </div>
          
          <div className="founder-signature">
            <h3>Mr. Awnish Gautam</h3>
            <span className="founder-title">Founder & Chief Executive Officer</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Executives;