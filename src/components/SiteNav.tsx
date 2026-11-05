import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { nav, site } from '@/data/content';
import { classNames } from '@/lib/classNames';

export default function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 96);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const linkClass =
    'font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon';

  return (
    <header
      className={classNames(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-500',
        scrolled ? 'bg-ink/95 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav
        aria-label={nav.primaryLabel}
        className="page-container flex h-20 items-center justify-between"
      >
        <Link
          to="/"
          aria-label={nav.homeLabel}
          className="flex items-center gap-3 text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
        >
          <img src={site.logo.src} alt="" className="h-12 w-12 md:h-14 md:w-14" />
          <span className="hidden font-sans text-[11px] font-medium uppercase tracking-[0.16em] min-[420px]:inline">
            {site.name}
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-10">
            {nav.links.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <NavLink
            to={nav.ticketsTo}
            className="inline-flex items-center rounded-md bg-mid px-5 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-lagoon focus-visible:outline-lagoon"
          >
            {nav.ticketsLabel}
          </NavLink>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <NavLink
            to={nav.ticketsTo}
            className="inline-flex items-center rounded-md bg-mid px-4 py-2.5 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-lagoon focus-visible:outline-lagoon"
          >
            {nav.ticketsShortLabel}
          </NavLink>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-md text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
          >
            {menuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-ink md:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="page-container flex h-20 items-center justify-between">
              <span className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-blush">
                {site.name}
              </span>
            </div>
            <ul className="page-container flex flex-1 flex-col justify-center gap-8">
              {nav.links.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="font-serif text-[48px] leading-[1.1] text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
