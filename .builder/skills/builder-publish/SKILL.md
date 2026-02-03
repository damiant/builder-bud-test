---
name: builder-publish
description: Integrate Builder.io's devtools into a website. Use this skill to (1) Install and configure Builder DevTools, (2) Registers components and Design Tokens, (3) Set up environment variables for Builder integration.
---

# Builder Publish & DevTools Integration

This skill guides you through integrating Builder.io DevTools and registering components or design tokens.

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

### 4. Register Design Tokens
This is an optional step you can ask the user if they would like to do. It will register design tokens (essentially css variables) that appear in the Builder Design Tab and allow selection of elements such as spacing,fonts, sizes rather than the user manually entering values.

Follow the steps in references/design-tokens.md to register design tokens.

### 5. Register Components

### Common Flags:

- `--dryrun`: Validate mappings without publishing.
- `--force`: Publish even with errors.
- `--verbose`: Detailed output.

## Framework Specific Setup

For detailed instructions on setting up DevTools with specific frameworks (Next.js, React, Vite, etc.), see [references/frameworks.md](references/frameworks.md).
