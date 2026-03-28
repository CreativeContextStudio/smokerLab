import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'chxSpatch',
    title: 'Spatchcocked Chicken',
    category: 'poultry',
    description: 'Whole chicken flattened and smoked at high heat for crispy skin and juicy meat.',
    cookTemp: '325\u2013375\u00B0F',
    cookTime: '1\u20131.5 hours',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Whole chicken', amount: '4\u20135 lb', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Sugar', amount: 'touch', shoppingCategory: 'pantry' },
          { name: 'Fresh herbs (rosemary/thyme)', amount: 'optional', optional: true, shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/hickory/maple)', amount: '1\u20132 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '275\u2013300\u00B0F',
        cookTime: '1.5\u20132.5 hours',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Whole chicken', amount: '4\u20135 lb', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Sugar', amount: 'touch', shoppingCategory: 'pantry' },
              { name: 'Fresh herbs (rosemary/thyme)', amount: 'optional', optional: true, shoppingCategory: 'produce' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or cherry)', amount: '1 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Run the SM045 at its maximum practical temp of 275\u2013300\u00B0F. The humid, low-airflow cabinet will not produce crispy skin on its own \u2014 plan to finish the bird under a broiler or on a hot grill for 3\u20135 minutes per side after it hits 165\u00B0F internally. Dry-brine the skin uncovered in the fridge for 1\u20132 hours before cooking to help with moisture removal.',
      },
    ],
  },
  {
    slug: 'chxThighs',
    title: 'Smoked Chicken Thighs',
    category: 'poultry',
    description: 'Bone-in, skin-on thighs smoked hot for crispy skin in under 45 minutes.',
    cookTemp: '325\u2013375\u00B0F',
    cookTime: '30\u201345 minutes',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Chicken thighs (bone-in, skin-on)', amount: '4\u20136 pieces', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/hickory/maple)', amount: '1\u20132 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '275\u2013300\u00B0F',
        cookTime: '45\u201375 minutes',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Chicken thighs (bone-in, skin-on)', amount: '4\u20136 pieces', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or cherry)', amount: '1 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Run the SM045 at 275\u2013300\u00B0F. Cook time is longer than the offset version because the electric cabinet can\u2019t match offset heat intensity. The SM045 will not crisp skin on its own \u2014 finish thighs skin-side down in a hot cast iron pan or under the broiler for 2\u20133 minutes after they hit 165\u00B0F. Dry the skin thoroughly before seasoning.',
      },
    ],
  },
  {
    slug: 'chxWings',
    title: 'Smoked Chicken Wings',
    category: 'poultry',
    description: 'Crispy smoked wings with optional buffalo-style seasoning, done in 20\u201335 minutes.',
    cookTemp: '325\u2013375\u00B0F',
    cookTime: '20\u201335 minutes',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Chicken wings (whole)', amount: '2\u20133 lbs', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'generous', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Celery salt', amount: 'optional', optional: true, shoppingCategory: 'spice' },
          { name: 'Cayenne', amount: 'optional', optional: true, shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/hickory/maple)', amount: '1\u20132 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker', 'charcoal-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '275\u2013300\u00B0F',
        cookTime: '45\u201375 minutes',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Chicken wings (whole)', amount: '2\u20133 lbs', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Celery salt', amount: 'optional', optional: true, shoppingCategory: 'spice' },
              { name: 'Cayenne', amount: 'optional', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or cherry)', amount: '1 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'The SM045 will give wings great smoke flavor but not crispy skin on its own. After they hit 165\u00B0F (45\u201375 minutes at 275\u2013300\u00B0F), finish them under a hot broiler or in a 450\u00B0F oven for 5\u20138 minutes to crisp. The two-stage approach \u2014 smoke then crisp \u2014 is the winning move on an electric smoker. Dry the wings thoroughly before seasoning.',
      },
      {
        equipmentId: 'charcoal-grill',
        cookTemp: '375\u2013425\u00B0F',
        cookTime: '25\u201335 minutes',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Chicken wings (whole)', amount: '2\u20133 lbs', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'generous', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Celery salt', amount: 'optional', optional: true, shoppingCategory: 'spice' },
              { name: 'Cayenne', amount: 'optional', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Charcoal',
            items: [
              { name: 'Charcoal briquettes', amount: '1 full chimney (~4\u20135 lb)', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Two-zone fire, pan mid position. Start wings skin-side up on the cool zone, lid closed, for 20\u201325 min until 150\u2013155\u00B0F internal. Move to hot zone 3\u20135 min for crispy skin finish, then pull at 165\u00B0F. No wood chunks \u2014 the charcoal grill uses direct and indirect charcoal heat only.',
      },
    ],
  },
];
