import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service – Jaladhara Hydro Solutions</title>
        <meta name="description" content="Terms of Service for Jaladhara Hydro Solutions." />
      </Helmet>

      <PageBanner title="Terms of Service" />

      <Section>
        <Container>
          <p className="text-steel leading-relaxed">
            Content pending — see Phase 13 of the site rebuild plan.
          </p>
        </Container>
      </Section>
    </>
  );
}
