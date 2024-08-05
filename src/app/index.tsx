import { createRoot } from 'react-dom/client';
import React from 'react';

// Effacez le contenu HTML existant
document.body.innerHTML = '<div id="app"></div>';

// Find the root element
const appElement = document.getElementById('app');

if (appElement) {
  // Affichez plutôt votre composant React
  const root = createRoot(appElement);
  root.render(<h1>Bonjour tout le monde</h1>);
} else {
  console.error('No element with id "app" found in the document.');
}

