import type { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  image?: string;
  title: string;
  description?: string;
  link?: string;
  linkText?: string;
  children?: ReactNode;
  className?: string;
}

export function Card({
  image,
  title,
  description,
  link,
  linkText = 'Read More →',
  children,
  className,
}: CardProps) {
  return (
    <article
      className={clsx(
        'group bg-white border border-border rounded-sm overflow-hidden transition-all duration-300',
        'hover:translate-y-[-6px] hover:shadow-lg',
        className
      )}
    >
      {image && (
        <div className="overflow-hidden aspect-video relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-display font-semibold text-xl text-penstock mb-2 group-hover:text-teal-text transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-steel text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}
        {children}
        {link && (
          <a
            href={link}
            className="inline-flex items-center text-sm font-semibold text-teal-text hover:text-teal-hover transition-colors mt-2"
          >
            {linkText}
          </a>
        )}
      </div>
    </article>
  );
}
