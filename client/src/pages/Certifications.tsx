import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function Certifications() {
  return (
    <>
      <Helmet>
        <title>Certifications – Jaladhara Hydro Solutions</title>
        <meta
          name="description"
          content="Certifications held by Jaladhara Hydro Solutions."
        />
      </Helmet>

      <PageBanner title="Certifications" />

      <Section>
        <Container>
          <SectionHeading eyebrow="We are Jaladhara" title="Our Certifications" />
        </Container>
      </Section>
    </>
  );
}
