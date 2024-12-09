import React from 'react';
import { BoxSize, BoxContent } from '../types/flex';
import * as Icons from 'lucide-react';

interface FlexBoxProps {
  number: number;
  width: BoxSize;
  height: BoxSize;
  content: BoxContent;
}

export function FlexBox({ number, width, height, content }: FlexBoxProps) {
  const getSizeValue = (size: BoxSize) => {
    switch (size.unit) {
      case 'em':
      case 'rem':
        return `${size.value / 16}${size.unit}`;
      default:
        return `${size.value}${size.unit}`;
    }
  };

  const renderContent = () => {
    switch (content.type) {
      case 'image':
        return <img src={content.content} alt={`Kutu ${number}`} className="max-w-full max-h-full object-contain" />;
      case 'icon': {
        const IconComponent = (Icons as any)[content.content];
        return IconComponent ? <IconComponent className="w-8 h-8" /> : number;
      }
      case 'text':
      default:
        return content.content || number;
    }
  };

  return (
    <div
      style={{
        width: getSizeValue(width),
        height: getSizeValue(height),
        minWidth: width.unit === '%' ? `${width.value}%` : undefined,
        minHeight: height.unit === '%' ? `${height.value}%` : undefined,
      }}
      className={`
        m-2 rounded-lg flex items-center justify-center
        font-bold text-white text-xl transition-all duration-300
        ${number % 2 === 0 ? 'bg-purple-500' : 'bg-blue-500'}
        hover:scale-105 cursor-pointer shadow-md
        hover:shadow-lg hover:rotate-3
      `}
    >
      {renderContent()}
    </div>
  );
}