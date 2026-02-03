# Framework Specific Setup

## Next.js

Wrap your `next.config.js` or `next.config.mjs` with `withBuilderDevTools`:

```javascript
const { withBuilderDevTools } = require('@builder.io/dev-tools/next');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // your config
};

module.exports = withBuilderDevTools(nextConfig);
```

## Vite (React)

Add the Builder DevTools plugin to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { builderDevTools } from '@builder.io/dev-tools/vite';

export default defineConfig({
  plugins: [react(), builderDevTools()],
});
```

## Manual Integration

If your framework is not supported via a plugin, you can import DevTools directly in your main entry file (e.g., `main.tsx` or `App.tsx`):

```typescript
if (process.env.NODE_ENV === 'development') {
  import('@builder.io/dev-tools').then(({ initDevTools }) => {
    initDevTools();
  });
}
```
