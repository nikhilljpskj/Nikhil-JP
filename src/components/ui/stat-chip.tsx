import type { LucideIcon } from 'lucide-react';

export default function StatChip({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon?: LucideIcon;
}) {
  return (
    <div className="relative rounded-2xl bg-gradient-to-r from-indigo-600/20 via-blue-600/20 to-sky-500/20 p-[1.5px]">
      <div className="rounded-2xl border border-white/60 bg-white/90 px-5 py-6 backdrop-blur shadow-[0_12px_35px_rgba(2,6,23,0.08)]">
        <div className="flex items-start gap-3">
          {Icon && (
            <div className="rounded-xl bg-gradient-to-r from-indigo-600/15 to-sky-500/15 p-2 text-slate-700">
              <Icon size={18} />
            </div>
          )}
          <div className="flex-1">
            <div className="text-[13px] font-medium uppercase tracking-wider text-slate-600">
              {label}
            </div>
            <div className="mt-1 bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-500 bg-clip-text text-transparent text-2xl md:text-2xl font-semibold tracking-tight">
              {value}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
