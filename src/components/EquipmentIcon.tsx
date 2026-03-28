import type { EquipmentType } from '../types';

interface Props {
  equipmentId: EquipmentType;
  size?: number;
  className?: string;
}

export default function EquipmentIcon({ equipmentId, size = 16, className = '' }: Props) {
  const props = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, className };

  switch (equipmentId) {
    // Offset smoker: barrel with firebox and chimney
    case 'offset-smoker':
      return (
        <svg {...props}>
          <rect x="2" y="10" width="14" height="8" rx="4" />
          <rect x="16" y="12" width="4" height="6" rx="1" />
          <line x1="4" y1="18" x2="4" y2="22" />
          <line x1="14" y1="18" x2="14" y2="22" />
          <line x1="18" y1="18" x2="18" y2="22" />
          <path d="M3 10 C4 6, 6 5, 8 4" />
          <path d="M9 4 C10 3, 10 2, 10 1" />
          <path d="M7 5 C7 3, 8 2, 8 1" />
        </svg>
      );

    // Charcoal grill: kettle shape with lid
    case 'charcoal-grill':
      return (
        <svg {...props}>
          <path d="M5 11 C5 7, 8 4, 12 4 C16 4, 19 7, 19 11" />
          <path d="M4 12 C4 17, 7 20, 12 20 C17 20, 20 17, 20 12" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="8" y1="20" x2="6" y2="23" />
          <line x1="16" y1="20" x2="18" y2="23" />
          <line x1="12" y1="4" x2="12" y2="2" />
        </svg>
      );

    // Gas grill: box with burner knobs
    case 'gas-grill':
      return (
        <svg {...props}>
          <rect x="3" y="6" width="18" height="10" rx="2" />
          <line x1="3" y1="10" x2="21" y2="10" />
          <circle cx="8" cy="13" r="1" fill="currentColor" />
          <circle cx="12" cy="13" r="1" fill="currentColor" />
          <circle cx="16" cy="13" r="1" fill="currentColor" />
          <line x1="6" y1="16" x2="6" y2="22" />
          <line x1="18" y1="16" x2="18" y2="22" />
          <rect x="4" y="3" width="16" height="3" rx="1" />
        </svg>
      );

    // Electric smoker: cabinet with digital display
    case 'electric-smoker':
      return (
        <svg {...props}>
          <rect x="5" y="2" width="14" height="18" rx="2" />
          <line x1="5" y1="16" x2="19" y2="16" />
          <rect x="8" y="17" width="4" height="2" rx="0.5" />
          <circle cx="16" cy="18" r="1" fill="currentColor" />
          <line x1="5" y1="6" x2="19" y2="6" />
          <line x1="7" y1="20" x2="7" y2="23" />
          <line x1="17" y1="20" x2="17" y2="23" />
          <path d="M10 3 C10 2, 11 1, 12 1" />
          <path d="M14 4 C14 2, 13 1, 12 1" />
        </svg>
      );

    // Parrilla grill: open grate over fire with adjustable height
    case 'parrilla-grill':
      return (
        <svg {...props}>
          {/* Grate bars */}
          <line x1="4" y1="10" x2="20" y2="10" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="14" x2="20" y2="14" />
          {/* Frame sides */}
          <line x1="4" y1="8" x2="4" y2="16" />
          <line x1="20" y1="8" x2="20" y2="16" />
          {/* Legs */}
          <line x1="4" y1="16" x2="3" y2="22" />
          <line x1="20" y1="16" x2="21" y2="22" />
          {/* Chain/height adjuster */}
          <line x1="12" y1="8" x2="12" y2="3" />
          <circle cx="12" cy="2" r="1" />
          {/* Fire underneath */}
          <path d="M9 18 C9 17, 10 16.5, 10 17.5 C10 16, 11 15.5, 11 17 C11 16, 12 15.5, 12 17.5" />
          <path d="M13 18 C13 17, 14 16, 14 17.5 C14 16, 15 15.5, 15 17" />
        </svg>
      );

    default: {
      const _exhaustive: never = equipmentId;
      return _exhaustive;
    }
  }
}
