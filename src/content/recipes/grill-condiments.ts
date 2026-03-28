import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'salsaCriolla',
    title: 'Salsa Criolla',
    category: 'condiments',
    description: 'Uruguayan-style fresh onion, pepper, and tomato salsa for grilled meats and choripan.',
    cookTemp: 'No cook',
    cookTime: '15 min prep + 1\u20132 hr rest',
    ingredients: [
      {
        groupName: 'Vegetables',
        items: [
          { name: 'Onion (white or yellow)', amount: '1 large', shoppingCategory: 'produce' },
          { name: 'Bell peppers (red + green)', amount: '1.5', shoppingCategory: 'produce' },
          { name: 'Tomatoes', amount: '3 medium', shoppingCategory: 'produce' },
          { name: 'Garlic', amount: '1 small clove', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Dressing',
        items: [
          { name: 'Red wine vinegar', amount: '3 tbsp', shoppingCategory: 'liquid' },
          { name: 'Olive oil', amount: '1/2 cup', shoppingCategory: 'liquid' },
          { name: 'Dried oregano', amount: '1\u20132 tsp', shoppingCategory: 'spice' },
          { name: 'Salt', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'parrilla-grill'],
  },
  {
    slug: 'flan',
    title: 'Uruguayan Flan with Dulce de Leche',
    category: 'condiments',
    description: 'Smooth baked caramel custard chilled overnight and served with dulce de leche. Make ahead.',
    cookTemp: '320\u2013350\u00B0F (oven)',
    cookTime: '40\u201360 min bake + overnight chill',
    ingredients: [
      {
        groupName: 'Caramel',
        items: [
          { name: 'Sugar', amount: '1 cup', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Custard',
        items: [
          { name: 'Large eggs', amount: '4\u20135', shoppingCategory: 'pantry' },
          { name: 'Milk', amount: '2 cups (or 1.5 cups milk + 0.5 cup cream)', shoppingCategory: 'pantry' },
          { name: 'Sugar', amount: '1/2\u20131 cup', shoppingCategory: 'pantry' },
          { name: 'Vanilla extract', amount: '1\u20132 tsp', shoppingCategory: 'pantry' },
          { name: 'Salt', amount: 'pinch', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Serving',
        items: [
          { name: 'Dulce de leche', amount: 'for topping', shoppingCategory: 'pantry' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'parrilla-grill'],
  },
];
