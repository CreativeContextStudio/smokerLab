import { Link } from 'react-router-dom';
import MissyEmptyState from '../components/MissyEmptyState';

export default function NotFoundPage() {
  return (
    <MissyEmptyState
      variant="notfound"
      message="Missy can't find that page."
      submessage="It may have gone up in smoke."
    >
      <Link
        to="/"
        className="inline-block mt-4 text-sm text-ember-400 hover:text-ember-300 transition-colors"
      >
        &larr; Back to home
      </Link>
    </MissyEmptyState>
  );
}
