import React from 'react';
import { SelectControl } from './SelectControl';

interface WrapControlProps {
  value: string;
  onChange: (value: string) => void;
}

export function WrapControl({ value, onChange }: WrapControlProps) {
  const wrapOptions = [
    { value: 'nowrap', label: 'No Wrap' },
    { value: 'wrap', label: 'Wrap' },
    { value: 'wrap-reverse', label: 'Wrap Reverse' },
  ];

  return (
    <SelectControl
      label="Flex Wrap"
      value={value}
      onChange={onChange}
      options={wrapOptions}
      description="Controls whether items wrap to new lines"
    />
  );
}