import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type BaseProps = {
  variant?: 'solid' | 'outline';
  children: ReactNode;
  className?: string;
};

type ButtonAsButtonProps = BaseProps & {
  as?: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonAsAnchorProps = BaseProps & {
  as: 'a';
  href: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = ButtonAsButtonProps | ButtonAsAnchorProps;

const baseClass = [
  'inline-flex items-center justify-center gap-2',
  'px-7 py-3 font-display font-semibold tracking-wide text-[14px] uppercase',
  'transition-all duration-300 cursor-pointer',
  'rounded-sm border-2',
].join(' ');

const variants = {
  // Text stays the dark heading colour in every state — white/amber text on
  // amber background fails WCAG AA (~2:1); heading-on-amber passes at 7.7:1.
  solid: 'bg-primary text-heading border-primary hover:bg-primary-h hover:border-primary-h',
  outline: 'bg-transparent text-heading border-heading hover:bg-primary hover:border-primary',
};

export function Button(props: ButtonProps) {
  const { variant = 'solid', children, className, as = 'button', ...rest } = props;
  const classes = clsx(baseClass, variants[variant], className);

  if (as === 'a') {
    const { href, ...anchorRest } = rest as ButtonAsAnchorProps;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
