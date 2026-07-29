import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects – Jaladhara Hydro Solutions</title>
        <meta
          name="description"
          content="Hydropower plant projects delivered by Jaladhara Hydro Solutions."
        />
      </Helmet>

      <PageBanner title="Projects" />

      <Section>
        <Container>
          <SectionHeading eyebrow="We are Jaladhara" title="Our Projects" />
        </Container>
      </Section>
    </>
  );
}
