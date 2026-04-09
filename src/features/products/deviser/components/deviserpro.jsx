import React from 'react';
import { Link } from 'react-router-dom';
import deviserlogo from "../../../../assets/images/deviser.png";
import './deviser.css';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

function deviserpro() {
  // return (
  //   <div className='deviser-page'>
  //       <div className='deviser-page-pro-main'>
  //       <h1 className="deviser-page-pro-name" ><img src={deviserlogo} alt="" className='deviser-logo'  /></h1>
  //       <p className="deviser-page-pro-art"  style={{textAlign: "justify"}}>Deviser has been a trusted provider of test equipment to large communication service providers, offering a complete test solution for cable, wireless, fiber optics and telecommunications networks.
            
  //       </p>
  //       </div>
  //   
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Optronix Product"
      /></div>
  // )
}

export default deviserpro;