import React from 'react';
import { createRoot } from 'react-dom/client';
import TosetApp from './TosetApp.jsx';

const root = document.createElement('div');

document.body.appendChild(root);

createRoot(root).render(<TosetApp />);