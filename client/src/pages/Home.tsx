import { Helmet } from 'react-helmet-async';
import HeroSlider from '../components/sections/HeroSlider';
import Advantages from '../components/sections/Advantages';
import ProductsGrid from '../components/sections/ProductsGrid';
import AboutIndustry from '../components/sections/AboutIndustry';
import ProjectsCarousel from '../components/sections/ProjectsCarousel';
import ClientLogos from '../components/sections/ClientLogos';
import Testimonials from '../components/sections/Testimonials';
import CtaBand from '../components/sections/CtaBand';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Jaladhara Hydro Solutions — Hydro Power, Water to Wire</title>
        <meta
          name="description"
          content="Design, manufacture, supply, installation and maintenance for hydro power plants across India. Pelton, Francis, Kaplan turbines and valves."
        />
      </Helmet>

      {/* §4.1 — Hero Slider */}
      <HeroSlider />

      {/* §4.2 — Advantages + counters */}
      <Advantages />

      {/* §4.3 — 4-card products preview */}
      <ProductsGrid />

      {/* §4.4 — About Industry checklist */}
      <AboutIndustry />

      {/* §4.5 — Recent Projects carousel */}
      <ProjectsCarousel />

      {/* §4.6 — Client logo marquee */}
      <ClientLogos />

      {/* §4.7 — Testimonials */}
      <Testimonials />

      {/* §4.8 — CTA band */}
      <CtaBand />
    </>
  );
}
