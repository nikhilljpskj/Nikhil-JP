import { PropsWithChildren } from 'react';

export default function Container({ children }: PropsWithChildren) {
  return <div className="mx-auto max-w-7xl px-6">{children}</div>;
}
