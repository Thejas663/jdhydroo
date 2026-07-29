import { useParams, Navigate } from 'react-router-dom';

/**
 * Maps old /services/<slug> URLs to their future /products/<slug> homes,
 * per context/master_brief_v2.md §6.3. NOT mounted as a live route yet —
 * /products/pelton-turbine etc. don't exist as real pages until Phase 10
 * restructures Products, so redirecting there now would just 404. Wire this
 * into App.tsx in place of the current `services/:slug` → ProductDetail
 * route once Phase 10 ships real targets for every mapped path.
 *
 * A React-Router-level redirect alone returns 200 + client-side navigation,
 * not a true 301 — real SEO-equity transfer needs a hosting-layer 301 too,
 * planned for Phase 13 once hosting is chosen.
 */
const LEGACY_SLUG_MAP: Record<string, string> = {
  'pelton-turbine': '/products/pelton-turbine',
  'francis-turbine': '/products/francis-turbine',
  'kaplan-turbine': '/products/kaplan-turbine',
  valve: '/products/valves/butterfly-spherical', // confirm this is the right split — see brief §6.3
  'slide-valve': '/products/valves/slide-valve',
  'needle-valve': '/products/valves/needle-valve',
  'aerating-valve': '/products/valves/aerating-valve',
};

export default function LegacyServiceRedirect() {
  const { slug } = useParams<{ slug: string }>();
  const target = slug ? LEGACY_SLUG_MAP[slug] : undefined;
  return <Navigate to={target ?? '/products'} replace />;
}
