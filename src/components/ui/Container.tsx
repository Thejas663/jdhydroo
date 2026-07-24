import type { ReactNode } from 'react';
import { clsx } from 'clsx';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={clsx(
        'mx-auto w-full px-[15px] max-w-container',
        className
      )}
    >
      {children}
    </div>
  );
}
