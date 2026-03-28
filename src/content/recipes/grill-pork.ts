import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'porchopSteakHouseGrill',
    title: 'Pork Chop Steakhouse',
    category: 'pork',
    description: 'Thick bone-in pork loin chops seared then finished indirect for steakhouse crust and juicy pink center.',
    cookTemp: '400\u2013450\u00B0F',
    cookTime: '12\u201316 min',
    ingredients: [
      {
        groupName: 'Pork',
        items: [
          { name: 'Bone-in pork loin chops (1.25\u2033 thick)', amount: '2\u20134 (10\u201312 oz each)', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Kosher salt', amount: '1 tsp per chop', shoppingCategory: 'spice' },
          { name: 'Coarse black pepper', amount: '1/2 tsp per chop', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1/2 tsp per chop', shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '400\u2013450\u00B0F',
        cookTime: '12\u201316 min',
        ingredients: [
          {
            groupName: 'Pork',
            items: [
              { name: 'Bone-in pork loin chops (1.25\u2033 thick)', amount: '2\u20134 (10\u201312 oz each)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Seasoning',
            items: [
              { name: 'Kosher salt', amount: '1 tsp per chop', shoppingCategory: 'spice' },
              { name: 'Coarse black pepper', amount: '1/2 tsp per chop', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1/2 tsp per chop', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II two-zone: E-310: left HIGH (sear), center + right OFF (indirect). E-210: left HIGH, right OFF. Sear lid open 2\u20133 min per side, finish indirect lid closed to 135\u2013140\u00B0F. Ideal technique on gas.',
      },
    ],
  },
  {
    slug: 'sausagePepperHoagies',
    title: 'Sausage & Pepper Hoagies',
    category: 'pork',
    description: 'Italian sausage links seared then finished indirect with grilled peppers and onions on hoagie rolls.',
    cookTemp: '350\u2013400\u00B0F',
    cookTime: '20\u201325 min',
    ingredients: [
      {
        groupName: 'Sausage',
        items: [
          { name: 'Italian sausage links (sweet or hot)', amount: '6\u20138 (4\u20136 oz each)', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Vegetables',
        items: [
          { name: 'Bell peppers (any color)', amount: '2\u20133', shoppingCategory: 'produce' },
          { name: 'Yellow onion', amount: '1 large', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Bread & Seasoning',
        items: [
          { name: 'Hoagie/sub rolls', amount: '6\u20138', shoppingCategory: 'pantry' },
          { name: 'Oil', amount: 'for tossing', shoppingCategory: 'liquid' },
          { name: 'Salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
        ],
      },
    ],
    supportedEquipment: ['charcoal-grill', 'gas-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'gas-grill',
        cookTemp: '350\u2013400\u00B0F',
        cookTime: '20\u201325 min',
        ingredients: [
          {
            groupName: 'Sausage',
            items: [
              { name: 'Italian sausage links (sweet or hot)', amount: '6\u20138 (4\u20136 oz each)', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Vegetables',
            items: [
              { name: 'Bell peppers (any color)', amount: '2\u20133', shoppingCategory: 'produce' },
              { name: 'Yellow onion', amount: '1 large', shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Bread & Seasoning',
            items: [
              { name: 'Hoagie/sub rolls', amount: '6\u20138', shoppingCategory: 'pantry' },
              { name: 'Oil', amount: 'for tossing', shoppingCategory: 'liquid' },
              { name: 'Salt', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Fuel',
            items: [
              { name: 'Propane tank (LP)', amount: '1 (check level)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Weber Spirit II two-zone: E-310: left MEDIUM-HIGH (sear), right LOW (indirect finish). E-210: left MEDIUM-HIGH, right LOW. Sear sausages 4\u20136 min, finish indirect lid closed 10\u201312 min to 160\u00B0F. Veggies on indirect side throughout.',
      },
    ],
  },
];
