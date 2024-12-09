import React from 'react';
import { BoxSize, SizeUnit } from '../../types/flex';
import { UnitSelect } from './UnitSelect';

interface BoxSizeControlProps {
  width: BoxSize;
  height: BoxSize;
  onWidthChange: (size: BoxSize) => void;
  onHeightChange: (size: BoxSize) => void;
}

export function BoxSizeControl({ width, height, onWidthChange, onHeightChange }: BoxSizeControlProps) {
  const getMinMax = (unit: SizeUnit) => {
    switch (unit) {
      case '%':
      case 'vw':
      case 'vh':
        return { min: 1, max: 100 };
      case 'em':
      case 'rem':
        return { min: 1, max: 30 };
      default:
        return { min: 50, max: 500 };
    }
  };

  const handleWidthUnitChange = (unit: SizeUnit) => {
    const { min, max } = getMinMax(unit);
    const newValue = Math.min(Math.max(width.value, min), max);
    onWidthChange({ value: newValue, unit });
  };

  const handleHeightUnitChange = (unit: SizeUnit) => {
    const { min, max } = getMinMax(unit);
    const newValue = Math.min(Math.max(height.value, min), max);
    onHeightChange({ value: newValue, unit });
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Kutu Genişliği: {width.value}{width.unit}
        </label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={getMinMax(width.unit).min}
            max={getMinMax(width.unit).max}
            value={width.value}
            onChange={(e) => onWidthChange({ ...width, value: Number(e.target.value) })}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <UnitSelect value={width.unit} onChange={handleWidthUnitChange} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Kutu Yüksekliği: {height.value}{height.unit}
        </label>
        <div className="flex items-center gap-2">
          <input
            type="range"
            min={getMinMax(height.unit).min}
            max={getMinMax(height.unit).max}
            value={height.value}
            onChange={(e) => onHeightChange({ ...height, value: Number(e.target.value) })}
            className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <UnitSelect value={height.unit} onChange={handleHeightUnitChange} />
        </div>
      </div>
    </div>
  );
}