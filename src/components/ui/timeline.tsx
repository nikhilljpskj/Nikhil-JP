type Item = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative ml-3">
      <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500/40 via-blue-500/30 to-sky-400/40" />
      {items.map((it, idx) => (
        <li key={idx} className="relative mb-10 pl-6">
          <span className="absolute left-[-7px] top-1 h-3.5 w-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 shadow-[0_6px_20px_rgba(37,99,235,0.45)]" />
          <div className="rounded-2xl bg-white/75 p-5 shadow-[0_10px_30px_rgba(2,6,23,0.06)] backdrop-blur border border-white/60">
            <h3 className="text-lg font-semibold tracking-tight">
              {it.role} <span className="text-slate-500">— {it.company}</span>
            </h3>
            <p className="text-sm text-slate-500">{it.period}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              {it.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
