import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/Scroolltop';
import Loading from './components/Loading';
import Contactheader from './components/contactheader';
import WhatsAppButton from './components/common/WhatsAppButton';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// Lazy loading pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const PublicationPage = React.lazy(() => import('./pages/PublicationPage'));
const Sumitomo = React.lazy(() => import("./pages/Sumitomo"));
const Deviser = React.lazy(() => import("./pages/Deviser"));
const Optronixfiber = React.lazy(() => import("./pages/Optronixfiber"));
const Optronixedfa = React.lazy(() => import("./pages/optronixedfa"));
const OptronixPON = React.lazy(() => import("./pages/OptronixPON"));
const SpecCATV = React.lazy(() => import("./pages/SpecCATV"));

const Sumitomoproductone = React.lazy(() => import("./pages/Sumitomoproductone"));
const Sumitomoproducttwo = React.lazy(() => import('./pages/Sumitomoproducttwo'));
const Sumitomoproductthree = React.lazy(() => import('./pages/Sumitomoproductthree'));
const Sumitomoproductfour = React.lazy(() => import('./pages/Sumitomoproductfour'));
const Sumitomoproductfive = React.lazy(() => import('./pages/Sumitomoproductfive'));
const Sumitomoproductsix = React.lazy(() => import('./pages/Sumitomoproductsix'));
const Sumitomoproductseven = React.lazy(() => import('./pages/Sumitomoproductseven'));
const Sumitomoproducteight = React.lazy(() => import('./pages/Sumitomoproducteight'));
const Sumitomoproductnine = React.lazy(() => import('./pages/Sumitomoproductnine'));
const Sumitomoproductten = React.lazy(() => import('./pages/Sumitomoproductten'));
const Sumitomoproducteleven = React.lazy(() => import('./pages/Sumitomoproducteleven'));
const Sumitomoproducttwelve = React.lazy(() => import('./pages/Sumitmoproducttwelve'));

const Deviserproductone = React.lazy(() => import('./components/deviser/Deviserproductone'));
const Deviserproducttwo = React.lazy(() => import('./components/deviser/Deviserproducttwo'));
const Deviserproductthree = React.lazy(() => import('./components/deviser/Deviserproductthree'));
const Deviserproductfour = React.lazy(() => import('./components/deviser/Deviserproductfour'));
const Deviserproductfive = React.lazy(() => import('./components/deviser/Deviserproductfive'));
const Deviserproductsix = React.lazy(() => import('./components/deviser/Deviserproductsix'));
const Deviserproductseven = React.lazy(() => import('./components/deviser/Devsierproductseven'));
const Deviserproducteight = React.lazy(() => import('./components/deviser/Deviserproducteight'));
const Deviserproductnine = React.lazy(() => import('./components/deviser/Deviserproductnine'));

const Optronixponproductone = React.lazy(() => import('./components/optronixpon/Optronixponproductone'));
const Optronixponproducttwo = React.lazy(() => import('./components/optronixpon/Optronixponproducttwo'));
const Optronixponproductthree = React.lazy(() => import('./components/optronixpon/Optronixponproductthree'));
const Optronixponproductfour = React.lazy(() => import('./components/optronixpon/Optronixponproductfour'));
const Optronixponproductfive = React.lazy(() => import('./components/optronixpon/Optronixponproductfive'));

const Optronixponproducteight = React.lazy(() => import('./components/optronixpon/Optronixponproducteight'));
const Optronixponproductnine = React.lazy(() => import('./components/optronixpon/Optronixponproductnine'));
const Optronixponproductten = React.lazy(() => import('./components/optronixpon/Optronixponproductten'));
const Optronixponproducteleven = React.lazy(() => import('./components/optronixpon/Optronixponproducteleven'));
const Optronixponproducttwelve = React.lazy(() => import('./components/optronixpon/Optronixponproducttwelve'));
const Optronixponproductthirteen = React.lazy(() => import('./components/optronixpon/Optronixponproductthirteen'));

const Optronixfiberproductone = React.lazy(() => import('./components/optronixfiber/Optronixfiberproductone'));
const Optronixfiberproducttwo = React.lazy(() => import('./components/optronixfiber/Optronixfiberproducttwo'));
const Optronixfiberproductthree = React.lazy(() => import('./components/optronixfiber/Optronixfiberproductthree'));
const Optronixfiberproductfour = React.lazy(() => import('./components/optronixfiber/Optronixfiberproductfour'));
const Optronixfiberproductfive = React.lazy(() => import('./components/optronixfiber/Optronixfiberproductfive'));

