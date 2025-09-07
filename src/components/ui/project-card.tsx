import Image from 'next/image';
import { Badge } from './badge';
import { Card, CardBody } from './card';
import { Github, Link as LinkIcon } from 'lucide-react';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  href?: string;
  repo?: string;
  tag: 'Web' | 'ML' | 'Tools';
  image?: string; // ← NEW: preview image in /public/projects/*
};

export default function ProjectCard({ p }: { p: Project }) {
  const Img = (
    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-white/70 ring-1 ring-white/60">
      {p.image ? (
        <Image
          src={p.image}
          alt={`${p.title} — preview`}
          fill
          sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
          className="object-cover"
          priority={false}
        />
      ) : (
        <div className="absolute inset-0 animate-pulse bg-slate-100" />
      )}
    </div>
  );

  return (
    <div className="group">
      <Card className="transition will-change-transform group-hover:-translate-y-[2px]">
        <CardBody>
          {/* Preview image (clickable if live link exists) */}
          {p.href ? (
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${p.title} live`}
              className="block"
            >
              {Img}
            </a>
          ) : (
            Img
          )}

          {/* Title + tag */}
          <div className="mt-4 flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
            <Badge>{p.tag}</Badge>
          </div>

          {/* Description */}
          <p className="mt-2 text-slate-600">{p.description}</p>

          {/* Tech pills */}
          <div className="mt-3 flex flex-wrap gap-2">
            {p.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/60 bg-slate-100/90 px-2.5 py-1 text-xs text-slate-700"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-4 flex gap-3 text-sm">
            {p.href && (
              <a
                className="inline-flex items-center gap-1 text-slate-800 hover:underline"
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon size={16} /> Live
              </a>
            )}
            {p.repo && (
              <a
                className="inline-flex items-center gap-1 text-slate-800 hover:underline"
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
