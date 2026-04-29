'use client';

import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import ProjectCard from '@/components/ui/project-card';
import { PROJECTS } from '@/content/projects';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MonitorPlay } from 'lucide-react';

const TAGS = ['All', 'Web', 'ML', 'Tools'] as const;

export default function ProjectsPage() {
  const [tag, setTag] = useState<(typeof TAGS)[number]>('All');
  const items = useMemo(
    () => (tag === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === tag)),
    [tag],
  );

  return (
    <Container>
      <Section
        title="Projects"
        description="Selected work across public websites, ML tools, and internal platforms."
      >
        <div className="flex flex-col gap-4 rounded-2xl border border-white/70 bg-white/65 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.06)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-white">
              <MonitorPlay size={18} />
            </span>
            <span>
              <strong className="block text-base text-slate-950">{items.length} projects</strong>
              Production builds, internal tools, and selected case studies.
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <Button
                key={t}
                variant={t === tag ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setTag(t)}
                className="min-w-20"
              >
                {t}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid auto-rows-fr gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
