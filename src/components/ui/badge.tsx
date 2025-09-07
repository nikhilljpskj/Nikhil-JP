import { PropsWithChildren } from 'react';

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100/90 px-3 py-1 text-xs font-medium text-slate-700 border border-white/60">
      {children}
    </span>
  );
}
