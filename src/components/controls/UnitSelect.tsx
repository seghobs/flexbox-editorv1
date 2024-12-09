import React from 'react';
import { SizeUnit } from '../../types/flex';

interface UnitSelectProps {
  value: SizeUnit;
  onChange: (unit: SizeUnit) => void;
}

export function UnitSelect({ value, onChange }: UnitSelectProps) {
  const units: SizeUnit[] = ['px', '%', 'em', 'rem', 'vw', 'vh'];
  
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as SizeUnit)}
      className="ml-2 p-1 border rounded bg-white text-sm"
    >
      {units.map(unit => (
        <option key={unit} value={unit}>{unit}</option>
      ))}
    </select>
  );
}