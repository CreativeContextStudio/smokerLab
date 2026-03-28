import { useState, useMemo } from 'react';
import { getAllRecipes } from '../content/loader';
import { useEquipmentContext } from '../context/EquipmentContext';
import RecipeCard from '../components/RecipeCard';
import CategoryFilter from '../components/CategoryFilter';
import MissyEmptyState from '../components/MissyEmptyState';
import type { Category } from '../types';

const allRecipes = getAllRecipes();

export default function RecipesPage() {
  const { equipmentId, equipment } = useEquipmentContext();
  const [selectedCat, setSelectedCat] = useState<Category | null>(null);
  const [search, setSearch] = useState('');

  const equipmentRecipes = useMemo(() => {
    return allRecipes.filter((r) =>
      !r.supportedEquipment || r.supportedEquipment.includes(equipmentId)
    );
  }, [equipmentId]);

  const categories = useMemo(() => {
    return [...new Set(equipmentRecipes.map((r) => r.category))] as Category[];
  }, [equipmentRecipes]);

  const filtered = useMemo(() => {
    return equipmentRecipes.filter((r) => {
      if (selectedCat && r.category !== selectedCat) return false;
      if (search) {
        const q = search.toLowerCase();
        return (
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [equipmentRecipes, selectedCat, search]);

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-smoke-50 mb-1">Recipes</h1>
      <p className="text-smoke-400 text-sm mb-5">
        {equipmentRecipes.length} recipes for the {equipment.model}
      </p>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search recipes..."
          aria-label="Search recipes"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-sm bg-smoke-800 border border-smoke-600 rounded-md px-3 py-2 text-sm text-smoke-100 placeholder-smoke-500 focus:outline-none focus:border-ember-500 focus:ring-1 focus:ring-ember-500 transition-colors"
        />
      </div>

      <CategoryFilter
        categories={categories}
        selected={selectedCat}
        onSelect={setSelectedCat}
      />

      {filtered.length === 0 ? (
        <MissyEmptyState
          message="No recipes match your search."
          submessage="Try a different search term or clear the filter."
        />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}
