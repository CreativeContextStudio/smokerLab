import { recipes, howtos } from './manifest';
import type { RecipeMeta, HowToMeta } from '../types';

// Load all markdown files at build time
const recipeModules = import.meta.glob(
  '../../recipes/*.md',
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>;

const howtoModules = import.meta.glob(
  '../../howto/*.md',
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>;

function extractSlug(path: string): string {
  const filename = path.split('/').pop() ?? '';
  return filename.replace(/\.md$/, '');
}

// Build slug -> content maps
const recipeContentMap = new Map<string, string>();
for (const [path, content] of Object.entries(recipeModules)) {
  const slug = extractSlug(path);
  recipeContentMap.set(slug, content);
}

const howtoContentMap = new Map<string, string>();
for (const [path, content] of Object.entries(howtoModules)) {
  const slug = extractSlug(path);
  howtoContentMap.set(slug, content);
}

export function getRecipeContent(slug: string): string | undefined {
  return recipeContentMap.get(slug);
}

export function getHowToContent(slug: string): string | undefined {
  // Direct match (case-insensitive for first char)
  if (howtoContentMap.has(slug)) return howtoContentMap.get(slug);
  const lower = slug.toLowerCase();
  for (const [key, val] of howtoContentMap) {
    if (key.toLowerCase() === lower) return val;
  }
  return undefined;
}

export function getAllRecipes(): (RecipeMeta & { hasContent: boolean })[] {
  return recipes.map((r) => ({
    ...r,
    hasContent: getRecipeContent(r.slug) !== undefined,
  }));
}

export function getAllHowTos(): (HowToMeta & { hasContent: boolean })[] {
  return howtos.map((h) => ({
    ...h,
    hasContent: getHowToContent(h.slug) !== undefined,
  }));
}

export function getRecipeMeta(slug: string): RecipeMeta | undefined {
  return recipes.find((r) => r.slug === slug);
}

export function getHowToMeta(slug: string): HowToMeta | undefined {
  return howtos.find((h) => h.slug === slug);
}
