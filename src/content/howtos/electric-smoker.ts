import type { HowToMeta } from '../../types';

export const howtos: HowToMeta[] = [
  {
    slug: 'sm045ShoppingList',
    title: 'SM045 Shopping List',
    description: 'Essential supplies and accessories for the Cookshack SuperSmoker Elite SM045.',
    shoppingItems: [
      {
        groupName: 'Essential Supplies',
        items: [
          { name: 'Dual-probe digital thermometer (optional \u2014 SM045 has built-in probe)', amount: '1', optional: true, shoppingCategory: 'equipment' },
          { name: 'Wood chunks (hickory, oak, apple, cherry, pecan)', amount: 'assorted, 1\u20132 oz portions', shoppingCategory: 'fuel' },
          { name: 'Disposable aluminum pans (for drip tray)', amount: 'pack', shoppingCategory: 'equipment' },
          { name: 'Kitchen scale (for weighing wood)', amount: '1', shoppingCategory: 'equipment' },
          { name: 'Butcher paper, unwaxed pink/peach', amount: '1 roll', shoppingCategory: 'equipment' },
          { name: 'Heavy-duty aluminum foil', amount: '1 roll', shoppingCategory: 'equipment' },
        ],
      },
      {
        groupName: 'Recommended Accessories',
        items: [
          { name: 'Extra SM045-compatible racks/shelves', amount: 'as needed', optional: true, shoppingCategory: 'equipment' },
          { name: 'Vacuum sealer (for storing smoked meats)', amount: '1', optional: true, shoppingCategory: 'equipment' },
          { name: 'Instant-read thermometer (for spot checks)', amount: '1', optional: true, shoppingCategory: 'equipment' },
          { name: 'Wire cooling rack (for resting and pellicles)', amount: '1', optional: true, shoppingCategory: 'equipment' },
        ],
      },
    ],
    equipmentId: 'electric-smoker',
  },
  {
    slug: 'sm045Setup',
    title: 'SM045 Setup & First Cook',
    description: 'Getting started with the Cookshack SuperSmoker Elite SM045 \u2014 seasoning, loading, and your first smoke.',
    equipmentId: 'electric-smoker',
  },
  {
    slug: 'sm045WoodGuide',
    title: 'SM045 Wood Guide',
    description: 'How much wood to use in the SM045, which species pair with which proteins, and common over-smoking mistakes.',
    equipmentId: 'electric-smoker',
  },
];
