import { mediaUrl } from '../config/media';
// import React from 'react';
// import '../components/Aboutpage.css';
// import mediaUrl.image("Banner11.jpeg") from '../components/img/About Page.png';
// import PublicationPage from './PublicationPage';

// const AboutPage = () => {
//   return (
//     <div className="about-page">

//       {/* Hero Section */}
//       <div className='about-page-container'>
//         <div className='about-page-container-about'>
//           <h1 style={{ justifySelf: 'center', marginBottom: 10 }}>About Us</h1>
//           <p style={{ textAlign: 'justify' }}>
//             Optronix, in collaboration with SPEC Technology Corp, stands at the
//             forefront of innovation in advanced network solutions. Our vision is to
//             create a seamlessly connected world through intelligent, secure, and
//             efficient technologies that enhance human potential. We take pride in
//             delivering exceptional customer service, which sets us apart in the
//             industry. By investing in and empowering our employees, we ensure they
//             are equipped to provide outstanding experiences to our customers.
//             Integrity and transparency are the cornerstones of our operations,
//             fostering trust and reliability in all our relationships. We embrace a
//             collaborative environment that encourages teamwork, creativity, and
//             innovation, driving continuous improvement in our products and
//             services.
//           </p>
//         </div>
//         <div className='about-page-container-image'>
//           <img className='about-image' src={mediaUrl.image("Banner11.jpeg")} alt="aboutimage" />
//         </div>
//       </div>

//       {/* Values Grid Section */}
//       <section className="values-section">
//         <div className="values-grid">
//           {/* Vision Card */}
//           <div className="value-card">
//             <div className="card-content">
//               <h2>Vision</h2>
//               <div className="card-divider"></div>
//               <p>
//                 To be a global leader in optical communication and electronic
//                 solutions, driving innovation through cutting-edge technology and
//                 customer-centric services. We envision a connected world where our
//                 premium products and integrated solutions enable seamless
//                 communication and progress.
//               </p>
//             </div>
//           </div>

//           {/* Mission Card */}
//           <div className="value-card">
//             <div className="card-content">
//               <h2>Mission</h2>
//               <div className="card-divider"></div>
//               <p>
//                 Our mission is to deliver world-class products and network-integrated
//                 solutions in the fields of electronics and telecommunications. We are
//                 committed to excellence in manufacturing, research, and after-sales
//                 service, ensuring unmatched value to our customers and partners.
//               </p>
//             </div>
//           </div>

//           {/* Core Values Card */}
//           <div className="value-card">
//             <div className="card-content">
//               <h2>Core Values</h2>
//               <div className="card-divider"></div>
//               <ul className="values-list">
//                 <li>Customer Excellence</li>
//                 <li>Employee Empowerment</li>
//                 <li>Integrity & Transparency</li>
//                 <li>Innovation & Collaboration</li>
//                 <li>Continuous Improvement</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Publications Section */}
//       <div className='snap-bleed'>
//         <section className="publications-section">
//           <h2 className="aman">Latest Publications</h2>
//           <PublicationPage />
//         </section>
//       </div>

//     </div>
//   );
// };

// export default AboutPage;





// import React from 'react';
// import '../components/Aboutpage.css';
// import mediaUrl.image("Banner11.jpeg") from '../components/img/About Page.png';
// import PublicationPage from './PublicationPage';

// // Constants
// const ABOUT_CONTENT = {
//   hero: {
//     title: 'About Us',
//     description: `Optronix, in collaboration with SPEC Technology Corp, stands at the
//       forefront of innovation in advanced network solutions. Our vision is to
//       create a seamlessly connected world through intelligent, secure, and
//       efficient technologies that enhance human potential. We take pride in
//       delivering exceptional customer service, which sets us apart in the
//       industry. By investing in and empowering our employees, we ensure they
//       are equipped to provide outstanding experiences to our customers.
//       Integrity and transparency are the cornerstones of our operations,
//       fostering trust and reliability in all our relationships. We embrace a
//       collaborative environment that encourages teamwork, creativity, and
//       innovation, driving continuous improvement in our products and services.`,
//     image: {
//       src: mediaUrl.image("Banner11.jpeg"),
//       alt: 'About Optronix - Innovation in Network Solutions'
//     }
//   },
//   values: [
//     {
//       id: 'vision',
//       title: 'Vision',
//       content: `To be a global leader in optical communication and electronic
//         solutions, driving innovation through cutting-edge technology and
//         customer-centric services. We envision a connected world where our
//         premium products and integrated solutions enable seamless
//         communication and progress.`
//     },
//     {
//       id: 'mission',
//       title: 'Mission',
//       content: `Our mission is to deliver world-class products and network-integrated
//         solutions in the fields of electronics and telecommunications. We are
//         committed to excellence in manufacturing, research, and after-sales
//         service, ensuring unmatched value to our customers and partners.`
//     },
//     {
//       id: 'core-values',
//       title: 'Core Values',
//       list: [
//         'Customer Excellence',
//         'Employee Empowerment',
//         'Integrity & Transparency',
//         'Innovation & Collaboration',
//         'Continuous Improvement'
//       ]
//     }
//   ]
// };

