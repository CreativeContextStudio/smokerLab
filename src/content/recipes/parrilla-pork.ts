import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'choripanParrilla',
    title: 'Choripán (Chorizo Sandwich)',
    category: 'pork',
    description: 'The indispensable asado opener \u2014 fresh chorizo criollo grilled over embers until the skin splits and sizzles, then tucked into crusty bread with chimichurri and salsa criolla.',
    cookTemp: 'Medium ember bed (mid grate)',
    cookTime: '15\u201320 min',
    ingredients: [
      {
        groupName: 'Sausages',
        items: [
          { name: 'Chorizo criollo (fresh pork sausage)', amount: '6\u20138 links', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Bread',
        items: [
          { name: 'Crusty bread rolls (marraqueta or baguette)', amount: '6\u20138', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Condiments',
        items: [
          { name: 'Chimichurri', amount: 'to taste', shoppingCategory: 'liquid' },
          { name: 'Salsa criolla', amount: 'to taste', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Fire',
        items: [
          { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '2\u20133 logs', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['parrilla-grill'],
  },
  {
    slug: 'bondiolaParrilla',
    title: 'Bondiola (Pork Shoulder\u2013Neck) a la Parrilla',
    category: 'pork',
    description: 'The most forgiving pork cut on the parrilla \u2014 bondiola goes on early, cooks slowly over a low ember bed for 90 minutes or more, and comes off impossibly tender and juicy.',
    cookTemp: 'Low\u2013medium ember bed (high grate)',
    cookTime: '90\u2013120 min',
    ingredients: [
      {
        groupName: 'Pork',
        items: [
          { name: 'Bondiola (pork shoulder\u2013neck), bone-in or boneless', amount: '3\u20135 lb', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Sal gruesa (coarse sea salt)', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Dried oregano', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Fire',
        items: [
          { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '4\u20135 logs', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['parrilla-grill'],
  },
  {
    slug: 'morcillaParrilla',
    title: 'Morcilla (Blood Sausage) a la Parrilla',
    category: 'pork',
    description: 'Uruguay\u2019s most traditional asado starter \u2014 morcilla goes on the cool edge of the grate first, warming slowly until the skin tightens and the interior turns creamy. Served with bread before the main cuts arrive.',
    cookTemp: 'Gentle ember heat (high grate, edge of fire)',
    cookTime: '12\u201318 min',
    ingredients: [
      {
        groupName: 'Sausages',
        items: [
          { name: 'Morcilla criolla (blood sausage)', amount: '3\u20134 links', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Bread',
        items: [
          { name: 'Crusty bread (marraqueta or baguette)', amount: 'sliced, to serve', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Fire',
        items: [
          { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '2\u20133 logs', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['parrilla-grill'],
  },
];
