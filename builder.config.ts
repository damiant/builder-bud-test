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
    {
      name: 'WhatsNew',
      path: './src/components/WhatsNew.tsx',
    },
    {
      name: 'OurBeers',
      path: './src/components/OurBeers.tsx',
    },
    {
      name: 'FindABud',
      path: './src/components/FindABud.tsx',
    },
    {
      name: 'OurBeersTop',
      path: './src/components/OurBeersTop.tsx',
    },
    {
      name: 'OurBeer',
      path: './src/components/OurBeer.tsx',
    },
    {
      name: 'Footer',
      path: './src/components/Footer.tsx',
    },
    {
      name: 'ClydesdalesHero',
      path: './src/components/ClydesdalesHero.tsx',
    },
  ],
});
