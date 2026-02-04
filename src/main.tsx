import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Builder } from '@builder.io/react';
import './index.css';
import App from './App.tsx';
import { editorSettings } from './builder-settings.ts';
import './builder-registry';

Builder.register('editor.settings', editorSettings);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
