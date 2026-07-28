import { useParams, Navigate, NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { imageFallback } from '../utils/imageFallback';
import { products } from '../data/products';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const product = products.find((p) => p.slug === slug);
  const headingRef = useScrollReveal<HTMLDivElement>();

  if (!product) return <Navigate to="/products" replace />;

  return (
    <>
      <Helmet>
        <title>{`${product.title} – Jaladhara Hydro Solutions`}</title>
        <meta name="description" content={product.excerpt} />
      </Helmet>

      <PageBanner
        title={product.title}
        crumbs={[
          { label: 'Jaladhara Hydro Solutions', to: '/' },
          { label: 'Products', to: '/products' },
        ]}
      />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main content */}
            <div className="lg:col-span-8">
              <div className="mb-8 rounded-sm overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  loading="eager"
                  className="w-full h-auto"
                  onError={imageFallback(`https://placehold.co/800x500?text=${encodeURIComponent(product.title)}`)}
                />
              </div>

              <div ref={headingRef}>
                <SectionHeading
                  eyebrow="We are Jaladhara"
                  title={product.title}
                  body={product.intro}
                />
              </div>

              <div className="mt-8 space-y-10">
                {product.groups.map((group, gi) => (
                  <div key={gi}>
                    {group.heading && (
                      <h3 className="font-display font-semibold text-xl text-heading mb-3">
                        {group.heading}
                      </h3>
                    )}
                    {group.intro && (
                      <p className="text-body leading-relaxed mb-4">{group.intro}</p>
                    )}
                    <p className="font-semibold text-heading mb-3">Product Details:</p>
                    <ul className="space-y-2">
                      {group.specs.map((spec, si) => (
                        <li key={si} className="flex items-start gap-3">
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-primary"
                            aria-hidden
                          />
                          <span className="text-body text-sm">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div
                className="rounded-sm overflow-hidden border border-border"
                aria-label="All Products navigation"
              >
                <div
                  className="px-5 py-4 font-display font-bold text-heading"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  All Products
                </div>
                <nav>
                  <ul>
                    {products.map((p) => (
                      <li key={p.slug} className="border-b border-border last:border-0">
                        <NavLink
                          to={`/services/${p.slug}`}
                          className={({ isActive }) =>
                            [
                              'flex items-center justify-between px-5 py-3 text-sm font-display font-semibold transition-colors',
                              isActive
                                ? 'text-heading bg-primary'
                                : 'text-heading hover:text-primary hover:bg-surface-alt',
                            ].join(' ')
                          }
                        >
                          {p.title}
                          <span aria-hidden>›</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
