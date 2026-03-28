import MissyLogo from './MissyLogo';

export default function MissyLoader({ size = 48, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <MissyLogo size={size} />
      <svg
        width={size * 0.7}
        height={size * 0.4}
        viewBox="0 0 36 20"
        className="overflow-visible -mt-1"
      >
        <path className="missy-smoke missy-smoke-1" d="M18,20 C14,14 22,10 18,4" />
        <path className="missy-smoke missy-smoke-2" d="M10,20 C6,14 14,10 10,4" />
        <path className="missy-smoke missy-smoke-3" d="M26,20 C30,14 22,10 26,4" />
      </svg>
    </div>
  );
}
