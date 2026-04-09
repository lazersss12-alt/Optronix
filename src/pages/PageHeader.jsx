import React, { useState, useEffect, useRef, useMemo } from 'react';
import './PageHeader.css';

import ProductionLineImage from '../components/img/smtheader2.jpg';
import VideoModal from '../components/ems/VideoModal';
import tutorialVideo from '../components/img/Updated 3.mp4';

// Detect browser zoom (in/out) without affecting normal breakpoints
function useZoom({ inThreshold = 1.15, outThreshold = 0.9 } = {}) {
  const baseDPR = useRef(typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1);
  const [state, setState] = useState('normal'); // 'in' | 'out' | 'normal'

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
    isZoomIn: state === 'in',
    isZoomOut: state === 'out',
  };
}

const PageHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { isZoomOut } = useZoom();

  const supportsDVH = useMemo(
    () => typeof window !== 'undefined' && window.CSS && CSS.supports && CSS.supports('height', '1dvh'),
    []
  );
  const unit = supportsDVH ? 'dvh' : 'vh';

  // Calculate header height based on zoom state
  const headerHeight = isZoomOut
    ? `clamp(320px, 52${unit}, 520px)`
    : `clamp(450px, 70${unit}, 760px)`;

  // Set CSS custom properties for dynamic values
  const bannerStyle = {
    '--header-height': headerHeight,
    '--header-height-mobile': isZoomOut ? '50vh' : '60vh',
    backgroundImage: `
   linear-gradient(
    to bottom,
    rgba(0, 0, 0, 2) 0%,
    rgba(0, 0, 0, 0) 30%
  ),
      url(${ProductionLineImage})
    `,
  };

  return (
    <div className="header-wrapper">
  <div className={`header ${isZoomOut ? 'zoom-out' : ''}`}>
    <div className="header-banner" style={bannerStyle}>
      <div className="header-inner">
        <h1 className="header-title">Surface Mounting Technology</h1>
        <p className="header-subtitle">Explore Our Advanced SMT Equipment Line</p>
      </div>

      {/* Button anchored at the bottom of the header */}
      <button className="header-button" onClick={openModal}>
        Watch Video Tour
      </button>
    </div>
    
    <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={tutorialVideo}
      />
  </div>
</div>

   
  );
};

export default PageHeader;