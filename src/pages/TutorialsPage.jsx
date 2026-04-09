import { mediaUrl } from '../config/media';
// src/pages/TutorialsPage.jsx

// src/pages/TutorialsPage.jsx
// This component now contains ALL the logic. You can delete SurfaceMountingShowcase.js

// src/pages/TutorialsPage.jsx
// This is now a self-contained page. It imports its own data and video.

// src/pages/TutorialsPage.jsx
// This component is now self-contained and includes all advanced video logic.

// src/pages/TutorialsPage.jsx
// This version removes the sidebar and makes the video player full-screen.

// src/pages/TutorialsPage.jsx
// This version includes the 0.5-second auto-play delay after rewinding.

import React, { useState, useRef, useEffect } from 'react';
// --- LOGIC CONSTANTS ---
const FAST_FORWARD_RATE = 8;

// --- STYLES ---
const pageStyle = {
  height: '100vh',
  width: '100%',
  fontFamily: 'sans-serif',
  backgroundColor: '#000',
};
const videoContainerStyle = {
  width: '100%',
  height: '100%',
  position: 'relative',
};

const TutorialsPage = () => {
  // --- DATA AND CONFIGURATION ---
  const machineData = [
    { title: "1. Loader", startTime: 0, endTime: 19, playbackSpeed: 2.0 },
    { title: "2. Solder Paste Printer", startTime: 20, endTime: 26, playbackSpeed: 2.0 },
    { title: "3. Pick and Place", startTime: 27, endTime: 49, playbackSpeed: 2.0 },
    { title: "4. Reflow Oven", startTime: 50, endTime: 58, playbackSpeed: 2.0 },
    { title: "5. Unloader", startTime: 59, endTime: 74, playbackSpeed: 2.0 },
  ];
  const defaultSpeed = 1.0;

  // --- STATE AND REFS ---
  const [activeSegment, setActiveSegment] = useState(0); 
  const videoRef = useRef(null);
  const rewindPlayTimeoutRef = useRef(null); // <<< ADDED: Ref to manage the auto-play timer

  // --- EFFECT HOOKS ---

  // Scroll wheel enhancement effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let scrollDebounceTimeout = null;
    const MIN_RATE = 0.25;
    const MAX_RATE = 8;
    const BASE_RATE = 1;
    const SCROLL_SENSITIVITY = 0.05;

    const handleWheel = (e) => {
      e.preventDefault();
      if (!video.duration) return;
      
      // <<< MODIFIED: Clear the specific auto-play timer on any new scroll event
      if (rewindPlayTimeoutRef.current) {
        clearTimeout(rewindPlayTimeoutRef.current);
      }

      let rate = Math.abs(e.deltaY * SCROLL_SENSITIVITY);
      rate = Math.max(MIN_RATE, Math.min(MAX_RATE, rate));

      // --- Scrolling down: Fast-forward ---
      if (e.deltaY > 0) {
        video.playbackRate = rate;
        video.play().catch(() => {});

        // Set a timeout to reset the speed after fast-forwarding stops
        if (scrollDebounceTimeout) clearTimeout(scrollDebounceTimeout);
        scrollDebounceTimeout = setTimeout(() => {
          const currentSegment = machineData[activeSegment];
          video.playbackRate = currentSegment?.playbackSpeed || defaultSpeed || BASE_RATE;
        }, 300); // 300ms debounce
      
      // --- Scrolling up: Rewind and then auto-play ---
      } else if (e.deltaY < 0) {
        video.pause(); // 1. Pause the video immediately

        const rewindAmount = 2; // 2. Jump back in time
        video.currentTime = Math.max(0, video.currentTime - rewindAmount);
        
        // 3. Schedule the video to resume playing after a 500ms delay <<< MODIFIED
        rewindPlayTimeoutRef.current = setTimeout(() => {
          const currentSegment = machineData[activeSegment];
          video.playbackRate = currentSegment?.playbackSpeed || defaultSpeed || BASE_RATE;
          video.play().catch(() => {});
        }, 500); // 500ms delay as requested
      }
    };

    video.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      video.removeEventListener('wheel', handleWheel);
      if (scrollDebounceTimeout) clearTimeout(scrollDebounceTimeout);
      if (rewindPlayTimeoutRef.current) clearTimeout(rewindPlayTimeoutRef.current); // <<< ADDED: Cleanup on unmount
    };
  }, [activeSegment, machineData, defaultSpeed]);

  // --- RENDER ---
  return (
    <div style={pageStyle}>
      <div style={videoContainerStyle}>
        <video
          ref={videoRef}
          src={mediaUrl.video("Updated Video.mp4")}
          muted
          autoPlay
          playsInline
          loop
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          preload="auto"
        />
      </div>
    </div>
  );
};

export default TutorialsPage;

// --- NOTE: The goToSegment logic is no longer needed since the sidebar was removed,
// so it has been cleaned up from this version to simplify the code.