import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – Jaladhara Hydro Solutions</title>
        <meta name="description" content="Privacy Policy for Jaladhara Hydro Solutions." />
      </Helmet>

      <PageBanner title="Privacy Policy" />

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
