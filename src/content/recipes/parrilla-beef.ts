import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'asadoDeTira',
    title: 'Asado de Tira (Cross-Cut Short Ribs)',
    category: 'beef',
    description: 'The soul of the Uruguayan parrilla \u2014 thin cross-cut beef ribs cooked low and slow over a full ember bed until deeply rendered and crackling.',
    cookTemp: 'Low ember bed (high grate)',
    cookTime: '60\u201390 min',
    ingredients: [
      {
        groupName: 'Beef',
        items: [
          { name: 'Asado de tira (cross-cut short ribs, ~1\u20131.5\u2033 thick)', amount: '3\u20134 lb', shoppingCategory: 'protein' },
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
          { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '3\u20134 logs', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['parrilla-grill'],
  },
  {
    slug: 'vacioParrilla',
    title: 'Vac\u00EDo (Flank Steak) a la Parrilla',
    category: 'beef',
    description: 'The great Uruguayan slow cut \u2014 vac\u00EDo cooked fat-side down over steady embers for 45\u201360 minutes until the fat cap renders golden and the interior stays gloriously pink.',
    cookTemp: 'Medium ember bed (mid grate)',
    cookTime: '45\u201360 min',
    ingredients: [
      {
        groupName: 'Beef',
        items: [
          { name: 'Vac\u00EDo (flank steak with fat cap), whole', amount: '3\u20135 lb', shoppingCategory: 'protein' },
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
          { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '3\u20134 logs', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['parrilla-grill'],
  },
  {
    slug: 'entrannaParrilla',
    title: 'Entra\u00F1a (Skirt Steak) a la Parrilla',
    category: 'beef',
    description: 'The fast cut of the asado \u2014 entra\u00F1a goes on a hot, lowered grate after the slow cuts are resting, searing in 6\u20138 minutes over intense embers.',
    cookTemp: 'Hot ember bed (low grate)',
    cookTime: '6\u20138 min',
    ingredients: [
      {
        groupName: 'Beef',
        items: [
          { name: 'Entra\u00F1a (inside skirt steak), trimmed', amount: '2\u20133 lb', shoppingCategory: 'protein' },
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
    supportedEquipment: ['parrilla-grill'],
  },
  {
    slug: 'pamplonaParrilla',
    title: 'Pamplona (Stuffed Beef Roll) a la Parrilla',
    category: 'beef',
    description: 'A festive stuffed flank roll filled with ham, bacon, peppers, and hard-boiled egg, tied and cooked slowly over a steady ember bed until golden and sliceable.',
    cookTemp: 'Medium ember bed (mid\u2013high grate)',
    cookTime: '60\u201380 min',
    ingredients: [
      {
        groupName: 'Beef',
        items: [
          { name: 'Vac\u00EDo or matambre (thin flank), butterflied', amount: '2\u20133 lb', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Filling',
        items: [
          { name: 'Ham slices', amount: '4\u20136 oz', shoppingCategory: 'protein' },
          { name: 'Bacon strips', amount: '4\u20136 strips', shoppingCategory: 'protein' },
          { name: 'Red bell pepper (roasted, sliced)', amount: '1', shoppingCategory: 'produce' },
          { name: 'Hard-boiled eggs', amount: '2\u20133', shoppingCategory: 'pantry' },
          { name: 'Fresh parsley', amount: 'handful', shoppingCategory: 'produce' },
          { name: 'Garlic (minced)', amount: '2\u20133 cloves', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Sal gruesa (coarse sea salt)', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Equipment',
        items: [
          { name: 'Butcher\u2019s twine', amount: '1 roll', shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Fire',
        items: [
          { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '3\u20134 logs', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['parrilla-grill'],
  },
  {
    slug: 'matambreParrilla',
    title: 'Matambre a la Parrilla',
    category: 'beef',
    description: 'The thin flank cap of Uruguay \u2014 matambre cooks quickly over a hot ember bed and arrives at the table crispy-edged, juicy, and deeply beefy.',
    cookTemp: 'Hot ember bed (mid grate)',
    cookTime: '12\u201318 min',
    ingredients: [
      {
        groupName: 'Beef',
        items: [
          { name: 'Matambre (thin flank cap), whole', amount: '2\u20133 lb', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Sal gruesa (coarse sea salt)', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Dried oregano', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
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
