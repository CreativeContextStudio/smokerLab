import type { HowToMeta } from '../../types';

export const howtos: HowToMeta[] = [
  {
    slug: 'shoppingList',
    title: 'Smoker Shopping List',
    description: 'Budget-friendly upgrades and supplies for the Royal Gourmet CC1830S offset smoker.',
    shoppingItems: [
      {
        groupName: 'Essential Mods',
        items: [
          { name: 'High-temp gasket tape (1/2\u2033 x 1/8\u2033, 15\u201330 ft)', amount: '1 roll', shoppingCategory: 'equipment' },
          { name: 'High-temp RTV silicone sealant (600\u00B0F+)', amount: '1 tube', shoppingCategory: 'equipment' },
          { name: 'Charcoal basket (expanded metal, ~10\u201312\u2033 x 8\u201310\u2033 x 4\u20136\u2033)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Dual-probe digital thermometer (700\u00B0F rated)', amount: '1', shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Recommended Supplies',
        items: [
          { name: 'Chimney starter', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Disposable aluminum pans (9\u2033x13\u2033)', amount: 'pack', shoppingCategory: 'equipment' },
          { name: 'Lump charcoal or briquettes', amount: '1 bag', shoppingCategory: 'fuel' },
          { name: 'Wood chunks (hickory/oak/pecan)', amount: 'assorted', shoppingCategory: 'fuel' },
        ],
      },
    ],
    equipmentId: 'offset-smoker',
  },
  {
    slug: 'smokerSetup',
    title: 'Smoker Setup & First Cook',
    description: 'Concrete shopping list and first-cook layout for ribs or pork butt on the CC1830S.',
    equipmentId: 'offset-smoker',
  },
  {
    slug: 'smokerMods',
    title: 'Smoker Mods & Baffle Layout',
    description: 'One-time mods: door sealing, baffle/tuning plate positioning, and charcoal basket setup.',
    equipmentId: 'offset-smoker',
  },
  {
    slug: 'maintainTemp',
    title: 'Maintaining Temperature',
    description: 'Practical routine for keeping the CC1830S steady at 225\u2013275\u00B0F.',
    equipmentId: 'offset-smoker',
  },
  {
    slug: 'wrappingBrisket',
    title: 'Wrapping Brisket',
    description: 'When, why, and how to wrap a small brisket on an offset smoker.',
  },
  {
    slug: 'grillingDetails',
    title: 'Grilling Details & Smoker Anatomy',
    description: 'Technical details on vents, charcoal management, baffles, and hot spots for the CC1830S.',
    equipmentId: 'offset-smoker',
  },
  {
    slug: 'controlPanel',
    title: 'CC1830S Control Panel Guide',
    description: 'Compact printable reference for vent positions, fire management, and holding temps.',
    equipmentId: 'offset-smoker',
  },
];
