import MediaPlaceholder from '@/components/MediaPlaceholder';
import Reveal from '@/components/Reveal';
import { board, type BoardMember } from '@/data/content';

const DOT_COUNT = 15;

function BoardCard({ member, delay }: { member: BoardMember; delay: number }) {
  return (
    <Reveal delay={delay}>
      <article>
        <MediaPlaceholder
          label={member.portrait.label}
          ratio={member.portrait.ratio}
          type={member.portrait.type}
          src={member.portrait.src}
          alt={member.portrait.alt}
          className="w-full"
        />
        <h3 className="mt-8 font-serif text-[32px] leading-[1.2] text-deep">{member.name}</h3>
        <p className="placard mt-3">{member.role}</p>
      </article>
    </Reveal>
  );
}

export default function Board() {
  return (
    <section id="board" aria-labelledby="board-title" className="scroll-mt-20 pb-40 pt-40">
      <div className="page-container">
        <div aria-hidden="true" className="flex items-center justify-between">
          {Array.from({ length: DOT_COUNT }, (_, index) => (
            <span key={index} className="h-1.5 w-1.5 rounded-full bg-lagoon" />
          ))}
        </div>

        <Reveal className="mt-24 grid grid-cols-12 gap-x-6">
          <div className="col-span-12 lg:col-span-6">
            <p className="eyebrow text-deep/80">{board.eyebrow}</p>
            <h2
              id="board-title"
              className="mt-6 font-serif text-[clamp(3.5rem,7vw,6rem)] leading-[1]"
            >
              {board.title}
            </h2>
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <MediaPlaceholder
            label={board.groupPhoto.label}
            ratio={board.groupPhoto.ratio}
            type={board.groupPhoto.type}
            src={board.groupPhoto.src}
            alt={board.groupPhoto.alt}
            className="w-full"
          />
        </Reveal>

        <ul className="mt-32 grid gap-x-8 gap-y-24 sm:grid-cols-2 lg:grid-cols-4">
          {board.members.map((member, index) => (
            <li key={member.id}>
              <BoardCard member={member} delay={(index % 4) * 0.06} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
