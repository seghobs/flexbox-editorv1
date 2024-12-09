import React from 'react';
import { SelectControl } from './SelectControl';

interface DirectionControlProps {
  value: string;
  onChange: (value: string) => void;
}

export function DirectionControl({ value, onChange }: DirectionControlProps) {
  const directions = [
    { value: 'row', label: 'Row (→)' },
    { value: 'row-reverse', label: 'Row Reverse (←)' },
    { value: 'column', label: 'Column (↓)' },
    { value: 'column-reverse', label: 'Column Reverse (↑)' },
  ];

  return (
    <SelectControl
      label="Flex Direction"
      value={value}
      onChange={onChange}
      options={directions}
      description="Defines the main axis direction of flex items"
    />
  );
}