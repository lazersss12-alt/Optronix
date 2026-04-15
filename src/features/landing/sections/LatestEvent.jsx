import media_Republic1_webp from '../../../assets/img2/img/Republic1.webp';
import media_Republic2_webp from '../../../assets/img2/img/Republic2.webp';
import media_Republic3_webp from '../../../assets/img2/img/Republic3.webp';
import media_Republic4_webp from '../../../assets/img2/img/Republic4.webp';
import media_Republic5_webp from '../../../assets/img2/img/Republic5.webp';
import media_Republic6_webp from '../../../assets/img2/img/Republic6.webp';
import media_Republic7_mp4 from '../../../assets/img2/img/Republic7.mp4';
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
<<<<<<< HEAD
        cover: media_Republic1_webp,
        images: [media_Republic1_webp, media_Republic2_webp, media_Republic3_webp, media_Republic4_webp, media_Republic5_webp, media_Republic6_webp, media_Republic7_mp4]
=======
        cover: mediaUrl.image("republic1.webp"),
        images: [mediaUrl.image("republic1.webp"), mediaUrl.image("republic2.webp"), mediaUrl.image("republic3.webp"), mediaUrl.image("republic4.webp"), mediaUrl.image("republic5.webp"), mediaUrl.image("republic6.webp"), mediaUrl.video("Republic7.mp4")]
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
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
<<<<<<< HEAD
                    <img loading="lazy" src={media_Republic1_webp} alt="Republic Day Celebration" className="latest-event-main-image" decoding="async" fetchPriority="high" />
=======
                    <img loading="lazy" src={mediaUrl.image("republic1.webp")} alt="Republic Day Celebration" className="latest-event-main-image" decoding="async" fetchPriority="high" />
>>>>>>> 54d7a995d80297b97eaf55eeeca00ce44db276fc
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
