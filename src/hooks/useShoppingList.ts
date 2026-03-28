import { useState, useCallback, useEffect } from 'react';

const STORAGE_KEY = 'smokerlab-shopping';

interface ShoppingState {
  selectedSlugs: string[];
  checkedItems: Record<string, boolean>; // "groupName::itemName" -> checked
}

function loadState(): ShoppingState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (
        Array.isArray(parsed.selectedSlugs) &&
        typeof parsed.checkedItems === 'object' &&
        parsed.checkedItems !== null
      ) {
        return parsed;
      }
    }
  } catch { /* ignore */ }
  return { selectedSlugs: [], checkedItems: {} };
}

function saveState(state: ShoppingState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function useShoppingList() {
  const [state, setState] = useState<ShoppingState>(loadState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const toggleRecipe = useCallback((slug: string) => {
    setState((prev) => {
      const selected = prev.selectedSlugs.includes(slug)
        ? prev.selectedSlugs.filter((s) => s !== slug)
        : [...prev.selectedSlugs, slug];
      return { ...prev, selectedSlugs: selected };
    });
  }, []);

  const addRecipe = useCallback((slug: string) => {
    setState((prev) => {
      if (prev.selectedSlugs.includes(slug)) return prev;
      return { ...prev, selectedSlugs: [...prev.selectedSlugs, slug] };
    });
  }, []);

  const toggleItem = useCallback((key: string) => {
    setState((prev) => ({
      ...prev,
      checkedItems: { ...prev.checkedItems, [key]: !prev.checkedItems[key] },
    }));
  }, []);

  const clearChecked = useCallback(() => {
    setState((prev) => ({ ...prev, checkedItems: {} }));
  }, []);

  const clearAll = useCallback(() => {
    setState({ selectedSlugs: [], checkedItems: {} });
  }, []);

  return {
    selectedSlugs: state.selectedSlugs,
    checkedItems: state.checkedItems,
    toggleRecipe,
    addRecipe,
    toggleItem,
    clearChecked,
    clearAll,
  };
}
