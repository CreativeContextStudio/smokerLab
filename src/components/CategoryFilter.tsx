import type { Category } from '../types';
import { CATEGORY_LABELS, CATEGORY_ICONS } from '../types';

interface Props {
  categories: Category[];
  selected: Category | null;
  onSelect: (cat: Category | null) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: Props) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          selected === null
            ? 'bg-ember-500 text-smoke-950'
            : 'bg-smoke-800 text-smoke-300 hover:bg-smoke-700 hover:text-smoke-100'
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat === selected ? null : cat)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors inline-flex items-center gap-1.5 ${
            selected === cat
              ? 'bg-ember-500 text-smoke-950'
              : 'bg-smoke-800 text-smoke-300 hover:bg-smoke-700 hover:text-smoke-100'
          }`}
        >
          <span className="text-sm">{CATEGORY_ICONS[cat]}</span>
          {CATEGORY_LABELS[cat]}
        </button>
      ))}
    </div>
  );
}
