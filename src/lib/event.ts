import { event } from '@/data/content';

function pad(value: number): string {
  return String(value).padStart(2, '0');
}

function todayIsoDate(now: Date): string {
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
}

export function isEventPast(now: Date = new Date()): boolean {
  return event.isoDate < todayIsoDate(now);
}

function toIcsUtc(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

export function buildCalendarHref(): string {
  const start = new Date(`${event.isoDate}T${event.startTime}:00${event.utcOffset}`);
  const end = new Date(`${event.isoDate}T${event.endTime}:00${event.utcOffset}`);
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Atlanta Adavu//Events//EN',
    'BEGIN:VEVENT',
    `UID:${event.slug}@atlantaadavu`,
    `DTSTAMP:${toIcsUtc(new Date())}`,
    `DTSTART:${toIcsUtc(start)}`,
    `DTEND:${toIcsUtc(end)}`,
    `SUMMARY:${event.title}: ${event.subtitle}`,
    `LOCATION:${event.venue}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ];
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(lines.join('\r\n'))}`;
}
