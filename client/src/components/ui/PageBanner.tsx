import { Link } from 'react-router-dom';

interface Crumb {
  label: string;
  to: string;
}

interface PageBannerProps {
  title: string;
  crumbs?: Crumb[];
}

export default function PageBanner({
  title,
  crumbs = [{ label: 'Jaladhara Hydro Solutions', to: '/' }],
}: PageBannerProps) {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center text-white py-20 md:py-28"
      style={{
        backgroundImage: `var(--overlay-crumb), url('/images/sections/page-banner-bg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="font-display font-bold text-4xl md:text-5xl text-white mb-4">
        {title}
      </h1>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm font-display font-semibold">
          {crumbs.map((crumb) => (
            <li key={crumb.to} className="flex items-center gap-2">
              <Link
                to={crumb.to}
                title={`Go to ${crumb.label}.`}
                className="text-white/80 hover:text-primary transition-colors"
              >
                {crumb.label}
              </Link>
              <span className="text-white/60" aria-hidden>›</span>
            </li>
          ))}
          {/* Bright amber is correct here — this sits on the dark banner
              overlay/image, not on white. It only fails contrast right now
              because the real banner background image doesn't exist yet
              (placeholder falls through to a plain white page background);
              this resolves on its own once a real image is supplied. */}
          <li aria-current="page" className="text-primary">
            {title}
          </li>
        </ol>
      </nav>
    </div>
  );
}
