import Image from 'next/image';

export default function TechBadge({ name, logo }: { name: string; logo: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-2xl border border-white/60 bg-white/90 px-3 py-1.5 text-sm text-slate-800 backdrop-blur">
      {/* We keep sizes consistent for a clean baseline */}
      <Image src={logo} alt={name} width={18} height={18} className="h-[18px] w-[18px] object-contain" />
      {name}
    </span>
  );
}
