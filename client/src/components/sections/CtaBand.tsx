import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';

export default function CtaBand() {
  return (
    <section
      className="relative py-24 flex items-center justify-center text-center"
      style={{
        backgroundImage: `var(--overlay-hero), url('/images/sections/cta-bg.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="relative z-10 max-w-2xl px-6">
        <h2 className="font-display font-bold text-white text-3xl md:text-4xl leading-tight mb-6">
          We are committed to provide safe solution to our clients.
        </h2>
        <p className="text-white/80 text-lg mb-8 leading-relaxed font-body">
          At Jaladhara we provide solution for Power Sector, Water to Wire safely and meet client expectations in timely manner.
        </p>
        <Link to="/contact">
          <Button variant="solid">Contact Us</Button>
        </Link>
      </div>
    </section>
  );
}
