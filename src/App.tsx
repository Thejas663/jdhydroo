import { Container } from './components/ui/Container';
import { Section } from './components/ui/Section';
import { Button } from './components/ui/Button';
import { SectionHeading } from './components/ui/SectionHeading';
import { Card } from './components/ui/Card';
import PageBanner from './components/ui/PageBanner';

function App() {
  return (
    <div className="min-h-screen bg-surface">
      {/* Banner */}
      <PageBanner title="Phase 1 Foundation Testing" />

      {/* Intro Section */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="We are Jaladhara"
            title="Clean Energy Solutions"
            body="Jaladhara Hydro Solutions is a premium design, manufacturing, and maintenance partner for hydro power plants. We focus on engineering excellence and long-term sustainability."
            center
          />

          <div className="mt-8 flex justify-center gap-4">
            <Button variant="solid">Our Solutions</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </Container>
      </Section>

      {/* Grid Section */}
      <Section alt>
        <Container>
          <SectionHeading title="Primary Products" center />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <Card
              title="Pelton Turbine"
              description="High head impulse turbine designed for large water falls and high-pressure flow."
              link="#"
            />
            <Card
              title="Francis Turbine"
              description="Medium head reaction turbine with high efficiency across varying load conditions."
              link="#"
            />
            <Card
              title="Kaplan Turbine"
              description="Low head axial flow turbine ideal for river run power generation plants."
              link="#"
            />
          </div>
        </Container>
      </Section>
    </div>
  );
}

export default App;
