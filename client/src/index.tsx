import React, { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';
import './index.css';

import App from './App';

const root: Root = createRoot(document.getElementById('root')!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
