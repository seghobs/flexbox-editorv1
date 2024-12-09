import React from 'react';
import { Info } from 'lucide-react';

export function FlexProperties() {
  const properties = [
    {
      title: 'Flex Direction',
      description: 'Defines the direction of flex items in the container',
      values: ['row', 'row-reverse', 'column', 'column-reverse'],
      example: 'flex-direction: row;',
    },
    {
      title: 'Justify Content',
      description: 'Aligns items along the main axis',
      values: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
      example: 'justify-content: center;',
    },
    {
      title: 'Align Items',
      description: 'Aligns items along the cross axis',
      values: ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'],
      example: 'align-items: center;',
    },
    {
      title: 'Flex Wrap',
      description: 'Controls whether items wrap to new lines',
      values: ['nowrap', 'wrap', 'wrap-reverse'],
      example: 'flex-wrap: wrap;',
    },
    {
      title: 'Gap',
      description: 'Sets the spacing between flex items',
      values: ['Any length unit (px, rem, em)'],
      example: 'gap: 1rem;',
    },
    {
      title: 'Flex Grow',
      description: 'Determines how much an item can grow',
      values: ['0', '1', '2', '...'],
      example: 'flex-grow: 1;',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.map((prop) => (
        <div key={prop.title} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-purple-600 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-purple-600 mb-2">{prop.title}</h3>
              <p className="text-gray-600 mb-4">{prop.description}</p>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {prop.values.map((value) => (
                    <span
                      key={value}
                      className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                    >
                      {value}
                    </span>
                  ))}
                </div>
                <code className="block bg-gray-50 p-2 rounded text-sm text-gray-800">
                  {prop.example}
                </code>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}