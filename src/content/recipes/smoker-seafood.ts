import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'salmon',
    title: 'Smoked Salmon',
    category: 'seafood',
    description: 'Brined skin-on salmon fillet smoked at low heat for moist, flaky perfection.',
    cookTemp: '225\u2013250\u00B0F',
    cookTime: '15\u201330 minutes',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Salmon fillet (skin-on)', amount: '1\u20132 lb', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Brine',
        items: [
          { name: 'Water', amount: '1 quart', shoppingCategory: 'liquid' },
          { name: 'Kosher salt', amount: '1/4 cup', shoppingCategory: 'spice' },
          { name: 'Sugar', amount: '2 tbsp', shoppingCategory: 'pantry' },
          { name: 'Black pepper', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Smoked paprika', amount: '1 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/maple/oak)', amount: '1 chunk', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
          { name: 'Brown sugar or honey (glaze)', amount: '1\u20132 tbsp', optional: true, shoppingCategory: 'pantry' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '200\u2013225\u00B0F',
        cookTime: '30\u201360 minutes',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Salmon fillet (skin-on)', amount: '1\u20132 lb', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Brine',
            items: [
              { name: 'Water', amount: '1 quart', shoppingCategory: 'liquid' },
              { name: 'Kosher salt', amount: '1/4 cup', shoppingCategory: 'spice' },
              { name: 'Sugar', amount: '2 tbsp', shoppingCategory: 'pantry' },
              { name: 'Black pepper', amount: '1 tsp', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
              { name: 'Smoked paprika', amount: '1 tsp', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Glaze',
            items: [
              { name: 'Brown sugar or honey (glaze)', amount: '1\u20132 tbsp', optional: true, shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or alder)', amount: '1 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'The SM045\u2019s humid cabinet is excellent for salmon \u2014 moisture retention is natural. Set to 200\u2013225\u00B0F; lower than the offset version because carryover is more pronounced in the insulated cabinet. Pull at 130\u2013135\u00B0F (medium) or 140\u00B0F (well done); the fish will carry over 5\u201310\u00B0F after the door opens. Begin probing at 20 minutes.',
      },
    ],
  },
  {
    slug: 'swordfish',
    title: 'Smoked Swordfish Steaks',
    category: 'seafood',
    description: 'Thick-cut swordfish steaks gently smoked for moist, flaky texture.',
    cookTemp: '225\u2013250\u00B0F',
    cookTime: '15\u201325 minutes',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Swordfish steaks (1\u20132" thick)', amount: '1\u20132 lbs', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Olive oil', amount: 'light drizzle', optional: true, shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/maple/oak)', amount: '1 chunk', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '200\u2013225\u00B0F',
        cookTime: '25\u201345 minutes',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Swordfish steaks (1\u20132\u2033 thick)', amount: '1\u20132 lbs', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Olive oil', amount: 'light drizzle', optional: true, shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or maple)', amount: '1 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Set the SM045 to 200\u2013225\u00B0F. Swordfish is a delicate cook \u2014 pull at 135\u2013140\u00B0F and let carryover finish it to 140\u2013145\u00B0F. Begin probing at 20 minutes. The humid cabinet works in your favor here; no spritzing or basting needed.',
      },
    ],
  },
  {
    slug: 'lobstertails',
    title: 'Smoked Lobster Tails',
    category: 'seafood',
    description: 'Butterflied lobster tails smoked hot with garlic butter for sweet, delicate meat.',
    cookTemp: '325\u2013375\u00B0F',
    cookTime: '8\u201315 minutes',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Lobster tails (4\u20138 oz each)', amount: '2\u20136 tails', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Butter & Seasoning',
        items: [
          { name: 'Butter, melted', amount: '4 tbsp', shoppingCategory: 'pantry' },
          { name: 'Garlic, minced', amount: '2\u20133 cloves', shoppingCategory: 'produce' },
          { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Lemon', amount: '1 (juice/wedges)', optional: true, shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/maple/oak)', amount: '1 chunk', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '275\u2013300\u00B0F',
        cookTime: '15\u201325 minutes',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Lobster tails (4\u20138 oz each)', amount: '2\u20136 tails', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Butter & Seasoning',
            items: [
              { name: 'Butter, melted', amount: '4 tbsp', shoppingCategory: 'pantry' },
              { name: 'Garlic, minced', amount: '2\u20133 cloves', shoppingCategory: 'produce' },
              { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Lemon', amount: '1 (juice/wedges)', optional: true, shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or cherry)', amount: '1 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'The SM045 tops out around 300\u00B0F \u2014 lower than the offset\u2019s 325\u2013375\u00B0F, so cook time is longer. Target 140\u2013145\u00B0F internal; pull at 138\u2013140\u00B0F and let carryover finish the cook. Watch closely \u2014 lobster overcooks fast and rubbery texture is unforgiving. Begin probing at 12 minutes.',
      },
    ],
  },
  {
    slug: 'mussels',
    title: 'Smoked Mussels',
    category: 'seafood',
    description: 'Live mussels smoked at high heat until they pop open, 5\u201310 minutes.',
    cookTemp: '350\u2013400\u00B0F',
    cookTime: '5\u201310 minutes',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Live mussels', amount: '2\u20134 lbs', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Seasoning',
        items: [
          { name: 'Olive oil', amount: '2 tbsp', shoppingCategory: 'pantry' },
          { name: 'Garlic, minced', amount: '3\u20134 cloves', shoppingCategory: 'produce' },
          { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Lemon juice', amount: 'optional', optional: true, shoppingCategory: 'produce' },
          { name: 'White wine', amount: 'optional splash', optional: true, shoppingCategory: 'liquid' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/maple/oak)', amount: '1 chunk', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker'],
  },
];
