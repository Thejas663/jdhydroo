export interface SpecGroup {
  heading?: string;
  intro?: string;
  specs: string[];
}

export interface Product {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  intro: string;
  groups: SpecGroup[];
}

export const products: Product[] = [
  {
    slug: 'aerating-valve',
    title: 'Aerating Valve',
    image: '/images/products/aerating-valve.webp',
    excerpt:
      'Air valves, type AV, for aeration and deaeration of water pipelines, preventing negative pressure disturbances in pipeline operation.',
    intro:
      'Air valves, type AV, are used for aeration and deaeration of water pipelines. The requirement of aeration of pipelines arises when, as a result of certain working conditions, negative pressure has been created in the line. This negative pressure can cause disturbances in the operation. During deaeration of pipelines atmospheric air which has been released at high points of the system is expelled.',
    groups: [
      {
        specs: [
          'High performance deaeration',
          'Automatic aeration at vacuum pressure conditions',
          'Robust build and long operational lifetime',
        ],
      },
    ],
  },
  {
    slug: 'pelton-turbine',
    title: 'Pelton Turbine',
    image: '/images/products/pelton-turbine.webp',
    excerpt:
      'An impulse turbine for applications with high head and small flows, converting water pressure into kinetic energy via high-speed jets.',
    intro:
      'Pelton Turbine is an impulse turbine used primarily for applications with high head and small flows. Pelton Turbine is a Tangential flow impulse turbine in which the pressure energy of water is converted into kinetic energy to form high speed water jet and this jet strikes the wheel tangentially to make it rotate.',
    groups: [
      {
        specs: [
          'Heads up to 1,000 Meters',
          'Horizontal axis (1 to 3 jets)',
          'Vertical axis (2 to 6 jets)',
          'Fully Forged or Cast runner',
          'Runner mounted on extended shaft of the generator',
          'Full unit assembled in factory and shop tested',
          'Internal or external servomotor options',
          'Simple interface with Civil works',
        ],
      },
    ],
  },
  {
    slug: 'kaplan-turbine',
    title: 'Kaplan Turbine',
    image: '/images/products/kaplan-turbine.webp',
    excerpt:
      'A reaction turbine for applications with low head and large flows, guaranteeing the highest operating efficiency and reliability.',
    intro:
      'Kaplan Turbine is a reaction turbine used primarily for applications with low head and large flows. These Kaplan turbines guarantee the highest operating efficiency and reliability.',
    groups: [
      {
        specs: [
          'Heads up to 70 Meters',
          'Runners with 3 to 8 blades',
          'Double or Single regulated',
          'With or without Gearbox',
          'Steel, Concrete Spiral or Syphon Intake',
          'Oil free runner hubs',
          'Internal or external Servomotor option',
          'Maintenance free water-lubricated guide bearing',
          'Blade dismantling without runner removal',
        ],
      },
    ],
  },
  {
    slug: 'valve',
    title: 'Valve',
    image: '/images/products/valve.webp',
    excerpt:
      'Butterfly and spherical valves designed to international standards, available in a wide range of sizes and actuation options.',
    intro:
      'We design valves according to international standards, machine welded, on request and in accordance with customer requirements.',
    groups: [
      {
        heading: 'Butterfly Valve (BFV)',
        intro:
          'We design Butterfly valves according to international standards, machine welded, on request and in accordance with customer requirements.',
        specs: [
          'Pressure: PN6, PN10, PN16, PN25. Up to DN 3500',
          'Actuator: Hydraulic servomotor and closing by counterweight',
          'Actuator: Electromechanical actuator',
          'Actuator: Manual actuator driven by wheel',
        ],
      },
      {
        heading: 'Spherical Valve',
        intro:
          'We design Spherical valves according to international standards, machine welded, on request and in accordance with customer requirements.',
        specs: [
          'Range of diameters ranging from 300mm to 2000mm',
          'Range of design pressures from 25 bar to 120 bar',
          'Soft or metallic seals',
        ],
      },
    ],
  },
  {
    slug: 'francis-turbine',
    title: 'Francis Turbine',
    image: '/images/products/francis-turbine.webp',
    excerpt:
      'A reaction turbine combining radial and axial flow, widely used in hydroelectric plants worldwide.',
    intro:
      'Francis Turbine is a reaction turbine which combines radial and axial flow. They are widely used in modern hydroelectric plants.',
    groups: [
      {
        specs: [
          'Heads up to 400 Meters',
          'High operating efficiency at full load',
          'Suitable for medium head projects',
        ],
      },
    ],
  },
  {
    slug: 'slide-valve',
    title: 'Slide Valve',
    image: '/images/products/slide-valve.webp',
    excerpt:
      'Robust valves designed for isolating flows under various system conditions, featuring high operational reliability.',
    intro:
      'We supply slide valves designed for reliable operation and isolating flows under high working pressure.',
    groups: [
      {
        specs: [
          'Compact face-to-face dimensions',
          'Minimal pressure loss in fully open state',
          'Reliable sealing mechanism',
        ],
      },
    ],
  },
  {
    slug: 'needle-valve',
    title: 'Needle Valve',
    image: '/images/products/needle-valve.webp',
    excerpt:
      'Used primarily for bypass line applications, operated by hydraulic oil with full open/closed position sensing.',
    intro:
      'Needle Valve is mainly used for Bypass line application. It is operated by means of hydraulic oil. Switches are provided to sense fully Open and closed condition.',
    groups: [
      {
        specs: [
          '100% tightness',
          'High pressure ratings available – up to 160 bar',
          'Compact style and low weight',
          'Metallic, very long-life main seal',
          'Easy to operate (manually and electrically)',
          'Self-closing tendency',
          'Positive sealing system due to the internal water pressure',
          'Metal to metal Sealing System',
        ],
      },
    ],
  },
];
