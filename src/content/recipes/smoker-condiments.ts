import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'sauces',
    title: 'Sauces & Pairings',
    category: 'condiments',
    description: '10 sauces that pair with smoked brisket, pork, chicken, fish, and veggies.',
    cookTemp: 'N/A',
    cookTime: '10\u201315 min each',
    ingredients: [
      {
        groupName: 'Ranch',
        items: [
          { name: 'Sour cream', amount: '1 cup', shoppingCategory: 'pantry' },
          { name: 'Buttermilk', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Onion powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Parsley', amount: '1 tbsp', shoppingCategory: 'produce' },
          { name: 'Dill', amount: '1 tbsp', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Cilantro-Lime Crema',
        items: [
          { name: 'Sour cream or Greek yogurt', amount: '1 cup', shoppingCategory: 'pantry' },
          { name: 'Limes', amount: '1\u20132', shoppingCategory: 'produce' },
          { name: 'Fresh cilantro', amount: '1/2 cup', shoppingCategory: 'produce' },
          { name: 'Garlic clove', amount: '1 small', shoppingCategory: 'produce' },
          { name: 'Cumin', amount: 'pinch', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Alabama White BBQ',
        items: [
          { name: 'Mayonnaise', amount: '1 cup', shoppingCategory: 'pantry' },
          { name: 'Apple cider vinegar', amount: '2\u20133 tbsp', shoppingCategory: 'liquid' },
          { name: 'Lemon juice', amount: '1 tbsp', shoppingCategory: 'produce' },
          { name: 'Sugar', amount: '1 tsp', shoppingCategory: 'pantry' },
          { name: 'Smoked paprika', amount: '1/2 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Chimichurri',
        items: [
          { name: 'Fresh parsley', amount: '1 cup, chopped', shoppingCategory: 'produce' },
          { name: 'Fresh cilantro', amount: '1/4 cup', optional: true, shoppingCategory: 'produce' },
          { name: 'Garlic cloves', amount: '4\u20136', shoppingCategory: 'produce' },
          { name: 'Olive oil', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Red wine vinegar', amount: '3 tbsp', shoppingCategory: 'liquid' },
          { name: 'Red pepper flakes', amount: '1/2 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Sweet & Tangy BBQ Mop',
        items: [
          { name: 'Cider vinegar', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Ketchup or tomato paste', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Brown sugar', amount: '1/4 cup', shoppingCategory: 'pantry' },
          { name: 'Mustard', amount: '1 tbsp', shoppingCategory: 'pantry' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Smoked paprika', amount: '1/2 tsp', shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker', 'charcoal-grill'],
  },
];
