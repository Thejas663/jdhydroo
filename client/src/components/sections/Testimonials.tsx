import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../../data/testimonials';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { imageFallback } from '../../utils/imageFallback';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section alt>
      <Container>
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="We are Jaladhara"
            title="Client’s Reviews"
            center
          />
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="mt-10 pb-12 max-w-3xl mx-auto"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="text-center px-6 py-4">
                <Quote
                  size={40}
                  className="mx-auto mb-6 text-primary opacity-40 rotate-180"
                  aria-hidden
                />
                <blockquote className="font-body">
                  <p className="text-body text-lg leading-relaxed italic mb-8">
                    "{t.quote}"
                  </p>
                  <footer className="flex flex-col items-center gap-2">
                    <img
                      src={t.avatar}
                      alt={`${t.name}'s photo`}
                      className="w-14 h-14 rounded-full object-cover"
                      loading="lazy"
                      onError={imageFallback('https://placehold.co/100?text=Avatar')}
                    />
                    <cite className="not-italic">
                      <span className="block font-display font-semibold text-heading text-base">
                        {t.name}
                      </span>
                      <span className="block text-sm text-body">{t.location}</span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
}
