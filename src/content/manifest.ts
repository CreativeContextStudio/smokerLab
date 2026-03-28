import type { RecipeMeta, HowToMeta } from '../types';

export const recipes: RecipeMeta[] = [
  // ── BEEF ──────────────────────────────────────────
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
  },
  {
    slug: 'BrisketDontsAndDos',
    title: 'Brisket Do\u2019s & Don\u2019ts',
    category: 'beef',
    description: 'Common mistakes and fixes for small briskets on the CC1830S offset smoker.',
    cookTemp: '250\u2013275\u00B0F',
    cookTime: 'Reference guide',
    ingredients: [],
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
  },

  // ── PORK ──────────────────────────────────────────
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
  },
  {
    slug: 'ribsAndPorkButt',
    title: 'Ribs & Pork Butt \u2014 First Cook Guide',
    category: 'pork',
    description: 'Quick reference for firebox setup, vents, water pan, and meat placement.',
    cookTemp: '225\u2013275\u00B0F',
    cookTime: 'Reference guide',
    ingredients: [],
  },

  // ── POULTRY ───────────────────────────────────────
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
  },

  // ── SEAFOOD ───────────────────────────────────────
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
  },

  // ── VEGGIES & SIDES ───────────────────────────────
  {
    slug: 'salsa',
    title: 'Smoked Salsa',
    category: 'veggies',
    description: 'Smoke the vegetables first, then finish into bright, fresh salsa with lime and cilantro.',
    cookTemp: '325\u2013375\u00B0F',
    cookTime: '15\u201330 minutes',
    ingredients: [
      {
        groupName: 'Vegetables',
        items: [
          { name: 'Roma/plum tomatoes', amount: '2\u20133 lbs (6\u20138)', shoppingCategory: 'produce' },
          { name: 'Bell peppers', amount: '2\u20133', shoppingCategory: 'produce' },
          { name: 'Jalape\u00F1os or serranos', amount: '1\u20132', optional: true, shoppingCategory: 'produce' },
          { name: 'White or yellow onion', amount: '1 medium', shoppingCategory: 'produce' },
          { name: 'Garlic cloves', amount: '4\u20136', shoppingCategory: 'produce' },
          { name: 'Pineapple or mango', amount: '1\u20132 cups', optional: true, shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Fresh Finish',
        items: [
          { name: 'Fresh cilantro', amount: '1/4\u20131/2 cup, chopped', shoppingCategory: 'produce' },
          { name: 'Limes', amount: '1\u20132', shoppingCategory: 'produce' },
          { name: 'Kosher salt', amount: 'to taste', shoppingCategory: 'spice' },
          { name: 'Cumin', amount: '1/2 tsp', optional: true, shoppingCategory: 'spice' },
          { name: 'Chili powder', amount: 'pinch', optional: true, shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/maple/oak)', amount: '1\u20132 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
  },
  {
    slug: 'veggies',
    title: 'Full Vegetarian Spread',
    category: 'veggies',
    description: 'Smoked eggplant, portobello, peppers, tomatoes, and fresh grilled veggies for a crowd.',
    cookTemp: '325\u2013375\u00B0F',
    cookTime: '2.5\u20133.5 hours (staggered)',
    ingredients: [
      {
        groupName: 'Smoked Stars',
        items: [
          { name: 'Eggplant', amount: '2 large', shoppingCategory: 'produce' },
          { name: 'Portobello mushroom caps', amount: '4\u20136 large', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Supporting Veggies',
        items: [
          { name: 'Bell peppers', amount: '3\u20134', shoppingCategory: 'produce' },
          { name: 'Onions', amount: '2\u20133', shoppingCategory: 'produce' },
          { name: 'Large tomatoes', amount: '2\u20133', shoppingCategory: 'produce' },
          { name: 'Pineapple or mango', amount: 'optional', optional: true, shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Fresh Grilled',
        items: [
          { name: 'Zucchini or summer squash', amount: '2\u20133', shoppingCategory: 'produce' },
          { name: 'Asparagus', amount: '1 bunch', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Finishes',
        items: [
          { name: 'Olive oil', amount: 'for drizzling', shoppingCategory: 'pantry' },
          { name: 'Balsamic glaze', amount: 'for finishing', shoppingCategory: 'pantry' },
          { name: 'Lemon', amount: '1', shoppingCategory: 'produce' },
          { name: 'Fresh herbs (parsley/basil/cilantro)', amount: 'handful', shoppingCategory: 'produce' },
          { name: 'Crusty bread or pita', amount: 'as needed', shoppingCategory: 'pantry' },
        ],
      },
      {
        groupName: 'Smoke',
        items: [
          { name: 'Wood chunks (apple/maple/oak)', amount: '2\u20133 chunks', shoppingCategory: 'fuel' },
          { name: 'Charcoal', amount: 'as needed', shoppingCategory: 'fuel' },
        ],
      },
    ],
  },

  // ── CONDIMENTS ────────────────────────────────────
  {
    slug: 'sauces',
    title: 'Sauces & Pairings',
    category: 'condiments',
    description: '10 sauces that pair with smoked brisket, pork, chicken, fish, and veggies.',
    cookTemp: 'N/A',
    cookTime: '10\u201315 min each',
    ingredients: [
      {
        groupName: 'Ranch',
        items: [
          { name: 'Sour cream', amount: '1 cup', shoppingCategory: 'pantry' },
          { name: 'Buttermilk', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Onion powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Parsley', amount: '1 tbsp', shoppingCategory: 'produce' },
          { name: 'Dill', amount: '1 tbsp', shoppingCategory: 'produce' },
        ],
      },
      {
        groupName: 'Cilantro-Lime Crema',
        items: [
          { name: 'Sour cream or Greek yogurt', amount: '1 cup', shoppingCategory: 'pantry' },
          { name: 'Limes', amount: '1\u20132', shoppingCategory: 'produce' },
          { name: 'Fresh cilantro', amount: '1/2 cup', shoppingCategory: 'produce' },
          { name: 'Garlic clove', amount: '1 small', shoppingCategory: 'produce' },
          { name: 'Cumin', amount: 'pinch', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Alabama White BBQ',
        items: [
          { name: 'Mayonnaise', amount: '1 cup', shoppingCategory: 'pantry' },
          { name: 'Apple cider vinegar', amount: '2\u20133 tbsp', shoppingCategory: 'liquid' },
          { name: 'Lemon juice', amount: '1 tbsp', shoppingCategory: 'produce' },
          { name: 'Sugar', amount: '1 tsp', shoppingCategory: 'pantry' },
          { name: 'Smoked paprika', amount: '1/2 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Chimichurri',
        items: [
          { name: 'Fresh parsley', amount: '1 cup, chopped', shoppingCategory: 'produce' },
          { name: 'Fresh cilantro', amount: '1/4 cup', optional: true, shoppingCategory: 'produce' },
          { name: 'Garlic cloves', amount: '4\u20136', shoppingCategory: 'produce' },
          { name: 'Olive oil', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Red wine vinegar', amount: '3 tbsp', shoppingCategory: 'liquid' },
          { name: 'Red pepper flakes', amount: '1/2 tsp', shoppingCategory: 'spice' },
        ],
      },
      {
        groupName: 'Sweet & Tangy BBQ Mop',
        items: [
          { name: 'Cider vinegar', amount: '1 cup', shoppingCategory: 'liquid' },
          { name: 'Ketchup or tomato paste', amount: '1/2 cup', shoppingCategory: 'pantry' },
          { name: 'Brown sugar', amount: '1/4 cup', shoppingCategory: 'pantry' },
          { name: 'Mustard', amount: '1 tbsp', shoppingCategory: 'pantry' },
          { name: 'Garlic powder', amount: '1 tsp', shoppingCategory: 'spice' },
          { name: 'Smoked paprika', amount: '1/2 tsp', shoppingCategory: 'spice' },
        ],
      },
    ],
  },
];

export const howtos: HowToMeta[] = [
  {
    slug: 'shoppingList',
    title: 'Smoker Shopping List',
    description: 'Budget-friendly upgrades and supplies for the Royal Gourmet CC1830S offset smoker.',
    shoppingItems: [
      {
        groupName: 'Essential Mods',
        items: [
          { name: 'High-temp gasket tape (1/2\u2033 x 1/8\u2033, 15\u201330 ft)', amount: '1 roll', shoppingCategory: 'equipment' },
          { name: 'High-temp RTV silicone sealant (600\u00B0F+)', amount: '1 tube', shoppingCategory: 'equipment' },
          { name: 'Charcoal basket (expanded metal, ~10\u201312\u2033 x 8\u201310\u2033 x 4\u20136\u2033)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Dual-probe digital thermometer (700\u00B0F rated)', amount: '1', shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Recommended Supplies',
        items: [
          { name: 'Chimney starter', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Disposable aluminum pans (9\u2033x13\u2033)', amount: 'pack', shoppingCategory: 'equipment' },
          { name: 'Lump charcoal or briquettes', amount: '1 bag', shoppingCategory: 'fuel' },
          { name: 'Wood chunks (hickory/oak/pecan)', amount: 'assorted', shoppingCategory: 'fuel' },
        ],
      },
    ],
  },
  {
    slug: 'smokerSetup',
    title: 'Smoker Setup & First Cook',
    description: 'Concrete shopping list and first-cook layout for ribs or pork butt on the CC1830S.',
  },
  {
    slug: 'smokerMods',
    title: 'Smoker Mods & Baffle Layout',
    description: 'One-time mods: door sealing, baffle/tuning plate positioning, and charcoal basket setup.',
  },
  {
    slug: 'maintainTemp',
    title: 'Maintaining Temperature',
    description: 'Practical routine for keeping the CC1830S steady at 225\u2013275\u00B0F.',
  },
  {
    slug: 'wrappingBrisket',
    title: 'Wrapping Brisket',
    description: 'When, why, and how to wrap a small brisket on an offset smoker.',
  },
  {
    slug: 'grillingDetails',
    title: 'Grilling Details & Smoker Anatomy',
    description: 'Technical details on vents, charcoal management, baffles, and hot spots for the CC1830S.',
  },
  {
    slug: 'controlPanel',
    title: 'CC1830S Control Panel Guide',
    description: 'Compact printable reference for vent positions, fire management, and holding temps.',
  },
];
