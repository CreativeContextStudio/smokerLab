import { useParams, Link } from 'react-router-dom';
import { getRecipeContent, getRecipeMeta } from '../content/loader';
import { CATEGORY_LABELS, CATEGORY_ICONS } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';
import MissyEmptyState from '../components/MissyEmptyState';

export default function RecipeDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const meta = slug ? getRecipeMeta(slug) : undefined;
  const content = slug ? getRecipeContent(slug) : undefined;

  if (!meta) {
    return (
      <MissyEmptyState
        variant="notfound"
        message="Missy can't find that recipe."
        submessage="It may have gone up in smoke."
      >
        <Link to="/recipes" className="inline-block mt-4 text-sm text-ember-400 hover:text-ember-300 transition-colors">
          &larr; Back to recipes
        </Link>
      </MissyEmptyState>
    );
  }

  return (
    <div>
      <Link
        to="/recipes"
        className="inline-flex items-center gap-1 text-sm text-smoke-400 hover:text-ember-400 transition-colors mb-4"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        All Recipes
      </Link>

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">{CATEGORY_ICONS[meta.category]}</span>
          <span className="text-[10px] uppercase tracking-wider font-medium text-smoke-400 bg-smoke-700 px-2 py-0.5 rounded">
            {CATEGORY_LABELS[meta.category]}
          </span>
        </div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-smoke-50 mb-2">
          {meta.title}
        </h1>
        <p className="text-smoke-300 text-sm mb-3">{meta.description}</p>
        <div className="flex items-center gap-4 text-sm text-smoke-400">
          <span className="inline-flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="text-ember-500">
              <path d="M8 1a.5.5 0 0 1 .5.5V6h4a.5.5 0 0 1 .354.854l-5 5A.5.5 0 0 1 7 11.5V7H3a.5.5 0 0 1-.354-.854l5-5A.5.5 0 0 1 8 1z"/>
            </svg>
            {meta.cookTemp}
          </span>
          <span className="inline-flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="text-ember-500">
              <path d="M8 3.5a.5.5 0 0 0-1 0V8a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 7.71V3.5z"/>
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
            </svg>
            {meta.cookTime}
          </span>
        </div>
        {meta.ingredients.length > 0 && (
          <Link
            to={`/shopping?add=${meta.slug}`}
            className="inline-flex items-center gap-1.5 mt-4 px-3 py-1.5 bg-ember-600 hover:bg-ember-500 text-smoke-950 rounded-md text-sm font-medium transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>
            Add to Shopping List
          </Link>
        )}
      </div>

      <div className="border-t border-smoke-700 pt-6">
        {content ? (
          <MarkdownRenderer content={content} />
        ) : (
          <p className="text-smoke-400 text-sm">Content file not found for this recipe.</p>
        )}
      </div>
    </div>
  );
}
