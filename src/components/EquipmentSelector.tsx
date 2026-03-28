import { useState, useRef, useEffect } from 'react';
import { useEquipmentContext } from '../context/EquipmentContext';
import EquipmentIcon from './EquipmentIcon';

export default function EquipmentSelector() {
  const { equipment, allEquipment, setEquipment } = useEquipmentContext();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-sm font-medium text-smoke-300 hover:text-smoke-100 hover:bg-smoke-800 transition-colors border border-smoke-700"
        aria-label="Select equipment"
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <EquipmentIcon equipmentId={equipment.id} size={14} className="text-ember-500" />
        <span className="hidden sm:inline">{equipment.shortName}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" className="text-smoke-500">
          <path d="M2 4l3 3 3-3" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-64 bg-smoke-800 border border-smoke-600 rounded-lg shadow-xl z-50 overflow-hidden">
          {allEquipment.map((eq) => (
            <button
              key={eq.id}
              onClick={() => { setEquipment(eq.id); setOpen(false); }}
              className={`w-full flex items-start gap-3 px-3 py-2.5 text-left transition-colors ${
                eq.id === equipment.id
                  ? 'bg-smoke-700 text-ember-400'
                  : 'text-smoke-200 hover:bg-smoke-700/50'
              }`}
            >
              <EquipmentIcon equipmentId={eq.id} size={18} className={eq.id === equipment.id ? 'text-ember-500' : 'text-smoke-400'} />
              <div className="min-w-0">
                <div className="text-sm font-medium leading-tight">{eq.name}</div>
                <div className="text-xs text-smoke-400 leading-tight mt-0.5">{eq.model}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
