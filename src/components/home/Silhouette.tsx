import silhouette1 from '@/assets/silhouette-1.svg';
import silhouette2 from '@/assets/silhouette-2.svg';
import silhouette3 from '@/assets/silhouette-3.svg';
import silhouette4 from '@/assets/silhouette-4.svg';
import { classNames } from '@/lib/classNames';

// Widths and heights are each figure's size in silhouettes.svg. Sharing one
// scale keeps the dancers in proportion to one another. footX and footY locate
// the foot the footstep path touches, as a fraction of the figure's size.
const SCALE = 0.2;

const SILHOUETTES = [
  { src: silhouette1, width: 251.14, height: 593.63, footX: 0.35, footY: 1 },
  { src: silhouette2, width: 584.35, height: 517.74, footX: 0.95, footY: 0.97 },
  { src: silhouette3, width: 316.57, height: 529.39, footX: 0.45, footY: 1 },
  { src: silhouette4, width: 350.87, height: 620.43, footX: 0.46, footY: 1 },
];

export default function Silhouette({ index, className }: { index: number; className?: string }) {
  const { src, width, height, footX, footY } = SILHOUETTES[index];

  return (
    <img
      src={src}
      alt=""
      data-silhouette
      data-foot-x={footX}
      data-foot-y={footY}
      width={Math.round(width * SCALE)}
      height={Math.round(height * SCALE)}
      className={classNames('block', className)}
    />
  );
}
