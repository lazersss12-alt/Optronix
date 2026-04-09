import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LatestEvent.css'; // We'll create this CSS file next

// Import images/video
import Rep1 from './img/Republic1.webp';
import Rep2 from './img/Republic2.webp';
import Rep3 from './img/Republic3.webp';
import Rep4 from './img/Republic4.webp';
import Rep5 from './img/Republic5.webp';
import Rep6 from './img/Republic6.webp';
import Rep7 from './img/Republic7.mp4';

const LatestEvent = () => {
    const navigate = useNavigate();

    // Define the event object matching the structure in Gallery.jsx
    const republicEvent = {
        id: 100,
        title: 'Republic Day',
        subtitle: 'Republic Day Celebration 2025',
        cover: Rep1,
        images: [Rep1, Rep2, Rep3, Rep4, Rep5, Rep6, Rep7]
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
                    <img src={Rep1} alt="Republic Day Celebration" className="latest-event-main-image" decoding="async" fetchPriority="high" />
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
