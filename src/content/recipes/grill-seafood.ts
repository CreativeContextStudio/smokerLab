import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'tunaSwordfishGrill',
    title: 'Tuna & Swordfish Steaks (Grill)',
    category: 'seafood',
    description: 'Thick-cut tuna or swordfish steaks seared rare to medium-rare over high two-zone charcoal heat.',
    cookTemp: '450\u2013550\u00B0F',
    cookTime: '6\u201310 min',
    ingredients: [
      {
        groupName: 'Fish',
        items: [
          { name: 'Tuna steaks (ahi or yellowfin, 1\u20131.25\u2033 thick)', amount: '2\u20134 (6\u20138 oz each)', shoppingCategory: 'protein' },
          { name: 'Swordfish steaks (1\u20131.25\u2033 thick)', amount: '2\u20134 (6\u20138 oz each, alt)', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Kosher salt', amount: '1/2 tsp per steak', shoppingCategory: 'spice' },
          { name: 'Coarse black pepper', amount: '1/4 tsp per steak', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: 'light dusting', shoppingCategory: 'spice' },
          { name: 'Avocado or grapeseed oil', amount: 'for brushing', shoppingCategory: 'liquid' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '450\u2013550\u00B0F',
        cookTime: '6\u201310 min',
        ingredients: [
          {
            groupName: 'Fish',
            items: [
              { name: 'Tuna steaks (ahi or yellowfin, 1\u20131.25\u2033 thick)', amount: '2\u20134 (6\u20138 oz each)', shoppingCategory: 'protein' },
              { name: 'Swordfish steaks (1\u20131.25\u2033 thick)', amount: '2\u20134 (6\u20138 oz each, alt)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Kosher salt', amount: '1/2 tsp per steak', shoppingCategory: 'spice' },
              { name: 'Coarse black pepper', amount: '1/4 tsp per steak', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: 'light dusting', shoppingCategory: 'spice' },
              { name: 'Avocado or grapeseed oil', amount: 'for brushing', shoppingCategory: 'liquid' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II: all burners HIGH, preheat 10\u201315 min to ~500\u00B0F. Oil the fish, not the grates. Sear direct HIGH lid open 1.5\u20132 min per side. Cast iron grates on the Spirit II hold heat well for a clean sear on fish. Pull tuna rare at 110\u2013115\u00B0F.',
      },
    ],
  },
  {
    slug: 'shrimpScallopKababsGrill',
    title: 'Shrimp & Scallop Skewers',
    category: 'seafood',
    description: 'Large shrimp or sea scallops skewered and seared over direct high charcoal heat for sweet char.',
    cookTemp: '450\u2013550\u00B0F',
    cookTime: '4\u20136 min',
    ingredients: [
      {
        groupName: 'Seafood',
        items: [
          { name: 'Large shrimp (16/20 count, peeled/deveined)', amount: '1\u20131.5 lb', shoppingCategory: 'protein' },
          { name: 'Sea scallops (U10\u2013U12)', amount: '1\u20131.5 lb (alt)', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Avocado or grapeseed oil', amount: '2 tbsp', shoppingCategory: 'liquid' },
          { name: 'Salt', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: '1/2 tsp', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1/2 tsp', shoppingCategory: 'spice' },
          { name: 'Lemon zest', amount: '1 lemon', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Equipment',
        items: [
          { name: 'Metal skewers', amount: '6\u20138', shoppingCategory: 'equipment' },
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
            groupName: 'Seafood',
            items: [
              { name: 'Large shrimp (16/20 count, peeled/deveined)', amount: '1\u20131.5 lb', shoppingCategory: 'protein' },
              { name: 'Sea scallops (U10\u2013U12)', amount: '1\u20131.5 lb (alt)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Avocado or grapeseed oil', amount: '2 tbsp', shoppingCategory: 'liquid' },
              { name: 'Salt', amount: '1 tsp', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: '1/2 tsp', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1/2 tsp', shoppingCategory: 'spice' },
              { name: 'Lemon zest', amount: '1 lemon', shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Equipment',
            items: [
              { name: 'Metal skewers', amount: '6\u20138', shoppingCategory: 'equipment' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II: all burners HIGH, preheat 10\u201315 min to ~500\u00B0F. Oil the seafood, not the grates. Direct HIGH lid open, 2 min per side. Cooks identically to charcoal \u2014 fast and hot. No changes to timing.',
      },
    ],
  },
];
