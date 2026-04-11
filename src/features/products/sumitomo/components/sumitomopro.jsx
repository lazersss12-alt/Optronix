import { mediaUrl } from '../../../../config/media';
import React, { useState, useEffect } from 'react';
import './Sumitomo.css';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

function SumitomoPro() {
  const [enquireOpen, setEnquireOpen] = useState(false);

  useEffect(() => {
    const main = document.querySelector('.sumitomo-hero');
    setTimeout(() => main?.classList.add('visible'), 100);
  }, []);

  return (
    <section className="sumitomo-page">
      <div
        className="sumitomo-hero"
        style={{ backgroundImage: `url(${mediaUrl.image("sumitomo-banner.webp")})` }}
      >
        <div className="sumitomo-hero__overlay" />
        <div className="sumitomo-hero__content">
          <h1 className="sumitomo-page-pro-name">
            <img
              className="sumitomo-logo"
              src={mediaUrl.image("SUMITOMOupdated.webp")}
              alt="Sumitomo Electric"
            />
          </h1>
          <p className="sumitomo-page-pro-art">
            Sumitomo Electric Group is a high-tech enterprise famous for the
            integration of the fusion Splicer's Sales and Services as a whole
            and specialized in providing advanced products.
          </p>
        </div>
      </div>
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Sumitomo Product"
      />
    </section>
  );
}

export default SumitomoPro;