export const CAPABILITIES = [
  'Product Development',
  'Maintenance & Reliability',
  'DevOps & CI/CD',
  'Architecture & Reviews',
  'Team Enablement & Training',
] as const;

type Item = { name: string; logo: string };

export const STACK: {
  frontend: Item[];
  backend: Item[];
  languages: Item[];
  data: Item[];
  devops: Item[];
  messaging: Item[];
} = {
  frontend: [
    { name: 'React', logo: '/tech/react.png' },
    { name: 'Next.js', logo: '/tech/nextjs.svg' },
    { name: 'HTML', logo: '/tech/html.svg' },
    { name: 'CSS', logo: '/tech/css.svg' },
    { name: 'Tailwind CSS', logo: '/tech/tailwind.svg' },
  ],
  backend: [
    { name: 'Node.js', logo: '/tech/node-js.png' },
    { name: 'Express', logo: '/tech/express.svg' },
    { name: 'NestJS', logo: '/tech/nestjs.svg' },
    { name: 'Python', logo: '/tech/python.png' },
    { name: 'Django', logo: '/tech/django.svg' },
    { name: 'Flask', logo: '/tech/flask.svg' },
    { name: 'PHP', logo: '/tech/php.svg' },
    { name: 'Laravel', logo: '/tech/laravel.svg' },
    { name: 'CodeIgniter', logo: '/tech/codeigniter.svg' },
  ],
  languages: [
    { name: 'TypeScript', logo: '/tech/typescript.png' },
    { name: 'JavaScript', logo: '/tech/js.png' },
    { name: 'Python', logo: '/tech/python.png' },
    { name: 'PHP', logo: '/tech/php.svg' },
    { name: 'C#', logo: '/tech/csharp.png' },
  ],
  data: [
    { name: 'PostgreSQL', logo: '/tech/postgresql.svg' },
    { name: 'MySQL', logo: '/tech/sql.svg' },
    { name: 'MongoDB', logo: '/tech/mongo.svg' },
    { name: 'Redis', logo: '/tech/redis.svg' },
  ],
  devops: [
    { name: 'Docker', logo: '/tech/docker.png' },
    { name: 'Git', logo: '/tech/github.svg' },
    { name: 'GitHub Actions', logo: '/tech/github-actions.svg' },
    { name: 'Nginx', logo: '/tech/nginx.svg' },
    { name: 'Vercel', logo: '/tech/vercel.svg' },
    { name: 'AWS EC2', logo: '/tech/ec2.svg' },
    { name: 'AWS SES', logo: '/tech/aws-ses.svg' },
  ],
  messaging: [
    { name: 'Twilio', logo: '/tech/twilio.svg' },
    { name: 'SendGrid', logo: '/tech/sendgrid.svg' },
  ],
};
