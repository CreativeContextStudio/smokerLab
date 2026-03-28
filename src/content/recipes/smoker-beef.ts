import type { RecipeMeta } from '../../types';

export const recipes: RecipeMeta[] = [
  {
    slug: 'brisketSliced',
    title: 'Sliced Brisket',
    category: 'beef',
    description: 'Low-and-slow smoked brisket flat for clean, juicy slices with maximum bark.',
    cookTemp: '250\u2013275\u00B0F',
    cookTime: '4\u20136 hours',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Brisket flat', amount: '3\u20135 lb', shoppingCategory: 'protein' },
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
        ],
      },
      {
        groupName: 'Spritz & Smoke',
        items: [
          { name: 'Beef broth', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Water', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Wood chunks (hickory/oak/pecan)', amount: '3\u20134 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '225\u2013250\u00B0F',
        cookTime: '6\u201310 hours',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Brisket flat', amount: '3\u20135 lb', shoppingCategory: 'protein' },
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
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (hickory/oak/pecan)', amount: '2 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'No spritzing needed \u2014 the SM045\u2019s sealed cabinet retains moisture naturally. Expect a longer stall than on an offset; the humid environment dampens evaporative cooling. Bark will be softer than offset \u2014 consider a 20\u201330 min unwrapped finish phase at 250\u00B0F to firm it.',
      },
    ],
  },
  {
    slug: 'brisketPulled',
    title: 'Pulled Brisket',
    category: 'beef',
    description: 'Wrapped brisket smoked to 200\u00B0F+ for tender, shreddable pulled beef.',
    cookTemp: '250\u2013275\u00B0F',
    cookTime: '4\u20137 hours',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Brisket flat or small packer', amount: '3\u20135 lb', shoppingCategory: 'protein' },
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
        ],
      },
      {
        groupName: 'Spritz & Wrap',
        items: [
          { name: 'Beef broth', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Butcher paper or foil', amount: '1 roll', shoppingCategory: 'equipment' },
          { name: 'Wood chunks (hickory/oak/pecan)', amount: '3\u20134 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '225\u2013250\u00B0F',
        cookTime: '6\u201310 hours',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Brisket flat or small packer', amount: '3\u20135 lb', shoppingCategory: 'protein' },
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
            ],
          },
          {
            groupName: 'Wrap',
            items: [
              { name: 'Butcher paper or foil', amount: '1 roll', shoppingCategory: 'equipment' },
              { name: 'Beef broth (for wrap liquid)', amount: '1/4 cup', shoppingCategory: 'liquid' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (hickory/oak/pecan)', amount: '2 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'No spritzing needed \u2014 the SM045\u2019s sealed cabinet keeps moisture high. Wrap in butcher paper around 170\u2013180\u00B0F internal with a small splash of beef broth inside the paper. Target 200\u2013208\u00B0F probe-tender for pulling. Expect a longer stall than on an offset.',
      },
    ],
  },
  {
    slug: 'pastrami',
    title: 'Smoked Pastrami',
    category: 'beef',
    description: 'Cured brisket flat with peppercorn-coriander bark, smoked for deli-style pastrami.',
    cookTemp: '250\u2013275\u00B0F',
    cookTime: '7\u201310 day cure + 4\u20136 hr smoke',
    ingredients: [
      {
        groupName: 'Cure (per quart of water)',
        items: [
          { name: 'Brisket flat', amount: '3\u20135 lb', shoppingCategory: 'protein' },
          { name: 'Kosher salt', amount: '50 g per quart', shoppingCategory: 'spice' },
          { name: 'Sugar', amount: '30 g per quart', shoppingCategory: 'pantry' },
          { name: 'Pink curing salt #1', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
          { name: 'Black peppercorns', amount: '1 tbsp per lb', shoppingCategory: 'spice' },
          { name: 'Coriander seeds', amount: '1 tbsp per lb', shoppingCategory: 'spice' },
          { name: 'Yellow mustard seeds', amount: '1 tbsp per lb', shoppingCategory: 'spice' },
          { name: 'Juniper berries', amount: '1 tbsp per lb', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp per lb', shoppingCategory: 'spice' },
          { name: 'Smoked paprika', amount: '1 tsp per lb', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Rub',
        items: [
          { name: 'Black pepper, coarsely ground', amount: '2 tbsp', shoppingCategory: 'spice' },
          { name: 'Ground coriander', amount: '2 tbsp', shoppingCategory: 'spice' },
          { name: 'Crushed mustard seeds', amount: '1 tbsp', shoppingCategory: 'spice' },
          { name: 'Crushed juniper berries', amount: '1 tbsp', shoppingCategory: 'spice' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Smoked paprika', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Brown sugar', amount: '1 tsp', optional: true, shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/hickory/maple)', amount: '3\u20134 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
          { name: 'Beef broth (water pan)', amount: '2 cups', shoppingCategory: 'liquid' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '225\u2013250\u00B0F',
        cookTime: '7\u201310 day cure + 5\u20138 hr smoke',
        ingredients: [
          {
            groupName: 'Cure (per quart of water)',
            items: [
              { name: 'Brisket flat', amount: '3\u20135 lb', shoppingCategory: 'protein' },
              { name: 'Kosher salt', amount: '50 g per quart', shoppingCategory: 'spice' },
              { name: 'Sugar', amount: '30 g per quart', shoppingCategory: 'pantry' },
              { name: 'Pink curing salt #1', amount: '1 tsp', optional: true, shoppingCategory: 'spice' },
              { name: 'Black peppercorns', amount: '1 tbsp per lb', shoppingCategory: 'spice' },
              { name: 'Coriander seeds', amount: '1 tbsp per lb', shoppingCategory: 'spice' },
              { name: 'Yellow mustard seeds', amount: '1 tbsp per lb', shoppingCategory: 'spice' },
              { name: 'Juniper berries', amount: '1 tbsp per lb', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1 tsp per lb', shoppingCategory: 'spice' },
              { name: 'Smoked paprika', amount: '1 tsp per lb', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Rub',
            items: [
              { name: 'Black pepper, coarsely ground', amount: '2 tbsp', shoppingCategory: 'spice' },
              { name: 'Ground coriander', amount: '2 tbsp', shoppingCategory: 'spice' },
              { name: 'Crushed mustard seeds', amount: '1 tbsp', shoppingCategory: 'spice' },
              { name: 'Crushed juniper berries', amount: '1 tbsp', shoppingCategory: 'spice' },
              { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
              { name: 'Smoked paprika', amount: '1 tsp', shoppingCategory: 'spice' },
              { name: 'Brown sugar', amount: '1 tsp', optional: true, shoppingCategory: 'pantry' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (hickory/apple/maple)', amount: '2 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'The SM045\u2019s humid cabinet is ideal for pastrami \u2014 no water pan or spritzing needed. The cure and pellicle process is identical; only the smoke phase changes. Set the controller to 225\u2013250\u00B0F and load 2 oz of hickory or apple chunks. Expect the smoke phase to run longer than on an offset. Target 195\u2013205\u00B0F probe-tender for slicing.',
      },
    ],
  },
  {
    slug: 'brisketDontsAndDos',
    title: 'Brisket Do\u2019s & Don\u2019ts',
    category: 'beef',
    description: 'Common mistakes and fixes for small briskets on the CC1830S offset smoker.',
    cookTemp: '250\u2013275\u00B0F',
    cookTime: 'Reference guide',
    ingredients: [],
    supportedEquipment: ['offset-smoker'],
  },
  {
    slug: 'beefCheeksBarbacoa',
    title: 'Smoked Beef Cheeks Barbacoa',
    category: 'beef',
    description: 'Rich, shreddable beef cheeks smoked for bark then confited overnight in beef tallow for intense barbacoa flavor.',
    cookTemp: '250\u00B0F',
    cookTime: '2\u20133 hr smoke + 8\u201314 hr confit',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Beef cheeks', amount: '3\u20134 lb (2\u20134 cheeks)', shoppingCategory: 'protein' },
          { name: 'Seasoned salt', amount: 'heavy coat', shoppingCategory: 'spice' },
          { name: 'Black pepper (16 mesh or coarse)', amount: 'heavy coat', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Confit',
        items: [
          { name: 'Beef tallow', amount: 'enough to mostly submerge', shoppingCategory: 'liquid' },
          { name: 'Beef stock', amount: 'substitute if no tallow', optional: true, shoppingCategory: 'liquid' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (oak, hickory, or mesquite)', amount: '1\u20132 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '225\u2013250\u00B0F',
        cookTime: '3\u20134 hr smoke + 8\u201314 hr confit',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Beef cheeks', amount: '3\u20134 lb (2\u20134 cheeks)', shoppingCategory: 'protein' },
              { name: 'Seasoned salt', amount: 'heavy coat', shoppingCategory: 'spice' },
              { name: 'Black pepper (16 mesh or coarse)', amount: 'heavy coat', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Confit',
            items: [
              { name: 'Beef tallow', amount: 'enough to mostly submerge', shoppingCategory: 'liquid' },
              { name: 'Beef stock', amount: 'substitute if no tallow', optional: true, shoppingCategory: 'liquid' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (oak or hickory)', amount: '1\u20132 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Set the SM045 to 225\u2013250\u00B0F. You\u2019re smoking for color and bark only \u2014 smoke 3\u20134 hours until the cheeks have a deep, dark exterior, then move them to the oven for the overnight confit. No spritzing needed; the cabinet retains moisture. The confit stage is unchanged.',
      },
    ],
  },
  {
    slug: 'beefChuckRoast',
    title: 'Smoked & Braised Chuck Roast',
    category: 'beef',
    description: 'Smoked chuck roast with deep bark, then braised low and slow until it shreds like chopped brisket.',
    cookTemp: '250\u00B0F',
    cookTime: '2\u20133 hr smoke + 3\u201314 hr braise',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Beef chuck roast', amount: '3\u20134 lb', shoppingCategory: 'protein' },
          { name: 'Seasoned salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Black pepper (16 mesh or coarse)', amount: 'heavy coat', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Braise',
        items: [
          { name: 'Beef stock or tallow', amount: '1\u20132 cups', shoppingCategory: 'liquid' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (oak, hickory, or pecan)', amount: '1\u20132 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '225\u2013250\u00B0F',
        cookTime: '3\u20134 hr smoke + 3\u201314 hr braise',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Beef chuck roast', amount: '3\u20134 lb', shoppingCategory: 'protein' },
              { name: 'Seasoned salt', amount: 'to taste', shoppingCategory: 'spice' },
              { name: 'Black pepper (16 mesh or coarse)', amount: 'heavy coat', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Braise',
            items: [
              { name: 'Beef stock or tallow', amount: '1\u20132 cups', shoppingCategory: 'liquid' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (oak, hickory, or pecan)', amount: '1\u20132 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Set the SM045 to 225\u2013250\u00B0F. Smoke for color and bark (3\u20134 hours), then transfer to the oven for the braise \u2014 the two-stage approach is unchanged. No spritzing needed in the SM045. The braise stage is identical regardless of how the smoke phase was done.',
      },
    ],
  },
  {
    slug: 'beefTriTip',
    title: 'Smoked Tri-Tip',
    category: 'beef',
    description: 'Juicy, steak-like smoked tri-tip pulled at medium-rare, rested in butter, and sliced against the grain.',
    cookTemp: '250\u00B0F',
    cookTime: '1.5\u20132.5 hours',
    ingredients: [
      {
        groupName: 'Main',
        items: [
          { name: 'Tri-tip roast', amount: '2\u20133 lb', shoppingCategory: 'protein' },
          { name: 'Seasoned salt', amount: 'like a thick steak', shoppingCategory: 'spice' },
          { name: 'Black pepper (16 mesh or coarse)', amount: 'heavy coat', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Rest & Finish',
        items: [
          { name: 'Butter', amount: 'pad for resting', shoppingCategory: 'pantry' },
          { name: 'Flaky finishing salt', amount: 'for slicing', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (oak, hickory, or pecan)', amount: '1\u20132 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
    supportedEquipment: ['offset-smoker', 'electric-smoker', 'charcoal-grill'],
    equipmentOverrides: [
      {
        equipmentId: 'electric-smoker',
        cookTemp: '225\u2013250\u00B0F',
        cookTime: '2\u20133 hours',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Tri-tip roast', amount: '2\u20133 lb', shoppingCategory: 'protein' },
              { name: 'Seasoned salt', amount: 'like a thick steak', shoppingCategory: 'spice' },
              { name: 'Black pepper (16 mesh or coarse)', amount: 'heavy coat', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Rest & Finish',
            items: [
              { name: 'Butter', amount: 'pad for resting', shoppingCategory: 'pantry' },
              { name: 'Flaky finishing salt', amount: 'for slicing', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Smoke',
            items: [
              { name: 'Wood chunks (oak or hickory)', amount: '1 oz', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Set the SM045 to 225\u2013250\u00B0F. Tri-tip is a steak cook \u2014 pull at 130\u2013135\u00B0F for medium-rare; carryover in the insulated cabinet will add 5\u201310\u00B0F during the rest. Begin probing after 90 minutes. Rest in butter, wrapped in foil, for 40\u201360 minutes before slicing against the grain.',
      },
      {
        equipmentId: 'charcoal-grill',
        cookTemp: '275\u2013325\u00B0F indirect, 500\u00B0F+ sear',
        cookTime: '1\u20132 hours indirect + 4\u20136 min sear',
        ingredients: [
          {
            groupName: 'Main',
            items: [
              { name: 'Tri-tip roast', amount: '2\u20133 lb', shoppingCategory: 'protein' },
              { name: 'Seasoned salt', amount: 'like a thick steak', shoppingCategory: 'spice' },
              { name: 'Black pepper (16 mesh or coarse)', amount: 'heavy coat', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Rest & Finish',
            items: [
              { name: 'Butter', amount: 'pad for resting', shoppingCategory: 'pantry' },
              { name: 'Flaky finishing salt', amount: 'for slicing', shoppingCategory: 'spice' },
            ],
          },
          {
            groupName: 'Charcoal',
            items: [
              { name: 'Charcoal briquettes', amount: '1 full chimney + 1/2 chimney for sear', shoppingCategory: 'fuel' },
            ],
          },
        ],
        notes: 'Reverse-sear on the charcoal grill: bank 3/4 chimney coals tightly to one end, pan on low position, vents 1/2 open. Tri-tip goes on the far end, fat-side up, lid closed. Cook indirect at 275\u2013325\u00B0F to 115\u2013120\u00B0F internal (1\u20131.5 hours). Pull, tent foil 10 minutes while ramping fire: add fresh half-chimney, raise pan to high, vents fully open. Sear 2\u20133 min/side over the hot bank at 500\u00B0F+. Pull at 130\u2013135\u00B0F. Rest in butter 40 minutes, slice against the grain. No wood chunks \u2014 charcoal flavor is the only smoke here.',
      },
    ],
  },
];
