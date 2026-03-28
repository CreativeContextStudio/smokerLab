import { useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useShoppingList } from '../hooks/useShoppingList';
import ShoppingRecipeSelector from '../components/ShoppingRecipeSelector';
import ShoppingIngredientList from '../components/ShoppingIngredientList';

export default function ShoppingListPage() {
  const { selectedSlugs, checkedItems, toggleRecipe, addRecipe, toggleItem, clearChecked, clearAll } = useShoppingList();
  const [searchParams, setSearchParams] = useSearchParams();

  // Handle ?add=slug from recipe detail page
  const processedRef = useRef(false);
  useEffect(() => {
    const addSlug = searchParams.get('add');
    if (addSlug && !processedRef.current) {
      processedRef.current = true;
      addRecipe(addSlug);
      setSearchParams({}, { replace: true });
    }
  }, [searchParams, addRecipe, setSearchParams]);

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h1 className="font-display text-2xl font-bold text-smoke-50">Shopping List</h1>
        {selectedSlugs.length > 0 && (
          <div className="flex gap-2">
            <button
              onClick={clearChecked}
              className="text-xs text-smoke-400 hover:text-smoke-200 transition-colors px-2 py-1 rounded hover:bg-smoke-800"
            >
              Uncheck all
            </button>
            <button
              onClick={clearAll}
              className="text-xs text-coal-400 hover:text-coal-500 transition-colors px-2 py-1 rounded hover:bg-smoke-800"
            >
              Clear list
            </button>
          </div>
        )}
      </div>
      <p className="text-smoke-400 text-sm mb-5">
        Pick recipes to combine into one shopping list. Checked items persist between visits.
      </p>

      <ShoppingRecipeSelector
        selectedSlugs={selectedSlugs}
        onToggle={toggleRecipe}
      />

      <div className="border-t border-smoke-700 pt-4">
        <ShoppingIngredientList
          selectedSlugs={selectedSlugs}
          checkedItems={checkedItems}
          onToggleItem={toggleItem}
        />
      </div>
    </div>
  );
}
