import { useInView } from 'react-intersection-observer';
import CountUpImport from 'react-countup';
import type { Stat } from '../../data/stats';

// react-countup's CJS build isn't unwrapped consistently by Vite's bundler —
// the default import can resolve to the whole module object instead of the
// component itself (reproduces in both dev and the production build).
const CountUp =
  (CountUpImport as unknown as { default?: typeof CountUpImport }).default ??
  CountUpImport;

interface CounterProps {
  stat: Stat;
}

export function Counter({ stat }: CounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="text-center">
      <p
        className="font-mono font-semibold text-4xl text-teal-text leading-none mb-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {inView ? (
          <CountUp end={stat.end} duration={2} suffix={stat.suffix ?? ''} />
        ) : (
          <>0{stat.suffix}</>
        )}
      </p>
      <p className="text-sm font-semibold text-penstock uppercase tracking-wide">
        {stat.label}
      </p>
    </div>
  );
}
