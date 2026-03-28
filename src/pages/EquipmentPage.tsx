import { useEquipmentContext } from '../context/EquipmentContext';
import EquipmentIcon from '../components/EquipmentIcon';

export default function EquipmentPage() {
  const { equipment: active, allEquipment, setEquipment } = useEquipmentContext();

  return (
    <div>
      <h1 className="font-display text-2xl font-bold text-smoke-50 mb-1">Equipment</h1>
      <p className="text-smoke-400 text-sm mb-6">
        Select your grill or smoker to get tuned recipes, guides, and shopping lists.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {allEquipment.map((eq) => {
          const isActive = eq.id === active.id;
          return (
            <button
              key={eq.id}
              onClick={() => setEquipment(eq.id)}
              className={`text-left bg-smoke-800 border rounded-lg p-5 transition-all duration-200 ${
                isActive
                  ? 'border-ember-500 shadow-[0_0_20px_rgba(212,131,60,0.12)]'
                  : 'border-smoke-700 hover:border-smoke-500 hover:bg-smoke-700/50'
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-md ${isActive ? 'bg-ember-600/20 text-ember-400' : 'bg-smoke-700 text-smoke-300'}`}>
                  <EquipmentIcon equipmentId={eq.id} size={24} />
                </div>
                <div>
                  <h2 className={`font-display font-semibold leading-tight ${isActive ? 'text-ember-400' : 'text-smoke-50'}`}>
                    {eq.name}
                  </h2>
                  <p className="text-xs text-smoke-400">{eq.model}</p>
                </div>
                {isActive && (
                  <span className="ml-auto text-xs font-medium text-ember-400 bg-ember-600/15 px-2 py-0.5 rounded">
                    Active
                  </span>
                )}
              </div>
              <p className="text-sm text-smoke-300 leading-relaxed">
                {eq.description}
              </p>
              <div className="flex items-center gap-3 mt-3 text-xs text-smoke-400">
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-smoke-500" />
                  {eq.fuelType}
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-smoke-500" />
                  {eq.defaultCookMethod}
                </span>
                {eq.supportsSmoke && (
                  <span className="inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-ember-500" />
                    smoke-capable
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
