import media_sumitomo_banner_webp from '../../assets/img2/img/sumitomo-banner.webp';
import media_SUMITOMOupdated_webp from '../../assets/img2/img/SUMITOMOupdated.webp';
import React, { useEffect } from 'react';
import './Sumitomo.css';
function SumitomoPro() {
  useEffect(() => {
    const main = document.querySelector('.sumitomo-hero');
    setTimeout(() => main?.classList.add('visible'), 100);
  }, []);

  // return (
  //   <section className="sumitomo-page">
  //     <div
  //       className="sumitomo-hero"
  //       style={{ backgroundImage: `url(${media_sumitomo_banner_webp})` }}
  //     >
  //       <div className="sumitomo-hero__overlay" />
  //       <div className="sumitomo-hero__content">
  //         <h1 className="sumitomo-page-pro-name">
  //           <img
  //             className="sumitomo-logo"
  //             src={media_SUMITOMOupdated_webp}
  //             alt="Sumitomo Electric"
  //           />
  //         </h1>
  //         <p className="sumitomo-page-pro-art">
  //           Sumitomo Electric Group is a high-tech enterprise famous for the
  //           integration of the fusion Splicer's Sales and Services as a whole
  //           and specialized in providing advanced products.
  //         </p>
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default SumitomoPro;