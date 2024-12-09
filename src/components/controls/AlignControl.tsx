import React from 'react';
import { SelectControl } from './SelectControl';

interface AlignControlProps {
  value: string;
  onChange: (value: string) => void;
}

export function AlignControl({ value, onChange }: AlignControlProps) {
  const alignOptions = [
    { value: 'stretch', label: 'Stretch' },
    { value: 'flex-start', label: 'Start' },
    { value: 'flex-end', label: 'End' },
    { value: 'center', label: 'Center' },
    { value: 'baseline', label: 'Baseline' },
  ];

  return (
    <SelectControl
      label="Align Items"
      value={value}
      onChange={onChange}
      options={alignOptions}
      description="Aligns items along the cross axis"
    />
  );
}