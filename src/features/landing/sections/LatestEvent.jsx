import { mediaUrl } from '../../../config/media';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LatestEvent.css'; // We'll create this CSS file next

// Import images/video
const LatestEvent = () => {
    const navigate = useNavigate();

    // Define the event object matching the structure in Gallery.jsx
    const republicEvent = {
        id: 100,
        title: 'Republic Day',
        subtitle: 'Republic Day Celebration 2025',
        cover: mediaUrl.image("Republic1.jpeg"),
        images: [mediaUrl.image("Republic1.png"), mediaUrl.image("Republic2.jpeg"), mediaUrl.image("Republic3.jpeg"), mediaUrl.image("Republic4.jpeg"), mediaUrl.image("Republic5.jpeg"), mediaUrl.image("Republic6.jpeg"), mediaUrl.video("Republic7.mp4")]
    };

    const handleViewGallery = () => {
        navigate(`/gallery/branch/${republicEvent.id}`, {
            state: { branch: republicEvent }
        });
        window.scrollTo(0, 0);
    };

    return (
        <div className="latest-event-container">
            <div className="latest-event-content">
                <div className="latest-event-image-wrapper">
                    <img loading="lazy" src={mediaUrl.image("Republic1.png")} alt="Republic Day Celebration" className="latest-event-main-image" decoding="async" fetchPriority="high" />
                </div>
                <div className="latest-event-details">
                    <span className="latest-event-badge">Latest Event</span>
                    <h2 className="latest-event-title">Republic Day Celebration 2025</h2>
                    <p className="latest-event-description">
                        Celebrate the spirit of unity and patriotism with us. Check out the highlights from our recent Republic Day celebration.
                    </p>
                    <button className="latest-event-button" onClick={handleViewGallery}>
                        View Full Gallery
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LatestEvent;
