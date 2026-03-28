import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'burgersHotDogsGrill',
    title: 'Burgers & Hot Dogs',
    category: 'beef',
    description: 'Classic smash burgers and grilled hot dogs on a two-zone high-heat charcoal fire.',
    cookTemp: '450\u2013550\u00B0F',
    cookTime: '10\u201315 min',
    ingredients: [
      {
        groupName: 'Burgers',
        items: [
          { name: '80/20 ground beef', amount: '2\u20133 lb', shoppingCategory: 'protein' },
          { name: 'American cheese', amount: '8\u201312 slices', shoppingCategory: 'pantry' },
          { name: 'Hamburger buns', amount: '8\u201312', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Hot Dogs',
        items: [
          { name: 'All-beef hot dogs', amount: '8\u201312', shoppingCategory: 'protein' },
          { name: 'Hot dog buns', amount: '8\u201312', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Seasoning & Toppings',
        items: [
          { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Pickles', amount: 'to taste', shoppingCategory: 'pantry' },
          { name: 'Onions', amount: 'to taste', shoppingCategory: 'produce' },
          { name: 'Ketchup', amount: 'to taste', shoppingCategory: 'liquid' },
          { name: 'Mustard', amount: 'to taste', shoppingCategory: 'liquid' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '450\u2013550\u00B0F',
        cookTime: '10\u201315 min',
        ingredients: [
          {
            groupName: 'Burgers',
            items: [
              { name: '80/20 ground beef', amount: '2\u20133 lb', shoppingCategory: 'protein' },
              { name: 'American cheese', amount: '8\u201312 slices', shoppingCategory: 'pantry' },
              { name: 'Hamburger buns', amount: '8\u201312', shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Hot Dogs',
            items: [
              { name: 'All-beef hot dogs', amount: '8\u201312', shoppingCategory: 'protein' },
              { name: 'Hot dog buns', amount: '8\u201312', shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Seasoning & Toppings',
            items: [
              { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Pickles', amount: 'to taste', shoppingCategory: 'pantry' },
              { name: 'Onions', amount: 'to taste', shoppingCategory: 'produce' },
              { name: 'Ketchup', amount: 'to taste', shoppingCategory: 'liquid' },
              { name: 'Mustard', amount: 'to taste', shoppingCategory: 'liquid' },
            ],
          },
          {
            groupName: 'Equipment',
            items: [
              { name: 'Cast iron grill press', amount: '1', optional: true, shoppingCategory: 'equipment' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II: all burners HIGH, lid closed 10\u201315 min to 500\u00B0F+. Smash burgers work great with a cast iron press on gas grates. Two-zone (E-310: left/center HIGH, right OFF; E-210: left HIGH, right OFF) for dog finishing.',
      },
    ],
  },
  {
    slug: 'reverseSearRibEyeGrill',
    title: 'Reverse-Sear Ribeye',
    category: 'beef',
    description: 'Thick ribeyes cooked indirect low then seared hot for steakhouse crust and perfect pink center.',
    cookTemp: '325\u2013375\u00B0F indirect, 450\u2013550\u00B0F sear',
    cookTime: '20\u201330 min',
    ingredients: [
      {
        groupName: 'Steaks',
        items: [
          { name: 'Ribeye steaks (1.25\u2033 thick)', amount: '2\u20134 (12\u201316 oz each)', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Kosher salt', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Coarse black pepper', amount: '1/2 tsp per lb', shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill', 'parrilla-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '325\u2013375\u00B0F indirect, 450\u2013550\u00B0F sear',
        cookTime: '20\u201330 min',
        ingredients: [
          {
            groupName: 'Steaks',
            items: [
              { name: 'Ribeye steaks (1.25\u2033 thick)', amount: '2\u20134 (12\u201316 oz each)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Kosher salt', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Coarse black pepper', amount: '1/2 tsp per lb', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II two-zone: E-310: left HIGH (sear), center LOW (indirect buffer), right OFF. E-210: left HIGH, right OFF. Indirect phase lid closed at ~350\u00B0F; sear phase lid open over left burner. Perfect on gas.',
      },
      {
        equipmentId: 'parrilla-grill',
        cookTemp: 'Low\u2013medium ember bed (high grate), then hot ember (low grate) sear',
        cookTime: '20\u201330 min',
        ingredients: [
          {
            groupName: 'Steaks',
            items: [
              { name: 'Ribeye steaks (1.25\u2033 thick)', amount: '2\u20134 (12\u201316 oz each)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Sal gruesa (coarse sea salt)', amount: 'generous', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fire',
            items: [
              { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '2\u20133 logs', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Parrilla adaptation: season with sal gruesa only. Warm on high grate over medium ember bed 8\u201312 min per side to 115\u2013120\u00B0F. Finish with a 2\u20133 min sear on a low grate over the hottest coals. Rest 5\u20137 min. Serve with chimichurri at the table.',
      },
    ],
  },
  {
    slug: 'lambChopsGrill',
    title: 'Lamb Chops or Rack',
    category: 'beef',
    description: 'Fast-seared lamb loin chops or frenched rack over high-heat two-zone charcoal fire.',
    cookTemp: '450\u2013550\u00B0F',
    cookTime: '8\u201312 min',
    ingredients: [
      {
        groupName: 'Lamb',
        items: [
          { name: 'Lamb loin chops (1\u2033 thick)', amount: '8\u201312 (4\u20136 oz each)', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Coarse black pepper', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Rosemary (fresh or dried)', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp per lb', shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill', 'parrilla-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '450\u2013550\u00B0F',
        cookTime: '8\u201312 min',
        ingredients: [
          {
            groupName: 'Lamb',
            items: [
              { name: 'Lamb loin chops (1\u2033 thick)', amount: '8\u201312 (4\u20136 oz each)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Coarse black pepper', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Rosemary (fresh or dried)', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1 tsp per lb', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II: all burners HIGH, preheat 10\u201315 min to ~500\u00B0F. Sear direct HIGH lid open 2 min per side. E-310: use left + center HIGH, right LOW as buffer if needed. Fast cook, no changes to timing.',
      },
      {
        equipmentId: 'parrilla-grill',
        cookTemp: 'Hot ember bed (low\u2013mid grate)',
        cookTime: '8\u201312 min',
        ingredients: [
          {
            groupName: 'Lamb',
            items: [
              { name: 'Lamb loin chops (1\u2033 thick)', amount: '8\u201312 (4\u20136 oz each)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Sal gruesa (coarse sea salt)', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Rosemary (fresh or dried)', amount: '1 tsp per lb', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fire',
            items: [
              { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '2\u20133 logs', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Parrilla adaptation: season with sal gruesa only (rosemary optional). Hot ember bed, low-mid grate. 2\u20133 min per side direct over coals. Pull at 125\u2013130\u00B0F. Lamb chops are classic parrilla fare \u2014 serve with chimichurri at the table.',
      },
    ],
  },
  {
    slug: 'kababPlatterGrill',
    title: 'Kabob Party Platter',
    category: 'beef',
    description: 'Mixed chicken, pork, shrimp, and veggie skewers grilled on two-zone medium heat.',
    cookTemp: '375\u2013425\u00B0F',
    cookTime: '12\u201318 min',
    ingredients: [
      {
        groupName: 'Proteins',
        items: [
          { name: 'Boneless chicken thighs', amount: '1.25 lb', shoppingCategory: 'protein' },
          { name: 'Pork tenderloin or loin', amount: '1 lb', shoppingCategory: 'protein' },
          { name: 'Large shrimp (16/20)', amount: '1 lb', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Vegetables',
        items: [
          { name: 'Zucchini', amount: '2', shoppingCategory: 'produce' },
          { name: 'Bell peppers', amount: '2', shoppingCategory: 'produce' },
          { name: 'Red onion', amount: '1', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Oil', amount: '3 tbsp per lb', shoppingCategory: 'liquid' },
          { name: 'Salt', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp per lb', shoppingCategory: 'spice' },
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
        cookTime: '12\u201318 min',
        ingredients: [
          {
            groupName: 'Proteins',
            items: [
              { name: 'Boneless chicken thighs', amount: '1.25 lb', shoppingCategory: 'protein' },
              { name: 'Pork tenderloin or loin', amount: '1 lb', shoppingCategory: 'protein' },
              { name: 'Large shrimp (16/20)', amount: '1 lb', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Vegetables',
            items: [
              { name: 'Zucchini', amount: '2', shoppingCategory: 'produce' },
              { name: 'Bell peppers', amount: '2', shoppingCategory: 'produce' },
              { name: 'Red onion', amount: '1', shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Oil', amount: '3 tbsp per lb', shoppingCategory: 'liquid' },
              { name: 'Salt', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1 tsp per lb', shoppingCategory: 'spice' },
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
        notes: 'Weber Spirit II: all burners MEDIUM-HIGH, preheat 10\u201315 min to ~400\u00B0F. Direct cook across full grate, lid open for char. E-310: left + center MEDIUM-HIGH, right LOW as cool zone for shrimp finish.',
      },
    ],
  },
  {
    slug: 'reverseSearedSteaks',
    title: 'Reverse Sear Smoked Steaks',
    category: 'beef',
    description: 'Thick-cut steaks slow-smoked in the offset chamber then seared hot for smoke ring and crusty bark.',
    cookTemp: '225\u2013250\u00B0F smoke, 500\u00B0F+ sear',
    cookTime: '45\u201390 min smoke + 2\u20134 min sear',
    ingredients: [
      {
        groupName: 'Steaks',
        items: [
          { name: 'Ribeye, NY strip, or tenderloin (1.5\u20132\u2033 thick)', amount: '2\u20134 (12\u201320 oz each)', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Coarse kosher salt', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'generous', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Smoke Wood',
        items: [
          { name: 'Hickory or oak chunks', amount: '2\u20133 chunks', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'charcoal-grill'],
  },
];
