export interface Slide {
  image: string;
  imageWebP: string;
  alt: string;
  heading: string;
  body: string;
  ctas: { label: string; to: string; variant: 'solid' | 'outline' }[];
  loading: 'eager' | 'lazy';
  fetchpriority: 'high' | 'auto';
}

export const slides: Slide[] = [
  {
    image: '/images/hero/slide-1.jpg',
    imageWebP: '/images/hero/slide-1.webp',
    alt: 'Hydro dam — Jaladhara Hydro Solutions',
    heading: 'Hydro Power, Water to Wire',
    body: 'Design, manufacture, supply, installation and maintenance for hydro power plants across India.',
    ctas: [
      { label: 'Our Products', to: '/products', variant: 'solid' },
      { label: 'Contact Us', to: '/contact', variant: 'outline' },
    ],
    loading: 'eager',
    fetchpriority: 'high',
  },
  {
    image: '/images/hero/slide-2.jpg',
    imageWebP: '/images/hero/slide-2.webp',
    alt: 'Turbine installation — Jaladhara Hydro Solutions',
    heading: 'Turbines Built for Your Site',
    body: 'Pelton, Francis and Kaplan turbines engineered to your head and flow conditions.',
    ctas: [
      { label: 'View Turbines', to: '/products', variant: 'solid' },
    ],
    loading: 'lazy',
    fetchpriority: 'auto',
  },
  {
    image: '/images/hero/slide-3.jpg',
    imageWebP: '/images/hero/slide-3.webp',
    alt: 'Industrial plant — Jaladhara Hydro Solutions',
    heading: 'Valves and Full Plant Service',
    body: 'Butterfly, spherical, slide and needle valves, plus O&M for the whole power plant.',
    ctas: [
      { label: 'View Valves', to: '/services/valve', variant: 'solid' },
    ],
    loading: 'lazy',
    fetchpriority: 'auto',
  },
];
