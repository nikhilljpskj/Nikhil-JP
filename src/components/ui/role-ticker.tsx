'use client';

export default function RoleTicker({ roles }: { roles: string[] }) {
  // Each line is 28px tall (h-7). We animate exactly N * 28px, with steps(N) for a snap slide.
  const lineH = 28;
  const dur = roles.length * 2.4; // seconds

  return (
    <div className="relative h-7 overflow-hidden rounded-full bg-white/85 px-3 ring-1 ring-black/5">
      <ul
        className="m-0 flex list-none flex-col gap-0 will-change-transform"
        style={{ animation: `roleTicker ${dur}s steps(${roles.length}) infinite` }}
      >
        {roles.concat(roles[0]).map((r, i) => (
          <li key={`${r}-${i}`} className="h-7 leading-7 text-[15px] font-medium text-slate-800">
            {r}
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes roleTicker {
          to {
            transform: translateY(-${roles.length * lineH}px);
          }
        }
      `}</style>
    </div>
  );
}
