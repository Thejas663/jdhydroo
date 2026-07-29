import { Link, NavLink } from 'react-router-dom';
import { site } from '../../data/site';
import { products } from '../../data/products';
import { imageFallback } from '../../utils/imageFallback';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: 'var(--color-penstock)', color: '#a0a8b4' }}>
      {/* Row 1 — columns */}
      <div className="mx-auto max-w-container px-[15px] py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand column */}
        <div>
          <Link to="/">
            <img
              src="/images/branding/logo-200.png"
              alt={site.name}
              className="h-12 w-auto mb-6"
              onError={imageFallback('https://placehold.co/150x50?text=Logo')}
            />
          </Link>
          <p className="text-sm leading-relaxed mb-6">{site.blurb}</p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-6 py-2 border border-teal text-teal-on-dark text-sm font-semibold hover:bg-teal hover:text-white transition-all duration-300"
          >
            About Company
          </Link>
        </div>

        {/* Products links */}
        <div>
          <h3
            className="font-display font-bold text-white text-lg mb-6 pb-3"
            style={{ borderBottom: '2px solid var(--color-teal)' }}
          >
            Our Products
          </h3>
          <ul className="space-y-3">
            {products.map((p) => (
              <li key={p.slug}>
                <NavLink
                  to={`/services/${p.slug}`}
                  className="text-sm hover:text-teal-on-dark transition-colors"
                >
                  &rsaquo; {p.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact column */}
        <div>
          <h3
            className="font-display font-bold text-white text-lg mb-6 pb-3"
            style={{ borderBottom: '2px solid var(--color-teal)' }}
          >
            Contact Us
          </h3>
          <address className="not-italic text-sm space-y-3">
            <p>
              {site.address.lines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
              <span className="block">Pin Code: {site.address.pin}</span>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-teal-on-dark transition-colors">
                {site.email}
              </a>
            </p>
            {site.phones.map((phone, i) => (
              <p key={phone}>
                <a href={`tel:${phone}`} className="hover:text-teal-on-dark transition-colors">
                  {site.phonesDisplay[i]}
                </a>
              </p>
            ))}
          </address>
        </div>
      </div>

      {/* Row 2 — copyright bar */}
      <div
        className="border-t text-center text-sm py-5"
        style={{ borderColor: 'rgba(255,255,255,0.08)' }}
      >
        &copy; {year} {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
