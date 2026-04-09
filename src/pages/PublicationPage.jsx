import React, { useEffect, useState, useRef } from 'react';
import './PublicationPage.css';

// Local images for static events
import imag2 from '../components/img/freeservicecamp1.jpeg';
import imag3 from '../components/img/annualday1.jpeg';
import imag4 from "../components/img/annualday2.jpeg";
import imag5 from "../components/img/annualday3.jpeg";
import imag6 from '../components/img/annualday4.jpeg';
import imag7 from "../components/img/freeservicecamp3.jpeg";
import imag8 from '../components/img/freeservicecapm2.jpeg';
import imag9 from '../components/img/img11.jpg';
import imag10 from '../components/img/img12.jpg';
import imag11 from '../components/img/img13.jpg';
import imag12 from '../components/img/img14.jpg';

// Static events
const staticEvents = [
  {
    id: 3,
    title: "2nd Annual Day Celebration",
    date: "2025-02-02",
    images: [imag3, imag4, imag5, imag6],
    content:
      "A proud moment captured – The Candid Optronix Family! From teamwork to triumphs, and challenges to achievements, we stand stronger together! As we celebrate our 2nd Annual Day, we honor the dedication, hard work, and unity that make this company an incredible place to be. A heartfelt thank you to our inspiring leaders and exceptional team for making this journey unforgettable. Here’s to many more milestones ahead!",
    link: ""
  },
  {
    id: 2,
    title: "Free Service Camp - Technical Support",
    date: "2025-01-18",
    images: [imag2, imag7, imag8],
    content:
      "We’re proud to announce the successful completion of our Free Service Camp organized by Candid Optronix Pvt. Ltd., where we offered free diagnostics, maintenance, and expert technical support for fiber optic professionals. The event covered key equipment such as Sumitomo Fusion Splicers, Deviser OTDRs and meters, Optronix PON products (OLT, ONU, XPON), and EDFA amplifiers. Thank you to everyone who participated and made the event a success.",
    link: ""
  },
  {
    id: 1,
    title: "Cable TV Show India",
    date: "2017-01-01",
    images: [imag9, imag10, imag11, imag12],
    content: `Candid Optronix Pvt. Ltd. participated in the Cable TV Show India 2017 held in Kolkata, where we showcased our latest innovations and solutions in the field of fiber optics and digital cable technology. The event provided an excellent opportunity to connect with industry professionals and demonstrate our commitment to advancing network infrastructure across India.`,
    link: ""
  }
];

// Sort events by date (latest first)
const allEvents = [...staticEvents].sort((a, b) => new Date(b.date) - new Date(a.date));

function PublicationPage() {
  const latestRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = latestRef.current;
    const rootNode = scrollContainerRef.current;
    if (!node || !rootNode) return;

    const observer = new window.IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      {
        root: rootNode,
        threshold: 0.1
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const ImageComponent = ({ images }) => (
    <div className="image-collage">
      <div className="image-box">
        {images.map((image, imageIndex) => (
          <img
            key={imageIndex}
            src={image}
            alt={`event-image-${imageIndex}`}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );

  const TextComponent = ({ event, textAlign }) => (
    <div className="content-block" style={{ textAlign }}>
      <h3 className="event-title">{event.title}</h3>
      <p className="event-date">
        {new Date(event.date).toLocaleDateString()}
      </p>
      <p style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>{event.content}</p>
      {event.link && event.link !== "" && <a href={event.link}>Read More</a>}
    </div>
  );

  return (
    <div ref={scrollContainerRef} className="scroll-container">
      <div className="box">
        <div className="timeline-container">
          <div className="timeline-line" />

          {allEvents.map((event, index) => {
            const isLatest = index === 0;
            const imageSide = index % 2 === 0 ? 'left' : 'right';

            return (
              <div
                key={event.id}
                ref={isLatest ? latestRef : null}
                className={`timeline-event-row${isLatest ? ' latest-publication' : ''}${isLatest && visible ? ' visible' : ''}`}
              >
                <div className="timeline-circle" />

                {/* Left Pane */}
                <div
                  className={`left-pane ${imageSide === 'left' ? 'image-pane' : 'text-pane'}`}
                >
                  {imageSide === 'left'
                    ? <ImageComponent images={event.images} />
                    : <TextComponent event={event} textAlign="right" />}
                </div>

                {/* Right Pane */}
                <div
                  className={`right-pane ${imageSide === 'right' ? 'image-pane' : 'text-pane'}`}
                >
                  {imageSide === 'right'
                    ? <ImageComponent images={event.images} />
                    : <TextComponent event={event} textAlign="left" />}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default PublicationPage;