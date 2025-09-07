'use client';

import Container from '@/components/ui/container';
import Section from '@/components/ui/section';
import { Button } from '@/components/ui/button';
import { CONTACT } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import {
  Copy,
  Mail,
  User,
  MessageSquare,
  Linkedin,
  Github,
  Code2,
  SquareCode,
  type LucideIcon,          // ✅ import the LucideIcon type
} from 'lucide-react';

const EMAILJS = {
  serviceId: 'service_0gokyc9',
  templateId: 'template_xg4ofcq',
  publicKey: 'sw3m_njKZmzIJcI6B',
};

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Add a few more details (10+ chars)'),
});
type FormValues = z.infer<typeof schema>;

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'ok' | 'error' | 'submitting'>('idle');
  const [note, setNote] = useState<string>('');

  useEffect(() => {
    emailjs.init(EMAILJS.publicKey);
  }, []);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    setStatus('submitting');
    try {
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
        from_name: data.email,
        user_name: data.name,
        to_name: 'Nikhil Prakash',
        message: data.message,
      });
      setStatus('ok');
      setNote('Message received! I’ll respond soon.');
      reset();
    } catch (e: any) {
      setStatus('error');
      setNote(e?.text || e?.message || 'Something went wrong. Please try again.');
    }
  };

  const copy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setNote('Copied!');
    setTimeout(() => setNote(''), 1500);
  };

  // ✅ Use LucideIcon so size can be string|number and ref typing matches
  const SocialLink = ({
    href,
    label,
    Icon,
  }: {
    href: string;
    label: string;
    Icon: LucideIcon;
  }) => (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="
        inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/80
        p-2 md:px-3 md:py-1.5 text-sm text-slate-700 backdrop-blur
        transition hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(2,6,23,0.06)]
      "
    >
      {/* Bigger icon on mobile; slightly smaller on md+ */}
      <Icon className="h-5 w-5 md:h-4 md:w-4" />

      {/* Hide the text label on mobile, show from md+ */}
      <span className="hidden md:inline">{label}</span>
    </a>
  );

  return (
    <Container>
      <Section
        title="Contact"
        description="Send a message and I’ll get back quickly."
      >
        <div className="grid gap-10 md:grid-cols-2">
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 rounded-2xl border border-white/60 bg-white/80 p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] backdrop-blur"
          >
            {status === 'ok' && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                {note}
              </div>
            )}
            {status === 'error' && (
              <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
                {note}
              </div>
            )}

            {/* Name */}
            <div>
              <label className="block text-sm font-medium tracking-tight text-slate-800">Name</label>
              <div className="mt-1 flex items-center gap-2 rounded-2xl border border-slate-300 bg-white/95 px-3 py-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/50">
                <User size={16} className="text-slate-500" />
                <input
                  aria-label="Name"
                  className="w-full bg-transparent outline-none placeholder:text-slate-400"
                  placeholder="Your full name"
                  {...register('name')}
                />
              </div>
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium tracking-tight text-slate-800">Email</label>
              <div className="mt-1 flex items-center gap-2 rounded-2xl border border-slate-300 bg-white/95 px-3 py-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/50">
                <Mail size={16} className="text-slate-500" />
                <input
                  aria-label="Email"
                  type="email"
                  className="w-full bg-transparent outline-none placeholder:text-slate-400"
                  placeholder="you@company.com"
                  {...register('email')}
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium tracking-tight text-slate-800">Message</label>
              <div className="mt-1 flex items-start gap-2 rounded-2xl border border-slate-300 bg-white/95 px-3 py-2 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/50">
                <MessageSquare size={16} className="mt-2 text-slate-500" />
                <textarea
                  aria-label="Message"
                  rows={6}
                  className="w-full resize-y bg-transparent outline-none placeholder:text-slate-400"
                  placeholder="Tell me a bit about your project or question…"
                  {...register('message')}
                />
              </div>
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>

            <div className="pt-2">
              <Button disabled={status === 'submitting'} type="submit" className="w-full md:w-auto">
                {status === 'submitting' ? 'Sending…' : 'Send message'}
              </Button>
            </div>

            {status !== 'idle' && <p className="text-sm text-slate-600">{note}</p>}
          </form>

          {/* Direct + Social */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Direct</div>
              <div className="mt-3 space-y-3 text-[15px] leading-6 text-slate-700">
                <div className="flex items-center justify-between">
                  <a className="hover:underline underline-offset-2" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                  <button
                    aria-label="Copy email"
                    onClick={() => copy(CONTACT.email)}
                    className="text-slate-600 hover:text-slate-800"
                  >
                    <Copy size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <a className="hover:underline underline-offset-2" href={`tel:${CONTACT.phone}`}>
                    {CONTACT.phone}
                  </a>
                  <button
                    aria-label="Copy phone"
                    onClick={() => copy(CONTACT.phone)}
                    className="text-slate-600 hover:text-slate-800"
                  >
                    <Copy size={16} />
                  </button>
                </div>
                <div className="text-slate-600">{CONTACT.location}</div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/80 p-6 shadow-[0_10px_30px_rgba(2,6,23,0.06)] backdrop-blur">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">Social</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <SocialLink href={CONTACT.linkedin} label="LinkedIn" Icon={Linkedin} />
                <SocialLink href={CONTACT.github} label="GitHub" Icon={Github} />
                <SocialLink href="https://www.hackerrank.com/profile/nikhiljp_skj" label="HackerRank" Icon={Code2} />
                <SocialLink href="https://leetcode.com/u/nikhiljp/" label="LeetCode" Icon={SquareCode} />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
