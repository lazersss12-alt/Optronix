import media_sumitomo_webp from '../assets/img2/img/sumitomo.webp';
import media_deviser_webp from '../assets/img2/img/deviser.webp';
import media_spec_webp from '../assets/img2/img/spec.webp';
import media_invas_webp from '../assets/img2/img/invas.webp';
import React from 'react';
import './partner.css';
import { Helmet } from 'react-helmet-async';


const partners = [
  {
    name: 'Sumitomo Electric Industries Ltd.',
    desc: 'Connect with Innovation',
    logo: media_sumitomo_webp,
    link: 'https://global-sei.com/'
  },
  {
    name: 'Deviser',
    desc: 'Over 30 Years of Proven Field Experience',
    logo: media_deviser_webp,
    link: 'https://deviserinstruments.com/'
  },
  {
    name: 'SPEC Technology',
    desc: 'CATV Product',
    logo: media_spec_webp,
    link: 'https://spectechnology.com/'
  },

  {
    name: 'Invas Technologies',
    desc: 'Complete Telecom Solution',
    logo: media_invas_webp,
    link: 'https://invas.in/'
  }
];


const Partner = () => {
  return (
    <div className="import-wrapper">
      <Helmet>
        <title>Partner with Optronix | Leading Fiber Optic Distribution Network India</title>
        <meta name="description" content="Become a part of India's fastest-growing telecom infrastructure network. Optronix offers genuine products from Sumitomo, Deviser, and our own indigenous brand. Unmatched after-sales support and technical expertise." />
      </Helmet>
      <header className="import-header">
        <div className="header-content">
          <h1>Optronix partners</h1>
          <p>We’ve integrated with the below partners and more</p>
        </div>
      </header>

      <section className="partners-section">
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <a
              className="partner-card"
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="partner-logo">
                <img src={partner.logo} loading="lazy" decoding="async" alt={partner.name} />
              </div>
              <h3>{partner.name}</h3>
              <p>{partner.desc}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Partner;
