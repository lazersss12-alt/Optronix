import { Helmet } from 'react-helmet-async';
import Optronixfiberpro from '../components/optronixfiber/Optronixfiberpro';
import Optronixfiberproduct from '../components/optronixfiber/Optronixfiberproduct';

const Optronixfiber = () => {
  return (
    <div>
      <Helmet>
        <title>Optronix Fiber Optic Cables | Durable FTTx & Outdoor OFC</title>
        <meta name="description" content="Shop Optronix premium fiber cables designed for extreme conditions. Featuring UV-cured FRP strength members, moisture-blocking jelly, and PBT loose tubes. Available in 2F, 4F, 6F, 12F, and 24F configurations." />
      </Helmet>
      <Optronixfiberpro />
      <Optronixfiberproduct />

    </div>
  );
};

export default Optronixfiber;
