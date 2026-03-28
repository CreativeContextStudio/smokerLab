import type { HowToMeta } from '../../types';

export const howtos: HowToMeta[] = [
  {
    slug: 'parrillaShopping',
    title: 'Parrilla Shopping List & Setup',
    description: 'Essential tools, hardwood fuel, and parrilla accessories for a proper Uruguayan asado.',
    shoppingItems: [
      {
        groupName: 'Hardwood Fuel',
        items: [
          { name: 'Hardwood logs (quebracho, eucalyptus, or oak)', amount: '10\u201315 lb per session', shoppingCategory: 'fuel' },
          { name: 'Newspaper or natural fire starters (no lighter fluid)', amount: '1 pack', shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Essential Tools',
        items: [
          { name: 'Long-handled tongs (16\u201318\u2033)', amount: '1 pair', shoppingCategory: 'equipment' },
          { name: 'Wide flat spatula or asador fork', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Heat-resistant gloves', amount: '1 pair', shoppingCategory: 'equipment' },
          { name: 'Wire grill brush', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Metal shovel or poker (for moving embers)', amount: '1', shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Sal gruesa (coarse sea salt or kosher salt)', amount: '1 lb bag', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Optional but Recommended',
        items: [
          { name: 'Cast-iron disco (plow disc, 18\u201322\u2033)', amount: '1', optional: true, shoppingCategory: 'equipment' },
          { name: 'Cast-iron skillet (for provoleta)', amount: '1', optional: true, shoppingCategory: 'equipment' },
          { name: 'Butcher\u2019s twine (for pamplona)', amount: '1 roll', optional: true, shoppingCategory: 'equipment' },
          { name: 'Instant-read thermometer', amount: '1', optional: true, shoppingCategory: 'equipment' },
        ],
      },
    ],
    equipmentId: 'parrilla-grill',
  },
  {
    slug: 'parrillaFireManagement',
    title: 'Parrilla Fire & Ember Management',
    description: 'How to build a proper wood fire in the brasero, produce a deep ember bed, and use grate height to control heat across a full asado.',
    equipmentId: 'parrilla-grill',
  },
  {
    slug: 'asadoSequence',
    title: 'The Full Asado Sequence',
    description: 'Traditional Uruguayan asado cooking order \u2014 from lighting the fire through achuras, chorizos, and the main beef cuts to sobremesa.',
    equipmentId: 'parrilla-grill',
  },
];
