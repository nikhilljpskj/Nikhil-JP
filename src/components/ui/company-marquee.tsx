'use client';

import Image from 'next/image';
import { useMemo } from 'react';

type MarqueeItem = {
  name: string;
  logo: string;     // /public/companies/*.svg|png
  url?: string;
};

export default function CompanyMarquee({
  items,
  itemsPerView = 6,   // set to 5 if you prefer
  speed = 26,         // seconds per full loop
  gap = 28,           // px gap between items
  grayscaleAtRest = true,
}: {
  items: MarqueeItem[];
  itemsPerView?: 5 | 6;
  speed?: number;
  gap?: number;                 // in px
  grayscaleAtRest?: boolean;
}) {
  // Duplicate once for seamless scroll
  const strip = useMemo(() => [...items, ...items], [items]);

  return (
    <div
      className="group relative overflow-hidden"
      aria-label="Company logos marquee"
      style={{
        // Container queries allow us to size items as a fraction of the container width
        // so we always show exactly itemsPerView at a time.
        // (Supported by all modern browsers.)
        containerType: 'inline-size' as any,
      }}
    >
      {/* Soft edge fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent"
      />

      <ul
        className="flex w-max items-center"
        style={
          {
            gap: `${gap}px`,
            animation: `marquee ${speed}s linear infinite`,
            // pause on hover (CSS only, no JS)
            animationPlayState: 'running',
          } as React.CSSProperties
        }
      >
        {strip.map((item, idx) => {
          const content = (
            <div
              className={`flex h-14 items-center justify-center rounded-xl border border-white/60 bg-white/80 px-4 backdrop-blur transition will-change-transform hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(2,6,23,0.06)] ${
                grayscaleAtRest ? 'grayscale hover:grayscale-0' : ''
              }`}
              // Show exactly N per view using container query units
              style={{
                flex: `0 0 calc(100cqw / ${itemsPerView})`,
              }}
            >
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
          );

          return (
            <li key={`${item.name}-${idx}`} className="list-none">
              {item.url ? (
                <a href={item.url} aria-label={item.name} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                content
              )}
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        .group:hover ul {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .group ul {
            animation: none !important;
            transform: none !important;
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