// const AboutPage = () => {
//   return (
//     <main className="about-page">

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="hero-section__container">
//           <div className="hero-section__content">
//             <h1 className="hero-section__title">{ABOUT_CONTENT.hero.title}</h1>
//             <p className="hero-section__description">
//               {ABOUT_CONTENT.hero.description}
//             </p>
//           </div>
//           <div className="hero-section__image-wrapper">
//             <img
//               className="hero-section__image"
//               src={ABOUT_CONTENT.hero.image.src}
//               alt={ABOUT_CONTENT.hero.image.alt}
//               loading="lazy"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="values-section">
//         <div className="values-section__grid">
//           {ABOUT_CONTENT.values.map((value) => (
//             <article key={value.id} className="value-card">
//               <div className="value-card__content">
//                 <h2 className="value-card__title">{value.title}</h2>
//                 <div className="value-card__divider" aria-hidden="true"></div>

//                 {value.content && (
//                   <p className="value-card__text">{value.content}</p>
//                 )}

//                 {value.list && (
//                   <ul className="value-card__list">
//                     {value.list.map((item, index) => (
//                       <li key={index} className="value-card__list-item">
//                         {item}
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </div>
//             </article>
//           ))}
//         </div>
//       </section>

//       {/* Publications Section */}
//       <section className="publications-section">
//         <div className="publications-section__container">
//           <h2 className="publications-section__title">Latest Publications</h2>
//           <PublicationPage />
//         </div>
//       </section>

//     </main>
//   );
// };

// export default AboutPage;





import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../components/Aboutpage.css';
import PublicationPage from './PublicationPage';

// Constants
const ABOUT_CONTENT = {
  hero: {

    description: `Optronix, in collaboration with SPEC Technology Corp, stands at the
      forefront of innovation in advanced network solutions. Our vision is to
      create a seamlessly connected world through intelligent, secure, and
      efficient technologies that enhance human potential. We take pride in
      delivering exceptional customer service, which sets us apart in the
      industry. By investing in and empowering our employees, we ensure they
      are equipped to provide outstanding experiences to our customers.
      Integrity and transparency are the cornerstones of our operations,
      fostering trust and reliability in all our relationships. We embrace a
      collaborative environment that encourages teamwork, creativity, and
      innovation, driving continuous improvement in our products and services.`,
    image: {
      src: mediaUrl.image("Banner11.jpeg"),
      alt: 'About Optronix - Innovation in Network Solutions'
    }
  },
  values: [
    {
      id: 'vision',
      title: 'Vision',
      content: `To be a global leader in optical communication and electronic
        solutions, driving innovation through cutting-edge technology and
        customer-centric services. We envision a connected world where our
        premium products and integrated solutions enable seamless
        communication and progress.`
    },
    {
      id: 'mission',
      title: 'Mission',
      content: `Our mission is to deliver world-class products and network-integrated
        solutions in the fields of electronics and telecommunications. We are
        committed to excellence in manufacturing, research, and after-sales
        service, ensuring unmatched value to our customers and partners.`
    },
    {
      id: 'core-values',
      title: 'Core Values',
      list: [
        'Customer Excellence',
        'Employee Empowerment',
        'Integrity & Transparency',
        'Innovation & Collaboration',
        'Continuous Improvement'
      ]
    }
  ]
};

const AboutPage = () => {
  return (
    <main className="about-page">
      <Helmet>
        <title>Optronix: Innovation in Network Solutions | 18+ Offices Across India</title>
        <meta name="description" content="From New Delhi to Mumbai, Optronix delivers integrated network solutions. Explore our core values of innovation, integrity, and customer excellence in the fields of electronics and telecommunications." />
      </Helmet>
      {/* Full-bleed banner */}
      <section className="hero-banner" aria-label="About banner">
        <img
          className="hero-banner__img"
          src={ABOUT_CONTENT.hero.image.src}
          alt={ABOUT_CONTENT.hero.image.alt}
          loading="eager"
        />
      </section>

      {/* New designed background behind heading + text */}
      <section className="hero-surface" aria-label="About section background">
        {/* Decorative layers */}
        <div className="hero-surface__overlay hero-surface__overlay--gradient" aria-hidden="true" />
        <div className="hero-surface__overlay hero-surface__overlay--pattern" aria-hidden="true" />
        <span className="hero-surface__glow hero-surface__glow--a" aria-hidden="true" />
        <span className="hero-surface__glow hero-surface__glow--b" aria-hidden="true" />

        {/* Centered copy */}
        <div className="hero-copy hero-surface__inner">
          <h1 className="hero-copy__title">{ABOUT_CONTENT.hero.title}</h1>
          <p className="hero-copy__description">
            {ABOUT_CONTENT.hero.description}
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="values-section__grid">
          {ABOUT_CONTENT.values.map((value) => (
            <article key={value.id} className="value-card">
              <div className="value-card__content">
                <h2 className="value-card__title">{value.title}</h2>
                <div className="value-card__divider" aria-hidden="true"></div>

                {value.content && (
                  <p className="value-card__text">{value.content}</p>
                )}

                {value.list && (
                  <ul className="value-card__list">
                    {value.list.map((item, index) => (
                      <li key={index} className="value-card__list-item">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Publications Section */}
      {/* <section className="publications-section">
        <div className="publications-section__container">
          <h2 className="publications-section__title">Latest Publications</h2>
          <PublicationPage />
        </div>
      </section> */}
    </main>
  );
};

export default AboutPage;