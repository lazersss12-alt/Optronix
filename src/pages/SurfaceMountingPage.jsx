// src/pages/SurfaceMountingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../components/ems/ems.css';
import PageHeader from './PageHeader';
import SurfaceMountingShowcase from '../components/ems/SurfaceMountingShowcase';
import { Helmet } from 'react-helmet-async';
// Styled component for the info section
const InfoSection = styled.div`
  background-color: #000;
  color: #fff;
  padding: 60px 20px;
  text-align: center;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  p {
    max-width: 1000px;
    margin: 0 auto;
    font-size: 1.1rem;
    line-height: 1.6;
    color: #e0e0e0;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 40px 15px;
    
    h2 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1rem;
    }
  }
`;



function SurfaceMountingPage() {
  // Define timestamps for each machine in your video

  return (
    <div className="surface-mounting-page">
      <Helmet>
        <title>High-Precision SMT Line & Electronic Manufacturing | Optronix India</title>
        <meta name="description" content="Optronix offers end-to-end SMT solutions featuring GKG solder paste printers, Panasonic chip mounters, and Koh Young SPI. From prototype to large-scale production with 100% quality assurance and 3D optical inspection." />
      </Helmet>
      <PageHeader />
      <InfoSection>

        <p>
          We have established a world-class, state-of-the-art manufacturing facility in Kotdwara, Uttarakhand, reflecting
          our unwavering commitment to technological excellence and innovation.
          Spanning over 100,000 sq. ft. of fully air-conditioned, modern infrastructure, the facility designed to optimize
          efficiency, quality, and operational control across all functions.
          Manufacturing under one roof—creating a powerful synergy that drives high performance and accelerates
          delivery of next-generation solutions.
          <br></br><br></br>Our electronics manufacturing division is equipped with:
        </p>
      </InfoSection>
      <SurfaceMountingShowcase />
      {/* <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px',
        padding: '60px 20px',
        backgroundColor: '#000000',
        margin: '0'
      }}>
        <Link 
          to="/mi" 
          onClick={() => window.scrollTo(0, 0)} 
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 24px',
            backgroundColor: '#ffffff',
            color: '#000000',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '16px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            textAlign: 'center',
            whiteSpace: 'nowrap',
            maxWidth: '90%',
            margin: '0 10px',
            boxSizing: 'border-box',
            ':hover': {
              backgroundColor: '#f0f0f0',
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)'
            },
            '@media (max-width: 480px)': {
              padding: '10px 16px',
              fontSize: '14px',
              width: 'auto',
              maxWidth: '100%',
              whiteSpace: 'normal',
              lineHeight: '1.3',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center'
            }
          }}
          className="next-page-button"
        >
          View Manual Insertion Solutions →
        </Link>
      </div> */}
      <div className="next-page-cta">
        <Link
          to="/mi"
          onClick={() => window.scrollTo(0, 0)}
          className="next-page-button"
        >
          View Manual Insertion Solutions →
        </Link>
      </div>

    </div>
  );
}

export default SurfaceMountingPage;