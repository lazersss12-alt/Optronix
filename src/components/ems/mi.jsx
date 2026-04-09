import { mediaUrl } from '../../config/media';


import React, { useEffect, useRef, useState } from 'react';
import Miimgone from './miimgone';

const videoPoints = [
  { time: 2, comment: 'Point 1: Intro message', position: 'top-left' },
  { time: 5, comment: 'Point 2: Key feature explained', position: 'top-right' },
  { time: 9, comment: 'Point 3: Mid-section update', position: 'center-left' },
  { time: 13, comment: 'Point 4: Highlight benefit', position: 'bottom-right' },
  { time: 17, comment: 'Point 5: Core takeaway', position: 'bottom-left' },
  { time: 22, comment: 'Point 6: Final remark', position: 'center-center' },
];

const getCommentBoxStyle = (position) => {
  const baseStyle = {
    position: 'absolute',
    padding: '1rem 1.5rem',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    maxWidth: '300px',
    textAlign: 'center',
    transition: 'opacity 0.5s ease, transform 0.5s ease',
  };

  switch (position) {
    case 'top-left': return { ...baseStyle, top: '15%', left: '10%' };
    case 'top-right': return { ...baseStyle, top: '15%', right: '10%' };
    case 'center-left': return { ...baseStyle, top: '50%', left: '10%', transform: 'translateY(-50%)' };
    case 'center-right': return { ...baseStyle, top: '50%', right: '10%', transform: 'translateY(-50%)' };
    case 'bottom-left': return { ...baseStyle, bottom: '15%', left: '10%' };
    case 'bottom-right': return { ...baseStyle, bottom: '15%', right: '10%' };
    case 'center-center': return { ...baseStyle, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' };
    default: return { ...baseStyle, display: 'none' };
  }
};

const SmtShowcase = () => {
  const videoRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [currentPointIndex, setCurrentPointIndex] = useState(-1);
  const [showNextSection, setShowNextSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const video = videoRef.current;
      const container = scrollContainerRef.current;
      if (!video || !container) return;

      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollableHeight = containerHeight - windowHeight;
      const progress = Math.max(0, Math.min((scrollTop - containerTop) / scrollableHeight, 1));

      const maxVideoTime = videoPoints[videoPoints.length - 1].time;
      const newTime = progress * maxVideoTime;

      if (!isNaN(newTime)) {
        video.currentTime = newTime;
        video.pause();
      }

      let activeIndex = -1;
      for (let i = videoPoints.length - 1; i >= 0; i--) {
        if (newTime >= videoPoints[i].time) {
          activeIndex = i;
          break;
        }
      }
      setCurrentPointIndex(activeIndex);
      setShowNextSection(progress >= 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isMobile = window.innerWidth <= 768;
  const videoSrc = isMobile ? mediaUrl.video("mim.mp4") : mediaUrl.video("mid.mp4");

  const scrollContainerStyle = {
    height: '300vh',
    position: 'relative',
  };

  const videoWrapperStyle = {
    position: 'sticky',
    top: 0,
    height: '100vh',
    width: '100%',
    overflow: 'hidden',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontFamily: 'Poppins, sans-serif',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const commentTextStyle = {
    fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
    margin: 0,
  };

  return (
    <>
      <div ref={scrollContainerRef} style={scrollContainerStyle}>
        <div style={videoWrapperStyle}>
          <video
            ref={videoRef}
            style={videoStyle}
            src={videoSrc}
            muted
            playsInline
            preload="auto"
          />
          {videoPoints.map((point, index) => (
            <div
              key={index}
              style={{
                ...getCommentBoxStyle(point.position),
                opacity: currentPointIndex === index ? 1 : 0,
                transform:
                  currentPointIndex === index
                    ? getCommentBoxStyle(point.position).transform || 'translate(0,0)'
                    : `${getCommentBoxStyle(point.position).transform || 'translate(0,0)'} scale(0.95)`,
              }}
            >
              <p style={commentTextStyle}>{point.comment}</p>
            </div>
          ))}
        </div>
      </div>
      {showNextSection && <Miimgone />}
    </>
  );
};

export default SmtShowcase;