const Optronixfiberproductseven = React.lazy(() => import('./components/optronixfiber/Optronixfiberproductseven'));
const Optronixfiberproducteight = React.lazy(() => import('./components/optronixfiber/Optronixfiberproducteight'));
const Optronixfiberproductnine = React.lazy(() => import('./components/optronixfiber/Optronixfiberproductnine'));
const Optronixfiberproductten = React.lazy(() => import('./components/optronixfiber/Optronixfiberproductten'));
const Optronixfiberproducteleven = React.lazy(() => import('./components/optronixfiber/Optronixfiberproducteleven'));
const Optronixfiberproducttwelve = React.lazy(() => import('./components/optronixfiber/Optronixfiberproducttwelve'));
const Optronixfiberproductthirteen = React.lazy(() => import('./components/optronixfiber/Optronixfiberproductthirteen'));

const Optronixedfaproductone = React.lazy(() => import('./components/optronixedfa/Optronixedfaproductone'));
const Optronixedfaproducttwo = React.lazy(() => import('./components/optronixedfa/Optronixedfaproducttwo'));
const Optronixedfaproductthree = React.lazy(() => import('./components/optronixedfa/Optronixedfaproductthree'));
const Optronixedfaproductfour = React.lazy(() => import('./components/optronixedfa/Optronixedfaproductfour'));
const Optronixedfaproductfive = React.lazy(() => import('./components/optronixedfa/Optronixedfaproductfive'));
const Optronixedfaproductsix = React.lazy(() => import('./components/optronixedfa/Optronixedfaproductsix'));
const Optronixedfaproductseven = React.lazy(() => import('./components/optronixedfa/Optronixedfaproductseven'));
const Optronixedfaproducteight = React.lazy(() => import('./components/optronixedfa/Optronixedfaproducteight'));
const Optronixedfaproductnine = React.lazy(() => import('./components/optronixedfa/Optronixedfaproductnine'));
const Optronixedfaproductten = React.lazy(() => import('./components/optronixedfa/Optronixedfaproductten'));
const Optronixedfaproducteleven = React.lazy(() => import('./components/optronixedfa/Optronixedfaproducteleven'));
const Optronixedfaproducttwelve = React.lazy(() => import('./components/optronixedfa/Optronixedfaproducttwelve'));
const Optronixedfaproductthirteen = React.lazy(() => import('./components/optronixedfa/Optronixedfaproductthirteen'));
const Optronixedfaproductfourteen = React.lazy(() => import('./components/optronixedfa/Optronixedfaproductfourteen'));

const GalleryPage = React.lazy(() => import('./pages/Gallery'));
const BranchGalleryPage = React.lazy(() => import('./pages/BranchGalleryPage'));
const Partner = React.lazy(() => import('./components/partner'));
const Educationalpage = React.lazy(() => import('./components/educationalpage'));
const Landingabout = React.lazy(() => import('./components/LandingAbout'));
const Ofcpage = React.lazy(() => import('./components/ems/ofcpage'));
const TutorialsPage = React.lazy(() => import('./pages/TutorialsPage'));
const SurfaceMountingPage = React.lazy(() => import('./pages/SurfaceMountingPage'));
const SmtShowcase = React.lazy(() => import('./pages/SmtShowcase'));
const DistributorPage = React.lazy(() => import('./pages/DistributorPage/DistributorPage'));


