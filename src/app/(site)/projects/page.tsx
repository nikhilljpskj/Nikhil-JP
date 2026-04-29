'use client';

import Container from '@/components/ui/container';
import type { Project } from '@/components/ui/project-card';
import { PROJECTS } from '@/content/projects';
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Filter,
  Github,
  Layers3,
  MonitorPlay,
  Sparkles,
  X,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

const TAGS = ['All', 'Web', 'ML', 'Tools'] as const;

function cleanUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function shortDescription(text: string) {
  return text.split('.')[0] || text;
}

function ProjectPreview({ project, compact = false }: { project: Project; compact?: boolean }) {
  const aspect = compact ? 'aspect-[4/3]' : 'aspect-[16/9]';

  if (project.href) {
    return (
      <div
        className={`relative ${aspect} overflow-hidden rounded-2xl border border-slate-800 bg-slate-950`}
      >
        <div className="absolute left-0 right-0 top-0 z-10 flex h-9 items-center gap-2 border-b border-white/10 bg-slate-950/95 px-3 text-[11px] text-slate-300 backdrop-blur">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-2 min-w-0 flex-1 truncate rounded-md bg-white/10 px-2 py-1">
            {cleanUrl(project.href)}
          </span>
          <ExternalLink size={13} aria-hidden />
        </div>
        <iframe
          src={project.href}
          title={`${project.title} live preview`}
          loading={compact ? 'lazy' : 'eager'}
          scrolling="no"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          referrerPolicy="no-referrer-when-downgrade"
          className="pointer-events-none h-full w-full overflow-hidden border-0 pt-9"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative ${aspect} overflow-hidden rounded-2xl border border-slate-200 bg-slate-100`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes={compact ? '9rem' : '(min-width:1024px) 64vw, 100vw'}
          className="object-cover"
          priority={!compact}
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc,#dbeafe_48%,#eef2ff)]" />
      )}
    </div>
  );
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-600"
        >
          Open live <ArrowUpRight size={15} />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-indigo-200 hover:text-indigo-600"
        >
          <Github size={15} /> Source
        </a>
      )}
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] bg-slate-950/35 p-3 backdrop-blur-md md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={onClose}
    >
      <div
        className="mx-auto flex max-h-[calc(100vh-1.5rem)] max-w-7xl flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_35px_120px_rgba(15,23,42,0.28)] md:max-h-[calc(100vh-3rem)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur md:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
              {project.href ? 'Live project' : 'Project detail'}
            </p>
            <h2
              id="project-modal-title"
              className="mt-1 text-2xl font-semibold tracking-tight text-slate-950 md:text-4xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-700 transition hover:bg-slate-100 hover:text-slate-950"
          >
            <X size={20} />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-[1.45fr_0.8fr]">
          <div className="bg-slate-50 p-3 md:p-5">
            <ProjectPreview project={project} />
          </div>

          <aside className="space-y-6 border-t border-slate-200 bg-white p-5 md:p-6 lg:border-l lg:border-t-0">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                <Layers3 size={16} /> Details
              </div>
              <p className="mt-3 text-base leading-8 text-slate-700">{project.description}</p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                <Code2 size={16} /> Tech Used
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                Category
              </div>
              <div className="mt-2 text-lg font-semibold text-slate-950">{project.tag}</div>
              {project.href && (
                <div className="mt-1 truncate text-sm text-slate-500">{cleanUrl(project.href)}</div>
              )}
            </div>

            <ProjectActions project={project} />
          </aside>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [tag, setTag] = useState<(typeof TAGS)[number]>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const items = useMemo(
    () => (tag === 'All' ? PROJECTS : PROJECTS.filter((project) => project.tag === tag)),
    [tag],
  );

  const liveCount = PROJECTS.filter((project) => project.href).length;

  return (
    <Container>
      <main className="py-12 md:py-16">
        <section className="grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase text-indigo-700">
              <Sparkles size={14} /> Work index
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              A sharp project index with deeper views on demand.
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              ['Projects', PROJECTS.length],
              ['Live sites', liveCount],
              ['Categories', TAGS.length - 1],
            ].map(([label, value]) => (
              <div key={label} className="border-l border-slate-200 pl-4">
                <div className="text-3xl font-semibold tracking-tight text-slate-950">{value}</div>
                <div className="mt-1 text-xs font-semibold uppercase text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="sticky top-[73px] z-20 mt-6 border-y border-slate-200 bg-white/90 py-3 backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Filter size={17} /> Showing {items.length} project{items.length === 1 ? '' : 's'}
            </div>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTag(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    tag === item
                      ? 'bg-slate-950 text-white'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:text-indigo-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-6 divide-y divide-slate-200 border-y border-slate-200">
          {items.map((project, index) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
              className="group grid w-full gap-4 py-5 text-left transition hover:bg-slate-50/80 md:grid-cols-[4.5rem_1fr_auto] md:items-center md:px-3"
            >
              <div className="flex items-center gap-3 md:block">
                <span className="text-sm font-semibold text-slate-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600 md:mt-3 md:inline-flex">
                  {project.tag}
                </span>
              </div>

              <div className="min-w-0">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-950 transition group-hover:text-indigo-600">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  {shortDescription(project.description)}.
                </p>
              </div>

              <div className="flex items-center gap-4 md:justify-end">
                <span className="hidden max-w-[14rem] truncate text-sm text-slate-400 lg:block">
                  {project.href ? cleanUrl(project.href) : project.tech.slice(0, 2).join(' / ')}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition group-hover:border-indigo-200 group-hover:bg-indigo-50 group-hover:text-indigo-600">
                  {project.href ? <MonitorPlay size={18} /> : <ArrowUpRight size={18} />}
                </span>
              </div>
            </button>
          ))}
        </section>

        <section className="mt-8 flex flex-col gap-3 border border-slate-200 bg-slate-950 px-5 py-4 text-white md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-sm font-semibold">Open any project for the full preview.</div>
            <p className="mt-1 text-sm text-slate-400">
              Live website embeds are scroll-free; use the action buttons in the popup for the
              complete site.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Code2 size={16} /> Details on click
          </div>
        </section>
      </main>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </Container>
  );
}
