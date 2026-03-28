import type { EquipmentType } from '../types';
import { equipment as allEquipment } from '../content/equipment';
import EquipmentIcon from './EquipmentIcon';

interface Props {
  supportedEquipment: EquipmentType[];
  activeEquipment: EquipmentType;
  onSelect: (id: EquipmentType) => void;
}

export default function EquipmentVariantToggle({ supportedEquipment, activeEquipment, onSelect }: Props) {
  if (supportedEquipment.length <= 1) return null;

  return (
    <div className="flex flex-wrap gap-1.5 mt-3">
      {supportedEquipment.map((eqId) => {
        const profile = allEquipment.find((e) => e.id === eqId);
        if (!profile) return null;
        const isActive = eqId === activeEquipment;
        return (
          <button
            key={eqId}
            onClick={() => onSelect(eqId)}
            className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
              isActive
                ? 'bg-ember-600/20 text-ember-400 border border-ember-500/40'
                : 'bg-smoke-800 text-smoke-400 border border-smoke-700 hover:text-smoke-200 hover:border-smoke-500'
            }`}
          >
            <EquipmentIcon equipmentId={eqId} size={12} />
            {profile.shortName}
          </button>
        );
      })}
    </div>
  );
}
