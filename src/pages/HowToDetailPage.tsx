import { useParams, Link } from 'react-router-dom';
import { getHowToContent, getHowToMeta } from '../content/loader';
import MarkdownRenderer from '../components/MarkdownRenderer';
import MissyEmptyState from '../components/MissyEmptyState';

export default function HowToDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const meta = slug ? getHowToMeta(slug) : undefined;
  const content = slug ? getHowToContent(slug) : undefined;

  if (!meta) {
    return (
      <MissyEmptyState
        message="Guide not found."
        submessage="It may have gone up in smoke."
      >
        <Link to="/howto" className="inline-block mt-4 text-sm text-ember-400 hover:text-ember-300 transition-colors">
          &larr; Back to guides
        </Link>
      </MissyEmptyState>
    );
  }

  return (
    <div>
      <Link
        to="/howto"
        className="inline-flex items-center gap-1 text-sm text-smoke-400 hover:text-ember-400 transition-colors mb-4"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        All Guides
      </Link>

      <h1 className="font-display text-2xl md:text-3xl font-bold text-smoke-50 mb-2">
        {meta.title}
      </h1>
      <p className="text-smoke-300 text-sm mb-6">{meta.description}</p>

      <div className="border-t border-smoke-700 pt-6">
        {content ? (
          <MarkdownRenderer content={content} />
        ) : (
          <p className="text-smoke-400 text-sm">Content file not found for this guide.</p>
        )}
      </div>
    </div>
  );
}
