import { footer, site } from '@/data/content';
import Reveal from '@/components/Reveal';

const contactLink =
  'block font-serif text-3xl text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon';

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-blush">
      <div className="page-container py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-center lg:gap-x-8">
          <Reveal className="lg:col-span-5">
            <h2 className="font-serif text-[clamp(3rem,6vw,5rem)] leading-[1]">
              {footer.joinTitle}
            </h2>
            <p className="mt-6 max-w-[36ch] text-blush/80">{footer.joinText}</p>
          </Reveal>

          <Reveal
            delay={0.08}
            className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_auto] lg:col-span-6 lg:col-start-7 lg:grid-cols-1 xl:grid-cols-[1fr_auto]"
          >
            <div className="space-y-4">
              <p className="eyebrow text-blush/70">{footer.instagram.label}</p>
              <a
                href={footer.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className={contactLink}
              >
                {footer.instagram.handle}
              </a>
            </div>
            <div className="space-y-4">
              <p className="eyebrow text-blush/70">{footer.email.label}</p>
              <a href={footer.email.href} className={contactLink}>
                {footer.email.address}
              </a>
            </div>
            <div className="space-y-4 sm:col-span-2 lg:col-span-1 xl:col-span-2">
              <p className="eyebrow text-blush/70">{footer.donate.label}</p>
              <p className="font-serif text-3xl text-blush">{footer.donate.text}</p>
              <a
                href={footer.donate.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${contactLink} underline decoration-lagoon underline-offset-4`}
              >
                {footer.donate.linkLabel}
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 h-px w-full bg-blush/15" />
        <div className="mt-8 flex flex-col gap-3 text-sm text-blush/70 sm:flex-row sm:justify-between">
          <p>{site.nonprofitLine}</p>
          <p>&copy; {site.copyright}</p>
        </div>
      </div>
      {/* Last on the page, so jumping here lands at the very bottom. */}
      <div id="donate" />
    </footer>
  );
}
