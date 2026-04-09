import React, { useEffect } from 'react';
import './Sumitomo.css';
import sumitomologo from "../../../../assets/images/SUMITOMOupdated.png";
import sumitomoBanner from "../../../../assets/images/sumitomo-banner.jpeg";
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

function SumitomoPro() {
  useEffect(() => {
    const main = document.querySelector('.sumitomo-hero');
    setTimeout(() => main?.classList.add('visible'), 100);
  }, []);

  // return (
  //   <section className="sumitomo-page">
  //     <div
  //       className="sumitomo-hero"
  //       style={{ backgroundImage: `url(${sumitomoBanner})` }}
  //     >
  //       <div className="sumitomo-hero__overlay" />
  //       <div className="sumitomo-hero__content">
  //         <h1 className="sumitomo-page-pro-name">
  //           <img
  //             className="sumitomo-logo"
  //             src={sumitomologo}
  //             alt="Sumitomo Electric"
  //           />
  //         </h1>
  //         <p className="sumitomo-page-pro-art">
  //           Sumitomo Electric Group is a high-tech enterprise famous for the
  //           integration of the fusion Splicer's Sales and Services as a whole
  //           and specialized in providing advanced products.
  //         </p>
  //       </div>
  //     
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Optronix Product"
      /></div>
  //   </section>
  // );
}

export default SumitomoPro;