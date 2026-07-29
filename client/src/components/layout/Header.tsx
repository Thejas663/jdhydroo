import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import NavDropdown from './NavDropdown';
import { navItems } from '../../data/nav';
import { site } from '../../data/site';
import { imageFallback } from '../../utils/imageFallback';

interface HeaderProps {
  onHamburgerClick: () => void;
}

export default function Header({ onHamburgerClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
        scrolled ? 'shadow-md' : 'shadow-sm',
      ].join(' ')}
    >
      <div className="mx-auto max-w-container px-[15px] flex items-center justify-between h-[80px]">
        {/* Logo */}
        <NavLink to="/" aria-label={`${site.name} — go to homepage`}>
          <img
            src="/images/branding/cropped-logo.png"
            alt={site.name}
            className="h-[50px] w-auto transition-all duration-300"
            onError={imageFallback('https://placehold.co/150x50?text=Jaladhara')}
          />
        </NavLink>

        {/* Desktop nav — hidden below lg (992px) */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} item={item} />
            ) : (
              <NavLink
                key={item.label}
                to={item.to}
                className={({ isActive }) => [
                  'font-display font-semibold text-[15px] tracking-wide transition-colors duration-200',
                  isActive
                    ? 'text-teal-text'
                    : 'text-penstock hover:text-teal-text',
                ].join(' ')}
              >
                {item.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Hamburger — visible below lg only */}
        <button
          className="lg:hidden p-2 text-penstock hover:text-teal-text transition-colors cursor-pointer"
          onClick={onHamburgerClick}
          aria-label="Open navigation menu"
          aria-expanded={false}
          aria-controls="mobile-drawer"
        >
          <Menu size={24} aria-hidden />
        </button>
      </div>
    </header>
  );
}
