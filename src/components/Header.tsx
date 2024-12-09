import React from 'react';
import { Layout, Github } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-purple-500 to-blue-600 text-white py-6 px-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Layout className="w-8 h-8" />
          <div>
            <h1 className="text-3xl font-bold">Flexbox Oyun Alanı</h1>
            <p className="text-purple-100">İnteraktif CSS Flexbox Öğrenme Aracı</p>
          </div>
        </div>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>GitHub'da Görüntüle</span>
        </a>
      </div>
    </header>
  );
}