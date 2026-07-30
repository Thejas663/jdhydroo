import { Helmet } from 'react-helmet-async';
import { Droplets, HardHat, Settings, TrendingUp, Package, Compass, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { services } from '../data/services';

const ICONS: Record<string, typeof Droplets> = {
  'water-to-wire-solutions': Droplets,
  'erection-commissioning': HardHat,
  'operation-maintenance': Settings,
  'renovation-modernisation': TrendingUp,
  'special-products-spare-parts': Package,
  'engineering-solutions': Compass,
};

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services – Jaladhara Hydro Solutions</title>
        <meta
          name="description"
          content="Water-to-wire solutions, erection & commissioning, O&M/AMC, renovation & modernisation, spare parts and engineering services for hydro power plants from Jaladhara Hydro Solutions."
        />
      </Helmet>

      <PageBanner title="Services" />

      <Section>
        <Container>
          <SectionHeading
            eyebrow="We are Jaladhara"
            title="What we do"
            body="Beyond the equipment itself — the services that keep a hydro power plant running at its best across its whole lifecycle."
          />

          {/* Jump links */}
          <nav aria-label="Service sections" className="flex flex-wrap gap-3 mb-14">
            {services.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="px-4 py-2 text-sm font-display font-semibold text-penstock border border-border rounded-sm hover:border-teal hover:text-teal-text transition-colors"
              >
                {service.title}
              </a>
            ))}
          </nav>

          <div className="space-y-16">
            {services.map((service) => {
              const Icon = ICONS[service.slug] ?? Compass;
              return (
                <div key={service.slug} id={service.slug} className="scroll-mt-24">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 w-12 h-12 rounded-sm bg-spillway flex items-center justify-center">
                      <Icon size={22} className="text-teal-text" aria-hidden />
                    </div>
                    <h3 className="font-display font-bold text-penstock text-2xl leading-tight pt-2">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-steel leading-relaxed max-w-3xl">{service.description}</p>
                  {service.benefits && service.benefits.length > 0 && (
                    <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-3xl">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal" aria-hidden />
                          <span className="text-steel text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
