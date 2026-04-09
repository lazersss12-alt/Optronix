// BranchGalleryPage.jsx
// Uploaded reference file (screenshot or assets): /mnt/data/108bf9e9-bfd5-4cdf-8142-7330ab8e49a0.png

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './Gallery.css';

function importImagesFromSrc() {
  try {
    // adjust the relative path if BranchGalleryPage.jsx sits in a different folder.
    // This assumes BranchGalleryPage.jsx is in the same folder as the `img/` folder
    // (e.g. src/components/BranchGalleryPage.jsx and src/components/img/*).
    const ctx = require.context('../components/img/', false, /\.(png|jpe?g|webp|svg|mp4|webm|ogg)$/);
    const map = {};
    ctx.keys().forEach((k) => {
      // k is like './branch0-1.jpg'
      const clean = k.replace('./', '');
      // some bundlers return module with .default
      map[clean] = ctx(k).default || ctx(k);
    });
    return map;
  } catch (err) {
    // require.context not available or folder missing - return empty map
    console.debug('importImagesFromSrc: require.context failed or img folder not present.', err);
    return {};
  }
}

export default function BranchGalleryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  // reading :id from route (supports routes like /branch-gallery/:id )
  const { id: routeId } = useParams(); // routeId is a string

  const branchFromState = location.state?.branch ?? null;
  const eventDataFromState = location.state?.eventData ?? null;

  // Attempt to resolve images that live in src/components/img
  const imagesMap = useMemo(() => importImagesFromSrc(), []);

  const [branch, setBranch] = useState(branchFromState);
  const [loading, setLoading] = useState(!branch);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // debug info
  useEffect(() => {
    console.log('BranchGalleryPage mount:', { routeId, branchFromState, hasEventDataState: !!eventDataFromState });
  }, []); // eslint-disable-line

  // Resolve branch data:
  // 1) prefer branchFromState
  // 2) if not provided, try to find branch in eventDataFromState
  // 3) fallback fetch public/data/branches.json
  useEffect(() => {
    let mounted = true;
    if (branch) {
      setLoading(false);
      return () => { mounted = false; };
    }

    // (2) try eventDataFromState
    if (eventDataFromState && routeId !== undefined) {
      const found =
        eventDataFromState.find((e) => String(e.id) === String(routeId)) ??
        eventDataFromState[Number(routeId)];
      if (found) {
        setBranch(found);
        setLoading(false);
        return () => { mounted = false; };
      }
    }

    // (3) fallback: load public/data/branches.json
    (async () => {
      try {
        const res = await fetch('/data/branches.json', { cache: 'no-cache' });
        if (!res.ok) {
          throw new Error(`No branches.json (status ${res.status})`);
        }
        const all = await res.json();
        if (!mounted) return;
        const found = all.find((e) => String(e.id) === String(routeId)) ?? all[Number(routeId)];
        if (found) {
          setBranch(found);
        } else {
          console.warn('Branch not found in branches.json for id:', routeId);
          // redirect to branch-gallery list (or branches) after short delay
          setTimeout(() => navigate('/branch-gallery', { replace: true }), 700);
        }
      } catch (err) {
        console.error('Failed to load branches.json fallback:', err);
        // redirect to branch-gallery list after short delay
        setTimeout(() => navigate('/branch-gallery', { replace: true }), 700);
      } finally {
        if (mounted) setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, [branch, eventDataFromState, routeId, navigate]);

  // Helper to resolve an image source string:
  // If the branch image path is a filename that exists in src/components/img (imagesMap),
  // return the resolved module URL. Otherwise return the original string (useful for
  // '/gallery/branch0/1.jpg' or public URLs).
  const resolveImageSrc = (p) => {
    if (!p) return p;
    // if the path is a plain filename (no leading /) and exists in imagesMap, use it
    const filename = p.replace(/^(\.\/|\/) +/, ''); // strip leading './' or '/' for lookup
    if (imagesMap[filename]) return imagesMap[filename];
    // if the provided path looks like './img/xxx' or 'img/xxx', also try to clean to filename
    const maybe = p.split('/').pop();
    if (imagesMap[maybe]) return imagesMap[maybe];
    // otherwise, return p unchanged (works for public/ absolute paths)
    return p;
  };

  // images (safe)
  // images (safe)
  const images = useMemo(() => {
    return Array.isArray(branch?.images) ? branch.images.map(resolveImageSrc) : [];
  }, [branch?.images, imagesMap]); // eslint-disable-line react-hooks/exhaustive-deps

  // Helper to check if source is video
  const isVideo = (src) => {
    if (!src) return false;
    // Simple check for extension
    // If it's a base64 or blob, we might rely on naming convention or MIME type if available.
    // Here we assume src string ends with extension.
    return /\.(mp4|webm|ogg)$/i.test(src);
  };

  // Lightbox controls (useCallback with proper deps)
  const openLightboxAt = useCallback((idx) => {
    if (!images.length) return;
    const safeIdx = Math.max(0, Math.min(idx, images.length - 1));
    setActiveIndex(safeIdx);
    setLightboxOpen(true);
  }, [images.length]);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);
  const prev = useCallback(() => setActiveIndex((i) => (images.length ? (i - 1 + images.length) % images.length : 0)), [images.length]);
  const next = useCallback(() => setActiveIndex((i) => (images.length ? (i + 1) % images.length : 0)), [images.length]);

  // keyboard nav for lightbox
  useEffect(() => {
    if (!lightboxOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxOpen, closeLightbox, prev, next]);

  // Debug: show resolved images and branch in console
  useEffect(() => {
    if (branch) {
      console.log('Resolved branch:', branch.title, 'images:', images);
    }
  }, [branch, images]);

  if (loading) {
    return (
      <div className="gp-empty">
        <div className="gp-empty__inner">
          <h2>Loading gallery…</h2>
        </div>
      </div>
    );
  }

  if (!branch) {
    return (
      <div className="gp-empty">
        <div className="gp-empty__inner">
          <h2>Branch data not found</h2>
          <p>Returning to branches...</p>
          <button onClick={() => navigate('/branch-gallery')}>Back to branch list</button>
        </div>
      </div>
    );
  }

  return (
    <main className="gp-container">
      <header className="gp-header breadcrumb-header">
        <nav className="breadcrumb">
          <span className="breadcrumb-item" onClick={() => navigate('/')}>Home</span>
          <span className="breadcrumb-sep">/</span>

          <span className="breadcrumb-item" onClick={() => navigate('/gallery')}>
            Gallery
          </span>
          <span className="breadcrumb-sep">/</span>

          <span className="breadcrumb-current">{branch.title}</span>
        </nav>

        <h1>{branch.title}</h1>
        <p className="muted">{branch.subtitle} · {branch.date}</p>
      </header>


      <section className="gp-grid gp-branch-grid">
        {images.map((src, idx) => (
          <button
            key={idx}
            className="gp-thumb"
            onClick={() => openLightboxAt(idx)}
            aria-label={`Open media ${idx + 1} of ${images.length} for ${branch.title}`}
          >
            {isVideo(src) ? (
              <video src={src} className="gp-thumb-video" preload="metadata" muted />
            ) : (
              <img src={src} alt={`${branch.title} ${idx + 1}`} loading="lazy" />
            )}
          </button>
        ))}
      </section>

      {lightboxOpen && images.length > 0 && (
        <div className="gp-lightbox" role="dialog" aria-modal="true">
          <div className="gp-lightbox__backdrop" onClick={closeLightbox} />
          <div className="gp-lightbox__content">
            <button className="gp-lightbox__close" onClick={closeLightbox} aria-label="Close">×</button>

            <div className="gp-lightbox__inner">
              <button className="gp-lightbox__nav gp-lightbox__nav--prev" onClick={prev} aria-label="Previous">‹</button>

              <div className="gp-lightbox__frame">
                {isVideo(images[activeIndex]) ? (
                  <video
                    src={images[activeIndex]}
                    controls
                    autoPlay
                    className="gp-lightbox-media"
                  />
                ) : (
                  <img src={images[activeIndex]} loading="lazy" alt={`${branch.title} large`} />
                )}
                <div className="gp-lightbox__meta">
                  <h3>{branch.title}</h3>
                  <p>{branch.subtitle} • {branch.date}</p>
                  <p className="gp-lightbox__count">{activeIndex + 1} of {images.length}</p>
                </div>
              </div>

              <button className="gp-lightbox__nav gp-lightbox__nav--next" onClick={next} aria-label="Next">›</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
