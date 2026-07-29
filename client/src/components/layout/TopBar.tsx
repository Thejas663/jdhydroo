import { Phone, Mail } from 'lucide-react';
import { site } from '../../data/site';

export default function TopBar() {
  return (
    <div
      className="hidden md:block w-full text-sm"
      style={{ backgroundColor: 'var(--color-penstock)', color: '#a0a8b4' }}
    >
      <div className="mx-auto max-w-container px-[15px] flex items-center justify-between h-10">
        {/* Left — tagline */}
        <span>{site.tagline}</span>

        {/* Right — contact details */}
        <div className="flex items-center gap-6">
          {/* Phone */}
          <a
            href={`tel:${site.phones[0]}`}
            className="flex items-center gap-1 hover:text-teal-on-dark transition-colors"
          >
            <Phone size={13} aria-hidden />
            <span>{site.phonesDisplay[0]}</span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${site.email}`}
            className="flex items-center gap-1 hover:text-teal-on-dark transition-colors"
          >
            <Mail size={13} aria-hidden />
            <span>{site.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
