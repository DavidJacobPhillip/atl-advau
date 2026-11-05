import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import type { MediaType } from '@/data/content';
import { classNames } from '@/lib/classNames';

interface MediaPlaceholderProps {
  label: string;
  ratio?: string;
  type?: MediaType;
  src?: string;
  poster?: string;
  alt?: string;
  tone?: 'light' | 'dark';
  fill?: boolean;
  autoPlay?: boolean;
  playInView?: boolean;
  controls?: boolean;
  muted?: boolean;
  className?: string;
}

export default function MediaPlaceholder({
  label,
  ratio = '16/9',
  type = 'photo',
  src,
  poster,
  alt,
  tone = 'light',
  fill = false,
  autoPlay = false,
  playInView = false,
  controls = false,
  muted = true,
  className,
}: MediaPlaceholderProps) {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = type === 'video';
  const canPlay = !reduceMotion || controls;
  const showVideo = isVideo && Boolean(src) && canPlay;
  const still = isVideo ? poster : src;

  useEffect(() => {
    const video = videoRef.current;
    if (!playInView || !video || reduceMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [playInView, reduceMotion, src]);

  const frameStyle = fill ? undefined : { aspectRatio: ratio };
  const frameClass = classNames(fill ? 'absolute inset-0 overflow-hidden' : 'relative overflow-hidden rounded-md', className);

  let content;
  if (showVideo) {
    content = (
      <video
        ref={videoRef}
        src={src}
        poster={poster || undefined}
        muted={muted}
        loop={!controls}
        playsInline
        autoPlay={autoPlay && !playInView}
        controls={controls}
        preload="metadata"
        aria-label={alt ?? label}
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  } else if (still) {
    content = (
      <img
        src={still}
        alt={alt ?? label}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    );
  } else {
    content = (
      <div
        role="img"
        aria-label={label}
        className={classNames(
          'absolute inset-0 flex items-center justify-center p-6 text-center',
          tone === 'light' ? 'bg-[#EDE3DF] text-deep' : 'bg-[#071719] text-blush/80'
        )}
      >
        <span className="font-sans text-[11px] font-medium uppercase tracking-[0.16em]">
          {label}
        </span>
      </div>
    );
  }

  return (
    <div className={frameClass} style={frameStyle}>
      {content}
    </div>
  );
}
