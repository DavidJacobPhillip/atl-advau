import { classNames } from '@/lib/classNames';

interface PlacardProps {
  title: string;
  lines?: string[];
  tone?: 'light' | 'dark';
  className?: string;
}

export default function Placard({ title, lines = [], tone = 'light', className }: PlacardProps) {
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
    </figcaption>
  );
}
