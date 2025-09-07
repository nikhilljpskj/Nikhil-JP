import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import Timeline from '@/components/ui/timeline';
import { EXPERIENCE } from '@/content/experience';
import { COMPANIES } from '@/content/companies';
import CompanyCard from '@/components/ui/company-card';

export default function ExperiencePage() {
  return (
    <Container>
      {/* Impactful timeline */}
      <Section
        title="Experience"
        description="Roles, scope, and measurable outcomes across leadership and full-stack engineering."
      >
        <Timeline items={EXPERIENCE} />
      </Section>

      {/* Companies grid on the same page — polished cards with stacks & dates */}
      <Section
        eyebrow="Companies"
        title="Companies I’ve worked with"
        description="Employers, clients, and collaborators — with short context and core stacks."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {COMPANIES.map((c) => (
            <CompanyCard key={`${c.name}-${c.period}`} company={c} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
