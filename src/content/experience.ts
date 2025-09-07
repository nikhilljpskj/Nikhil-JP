export type TimelineItem = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const EXPERIENCE: TimelineItem[] = [
  {
    role: 'Senior SDE',
    company: 'Harmen & Botts (Neuilly-sur-Seine, France)',
    period: 'Apr 2025 – Present',
    bullets: [
      'Platform maintenance & migrations (React/Node/Laravel/Django).',
      'Email systems (SES, SendGrid, Twilio), CI/CD, and reliability.'
    ],
  },
  // {
  //   role: 'Head of Engineering & Training (Part-time)',
  //   company: 'FalkenRidge',
  //   period: 'Jun 2024 – Present',
  //   bullets: [
  //     'Team enablement, CI/CD, and performance standards across services.'
  //   ],
  // },
  {
    role: 'Full-Stack Developer (Part-time)',
    company: 'Adbullet (Delhi)',
    period: 'Dec 2024 – Present',
    bullets: [
      'Prod debugging and fixes; full-stack features across PHP/React + commerce.'
    ],
  },
  {
    role: 'Full-Stack Developer (Contract)',
    company: 'Futurzy (United Kingdom)',
    period: 'Dec 2024 – Apr 2025',
    bullets: [
      'Delivered features across React/Node; consistent collaboration across timezones.'
    ],
  },
  {
    role: 'Full-Stack Developer (Part-time)',
    company: 'Redeemer Technologies',
    period: 'Nov 2023 – Feb 2024',
    bullets: [
      'Custom libraries & features across React/Node/Django/PHP.'
    ],
  },
  {
    role: 'Intern Trainee',
    company: 'Tata Elxsi (Thiruvananthapuram, Kerala)',
    period: 'Oct 2023 – Jun 2024',
    bullets: [
      'Test case writing, reverse-engineering C#, and flowchart-driven scenarios.'
    ],
  },
  {
    role: 'Intern Developer',
    company: 'Abarna Colours (Coimbatore, Tamil Nadu)',
    period: 'Apr 2023 – Jun 2023',
    bullets: [
      'Full-stack contributions across React/Node/PHP (CodeIgniter).'
    ],
  },
  {
    role: 'Associate System Analyst',
    company: 'Envestnet | Yodlee',
    period: 'Dec 2021 – Nov 2022',
    bullets: [
      'Reduced recurring issues by ~20% and sped up resolution by ~30%.',
      'Used Splunk for analysis; Perforce/Jira/ServiceNow for workflows.'
    ],
  },
  {
    role: 'Freelance Full-Stack Developer',
    company: 'Various (Virtual/Onsite)',
    period: 'Mar 2021 – Present',
    bullets: [
      'React/Next/Node/Python/PHP stacks, Docker, CI/CD, cloud; custom libs & APIs.'
    ],
  },
];
