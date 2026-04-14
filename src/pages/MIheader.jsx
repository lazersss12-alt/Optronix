// import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
// import './PageHeader.css';   // ✅ reuse same CSS classes as PageHeader

// // Media
// import ProductionLineImage from '../components/img/ProductionLine.JPG';
// import Machine1 from '../components/img/MI32.jpg';
// import Machine2 from '../components/img/MI1updated.mp4';
// import Machine3 from '../components/img/MI2.mp4';

// // Detect browser zoom (same hook as in PageHeader)
// function useZoom({ inThreshold = 1.15, outThreshold = 0.9 } = {}) {
//   const baseDPR = useRef(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1);
//   const [state, setState] = useState('normal');

//   useEffect(() => {
//     if (typeof window === 'undefined') return;
//     const vv = window.visualViewport;

//     const getScale = () =>
//       vv && typeof vv.scale === 'number'
//         ? vv.scale
//         : (window.devicePixelRatio || 1) / baseDPR.current;

//     const apply = () => {
//       const s = getScale();
//       setState(s > inThreshold ? 'in' : s < outThreshold ? 'out' : 'normal');
//     };

//     apply();
//     const onResize = () => apply();
//     vv?.addEventListener('resize', onResize);
//     window.addEventListener('resize', onResize);
//     return () => {
//       vv?.removeEventListener('resize', onResize);
//       window.removeEventListener('resize', onResize);
//     };
//   }, [inThreshold, outThreshold]);

//   return {
//     zoom: state,
//     isZoomOut: state === 'out',
//   };
// }

// const MIheader = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isPlaying, setIsPlaying] = useState(true);
//   const slideInterval = useRef(null);
//   const isVideoPlaying = useRef(false);
//   const videoRefs = useRef([]);

//   const { isZoomOut } = useZoom();

//   const supportsDVH = useMemo(
//     () =>
//       typeof window !== 'undefined' &&
//       window.CSS &&
//       CSS.supports &&
//       CSS.supports('height', '1dvh'),
//     []
//   );
//   const unit = supportsDVH ? 'dvh' : 'vh';

//   // Slides
//   const mediaItems = useMemo(
//     () => [
//       { type: 'image', src: ProductionLineImage },
//       { type: 'image', src: Machine1 },
//       { type: 'video', src: Machine2 },
//       { type: 'video', src: Machine3 },
//     ],
//     []
//   );

//   const goToNextSlide = useCallback(() => {
//     if (isVideoPlaying.current) return;
//     setCurrentSlide((prev) => (prev + 1) % mediaItems.length);
//   }, [mediaItems.length]);

//   // Handle video end logic
//   useEffect(() => {
//     const currentItem = mediaItems[currentSlide];
//     const currentVideo = videoRefs.current[currentSlide];

//     const handleVideoEnd = () => {
//       isVideoPlaying.current = false;
//       setCurrentSlide((currentSlide + 1) % mediaItems.length);
//     };

//     videoRefs.current.forEach((video, idx) => {
//       if (video && idx !== currentSlide) {
//         video.pause();
//         video.currentTime = 0;
//       }
//     });

//     if (currentItem.type === 'video' && currentVideo) {
//       isVideoPlaying.current = true;
//       currentVideo.loop = false;
//       currentVideo.play().catch(() => {
//         currentVideo.controls = true;
//       });
//       currentVideo.addEventListener('ended', handleVideoEnd);
//       return () => currentVideo.removeEventListener('ended', handleVideoEnd);
//     } else {
//       isVideoPlaying.current = false;
//     }
//   }, [currentSlide, mediaItems]);

//   // Auto-play for images
//   useEffect(() => {
//     const currentItem = mediaItems[currentSlide];
//     if (slideInterval.current) clearInterval(slideInterval.current);
//     if (isPlaying && currentItem?.type === 'image' && !isVideoPlaying.current) {
//       slideInterval.current = setInterval(goToNextSlide, 5000);
//     }
//     return () => clearInterval(slideInterval.current);
//   }, [currentSlide, isPlaying, mediaItems, goToNextSlide]);

//   const pauseCarousel = () => {
//     setIsPlaying(false);
//     clearInterval(slideInterval.current);
//   };
//   const resumeCarousel = () => setIsPlaying(true);
//   const goToSlide = (index) => {
//     clearInterval(slideInterval.current);
//     setCurrentSlide(index);
//     setIsPlaying(true);
//   };