function App() {
  return (
    <Router>
      <WhatsAppButton />
      <ScrollToTop />
      <Header />
      <Navbar />
      <main id="main-content">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contactheader" element={<Contactheader />} />
            <Route path="/publication" element={<PublicationPage />} />
            <Route path="/sumitomo" element={<Sumitomo />} />
            <Route path="/deviser" element={<Deviser />} />
            <Route path="/optronix-fiber" element={<Optronixfiber />} />
            <Route path="/optronix-pon" element={<OptronixPON />} />
            <Route path="/spec-catv" element={<SpecCATV />} />
            <Route path="/sumitomo/S1V" element={<Sumitomoproductone />} />
            <Route path="/sumitomo/S1VULTRA" element={<Sumitomoproducttwo />} />
            <Route path="/sumitomo/Z2C" element={<Sumitomoproductthree />} />
            <Route path="/sumitomo/W1C" element={<Sumitomoproductfour />} />
            <Route path="/sumitomo/82CPLUS" element={<Sumitomoproductfive />} />
            <Route path="/sumitomo/82M12" element={<Sumitomoproductsix />} />
            <Route path="/sumitomo/FC8R" element={<Sumitomoproductseven />} />
            <Route path="/sumitomo/S70" element={<Sumitomoproducteight />} />
            <Route path="/sumitomo/FC7LS" element={<Sumitomoproductnine />} />
            <Route path="/sumitomo/SFCS" element={<Sumitomoproductten />} />
            <Route path="/sumitomo/FC6S" element={<Sumitomoproducteleven />} />
            <Route path="/sumitomoproducttwelve" element={<Sumitomoproducttwelve />} />
            <Route path="/deviser/AE3100A" element={<Deviserproductone />} />
            <Route path="/deviser/AE1001" element={<Deviserproducttwo />} />
            <Route path="/deviser/AE3100DM" element={<Deviserproductthree />} />
            <Route path="/deviser/AE3100Live" element={<Deviserproductfour />} />
            <Route path="/deviser/AE210" element={<Deviserproductfive />} />
            <Route path="/deviser/EP310" element={<Deviserproductsix />} />
            <Route path="/deviser/LS310" element={<Deviserproductseven />} />
            <Route path="/deviser/EP710" element={<Deviserproducteight />} />
            <Route path="/deviser/VF10" element={<Deviserproductnine />} />

            <Route path="/optronix-pon/OP-100P16G" element={<Optronixponproductone />} />
            <Route path="/optronix-pon/OP100P8G" element={<Optronixponproducttwo />} />
            <Route path="/optronix-pon/OP100P8" element={<Optronixponproductfour />} />
            <Route path="/optronix-pon/OP100P4" element={<Optronixponproductfive />} />
            <Route path="/optronix-pon/OP100P4G" element={<Optronixponproductthree />} />

            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/optronix-pon/OP841GWVDGB" element={<Optronixponproducteight />} />
            <Route path="/optronix-pon/OP821GWVDGB" element={<Optronixponproductnine />} />
            <Route path="/optronix-pon/OP821GWVD" element={<Optronixponproductten />} />
            <Route path="/optronix-pon/OP821GWV" element={<Optronixponproducteleven />} />
            <Route path="/optronix-pon/OP801GW" element={<Optronixponproducttwelve />} />
            <Route path="/optronix-pon/OP101X" element={<Optronixponproductthirteen />} />
            <Route path="/optronix-pon/OP801GWV" element={<Optronixponproductthirteen />} />
            <Route path="/optronix-pon/OP101X" element={<Optronixponproductthirteen />} />
            <Route path="/optronix-fiber/optronix-flat-cable" element={<Optronixfiberproductone />} />
            <Route path="/optronix-fiber/optronix-drop-cable" element={<Optronixfiberproducttwo />} />
            <Route path="/optronix-fiber/optronix-neo" element={<Optronixfiberproductthree />} />
            <Route path="/optronix-fiber/optronix-gold" element={<Optronixfiberproductfour />} />
            <Route path="/optronix-fiber/optronix-platinum" element={<Optronixfiberproductfive />} />

            <Route path="/optronixfiberproductseven" element={<Optronixfiberproductseven />} />
            <Route path="/optronixfiberproducteight" element={<Optronixfiberproducteight />} />
            <Route path="/optronixfiberproductnine" element={<Optronixfiberproductnine />} />
            <Route path="/optronixfiberproductten" element={<Optronixfiberproductten />} />
            <Route path="/optronixfiberproducteleven" element={<Optronixfiberproducteleven />} />
            <Route path="/optronixfiberproducttwelve" element={<Optronixfiberproducttwelve />} />
            <Route path="/optronixfiberproductthirteen" element={<Optronixfiberproductthirteen />} />
            <Route path="/optronixedfa" element={<Optronixedfa />} />
            <Route path="/optronix-edfa/CE0416M" element={<Optronixedfaproductone />} />
            <Route path="/optronix-edfa/CE0419M" element={<Optronixedfaproducttwo />} />
            <Route path="/optronix-edfa/CE0819M" element={<Optronixedfaproductthree />} />
            <Route path="/optronix-edfa/CE1619M" element={<Optronixedfaproductfour />} />
            <Route path="/optronix-edfa/PE0819M" element={<Optronixedfaproductfive />} />
            <Route path="/optronix-edfa/PE1619M" element={<Optronixedfaproductsix />} />
            <Route path="/optronix-edfa/PE3219M" element={<Optronixedfaproductseven />} />
            <Route path="/optronix-edfa/PE0819M-OSW" element={<Optronixedfaproducteight />} />
            <Route path="/optronix-edfa/PE1619M-OSW" element={<Optronixedfaproductnine />} />
            <Route path="/optronix-edfa/PE3219M-OSW" element={<Optronixedfaproductten />} />
            <Route path="/optronix-edfa/CE0416M-OSW" element={<Optronixedfaproducteleven />} />
            <Route path="/optronix-edfa/CE0419M-OSW" element={<Optronixedfaproducttwelve />} />
            <Route path="/optronix-edfa/CE0819M-OSW" element={<Optronixedfaproductthirteen />} />
            <Route path="/optronix-edfa/CE1619M-OSW" element={<Optronixedfaproductfourteen />} />

            <Route path="/gallery/branch/:id" element={<BranchGalleryPage />} />

            <Route path="/partner" element={<Partner />} />
            <Route path="/educationalpage" element={<Educationalpage />} />
            <Route path="/landingabout" element={<Landingabout />} />
            <Route path='/ofcpage' element={<Ofcpage />} />
            <Route path="/mi" element={<SmtShowcase />} />
            <Route path="/surface-mounting" element={<SurfaceMountingPage />} />
            <Route path="/tutorials" element={<TutorialsPage />} />
            <Route path="/become-a-distributor" element={<DistributorPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

