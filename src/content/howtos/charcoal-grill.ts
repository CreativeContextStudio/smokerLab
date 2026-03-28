import type { HowToMeta } from '../../types';

export const howtos: HowToMeta[] = [
  {
    slug: 'grillShoppingList',
    title: 'Grill Shopping List',
    description: 'Essential supplies for charcoal grilling on the Royal Gourmet CC1830S main chamber.',
    shoppingItems: [
      {
        groupName: 'Fire Starting',
        items: [
          { name: 'Chimney starter (large, 100 cubic inch)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Charcoal briquettes (Kingsford Original or similar)', amount: '1 bag (20 lb)', shoppingCategory: 'fuel' },
          { name: 'Newspaper or fire starters (wax cubes)', amount: '1 pack', shoppingCategory: 'fuel' },
        ],
      },
      {
        groupName: 'Temperature Control',
        items: [
          { name: 'Instant-read digital thermometer (Thermapen or similar)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Dual-probe grate thermometer with cable (optional upgrade)', amount: '1', optional: true, shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Grill Tools',
        items: [
          { name: 'Long-handled tongs (16\u2033+)', amount: '1 pair', shoppingCategory: 'equipment' },
          { name: 'Grill brush or grill stone (for cleaning grates)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Heat-resistant grill gloves (silicone or leather, 500\u00B0F+ rated)', amount: '1 pair', shoppingCategory: 'equipment' },
          { name: 'Long-handled spatula (for burgers)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Basting brush (for saucing)', amount: '1', shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Accessories',
        items: [
          { name: 'Disposable aluminum pans (9\u2033x13\u2033, for drip, resting, veggie grilling)', amount: 'pack of 10', shoppingCategory: 'equipment' },
          { name: 'Wire cooling rack (fits inside 9\u2033x13\u2033 pan, for resting and indirect)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Grill basket (for veggies, fish, small items)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Metal skewers (12\u2033, flat blade style to prevent spinning)', amount: '8\u201312', shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Pantry Staples',
        items: [
          { name: 'Neutral oil (vegetable or canola, for grate oiling)', amount: '1 bottle', shoppingCategory: 'pantry' },
          { name: 'Kosher salt (coarse)', amount: '1 box', shoppingCategory: 'spice' },
          { name: 'Coarse black pepper (16-mesh or freshly cracked)', amount: '1 container', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 container', shoppingCategory: 'spice' },
          { name: 'Smoked paprika', amount: '1 container', shoppingCategory: 'spice' },
        ],
      },
    ],
    equipmentId: 'charcoal-grill',
  },
  {
    slug: 'grillSetup',
    title: 'Grill Setup & First Cook',
    description: 'How to set up the CC1830S main chamber for charcoal grilling: chimney lighting, two-zone fire, preheat, and first cook checklist.',
    equipmentId: 'charcoal-grill',
  },
  {
    slug: 'grillTempControl',
    title: 'Temperature Control on the Charcoal Grill',
    description: 'How to dial in heat on the CC1830S main chamber using charcoal amount, pan height, and vent positions.',
    equipmentId: 'charcoal-grill',
  },
  {
    slug: 'grillTwoZone',
    title: 'Two-Zone Fire Mastery',
    description: 'Deep dive into two-zone charcoal fire management on the CC1830S: when to use it, how to build it, and how to move food between zones.',
    equipmentId: 'charcoal-grill',
  },
];
