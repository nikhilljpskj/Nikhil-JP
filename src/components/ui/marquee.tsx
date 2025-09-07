'use client';

import { PropsWithChildren, useRef } from 'react';

export default function Marquee({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      onMouseEnter={() => ref.current?.style.setProperty('animation-play-state', 'paused')}
      onMouseLeave={() => ref.current?.style.setProperty('animation-play-state', 'running')}
    >
      <div
        ref={ref}
        className="flex min-w-full animate-[marquee_28s_linear_infinite]"
        style={{ gap: '3rem' }}
      >
        {children}
        {children}
      </div>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          div[ref] { animation: none !important; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
