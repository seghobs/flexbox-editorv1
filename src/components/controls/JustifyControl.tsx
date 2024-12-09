import React from 'react';
import { SelectControl } from './SelectControl';

interface JustifyControlProps {
  value: string;
  onChange: (value: string) => void;
}

export function JustifyControl({ value, onChange }: JustifyControlProps) {
  const justifyOptions = [
    { value: 'flex-start', label: 'Start' },
    { value: 'flex-end', label: 'End' },
    { value: 'center', label: 'Center' },
    { value: 'space-between', label: 'Space Between' },
    { value: 'space-around', label: 'Space Around' },
    { value: 'space-evenly', label: 'Space Evenly' },
  ];

  return (
    <SelectControl
      label="Justify Content"
      value={value}
      onChange={onChange}
      options={justifyOptions}
      description="Aligns items along the main axis"
    />
  );
}