import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { imageFallback } from '../../utils/imageFallback';
import { projects } from '../../data/projects';

export default function ProjectsCarousel() {
  const headingRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section alt>
      <Container>
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="We are Jaladhara"
            title="Recent Projects"
            center
          />
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0:   { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          className="mt-10 pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.slug}>
              <article className="group rounded-sm overflow-hidden border border-border bg-white shadow-sm transition-all duration-300 hover:translate-y-[-6px] hover:shadow-md">
                <div className="overflow-hidden h-52">
                  <picture>
                    <source srcSet={project.imageWebP} type="image/webp" />
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={imageFallback('https://placehold.co/400x250?text=Project+Image')}
                    />
                  </picture>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-heading mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed mb-4">
                    {project.excerpt}
                  </p>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-sm font-semibold text-primary hover:text-primary-h transition-colors"
                  >
                    View detail &rarr;
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Section>
  );
}
