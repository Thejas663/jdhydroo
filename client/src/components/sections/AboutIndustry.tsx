import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { advantages } from '../../data/advantages';
import { CheckCircle2 } from 'lucide-react';

export default function AboutIndustry() {
  const blockRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section>
      <Container>
        <div ref={blockRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div>
            <img
              src="/images/sections/image-1.webp"
              alt="Jaladhara engineering team at work"
              className="w-full h-auto rounded-sm shadow-md"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/600x450?text=About+Industry';
              }}
            />
          </div>

          {/* Right text + checklist */}
          <div>
            <SectionHeading
              eyebrow="We are Jaladhara"
              title="About Industry"
            />

            <ul className="space-y-3 mt-6">
              {advantages.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-primary"
                    aria-hidden
                  />
                  <span className="text-body text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Small brand logo mark */}
            <div className="mt-8">
              <img
                src="/images/branding/logo-small.webp"
                alt=""
                aria-hidden
                className="h-10 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/100x40?text=Logo';
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
