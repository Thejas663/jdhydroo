export interface NavItem {
  label: string;
  to: string;
  children?: NavItem[];
}

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About us', to: '/about' },
  {
    label: 'Products',
    to: '/products',
    children: [
      { label: 'Aerating Valve',  to: '/services/aerating-valve' },
      { label: 'Pelton Turbine',  to: '/services/pelton-turbine' },
      { label: 'Kaplan Turbine',  to: '/services/kaplan-turbine' },
      { label: 'Valve',           to: '/services/valve' },
      { label: 'Slide Valve',     to: '/services/slide-valve' },
      { label: 'Francis Turbine', to: '/services/francis-turbine' },
      { label: 'Needle Valve',    to: '/services/needle-valve' },
    ],
  },
  { label: 'Contact', to: '/contact' },
];
