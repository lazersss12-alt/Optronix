// BranchesPage.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Gallery.css';
import kotwar1 from '../components/img/photo1.webp';
import kotwar2 from '../components/img/photo2.webp';
import kotwar3 from '../components/img/photo3.webp';
import kotwar4 from '../components/img/photo4.webp';
import kotwar5 from '../components/img/photo5.webp';
import kotwar6 from '../components/img/photo6.webp';
import kotwar7 from '../components/img/photo7.webp';
import kotwar8 from '../components/img/photo8.webp';
import kotwar9 from '../components/img/photo9.webp';
import kotwar10 from '../components/img/photo10.webp';
import kotwar11 from '../components/img/photo11.webp';
import mumbai1 from '../components/img/mumbai1.webp';
import mumbai2 from '../components/img/mumbai2.webp';
import mumbai3 from '../components/img/mumbai3.webp';
import mumbai4 from '../components/img/mumbai4.webp';
import mumbai5 from '../components/img/mumbai5.webp';
import mumbai6 from '../components/img/mumbai6.webp';
import mumbai7 from '../components/img/mumbai7.webp';
import mumbai8 from '../components/img/mumbai8.webp';
// import kochi1 from '../components/img/kochi1.jpg';
import kochithmb from '../components/img/kochi thumbnail.webp';
import kochi2 from '../components/img/kochi2.webp';
import kochi3 from '../components/img/kochi3.webp';
import kochi4 from '../components/img/kochi4.webp';
import kochi5 from '../components/img/kochi5.webp';
import kochi6 from '../components/img/kochi6.webp';
import kochi7 from '../components/img/kochi7.webp';
import kochi8 from '../components/img/kochi8.webp';
import kochi9 from '../components/img/kochi9.webp';
import kochi10 from '../components/img/kochi10.webp';
import kochi11 from '../components/img/kochi11.webp';
import kochi12 from '../components/img/kochi12.webp';
import kochi13 from '../components/img/kochi13.webp';
import kochi14 from '../components/img/kochi14.webp';
import kochi15 from '../components/img/kochi15.webp';
import kochi16 from '../components/img/kochi16.webp';
import kochi17 from '../components/img/kochi17.webp';
import kochi18 from '../components/img/kochi18.webp';
import kochi19 from '../components/img/kochi19.webp';
import kochi20 from '../components/img/kochi20.webp';
import kochi21 from '../components/img/kochi21.webp';
import kochi22 from '../components/img/kochi22.webp';
import kochi23 from '../components/img/kochi23.webp';
import kochi24 from '../components/img/kochi24.webp';
import kochi25 from '../components/img/kochi25.webp';
import kochi26 from '../components/img/kochi26.webp';
import kochi27 from '../components/img/kochi27.webp';
import kochi28 from '../components/img/kochi28.webp';
import kochi29 from '../components/img/kochi29.webp';
import kochi30 from '../components/img/kochi30.webp';
import kochi31 from '../components/img/kochi31.webp';
import service from '../components/img/freeservicecamp1.webp';
import service1 from '../components/img/freeservicecamp1.webp';
import service2 from '../components/img/freeservicecapm2.webp';
import service3 from '../components/img/freeservicecamp3.webp';
import imag9 from '../components/img/img11.webp';
import imag10 from '../components/img/img12.webp';
import imag11 from '../components/img/img13.webp';
import imag12 from '../components/img/img14.webp';

import Rep1 from '../components/img/Republic1.webp';
import Rep2 from '../components/img/Republic2.webp';
import Rep3 from '../components/img/Republic3.webp';
import Rep4 from '../components/img/Republic4.webp';
import Rep5 from '../components/img/Republic5.webp';
import Rep6 from '../components/img/Republic6.webp';
import Rep7 from '../components/img/Republic7.mp4';


export default function BranchesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  // Accept eventData passed via location.state (or use sample fallback)
  const eventData = location.state?.eventData ?? [

    { id: 100, title: 'Republic Day', subtitle: 'Republic Day Celebration 2025', cover: Rep1, images: [Rep1, Rep2, Rep3, Rep4, Rep5, Rep6, Rep7] },
    { id: 0, title: 'Kochi', subtitle: 'Mega Cable Fest 2025', cover: kochithmb, images: [kochi2, kochi5, kochi6, kochi8, kochi9, kochi10, kochi11, kochi13, kochi15, kochi17, kochi18, kochi20, kochi21, kochi22, kochi24, kochi25, kochi27, kochi28, kochi29, kochi30, kochi31] },
    { id: 1, title: 'Mumbai', subtitle: 'SCAT 2025', cover: mumbai1, images: [mumbai1, mumbai2, mumbai3, mumbai4, mumbai5, mumbai6, mumbai7, mumbai8] },
    { id: 2, title: 'Kotdwar', subtitle: 'Annual Day Celebration', cover: kotwar1, images: [kotwar1, kotwar2, kotwar3, kotwar4, kotwar5, kotwar6, kotwar7, kotwar8, kotwar9, kotwar10, kotwar11] },
    { id: 3, title: 'Kolkata', subtitle: 'Cable TV Show India', cover: imag9, images: [imag9, imag10, imag11, imag12] },
    { id: 4, title: 'Kalyan', subtitle: 'Free Service Camp - Technical Support', cover: service, images: [service1, service2, service3] }
  ];

  if (!eventData || eventData.length === 0) {
    return (
      <div className="gp-empty">
        <div className="gp-empty__inner">
          <h2>No branches available</h2>
          <p>Please add branch gallery data.</p>
        </div>
      </div>
    );
  }

  return (
    <main className="gp-container">
      <header className="gp-header">
        <h1>Exhibition Gallery</h1>
        <p>Choose an Exhibition to view its gallery.</p>
      </header>

      <section className="branches-grid">
        {eventData.map((b, idx) => (
          <article
            key={b.id ?? idx}
            className="branch-card"
            onClick={() => navigate(`/gallery/branch/${b.id ?? idx}`, { state: { branch: b, branchIndex: idx, eventData } })}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/gallery/branch/${b.id ?? idx}`, { state: { branch: b, branchIndex: idx, eventData } }); }}
            aria-label={`Open gallery for ${b.title}`}
          >
            <div className="branch-card__thumb">
              <img src={b.cover ?? b.images?.[0]} alt={`${b.title} cover`} loading="lazy" />
            </div>
            <div className="branch-card__info">
              <h3>{b.title}</h3>
              <p className="muted">{b.subtitle} · {b.date}</p>
              <button className="branch-card__open">Open gallery →</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
