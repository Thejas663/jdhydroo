import type { ReactNode } from 'react';
import { clsx } from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  alt?: boolean;   // true = --color-spillway background
  style?: React.CSSProperties;
}

export function Section({ children, className, alt, style }: SectionProps) {
  return (
    <section
      style={{
        paddingTop: 'var(--section-y)',
        paddingBottom: 'var(--section-y)',
        backgroundColor: alt ? 'var(--color-spillway)' : 'var(--color-surface)',
        ...style,
      }}
      className={clsx('w-full', className)}
    >
      {children}
    </section>
  );
}
