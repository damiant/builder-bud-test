import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Builder } from '@builder.io/react';
import './index.css';
import App from './App.tsx';
import { editorSettings } from '../builder.config.ts';

Builder.register('editor.settings', editorSettings);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
