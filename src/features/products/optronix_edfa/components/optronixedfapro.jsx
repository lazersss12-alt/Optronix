import React from 'react';
import './optronixedfa.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

const optronixedfapro = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  // return (
  //   <div className='deviser-page'>
  //       <div className='deviser-page-pro-main'>
  //       <h1 className='deviser-page-pro-name' >Optronix EDFA</h1>
  //       <p className='deviser-page-pro-art' style={{textAlign:"justify"}}>Erbium-Doped Fiber Amplifiers (EDFAs) amplify weak signals in optical communication systems, providing high gain and low noise for WDM networks. Advanced Erbium-Ytterbium Co-Doped Fiber Amplifiers (EYDFAs) improve gain and efficiency with a dual-stage configuration, achieving 56 dB gain at 1536 nm. The design minimizes ASE and optimizes pump power with 1-meter and 3-meter EYDF stages. Ytterbium ions enhance amplification, making EYDFAs ideal for long-haul transmission, free-space optics, and LIDAR applications.
            
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

export default optronixedfapro;




