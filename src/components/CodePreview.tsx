import React from 'react';
import { Code } from 'lucide-react';

interface CodePreviewProps {
  css: string;
}

export function CodePreview({ css }: CodePreviewProps) {
  return (
    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Code className="w-5 h-5 text-purple-600" />
        <h3 className="text-lg font-semibold">Generated CSS</h3>
      </div>
      <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto font-mono text-sm">
        {css}
      </pre>
    </div>
  );
}