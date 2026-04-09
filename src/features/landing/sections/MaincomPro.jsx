import { mediaUrl } from '../../../config/media';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MaincomPro.css';


const videoList = [
  { load: () => Promise.resolve(mediaUrl.video("solderpasteinsption.mp4")), label: 'Solder Paste Inspection', path: '/surface-mounting' },
  { load: () => Promise.resolve(mediaUrl.video("pickandplace.mp4")), label: 'Pick and Place', path: '/surface-mounting' },
  { load: () => Promise.resolve(mediaUrl.video("3DAOI.mp4")), label: '3D AOI', path: '/surface-mounting' },
  { load: () => Promise.resolve(mediaUrl.video("miline.mp4")), label: 'Manual Insertion', path: '/mi' },
  { load: () => Promise.resolve(mediaUrl.video("wavesoldering.mp4")), label: 'Wave Soldering', path: '/mi' },
  { load: () => Promise.resolve(mediaUrl.video("ELAtestingpackaging.mp4")), label: 'Testing and Packing', path: '/ofcpage' },
  { load: () => Promise.resolve(mediaUrl.video("colouringline.mp4")), label: 'Fiber Coloring', path: '/ofcpage' },
  { load: () => Promise.resolve(mediaUrl.video("shating.mp4")), label: 'Fiber Sheathing', path: '/ofcpage' },
  { load: () => Promise.resolve(mediaUrl.video("buffeering.mp4")), label: 'Fiber Buffering', path: '/ofcpage' },
  { load: () => Promise.resolve(mediaUrl.video("ftth.mp4")), label: 'FTTH Cable', path: '/ofcpage' },
  { load: () => Promise.resolve(mediaUrl.video("ofctestingpackaging.mp4")), label: 'Fiber Testing and Packing', path: '/ofcpage' },
  { load: () => Promise.resolve(mediaUrl.video("Utilityvideo.mp4")), label: 'Utility', path: '/mi' }
];

const VideoItem = ({ video, onClick }) => {
  const [src, setSrc] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      },
      { rootMargin: '150px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let active = true;
    if (!src && isVisible) {
      video.load().then((mod) => {
        if (active) setSrc(mod.default || mod);
      }).catch(() => {});
    }
    return () => { active = false; };
  }, [isVisible, src, video]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (!isVisible) {
      try { el.pause(); } catch {}
    }
  }, [isVisible]);

  return (
    <div
      className="main-com-pro-main-box"
      ref={containerRef}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={video.label}
      style={{ cursor: 'pointer' }}
    >
      {src && isVisible ? (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
        />
      ) : (
        <div
          className="video-placeholder"
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e6e6e6',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        >
          <span style={{ fontSize: '1rem', color: '#666' }}>Play</span>
        </div>
      )}
      <p className="main-com-pro-description" style={{ zIndex: 2, position: 'relative' }}>{video.label}</p>
    </div>
  );
};
const MaincomPro = () => {
  const navigate = useNavigate();
  // Using simplified logic as resizing logic for chunks was mostly unused in original render loop which used slice
  // Current render uses fixed slices (0,6) and (6 onwards)

  const handleVideoClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <div className="main-com-pro-main-bg">
      <div className="main-com-art">
        <div className="com-art-bg">
          <h3 className="manufacturing-heading">
            <span>Manufacturing</span>
          </h3>

          <p>
            Spanning five acres in Kotdwar, our new integrated electronics and optical-fiber campus features a 100,000 sq ft, fully air-conditioned production area that houses state-of-the-art SMT, MI, testing and packing lines. Ten Panasonic high-speed pick-and-place machines—each rated at 400,000 components per hour—drive a combined throughput unrivalled in the region, while our dedicated optical-fiber cable plant turns out up to 24-core cables on advanced colouring, buffering, sheathing and FTTH lines, delivering more than 400 km of finished fiber every day. Together, these capabilities position us as a one-stop manufacturing powerhouse for next-generation connectivity solutions.
          </p>
        </div>
      </div>

      <div className="video-section-container">
        {/* Electronics Section */}
        <h4 className="video-row-heading">Electronics</h4>
        <div className="video-scroll-row">
          {videoList.slice(0, 6).map((video, index) => (
            <VideoItem
              key={index}
              video={video}
              onClick={() => handleVideoClick(video.path)}
            />
          ))}
        </div>

        {/* Fiber Section */}
        <h4 className="video-row-heading">Fiber Optic Cable</h4>
        <div className="video-scroll-row">
          {videoList.slice(6).map((video, index) => (
            <VideoItem
              key={index + 6}
              video={video}
              onClick={() => handleVideoClick(video.path)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaincomPro;
