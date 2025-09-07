import { cn } from '@/components/ui/utils';
import { PropsWithChildren } from 'react';

export function Card({ className, children }: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={cn('relative rounded-2xl', className)}>
      <div className="rounded-2xl p-[1px] bg-gradient-to-r from-indigo-600/10 via-blue-600/10 to-sky-500/10">
        <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
          {children}
        </div>
      </div>
    </div>
  );
}

export function CardBody({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('p-6', className)}>{children}</div>;
}

export function CardHeader({ className, children }: PropsWithChildren<{ className?: string }>) {
  return <div className={cn('p-6 border-b border-white/60', className)}>{children}</div>;
}
