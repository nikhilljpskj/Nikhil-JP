import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import { TESTIMONIALS } from '@/content/testimonials';

export default function TestimonialsPage() {
  return (
    <Container>
      <Section
        title="Testimonials"
        description="What collaborators say — calm execution, measurable outcomes."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/60 bg-white/75 p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] backdrop-blur">
              <p className="text-slate-800">“{t.quote}”</p>
              <div className="mt-4 text-sm text-slate-500">
                — {t.name}, {t.role}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
