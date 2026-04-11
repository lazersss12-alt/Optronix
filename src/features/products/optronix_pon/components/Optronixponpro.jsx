import React, { useState } from 'react';
import './optronixpon.css';
import { Link } from 'react-router-dom';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';

const Optronixponpro = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  return (
    <div className="optronixpon-page">
      <div className="optronixpon-page-pro-main">
        <h1 className="optronixpon-page-pro-name">Optronix Devices</h1>
        <p className="optronixpon-page-pro-art" style={{ textAlign: 'justify' }}>
          Passive Optical Network (PON) is a telecommunications technology that implements a point-to-multipoint architecture, in which unpowered Fiber Optic Splitters are used to enable a single optical fiber to serve multiple end-points such as customers, without having to provision individual fibers between the hub and customer
        </p>
      </div>
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Optronix Product"
      />
    </div>
  );
};

export default Optronixponpro;