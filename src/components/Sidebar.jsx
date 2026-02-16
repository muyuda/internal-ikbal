import { Link, useLocation } from 'react-router-dom';
import { Home, Briefcase, FolderGit, Users, Phone } from 'lucide-react';
import { clsx } from 'clsx';
import useLayoutStore from '../store/layoutStore';

const navLinks = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/services', label: 'Services', icon: Briefcase },
  { href: '/portfolio', label: 'Portfolio', icon: FolderGit },
  { href: '/team', label: 'Team', icon: Users },
  { href: '/contact', label: 'Contact', icon: Phone },
];

const Sidebar = () => {
  const { isMobileNavOpen, isDesktopSidebarExpanded, setDesktopSidebarExpanded, toggleMobileNav } = useLayoutStore();
  const location = useLocation();

  const isExpanded = isDesktopSidebarExpanded || isMobileNavOpen;

  return (
    <>
      {/* Overlay for mobile */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/50 z-30 lg:hidden',
          { 'block': isMobileNavOpen, 'hidden': !isMobileNavOpen }
        )}
        onClick={toggleMobileNav}
      ></div>

      <aside
        className={clsx(
          'fixed top-0 left-0 h-full bg-header-dark z-40 transition-all duration-300 ease-in-out',
          'lg:w-20', // Collapsed width
          isDesktopSidebarExpanded && 'lg:w-64', // Expanded width
          isMobileNavOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'
        )}
        onMouseEnter={() => setDesktopSidebarExpanded(true)}
        onMouseLeave={() => setDesktopSidebarExpanded(false)}
      >
        <div className="flex items-center justify-center h-16 border-b border-slate/10">
          <h1 className={clsx("text-2xl font-bold text-white transition-opacity", isExpanded ? "opacity-100" : "opacity-0 lg:opacity-100")}>
            {isExpanded ? "Corp" : "C"}
          </h1>
        </div>
        <nav className="mt-4">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href} className="px-4 py-2">
                <Link
                  to={link.href}
                  className={clsx(
                    'flex items-center p-2 rounded-lg transition-colors duration-200',
                    location.pathname === link.href
                      ? 'bg-accent-green text-white'
                      : 'text-slate-light hover:bg-slate/10'
                  )}
                >
                  <link.icon className="h-6 w-6 flex-shrink-0" />
                  <span className={clsx("ml-4 font-semibold whitespace-nowrap transition-opacity", isExpanded ? "opacity-100" : "opacity-0 lg:opacity-0")}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
