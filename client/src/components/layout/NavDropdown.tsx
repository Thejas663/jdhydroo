import { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import type { NavItem } from '../../data/nav';

interface NavDropdownProps {
  item: NavItem;
}

export default function NavDropdown({ item }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Close on route change
  useEffect(() => setOpen(false), [location]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 font-display font-semibold text-[15px] tracking-wide text-heading hover:text-primary transition-colors cursor-pointer"
        aria-expanded={open}
        aria-controls="products-menu"
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {item.label}
        <ChevronDown
          size={14}
          aria-hidden
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown panel */}
      <ul
        id="products-menu"
        role="menu"
        hidden={!open}
        className={[
          'absolute top-full left-0 mt-1 min-w-[220px] z-50',
          'bg-white border border-border shadow-lg rounded-sm py-2',
          'transition-all duration-200',
          open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
        ].join(' ')}
      >
        {item.children!.map((child) => (
          <li key={child.label} role="none">
            <NavLink
              to={child.to}
              role="menuitem"
              className={({ isActive }) => [
                'block px-5 py-2 text-sm font-display font-semibold transition-colors',
                isActive
                  ? 'text-primary bg-surface-alt'
                  : 'text-heading hover:text-primary hover:bg-surface-alt',
              ].join(' ')}
            >
              {child.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
