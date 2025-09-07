'use client';

import { useEffect, useMemo, useState } from 'react';

type Props = {
  roles: string[];
  className?: string;
  typeMs?: number;    // typing speed (ms per char)
  deleteMs?: number;  // deletion speed (ms per char)
  holdMs?: number;    // pause when word is complete
};

// exactly two gradients: blue & red families
const ROLE_GRADIENTS = [
  'from-indigo-600 via-blue-600 to-sky-500',
  'from-rose-600 via-pink-600 to-fuchsia-500',
];

export default function RoleTyper({
  roles,
  className = '',
  typeMs = 60,
  deleteMs = 35,
  holdMs = 1200,
}: Props) {
  const [r, setR] = useState(0);
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const current = roles[r] ?? '';
  const displayed = useMemo(() => current.slice(0, i), [current, i]);

  useEffect(() => {
    let t: any;
    if (!deleting && i < current.length) {
      t = setTimeout(() => setI(i + 1), typeMs);
    } else if (!deleting && i === current.length) {
      t = setTimeout(() => setDeleting(true), holdMs);
    } else if (deleting && i > 0) {
      t = setTimeout(() => setI(i - 1), deleteMs);
    } else if (deleting && i === 0) {
      setDeleting(false);
      setR((r + 1) % roles.length);
    }
    return () => clearTimeout(t);
  }, [i, deleting, current, r, roles.length, typeMs, deleteMs, holdMs]);

  // choose BLUE or RED gradient by role index (alternates 0,1,0,1,…)
  const gradient = ROLE_GRADIENTS[r % ROLE_GRADIENTS.length];

  return (
    <div aria-live="polite" className={`font-bold tracking-tight leading-tight ${className}`}>
      <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
        {displayed}
      </span>
      <span className="inline-block w-[0.5ch] animate-pulse">|</span>
    </div>
  );
}
