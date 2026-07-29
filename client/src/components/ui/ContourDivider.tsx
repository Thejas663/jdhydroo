interface ContourDividerProps {
  /** light = --color-contour (for use on light backgrounds), dark = --color-teal-on-dark (for use on dark/photo backgrounds) */
  tone?: 'light' | 'dark';
  className?: string;
}

/**
 * The site's one signature visual motif (Master Brief v2 §5) — a thin
 * topographic contour line, the same visual language as a real hydro
 * site-survey elevation map. Used sparingly: once in the Hero, once as a
 * transition between two homepage sections. Not a repeating pattern —
 * everything else on the page stays quiet by design.
 */
export function ContourDivider({ tone = 'light', className }: ContourDividerProps) {
  const stroke = tone === 'dark' ? 'var(--color-teal-on-dark)' : 'var(--color-contour)';
  return (
    <svg
      viewBox="0 0 780 22"
      preserveAspectRatio="none"
      className={className}
      role="presentation"
      aria-hidden="true"
      style={{ width: '100%', height: '22px', display: 'block' }}
    >
      <path
        d="M0,11 C 60,2 120,20 180,11 C 240,2 300,20 360,11 C 420,2 480,20 540,11 C 600,2 660,20 720,11 C 750,7 765,15 780,11"
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
      />
    </svg>
  );
}
