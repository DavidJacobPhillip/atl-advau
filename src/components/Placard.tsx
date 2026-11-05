import { classNames } from '@/lib/classNames';

interface PlacardProps {
  title: string;
  lines?: string[];
  link?: { href: string; label: string };
  tone?: 'light' | 'dark';
  className?: string;
}

export default function Placard({ title, lines = [], link, tone = 'light', className }: PlacardProps) {
  return (
    <figcaption
      className={classNames(
        'mt-5 space-y-1.5 border-l border-lagoon/60 pl-4',
        tone === 'dark' ? 'text-blush' : 'text-deep',
        className
      )}
    >
      <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em]">{title}</p>
      {lines.map((line) => (
        <p
          key={line}
          className={classNames(
            'font-sans text-[11px] font-medium uppercase tracking-[0.16em]',
            tone === 'dark' ? 'text-blush/70' : 'text-deep/75'
          )}
        >
          {line}
        </p>
      ))}
      {link && (
        <p className="font-sans text-[11px] font-medium uppercase tracking-[0.16em]">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${link.label}: ${title}`}
            className="underline decoration-lagoon underline-offset-4 transition-colors duration-300 hover:text-lagoon focus-visible:outline-lagoon"
          >
            {link.label}
          </a>
        </p>
      )}
    </figcaption>
  );
}
