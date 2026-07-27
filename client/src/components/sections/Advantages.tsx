import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Counter } from '../ui/Counter';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { imageFallback } from '../../utils/imageFallback';
import { stats } from '../../data/stats';
import { site } from '../../data/site';

export default function Advantages() {
  const blockRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section>
      <Container>
        <div ref={blockRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — text + counters */}
          <div>
            <SectionHeading
              eyebrow="We are Jaladhara"
              title="Advantages"
              body={site.blurb}
            />

            {/* Counter row — only render if all values are non-zero */}
            {stats.every((s) => s.end > 0) && (
              <div className="grid grid-cols-3 gap-6 mt-10">
                {stats.map((stat) => (
                  <Counter key={stat.label} stat={stat} />
                ))}
              </div>
            )}
          </div>

          {/* Right — turbine image */}
          <div className="relative">
            <img
              src="/images/sections/turbine.webp"
              alt="Hydro turbine — Jaladhara Hydro Solutions"
              className="w-full h-auto rounded-sm shadow-md"
              loading="lazy"
              onError={imageFallback('https://placehold.co/600x400?text=Turbine+Image')}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
