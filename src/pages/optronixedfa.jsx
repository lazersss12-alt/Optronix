import { Helmet } from 'react-helmet-async';

import Optronixedfaproduct from '../features/products/optronix_edfa/components/optronixedfaproduct';


const optronixedfa = () => {
  return (
    <div>
      <Helmet>
        <title>Optronix Modular PON EDFA with UPS & Dual Input | CATV Fiber Amplifiers</title>
        <meta name="description" content="Explore Optronix 1550nm EDFA series with 19.5dBm output per port. Includes dual power supply, UPS battery backup, and optical switch redundancy. Ideal for seamless CATV and GPON/EPON integration. Request a quote today." />
      </Helmet>

      <Optronixedfaproduct />

    </div>
  )
}

export default optronixedfa;