export interface Stat {
  end: number;
  suffix?: string;
  label: string;
}

export const stats: Stat[] = [
  { end: 10, suffix: '+', label: 'Years Experience' },
  { end: 150,             label: 'Power Houses Served' },
  { end: 250,             label: 'Services Provided' },
];
