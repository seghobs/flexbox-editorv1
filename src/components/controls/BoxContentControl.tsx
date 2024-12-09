import React from 'react';
import { BoxContent } from '../../types/flex';

interface BoxContentControlProps {
  content: BoxContent;
  onChange: (content: BoxContent) => void;
}

export function BoxContentControl({ content, onChange }: BoxContentControlProps) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Kutu İçerik Tipi
        </label>
        <select
          value={content.type}
          onChange={(e) => onChange({ ...content, type: e.target.value as BoxContent['type'] })}
          className="w-full p-2 border rounded-md"
        >
          <option value="text">Metin</option>
          <option value="image">Resim URL</option>
          <option value="icon">İkon</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          İçerik
        </label>
        <input
          type="text"
          value={content.content}
          onChange={(e) => onChange({ ...content, content: e.target.value })}
          placeholder={
            content.type === 'image' ? 'Resim URL giriniz' :
            content.type === 'icon' ? 'İkon ismi giriniz' :
            'Metin içeriği giriniz'
          }
          className="w-full p-2 border rounded-md"
        />
      </div>
    </div>
  );
}