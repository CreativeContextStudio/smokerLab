import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'chimichurriUruguayo',
    title: 'Chimichurri Uruguayo',
    category: 'condiments',
    description: 'The essential Uruguayan table sauce \u2014 parsley-forward, bright with red wine vinegar, and fragrant with oregano and garlic. Made the day before and served at the table, never used as a marinade.',
    cookTemp: 'No cook',
    cookTime: '15 min prep + overnight rest',
    ingredients: [
      {
        groupName: 'Herbs & Aromatics',
        items: [
          { name: 'Fresh flat-leaf parsley (finely chopped)', amount: '1 cup packed', shoppingCategory: 'produce' },
          { name: 'Garlic (minced)', amount: '4\u20136 cloves', shoppingCategory: 'produce' },
          { name: 'Dried oregano', amount: '1 tbsp', shoppingCategory: 'spice' },
          { name: 'Red pepper flakes', amount: '1\u20132 tsp', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: '1/2 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Dressing',
        items: [
          { name: 'Red wine vinegar', amount: '3 tbsp', shoppingCategory: 'liquid' },
          { name: 'Olive oil', amount: '1/2 cup', shoppingCategory: 'liquid' },
          { name: 'Salt', amount: '1 tsp', shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['parrilla-grill'],
  },
];
