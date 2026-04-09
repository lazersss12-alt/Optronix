import { Helmet } from 'react-helmet-async';
import Optronixedfapro from '../components/optronixedfapro';
import Optronixedfaproduct from '../components/optronixedfaproduct';
import ProductLeadModal from '../../../../components/common/ProductLeadModal';


const optronixedfa = () => {
  const [enquireOpen, setEnquireOpen] = useState(false);
  return (
    <div>
      <Helmet>
        <title>Optronix Modular PON EDFA with UPS & Dual Input | CATV Fiber Amplifiers</title>
        <meta name="description" content="Explore Optronix 1550nm EDFA series with 19.5dBm output per port. Includes dual power supply, UPS battery backup, and optical switch redundancy. Ideal for seamless CATV and GPON/EPON integration. Request a quote today." />
      </Helmet>
      <Optronixedfapro />
      <Optronixedfaproduct />

    
      <ProductLeadModal
        isOpen={enquireOpen}
        onClose={() => setEnquireOpen(false)}
        pageName="Optronix Modular PON EDFA with UPS & Dual Input"
      /></div>
  )
}

export default optronixedfa;