import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { ui } from '@/data/content';

export default function SiteLayout() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash, key]);

  return (
    <div className="min-h-svh bg-blush">
      <a
        href="#main"
        className="sr-only z-[60] bg-blush px-4 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {ui.skipToContent}
      </a>
      <SiteNav />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
