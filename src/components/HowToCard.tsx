import { Link } from 'react-router-dom';
import type { HowToMeta } from '../types';

export default function HowToCard({ howto }: { howto: HowToMeta }) {
  return (
    <Link
      to={`/howto/${howto.slug}`}
      className="group block bg-smoke-800 border border-smoke-700 rounded-lg p-4 hover:border-ember-600 hover:bg-smoke-700/50 transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,131,60,0.08)]"
    >
      <div className="flex items-start gap-2 mb-2">
        <span className="text-lg shrink-0 mt-0.5">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="text-ember-500">
            <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
          </svg>
        </span>
        <div>
          <h3 className="font-display font-semibold text-smoke-50 group-hover:text-ember-400 transition-colors leading-snug">
            {howto.title}
          </h3>
          <p className="text-sm text-smoke-300 leading-relaxed mt-1">
            {howto.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
