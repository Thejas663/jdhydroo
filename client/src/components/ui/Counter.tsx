import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import type { Stat } from '../../data/stats';

interface CounterProps {
  stat: Stat;
}

export function Counter({ stat }: CounterProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });

  return (
    <div ref={ref} className="text-center">
      <p
        className="font-display font-bold text-4xl text-primary leading-none mb-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {inView ? (
          <CountUp end={stat.end} duration={2} suffix={stat.suffix ?? ''} />
        ) : (
          <>0{stat.suffix}</>
        )}
      </p>
      <p className="text-sm font-semibold text-heading uppercase tracking-wide">
        {stat.label}
      </p>
    </div>
  );
}
