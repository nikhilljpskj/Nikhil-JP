import { Github, Linkedin, Globe } from 'lucide-react';
import { CONTACT } from '@/lib/constants';

export default function SocialChips() {
  const items = [
    { icon: Linkedin, href: CONTACT.linkedin, label: 'LinkedIn' },
    { icon: Github, href: CONTACT.github, label: 'GitHub' },
    { icon: Globe, href: CONTACT.portfolio, label: 'Website' }
  ] as const;

  return (
    <div className="flex flex-wrap gap-2">
      {items.map((i) => (
        <a
          key={i.label}
          href={i.href}
          aria-label={i.label}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/75 px-3 py-1.5 text-sm text-slate-700 backdrop-blur transition will-change-transform hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
        >
          <i.icon size={16} />
          {i.label}
        </a>
      ))}
    </div>
  );
}
