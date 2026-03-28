import { useMemo } from 'react';
import { getAllRecipes, getAllHowTos } from '../content/loader';
import { useEquipmentContext } from '../context/EquipmentContext';
import { CATEGORY_ICONS } from '../types';

const allRecipes = getAllRecipes().filter((r) => r.ingredients.length > 0);
const allHowTos = getAllHowTos();

interface Props {
  selectedSlugs: string[];
  onToggle: (slug: string) => void;
}

export default function ShoppingRecipeSelector({ selectedSlugs, onToggle }: Props) {
  const { equipmentId, equipment } = useEquipmentContext();

  const equipmentRecipes = useMemo(() => {
    return allRecipes.filter((r) =>
      !r.supportedEquipment || r.supportedEquipment.includes(equipmentId)
    );
  }, [equipmentId]);

  // Find the equipment-specific shopping/mods howto
  const modsHowTo = useMemo(() => {
    return allHowTos.find((h) =>
      h.shoppingItems && h.shoppingItems.length > 0 &&
      (!h.equipmentId || h.equipmentId === equipmentId)
    );
  }, [equipmentId]);

  const modsLabel = equipment.supportsSmoke ? 'Smoker Supplies' : 'Grill Supplies';

  return (
    <div className="mb-6">
      <h2 className="font-display text-lg font-semibold text-smoke-50 mb-3">
        Select recipes to build your list
      </h2>
      <div className="flex flex-wrap gap-2">
        {/* Equipment supplies option */}
        {modsHowTo && (
          <button
            onClick={() => onToggle('__mods__')}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
              selectedSlugs.includes('__mods__')
                ? 'bg-ember-500 text-smoke-950 shadow-[0_0_12px_rgba(212,131,60,0.3)]'
                : 'bg-smoke-800 text-smoke-300 hover:bg-smoke-700 hover:text-smoke-100 border border-smoke-600'
            }`}
          >
            <span>&#128295;</span>
            {modsLabel}
          </button>
        )}

        {/* Recipe options */}
        {equipmentRecipes.map((recipe) => (
          <button
            key={recipe.slug}
            onClick={() => onToggle(recipe.slug)}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all ${
              selectedSlugs.includes(recipe.slug)
                ? 'bg-ember-500 text-smoke-950 shadow-[0_0_12px_rgba(212,131,60,0.3)]'
                : 'bg-smoke-800 text-smoke-300 hover:bg-smoke-700 hover:text-smoke-100 border border-smoke-600'
            }`}
          >
            <span className="text-sm">{CATEGORY_ICONS[recipe.category]}</span>
            {recipe.title}
          </button>
        ))}
      </div>
    </div>
  );
}
