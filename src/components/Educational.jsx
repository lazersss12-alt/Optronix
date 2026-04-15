import media_thumbnail1_webp from '../assets/img2/img/thumbnail1.webp';
import media_thumbnail2_webp from '../assets/img2/img/thumbnail2.webp';
import media_thumbnail3_webp from '../assets/img2/img/thumbnail3.webp';
import media_thumbnail4_webp from '../assets/img2/img/thumbnail4.webp';
import React, { useState, useRef, useEffect } from 'react';
import './educational.css';
import { Link } from 'react-router-dom';
const videos = [
  { id: 1, youtubeId: 'igbZ724SVU8', title: 'Splicer', description: 'How to turn on splicer.', thumbnail: media_thumbnail1_webp },
  { id: 2, youtubeId: 'k9IPmX17K6k', title: 'WLAN Setup', description: 'How to setup WLAN?', thumbnail: media_thumbnail2_webp },
  { id: 3, youtubeId: 'CR4LOEIRhbY', title: 'V-Groove Cleaning', description: 'How to clean v-groove?', thumbnail: media_thumbnail3_webp },
  { id: 4, youtubeId: 'v1gISCwq-Xg', title: 'Electrode', description: 'How to change electrode?', thumbnail: media_thumbnail4_webp },
];

const Educational = () => {
  const [modalVideo, setModalVideo] = useState(null);

  // Mobile-only arrows and scroll state
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hasOverflow, setHasOverflow] = useState(false);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener('change', onChange);
    else mq.addListener(onChange);

    const el = sliderRef.current;
    if (!el) return;

    const update = () => {
      const overflow = el.scrollWidth > el.clientWidth + 1;
      setHasOverflow(overflow);
      setCanLeft(el.scrollLeft > 4);
      setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    };

    update();
    el.addEventListener('scroll', update, { passive: true });

    const ro = 'ResizeObserver' in window ? new ResizeObserver(update) : null;
    ro?.observe(el);

    window.addEventListener('resize', update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', onChange);
      else mq.removeListener(onChange);

      el.removeEventListener('scroll', update);
      ro?.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollByOneCard = (dir) => {
    const el = sliderRef.current;
    if (!el) return;

    const card = el.querySelector('.video-card');
    const cs = getComputedStyle(el);
    const gap = Number.parseFloat(cs.columnGap) || Number.parseFloat(cs.gap) || 16;
    const step = card ? card.getBoundingClientRect().width + gap : Math.max(240, el.clientWidth * 0.8);

    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  const showArrows = isMobile && hasOverflow;

  return (
    <>
      <div className="educational-container">
        <h2 >
          <span className="heading-underline">Educational Videos</span>
        </h2>

        <div className="video-slider" ref={sliderRef}>
          {videos.map((video) => (
            <div className="video-card slide-in" key={video.id}>
              <div
                className="video-wrapper"
                onClick={() => setModalVideo(video.youtubeId)}
                role="button"
                tabIndex="0"
              >
                <img
                  src={video.thumbnail || `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  loading="lazy"
                  decoding="async"
                  className="video-thumbnail"
                />
              </div>
              <div className="video-info">
                <h4>{video.title}</h4>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* {showArrows && (
          <>
            <button
              type="button"
              className={`vid-arrow left ${!canLeft ? 'disabled' : ''}`}
              aria-label="Scroll left"
              onClick={() => scrollByOneCard(-1)}
              disabled={!canLeft}
            >
              ‹
            </button>
            <button
              type="button"
              className={`vid-arrow right ${!canRight ? 'disabled' : ''}`}
              aria-label="Scroll right"
              onClick={() => scrollByOneCard(1)}
              disabled={!canRight}
            >
              ›
            </button>
          </>
        )} */}

        <div className="exploree-wrapper">
          <Link to="/educationalpage">
            <button className="exploree-btn">
              View <br /> More
            </button>
          </Link>
        </div>
      </div>

      {modalVideo && (
        <div className="modal-overlay" onClick={() => setModalVideo(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            {/* Close Button */}
            <button
              className="modal-close-btn"
              onClick={() => setModalVideo(null)}
            >
              ×
            </button>

            <iframe
              width="100%"
              height="450"
              src={`https://www.youtube.com/embed/${modalVideo}`}
              title="YouTube video"
              frameBorder="0"
              allow="encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </>
  );
};

export default Educational;