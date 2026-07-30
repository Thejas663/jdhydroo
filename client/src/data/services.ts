import { z } from 'zod';

const serviceSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  benefits: z.array(z.string()).optional(),
  order: z.number(),
});

export type Service = z.infer<typeof serviceSchema>;

// Sourced from context/company_profile.md (real content, supplied 2026-07-30).
const rawServices: Service[] = [
  {
    slug: 'water-to-wire-solutions',
    title: 'Water-to-Wire Solutions',
    description: 'Complete water-to-wire solutions for hydro power plants up to 15 MW.',
    order: 1,
  },
  {
    slug: 'erection-commissioning',
    title: 'Erection & Commissioning',
    description:
      'Erection and commissioning of electro-mechanical components is one of the most critical steps in executing a hydro power project — covering coordinated alignment of major parts, static and dynamic balancing, and error-free operation of turbine-generator units. We bring years of expertise erecting and commissioning Kaplan, Francis, and Pelton turbines from 10 kW to 15 MW, in both horizontal and vertical configurations, along with complete electrical switchyard works. Work is carried out under the close guidance of experienced project managers, who coordinate with client-side engineers and technicians to maintain high standards of quality, at hydro project sites across even the toughest terrains, in India and overseas.',
    order: 2,
  },
  {
    slug: 'operation-maintenance',
    title: 'Operation & Maintenance (O&M)',
    description:
      'We undertake operation & maintenance and Annual Maintenance Contracts (AMCs) for hydro power projects across India, using adequate measures and advanced technologies to ensure better plant productivity and efficiency — aimed at fewer breakdowns, quick repair and troubleshooting, and reduced spare parts requirements, while adhering to set standards and timely replacement of worn-out or outdated parts.',
    benefits: [
      'Higher reliability of plant & machinery',
      'Minimum shutdowns / breakdowns',
      'Extended plant life',
      'Lesser spare requirement',
      'Higher profitability',
      'Greater return on investment',
    ],
    order: 3,
  },
  {
    slug: 'renovation-modernisation',
    title: 'Renovation & Modernisation',
    description: 'Renovation and modernisation services for hydro power plants up to 250 MW.',
    order: 4,
  },
  {
    slug: 'special-products-spare-parts',
    title: 'Special Products / Spare Parts',
    description:
      'Timely access to spare parts is critical to avoiding costly, prolonged shutdowns. We supply spare parts for Axial, Francis, and Pelton turbines, with an emphasis on timely delivery to minimize downtime and keep hydro units running smoothly.',
    benefits: [
      'Genuine products',
      'On-time delivery',
      'Cost-effectiveness',
      'One source for all spares',
      'Installation support',
      'Extended warranties',
    ],
    order: 5,
  },
  {
    slug: 'engineering-solutions',
    title: 'Engineering Solutions',
    description: 'Engineering and consultancy solutions for hydro power clients.',
    order: 6,
  },
];

export const services: Service[] = z.array(serviceSchema).parse(rawServices);
