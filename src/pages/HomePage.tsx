import { Link } from 'react-router-dom';
import { getAllRecipes, getAllHowTos } from '../content/loader';
import RecipeCard from '../components/RecipeCard';


const allRecipes = getAllRecipes();
const allHowTos = getAllHowTos();

// Featured recipes
const featuredSlugs = ['brisketSliced', 'porkbuttPulled', 'porkRibsBabyback', 'bacon', 'salmon', 'chxSpatch'];
const featured = featuredSlugs
  .map((slug) => allRecipes.find((r) => r.slug === slug))
  .filter(Boolean) as typeof allRecipes;

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="text-center py-12 md:py-16">
        <div className="mb-4">
          <svg width="48" height="48" viewBox="0 0 64 64" className="inline-block">
            <defs>
              <linearGradient id="hero-ember" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#c2452d"/>
                <stop offset="50%" stopColor="#d4833c"/>
                <stop offset="100%" stopColor="#f5c542"/>
              </linearGradient>
            </defs>
            <path d="M32 4c0 0-16 14-16 32s10 24 16 24 16-6 16-24S32 4 32 4z" fill="url(#hero-ember)" opacity="0.9"/>
            <path d="M32 20c0 0-8 8-8 18s5 14 8 14 8-3 8-14-8-18-8-18z" fill="#151211" opacity="0.6"/>
            <path d="M32 32c0 0-4 5-4 10s2 8 4 8 4-3 4-8-4-10-4-10z" fill="#f5c542" opacity="0.8"/>
          </svg>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-smoke-50 mb-2">
          smokerLab
        </h1>
        <p className="text-smoke-300 text-sm md:text-base max-w-md mx-auto mb-8">
          Recipes, guides, and shopping lists for the Royal Gourmet CC1830S offset smoker.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            to="/recipes"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ember-600 hover:bg-ember-500 text-smoke-950 rounded-lg font-semibold text-sm transition-colors shadow-[0_0_20px_rgba(212,131,60,0.15)]"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1a.5.5 0 0 1 .5.5V6h4a.5.5 0 0 1 .354.854l-5 5A.5.5 0 0 1 7 11.5V7H3a.5.5 0 0 1-.354-.854l5-5A.5.5 0 0 1 8 1z"/>
            </svg>
            {allRecipes.length} Recipes
          </Link>
          <Link
            to="/howto"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-smoke-700 hover:bg-smoke-600 text-smoke-100 rounded-lg font-semibold text-sm transition-colors border border-smoke-600"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
            </svg>
            {allHowTos.length} Guides
          </Link>
          <Link
            to="/shopping"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-smoke-700 hover:bg-smoke-600 text-smoke-100 rounded-lg font-semibold text-sm transition-colors border border-smoke-600"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>
            Shopping List
          </Link>
        </div>
      </div>

      {/* Featured recipes */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-semibold text-smoke-50">Featured Recipes</h2>
          <Link to="/recipes" className="text-xs text-ember-400 hover:text-ember-300 transition-colors">
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((recipe) => (
            <RecipeCard key={recipe.slug} recipe={recipe} />
          ))}
        </div>
      </section>

      {/* Quick links to guides */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-display text-lg font-semibold text-smoke-50">Getting Started</h2>
          <Link to="/howto" className="text-xs text-ember-400 hover:text-ember-300 transition-colors">
            All guides &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {allHowTos.slice(0, 4).map((h) => (
            <Link
              key={h.slug}
              to={`/howto/${h.slug}`}
              className="flex items-center gap-3 bg-smoke-800 border border-smoke-700 rounded-lg px-4 py-3 hover:border-ember-600 hover:bg-smoke-700/50 transition-all group"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-ember-500 shrink-0">
                <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
              </svg>
              <div>
                <span className="text-sm font-medium text-smoke-100 group-hover:text-ember-400 transition-colors">
                  {h.title}
                </span>
                <p className="text-xs text-smoke-400 mt-0.5">{h.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