//   // Dynamic header height CSS custom property
//   const headerHeight = isZoomOut
//     ? `clamp(320px, 52${unit}, 520px)`
//     : `clamp(450px, 70${unit}, 760px)`;

//   const bannerStyle = {
//     '--header-height': headerHeight,
//     '--header-height-mobile': isZoomOut ? '50vh' : '60vh',
//     backgroundImage: `
//       linear-gradient(to bottom,
//         rgba(0,0,0,0.95) 0%,
//         rgba(0,0,0,0.85) 30%,
//         rgba(0,0,0,0.0) 60%,
//         rgba(0,0,0,0.75) 90%
//       ),
//       url(${mediaItems[currentSlide].type === 'image' ? mediaItems[currentSlide].src : ''})
//     `,
//   };

//   return (
//     <div className="header-wrapper">
//       <div className={`header ${isZoomOut ? 'zoom-out' : ''}`}>
//         <div
//           className="header-banner"
//           style={bannerStyle}
//           onMouseEnter={pauseCarousel}
//           onMouseLeave={resumeCarousel}
//         >
//           <div className="header-gradient"></div>
//           <div className="header-inner">
//             <h1 className="header-title">MANUAL INSERTION LINE (MI)</h1>
//           </div>

//           {/* Render video if current item is video */}
//           {mediaItems[currentSlide].type === 'video' && (
//             <video
//               ref={(el) => (videoRefs.current[currentSlide] = el)}
//               src={mediaItems[currentSlide].src}
//               muted
//               playsInline
//               className="header-video"
//             />
//           )}
//         </div>

//         {/* Navigation dots */}
//         <div className="header-dots">
//           {mediaItems.map((_, index) => (
//             <button
//               key={index}
//               className={`header-dot ${currentSlide === index ? 'active' : ''}`}
//               onClick={() => goToSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MIheader;














import React, { useState, useEffect, useRef, useMemo } from 'react';
import './PageHeader.css';   // ✅ reuse same CSS classes as PageHeader

// Media
import { mediaUrl } from "../config/media";
const ProductionLineImage = mediaUrl.image("productionline.jpg");

// Detect browser zoom (same hook as in PageHeader)
function useZoom({ inThreshold = 1.15, outThreshold = 0.9 } = {}) {
  const baseDPR = useRef(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1);
  const [state, setState] = useState('normal');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const vv = window.visualViewport;

    const getScale = () =>
      vv && typeof vv.scale === 'number'
        ? vv.scale
        : (window.devicePixelRatio || 1) / baseDPR.current;

    const apply = () => {
      const s = getScale();
      setState(s > inThreshold ? 'in' : s < outThreshold ? 'out' : 'normal');
    };

    apply();
    const onResize = () => apply();
    vv?.addEventListener('resize', onResize);
    window.addEventListener('resize', onResize);
    return () => {
      vv?.removeEventListener('resize', onResize);
      window.removeEventListener('resize', onResize);
    };
  }, [inThreshold, outThreshold]);

  return {
    zoom: state,
    isZoomOut: state === 'out',
  };
}

const MIheader = () => {
  const { isZoomOut } = useZoom();

  const supportsDVH = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.CSS &&
      CSS.supports &&
      CSS.supports('height', '1dvh'),
    []
  );
  const unit = supportsDVH ? 'dvh' : 'vh';

  // Dynamic height
  const headerHeight = isZoomOut
    ? `clamp(320px, 52${unit}, 520px)`
    : `clamp(450px, 70${unit}, 760px)`;

  // Banner style (same gradient and static image)
  const bannerStyle = {
    '--header-height': headerHeight,
    '--header-height-mobile': isZoomOut ? '50vh' : '60vh',
    backgroundImage: `
    linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 30%
  ),
      url(${ProductionLineImage})
    `,
  };

  return (
    <div className="header-wrapper">
      <div className={`header ${isZoomOut ? 'zoom-out' : ''}`}>
        <div className="header-banner" style={bannerStyle}>
          <div className="header-gradient"></div>
          <div className="header-inner">
            <h1 className="header-title">MANUAL INSERTION LINE (MI)</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MIheader;