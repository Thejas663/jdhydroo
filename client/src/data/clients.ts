export interface Client {
  name: string;
  logo: string;
  logoWebP: string;
}

export const clients: Client[] = [
  { name: 'Client 1', logo: '/images/clients/thumb-5.jpg',   logoWebP: '/images/clients/thumb-5.webp' },
  { name: 'Client 2', logo: '/images/clients/thumb-4.jpg',   logoWebP: '/images/clients/thumb-4.webp' },
  { name: 'Client 3', logo: '/images/clients/thumb-3-1.jpg', logoWebP: '/images/clients/thumb-3-1.webp' },
  { name: 'Client 4', logo: '/images/clients/thumb-2-1.jpg', logoWebP: '/images/clients/thumb-2-1.webp' },
  { name: 'Client 5', logo: '/images/clients/thumb-1-1.jpg', logoWebP: '/images/clients/thumb-1-1.webp' },
];
