import { useState } from 'react';
import { Link, Outlet, useLocation, useNavigation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { useEquipmentContext } from './context/EquipmentContext';
import EquipmentSelector from './components/EquipmentSelector';
import MissyLoader from './components/MissyLoader';

const NAV_ITEMS = [
  { path: '/', label: 'Home' },
  { path: '/recipes', label: 'Recipes' },
  { path: '/howto', label: 'How-To' },
  { path: '/shopping', label: 'Shopping List' },
  { path: '/equipment', label: 'Equipment' },
];

function ThemeToggle({ theme, onToggle, size = 16 }: { theme: string; onToggle: () => void; size?: number }) {
  return (
    <button
      onClick={onToggle}
      className="p-1.5 rounded-md text-smoke-400 hover:text-smoke-100 hover:bg-smoke-800 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
        </svg>
      ) : (
        <svg width={size} height={size} viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
      )}
    </button>
  );
}

export default function App() {
  const location = useLocation();
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();
  const { equipment: activeEquipment } = useEquipmentContext();

  function isActive(path: string) {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  }

  return (
    <div className="min-h-screen bg-smoke-900">
      <header className="sticky top-0 z-50 bg-smoke-950/95 backdrop-blur-sm border-b border-smoke-700">
        <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setMenuOpen(false)}>
            <svg width="22" height="22" viewBox="0 0 64 64" className="inline-block">
              <defs>
                <linearGradient id="nav-ember" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0%" stopColor="#c2452d"/>
                  <stop offset="50%" stopColor="#d4833c"/>
                  <stop offset="100%" stopColor="#f5c542"/>
                </linearGradient>
              </defs>
              <path d="M32 4c0 0-16 14-16 32s10 24 16 24 16-6 16-24S32 4 32 4z" fill="url(#nav-ember)" opacity="0.9"/>
              <path d="M32 32c0 0-4 5-4 10s2 8 4 8 4-3 4-8-4-10-4-10z" fill="#f5c542" opacity="0.8"/>
            </svg>
            <span className="font-display text-lg font-bold text-smoke-50 tracking-tight group-hover:text-ember-400 transition-colors">
              smokerLab
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-smoke-700 text-ember-400'
                    : 'text-smoke-300 hover:text-smoke-100 hover:bg-smoke-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <span className="ml-2 flex items-center gap-1">
              <EquipmentSelector />
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </span>
          </nav>

          {/* Mobile: equipment selector + theme toggle + hamburger */}
          <div className="flex items-center gap-1 md:hidden">
            <EquipmentSelector />
            <ThemeToggle theme={theme} onToggle={toggleTheme} size={18} />
            <button
              className="p-2 text-smoke-300 hover:text-smoke-100"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                {menuOpen ? (
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                ) : (
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {menuOpen && (
          <nav className="md:hidden border-t border-smoke-700 bg-smoke-950/98 pb-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-6 py-3 text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'text-ember-400 bg-smoke-800'
                    : 'text-smoke-300 hover:text-smoke-100 hover:bg-smoke-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      {navigation.state === 'loading' && (
        <div className="fixed bottom-6 right-6 z-50">
          <MissyLoader size={40} />
        </div>
      )}

      <footer className="border-t border-smoke-800 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-smoke-500 text-xs">
          smokerLab &middot; {activeEquipment.model}
        </div>
      </footer>
    </div>
  );
}
