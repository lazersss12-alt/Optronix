// EventCarousel.withNavigate.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './event-showcase.css';

import Rep1 from './img/Republic1.webp';
import Rep2 from './img/Republic2.webp';
import Rep3 from './img/Republic3.webp';
import Rep4 from './img/Republic4.webp';
import Rep5 from './img/Republic5.webp';
import Rep6 from './img/Republic6.webp';

const ArrowIcon = ({ direction = 'next' }) => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
    {direction === 'next' ? (
      <path d="M9 18l6-6-6-6" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    ) : (
      <path d="M15 18l-6-6 6-6" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    )}
  </svg>
);

const TOUCH_THRESHOLD = 40;

const EventCarousel = () => {
  const navigate = useNavigate();

  const eventData = [
    {
      id: 100,
      images: [Rep1, Rep2, Rep3, Rep4, Rep5, Rep6],
      title: 'Republic Day Ceremony | Kotdwar Plant',
      subtitle: 'A proud moment captured – The Candid Optronix Family!',
      description:
        'Republic Day Flag Hoisting Ceremony at our Kotdwar Plant, honouring the values of the Constitution and our commitment to the nation.',
      date: 'January 26, 2026',
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  // Ensure galleryIdx handles the length of eventData (which is now 1)
  const [galleryIdx, setGalleryIdx] = useState(() => eventData.map(() => 0));

  const slidesRef = useRef(null);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchDelta, setTouchDelta] = useState({ x: 0, y: 0 });

  const galleryPrev = (slide) => {
    setGalleryIdx((prev) => {
      const next = [...prev];
      const len = eventData[slide].images.length;
      next[slide] = (prev[slide] - 1 + len) % len;
      return next;
    });
  };
  const galleryNext = (slide) => {
    setGalleryIdx((prev) => {
      const next = [...prev];
      const len = eventData[slide].images.length;
      next[slide] = (prev[slide] + 1) % len;
      return next;
    });
  };

  const handleSlideChange = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  // Only auto-play or navigate slides if there's more than one event
  const nextSlide = () => {
    if (eventData.length > 1) {
      handleSlideChange((activeIndex + 1) % eventData.length);
    }
  };
  const prevSlide = () => {
    if (eventData.length > 1) {
      handleSlideChange((activeIndex - 1 + eventData.length) % eventData.length);
    }
  };

  useEffect(() => {
    if (eventData.length > 1) {
      const autoPlay = setInterval(nextSlide, 7000);
      return () => clearInterval(autoPlay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); nextSlide(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); prevSlide(); }
  };

  const onTouchStart = (e) => { const t = e.touches[0]; setTouchStart({ x: t.clientX, y: t.clientY }); setTouchDelta({ x: 0, y: 0 }); };
  const onTouchMove = (e) => { const t = e.touches[0]; setTouchDelta({ x: t.clientX - touchStart.x, y: t.clientY - touchStart.y }); };
  const onTouchEnd = () => { const { x, y } = touchDelta; if (Math.abs(x) > Math.abs(y) && Math.abs(x) > TOUCH_THRESHOLD) { if (x < 0) nextSlide(); else prevSlide(); } setTouchStart({ x: 0, y: 0 }); setTouchDelta({ x: 0, y: 0 }); };

  // --- NAVIGATION: open branch-specific gallery route ---
  const handleDiscoverMore = (index) => {
    // Navigate to /gallery/branch/:id using the event ID if available, otherwise index
    const event = eventData[index];
    const idToUse = event.id !== undefined ? event.id : index;
    navigate(`/gallery/branch/${idToUse}`, { state: { branch: event, eventData } });
    window.scrollTo(0, 0);
  };

  return (
    <section className="ec-section" role="region" aria-label="Events carousel">
      <div className="ec-container">
        <div className="ec-header">
          <h2 className="ec-title"><span className="heading-underline">Our Latest Events</span></h2>
          <p className="ec-subtitle">Celebrating Milestones, Together.</p>
        </div>

        <div className="ec-core">
          <div
            className="ec-slides"
            ref={slidesRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            aria-live="polite"
            aria-roledescription="carousel"
          >
            {eventData.map((event, index) => {
              const isActive = index === activeIndex;
              // For single slide, isPrev/isNext logic might need adjustment but with 1 item mapping implies just 1 item centered
              // Simple check: if 1 item, don't apply prev/next classes in a way that hides it if CSS hides them.
              // Assuming CSS handles single item or active item correctly.

              let slideClass = 'ec-slide';
              if (isActive) slideClass += ' ec-slide--active';
              else if (eventData.length > 1) {
                const isPrev = index === (activeIndex - 1 + eventData.length) % eventData.length;
                const isNext = index === (activeIndex + 1) % eventData.length;
                if (isPrev) slideClass += ' ec-slide--prev';
                if (isNext) slideClass += ' ec-slide--next';
              }

              // Guard against index out of bounds for galleryIdx if array length changed
              // (should be fine due to useState initialization but good to be safe)
              const currentImgIndex = galleryIdx[index] || 0;
              const imgSrc = event.images[currentImgIndex] || event.images[0];
              const isPrimaryImage = index === 0 && currentImgIndex === 0;

              return (
                <div key={index} className={slideClass}>
                  <div className="ec-slide__image-pane">
                    <div className="ec-gallery">
                      <img
                        src={imgSrc}
                        alt={`${event.title} image ${currentImgIndex + 1} of ${event.images.length}`}
                        className="ec-slide__image"
                        loading={isPrimaryImage ? 'eager' : 'lazy'}
                        fetchPriority={isPrimaryImage ? 'high' : 'auto'}
                        decoding="async"
                        draggable="false"
                      />
                      {event.images.length > 1 && (
                        <>
                          <button type="button" className="ec-gallery__arrow ec-gallery__arrow--prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); galleryPrev(index); }}>
                            <ArrowIcon direction="prev" />
                          </button>
                          <button type="button" className="ec-gallery__arrow ec-gallery__arrow--next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); galleryNext(index); }}>
                            <ArrowIcon direction="next" />
                          </button>
                          <div className="ec-gallery__dots" aria-hidden="true">
                            {event.images.map((_, i) => (
                              <span key={i} className={`dot ${i === currentImgIndex ? 'active' : ''}`} />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="ec-slide__content-pane">
                    <div className="ec-slide__content-wrap">
                      <span className="ec-slide__date">{event.date}</span>
                      <h2 className="ec-slide__title">{event.title}</h2>
                      <h3 className="ec-slide__subtitle">{event.subtitle}</h3>
                      <p className="ec-slide__description">{event.description}</p>
                      <button className="ec-slide__button" onClick={() => handleDiscoverMore(index)}>Discover More</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {eventData.length > 1 && (
          <div className="ec-mobile-cta">
            <button className="ec-slide__button ec-mobile-cta__button" onClick={() => handleDiscoverMore(activeIndex)}>Discover More</button>
          </div>
        )}
        {eventData.length === 1 && (
          <div className="ec-mobile-cta">
            <button className="ec-slide__button ec-mobile-cta__button" onClick={() => handleDiscoverMore(0)}>Discover More</button>
          </div>
        )}

      </div>
    </section>
  );
};

export default EventCarousel;
