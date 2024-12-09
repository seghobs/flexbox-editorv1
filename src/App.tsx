import React from 'react';
import { Header } from './components/Header';
import { FlexDemo } from './components/FlexDemo';
import { FlexProperties } from './components/FlexProperties';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-12">
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Interactive Flexbox Demo
              </h2>
              <p className="text-gray-600">
                Experiment with different Flexbox properties and see the results in real-time.
                Adjust the controls below to modify the layout.
              </p>
            </div>
            <FlexDemo />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Flexbox Properties Reference
              </h2>
              <p className="text-gray-600">
                A comprehensive guide to all Flexbox properties and their possible values.
              </p>
            </div>
            <FlexProperties />
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Flexbox Playground</h3>
              <p className="text-gray-300">
                An interactive tool designed to help developers learn and experiment with CSS Flexbox layouts.
                Built with React and Tailwind CSS.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout" 
                     className="hover:text-purple-300 transition-colors"
                     target="_blank" 
                     rel="noopener noreferrer">
                    MDN Flexbox Guide
                  </a>
                </li>
                <li>
                  <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" 
                     className="hover:text-purple-300 transition-colors"
                     target="_blank" 
                     rel="noopener noreferrer">
                    CSS-Tricks Flexbox Guide
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;