import React from 'react';
import { Link } from 'react-router-dom';
import '../../../components/index.css';

const LandingAbout = () => {
  return (
    <div>
      <div 
        className='landing-page-about'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
          padding: '20px'
        }}
      >
        {/* Row 1: Heading */}
        <div 
          className='landing-page-about-heading'
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            marginBottom: '20px'
          }}
        >
          <Link to="/about" style={{ textDecoration: 'none', color: 'black' }}>
            <h3 
              className='heading-underline'
              style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                textAlign: 'center',
                margin: '0 auto',
                display: 'block'
              }}
            >
              Our Story
            </h3>
          </Link>
       
        </div>

        {/* Row 2: Content */}
        <div 
          className='landing-page-about-content'
          style={{
            maxWidth: '900px',
            width: '100%'
          }}
        >
          <p
            style={{
              textAlign: 'justify',
              marginTop: '0',
              marginBottom: 'clamp(12px, 2vw, 20px)'
            }}
          >
            Candid Optronix Pvt. Ltd. traces its origins to Spec Technology, established in 1997, which initially focused on CATV, Fiber Optic Cable products. Spec Technology Corporation remained the top performing company for over two decades. With the advancements in technology and new venture possibilities, Candid Optronix was founded in 2015 to address the evolving needs of the telecommunications sector. The company now offers a range of products, including Sumitomo fusion splicing machines, Deviser test and measurement equipment, and manufactures optical fiber cables, ONT/OLT devices, and EDFA units in India.
            <br />
            <br />
            With a strong presence across India, including offices in Delhi, Noida, Ahmedabad, Bangalore, Chennai, Guwahati, Hyderabad, Kochi, Mumbai and Patna, Candid Optronix is well-positioned to serve the telecommunications industry. The company's focus on research and development, coupled with its comprehensive product offerings and service infrastructure, underscores its dedication to providing reliable and innovative solutions in the fiber optic domain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;