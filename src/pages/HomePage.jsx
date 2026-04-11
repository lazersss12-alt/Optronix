import React, { Suspense, lazy } from 'react';

import LazySection from '../components/LazySection';
import Imageslider from '../components/ImageSlider';

const BrandSlider = lazy(() => import('../components/BrandSlider'));
const Educational = lazy(() => import('../components/Educational'));
const LandingBlogSlider = lazy(() => import('../components/LandingBlogSlider'));
const MaincomPro = lazy(() => import('../components/MaincomPro'));
const LandingAbout = lazy(() => import('../components/LandingAbout'));
const Executives = lazy(() => import('../components/Executives'));
const Testimonials = lazy(() => import('../components/Testimonials'));

const HomePage = () => {
  React.useEffect(() => {
    document.title = 'Optronix | Advanced Network Solutions & Optical Fiber Products';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    const description = 'Optronix is a leading provider of advanced network solutions, including GPON OLTs, high-performance optical fiber cables, and CATV equipment. Explore our innovative technology and carrier-grade products.';
    
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      metaDescription.content = description;
      document.head.appendChild(metaDescription);
    }
  }, []);

  return (
    <div>
      <Imageslider />

      <LazySection minHeight={240} rootMargin="400px">
        <Suspense fallback={<div style={{ minHeight: '240px' }} />}>
          <MaincomPro />
        </Suspense>
      </LazySection>

      <LazySection minHeight={140} rootMargin="400px">
        <Suspense fallback={<div style={{ minHeight: '140px' }} />}>
          <BrandSlider />
        </Suspense>
      </LazySection>

      <LazySection minHeight={240} rootMargin="400px">
        <Suspense fallback={<div style={{ minHeight: '240px' }} />}>
          <LandingAbout />
        </Suspense>
      </LazySection>

      <LazySection minHeight={240} rootMargin="400px">
        <Suspense fallback={<div style={{ minHeight: '240px' }} />}>
          <Executives />
        </Suspense>
      </LazySection>

      <LazySection minHeight={200} rootMargin="400px">
        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <Educational />
        </Suspense>
      </LazySection>

      <LazySection minHeight={200} rootMargin="400px">
        <Suspense fallback={<div style={{ minHeight: '200px' }} />}>
          <LandingBlogSlider />
        </Suspense>
      </LazySection>

      <LazySection minHeight={240} rootMargin="400px">
        <Suspense fallback={<div style={{ minHeight: '240px' }} />}>
          <Testimonials />
        </Suspense>
      </LazySection>
    </div>
  );
};

export default HomePage;
