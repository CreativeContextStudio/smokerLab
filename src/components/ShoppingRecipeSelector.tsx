import { getAllRecipes, getAllHowTos } from '../content/loader';
import { CATEGORY_ICONS } from '../types';

const allRecipes = getAllRecipes().filter((r) => r.ingredients.length > 0);
const modsHowTo = getAllHowTos().find((h) => h.slug === 'shoppingList');

interface Props {
  selectedSlugs: string[];
  onToggle: (slug: string) => void;
}

export default function ShoppingRecipeSelector({ selectedSlugs, onToggle }: Props) {
  return (
    <div className="mb-6">
      <h2 className="font-display text-lg font-semibold text-smoke-50 mb-3">
        Select recipes to build your list
      </h2>
      <div className="flex flex-wrap gap-2">
        {/* Smoker Mods option */}
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
            Smoker Mods
          </button>
        )}

        {/* Recipe options */}
        {allRecipes.map((recipe) => (
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
