import Link from 'next/link';
import { CONTACT, NAV_LINKS, SITE } from '@/lib/constants';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code2,
  SquareCode,
  type LucideIcon, // ✅ for icon typing
} from 'lucide-react';

export default function Footer() {
  // quick links split into 2 columns, max 4 each
  const leftLinks = NAV_LINKS.slice(0, 4);
  const rightLinks = NAV_LINKS.slice(4, 8);

  const socials: { label: string; href: string; Icon: LucideIcon }[] = [
    { label: 'LinkedIn', href: CONTACT.linkedin, Icon: Linkedin },
    { label: 'GitHub', href: CONTACT.github, Icon: Github },
    { label: 'HackerRank', href: 'https://www.hackerrank.com/profile/nikhiljp_skj', Icon: Code2 },
    { label: 'LeetCode', href: 'https://leetcode.com/u/nikhiljp/', Icon: SquareCode },
  ];

  const SocialChip = ({ href, label, Icon }: { href: string; label: string; Icon: LucideIcon }) => (
    <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        title={label}
        className="inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80
                   p-2 md:px-3 md:py-1.5 text-sm text-slate-700 backdrop-blur
                   transition hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
      >
        <Icon className="h-5 w-5 md:h-4 md:w-4" />
        <span className="hidden md:inline">{label}</span>
      </a>
    </span>
  );

  return (
    <footer className="mt-24 border-t border-white/60 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand & summary */}
          <div className="md:col-span-5">
            <div className="text-xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                {SITE.name}
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              {SITE.description}
            </p>

            {/* Socials — icons only on mobile */}
            <div className="mt-6 flex flex-wrap items-center gap-2 md:gap-3">
              {socials.map((s) => (
                <SocialChip key={s.label} href={s.href} label={s.label} Icon={s.Icon} />
              ))}
            </div>
          </div>

          {/* Quick Links (2 columns) */}
          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Quick Links
            </div>
            <div className="mt-3 grid grid-cols-2 gap-x-8 gap-y-1">
              <ul className="space-y-2 text-[15px] leading-6">
                {leftLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-slate-700 transition hover:text-slate-950">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2 text-[15px] leading-6">
                {rightLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-slate-700 transition hover:text-slate-950">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Contact
            </div>
            <div className="mt-3 space-y-3 text-[15px] leading-6 text-slate-700">
              <div className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 text-slate-500" />
                <span className="tracking-normal">{CONTACT.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="mt-1 h-4 w-4 text-slate-500" />
                <a href={`mailto:${CONTACT.email}`} className="underline-offset-2 hover:underline">
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-1 h-4 w-4 text-slate-500" />
                <a href={`tel:${CONTACT.phone}`} className="underline-offset-2 hover:underline">
                  {CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-white/60" />

        {/* Bottom line */}
        <div className="pt-6 text-xs tracking-normal text-slate-500 md:flex md.items-center md:justify-between">
          <div>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 md:mt-0">
            <span>{CONTACT.location}</span>
            <span className="hidden md:inline">•</span>
            <Link className="hover:text-slate-700" href="/">Privacy</Link>
            <span className="hidden md:inline">•</span>
            <Link className="hover:text-slate-700" href="/">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
