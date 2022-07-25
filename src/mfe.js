import React from 'react';
import { createRoot } from 'react-dom';
import Register from 'toset/Register';

const root = document.createElement('div');

document.body.appendChild(root);

createRoot(root).render(<Register />);