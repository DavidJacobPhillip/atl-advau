import { footer, site } from '@/data/content';
import MediaPlaceholder from '@/components/MediaPlaceholder';
import Reveal from '@/components/Reveal';

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-blush">
      <div className="page-container py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-x-8">
          <Reveal className="lg:col-span-5">
            <h2 className="font-serif text-[clamp(3rem,6vw,5rem)] leading-[1]">
              {footer.joinTitle}
            </h2>
            <div className="mt-10 max-w-[44ch] space-y-6">
              <MediaPlaceholder
                label={footer.schedule.label}
                ratio="16/5"
                tone="dark"
                className="w-full"
              />
              <p className="text-blush/80">{footer.schedule.text}</p>
              <a
                href={footer.rsvp.href}
                className="inline-flex items-center border-b border-lagoon pb-1 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
              >
                {footer.rsvp.label}
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={0.08}
            className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:col-span-6 lg:col-start-7"
          >
            <div className="space-y-4">
              <p className="eyebrow text-blush/70">{footer.instagram.label}</p>
              <a
                href={footer.instagram.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-serif text-3xl text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
              >
                {footer.instagram.handle}
              </a>
            </div>
            <div className="space-y-4">
              <p className="eyebrow text-blush/70">{footer.email.label}</p>
              <a
                href={footer.email.href}
                className="block font-serif text-3xl text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
              >
                {footer.email.address}
              </a>
            </div>
            <form className="space-y-4 sm:col-span-2" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="newsletter-email" className="eyebrow block text-blush/70">
                {footer.newsletter.title}
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder={footer.newsletter.placeholder}
                  aria-label={footer.newsletter.label}
                  className="min-w-0 flex-1 border-b border-blush/40 bg-transparent py-3 font-sans text-base text-blush placeholder:text-blush/60 focus:border-lagoon focus:outline-none"
                />
                <button type="submit" className="btn-primary">
                  {footer.newsletter.button}
                </button>
              </div>
            </form>
            <div className="flex flex-wrap gap-x-10 gap-y-4 sm:col-span-2">
              <a
                href={footer.donate.href}
                className="font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-blush transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
              >
                {footer.donate.label}
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
    </footer>
  );
}
