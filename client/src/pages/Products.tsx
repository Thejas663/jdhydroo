import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { RevealCard } from '../components/ui/RevealCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { products } from '../data/products';

export default function Products() {
  const introRef = useScrollReveal<HTMLDivElement>();

  return (
    <>
      <Helmet>
        <title>Products – Jaladhara Hydro Solutions</title>
        <meta
          name="description"
          content="Jaladhara Hydro Solutions products: Aerating Valve, Pelton, Francis and Kaplan turbines, Butterfly and Spherical valves, Slide Valve, and Needle Valve."
        />
      </Helmet>

      <PageBanner title="Products" />

      <Section>
        <Container>
          <div ref={introRef}>
            <SectionHeading eyebrow="We are Jaladhara" title="Our Products" />
            <p className="text-body leading-relaxed mb-2">
              We offer many types of products like Hydraulic Turbines, Valves, Slide Valve and many more.
            </p>
            <p className="text-body leading-relaxed">
              We also provide solutions for all your electrical requirements.
            </p>
          </div>
        </Container>
      </Section>

      <Section alt>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <RevealCard
                key={product.slug}
                delay={i * 100}
                className="group bg-white border border-border rounded-sm overflow-hidden hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    loading={i < 3 ? 'eager' : 'lazy'}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/400x300?text=${encodeURIComponent(product.title)}`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-heading mb-3 group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-body leading-relaxed mb-5">
                    {product.excerpt}
                  </p>
                  <Link
                    to={`/services/${product.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    aria-label={`Read more about ${product.title}`}
                  >
                    Read More <ArrowRight size={14} aria-hidden />
                  </Link>
                </div>
              </RevealCard>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
