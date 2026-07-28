import { Link } from 'react-router-dom';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { imageFallback } from '../../utils/imageFallback';
import { products } from '../../data/products';
import { ArrowRight } from 'lucide-react';

const HOMEPAGE_PRODUCTS = ['pelton-turbine', 'francis-turbine', 'kaplan-turbine', 'valve'];

export default function ProductsGrid() {
  const homepageProducts = HOMEPAGE_PRODUCTS
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as typeof products;

  const blockRef = useScrollReveal<HTMLDivElement>();

  return (
    <Section alt>
      <Container>
        <div ref={blockRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Side image */}
          <div className="hidden lg:block">
            <img
              src="/images/sections/service-14.webp"
              alt="Hydro power plant engineering — Jaladhara"
              className="w-full h-auto rounded-sm shadow-md"
              loading="lazy"
              onError={imageFallback('https://placehold.co/600x450?text=Services+Overview')}
            />
          </div>

          {/* Cards column */}
          <div>
            <SectionHeading
              eyebrow="We are Jaladhara"
              title="Our Products"
              className="mb-8"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {homepageProducts.map((product) => (
                <Link
                  key={product.slug}
                  to={`/services/${product.slug}`}
                  className="group block p-6 bg-white border border-border hover:border-primary transition-colors rounded-sm"
                >
                  <h3 className="font-display font-semibold text-lg text-heading mb-2 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed mb-4">
                    {product.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-primary-dark text-sm font-semibold">
                    Read more <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
