import type { EquipmentProfile } from '../types';

export const equipment: EquipmentProfile[] = [
  {
    id: 'offset-smoker',
    name: 'Offset Smoker',
    model: 'Royal Gourmet CC1830S',
    shortName: 'CC1830S Offset',
    description: 'Low-and-slow offset smoking with charcoal and wood. Firebox feeds smoke through the cook chamber for authentic barbecue.',
    fuelType: 'charcoal',
    supportsSmoke: true,
    defaultCookMethod: 'low-and-slow',
  },
  {
    id: 'charcoal-grill',
    name: 'Charcoal Grill',
    model: 'Royal Gourmet CC1830S',
    shortName: 'CC1830S Grill',
    description: 'Direct and indirect charcoal grilling on the CC1830S main chamber. Hot-and-fast searing, two-zone cooking, and roasting.',
    fuelType: 'charcoal',
    supportsSmoke: false,
    defaultCookMethod: 'direct',
  },
  {
    id: 'gas-grill',
    name: 'Gas Grill',
    model: 'Weber Spirit II',
    shortName: 'Spirit II',
    description: 'Propane gas grilling with precise burner control. Quick preheat, easy zone cooking, and consistent temperatures.',
    fuelType: 'gas',
    supportsSmoke: false,
    defaultCookMethod: 'direct',
  },
  {
    id: 'electric-smoker',
    name: 'Electric Smoker',
    model: 'Cookshack SuperSmoker Elite SM045',
    shortName: 'SM045',
    description: 'Set-and-forget electric smoking with precise temperature control. Minimal wood, maximum consistency.',
    fuelType: 'electric',
    supportsSmoke: true,
    defaultCookMethod: 'set-and-forget',
  },
  {
    id: 'parrilla-grill',
    name: 'Parrilla Grill',
    model: 'Asado a la Parrilla',
    shortName: 'Parrilla',
    description: 'Argentine-style live-fire grilling over hardwood coals. Adjustable grate height controls heat for everything from quick sears to slow roasts.',
    fuelType: 'wood',
    supportsSmoke: true,
    defaultCookMethod: 'live-fire',
  },
];

export function getEquipmentProfile(id: string): EquipmentProfile | undefined {
  return equipment.find((e) => e.id === id);
}

export const DEFAULT_EQUIPMENT_ID = 'offset-smoker' as const;
