import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'polloParrilla',
    title: 'Pollo a la Parrilla (Butterflied Whole Chicken)',
    category: 'poultry',
    description: 'A butterflied whole chicken cooked bone-side down over a steady ember bed \u2014 slow enough to cook through without burning, finished skin-side down for a crackling, golden crust.',
    cookTemp: 'Medium ember bed (mid grate)',
    cookTime: '45\u201360 min',
    ingredients: [
      {
        groupName: 'Chicken',
        items: [
          { name: 'Whole chicken, butterflied (spatchcocked)', amount: '1 (3.5\u20135 lb)', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Sal gruesa (coarse sea salt)', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Garlic (minced, optional)', amount: '3\u20134 cloves', optional: true, shoppingCategory: 'produce' },
          { name: 'Olive oil (optional, for rubbing)', amount: '2 tbsp', optional: true, shoppingCategory: 'liquid' },
          { name: 'Dried oregano (optional)', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
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
    slug: 'polloAlDiscoParrilla',
    title: 'Pollo al Disco (Chicken in the Plow Disc)',
    category: 'poultry',
    description: 'A beloved Argentine-Uruguayan campfire classic \u2014 chicken thighs and drumsticks braised with onions, peppers, wine, and tomatoes in a cast-iron disco (plow disc) set over glowing embers.',
    cookTemp: 'Hot ember bed (disc set directly over coals)',
    cookTime: '50\u201370 min',
    ingredients: [
      {
        groupName: 'Chicken',
        items: [
          { name: 'Chicken thighs and drumsticks (bone-in)', amount: '4\u20135 lb', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Vegetables',
        items: [
          { name: 'Yellow onions (sliced)', amount: '2 large', shoppingCategory: 'produce' },
          { name: 'Red bell peppers (sliced)', amount: '2', shoppingCategory: 'produce' },
          { name: 'Garlic cloves (minced)', amount: '6\u20138', shoppingCategory: 'produce' },
          { name: 'Tomatoes (chopped)', amount: '3 medium', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Liquids & Seasoning',
        items: [
          { name: 'White wine', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Olive oil', amount: '3\u20134 tbsp', shoppingCategory: 'liquid' },
          { name: 'Sal gruesa', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Dried oregano', amount: '1 tbsp', shoppingCategory: 'spice' },
          { name: 'Sweet paprika', amount: '1 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Equipment',
        items: [
          { name: 'Cast-iron disco (plow disc, 18\u201322\u2033)', amount: '1', shoppingCategory: 'equipment' },
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
];
