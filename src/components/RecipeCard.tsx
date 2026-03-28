import { Link } from 'react-router-dom';
import type { RecipeMeta } from '../types';
import { CATEGORY_LABELS, CATEGORY_ICONS } from '../types';

export default function RecipeCard({ recipe }: { recipe: RecipeMeta }) {
  return (
    <Link
      to={`/recipes/${recipe.slug}`}
      className="group block bg-smoke-800 border border-smoke-700 rounded-lg p-4 hover:border-ember-600 hover:bg-smoke-700/50 transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,131,60,0.08)]"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-display font-semibold text-smoke-50 group-hover:text-ember-400 transition-colors leading-snug">
          {recipe.title}
        </h3>
        <span className="text-lg shrink-0" title={CATEGORY_LABELS[recipe.category]}>
          {CATEGORY_ICONS[recipe.category]}
        </span>
      </div>
      <p className="text-sm text-smoke-300 leading-relaxed mb-3 line-clamp-2">
        {recipe.description}
      </p>
      <div className="flex items-center gap-3 text-xs text-smoke-400">
        <span className="inline-flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="text-ember-500">
            <path d="M8 1a.5.5 0 0 1 .5.5V6h4a.5.5 0 0 1 .354.854l-5 5A.5.5 0 0 1 7 11.5V7H3a.5.5 0 0 1-.354-.854l5-5A.5.5 0 0 1 8 1z"/>
          </svg>
          {recipe.cookTemp}
        </span>
        <span className="inline-flex items-center gap-1">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor" className="text-ember-500">
            <path d="M8 3.5a.5.5 0 0 0-1 0V8a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 7.71V3.5z"/>
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
          </svg>
          {recipe.cookTime}
        </span>
      </div>
      <div className="mt-2">
        <span className="inline-block text-[10px] uppercase tracking-wider font-medium text-smoke-400 bg-smoke-700 px-2 py-0.5 rounded">
          {CATEGORY_LABELS[recipe.category]}
        </span>
      </div>
    </Link>
  );
}
