import { useState } from 'react';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';
import { useScroll } from '../hooks/useScroll';
import { useScrollSpy } from '../hooks/useScrollSpy';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const sectionIds = ['home', 'services', 'portfolio', 'team', 'contact'];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const scrolled = useScroll(50);
  
  const activeId = useScrollSpy(sectionIds, {
    // Adjust rootMargin to trigger the observer when the section is a bit more into the viewport
    rootMargin: '0% 0% -50% 0%',
  });

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || isMobileOpen ? 'bg-surface-dark shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-3xl font-bold text-white tracking-wider">
            NOVA
          </a>
          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-bold uppercase tracking-wider transition-colors',
                  `#${activeId}` === link.href
                    ? 'text-accent-green'
                    : 'text-white hover:text-accent-green'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMobile} className="text-white">
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="lg:hidden bg-surface-dark">
          <nav className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMobile}
                className={clsx(
                  'text-lg font-bold uppercase tracking-wider transition-colors',
                  `#${activeId}` === link.href
                    ? 'text-accent-green'
                    : 'text-white hover:text-accent-green'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
