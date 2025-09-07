'use client';

import { motion } from 'framer-motion';
import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{
  id?: string;
  title?: string;
  description?: ReactNode; // supports JSX
  eyebrow?: string;
  className?: string;
  side?: ReactNode;        // optional right-side content
  hoverGlow?: boolean;     // NEW: enable section-level hover glow
  eyebrowClassName?: string;
  titleClassName?: string;
}>;

export default function Section({
  id,
  title,
  description,
  eyebrow,
  side,
  children,
  eyebrowClassName,
  titleClassName,
  hoverGlow = false,
}: Props) {
    const HeaderLeft = (
    <>
      {eyebrow && (
        <div className={["uppercase tracking-wider text-slate-500", eyebrowClassName || "text-xs"].join(' ')}>
          {eyebrow}
        </div>
      )}
      {title && (
        <h2 className={["mt-1 font-semibold tracking-tight", titleClassName || "text-3xl md:text-4xl"].join(' ')}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500">
            {title}
          </span>
        </h2>
      )}
      {description && <div className="mt-3 text-[16px] md:text-[17px] leading-7 md:leading-8 text-slate-600 space-y-3">{description}</div>}
    </>
  );

  return (
    <section id={id} className="relative py-16 md:py-24">
      {/* subtle radial glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-6 -z-10 h-64 w-64 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/10 to-sky-400/10 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Hoverable wrapper for the entire section content */}
        <div
          className={[
            hoverGlow ? 'group relative rounded-3xl transition-shadow duration-300' : '',
            hoverGlow ? 'hover:shadow-[0_18px_50px_rgba(2,6,23,0.14)]' : '',
          ].join(' ')}
        >
          {/* soft gradient highlight on hover (no border) */}
          {hoverGlow && (
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300
                         group-hover:opacity-100 bg-gradient-to-tr from-indigo-500/8 via-transparent to-sky-500/8"
            />
          )}

          <div className="relative space-y-6">
            <header className="mb-2">
              {side ? (
                <div className="grid items-start gap-8 md:grid-cols-2">
                  <div className="max-w-3xl">{HeaderLeft}</div>
                  <div>{side}</div>
                </div>
              ) : (
                <div className="max-w-3xl">{HeaderLeft}</div>
              )}
            </header>

            {children}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
