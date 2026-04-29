import Image from 'next/image';
import { Badge } from './badge';
import { Card, CardBody } from './card';
import { ExternalLink, Github, Link as LinkIcon } from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
  tag: 'Web' | 'ML' | 'Tools';
  image?: string;
};

function ProjectPreview({ p }: { p: Project }) {
  if (p.href) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200/80 bg-slate-950 shadow-inner">
        <div className="absolute left-0 right-0 top-0 z-10 flex h-8 items-center gap-2 border-b border-white/10 bg-slate-950/90 px-3 text-[11px] text-slate-300 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-rose-400" />
          <span className="h-2 w-2 rounded-full bg-amber-300" />
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/10 px-2 py-1">
            {p.href.replace(/^https?:\/\//, '').replace(/\/$/, '')}
          </span>
          <ExternalLink size={13} aria-hidden />
        </div>
        <iframe
          src={p.href}
          title={`${p.title} live preview`}
          loading="lazy"
          scrolling="no"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none h-full w-full overflow-hidden border-0 pt-8"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100">
      {p.image ? (
        <Image
          src={p.image}
          alt={`${p.title} preview`}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={false}
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc,#e0f2fe_55%,#eef2ff)]" />
      )}
    </div>
  );
}

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group h-full">
      <Card className="h-full transition duration-300 will-change-transform group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        <CardBody className="flex h-full flex-col p-4 sm:p-5">
          <ProjectPreview p={p} />

          <div className="mt-5 flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-950">{p.title}</h3>
              <p className="mt-1 text-xs uppercase text-slate-400">
                {p.href ? 'Live project' : 'Case study'}
              </p>
            </div>
            <Badge>{p.tag}</Badge>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-600">{p.description}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex gap-3 pt-5 text-sm">
            {p.href && (
              <a
                className="inline-flex items-center gap-1.5 font-medium text-slate-900 transition hover:text-indigo-600"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon size={16} /> Live
              </a>
            )}
            {p.repo && (
              <a
                className="inline-flex items-center gap-1.5 font-medium text-slate-700 transition hover:text-indigo-600"
                href={p.repo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} /> Code
              </a>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
