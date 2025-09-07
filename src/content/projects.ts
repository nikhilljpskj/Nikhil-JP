// src/content/projects.ts
import type { Project } from '@/components/ui/project-card';

export const PROJECTS: Project[] = [
  {
    title: 'Mobiforce',
    description:
      'HR consulting website for a France-based heavy industry firm. Modern Next.js front-end, Node/Express backend, optimized for clarity and speed.',
    tech: ['Next.js', 'Node.js', 'Express', 'Tailwind'],
    tag: 'Web',
    href: 'https://mobiforce.vercel.app/',
    repo: 'https://github.com/nikhilljpskj/Mobiforce',
    image: '/projects/mobiforce.png',
  },
  {
    title: 'Kerala Congress (J)',
    description:
      'Official party website with membership registration and people management modules. PHP stack for simplicity and fast publishing.',
    tech: ['PHP', 'HTML', 'Tailwind'],
    tag: 'Web',
    href: 'https://kerala-congress.vercel.app/',
    repo: 'https://github.com/nikhilljpskj/Kerala-Congress',
    image: '/projects/kc.png',
  },
  {
    title: 'Sales Tracker',
    description:
      'Integrated field-sales tracking with live location capture and ERP updates. Lightweight PHP+HTML stack for rapid deployment and easy maintenance.',
    tech: ['PHP', 'HTML', 'Tailwind'],
    tag: 'Web',
    href: 'https://daya-life-science-red.vercel.app/',
    repo: 'https://github.com/nikhilljpskj/DayaLifeScience-Red',
    image: '/projects/sales.png',
  },
  {
    title: 'OperonX',
    description:
      'Integrated ERP + CRM with lead tracking and social capture. Next.js front-end with Node or PHP alternates for flexible deployment environments.',
    tech: ['Node.js', 'Express', 'Tailwind', 'MySQL'],
    tag: 'Web',
    href: 'http://operonx.com/',
    repo: 'https://github.com/nikhilljpskj/OperonX-Frontend',
    image: '/projects/operonx.png',
  },
  {
    title: 'Redeemer Technologies',
    description:
      'Corporate website and service presence for Redeemer Technologies, including content, media, and cardio-medical project showcases with clear CTAs.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind'],
    tag: 'Web',
    href: 'https://redeemertechnologies.com/',
    repo: 'https://github.com/nikhilljpskj/Redeemer',
    image: '/projects/redeemer.png',
  },
  {
    title: '3D Realspace Scans',
    description:
      '3D site-scanning company site with booking flow. Next.js + Node stack, service catalog, and contact pipeline designed for quick lead intake.',
    tech: ['Next.js', 'Node.js', 'Tailwind'],
    tag: 'Web',
    href: 'https://real3dspacescan.com/',
    repo: 'https://github.com/nikhilljpskj/3D-RealSpace-Scans-Final',
    image: '/projects/realspace-scans.png',
  },
  {
    title: 'Comsol',
    description:
      'ERP with service booking and workflow management for a private firm. React + Node architecture with clean separation of modules and roles.',
    tech: ['React', 'Node.js', 'Express', 'Tailwind', 'SQL'],
    tag: 'Web',
    repo: 'https://github.com/nikhilljpskj/Comsol',
    image: '/projects/comsol.png',
  },
  {
    title: 'Text Summarizer',
    description:
      'Python Flask app using ML to summarize text, PDFs, and web/video transcripts. Practical UI for quick digest creation and knowledge extraction.',
    tech: ['Python', 'Flask', 'BART/ML', 'NLTK'],
    tag: 'ML',
    repo: 'https://github.com/nikhilljpskj/Text-Summarizer',
    image: '/projects/project-ml-summarizer.jpg',
  },
  {
    title: 'CM Hospital',
    description:
      'Hospital website with appointment and booking flows. Twilio notifications, streamlined patient intake, and staff-friendly scheduling screens.',
    tech: ['React', 'Node.js', 'Twilio', 'Tailwind'],
    tag: 'Web',
    href: 'https://cm-hospital.vercel.app/',
    repo: 'https://github.com/nikhilljpskj/CM-Hospital',
    image: '/projects/cm.png',
  },
  {
    title: 'PortfoMeister',
    description:
      'Automated portfolio builder with preset templates and live edits. React + Node + Express + Supabase workflow designed for quick launches.',
    tech: ['React', 'Node.js', 'Express', 'Supabase'],
    tag: 'Tools',
    href: 'https://portfo-meister001-git-master-nikhilljpskj.vercel.app/',
    repo: 'https://github.com/nikhilljpskj/PortfoMeister',
    image: '/projects/project-portfolio-builder.jpg',
  },
  {
    title: 'Project ERP',
    description:
      'Internal ERP for billing, import/export, and operations. React + Node + MySQL stack with role-based modules and clean operational dashboards.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind'],
    tag: 'Web',
    href: 'https://psp-kappa.vercel.app/',
    repo: 'https://github.com/nikhilljpskj/PSP',
    image: '/projects/project-erp.jpg',
  },
  {
    title: 'Wind Ridge',
    description:
      'Java-based bus ticket management app for multi-branch travel agencies, with booking, admin consoles, and branch-level oversight for daily use.',
    tech: ['Java', 'Swing/JavaFX', 'MySQL'],
    tag: 'Tools',
    repo: 'https://github.com/nikhilljpskj/Wind-Ridge',
    image: '/projects/windridge.png',
  },
];
