import { clients } from '../../data/clients';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { imageFallback } from '../../utils/imageFallback';

export default function ClientLogos() {
  return (
    <Section>
      <Container>
        <div className="overflow-hidden" aria-label="Our clients">
          <div
            className="flex gap-12 items-center"
            style={{
              animation: 'marquee 30s linear infinite',
              width: 'max-content',
            }}
          >
            {/* Duplicate for seamless marquee looping */}
            {[...clients, ...clients].map((client, i) => (
              <div key={i} className="shrink-0 h-16 flex items-center">
                <picture>
                  <source srcSet={client.logoWebP} type="image/webp" />
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    onError={imageFallback('https://placehold.co/120x50?text=Partner')}
                  />
                </picture>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
