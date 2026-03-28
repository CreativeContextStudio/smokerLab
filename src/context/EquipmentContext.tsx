import { createContext, useContext, type ReactNode } from 'react';
import { useEquipment } from '../hooks/useEquipment';
import type { EquipmentType, EquipmentProfile } from '../types';

interface EquipmentContextValue {
  equipmentId: EquipmentType;
  equipment: EquipmentProfile;
  allEquipment: EquipmentProfile[];
  setEquipment: (id: EquipmentType) => void;
}

const EquipmentCtx = createContext<EquipmentContextValue | null>(null);

export function EquipmentProvider({ children }: { children: ReactNode }) {
  const value = useEquipment();
  return <EquipmentCtx.Provider value={value}>{children}</EquipmentCtx.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useEquipmentContext(): EquipmentContextValue {
  const ctx = useContext(EquipmentCtx);
  if (!ctx) throw new Error('useEquipmentContext must be used within EquipmentProvider');
  return ctx;
}
