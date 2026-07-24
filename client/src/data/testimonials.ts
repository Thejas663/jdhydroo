export interface Testimonial {
  quote: string;
  name: string;
  location: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'If you are looking for someone to help you out with your Hydro Power, I recommend Jaladhara to you and believe me, they will satisfy you to the most.',
    name: 'Balbir Sindhu',
    location: 'India',
    avatar: '/images/misc/user.png',
  },
  {
    quote:
      'Their guidance is awesome, support is awesome and I think they have the best researchers who has solution for every problems. The efficiency and maintenance is remarkable and I was too astonished to see execution of my every plan for my industry.',
    name: 'Amit Kumar',
    location: 'India',
    avatar: '/images/misc/user.png',
  },
];
