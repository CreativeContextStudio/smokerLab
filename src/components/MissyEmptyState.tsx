import type { ReactNode } from 'react';
import MissyLogo from './MissyLogo';

type Variant = 'empty' | 'search' | 'notfound';

const TRANSFORMS: Record<Variant, string> = {
  empty: '',
  search: 'rotate(-15deg)',
  notfound: 'rotate(10deg)',
};

interface Props {
  variant?: Variant;
  message: string;
  submessage?: string;
  children?: ReactNode;
}

export default function MissyEmptyState({ variant = 'empty', message, submessage, children }: Props) {
  return (
    <div className="text-center py-12">
      <div
        className="inline-block mb-4 opacity-60"
        style={{ transform: TRANSFORMS[variant] }}
      >
        <MissyLogo size={72} />
      </div>
      <p className="text-smoke-300 text-sm font-medium mb-1">{message}</p>
      {submessage && (
        <p className="text-smoke-500 text-xs">{submessage}</p>
      )}
      {children}
    </div>
  );
}
