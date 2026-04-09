import React from 'react';
import './WhatsAppButton.css';

/**
 * Floating WhatsApp Button
 * Change WHATSAPP_NUMBER to the target receiver's WhatsApp number (with country code, no + or spaces).
 * Example: "919876543210" for an Indian number +91 98765 43210
 */
const WHATSAPP_NUMBER = '919811308000'; // <-- Replace with actual number
const WHATSAPP_MESSAGE = 'Hello! I am interested in your products.'; // Optional pre-filled message

const WhatsAppButton = () => {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Chat with us on WhatsApp"
            style={{ 
                position: 'fixed', 
                bottom: '28px', 
                right: '28px', 
                zIndex: 999999, 
                backgroundColor: '#25D366',
                display: 'flex',
                width: '60px',
                height: '60px',
                borderRadius: '50%'
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="whatsapp-icon"
                aria-hidden="true"
            >
                <circle cx="24" cy="24" r="24" fill="#25D366" />
                <path
                    fill="#fff"
                    d="M34.49 13.51A14.33 14.33 0 0 0 24 9.5C16.55 9.5 10.5 15.55 10.5 23a13.42 13.42 0 0 0 1.93 6.93L10.5 38.5l8.79-2.3A13.45 13.45 0 0 0 24 37.5c7.45 0 13.5-6.05 13.5-13.5a13.43 13.43 0 0 0-3.01-8.49zm-10.49 20.8a11.2 11.2 0 0 1-5.71-1.56l-.41-.24-4.24 1.11 1.13-4.13-.27-.43A11.22 11.22 0 0 1 12.77 23c0-6.19 5.04-11.23 11.23-11.23A11.23 11.23 0 0 1 35.23 23c0 6.19-5.04 11.31-11.23 11.31zm6.16-8.42c-.34-.17-2-.98-2.3-1.09s-.53-.17-.76.17-.87 1.09-1.07 1.31-.39.26-.73.09a9.18 9.18 0 0 1-2.7-1.67 10.08 10.08 0 0 1-1.87-2.33c-.2-.34 0-.52.15-.69s.34-.39.51-.59a2.27 2.27 0 0 0 .34-.57.63.63 0 0 0-.03-.6c-.09-.17-.76-1.83-1.04-2.5-.27-.66-.55-.57-.76-.58h-.65a1.24 1.24 0 0 0-.9.42 3.8 3.8 0 0 0-1.18 2.82 6.6 6.6 0 0 0 1.38 3.5c.17.23 2.37 3.62 5.74 5.08a19.56 19.56 0 0 0 1.92.71 4.6 4.6 0 0 0 2.12.13 3.49 3.49 0 0 0 2.29-1.62 2.84 2.84 0 0 0 .2-1.62c-.08-.14-.31-.23-.65-.4z"
                />
            </svg>
            <span className="whatsapp-tooltip">Chat with us!</span>
        </a>
    );
};

export default WhatsAppButton;
