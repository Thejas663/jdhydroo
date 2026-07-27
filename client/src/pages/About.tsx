import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Counter } from '../components/ui/Counter';
import { site } from '../data/site';
import { stats } from '../data/stats';
import { missionBlocks, aboutIntro } from '../data/about';

function withPlaceholderFallback(label: string) {
  return (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = `https://placehold.co/800x600?text=${encodeURIComponent(label)}`;
  };
}

export default function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const lightboxImages = [
    { src: '/images/sections/turbine.webp', alt: 'Hydro turbine' },
    ...missionBlocks.map((b) => ({ src: b.image, alt: b.heading })),
  ];

  const openLightbox = (i: number) => {
    setLightboxIndex(i);
    setLightboxOpen(true);
  };

  const showStats = stats.every((s) => s.end > 0);

  return (
    <>
      <Helmet>
        <title>About us – Jaladhara Hydro Solutions</title>
        <meta
          name="description"
          content="Jaladhara Hydro Solutions — design, manufacture and maintenance partner for hydro power plants. Learn about our mission, quality commitment, and team."
        />
      </Helmet>

      <PageBanner title="About us" />

      {/* Intro */}
      <Section>
        <Container>
          <div className="max-w-3xl">
            <img
              src={aboutIntro.iconImage}
              alt=""
              aria-hidden
              className="h-10 w-auto mb-4"
              onError={withPlaceholderFallback('JD')}
            />
            <SectionHeading
              eyebrow={aboutIntro.eyebrow}
              title={aboutIntro.heading}
              body={aboutIntro.body}
            />
          </div>
        </Container>
      </Section>

      {/* Turbine image + blurb + counters */}
      <Section alt>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <button
              onClick={() => openLightbox(0)}
              className="block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              aria-label="View full-size turbine image"
            >
              <img
                src="/images/sections/turbine.webp"
                alt="Hydro turbine — click to enlarge"
                className="w-full h-auto rounded-sm hover:opacity-90 transition-opacity cursor-zoom-in"
                loading="lazy"
                onError={withPlaceholderFallback('Turbine')}
              />
            </button>

            <div>
              <p className="text-body leading-relaxed font-semibold mb-8">
                {site.blurb}
              </p>

              {showStats && (
                <div className="grid grid-cols-3 gap-6">
                  {stats.map((stat) => (
                    <Counter key={stat.label} stat={stat} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* Mission & Quality — zig-zag image/text */}
      <Section>
        <Container>
          <div className="space-y-16">
            {missionBlocks.map((block, i) => (
              <div
                key={block.heading}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <button
                  onClick={() => openLightbox(i + 1)}
                  className={[
                    'block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary',
                    i % 2 !== 0 ? 'lg:order-last' : '',
                  ].join(' ')}
                  aria-label={`View full-size image: ${block.heading}`}
                >
                  <img
                    src={block.image}
                    alt={block.heading}
                    className="w-full h-auto rounded-sm hover:opacity-90 transition-opacity cursor-zoom-in"
                    loading="lazy"
                    onError={withPlaceholderFallback(block.heading)}
                  />
                </button>

                <div>
                  <h4 className="font-display font-semibold text-xl text-primary mb-4">
                    {block.heading}
                  </h4>
                  <p className="text-body leading-relaxed">{block.body}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxImages}
      />
    </>
  );
}
