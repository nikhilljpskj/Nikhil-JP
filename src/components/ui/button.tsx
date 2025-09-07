'use client';

import { cn } from '@/components/ui/utils';
import { forwardRef } from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60';
    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2',
      lg: 'px-5 py-2.5 text-base'
    }[size];

    const variants = {
      primary:
        // gradient bg + subtle lift + soft shadow
        'text-white bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 ' +
        'shadow-[0_10px_30px_rgba(2,6,23,0.08)] hover:translate-y-[-1px] active:translate-y-[0px]',
      outline:
        // glass outline chip
        'bg-white/70 backdrop-blur text-slate-800 border border-white/60 ' +
        'hover:shadow-[0_10px_30px_rgba(2,6,23,0.08)] active:translate-y-[0px]',
      ghost: 'text-slate-700 hover:bg-slate-100/70'
    }[variant];

    return (
      <button ref={ref} className={cn(base, sizes, variants, 'will-change-transform', className)} {...props} />
    );
  },
);
Button.displayName = 'Button';
