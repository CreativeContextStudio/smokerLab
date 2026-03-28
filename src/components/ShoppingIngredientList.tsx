import { useMemo } from 'react';
import { getRecipeMeta } from '../content/loader';
import { howtos } from '../content/manifest';
import { useEquipmentContext } from '../context/EquipmentContext';
import { SHOPPING_CATEGORY_LABELS } from '../types';
import MissyEmptyState from './MissyEmptyState';
import type { Ingredient } from '../types';

interface Props {
  selectedSlugs: string[];
  checkedItems: Record<string, boolean>;
  onToggleItem: (key: string) => void;
}

interface GroupedItem {
  key: string;
  name: string;
  amounts: string[];
  optional: boolean;
  sources: string[];
}

export default function ShoppingIngredientList({ selectedSlugs, checkedItems, onToggleItem }: Props) {
  const { equipmentId } = useEquipmentContext();

  const grouped = useMemo(() => {
    // Collect all ingredients from selected recipes/mods
    const allItems: { item: Ingredient; source: string; group: string }[] = [];

    for (const slug of selectedSlugs) {
      if (slug === '__mods__') {
        // Find equipment-specific mods howto
        const mods = howtos.find((h) =>
          h.shoppingItems && h.shoppingItems.length > 0 &&
          (!h.equipmentId || h.equipmentId === equipmentId)
        );
        if (mods?.shoppingItems) {
          for (const group of mods.shoppingItems) {
            for (const item of group.items) {
              allItems.push({ item, source: 'Equipment Supplies', group: group.groupName });
            }
          }
        }
        continue;
      }

      const meta = getRecipeMeta(slug);
      if (!meta) continue;

      // Use equipment override ingredients if available, otherwise base
      const override = meta.equipmentOverrides?.find((o) => o.equipmentId === equipmentId);
      const ingredients = override?.ingredients ?? meta.ingredients;

      for (const group of ingredients) {
        for (const item of group.items) {
          allItems.push({ item, source: meta.title, group: group.groupName });
        }
      }
    }

    // Group by shopping category
    const byCategory = new Map<string, GroupedItem[]>();

    for (const { item, source } of allItems) {
      const cat = item.shoppingCategory;
      if (!byCategory.has(cat)) byCategory.set(cat, []);

      const existing = byCategory.get(cat)!.find(
        (g) => g.name.toLowerCase() === item.name.toLowerCase()
      );

      if (existing) {
        if (!existing.amounts.includes(item.amount)) {
          existing.amounts.push(item.amount);
        }
        if (!existing.sources.includes(source)) {
          existing.sources.push(source);
        }
        if (!item.optional) existing.optional = false;
      } else {
        const key = `${cat}::${item.name.toLowerCase()}`;
        byCategory.get(cat)!.push({
          key,
          name: item.name,
          amounts: [item.amount],
          optional: item.optional ?? false,
          sources: [source],
        });
      }
    }

    return byCategory;
  }, [selectedSlugs, equipmentId]);

  if (selectedSlugs.length === 0) {
    return (
      <MissyEmptyState
        message="Nothing on the list yet."
        submessage="Pick some recipes above to get started."
      />
    );
  }

  const categoryOrder: Ingredient['shoppingCategory'][] = ['protein', 'produce', 'spice', 'liquid', 'pantry', 'fuel', 'equipment'];
  const totalItems = Array.from(grouped.values()).reduce((sum, items) => sum + items.length, 0);
  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-smoke-400">
          {checkedCount} of {totalItems} items checked
        </p>
        <div className="h-1.5 flex-1 max-w-32 mx-4 bg-smoke-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-ember-500 rounded-full transition-all duration-300"
            style={{ width: `${totalItems > 0 ? (checkedCount / totalItems) * 100 : 0}%` }}
          />
        </div>
      </div>

      {categoryOrder.map((cat) => {
        const items = grouped.get(cat);
        if (!items || items.length === 0) return null;

        return (
          <div key={cat} className="mb-5">
            <h3 className="font-display text-sm font-semibold text-ember-400 uppercase tracking-wider mb-2 pb-1 border-b border-smoke-700">
              {SHOPPING_CATEGORY_LABELS[cat]}
            </h3>
            <ul className="space-y-1">
              {items.map((item) => {
                const checked = checkedItems[item.key] ?? false;
                return (
                  <li key={item.key}>
                    <button
                      onClick={() => onToggleItem(item.key)}
                      className="w-full flex items-start gap-3 px-3 py-2.5 rounded-md text-left hover:bg-smoke-800 transition-colors group"
                    >
                      <span
                        className={`mt-0.5 w-5 h-5 shrink-0 rounded border-2 flex items-center justify-center transition-all ${
                          checked
                            ? 'bg-ember-500 border-ember-500'
                            : 'border-smoke-500 group-hover:border-smoke-400'
                        }`}
                      >
                        {checked && (
                          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="text-smoke-950">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                          </svg>
                        )}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className={`text-sm transition-all ${checked ? 'line-through text-smoke-500' : 'text-smoke-100'}`}>
                          {item.name}
                        </span>
                        <span className={`text-xs ml-2 transition-all ${checked ? 'text-smoke-600' : 'text-smoke-400'}`}>
                          {item.amounts.join(' / ')}
                        </span>
                        {item.optional && (
                          <span className="text-[10px] ml-2 text-smoke-500 uppercase">(optional)</span>
                        )}
                        {item.sources.length > 1 && (
                          <div className="text-[10px] text-smoke-500 mt-0.5">
                            from: {item.sources.join(', ')}
                          </div>
                        )}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
