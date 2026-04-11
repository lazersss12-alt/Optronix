import { Helmet } from 'react-helmet-async';

import Deviserproduct from "../features/products/deviser/components/Deviserproduct";

const Deviser = () => {
  return (
    <div>
      <Helmet>
        <title> Deviser AE3100 OTDR, AE210 OPM & Test Tools | Optronix India</title>
        <meta name="description" content="Get the best deals on Deviser AE3100 Series OTDRs, AE210 Optical Power Meters, and LS310 Laser Sources. High-accuracy testing solutions for professional fiber optic network certification and troubleshooting." />
      </Helmet>

      <Deviserproduct />
    </div>
  );
};

export default Deviser;
