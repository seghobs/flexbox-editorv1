import React from 'react';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectControlProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  description: string;
}

export function SelectControl({ label, value, onChange, options, description }: SelectControlProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-2 border rounded-md bg-white shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}