import { Helmet } from 'react-helmet-async';

import Sumitomoproduct from "../features/products/sumitomo/components/Sumitomoproduct";


const Sumitomo = () => {
  return (
    <div >
      <Helmet>
        <title>Sumitomo Z2C, 82C+ & W1C Fusion Splicing Machines | Optronix India</title>
        <meta name="description" content="Shop genuine Sumitomo fiber optic tools including Z2C Core Alignment Splicers, 82M12 Ribbon Splicers, and FC-8R Cleavers. High-speed, AI-programmed splicing solutions for FTTH and backbone networks. Enquire now for best prices." />
      </Helmet>

      <Sumitomoproduct />

    </div>
  );
};

export default Sumitomo;
