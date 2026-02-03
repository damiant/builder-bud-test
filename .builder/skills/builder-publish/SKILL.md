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

### Register Design Tokens

Ask the user if they would like to register design tokens. This operation will allow only design tokens that have been registered to be used in the design tab. To register design tokens follow references/design-tokens.md

### Register components

Ask the user if they would like to register components. If they answer yes, then review the code to find the list of components. Any components that are not registered using Builder.registerComponent may be components the user wants to register. To register components follow references/register-components.md

## Resources

- **References**: Framework-specific setup guides can be found in [references/frameworks.md](references/frameworks.md).
- **Scripts**: A convenience script for publishing is available in [scripts/publish.sh](scripts/publish.sh).
