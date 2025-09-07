'use client';

import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import ProjectCard from '@/components/ui/project-card';
import { PROJECTS } from '@/content/projects';
import { useMemo, useState } from 'react';
import { Button } from '@/components/ui/button';

const TAGS = ['All', 'Web', 'ML', 'Tools'] as const;

export default function ProjectsPage() {
  const [tag, setTag] = useState<(typeof TAGS)[number]>('All');
  const items = useMemo(() => (tag === 'All' ? PROJECTS : PROJECTS.filter((p) => p.tag === tag)), [tag]);

  return (
    <Container>
      <Section
        title="Projects"
        description="Selected work across web apps, ML tools, and internal platforms."
      >
        <div className="flex flex-wrap gap-2">
          {TAGS.map((t) => (
            <Button
              key={t}
              variant={t === tag ? 'primary' : 'outline'}
              size="sm"
              onClick={() => setTag(t)}
            >
              {t}
            </Button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
