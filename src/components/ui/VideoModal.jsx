import React, { useRef, useState, useEffect } from 'react';

const VideoModal = ({ isOpen, onClose, videoUrl }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Set up event listeners
  useEffect(() => {
    if (!isOpen) return;

    const video = videoRef.current;
    if (video) {
      video.addEventListener('timeupdate', updateProgress);
      video.addEventListener('loadedmetadata', () => {
        setDuration(video.duration);
      });
      video.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        video.removeEventListener('timeupdate', updateProgress);
        video.removeEventListener('loadedmetadata', () => { });
        video.removeEventListener('ended', () => { });
      };
    }
  }, [isOpen]);

  // If the modal is not supposed to be open, render nothing.
  if (!isOpen) {
    return null;
  }

  // Format time in seconds to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Handle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update progress bar
  const updateProgress = () => {
    if (videoRef.current) {
      const { currentTime, duration } = videoRef.current;
      setCurrentTime(currentTime);
      setProgress((currentTime / duration) * 100);
    }
  };

  // Handle seeking
  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekTime = (e.nativeEvent.offsetX / e.target.offsetWidth) * duration;
      videoRef.current.currentTime = seekTime;
    }
  };


  // --- Inline Styles ---
  const modalOverlayStyle = {
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 10001,
  };

  const modalContentStyle = {
    position: 'relative', width: '80%', maxWidth: '1200px',
    backgroundColor: '#000000', borderRadius: '8px',
    overflow: 'hidden'
  };

  const closeButtonStyle = {
    position: 'absolute', top: '10px', right: '10px',
    background: 'rgba(0, 0, 0, 0.7)', color: 'white', border: 'none',
    borderRadius: '50%', width: '30px', height: '30px',
    fontSize: '16px', fontWeight: 'bold', cursor: 'pointer',
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    zIndex: 10002,
  };

  const videoStyle = {
    width: '100%',
    display: 'block',
  };

  const controlsStyle = {
    display: 'flex',
    flexDirection: 'column',
    background: 'rgba(0, 0, 0, 0.7)',
    padding: '10px',
  };

  const progressBarStyle = {
    height: '4px',
    background: '#444',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '8px',
  };

  const progressStyle = {
    height: '100%',
    background: '#fff',
    width: `${progress}%`,
  };

  const controlsRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    padding: '5px 10px',
  };

  const timeStyle = {
    color: 'white',
    fontSize: '14px',
    fontFamily: 'monospace',
  };

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <button style={closeButtonStyle} onClick={onClose}>&times;</button>
        <video
          ref={videoRef}
          src={videoUrl}
          style={videoStyle}
          autoPlay
          playsInline
          muted
          loop
          onClick={togglePlayPause}
        />
        <div style={controlsStyle}>
          <div style={progressBarStyle} onClick={handleSeek}>
            <div style={progressStyle}></div>
          </div>
          <div style={controlsRowStyle}>
            <button style={buttonStyle} onClick={togglePlayPause}>
              {isPlaying ? '❚❚' : '►'}
            </button>
            <div style={timeStyle}>
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;