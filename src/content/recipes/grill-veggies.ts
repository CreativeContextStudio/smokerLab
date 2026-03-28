import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'streetCornGrill',
    title: 'Mexican Street Corn (Elote)',
    category: 'veggies',
    description: 'Charred corn in the husk then dressed with mayo, cotija, chili, and lime for elote-style street corn.',
    cookTemp: '375\u2013425\u00B0F',
    cookTime: '15\u201320 min',
    ingredients: [
      {
        groupName: 'Corn',
        items: [
          { name: 'Fresh corn in the husk', amount: '6\u20138 ears', shoppingCategory: 'produce' },
          { name: 'Butter or oil', amount: 'for brushing', shoppingCategory: 'pantry' },
          { name: 'Salt', amount: 'to taste', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Elote Topping',
        items: [
          { name: 'Mayonnaise or Mexican crema', amount: '1/2 cup', shoppingCategory: 'liquid' },
          { name: 'Cotija or feta cheese', amount: '1/4 cup crumbled', shoppingCategory: 'pantry' },
          { name: 'Limes', amount: '1\u20132', shoppingCategory: 'produce' },
          { name: 'Chili powder or Tajin', amount: '1\u20132 tsp', shoppingCategory: 'spice' },
          { name: 'Fresh cilantro', amount: 'optional, chopped', optional: true, shoppingCategory: 'produce' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '375\u2013425\u00B0F',
        cookTime: '15\u201320 min',
        ingredients: [
          {
            groupName: 'Corn',
            items: [
              { name: 'Fresh corn in the husk', amount: '6\u20138 ears', shoppingCategory: 'produce' },
              { name: 'Butter or oil', amount: 'for brushing', shoppingCategory: 'pantry' },
              { name: 'Salt', amount: 'to taste', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Elote Topping',
            items: [
              { name: 'Mayonnaise or Mexican crema', amount: '1/2 cup', shoppingCategory: 'liquid' },
              { name: 'Cotija or feta cheese', amount: '1/4 cup crumbled', shoppingCategory: 'pantry' },
              { name: 'Limes', amount: '1\u20132', shoppingCategory: 'produce' },
              { name: 'Chili powder or Tajin', amount: '1\u20132 tsp', shoppingCategory: 'spice' },
              { name: 'Fresh cilantro', amount: 'optional, chopped', optional: true, shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II: all burners MEDIUM-HIGH, preheat 10\u201315 min to ~400\u00B0F. Direct cook across full grate, lid open. Rotate every 2\u20133 min. No changes to timing or technique \u2014 corn in husk works identically on gas.',
      },
    ],
  },
  {
    slug: 'veggieKababsGrill',
    title: 'Veggie Kebabs',
    category: 'veggies',
    description: 'Zucchini, pepper, onion, and mushroom skewers charred over direct medium charcoal heat.',
    cookTemp: '375\u2013425\u00B0F',
    cookTime: '10\u201315 min',
    ingredients: [
      {
        groupName: 'Vegetables',
        items: [
          { name: 'Zucchini', amount: '2 medium', shoppingCategory: 'produce' },
          { name: 'Bell peppers', amount: '2\u20133', shoppingCategory: 'produce' },
          { name: 'Red onion', amount: '1 large', shoppingCategory: 'produce' },
          { name: 'Cremini or button mushrooms', amount: '8\u201312', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Olive oil', amount: '3 tbsp', shoppingCategory: 'liquid' },
          { name: 'Salt', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: '1/2 tsp', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Dried oregano', amount: '1 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Equipment',
        items: [
          { name: 'Metal skewers', amount: '8\u201312', shoppingCategory: 'equipment' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '375\u2013425\u00B0F',
        cookTime: '10\u201315 min',
        ingredients: [
          {
            groupName: 'Vegetables',
            items: [
              { name: 'Zucchini', amount: '2 medium', shoppingCategory: 'produce' },
              { name: 'Bell peppers', amount: '2\u20133', shoppingCategory: 'produce' },
              { name: 'Red onion', amount: '1 large', shoppingCategory: 'produce' },
              { name: 'Cremini or button mushrooms', amount: '8\u201312', shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Olive oil', amount: '3 tbsp', shoppingCategory: 'liquid' },
              { name: 'Salt', amount: '1 tsp', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: '1/2 tsp', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
              { name: 'Dried oregano', amount: '1 tsp', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Equipment',
            items: [
              { name: 'Metal skewers', amount: '8\u201312', shoppingCategory: 'equipment' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II: all burners MEDIUM-HIGH, preheat 10\u201315 min to ~400\u00B0F. Direct cook across full grate, lid open. Drippings hit Flavorizer bars for smoke. No changes to timing.',
      },
    ],
  },
  {
    slug: 'romaineCabbageGrill',
    title: 'Grilled Romaine & Cabbage Wedges',
    category: 'veggies',
    description: 'Charred romaine halves or cabbage wedges grilled direct over high heat as a veggie steak side.',
    cookTemp: '450\u2013550\u00B0F',
    cookTime: '4\u20136 min',
    ingredients: [
      {
        groupName: 'Vegetables',
        items: [
          { name: 'Romaine lettuce heads', amount: '2', shoppingCategory: 'produce' },
          { name: 'Medium cabbage', amount: '1 (alt)', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Seasoning & Finishing',
        items: [
          { name: 'Olive oil', amount: '2\u20133 tbsp', shoppingCategory: 'liquid' },
          { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Lemon', amount: '1', shoppingCategory: 'produce' },
          { name: 'Parmesan or cotija cheese', amount: 'to taste', shoppingCategory: 'pantry' },
          { name: 'Chili flakes', amount: 'to taste', optional: true, shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '450\u2013550\u00B0F',
        cookTime: '4\u20136 min',
        ingredients: [
          {
            groupName: 'Vegetables',
            items: [
              { name: 'Romaine lettuce heads', amount: '2', shoppingCategory: 'produce' },
              { name: 'Medium cabbage', amount: '1 (alt)', shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Seasoning & Finishing',
            items: [
              { name: 'Olive oil', amount: '2\u20133 tbsp', shoppingCategory: 'liquid' },
              { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Lemon', amount: '1', shoppingCategory: 'produce' },
              { name: 'Parmesan or cotija cheese', amount: 'to taste', shoppingCategory: 'pantry' },
              { name: 'Chili flakes', amount: 'to taste', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II: all burners HIGH, preheat 10\u201315 min to ~500\u00B0F. Direct HIGH lid open. 2 min cut-side down, flip, 1\u20132 min. Fast cook works identically on gas.',
      },
    ],
  },
  {
    slug: 'pineapplePeachesGrill',
    title: 'Grilled Pineapple & Peach Rings',
    category: 'veggies',
    description: 'Caramelized pineapple rings and peach halves grilled over direct medium heat for dessert or pairing.',
    cookTemp: '375\u2013425\u00B0F',
    cookTime: '4\u20136 min',
    ingredients: [
      {
        groupName: 'Fruit',
        items: [
          { name: 'Fresh pineapple (whole, cored)', amount: '1', shoppingCategory: 'produce' },
          { name: 'Ripe peaches (freestone)', amount: '4\u20136', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Glaze',
        items: [
          { name: 'Avocado oil', amount: '2 tbsp', shoppingCategory: 'liquid' },
          { name: 'Brown sugar or honey', amount: '2 tbsp', shoppingCategory: 'pantry' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '375\u2013425\u00B0F',
        cookTime: '4\u20136 min',
        ingredients: [
          {
            groupName: 'Fruit',
            items: [
              { name: 'Fresh pineapple (whole, cored)', amount: '1', shoppingCategory: 'produce' },
              { name: 'Ripe peaches (freestone)', amount: '4\u20136', shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Glaze',
            items: [
              { name: 'Avocado oil', amount: '2 tbsp', shoppingCategory: 'liquid' },
              { name: 'Brown sugar or honey', amount: '2 tbsp', shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II: all burners MEDIUM, preheat 10 min to ~400\u00B0F. Direct MEDIUM lid open. Watch sugar glaze closely \u2014 gas is consistent heat with no flare-up spikes from coals. 2\u20133 min per side. Identical timing.',
      },
    ],
  },
  {
    slug: 'garlicFlatbreadGrill',
    title: 'Garlic Bread & Flatbread',
    category: 'veggies',
    description: 'Quick-grilled garlic butter baguette slices or naan over direct medium charcoal heat.',
    cookTemp: '375\u2013425\u00B0F',
    cookTime: '3\u20135 min',
    ingredients: [
      {
        groupName: 'Bread',
        items: [
          { name: 'Baguette or French loaf', amount: '1', shoppingCategory: 'pantry' },
          { name: 'Naan or flatbread', amount: '4\u20136 pieces (alt)', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Garlic Butter',
        items: [
          { name: 'Butter (softened)', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Garlic cloves', amount: '4\u20136', shoppingCategory: 'produce' },
          { name: 'Parsley (fresh, chopped)', amount: '1 tbsp', shoppingCategory: 'produce' },
          { name: 'Salt', amount: 'pinch', shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '375\u2013425\u00B0F',
        cookTime: '3\u20135 min',
        ingredients: [
          {
            groupName: 'Bread',
            items: [
              { name: 'Baguette or French loaf', amount: '1', shoppingCategory: 'pantry' },
              { name: 'Naan or flatbread', amount: '4\u20136 pieces (alt)', shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Garlic Butter',
            items: [
              { name: 'Butter (softened)', amount: '1/2 cup', shoppingCategory: 'pantry' },
              { name: 'Garlic cloves', amount: '4\u20136', shoppingCategory: 'produce' },
              { name: 'Parsley (fresh, chopped)', amount: '1 tbsp', shoppingCategory: 'produce' },
              { name: 'Salt', amount: 'pinch', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II: all burners MEDIUM, preheat 10 min to ~400\u00B0F. Direct MEDIUM lid open. Gas gives very even, controllable heat \u2014 easier to avoid burning garlic than charcoal. 1.5\u20132 min per side. Identical timing.',
      },
    ],
  },
  {
    slug: 'pizzaNightGrill',
    title: 'Pizza Night on the Grill',
    category: 'veggies',
    description: 'Wood-fired-style personal pizzas blistered over ultra-high charcoal heat with two-zone fire.',
    cookTemp: '550\u2013700\u00B0F',
    cookTime: '2\u20134 min per pizza',
    ingredients: [
      {
        groupName: 'Dough',
        items: [
          { name: 'Pizza dough (store-bought or homemade)', amount: '3\u20134 balls (10\u201312\u2033)', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Toppings',
        items: [
          { name: 'Tomato sauce', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Fresh mozzarella', amount: '8\u201312 oz', shoppingCategory: 'pantry' },
          { name: 'Pepperoni or sausage', amount: 'to taste', optional: true, shoppingCategory: 'protein' },
          { name: 'Fresh basil', amount: 'handful', shoppingCategory: 'produce' },
          { name: 'Olive oil', amount: 'for drizzle', shoppingCategory: 'liquid' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '500\u2013550\u00B0F',
        cookTime: '3\u20135 min per pizza',
        ingredients: [
          {
            groupName: 'Dough',
            items: [
              { name: 'Pizza dough (store-bought or homemade)', amount: '3\u20134 balls (10\u201312\u2033)', shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Toppings',
            items: [
              { name: 'Tomato sauce', amount: '1 cup', shoppingCategory: 'liquid' },
              { name: 'Fresh mozzarella', amount: '8\u201312 oz', shoppingCategory: 'pantry' },
              { name: 'Pepperoni or sausage', amount: 'to taste', optional: true, shoppingCategory: 'protein' },
              { name: 'Fresh basil', amount: 'handful', shoppingCategory: 'produce' },
              { name: 'Olive oil', amount: 'for drizzle', shoppingCategory: 'liquid' },
            ],
          },
          {
            groupName: 'Equipment',
            items: [
              { name: 'Pizza stone or baking steel', amount: '1', shoppingCategory: 'equipment' },
              { name: 'Pizza peel', amount: '1', shoppingCategory: 'equipment' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II max is ~550\u00B0F (not 700\u00B0F charcoal). All burners HIGH, lid closed 15\u201320 min. Pizza stone on grate highly recommended. Place stone over all burners HIGH for 20 min before cooking. Dough 1\u20131.5 min per side direct, then stone finish with lid closed. Slightly slower than charcoal \u2014 allow 3\u20135 min total.',
      },
    ],
  },
  {
    slug: 'provoloneGrill',
    title: 'Provoleta (Grilled Provolone)',
    category: 'veggies',
    description: 'Bubbling, golden provolone grilled on the parrilla or charcoal grill, scooped with crusty bread.',
    cookTemp: 'Medium\u2013high direct',
    cookTime: '3\u20136 min',
    ingredients: [
      {
        groupName: 'Cheese',
        items: [
          { name: 'Provolone round (1/2\u20133/4\u2033 thick)', amount: '1', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Dried oregano', amount: '1\u20132 tsp', shoppingCategory: 'spice' },
          { name: 'Red pepper flakes', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Olive oil', amount: 'for brushing', shoppingCategory: 'liquid' },
        ],
      },
      {
        groupName: 'Serving',
        items: [
          { name: 'Crusty bread', amount: 'sliced', shoppingCategory: 'pantry' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill', 'parrilla-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: 'Medium\u2013high direct',
        cookTime: '3\u20136 min',
        ingredients: [
          {
            groupName: 'Cheese',
            items: [
              { name: 'Provolone round (1/2\u20133/4\u2033 thick)', amount: '1', shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Dried oregano', amount: '1\u20132 tsp', shoppingCategory: 'spice' },
              { name: 'Red pepper flakes', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Olive oil', amount: 'for brushing', shoppingCategory: 'liquid' },
            ],
          },
          {
            groupName: 'Equipment',
            items: [
              { name: 'Small cast iron skillet', amount: '1', shoppingCategory: 'equipment' },
            ],
          },
          {
            groupName: 'Serving',
            items: [
              { name: 'Crusty bread', amount: 'sliced', shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II: use a small cast iron skillet on the grate \u2014 preheat skillet 5 min over MEDIUM-HIGH burner. This avoids cheese melting through the grates. E-310: left MEDIUM-HIGH, others LOW. Watch closely \u2014 3\u20134 min total until edges brown and center bubbles.',
      },
    ],
  },
];
