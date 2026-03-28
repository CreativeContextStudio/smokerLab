import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'ensaladaMixta',
    title: 'Ensalada Mixta (Classic Mixed Salad)',
    category: 'veggies',
    description: 'The canonical Uruguayan asado salad \u2014 torn lettuce, sliced tomato, and thin onion rings dressed simply with red wine vinegar, olive oil, and salt. Ready before the fire is even lit.',
    cookTemp: 'No cook',
    cookTime: '10 min prep',
    ingredients: [
      {
        groupName: 'Salad',
        items: [
          { name: 'Romaine or butter lettuce (torn)', amount: '1 large head', shoppingCategory: 'produce' },
          { name: 'Tomatoes (sliced)', amount: '3\u20134 medium', shoppingCategory: 'produce' },
          { name: 'White or red onion (thinly sliced)', amount: '1 medium', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Dressing',
        items: [
          { name: 'Red wine vinegar', amount: '3 tbsp', shoppingCategory: 'liquid' },
          { name: 'Olive oil', amount: '4 tbsp', shoppingCategory: 'liquid' },
          { name: 'Salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['parrilla-grill'],
  },
  {
    slug: 'papasAlRescoldo',
    title: 'Papas al Rescoldo (Ember-Buried Potatoes)',
    category: 'veggies',
    description: 'The classic parrilla side dish \u2014 whole potatoes buried directly in the glowing brasero ash and coals for an hour, emerging with fluffy interiors and smoky charred skins.',
    cookTemp: 'Direct ember burial (brasero)',
    cookTime: '50\u201370 min',
    ingredients: [
      {
        groupName: 'Potatoes',
        items: [
          { name: 'Large russet or waxy potatoes (unpeeled)', amount: '4\u20136', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Serving',
        items: [
          { name: 'Butter', amount: 'to taste', shoppingCategory: 'pantry' },
          { name: 'Sal gruesa', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Sour cream or cr\u00e8me fra\u00EEche (optional)', amount: 'to taste', optional: true, shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Fire',
        items: [
          { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '(use existing brasero embers)', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['parrilla-grill'],
  },
  {
    slug: 'morronesAsados',
    title: 'Morrones Asados (Roasted Peppers)',
    category: 'veggies',
    description: 'Whole bell peppers charred directly on the parrilla grate until blackened, then steamed in a bag and peeled to reveal silky sweet flesh \u2014 served with olive oil and garlic.',
    cookTemp: 'Hot ember bed (low grate)',
    cookTime: '20\u201325 min',
    ingredients: [
      {
        groupName: 'Peppers',
        items: [
          { name: 'Red bell peppers (whole)', amount: '4\u20136', shoppingCategory: 'produce' },
          { name: 'Green bell peppers (whole)', amount: '2\u20133', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Dressing',
        items: [
          { name: 'Olive oil', amount: '3\u20134 tbsp', shoppingCategory: 'liquid' },
          { name: 'Garlic (sliced)', amount: '2\u20133 cloves', shoppingCategory: 'produce' },
          { name: 'Salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Red wine vinegar (optional)', amount: '1 tbsp', optional: true, shoppingCategory: 'liquid' },
        ],
      },
      {
        groupName: 'Equipment',
        items: [
          { name: 'Paper bag or plastic zip bag (for steaming)', amount: '1', shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Fire',
        items: [
          { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '(use existing ember bed)', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['parrilla-grill'],
  },
];
