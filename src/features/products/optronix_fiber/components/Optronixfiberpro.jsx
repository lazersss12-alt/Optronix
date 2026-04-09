import React from 'react';
import './Optronixfiber.css';
import {Link} from 'react-router-dom';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

const Optronixfiberpro = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  // return (
  //   <div className='optronixfiber-page-fiber'>
  //       <div className='optronixfiber-page-pro-main-fiber'>
  //       <h1 className="optronixfiber-page-pro-name-fiber" >Optronix Fiber</h1>
  //       <p className="optronixfiber-page-pro-art-fiber" style={{textAlign: "justify"}}>Optronix Fiber Cable which is usually made of plastic or glass Used for data transmission using light pulses. Different types of Un-Armoured optical fiber cable are used for different applications, for example, long distance telecommunication, or providing a high-speed data connection between different parts of a building.
           
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

export default Optronixfiberpro; 