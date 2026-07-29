import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  // 1. Route-change scroll reset
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  // 2. Back-to-top button visibility
  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={[
        'fixed bottom-6 right-6 z-50',
        'w-10 h-10 flex items-center justify-center rounded-sm cursor-pointer',
        'bg-teal text-white shadow-lg',
        'transition-all duration-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none',
      ].join(' ')}
    >
      <ChevronUp size={20} aria-hidden />
    </button>
  );
}
