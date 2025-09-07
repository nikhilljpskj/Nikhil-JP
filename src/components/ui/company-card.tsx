import { Badge } from './badge';
import { Card, CardBody } from './card';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export type Company = {
  name: string;
  role: string;
  period: string;
  location?: string;
  stack: string[];
  bullets?: string[];
  logo?: string;   // optional logo path in /public/companies/*
  url?: string;
};

export default function CompanyCard({ company }: { company: Company }) {
  const content = (
    <Card className="transition will-change-transform hover:-translate-y-[2px]">
      <CardBody>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold tracking-tight">{company.name}</h3>
            <div className="mt-1 flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1">
                <Briefcase size={16} /> {company.role}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={16} /> {company.period}
              </span>
              {company.location && (
                <span className="inline-flex items-center gap-1">
                  <MapPin size={16} /> {company.location}
                </span>
              )}
            </div>
          </div>
          {company.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-10 w-10 shrink-0 rounded-xl border border-white/60 bg-white/80 p-1 object-contain"
            />
          )}
        </div>

        {company.bullets && company.bullets.length > 0 && (
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
            {company.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {company.stack.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
      </CardBody>
    </Card>
  );

  return company.url ? (
    <a href={company.url} target="_blank" rel="noreferrer" aria-label={company.name}>
      {content}
    </a>
  ) : (
    content
  );
}
