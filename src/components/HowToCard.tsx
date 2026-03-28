import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import type { HowToMeta } from '../types';

// Icon paths by semantic pattern — matches slug substrings
const CART_ICON = (
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
);
const FLAME_ICON = (
  <path d="M8 16c3.314 0 6-2.686 6-6 0-2.91-1.897-5.17-4.137-6.674-.478-.322-1.032.16-.898.716C9.27 5.435 8.655 6 8 6c-1.105 0-2-.672-2-1.5 0-.305.082-.588.222-.836.162-.287-.02-.65-.348-.601C3.648 3.408 2 5.486 2 8c0 3.314 2.686 6 6 6z"/>
);
const WRENCH_ICON = (
  <path d="M.102 2.223A3.004 3.004 0 0 0 3.78 5.897l6.341 6.252A3.003 3.003 0 0 0 13 16a3 3 0 1 0-.851-5.878L5.897 3.781A3.004 3.004 0 0 0 2.223.1l2.141 2.142L4 4l-1.757.364L.102 2.223zm13.37 9.019l.528.026.287.445.445.287.026.529L15 13l-.242.471-.026.529-.445.287-.287.445-.529.026L13 15l-.471-.242-.529-.026-.287-.445-.445-.287-.026-.529L11 13l.242-.471.026-.529.445-.287.287-.445.529-.026L13 11l.471.242z"/>
);
const THERMO_ICON = (
  <>
    <path d="M9.5 12.5a1.5 1.5 0 1 1-2-1.415V6.5a.5.5 0 0 1 1 0v4.585a1.5 1.5 0 0 1 1 1.415z"/>
    <path d="M5.5 2.5a2.5 2.5 0 0 1 5 0v7.55a3.5 3.5 0 1 1-5 0V2.5zM8 1a1.5 1.5 0 0 0-1.5 1.5v7.987l-.167.15a2.5 2.5 0 1 0 3.333 0l-.166-.15V2.5A1.5 1.5 0 0 0 8 1z"/>
  </>
);
const PACKAGE_ICON = (
  <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
);
const GEAR_ICON = (
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
);
const SLIDERS_ICON = (
  <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
);
// Leaf/tree — wood guide
const WOOD_ICON = (
  <path d="M8 1a.5.5 0 0 1 .416.223l5.5 8.25A.5.5 0 0 1 13.5 10H9v5.5a.5.5 0 0 1-1 0V10H2.5a.5.5 0 0 1-.416-.777l5.5-8A.5.5 0 0 1 8 1z"/>
);

function getIconForSlug(slug: string): ReactNode {
  // Exact matches for original howtos
  const exactMap: Record<string, ReactNode> = {
    smokerMods: WRENCH_ICON,
    maintainTemp: THERMO_ICON,
    wrappingBrisket: PACKAGE_ICON,
    grillingDetails: GEAR_ICON,
    controlPanel: SLIDERS_ICON,
  };
  if (exactMap[slug]) return exactMap[slug];

  // Pattern matching for all equipment howtos
  const lower = slug.toLowerCase();
  if (lower.includes('shopping') || lower.includes('supply')) return CART_ICON;
  if (lower.includes('setup') || lower.includes('first')) return FLAME_ICON;
  if (lower.includes('mod')) return WRENCH_ICON;
  if (lower.includes('temp') || lower.includes('therm')) return THERMO_ICON;
  if (lower.includes('wood') || lower.includes('fuel')) return WOOD_ICON;
  if (lower.includes('wrap')) return PACKAGE_ICON;
  if (lower.includes('detail') || lower.includes('anatomy') || lower.includes('control')) return GEAR_ICON;
  return null;
}

// Fallback for any future guides
const BOOK_ICON = (
  <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
);

export default function HowToCard({ howto }: { howto: HowToMeta }) {
  return (
    <Link
      to={`/howto/${howto.slug}`}
      className="group block bg-smoke-800 border border-smoke-700 rounded-lg p-4 hover:border-ember-600 hover:bg-smoke-700/50 transition-all duration-200 hover:shadow-[0_0_20px_rgba(212,131,60,0.08)]"
    >
      <div className="flex items-start gap-2 mb-2">
        <span className="text-lg shrink-0 mt-0.5">
          <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor" className="text-ember-500">
            {getIconForSlug(howto.slug) ?? BOOK_ICON}
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
