import { useState, useEffect, useCallback } from 'react';
import type { EquipmentType } from '../types';
import { equipment, DEFAULT_EQUIPMENT_ID } from '../content/equipment';

const STORAGE_KEY = 'smokerlab-equipment';

function getInitialEquipment(): EquipmentType {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && equipment.some((e) => e.id === stored)) {
      return stored as EquipmentType;
    }
  } catch { /* ignore */ }
  return DEFAULT_EQUIPMENT_ID;
}

export function useEquipment() {
  const [equipmentId, setEquipmentId] = useState<EquipmentType>(getInitialEquipment);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, equipmentId);
  }, [equipmentId]);

  const setEquipment = useCallback((id: EquipmentType) => {
    setEquipmentId(id);
  }, []);

  const profile = equipment.find((e) => e.id === equipmentId)!;

  return {
    equipmentId,
    equipment: profile,
    allEquipment: equipment,
    setEquipment,
  };
}
