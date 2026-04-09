import React, { useEffect, useState } from "react";
import "./ImageSlider.css";
import desktopVideo from "../../assets/images/herodesktop.mp4";
import mobileVideo from "../../assets/images/herophone1080-1920.mp4"; // 9:16 aspect ratio
import logo from "../../assets/images/logo.png";

const ImageSlider = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  const [canLoadVideo, setCanLoadVideo] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let idleId;
    let timeoutId;

    const enable = () => {
      setCanLoadVideo(true);
      cleanup();
    };

    const onInteract = () => enable();

    const cleanup = () => {
      window.removeEventListener("scroll", onInteract);
      window.removeEventListener("touchstart", onInteract);
      window.removeEventListener("mousemove", onInteract);
      window.removeEventListener("keydown", onInteract);
      if (idleId && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) clearTimeout(timeoutId);
    };

    window.addEventListener("scroll", onInteract, { passive: true, once: true });
    window.addEventListener("touchstart", onInteract, { passive: true, once: true });
    window.addEventListener("mousemove", onInteract, { passive: true, once: true });
    window.addEventListener("keydown", onInteract, { passive: true, once: true });

    if ("requestIdleCallback" in window) {
      idleId = window.requestIdleCallback(enable, { timeout: 2000 });
    } else {
      timeoutId = setTimeout(enable, 2000);
    }

    return cleanup;
  }, []);

  const shouldLoadVideo = canLoadVideo;

  return (
    <div className="slider-container">
      <div className="slide">
        {shouldLoadVideo ? (
          <video
            src={isMobile ? mobileVideo : desktopVideo}
            className={`slide-media ${isMobile ? "video-mobile" : "video-desktop"}`}
            width={isMobile ? "1080" : "1920"}
            height={isMobile ? "1920" : "1080"}
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          />
        ) : (
          <div className="slide-placeholder-loading" style={{ width: '100%', height: '100%', backgroundColor: '#000' }}></div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;

