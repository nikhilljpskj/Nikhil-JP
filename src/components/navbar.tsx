'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const toggle = useCallback(() => setOpen((s) => !s), []);

  return (
    <div className="sticky top-0 z-50 border-b border-white/60 bg-white/65 backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5 min-h-[72px]">
        {/* Brand */}
        <Link href="/" className="text-xl md:text-2xl font-semibold tracking-tight">
          <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
            NP
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden gap-7 md:flex">
          {NAV_LINKS.map((n) => {
            const active = pathname === n.href;
            return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className={`text-sm transition hover:text-slate-950 ${
                    active ? 'text-slate-950' : 'text-slate-600'
                  }`}
                >
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact">
            <Button variant="primary" size="md">
              Let’s Build Together
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={toggle}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-controls="mobile-menu"
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-xl p-2 text-slate-800 md:hidden
                     ring-1 ring-transparent transition hover:bg-white/80 hover:ring-black/5"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile dropdown (anchored to nav) */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute left-0 right-0 top-full origin-top overflow-hidden rounded-b-2xl
                      border-t border-white/60 bg-white/95 backdrop-blur
                      transition-[opacity,transform] duration-200
                      ${open ? 'opacity-100 scale-y-100' : 'pointer-events-none opacity-0 scale-y-95'}`}
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((n) => {
              const active = pathname === n.href;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className={`block rounded-xl px-3 py-2 text-base transition hover:bg-white
                                ${active ? 'text-slate-950' : 'text-slate-700'}`}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link href="/contact" className="block">
                <Button className="w-full" variant="primary" size="md">
                  Let’s Build Together
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Click-away backdrop for mobile */}
      {open && (
        <button
          aria-hidden
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 block cursor-pointer bg-black/0 md:hidden"
        />
      )}
    </div>
  );
}
