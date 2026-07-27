import { Helmet } from 'react-helmet-async';
import { MapPin, Mail, Phone } from 'lucide-react';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ContactForm } from '../components/forms/ContactForm';
import { site } from '../data/site';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact – Jaladhara Hydro Solutions</title>
        <meta
          name="description"
          content="Get in touch with Jaladhara Hydro Solutions. Office in Greater Faridabad (Delhi NCR). Call (+91) 8750 061 793 or email contact@jdhydro.com."
        />
      </Helmet>

      <PageBanner title="Contact" />

      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact details */}
            <div>
              <h2 className="font-display font-bold text-2xl text-heading mb-3">
                Contact Details
              </h2>
              <p className="text-body mb-8">
                Get in touch with us for any questions about our industries or projects.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={22} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                  <address className="not-italic text-sm text-body leading-relaxed">
                    {site.address.lines.map((line, i) => (
                      <span key={i} className="block">{line}</span>
                    ))}
                    <span className="block">Pin Code: {site.address.pin}</span>
                  </address>
                </div>

                <div className="flex items-center gap-4">
                  <Mail size={22} className="shrink-0 text-primary" aria-hidden />
                  <a
                    href={`mailto:${site.email}`}
                    className="text-sm text-body hover:text-primary transition-colors"
                  >
                    {site.email}
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={22} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                  <div className="space-y-1">
                    {site.phones.map((phone, i) => (
                      <a
                        key={phone}
                        href={`tel:${phone}`}
                        className="block text-sm text-body hover:text-primary transition-colors"
                      >
                        {site.phonesDisplay[i]}
                      </a>
                    ))}
                  </div>
                </div>

                {site.socials.length > 0 && (
                  <div className="flex items-center gap-4 pt-2">
                    {site.socials.map(({ platform, href, Icon }) => (
                      <a
                        key={platform}
                        href={href}
                        aria-label={platform}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-body hover:text-primary transition-colors"
                      >
                        <Icon size={20} aria-hidden />
                      </a>
                    ))}
                  </div>
                )}

                {/* TODO(client blocker): confirm the real Google Maps embed URL
                    for the Sector-79, Greater Faridabad office before launch. */}
                <div className="mt-6 rounded-sm overflow-hidden aspect-video">
                  <iframe
                    title="Jaladhara Hydro Solutions office location"
                    src="https://www.google.com/maps?q=Sector-79,+Greater+Faridabad,+Haryana+121002&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <SectionHeading
                eyebrow="We are Jaladhara"
                title="Send a Message"
                className="mb-8"
              />
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
