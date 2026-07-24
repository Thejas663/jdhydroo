export interface Project {
  slug: string;
  title: string;
  image: string;
  imageWebP: string;
  excerpt: string;
}

export const projects: Project[] = [
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
