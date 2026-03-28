export default function MissyLoader({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg width={size} height={size} viewBox="0 0 48 48" className="overflow-visible">
        <path className="missy-smoke missy-smoke-1" d="M24,44 C20,36 28,30 24,22" />
        <path className="missy-smoke missy-smoke-2" d="M16,44 C12,36 20,30 16,22" />
        <path className="missy-smoke missy-smoke-3" d="M32,44 C36,36 28,30 32,22" />
      </svg>
    </div>
  );
}
