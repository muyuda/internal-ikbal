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
    rootMargin: '0% 0% -50% 0%',
  });

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  const isScrolledOrMobileOpen = scrolled || isMobileOpen;
  const textColor = isScrolledOrMobileOpen ? 'text-[#03045E]' : 'text-white';

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolledOrMobileOpen ? 'bg-white shadow-lg' : 'bg-transparent',
        'py-[25px]'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className={clsx('text-3xl font-bold tracking-wider', textColor)}>
            NOVA
          </a>
          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-bold tracking-wider transition-colors',
                  `#${activeId}` === link.href
                    ? 'text-[#007bff]'
                    : `${textColor} hover:text-[#007bff]`
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile Nav Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMobile} className={clsx(textColor)}>
              {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={clsx(
          'lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden',
          isMobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={toggleMobile}
              className={clsx(
                'text-base font-medium transition-colors w-full text-center py-2',
                `#${activeId}` === link.href
                  ? 'text-[#007bff]'
                  : 'text-[#03045E] hover:text-[#007bff]'
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
