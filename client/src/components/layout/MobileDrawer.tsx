import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../../data/nav';
import { site } from '../../data/site';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import { imageFallback } from '../../utils/imageFallback';

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const location = useLocation();
  const [productsExpanded, setProductsExpanded] = useState(false);
  useLockBodyScroll(open);

  // Close on route change
  useEffect(() => onClose(), [location]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={[
          'fixed inset-0 z-40 bg-black transition-opacity duration-300',
          open ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none',
        ].join(' ')}
        onClick={onClose}
        aria-hidden
      />

      {/* Drawer panel */}
      <div
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={[
          'fixed top-0 left-0 h-full w-72 z-50 bg-white shadow-2xl',
          'transform transition-transform duration-300 ease-in-out',
          open ? 'translate-x-0' : '-translate-x-full',
        ].join(' ')}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <img
            src="/images/branding/logo.png"
            alt={site.name}
            className="h-10 w-auto"
            onError={imageFallback('https://placehold.co/100x40?text=Logo')}
          />
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 text-heading hover:text-primary transition-colors cursor-pointer"
          >
            <X size={20} aria-hidden />
          </button>
        </div>

        {/* Nav items */}
        <nav className="p-4" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  // Accordion for Products dropdown
                  <>
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 font-display font-semibold text-heading hover:text-primary transition-colors cursor-pointer"
                      onClick={() => setProductsExpanded((v) => !v)}
                      aria-expanded={productsExpanded}
                      aria-controls="mobile-products-menu"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        aria-hidden
                        className={`transition-transform ${productsExpanded ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <ul
                      id="mobile-products-menu"
                      hidden={!productsExpanded}
                      className="ml-4 mt-1 space-y-1"
                    >
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <NavLink
                            to={child.to}
                            className={({ isActive }) => [
                              'block px-3 py-2 text-sm font-display font-semibold transition-colors',
                              isActive ? 'text-primary-dark' : 'text-body hover:text-primary-dark',
                            ].join(' ')}
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => [
                      'block px-3 py-2 font-display font-semibold transition-colors',
                      isActive ? 'text-primary-dark' : 'text-heading hover:text-primary-dark',
                    ].join(' ')}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
