# Registering Design Tokens in Builder.io

Design tokens allow you to maintain brand consistency by defining a central set of design values (colors, fonts, spacing, etc.) that are accessible within the Builder.io Visual Editor. When these tokens are registered, content creators can select from your predefined brand values instead of using arbitrary hex codes or sizes.

## Instructions for LLMs

When asked to register or update design tokens in a Builder.io project, follow these steps:

1.  **Locate the Registry**: Find the file where Builder components and settings are registered (usually `builder-registry.ts` or `src/builder-registry.ts`).
2.  **Define Tokens**: Create or update the `designTokens` object within the `editor.settings` registration.
3.  **Use CSS Variables**: Always prefer using CSS variables as values (e.g., `var(--primary-color)`) with a fallback. This ensures that the tokens stay in sync with your global CSS styles.
4.  **Configure Editor Settings**:
    *   `styleStrictMode`: Set to `true` to force users to use your design tokens, or `false` to allow custom values.
    *   `allowOverridingTokens`: Set to `true` to allow users to manually edit values even when a token is selected.
    *   `designTokensOptional`: Set to `false` to hide the default Builder.io design options and only show your custom tokens.

## Comprehensive Example

The following example demonstrates how to register colors, font families, font sizes, spacing, and border radii using the `Builder.register("editor.settings", ...)` method.

```typescript
import { Builder } from "@builder.io/react";

Builder.register("editor.settings", {
  styleStrictMode: false,
  allowOverridingTokens: true, // This lets you edit values (e.g., set to 20px instead of choosing "large")
  designTokensOptional: false, // If true, it keeps built-in options available alongside your tokens
  designTokens: {
    colors: [
      { name: "Primary", value: "var(--primary, #E6C744)" },
      { name: "Accent", value: "var(--accent, #FFF5BF)" },
      { name: "Secondary", value: "var(--secondary, #C2C8DA)" },
      { name: "Background", value: "var(--background, #ffffff)" },
      { name: "Background Light", value: "var(--background-light, #e8e8e8)" },
      { name: "Foreground", value: "var(--foreground, #171717)" },
    ],
    fontFamily: [
      {
        name: "Primary",
        value: "Poppins, -apple-system, Roboto, Helvetica, sans-serif",
      },
      { name: "Alternative", value: "Arial, Helvetica, sans-serif" },
    ],
    fontSize: [
      { name: "Largest", value: "var(--size-xxlarge, 57px)" },
      { name: "Larger", value: "var(--size-xlarge, 46px)" },
      { name: "Large", value: "var(--size-large, 24px)" },
      { name: "Medium", value: "var(--size-medium, 18px)" },
      { name: "Small", value: "var(--size-small, 15px)" },
    ],
    spacing: [
      { name: "XLarge", value: "var(--space-xlarge, 46px)" },
      { name: "Large", value: "var(--space-large, 24px)" },
      { name: "Medium", value: "var(--space-medium, 18px)" },
      { name: "Small", value: "var(--space-small, 15px)" },
      { name: "None", value: "var(--space-none, 0px)" },
    ],
    gap: [
      { name: "XLarge", value: "var(--space-xlarge, 46px)" },
      { name: "Large", value: "var(--space-large, 24px)" },
      { name: "Medium", value: "var(--space-medium, 18px)" },
      { name: "Small", value: "var(--space-small, 15px)" },
      { name: "None", value: "var(--space-none, 0px)" },
    ],
    borderRadius: [
      { name: "Medium", value: "var(--border-radius-medium, 10px)" },
      { name: "None", value: "var(--space-none, 0px)" },
    ],
  },
});
```

## Available Token Types

You can register tokens for the following categories:
- `colors`
- `fontFamily`
- `fontSize`
- `fontWeight`
- `lineHeight`
- `letterSpacing`
- `spacing`
- `gap`
- `borderRadius`
- `borderWidth`
- `boxShadow`

## Reference

For more details on design tokens and advanced configurations, refer to the official [Builder.io Design Tokens Documentation](https://www.builder.io/c/docs/design-tokens).
