# smokerLab

Recipes, how-to guides, and shopping lists for the **Royal Gourmet CC1830S** offset smoker.

## Quick Start

```bash
cd app
npm install
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

## What's Inside

- **21 Recipes** -- Beef (brisket, pastrami, budget alternatives), pork (pulled, sliced, ribs, bacon), poultry (spatchcock, thighs, wings), seafood (salmon, swordfish, lobster, mussels), veggies & sides (smoked salsa, full veggie spread), and 10 sauce pairings
- **7 How-To Guides** -- Smoker setup, mods & baffle layout, maintaining temperature, wrapping brisket, grilling details, and the CC1830S control panel reference
- **Shopping List Builder** -- Select one or more recipes (or smoker mods), get a combined ingredient checklist grouped by category. Checked items persist in localStorage

## Features

- Light/dark theme toggle (light by default, persisted in localStorage)
- Markdown content rendered with styled tables, Do's/Don'ts callout cards, and external link handling
- Category filtering and text search on recipes
- "Add to Shopping List" button on each recipe detail page
- Mobile-responsive with large tap targets for use next to the smoker

## Tech Stack

| Tool | Purpose |
|------|---------|
| Vite | Build tool |
| React 19 | UI framework |
| TypeScript | Type safety |
| React Router 7 | Client-side routing |
| react-markdown + remark-gfm + rehype-raw | Markdown rendering |
| Tailwind CSS 4 | Styling |

## Project Structure

```
smokerLab/
  howto/          # Markdown how-to guides (source of truth)
  recipes/        # Markdown recipes + 1 txt transcript (source of truth)
  app/            # React app
    src/
      content/
        manifest.ts   # Curated metadata + ingredients for all files
        loader.ts     # Build-time markdown loading via import.meta.glob
      components/     # RecipeCard, HowToCard, MarkdownRenderer, Shopping*, CategoryFilter
      pages/          # Home, Recipes, RecipeDetail, HowTos, HowToDetail, ShoppingList
      hooks/          # useShoppingList (localStorage), useTheme (light/dark)
      types.ts        # Shared TypeScript types
```

The markdown files in `howto/` and `recipes/` are the source of truth -- they remain untouched. The `manifest.ts` provides structured metadata (titles, categories, ingredients) as a parallel data layer.

## Build

```bash
npm run build    # Output to dist/
npm run preview  # Preview production build
```

Deploys as a fully static site (no server required).
