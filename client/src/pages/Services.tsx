import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services – Jaladhara Hydro Solutions</title>
        <meta
          name="description"
          content="Consultancy, plant assessment, service and repair, FEA, O&M and electrical services for hydropower plants from Jaladhara Hydro Solutions."
        />
      </Helmet>

      <PageBanner title="Services" />

      <Section>
        <Container>
          <SectionHeading eyebrow="We are Jaladhara" title="Our Services" />
        </Container>
      </Section>
    </>
  );
}
