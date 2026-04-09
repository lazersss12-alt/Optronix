import { Helmet } from 'react-helmet-async';
import Deviserpro from "../components/deviser/deviserpro"
import Deviserproduct from "../components/deviser/Deviserproduct"

const Deviser = () => {
  return (
    <div>
      <Helmet>
        <title> Deviser AE3100 OTDR, AE210 OPM & Test Tools | Optronix India</title>
        <meta name="description" content="Get the best deals on Deviser AE3100 Series OTDRs, AE210 Optical Power Meters, and LS310 Laser Sources. High-accuracy testing solutions for professional fiber optic network certification and troubleshooting." />
      </Helmet>
      <Deviserpro />
      <Deviserproduct />
    </div>
  );
};

export default Deviser;
