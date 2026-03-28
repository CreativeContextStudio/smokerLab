import type { HowToMeta } from '../../types';

export const howtos: HowToMeta[] = [
  {
    slug: 'gasGrillShoppingList',
    title: 'Gas Grill Shopping List',
    description: 'Essential supplies and accessories for the Weber Spirit II gas grill.',
    shoppingItems: [
      {
        groupName: 'Fuel',
        items: [
          { name: 'Propane (LP) tank (20 lb)', amount: '1\u20132', shoppingCategory: 'fuel' },
        ],
      },
      {
        groupName: 'Essential Equipment',
        items: [
          { name: 'Instant-read thermometer', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Grill brush (stainless bristle or coil)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Long-handle tongs (16\u2033)', amount: '1 pair', shoppingCategory: 'equipment' },
          { name: 'Long-handle spatula', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Disposable aluminum pans (9\u2033x13\u2033)', amount: 'pack', shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Cooking Accessories',
        items: [
          { name: 'Metal skewers (12\u2033)', amount: '8\u201312', shoppingCategory: 'equipment' },
          { name: 'Grill basket (vegetable/seafood)', amount: '1', optional: true, shoppingCategory: 'equipment' },
          { name: 'Cast iron grill press', amount: '1', optional: true, shoppingCategory: 'equipment' },
          { name: 'Small cast iron skillet (6\u20138\u2033)', amount: '1', optional: true, shoppingCategory: 'equipment' },
          { name: 'Pizza stone or baking steel', amount: '1', optional: true, shoppingCategory: 'equipment' },
          { name: 'Pizza peel', amount: '1', optional: true, shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Maintenance',
        items: [
          { name: 'Grill cover (Weber Spirit II size)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Drip pans / grease catch liners', amount: 'pack', shoppingCategory: 'equipment' },
          { name: 'Dish soap (for leak check soapy water)', amount: '1 bottle', shoppingCategory: 'pantry' },
        ],
      },
    ],
    equipmentId: 'gas-grill',
  },
  {
    slug: 'gasGrillSetup',
    title: 'Spirit II Setup & First Cook',
    description: 'Getting started with your Weber Spirit II: propane setup, preheat routine, and zone cooking basics.',
    equipmentId: 'gas-grill',
  },
  {
    slug: 'gasGrillControlPanel',
    title: 'Spirit II Control Panel Guide',
    description: 'Compact reference for burner positions, zone patterns, and temperature control on the Weber Spirit II.',
    equipmentId: 'gas-grill',
  },
];
