export type Category = 'beef' | 'pork' | 'poultry' | 'seafood' | 'veggies' | 'condiments' | 'reference';

export interface Ingredient {
  name: string;
  amount: string;
  optional?: boolean;
  shoppingCategory: 'protein' | 'spice' | 'liquid' | 'produce' | 'pantry' | 'equipment' | 'fuel';
}

export interface IngredientGroup {
  groupName: string;
  items: Ingredient[];
}

export interface RecipeMeta {
  slug: string;
  title: string;
  category: Category;
  description: string;
  cookTemp: string;
  cookTime: string;
  ingredients: IngredientGroup[];
}

export interface HowToMeta {
  slug: string;
  title: string;
  description: string;
  shoppingItems?: IngredientGroup[];
}

export const CATEGORY_LABELS: Record<Category, string> = {
  beef: 'Beef',
  pork: 'Pork',
  poultry: 'Poultry',
  seafood: 'Seafood',
  veggies: 'Veggies & Sides',
  condiments: 'Condiments',
  reference: 'Reference',
};

export const CATEGORY_ICONS: Record<Category, string> = {
  beef: '\u{1F404}',
  pork: '\u{1F416}',
  poultry: '\u{1F414}',
  seafood: '\u{1F41F}',
  veggies: '\u{1F96C}',
  condiments: '\u{1F9C8}',
  reference: '\u{1F4D6}',
};

export const SHOPPING_CATEGORY_LABELS: Record<Ingredient['shoppingCategory'], string> = {
  protein: 'Proteins',
  spice: 'Spices & Rubs',
  liquid: 'Liquids & Sauces',
  produce: 'Produce',
  pantry: 'Pantry',
  equipment: 'Equipment',
  fuel: 'Fuel & Wood',
};
