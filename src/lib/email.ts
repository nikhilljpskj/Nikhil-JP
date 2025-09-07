'use client';

import emailjs from '@emailjs/browser';
import { CONTACT } from '@/lib/constants';

/**
 * Uses your provided EmailJS credentials, with env fallbacks if present.
 * PUBLIC_KEY is safe on the client by design (EmailJS).
 */
const SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? 'service_0gokyc9';
const TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? 'template_xg4ofcq';
const PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? 'sw3m_njKZmzIJcI6B';

let initialized = false;

export function initEmail() {
  if (!initialized && PUBLIC_KEY) {
    emailjs.init({ publicKey: PUBLIC_KEY });
    initialized = true;
  }
}

export type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
  brief?: string;       // "Yes" | "No"
  projectType?: string; // e.g., "Web App", "ML", etc.
  budget?: string;      // e.g., "Under $5k"
  timeline?: string;    // e.g., "2-4 weeks"
};

export async function sendContactEmail(payload: ContactPayload) {
  if (!initialized) initEmail();
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS env/keys are missing.');
  }

  // Map to both your *older* template keys and richer keys (safe to send extras).
  const templateParams = {
    // Older template fields (per your snippet)
    from_name: payload.email,
    user_name: payload.name,
    to_name: CONTACT.email,
    message: payload.message,

    // Richer details
    name: payload.name,
    email: payload.email,
    subject: payload.subject ?? '',
    brief: payload.brief ?? '',
    project_type: payload.projectType ?? '',
    budget: payload.budget ?? '',
    timeline: payload.timeline ?? ''
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
}
