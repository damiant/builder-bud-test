import { defineConfig } from '@builder.io/dev-tools';

export default defineConfig({
  designTokens: {
    colors: [
      { name: 'Brand Red', value: 'var(--brand-red)' },
      { name: 'Brand White', value: 'var(--brand-white)' },
      { name: 'Brand Blue', value: 'var(--brand-blue)' },
      { name: 'Pastel Primary', value: 'var(--pastel-primary)' },
      { name: 'Pastel Secondary', value: 'var(--pastel-secondary)' },
      { name: 'Pastel Accent', value: 'var(--pastel-accent)' },
      { name: 'Pastel Success', value: 'var(--pastel-success)' },
      { name: 'Pastel Warning', value: 'var(--pastel-warning)' },
      { name: 'Pastel BG', value: 'var(--pastel-bg)' },
      { name: 'Pastel Text', value: 'var(--pastel-text)' },
      { name: 'Pastel Text Secondary', value: 'var(--pastel-text-secondary)' },
    ],
    fontFamily: [
      { name: 'Script', value: 'var(--font-script)' },
      { name: 'Brand', value: 'var(--font-brand)' },
    ],
  },
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
