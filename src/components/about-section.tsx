import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import StatChip from '@/components/ui/stat-chip';
import { Badge } from '@/components/ui/badge';
import TechBadge from '@/components/ui/tech-badge';
import { Button } from '@/components/ui/button';
import { COMPANIES } from '@/content/companies';
import { STACK, CAPABILITIES } from '@/content/skills';
import { EDUCATION } from '@/content/education';
import { Building2, Target, Layers, FileDown } from 'lucide-react';
import { CONTACT } from '@/lib/constants';
import Image from 'next/image';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';


export default function AboutSection({ compact = false }: { compact?: boolean }) {
  const companiesCount = COMPANIES.length;

  return (
    <Container>
      <Section
        eyebrow="Profile"
        title="About"
        description={
        <>
            <p>
            Based in <strong>Kerala, India</strong>. I’m a Senior Software Development Engineer and tech
            strategist who builds dependable, well-crafted web systems. Day-to-day I handle architecture
            reviews, hands-on feature work, and pragmatic DX improvements across
            <strong> React/Next.js</strong>, <strong>Node/Nest</strong>, <strong>Python/Django</strong>, and
            <strong> PHP/Laravel</strong>—with a clear focus on maintainability, performance, and delivery.
            </p>

            <p>
            <span className="font-medium">Experience overview:</span> Production work spanning platform
            upgrades, reliability, CI/CD, and training. Roles include Senior SDE at Harmen&nbsp;&amp;&nbsp;Botts (FR),
            Associate System Analyst at Envestnet&nbsp;|&nbsp;Yodlee, internships at Tata&nbsp;Elxsi and Abarna Colours,
            plus freelance/contract engagements (e.g., Futurzy&nbsp;UK, Adbullet). I turn ambiguous requirements
            into lean, shippable roadmaps—from green-field builds to long-term maintenance.
            </p>

            <p className="text-[15px] leading-relaxed">
            <span className="font-medium">Education:</span> MCA (2022–2024), College of Engineering, Chengannur •
            BCA, Naipunnya School of Management • MA Psychology (Industrial &amp; Organizational Behaviour),
            IGNOU (Mar Ivanios College).
            </p>

            <p className="mt-3 flex flex-wrap items-center gap-2 text-[15px] leading-relaxed">
                <span>For more,</span>

                <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
                    <a
                    href="/cv/Nikhil_Prakash.pdf"
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-1.5 text-slate-700 backdrop-blur transition
                                hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(2,6,23,0.08)]"
                    aria-label="Download CV"
                    >
                    <FileDown size={14} className="text-slate-600" />
                    <span>CV</span>
                    </a>
                </span>

                <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
                    <a
                    href={CONTACT.linkedin}
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-1.5 text-slate-700 backdrop-blur transition
                                hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(2,6,23,0.08)]"
                    aria-label="LinkedIn"
                    >
                    <Linkedin size={14} className="text-slate-600" />
                    <span>LinkedIn</span>
                    </a>
                </span>

                <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
                    <a
                    href={CONTACT.github}
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-1.5 text-slate-700 backdrop-blur transition
                                hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(2,6,23,0.08)]"
                    aria-label="GitHub"
                    >
                    <Github size={14} className="text-slate-600" />
                    <span>GitHub</span>
                    </a>
                </span>

                <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
                    <a
                    href={`mailto:${CONTACT.email}`}
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-1.5 text-slate-700 backdrop-blur transition
                                hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(2,6,23,0.08)]"
                    aria-label="Email"
                    >
                    <Mail size={14} className="text-slate-600" />
                    <span>Email</span>
                    </a>
                </span>

                <span className="rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1px]">
                    <a
                    href={`tel:${CONTACT.phone}`}
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-white/60 bg-white/85 px-3 py-1.5 text-slate-700 backdrop-blur transition
                                hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(2,6,23,0.08)]"
                    aria-label="Phone"
                    >
                    <Phone size={14} className="text-slate-600" />
                    <span>Mobile</span>
                    </a>
                </span>

                
                </p>

        </>
        }

        side={
        <div className="mx-auto w-full max-w-sm mb-8">
            {/* Borderless, intrinsic-ratio image with hover glow */}
            <div className="group relative transition-shadow duration-300">
            <Image
                src="/self/nikhil-bg.png"
                alt="Nikhil Prakash — illustration"
                width={1300}            // ← replace with your image’s real width
                height={1600}           // ← and real height for perfect CLS
                priority
                sizes="(min-width:1024px) 26rem, (min-width:768px) 20rem, 90vw"
                className="w-full h-auto select-none pointer-events-none rounded-3xl
                        object-contain transition-transform duration-500 ease-out
                        group-hover:scale-[1.01] group-hover:brightness-105"
            />

            {/* Soft hover highlight (no border) */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0
                        transition-opacity duration-300
                        group-hover:opacity-100
                        bg-gradient-to-tr from-indigo-500/10 via-transparent to-sky-500/10"
            />
            </div>
        </div>
        }
        >

        {/* Stats — upgraded visuals */}
        <div className="grid gap-6 md:grid-cols-3">
          <StatChip icon={Building2} label="Companies worked with" value={`${companiesCount}+`} />
          <StatChip icon={Target} label="Core focus" value="Architecture & Delivery" />
          <StatChip icon={Layers} label="Primary stacks" value="React/Next Node PHP" />
        </div>

        {/* Capabilities */}
        <div className="mt-10">
          <h3 className="text-sm font-medium tracking-tight text-slate-800">Capabilities</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {CAPABILITIES.map((c) => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
        </div>

        {/* Tech groups */}
        <div className="mt-10 grid gap-6">
          <TechGroup title="Frontend">
            {STACK.frontend.map((t) => (
              <TechBadge key={t.name} name={t.name} logo={t.logo} />
            ))}
          </TechGroup>

          <TechGroup title="Backend & Frameworks">
            {STACK.backend.map((t) => (
              <TechBadge key={t.name} name={t.name} logo={t.logo} />
            ))}
          </TechGroup>

          <TechGroup title="Languages">
            {STACK.languages.map((t) => (
              <TechBadge key={t.name} name={t.name} logo={t.logo} />
            ))}
          </TechGroup>

          <TechGroup title="Databases & Caches">
            {STACK.data.map((t) => (
              <TechBadge key={t.name} name={t.name} logo={t.logo} />
            ))}
          </TechGroup>

          <TechGroup title="DevOps • Hosting • Tooling">
            {STACK.devops.map((t) => (
              <TechBadge key={t.name} name={t.name} logo={t.logo} />
            ))}
          </TechGroup>

          <TechGroup title="Messaging & Email">
            {STACK.messaging.map((t) => (
              <TechBadge key={t.name} name={t.name} logo={t.logo} />
            ))}
          </TechGroup>
        </div>

        {/* Education */}
        {!compact && (
          <div className="mt-12">
            <h3 className="text-sm font-medium tracking-tight text-slate-800">Education</h3>

            <div className="mt-4 grid gap-6 md:grid-cols-3">
              {EDUCATION.map((e) => (
                <div
                  key={e.title}
                  className="relative rounded-2xl bg-gradient-to-r from-indigo-600/15 via-blue-600/15 to-sky-500/15 p-[1.5px]"
                >
                  <div className="rounded-2xl border border-white/60 bg-white/85 p-5 backdrop-blur shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                    <div className="inline-flex items-center rounded-full border border-white/60 bg-white/70 px-2.5 py-1 text-xs text-slate-600">
                      {e.period}
                    </div>
                    <div className="mt-3 text-base font-semibold tracking-tight">
                      <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent">
                        {e.title}
                      </span>
                    </div>
                    <div className="mt-1 text-[15px] leading-relaxed text-slate-700">{e.institution}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CV — elevated CTA */}
        {!compact && (
          <div className="mt-10">
            <a href="/cv/Nikhil_Prakash.pdf" download>
              <Button
                variant="primary"
                size="lg"
                className="group shadow-[0_14px_40px_rgba(2,6,23,0.12)]"
                aria-label="Download CV (PDF)"
              >
                <FileDown size={18} className="transition-transform group-hover:-translate-y-[1px]" />
                <span className="ml-2">Download CV</span>
              </Button>
            </a>
          </div>
        )}
      </Section>
    </Container>
  );
}

/** Polished “glass + gradient” group card with a gentle header and hairline gradient divider */
function TechGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-r from-indigo-600/15 via-blue-600/15 to-sky-500/15 p-[1.5px]">
      <div className="rounded-2xl border border-white/60 bg-white/85 p-5 backdrop-blur shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold uppercase tracking-wider text-slate-600">{title}</div>
          <div className="h-px w-24 bg-gradient-to-r from-indigo-500/30 via-blue-500/30 to-sky-400/30" />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">{children}</div>
      </div>
    </div>
  );
}
