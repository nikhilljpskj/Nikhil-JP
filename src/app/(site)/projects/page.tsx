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
  MonitorPlay,
  Sparkles,
} from 'lucide-react';
import Image from 'next/image';
import { useMemo, useState } from 'react';

const TAGS = ['All', 'Web', 'ML', 'Tools'] as const;

function cleanUrl(url: string) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

function ProjectFrame({ project, large = false }: { project: Project; large?: boolean }) {
  const aspect = large ? 'aspect-[16/9] lg:aspect-[16/8.6]' : 'aspect-[16/10]';

  if (project.href) {
    return (
      <div
        className={`relative ${aspect} overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-950 shadow-[0_24px_70px_rgba(15,23,42,0.18)]`}
      >
        <div className="absolute left-0 right-0 top-0 z-10 flex h-9 items-center gap-2 border-b border-white/10 bg-slate-950/92 px-3 text-[11px] text-slate-300 backdrop-blur">
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
          loading={large ? 'eager' : 'lazy'}
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
      className={`relative ${aspect} overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-100 shadow-[0_18px_55px_rgba(15,23,42,0.10)]`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          sizes={large ? '(min-width:1024px) 58vw, 100vw' : '(min-width:1024px) 33vw, 100vw'}
          className="object-cover"
          priority={large}
        />
      ) : (
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc,#dbeafe_52%,#f1f5f9)]" />
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.06)] backdrop-blur">
      <div className="text-2xl font-semibold tracking-tight text-slate-950">{value}</div>
      <div className="mt-1 text-xs font-medium uppercase text-slate-500">{label}</div>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-indigo-600"
        >
          Live <ArrowUpRight size={15} />
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-800 transition hover:border-indigo-200 hover:text-indigo-600"
        >
          <Github size={15} /> Code
        </a>
      )}
    </div>
  );
}

function CompactProject({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group grid gap-5 rounded-[1.5rem] border border-slate-200 bg-white/82 p-4 shadow-[0_14px_45px_rgba(15,23,42,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)] lg:grid-cols-[0.95fr_1.1fr]">
      <ProjectFrame project={project} />
      <div className="flex min-w-0 flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-950">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase text-slate-400">
                  {project.href ? 'Live build' : 'Project archive'}
                </p>
              </div>
            </div>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {project.tag}
            </span>
          </div>
          <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <ProjectLinks project={project} />
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  const [tag, setTag] = useState<(typeof TAGS)[number]>('All');
  const items = useMemo(
    () => (tag === 'All' ? PROJECTS : PROJECTS.filter((project) => project.tag === tag)),
    [tag],
  );
  const featured = items.find((project) => project.href) ?? items[0];
  const remaining = items.filter((project) => project.title !== featured?.title);
  const liveCount = PROJECTS.filter((project) => project.href).length;

  return (
    <Container>
      <main className="py-12 md:py-16">
        <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/82 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.10)] backdrop-blur md:p-8">
          <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase text-indigo-700">
                <Sparkles size={14} /> Selected work
              </div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                Projects built for launches, teams, and operations.
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
                A portfolio wall with live, scroll-free website previews for public builds and
                refined case-study cards for private/internal systems.
              </p>

              <div className="mt-7 grid grid-cols-3 gap-3">
                <Stat label="Total" value={PROJECTS.length} />
                <Stat label="Live" value={liveCount} />
                <Stat label="Stacks" value="12+" />
              </div>
            </div>

            {featured && (
              <div className="rounded-[1.6rem] bg-slate-950 p-3 shadow-[0_28px_90px_rgba(15,23,42,0.25)]">
                <ProjectFrame project={featured} large />
                <div className="flex flex-col gap-4 px-2 pb-2 pt-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase text-slate-400">Featured preview</p>
                    <h2 className="mt-1 text-2xl font-semibold text-white">{featured.title}</h2>
                  </div>
                  <ProjectLinks project={featured} />
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="sticky top-[73px] z-20 mt-6 rounded-2xl border border-slate-200 bg-white/88 p-3 shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-slate-950 text-white">
                <Filter size={17} />
              </span>
              Showing {items.length} project{items.length === 1 ? '' : 's'}
            </div>
            <div className="flex flex-wrap gap-2">
              {TAGS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setTag(item)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    tag === item
                      ? 'bg-slate-950 text-white shadow-[0_12px_30px_rgba(15,23,42,0.18)]'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-indigo-200 hover:text-indigo-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-7 grid gap-6">
          {remaining.length > 0 ? (
            remaining.map((project, index) => (
              <CompactProject key={project.title} project={project} index={index} />
            ))
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-8 text-center text-slate-600">
              No projects found in this category.
            </div>
          )}
        </section>

        <section className="mt-8 grid gap-4 rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white shadow-[0_24px_80px_rgba(15,23,42,0.16)] md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-300">
              <MonitorPlay size={17} /> Live previews are embedded without internal scrolling.
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Use the Live buttons to open the full websites when you want to inspect the complete
              page.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            <Code2 size={16} /> Production portfolio
          </div>
        </section>
      </main>
    </Container>
  );
}
