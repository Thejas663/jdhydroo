import { Helmet } from 'react-helmet-async';
import PageBanner from '../components/ui/PageBanner';
import { Section } from '../components/ui/Section';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';

export default function ProductsValves() {
  return (
    <>
      <Helmet>
        <title>Valves – Jaladhara Hydro Solutions</title>
        <meta
          name="description"
          content="Butterfly, spherical, slide, needle and aerating valves from Jaladhara Hydro Solutions."
        />
      </Helmet>

      <PageBanner
        title="Valves"
        crumbs={[
          { label: 'Jaladhara Hydro Solutions', to: '/' },
          { label: 'Products', to: '/products' },
        ]}
      />

      <Section>
        <Container>
          <SectionHeading eyebrow="We are Jaladhara" title="Valve family" />
        </Container>
      </Section>
    </>
  );
}
