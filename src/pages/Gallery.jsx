import media_Republic1_webp from '../assets/img2/img/Republic1.webp';
import media_Republic2_webp from '../assets/img2/img/Republic2.webp';
import media_Republic3_webp from '../assets/img2/img/Republic3.webp';
import media_Republic4_webp from '../assets/img2/img/Republic4.webp';
import media_Republic5_webp from '../assets/img2/img/Republic5.webp';
import media_Republic6_webp from '../assets/img2/img/Republic6.webp';
import media_Republic7_mp4 from '../assets/img2/img/Republic7.mp4';
import media_kochi_thumbnail_webp from '../assets/img2/img/kochi thumbnail.webp';
import media_kochi2_webp from '../assets/img2/img/kochi2.webp';
import media_kochi5_webp from '../assets/img2/img/kochi5.webp';
import media_kochi6_webp from '../assets/img2/img/kochi6.webp';
import media_kochi8_webp from '../assets/img2/img/kochi8.webp';
import media_kochi9_webp from '../assets/img2/img/kochi9.webp';
import media_kochi10_webp from '../assets/img2/img/kochi10.webp';
import media_kochi11_webp from '../assets/img2/img/kochi11.webp';
import media_kochi13_webp from '../assets/img2/img/kochi13.webp';
import media_kochi15_webp from '../assets/img2/img/kochi15.webp';
import media_kochi17_webp from '../assets/img2/img/kochi17.webp';
import media_kochi18_webp from '../assets/img2/img/kochi18.webp';
import media_kochi20_webp from '../assets/img2/img/kochi20.webp';
import media_kochi21_webp from '../assets/img2/img/kochi21.webp';
import media_kochi22_webp from '../assets/img2/img/kochi22.webp';
import media_kochi24_webp from '../assets/img2/img/kochi24.webp';
import media_kochi25_webp from '../assets/img2/img/kochi25.webp';
import media_kochi27_webp from '../assets/img2/img/kochi27.webp';
import media_kochi28_webp from '../assets/img2/img/kochi28.webp';
import media_kochi29_webp from '../assets/img2/img/kochi29.webp';
import media_kochi30_webp from '../assets/img2/img/kochi30.webp';
import media_kochi31_webp from '../assets/img2/img/kochi31.webp';
import media_mumbai1_webp from '../assets/img2/img/mumbai1.webp';
import media_mumbai2_webp from '../assets/img2/img/mumbai2.webp';
import media_mumbai3_webp from '../assets/img2/img/mumbai3.webp';
import media_mumbai4_webp from '../assets/img2/img/mumbai4.webp';
import media_mumbai5_webp from '../assets/img2/img/mumbai5.webp';
import media_mumbai6_webp from '../assets/img2/img/mumbai6.webp';
import media_mumbai7_webp from '../assets/img2/img/mumbai7.webp';
import media_mumbai8_webp from '../assets/img2/img/mumbai8.webp';
import media_photo1_webp from '../assets/img2/img/photo1.webp';
import media_photo2_webp from '../assets/img2/img/photo2.webp';
import media_photo3_webp from '../assets/img2/img/photo3.webp';
import media_photo4_webp from '../assets/img2/img/photo4.webp';
import media_photo5_webp from '../assets/img2/img/photo5.webp';
import media_photo6_webp from '../assets/img2/img/photo6.webp';
import media_photo7_webp from '../assets/img2/img/photo7.webp';
import media_photo8_webp from '../assets/img2/img/photo8.webp';
import media_photo9_webp from '../assets/img2/img/photo9.webp';
import media_photo10_webp from '../assets/img2/img/photo10.webp';
import media_photo11_webp from '../assets/img2/img/photo11.webp';
import media_img11_webp from '../assets/img2/img/img11.webp';
import media_img12_webp from '../assets/img2/img/img12.webp';
import media_img13_webp from '../assets/img2/img/img13.webp';
import media_img14_webp from '../assets/img2/img/img14.webp';
import media_freeservicecamp1_webp from '../assets/img2/img/freeservicecamp1.webp';
import media_freeservicecapm2_webp from '../assets/img2/img/freeservicecapm2.webp';
import media_freeservicecamp3_webp from '../assets/img2/img/freeservicecamp3.webp';
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

    { id: 100, title: 'Republic Day', subtitle: 'Republic Day Celebration 2025', cover: media_Republic1_webp, images: [media_Republic1_webp, media_Republic2_webp, media_Republic3_webp, media_Republic4_webp, media_Republic5_webp, media_Republic6_webp, media_Republic7_mp4] },
    { id: 0, title: 'Kochi', subtitle: 'Mega Cable Fest 2025', cover: media_kochi_thumbnail_webp, images: [media_kochi2_webp, media_kochi5_webp, media_kochi6_webp, media_kochi8_webp, media_kochi9_webp, media_kochi10_webp, media_kochi11_webp, media_kochi13_webp, media_kochi15_webp, media_kochi17_webp, media_kochi18_webp, media_kochi20_webp, media_kochi21_webp, media_kochi22_webp, media_kochi24_webp, media_kochi25_webp, media_kochi27_webp, media_kochi28_webp, media_kochi29_webp, media_kochi30_webp, media_kochi31_webp] },
    { id: 1, title: 'Mumbai', subtitle: 'SCAT 2025', cover: media_mumbai1_webp, images: [media_mumbai1_webp, media_mumbai2_webp, media_mumbai3_webp, media_mumbai4_webp, media_mumbai5_webp, media_mumbai6_webp, media_mumbai7_webp, media_mumbai8_webp] },
    { id: 2, title: 'Kotdwar', subtitle: 'Annual Day Celebration', cover: media_photo1_webp, images: [media_photo1_webp, media_photo2_webp, media_photo3_webp, media_photo4_webp, media_photo5_webp, media_photo6_webp, media_photo7_webp, media_photo8_webp, media_photo9_webp, media_photo10_webp, media_photo11_webp] },
    { id: 3, title: 'Kolkata', subtitle: 'Cable TV Show India', cover: media_img11_webp, images: [media_img11_webp, media_img12_webp, media_img13_webp, media_img14_webp] },
    { id: 4, title: 'Kalyan', subtitle: 'Free Service Camp - Technical Support', cover: media_freeservicecamp1_webp, images: [media_freeservicecamp1_webp, media_freeservicecapm2_webp, media_freeservicecamp3_webp] }
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
