import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import { Card, CardBody } from '@/components/ui/card';
import { ServerCog, Boxes, Rocket, Users } from 'lucide-react';

const SERVICES = [
  {
    title: 'Full-Stack Product Engineering',
    icon: Rocket,
    desc: 'React/Next, Node, PHP/Laravel with clean architectures and CI.',
    bullets: ['Feature velocity', 'DX improvements', 'Maintainability']
  },
  {
    title: 'Architecture & Scalability',
    icon: ServerCog,
    desc: 'CI/CD, environments, cloud basics, and observability.',
    bullets: ['Resilience', 'Faster releases', 'Fewer incidents']
  },
  {
    title: 'Growth & Performance',
    icon: Boxes,
    desc: 'Audits, profiling, and targeted optimizations.',
    bullets: ['Faster loads', 'Lower costs', 'Happier users']
  },
  {
    title: 'Team Enablement & Training',
    icon: Users,
    desc: 'Workshops and mentoring to raise the bar across the team.',
    bullets: ['Onboarding', 'Standards', 'Confidence']
  }
];

export default function ServicesPage() {
  return (
    <Container>
      <Section
        title="Services"
        description="Clear value, communicated simply. I ship, I optimize, and I enable teams."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Card key={s.title}>
              <CardBody>
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-gradient-to-r from-indigo-600/10 to-sky-500/10 p-2">
                    <s.icon className="text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="text-slate-600">{s.desc}</p>
                    <ul className="mt-3 list-disc pl-5 text-sm text-slate-700">
                      {s.bullets.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  );
}
