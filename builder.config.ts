import { defineConfig } from '@builder.io/dev-tools';
import { editorSettings } from './src/builder-settings';

export default defineConfig({
  designTokens: editorSettings.designTokens,
  components: [
    {
      name: 'Header',
      path: './src/components/Header.tsx',
    },
    {
      name: 'Hero',
      path: './src/components/Hero.tsx',
    },
  ],
});
