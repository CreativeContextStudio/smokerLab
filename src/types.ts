export type Category = 'beef' | 'pork' | 'poultry' | 'seafood' | 'veggies' | 'condiments' | 'reference';

export type EquipmentType = 'offset-smoker' | 'charcoal-grill' | 'gas-grill' | 'electric-smoker' | 'parrilla-grill';

export interface EquipmentProfile {
  id: EquipmentType;
  name: string;
  model: string;
  shortName: string;
  description: string;
  fuelType: 'charcoal' | 'gas' | 'electric' | 'wood';
  supportsSmoke: boolean;
  defaultCookMethod: 'low-and-slow' | 'direct' | 'indirect' | 'set-and-forget' | 'live-fire';
}

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

export interface EquipmentOverride {
  equipmentId: EquipmentType;
  cookTemp: string;
  cookTime: string;
  ingredients: IngredientGroup[];
  notes?: string;
}

export interface RecipeMeta {
  slug: string;
  title: string;
  category: Category;
  description: string;
  cookTemp: string;
  cookTime: string;
  ingredients: IngredientGroup[];
  supportedEquipment?: EquipmentType[];
  equipmentOverrides?: EquipmentOverride[];
}

export interface HowToMeta {
  slug: string;
  title: string;
  description: string;
  shoppingItems?: IngredientGroup[];
  equipmentId?: EquipmentType;
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
