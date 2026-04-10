import { mediaUrl } from '../config/media';
// BranchesPage.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Gallery.css';
// import kochi1 from '../components/img/kochi1.jpg';
export default function BranchesPage() {
  const navigate = useNavigate();
  const location = useLocation();
  // Accept eventData passed via location.state (or use sample fallback)
  const eventData = location.state?.eventData ?? [

    { id: 100, title: 'Republic Day', subtitle: 'Republic Day Celebration 2025', cover: mediaUrl.image("Republic1.webp"), images: [mediaUrl.image("Republic1.webp"), mediaUrl.image("Republic2.webp"), mediaUrl.image("Republic3.webp"), mediaUrl.image("Republic4.webp"), mediaUrl.image("Republic5.webp"), mediaUrl.image("Republic6.webp"), mediaUrl.video("Republic7.mp4")] },
    { id: 0, title: 'Kochi', subtitle: 'Mega Cable Fest 2025', cover: mediaUrl.image("kochi thumbnail.webp"), images: [mediaUrl.image("kochi2.webp"), mediaUrl.image("kochi5.webp"), mediaUrl.image("kochi6.webp"), mediaUrl.image("kochi8.webp"), mediaUrl.image("kochi9.webp"), mediaUrl.image("kochi10.webp"), mediaUrl.image("kochi11.webp"), mediaUrl.image("kochi13.webp"), mediaUrl.image("kochi15.webp"), mediaUrl.image("kochi17.webp"), mediaUrl.image("kochi18.webp"), mediaUrl.image("kochi20.webp"), mediaUrl.image("kochi21.webp"), mediaUrl.image("kochi22.webp"), mediaUrl.image("kochi24.webp"), mediaUrl.image("kochi25.webp"), mediaUrl.image("kochi27.webp"), mediaUrl.image("kochi28.webp"), mediaUrl.image("kochi29.webp"), mediaUrl.image("kochi30.webp"), mediaUrl.image("kochi31.webp")] },
    { id: 1, title: 'Mumbai', subtitle: 'SCAT 2025', cover: mediaUrl.image("mumbai1.webp"), images: [mediaUrl.image("mumbai1.webp"), mediaUrl.image("mumbai2.webp"), mediaUrl.image("mumbai3.webp"), mediaUrl.image("mumbai4.webp"), mediaUrl.image("mumbai5.webp"), mediaUrl.image("mumbai6.webp"), mediaUrl.image("mumbai7.webp"), mediaUrl.image("mumbai8.webp")] },
    { id: 2, title: 'Kotdwar', subtitle: 'Annual Day Celebration', cover: mediaUrl.image("photo1.webp"), images: [mediaUrl.image("photo1.webp"), mediaUrl.image("photo2.webp"), mediaUrl.image("photo3.webp"), mediaUrl.image("photo4.webp"), mediaUrl.image("photo5.webp"), mediaUrl.image("photo6.webp"), mediaUrl.image("photo7.webp"), mediaUrl.image("photo8.webp"), mediaUrl.image("photo9.webp"), mediaUrl.image("photo10.webp"), mediaUrl.image("photo11.webp")] },
    { id: 3, title: 'Kolkata', subtitle: 'Cable TV Show India', cover: mediaUrl.image("img11.jpg"), images: [mediaUrl.image("img11.jpg"), mediaUrl.image("img12.jpg"), mediaUrl.image("img13.jpg"), mediaUrl.image("img14.jpg")] },
    { id: 4, title: 'Kalyan', subtitle: 'Free Service Camp - Technical Support', cover: mediaUrl.image("freeservicecamp1.jpeg"), images: [mediaUrl.image("freeservicecamp1.jpeg"), mediaUrl.image("freeservicecapm2.jpeg"), mediaUrl.image("freeservicecamp3.jpeg")] }
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
