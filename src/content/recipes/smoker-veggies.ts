import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'salsa',
    title: 'Smoked Salsa',
    category: 'veggies',
    description: 'Smoke the vegetables first, then finish into bright, fresh salsa with lime and cilantro.',
    cookTemp: '325\u2013375\u00B0F',
    cookTime: '15\u201330 minutes',
    ingredients: [
      {
        groupName: 'Vegetables',
        items: [
          { name: 'Roma/plum tomatoes', amount: '2\u20133 lbs (6\u20138)', shoppingCategory: 'produce' },
          { name: 'Bell peppers', amount: '2\u20133', shoppingCategory: 'produce' },
          { name: 'Jalape\u00F1os or serranos', amount: '1\u20132', optional: true, shoppingCategory: 'produce' },
          { name: 'White or yellow onion', amount: '1 medium', shoppingCategory: 'produce' },
          { name: 'Garlic cloves', amount: '4\u20136', shoppingCategory: 'produce' },
          { name: 'Pineapple or mango', amount: '1\u20132 cups', optional: true, shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Fresh Finish',
        items: [
          { name: 'Fresh cilantro', amount: '1/4\u20131/2 cup, chopped', shoppingCategory: 'produce' },
          { name: 'Limes', amount: '1\u20132', shoppingCategory: 'produce' },
          { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Cumin', amount: '1/2 tsp', optional: true, shoppingCategory: 'spice' },
          { name: 'Chili powder', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/maple/oak)', amount: '1\u20132 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker', 'charcoal-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '275\u2013300\u00B0F',
        cookTime: '20\u201340 minutes',
        ingredients: [
          {
            groupName: 'Vegetables',
            items: [
              { name: 'Roma/plum tomatoes', amount: '2\u20133 lbs (6\u20138)', shoppingCategory: 'produce' },
              { name: 'Bell peppers', amount: '2\u20133', shoppingCategory: 'produce' },
              { name: 'Jalape\u00F1os or serranos', amount: '1\u20132', optional: true, shoppingCategory: 'produce' },
              { name: 'White or yellow onion', amount: '1 medium', shoppingCategory: 'produce' },
              { name: 'Garlic cloves', amount: '4\u20136', shoppingCategory: 'produce' },
              { name: 'Pineapple or mango', amount: '1\u20132 cups', optional: true, shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Fresh Finish',
            items: [
              { name: 'Fresh cilantro', amount: '1/4\u20131/2 cup, chopped', shoppingCategory: 'produce' },
              { name: 'Limes', amount: '1\u20132', shoppingCategory: 'produce' },
              { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Cumin', amount: '1/2 tsp', optional: true, shoppingCategory: 'spice' },
              { name: 'Chili powder', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or oak)', amount: '1 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'The SM045 tops out at ~300\u00B0F, so skins won\u2019t char as dramatically as on a hot offset. Cut tomatoes and peppers cut-side up to maximize surface contact with the hot air. Smoke will feel more pronounced in the sealed cabinet \u2014 1 oz of wood is plenty. Check veggies at 20 minutes; pull each item as it softens.',
      },
      {
        equipmentId: 'charcoal-grill',
        cookTemp: '400\u2013450\u00B0F direct',
        cookTime: '15\u201325 minutes',
        ingredients: [
          {
            groupName: 'Vegetables',
            items: [
              { name: 'Roma/plum tomatoes', amount: '2\u20133 lbs (6\u20138)', shoppingCategory: 'produce' },
              { name: 'Bell peppers', amount: '2\u20133', shoppingCategory: 'produce' },
              { name: 'Jalape\u00F1os or serranos', amount: '1\u20132', optional: true, shoppingCategory: 'produce' },
              { name: 'White or yellow onion', amount: '1 medium', shoppingCategory: 'produce' },
              { name: 'Garlic cloves', amount: '4\u20136', shoppingCategory: 'produce' },
              { name: 'Pineapple or mango', amount: '1\u20132 cups', optional: true, shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Fresh Finish',
            items: [
              { name: 'Fresh cilantro', amount: '1/4\u20131/2 cup, chopped', shoppingCategory: 'produce' },
              { name: 'Limes', amount: '1\u20132', shoppingCategory: 'produce' },
              { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Cumin', amount: '1/2 tsp', optional: true, shoppingCategory: 'spice' },
              { name: 'Chili powder', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Charcoal',
            items: [
              { name: 'Charcoal briquettes', amount: '3/4 chimney (~3\u20134 lb)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Charcoal grill salsa is actually better than the offset version \u2014 higher direct heat means more char and caramelization on the tomatoes and peppers. Full-bed fire, pan mid position, 400\u2013450\u00B0F. Lay veggies cut-side down directly on the grate. Tomatoes 12\u201318 min, peppers 15\u201325 min, onion wedges 15\u201320 min, garlic cloves in foil 10\u201315 min. Lid closed except to flip. Pull each item as skin blisters and chars, then steam covered 10 minutes. No wood chunks needed \u2014 the charcoal char is the flavor.',
      },
    ],
  },
  {
    slug: 'veggies',
    title: 'Full Vegetarian Spread',
    category: 'veggies',
    description: 'Smoked eggplant, portobello, peppers, tomatoes, and fresh grilled veggies for a crowd.',
    cookTemp: '325\u2013375\u00B0F',
    cookTime: '2.5\u20133.5 hours (staggered)',
    ingredients: [
      {
        groupName: 'Smoked Stars',
        items: [
          { name: 'Eggplant', amount: '2 large', shoppingCategory: 'produce' },
          { name: 'Portobello mushroom caps', amount: '4\u20136 large', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Supporting Veggies',
        items: [
          { name: 'Bell peppers', amount: '3\u20134', shoppingCategory: 'produce' },
          { name: 'Onions', amount: '2\u20133', shoppingCategory: 'produce' },
          { name: 'Large tomatoes', amount: '2\u20133', shoppingCategory: 'produce' },
          { name: 'Pineapple or mango', amount: 'optional', optional: true, shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Fresh Grilled',
        items: [
          { name: 'Zucchini or summer squash', amount: '2\u20133', shoppingCategory: 'produce' },
          { name: 'Asparagus', amount: '1 bunch', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Finishes',
        items: [
          { name: 'Olive oil', amount: 'for drizzling', shoppingCategory: 'pantry' },
          { name: 'Balsamic glaze', amount: 'for finishing', shoppingCategory: 'pantry' },
          { name: 'Lemon', amount: '1', shoppingCategory: 'produce' },
          { name: 'Fresh herbs (parsley/basil/cilantro)', amount: 'handful', shoppingCategory: 'produce' },
          { name: 'Crusty bread or pita', amount: 'as needed', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/maple/oak)', amount: '2\u20133 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '250\u2013275\u00B0F',
        cookTime: '3\u20135 hours (staggered)',
        ingredients: [
          {
            groupName: 'Smoked Stars',
            items: [
              { name: 'Eggplant', amount: '2 large', shoppingCategory: 'produce' },
              { name: 'Portobello mushroom caps', amount: '4\u20136 large', shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Supporting Veggies',
            items: [
              { name: 'Bell peppers', amount: '3\u20134', shoppingCategory: 'produce' },
              { name: 'Onions', amount: '2\u20133', shoppingCategory: 'produce' },
              { name: 'Large tomatoes', amount: '2\u20133', shoppingCategory: 'produce' },
              { name: 'Pineapple or mango', amount: 'optional', optional: true, shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Fresh Finish',
            items: [
              { name: 'Zucchini or summer squash', amount: '2\u20133', shoppingCategory: 'produce' },
              { name: 'Asparagus', amount: '1 bunch', shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Finishes',
            items: [
              { name: 'Olive oil', amount: 'for drizzling', shoppingCategory: 'pantry' },
              { name: 'Balsamic glaze', amount: 'for finishing', shoppingCategory: 'pantry' },
              { name: 'Lemon', amount: '1', shoppingCategory: 'produce' },
              { name: 'Fresh herbs (parsley/basil/cilantro)', amount: 'handful', shoppingCategory: 'produce' },
              { name: 'Crusty bread or pita', amount: 'as needed', shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or oak)', amount: '1\u20132 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'The SM045 runs at 250\u2013275\u00B0F and is more humid than an offset, so veggies will soften more than they char. That\u2019s fine \u2014 eggplant and portobello become wonderfully silky. Smoke penetration is more intense in the closed cabinet; 1\u20132 oz of mild wood is plenty. Stagger the SM045 loads the same way you would an offset \u2014 denser items like eggplant first, delicate tomatoes last. Finish zucchini and asparagus on a separate grill or grill pan for char.',
      },
    ],
  },
];
