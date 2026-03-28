import { recipes, howtos } from './manifest';
import type { RecipeMeta, HowToMeta } from '../types';

// Load all markdown/text files at build time
const recipeModulesMd = import.meta.glob(
  '../../../recipes/*.md',
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>;

const recipeModulesTxt = import.meta.glob(
  '../../../recipes/*.txt',
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>;

const howtoModules = import.meta.glob(
  '../../../howto/*.md',
  { query: '?raw', import: 'default', eager: true }
) as Record<string, string>;

// Merge md and txt recipe modules
const recipeModules = { ...recipeModulesMd, ...recipeModulesTxt };

function extractSlug(path: string): string {
  const filename = path.split('/').pop() ?? '';
  // Remove extension (.md or .txt)
  const name = filename.replace(/\.(md|txt)$/, '');
  // For filenames with spaces, convert to slug
  return name.replace(/\s+/g, '-').toLowerCase();
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

// Also map by the manifest slug (for the txt file with different naming)
// The txt file "3 Best Brisket Alternatives Under $30.txt" -> slug "3-best-brisket-alternatives-under-$30"
// We need to match it to manifest slug "3-best-brisket-alternatives-under-30"
function normalizeSlug(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9-]/g, '');
}

export function getRecipeContent(slug: string): string | undefined {
  // Direct match first
  if (recipeContentMap.has(slug)) return recipeContentMap.get(slug);
  // Normalized match for edge cases (like $ in filename)
  const normalized = normalizeSlug(slug);
  for (const [key, val] of recipeContentMap) {
    if (normalizeSlug(key) === normalized) return val;
  }
  return undefined;
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
