import type { ReactNode } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface RevealCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function RevealCard({ children, delay = 0, className }: RevealCardProps) {
  const ref = useScrollReveal<HTMLDivElement>({ delay });
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
