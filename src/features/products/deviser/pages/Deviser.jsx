import { Helmet } from 'react-helmet-async';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';
import Deviserpro from "../components/deviserpro"
import Deviserproduct from "../components/Deviserproduct"

const Deviser = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  return (
    <div>
      <Helmet>
        <title> Deviser AE3100 OTDR, AE210 OPM & Test Tools | Optronix India</title>
        <meta name="description" content="Get the best deals on Deviser AE3100 Series OTDRs, AE210 Optical Power Meters, and LS310 Laser Sources. High-accuracy testing solutions for professional fiber optic network certification and troubleshooting." />
      </Helmet>
      <Deviserpro />
      <Deviserproduct />
    
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Deviser AE3100 OTDR, AE210 OPM & Test Tools"
      /></div>
  );
};

export default Deviser;
