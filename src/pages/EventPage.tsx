import EventCast from '@/components/event/EventCast';
import EventDetails from '@/components/event/EventDetails';
import EventHero from '@/components/event/EventHero';
import EventRehearsal from '@/components/event/EventRehearsal';
import EventStory from '@/components/event/EventStory';
import EventTickets from '@/components/event/EventTickets';
import { isEventPast } from '@/lib/event';

export default function EventPage() {
  const isPast = isEventPast();

  return (
    <>
      <EventHero isPast={isPast} />
      <EventStory />
      <EventTickets isPast={isPast} />
      <EventDetails />
      <EventCast />
      <EventRehearsal />
    </>
  );
}
