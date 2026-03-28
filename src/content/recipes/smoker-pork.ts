import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'bacon',
    title: 'Smoked Candy-Sriracha Bacon',
    category: 'pork',
    description: 'Brined pork belly with a sweet candy crust and spicy sriracha glaze, finished with a charcoal sear.',
    cookTemp: '225\u2013250\u00B0F',
    cookTime: '12\u201324 hr brine + 2\u20133.5 hr smoke',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Pork belly, skinless', amount: '2\u20133 lb slab', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Brine',
        items: [
          { name: 'Water', amount: '1 quart', shoppingCategory: 'liquid' },
          { name: 'Kosher salt', amount: '50 g', shoppingCategory: 'spice' },
          { name: 'Brown or white sugar', amount: '30 g', shoppingCategory: 'pantry' },
          { name: 'Pink curing salt', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
          { name: 'Black pepper, coarsely ground', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Garlic, smashed', amount: '2\u20133 cloves', optional: true, shoppingCategory: 'produce' },
          { name: 'Smoked paprika', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
          { name: 'Crushed red pepper', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Glaze',
        items: [
          { name: 'Brown sugar, packed', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Sriracha', amount: '1/3 cup', shoppingCategory: 'liquid' },
          { name: 'Soy sauce', amount: '2\u20133 tbsp', shoppingCategory: 'liquid' },
          { name: 'Honey or maple syrup', amount: '1\u20132 tbsp', shoppingCategory: 'pantry' },
          { name: 'Smoked paprika', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1/2\u20131 tsp', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: '1/2 tsp', shoppingCategory: 'spice' },
          { name: 'Cayenne', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/hickory/maple)', amount: '2\u20133 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '200\u2013225\u00B0F',
        cookTime: '12\u201324 hr brine + 2.5\u20134 hr smoke',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Pork belly, skinless', amount: '2\u20133 lb slab', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Brine',
            items: [
              { name: 'Water', amount: '1 quart', shoppingCategory: 'liquid' },
              { name: 'Kosher salt', amount: '50 g', shoppingCategory: 'spice' },
              { name: 'Brown or white sugar', amount: '30 g', shoppingCategory: 'pantry' },
              { name: 'Pink curing salt', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
              { name: 'Black pepper, coarsely ground', amount: '1 tsp', shoppingCategory: 'spice' },
              { name: 'Garlic, smashed', amount: '2\u20133 cloves', optional: true, shoppingCategory: 'produce' },
              { name: 'Smoked paprika', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
              { name: 'Crushed red pepper', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Glaze',
            items: [
              { name: 'Brown sugar, packed', amount: '1/2 cup', shoppingCategory: 'pantry' },
              { name: 'Sriracha', amount: '1/3 cup', shoppingCategory: 'liquid' },
              { name: 'Soy sauce', amount: '2\u20133 tbsp', shoppingCategory: 'liquid' },
              { name: 'Honey or maple syrup', amount: '1\u20132 tbsp', shoppingCategory: 'pantry' },
              { name: 'Smoked paprika', amount: '1 tsp', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1/2\u20131 tsp', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: '1/2 tsp', shoppingCategory: 'spice' },
              { name: 'Cayenne', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or maple)', amount: '1\u20132 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Set the SM045 to 200\u2013225\u00B0F \u2014 lower than the offset version to let the glaze caramelize slowly without scorching. The brine and glaze are unchanged. No charcoal sear is possible on the SM045; instead, finish sliced strips under a hot broiler or in a cast iron pan for 1\u20132 minutes per side to set the candy crust.',
      },
    ],
  },
  {
    slug: 'porkbuttPulled',
    title: 'Pulled Pork',
    category: 'pork',
    description: 'Bark-forward pulled pork from a 3\u20134 lb Boston butt, smoked low and slow.',
    cookTemp: '225\u2013250\u00B0F',
    cookTime: '4\u20135.5 hours',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Pork butt (Boston butt)', amount: '3\u20134 lb', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: '1 part', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: '1 part', shoppingCategory: 'spice' },
          { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Brown sugar', amount: 'pinch', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Spritz & Smoke',
        items: [
          { name: 'Apple juice or cider', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Butcher paper or foil', amount: '1 roll', shoppingCategory: 'equipment' },
          { name: 'Wood chunks (apple/hickory/pecan)', amount: '1\u20132 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '235\u2013250\u00B0F',
        cookTime: '6\u201310 hours',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Pork butt (Boston butt)', amount: '3\u20134 lb', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: '1 part', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: '1 part', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Brown sugar', amount: 'pinch', shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Wrap',
            items: [
              { name: 'Butcher paper or foil', amount: '1 roll', shoppingCategory: 'equipment' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (hickory or apple)', amount: '2 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'No spritzing needed \u2014 the SM045\u2019s sealed cabinet retains moisture. Expect a longer stall than on an offset; plan for 6\u201310 hours on a 3\u20134 lb butt. Wrap in butcher paper around 170\u2013175\u00B0F to speed through the stall. Pull at 198\u2013205\u00B0F probe-tender. Rest 1\u20132 hours wrapped before pulling.',
      },
    ],
  },
  {
    slug: 'porkbuttSliced',
    title: 'Sliced Pork Butt',
    category: 'pork',
    description: 'Pork shoulder smoked for slicing rather than pulling, with a moderate bark.',
    cookTemp: '225\u2013250\u00B0F',
    cookTime: '4\u20136 hours',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Pork butt (Boston butt)', amount: '3\u20134 lb', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: 'moderate', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: 'moderate', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Brown sugar', amount: 'pinch', optional: true, shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Spritz & Smoke',
        items: [
          { name: 'Apple juice & water (50/50)', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Wood chunks (apple/hickory/maple)', amount: '1\u20132 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '235\u2013250\u00B0F',
        cookTime: '6\u201310 hours',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Pork butt (Boston butt)', amount: '3\u20134 lb', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: 'moderate', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: 'moderate', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Brown sugar', amount: 'pinch', optional: true, shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (hickory or apple)', amount: '2 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'No spritzing needed in the SM045. For slicing, target 195\u2013203\u00B0F probe-tender \u2014 don\u2019t push past 205\u00B0F or it will want to shred. Bark will be slightly softer than offset; if you want a firmer crust, finish unwrapped for 20\u201330 minutes at 250\u00B0F before pulling.',
      },
    ],
  },
  {
    slug: 'porkRibsBabyback',
    title: 'Baby Back Ribs',
    category: 'pork',
    description: 'Tender smoked baby back ribs with a sweet-heat rub, meat pulling from the bones.',
    cookTemp: '225\u2013250\u00B0F',
    cookTime: '3.5\u20135 hours',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Pork baby back ribs', amount: '2\u20133 lb rack', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: '2 parts', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: '1 part', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Brown sugar', amount: 'to taste', shoppingCategory: 'pantry' },
          { name: 'Cayenne', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Spritz & Smoke',
        items: [
          { name: 'Apple juice & water (50/50)', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Foil or butcher paper', amount: 'as needed', shoppingCategory: 'equipment' },
          { name: 'Wood chunks (apple/hickory/maple)', amount: '2\u20133 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '225\u2013240\u00B0F',
        cookTime: '4\u20136 hours',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Pork baby back ribs', amount: '2\u20133 lb rack', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: '2 parts', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: '1 part', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Brown sugar', amount: 'to taste', shoppingCategory: 'pantry' },
              { name: 'Cayenne', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Wrap',
            items: [
              { name: 'Foil or butcher paper', amount: 'as needed', shoppingCategory: 'equipment' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or hickory)', amount: '1\u20132 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'No spritzing needed \u2014 the SM045 cabinet is humid enough on its own. You can still wrap around 3\u20134 hours to speed through any stall, but consider shortening the wrap phase by 20\u201330 minutes versus an offset since the cabinet retains more moisture. Judge doneness by bone pullback and the bend test, not strictly internal temp.',
      },
    ],
  },
  {
    slug: 'porkSpareRibs',
    title: 'Spare Ribs',
    category: 'pork',
    description: 'Full rack spare ribs smoked with a 2:1 salt-pepper rub and optional wrap phase.',
    cookTemp: '225\u2013250\u00B0F',
    cookTime: '4\u20136 hours',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Pork spare ribs', amount: '3\u20134 lb rack', shoppingCategory: 'protein' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Kosher salt', amount: '2 parts', shoppingCategory: 'spice' },
          { name: 'Black pepper', amount: '1 part', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Brown sugar', amount: 'to taste', shoppingCategory: 'pantry' },
          { name: 'Cayenne', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Spritz & Smoke',
        items: [
          { name: 'Apple juice & water (50/50)', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Foil or butcher paper', amount: 'as needed', shoppingCategory: 'equipment' },
          { name: 'Wood chunks (apple/hickory/maple)', amount: '2\u20133 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '225\u2013240\u00B0F',
        cookTime: '5\u20137 hours',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Pork spare ribs', amount: '3\u20134 lb rack', shoppingCategory: 'protein' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Kosher salt', amount: '2 parts', shoppingCategory: 'spice' },
              { name: 'Black pepper', amount: '1 part', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Onion powder', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Paprika', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Brown sugar', amount: 'to taste', shoppingCategory: 'pantry' },
              { name: 'Cayenne', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Wrap',
            items: [
              { name: 'Foil or butcher paper', amount: 'as needed', shoppingCategory: 'equipment' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (apple or hickory)', amount: '1\u20132 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'No spritzing needed in the SM045. Spare ribs are bigger than baby backs and will take longer \u2014 budget 5\u20137 hours. Wrap around hours 3\u20134 if you want to speed things along, but shorten the wrap phase slightly versus an offset. Judge by bend test and bone pullback.',
      },
    ],
  },
  {
    slug: 'ribsAndPorkButt',
    title: 'Ribs & Pork Butt \u2014 First Cook Guide',
    category: 'pork',
    description: 'Quick reference for firebox setup, vents, water pan, and meat placement.',
    cookTemp: '225\u2013275\u00B0F',
    cookTime: 'Reference guide',
    ingredients: [],
    supportedEquipment: ['offset-smoker'],
  },
];
