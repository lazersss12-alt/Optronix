import { Helmet } from 'react-helmet-async';

import Optronixponproduct from '../features/products/optronix_pon/components/Optronixponproduct';

const OptronixPON = () => {
  return (
    <div>
      <Helmet>
        <title>Optronix Layer 3 OLTs & High-Speed XPON ONTs | FTTH Infrastructure</title>
        <meta name="description" content=" Scale your network with Optronix Layer 3 GPON & EPON OLTs featuring 10GE uplinks and high splitting ratios. Explore our XPON ONU range with WiFi 5/6, VoIP, and advanced security. Carrier-class reliability for FTTx." />
      </Helmet>

      <Optronixponproduct />

    </div>
  )
}

export default OptronixPON;