---
name: builder-publish
description: Integrate Builder.io's publish and devtools into a website. Use this skill to (1) Install and configure Builder DevTools, (2) Sync components from Figma to Builder using 'figma publish', (3) Set up environment variables for Builder integration.
---

# Builder Publish & DevTools Integration

This skill guides you through integrating Builder.io DevTools and using the publish command to sync component mappings.

## Quick Start

### 1. Install DevTools

Install the `@builder.io/dev-tools` package as a dev dependency:

```bash
npm install --save-dev @builder.io/dev-tools
```

### 2. Set Up Environment Variables

Add your Builder Public API Key to your `.env` file:

```env
BUILDER_PUBLIC_KEY=your_public_api_key_here
```

### 3. Run DevTools

Start your development server with DevTools enabled. For many frameworks, this is done automatically once installed, or you can run:

```bash
npx builder-dev-tools
```

## Publishing Component Mappings

If you are using Figma component mappings, use the `publish` command to sync them to Builder:

```bash
npx "@builder.io/dev-tools@latest" figma publish
```

### Common Flags:

- `--dryrun`: Validate mappings without publishing.
- `--force`: Publish even with errors.
- `--verbose`: Detailed output.

## Framework Specific Setup

For detailed instructions on setting up DevTools with specific frameworks (Next.js, React, Vite, etc.), see [references/frameworks.md](references/frameworks.md).
