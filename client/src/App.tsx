import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import { site } from './data/site';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const ProductsValves = lazy(() => import('./pages/ProductsValves'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const Terms = lazy(() => import('./pages/Terms'));
const AccessibilityStatement = lazy(() => import('./pages/AccessibilityStatement'));
const NotFound = lazy(() => import('./pages/NotFound'));
// Not yet mounted — see components/routing/LegacyServiceRedirect.tsx for why.

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LocalBusiness'],
  name: site.legalName,
  url: 'https://www.jdhydro.com',
  logo: 'https://www.jdhydro.com/images/branding/logo.png',
  email: site.email,
  telephone: site.phones,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Office No. BH-1104 & 1105, 81 Business Hub Sector-81',
    addressLocality: 'Greater Faridabad',
    addressRegion: 'Haryana',
    postalCode: site.address.pin,
    addressCountry: 'IN',
  },
  description:
    'Design, manufacture, supply, installation and maintenance for hydro power plants across India.',
  sameAs: site.socials.map((s) => s.href),
};

export default function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
      </Helmet>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Products />} />
            <Route path="products/valves" element={<ProductsValves />} />
            <Route path="services/:slug" element={<ProductDetail />} />
            <Route path="services" element={<Services />} />
            <Route path="projects" element={<Projects />} />
            <Route path="certifications" element={<Certifications />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="accessibility-statement" element={<AccessibilityStatement />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
