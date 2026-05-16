import Image from 'next/image';
import { Card, CardBody } from './card';
import { ExternalLink, Github } from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
  tag: 'Web' | 'ML' | 'Tools';
  image?: string;
};

const TAG_STYLES: Record<Project['tag'], string> = {
  Web: 'bg-indigo-500/90 text-white',
  ML: 'bg-violet-500/90 text-white',
  Tools: 'bg-sky-500/90 text-white',
};

const PLACEHOLDER_GRADIENTS: Record<Project['tag'], string> = {
  Web: 'from-indigo-900 via-slate-800 to-slate-900',
  ML: 'from-violet-900 via-slate-800 to-slate-900',
  Tools: 'from-sky-900 via-slate-800 to-slate-900',
};

function ProjectPreview({ p }: { p: Project }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900">
      {/* Image or gradient placeholder */}
      {p.image ? (
        <Image
          src={p.image}
          alt={`${p.title} preview`}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          priority={false}
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${PLACEHOLDER_GRADIENTS[p.tag]} flex items-center justify-center`}
        >
          <span className="text-3xl font-bold tracking-tighter text-white/20 select-none">
            {p.title}
          </span>
        </div>
      )}

      {/* Subtle bottom scrim so text on image reads well */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Tag pill — top-right */}
      <span
        className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm ${TAG_STYLES[p.tag]}`}
      >
        {p.tag}
      </span>
    </div>
  );
}

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <div className="group h-full">
        <Card className="h-full transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]">
          <CardBody className="flex h-full flex-col p-4 sm:p-5">
            {/* Preview thumbnail */}
            <ProjectPreview p={p} />

            {/* Title + status row */}
            <div className="mt-4 flex items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-semibold leading-snug tracking-tight text-slate-950">
                  {p.title}
                </h3>
                <p className="mt-0.5 text-[11px] uppercase tracking-widest text-slate-400">
                  {p.href ? 'Live · Production' : 'Case study'}
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-2.5 text-sm leading-[1.65] text-slate-600 line-clamp-2">
              {p.description}
            </p>

            {/* Tech badges */}
            <div className="mt-3 flex flex-nowrap gap-1.5 overflow-hidden">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-[3px] text-[11px] font-medium text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Divider + action links */}
            <div className="mt-auto pt-4">
              <div className="mb-3 h-px w-full bg-gradient-to-r from-slate-200/80 via-slate-200 to-slate-200/0" />
              <div className="flex gap-4 text-sm">
                {p.href && (
                  <a
                    className="inline-flex items-center gap-1.5 font-medium text-indigo-600 transition hover:text-indigo-700"
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={14} />
                    Live site
                  </a>
                )}
                {p.repo && (
                  <a
                    className="inline-flex items-center gap-1.5 font-medium text-slate-500 transition hover:text-slate-700"
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={14} />
                    Source
                  </a>
                )}
              </div>
            </div>
          </CardBody>
        </Card>
    </div>
  );
}
