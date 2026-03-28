import type { RecipeMeta, HowToMeta } from '../types';

// ── Smoker recipes (offset smoker) ─────────────────────
import { recipes as smokerBeef } from './recipes/smoker-beef';
import { recipes as smokerPork } from './recipes/smoker-pork';
import { recipes as smokerPoultry } from './recipes/smoker-poultry';
import { recipes as smokerSeafood } from './recipes/smoker-seafood';
import { recipes as smokerVeggies } from './recipes/smoker-veggies';
import { recipes as smokerCondiments } from './recipes/smoker-condiments';

// ── Grill recipes (charcoal grill) ─────────────────────
import { recipes as grillBeef } from './recipes/grill-beef';
import { recipes as grillPork } from './recipes/grill-pork';
import { recipes as grillPoultry } from './recipes/grill-poultry';
import { recipes as grillSeafood } from './recipes/grill-seafood';
import { recipes as grillVeggies } from './recipes/grill-veggies';
import { recipes as grillCondiments } from './recipes/grill-condiments';

// ── Parrilla recipes (Uruguayan live-fire) ─────────────
import { recipes as parrillaBeef } from './recipes/parrilla-beef';
import { recipes as parrillaPork } from './recipes/parrilla-pork';
import { recipes as parrillaPoultry } from './recipes/parrilla-poultry';
import { recipes as parrillaVeggies } from './recipes/parrilla-veggies';
import { recipes as parrillaCondiments } from './recipes/parrilla-condiments';

// ── How-to guides ──────────────────────────────────────
import { howtos as offsetSmokerHowtos } from './howtos/offset-smoker';
import { howtos as charcoalGrillHowtos } from './howtos/charcoal-grill';
import { howtos as gasGrillHowtos } from './howtos/gas-grill';
import { howtos as electricSmokerHowtos } from './howtos/electric-smoker';
import { howtos as parrillaHowtos } from './howtos/parrilla-grill';

export const recipes: RecipeMeta[] = [
  ...smokerBeef,
  ...smokerPork,
  ...smokerPoultry,
  ...smokerSeafood,
  ...smokerVeggies,
  ...smokerCondiments,
  ...grillBeef,
  ...grillPork,
  ...grillPoultry,
  ...grillSeafood,
  ...grillVeggies,
  ...grillCondiments,
  ...parrillaBeef,
  ...parrillaPork,
  ...parrillaPoultry,
  ...parrillaVeggies,
  ...parrillaCondiments,
];

export const howtos: HowToMeta[] = [
  ...offsetSmokerHowtos,
  ...charcoalGrillHowtos,
  ...gasGrillHowtos,
  ...electricSmokerHowtos,
  ...parrillaHowtos,
];
