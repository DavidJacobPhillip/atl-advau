import Reveal from '@/components/Reveal';
import { event } from '@/data/content';
import { buildCalendarHref } from '@/lib/event';

export default function EventTickets({ isPast }: { isPast: boolean }) {
  const { tickets } = event;

  return (
    <section
      id="tickets"
      aria-labelledby="tickets-title"
      className="scroll-mt-20 border-t border-deep/15 pb-40 pt-40"
    >
      <div className="page-container">
        <Reveal className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow text-deep/80">{tickets.eyebrow}</p>
            <h2
              id="tickets-title"
              className="mt-6 font-serif text-[clamp(3rem,6vw,5.5rem)] leading-[1.05]"
            >
              {isPast ? event.thankYou.title : tickets.title}
            </h2>
          </div>
        </Reveal>

        {isPast ? (
          <Reveal className="mt-16 max-w-[60ch]">
            <p className="text-[17px] leading-[1.6]">{event.thankYou.text}</p>
          </Reveal>
        ) : (
          <>
            <ul className="mt-20 grid gap-6 md:grid-cols-2">
              {tickets.tiers.map((tier) => (
                <li key={tier.id}>
                  <Reveal className="flex aspect-square flex-col justify-between border border-deep/20 bg-white/60 p-8 sm:p-10">
                    <div className="flex items-start justify-between gap-4">
                      <p className="placard">{tier.name}</p>
                      {tier.note && (
                        <span className="bg-mid px-3 py-1.5 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-white">
                          {tier.note}
                        </span>
                      )}
                    </div>
                    <p className="font-serif text-[clamp(4rem,7vw,6rem)] leading-none text-deep">
                      ${tier.price}
                    </p>
                    <a
                      href={tickets.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${event.registerLabel}: ${tier.name}`}
                      className="btn-primary w-full"
                    >
                      {event.registerLabel}
                    </a>
                  </Reveal>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <a
                href={buildCalendarHref()}
                download={tickets.calendarFileName}
                className="inline-flex items-center border-b border-mid pb-1 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-mid transition-colors duration-300 hover:border-lagoon hover:text-lagoon focus-visible:outline-lagoon"
              >
                {tickets.calendarLabel}
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
