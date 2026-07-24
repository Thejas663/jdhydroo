import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { Link } from 'react-router-dom';
import { slides } from '../../data/slides';
import { Button } from '../ui/Button';



export default function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => {
      if (mq.matches) {
        swiperRef.current?.autoplay.stop();
      } else {
        swiperRef.current?.autoplay.start();
      }
    };
    handler();
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return (
    <section aria-label="Hero" className="relative w-full">
      {/* Visually-hidden H1 for accessibility and SEO */}
      <h1 className="sr-only">Jaladhara Hydro Solutions — Hydro Power, Water to Wire</h1>

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full"
        style={{ height: 'clamp(480px, 80vh, 800px)' }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            {/* Responsive image with WebP + jpg fallback */}
            <picture>
              <source srcSet={slide.imageWebP} type="image/webp" />
              <img
                src={slide.image}
                alt={slide.alt}
                loading={slide.loading}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://placehold.co/1920x800?text=Slide+${i + 1}`;
                }}
              />
            </picture>

            {/* Overlay scrim */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: 'var(--overlay-hero)' }}
              aria-hidden
            />

            {/* Slide content */}
            <div className="relative z-10 flex items-center h-full">
              <div className="mx-auto max-w-container px-[15px] w-full text-center">
                <div className="max-w-2xl mx-auto">
                  {slide.heading && (
                    <p
                      className="font-display font-bold text-white leading-tight mb-4"
                      style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
                    >
                      {slide.heading}
                    </p>
                  )}
                  {slide.body && (
                    <p className="text-white/90 text-lg mb-8 leading-relaxed font-body">
                      {slide.body}
                    </p>
                  )}
                  {slide.ctas.length > 0 && (
                    <div className="flex flex-wrap gap-4 justify-center">
                      {slide.ctas.map((cta) => (
                        <Link key={cta.label} to={cta.to}>
                          <Button variant={cta.variant}>{cta.label}</Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
