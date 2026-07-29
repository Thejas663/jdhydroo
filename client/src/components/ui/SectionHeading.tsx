import { clsx } from 'clsx';

interface SectionHeadingProps {
  eyebrow?: string;  // "We are Jaladhara"
  title: string;
  body?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow = 'We are Jaladhara',
  title,
  body,
  center,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx('mb-10', center && 'text-center mx-auto', className)}>
      {eyebrow && (
        <span
          className="block text-sm font-semibold text-teal-text uppercase tracking-widest mb-2"
        >
          {eyebrow}
        </span>
      )}
      <h2 className="font-display font-bold text-penstock text-3xl md:text-4xl leading-tight">
        {title}
      </h2>
      {body && (
        <p className={clsx('mt-4 text-steel leading-relaxed max-w-2xl', center && 'mx-auto')}>
          {body}
        </p>
      )}
    </div>
  );
}
