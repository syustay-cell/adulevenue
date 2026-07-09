import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Financing', href: '#financing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white/95 backdrop-blur shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">A</span>
          </div>
          <span className={`font-bold text-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}>ADU Levenue</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-blue-700' : 'text-white/90 hover:text-white'}`}>
              {l.label}
            </a>
          ))}
          <a href="#hero-form" className="btn-primary text-sm py-2.5 px-5">
            Get My ADU Plan
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-gray-900' : 'text-white'}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          {links.map(l => (
            <a key={l.href} href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-gray-800 font-medium border-b border-gray-50 last:border-0">
              {l.label}
            </a>
          ))}
          <a href="#hero-form" onClick={() => setMobileOpen(false)}
            className="btn-primary w-full mt-3 text-sm py-3">
            Get My ADU Plan
          </a>
        </div>
      )}
    </nav>
  );
}
