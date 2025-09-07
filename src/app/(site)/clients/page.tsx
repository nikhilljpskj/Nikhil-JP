import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import LogoCloud from '@/components/ui/logo-cloud';
import { CLIENTS } from '@/content/clients'; // you can keep this name

export default function CompaniesPage() {
  return (
    <Container>
      <Section
        title="Companies I’ve worked with"
        description="Employers and organizations I’ve contributed to across engineering, strategy, and delivery."
      >
        <LogoCloud items={CLIENTS} />
      </Section>
    </Container>
  );
}
