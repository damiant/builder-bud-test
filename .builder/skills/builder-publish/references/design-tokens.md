# Registering Design Tokens

By providing your own design tokens, you can define a consistent set of design values that are available to your users in the Builder Visual Editor.

In this way you can:
- Maintain brand consistency. By providing predefined design tokens, you ensure that your app's design stays consistent and adheres to your brand guidelines.
- Streamline content creation. Users can quickly select from a curated set of design options, rather than having to manually input values or make design decisions.
- Centralize design updates. When you update your design tokens in code via CSS variables, those changes are reflected across your app, making it easy to manage and evolve your design system.

### References
Documentation on registering design tokens
- https://www.builder.io/c/docs/design-tokens#registering-design-tokens

### Example Code
```typscript
import { builder, Builder } from "@builder.io/react";


Builder.register("editor.settings", {
  styleStrictMode: false,
  allowOverridingTokens: true, // This lets you edit values (eg set to 20px instead of choosing "large" etc)
  designTokensOptional: false, // If true it lets you keep built in options available
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