import { useMemo } from 'react';
import { getAllHowTos } from '../content/loader';
import { useEquipmentContext } from '../context/EquipmentContext';
import HowToCard from '../components/HowToCard';

const allHowTos = getAllHowTos();

export default function HowTosPage() {
  const { equipmentId, equipment } = useEquipmentContext();

  const filtered = useMemo(() => {
    return allHowTos.filter((h) =>
      !h.equipmentId || h.equipmentId === equipmentId
    );
  }, [equipmentId]);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-smoke-50 mb-1">How-To Guides</h1>
      <p className="text-smoke-400 text-sm mb-6">
        Setup, mods, and techniques for the {equipment.shortName}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map((howto) => (
          <HowToCard key={howto.slug} howto={howto} />
        ))}
      </div>
    </div>
  );
}
