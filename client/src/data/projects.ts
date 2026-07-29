import { z } from 'zod';

const projectSchema = z.object({
  slug: z.string(),
  title: z.string(),
  image: z.string(),
  imageWebP: z.string(),
  excerpt: z.string(),
  // Master Brief v2 §16 content-model fields — added in Phase 7. No real
  // project data exists yet (Brief §21 item 4); left optional so these
  // placeholder entries still validate until real case studies arrive.
  client: z.string().optional(),
  location: z.string().optional(),
  state: z.string().optional(),
  capacityMW: z.string().optional(),
  productType: z.string().optional(),
  year: z.number().optional(),
  sector: z.enum(['government', 'private']).optional(),
  gallery: z.array(z.string()).optional(),
});

export type Project = z.infer<typeof projectSchema>;

const rawProjects: Project[] = [
  {
    slug: 'power-generation',
    title: 'Power Generation',
    image: '/images/projects/power-generation.jpg',
    imageWebP: '/images/projects/power-generation.webp',
    excerpt:
      'Generating power is considered as creating the life force for an industry — and that is what we do best. We recently upgraded our power generation system to a whole new level.',
  },
  {
    slug: 'chemical-factory-unit',
    title: 'Chemical Factory Unit',
    image: '/images/projects/chemical-factory.jpg',
    imageWebP: '/images/projects/chemical-factory.webp',
    excerpt:
      'Expanding into the industrialisation sector, we have completed a new project in chemical processing, bringing our engineering expertise to one of the most demanding industrial environments.',
  },
];

export const projects: Project[] = z.array(projectSchema).parse(rawProjects);
