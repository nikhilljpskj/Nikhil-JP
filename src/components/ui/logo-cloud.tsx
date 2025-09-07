import Image from 'next/image';

type Item = { name: string; logo: string; url?: string };

export default function LogoCloud({ items }: { items: Item[] }) {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
      {items.map((it) => (
        <a
          key={it.name}
          href={it.url ?? '#'}
          aria-label={it.name}
          className="group flex items-center justify-center rounded-2xl border border-white/60 bg-white/70 p-4 backdrop-blur transition will-change-transform hover:-translate-y-[1px] hover:shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
        >
          <Image
            src={it.logo}
            alt={it.name}
            width={200}
            height={60}
            className="h-10 w-auto grayscale opacity-70 transition group-hover:opacity-100 group-hover:grayscale-0"
          />
        </a>
      ))}
    </div>
  );
}
