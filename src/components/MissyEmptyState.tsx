import type { ReactNode } from 'react';

interface Props {
  message: string;
  submessage?: string;
  children?: ReactNode;
}

export default function MissyEmptyState({ message, submessage, children }: Props) {
  return (
    <div className="text-center py-12">
      <p className="text-smoke-300 text-sm font-medium mb-1">{message}</p>
      {submessage && (
        <p className="text-smoke-500 text-xs">{submessage}</p>
      )}
      {children}
    </div>
  );
}
