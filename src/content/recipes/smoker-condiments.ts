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
  {
    slug: 'bbqSauces',
    title: 'Regional BBQ Sauces',
    category: 'condiments',
    description: 'Seven regional American BBQ sauces \u2014 Kansas City, Eastern Carolina vinegar, South Carolina mustard, Alabama white, Texas mop, Western Carolina red dip, and honey-garlic \u2014 with pairing guide.',
    cookTemp: 'Stovetop simmer or no cook',
    cookTime: '10\u201330 min each',
    ingredients: [
      {
        groupName: 'Kansas City Style',
        items: [
          { name: 'Ketchup', amount: '1 cup', shoppingCategory: 'pantry' },
          { name: 'Tomato sauce', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Brown sugar', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Molasses', amount: '1/4 cup', shoppingCategory: 'pantry' },
          { name: 'Apple cider vinegar', amount: '1/2 cup', shoppingCategory: 'liquid' },
          { name: 'Yellow mustard', amount: '2 tbsp', shoppingCategory: 'pantry' },
          { name: 'Worcestershire sauce', amount: '2 tbsp', shoppingCategory: 'liquid' },
          { name: 'Smoked paprika', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Onion powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Chili powder', amount: '1 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Eastern Carolina Vinegar',
        items: [
          { name: 'Distilled white vinegar', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Apple cider vinegar', amount: '1/2 cup', shoppingCategory: 'liquid' },
          { name: 'Brown sugar', amount: '1 tbsp', shoppingCategory: 'pantry' },
          { name: 'Red pepper flakes', amount: '1 tbsp', shoppingCategory: 'spice' },
          { name: 'Cayenne', amount: '1/2 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'South Carolina Mustard (Carolina Gold)',
        items: [
          { name: 'Yellow mustard', amount: '3/4 cup', shoppingCategory: 'pantry' },
          { name: 'Apple cider vinegar', amount: '1/2 cup', shoppingCategory: 'liquid' },
          { name: 'Honey', amount: '1/3 cup', shoppingCategory: 'pantry' },
          { name: 'Brown sugar', amount: '2 tbsp', shoppingCategory: 'pantry' },
          { name: 'Ketchup', amount: '2 tbsp', shoppingCategory: 'pantry' },
          { name: 'Worcestershire sauce', amount: '1\u20132 tsp', shoppingCategory: 'liquid' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Alabama White Sauce',
        items: [
          { name: 'Mayonnaise', amount: '1 cup', shoppingCategory: 'pantry' },
          { name: 'Apple cider vinegar', amount: '1/4 cup', shoppingCategory: 'liquid' },
          { name: 'Lemon juice', amount: '2\u20133 tbsp', shoppingCategory: 'produce' },
          { name: 'Prepared horseradish', amount: '1\u20132 tbsp', shoppingCategory: 'pantry' },
          { name: 'Sugar or honey', amount: '1 tbsp', shoppingCategory: 'pantry' },
          { name: 'Black pepper', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Texas Mop Sauce',
        items: [
          { name: 'Beef stock or water', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Apple cider vinegar', amount: '1/2 cup', shoppingCategory: 'liquid' },
          { name: 'Worcestershire sauce', amount: '1/4 cup', shoppingCategory: 'liquid' },
          { name: 'Yellow mustard', amount: '2 tbsp', shoppingCategory: 'pantry' },
          { name: 'Tomato paste', amount: '2 tbsp', shoppingCategory: 'pantry' },
          { name: 'Smoked paprika', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Chili powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Butter or tallow', amount: '1\u20132 tbsp', optional: true, shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Western Carolina Red Dip',
        items: [
          { name: 'Apple cider vinegar', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Ketchup', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Brown sugar', amount: '1/4 cup', shoppingCategory: 'pantry' },
          { name: 'Yellow mustard', amount: '2 tbsp', shoppingCategory: 'pantry' },
          { name: 'Worcestershire sauce', amount: '2\u20133 tbsp', shoppingCategory: 'liquid' },
          { name: 'Onion powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Cayenne', amount: '1/2 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Sweet Honey-Garlic',
        items: [
          { name: 'Ketchup or tomato sauce', amount: '1 cup', shoppingCategory: 'pantry' },
          { name: 'Honey', amount: '1/3 cup', shoppingCategory: 'pantry' },
          { name: 'Brown sugar', amount: '1/4 cup', shoppingCategory: 'pantry' },
          { name: 'Apple cider vinegar', amount: '1/4 cup', shoppingCategory: 'liquid' },
          { name: 'Soy sauce or Worcestershire', amount: '2 tbsp', shoppingCategory: 'liquid' },
          { name: 'Garlic (minced)', amount: '3\u20134 cloves', shoppingCategory: 'produce' },
          { name: 'Onion powder', amount: '1 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Common Staples (all sauces)',
        items: [
          { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
        ],
      },
    ],
  },
];
