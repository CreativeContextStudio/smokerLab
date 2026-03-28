import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'chxQuarteredGrill',
    title: 'Spatchcock Chicken Quarters',
    category: 'poultry',
    description: 'Spatchcocked bone-in chicken quarters grilled indirect then crisped over hot coals.',
    cookTemp: '350\u2013400\u00B0F',
    cookTime: '35\u201345 min',
    ingredients: [
      {
        groupName: 'Chicken',
        items: [
          { name: 'Bone-in chicken quarters', amount: '4 (1\u20131.5 lb each)', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: '1/2 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Paprika', amount: '1 tsp per lb', shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill', 'parrilla-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '350\u2013400\u00B0F',
        cookTime: '35\u201345 min',
        ingredients: [
          {
            groupName: 'Chicken',
            items: [
              { name: 'Bone-in chicken quarters', amount: '4 (1\u20131.5 lb each)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: '1/2 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: '1 tsp per lb', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II two-zone indirect-first: E-310: left MEDIUM (indirect zone right side), center + right OFF; or left OFF, center + right MEDIUM for indirect on left side. Finish crisping on HIGH burner side, lid open. E-210: left LOW-MEDIUM, right OFF; crisp on left HIGH. Pull at 165\u00B0F.',
      },
      {
        equipmentId: 'parrilla-grill',
        cookTemp: 'Medium ember bed (mid grate)',
        cookTime: '35\u201345 min',
        ingredients: [
          {
            groupName: 'Chicken',
            items: [
              { name: 'Bone-in chicken quarters', amount: '4 (1\u20131.5 lb each)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Sal gruesa (coarse sea salt)', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Dried oregano (optional)', amount: '1 tsp per lb', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fire',
            items: [
              { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '3\u20134 logs', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Parrilla adaptation: season with sal gruesa only. Bone-side down, mid grate over steady ember bed. 25\u201330 min bone-side, then flip skin-side down 10\u201315 min for crisping. Watch for fat drip flare-ups \u2014 raise grate if needed. Pull at 165\u00B0F internal at the thigh.',
      },
    ],
  },
  {
    slug: 'chxThighsGrill',
    title: 'Bone-In Chicken Thighs (Grill)',
    category: 'poultry',
    description: 'Crispy-skin bone-in chicken thighs seared hot then finished indirect on charcoal.',
    cookTemp: '350\u2013400\u00B0F',
    cookTime: '25\u201335 min',
    ingredients: [
      {
        groupName: 'Chicken',
        items: [
          { name: 'Bone-in skin-on chicken thighs', amount: '6\u20138 (4\u20136 oz each)', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: '1/2 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Paprika', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Sugar', amount: 'pinch per lb', shoppingCategory: 'pantry' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill', 'parrilla-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '350\u2013400\u00B0F',
        cookTime: '25\u201335 min',
        ingredients: [
          {
            groupName: 'Chicken',
            items: [
              { name: 'Bone-in skin-on chicken thighs', amount: '6\u20138 (4\u20136 oz each)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: '1/2 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Sugar', amount: 'pinch per lb', shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II two-zone: E-310: left MEDIUM-HIGH (sear), right LOW (indirect). E-210: left MEDIUM-HIGH, right LOW. Start skin-side-down on direct side 3\u20134 min, flip, then move to indirect lid closed to finish at 165\u2013170\u00B0F. Flavorizer bars vaporize drippings for extra flavor.',
      },
      {
        equipmentId: 'parrilla-grill',
        cookTemp: 'Medium ember bed (mid grate)',
        cookTime: '25\u201335 min',
        ingredients: [
          {
            groupName: 'Chicken',
            items: [
              { name: 'Bone-in skin-on chicken thighs', amount: '6\u20138 (4\u20136 oz each)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Sal gruesa (coarse sea salt)', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Dried oregano (optional)', amount: '1 tsp per lb', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fire',
            items: [
              { name: 'Hardwood (quebracho, eucalyptus, or oak)', amount: '3\u20134 logs', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Parrilla adaptation: season with sal gruesa only. Bone-side down, mid grate over steady ember bed. 15\u201320 min bone-side, flip skin-side down 10\u201315 min. Grate height controls heat \u2014 raise if fat drips cause flare-ups. Pull at 165\u201370\u00B0F at the thigh bone. Serve with chimichurri.',
      },
    ],
  },
];
