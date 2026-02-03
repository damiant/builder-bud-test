# Registering components

To use your custom components in the Builder Visual Editor, you need to take a couple of minimal steps in your codebase.

### Reference Documentation
- https://www.builder.io/c/docs/custom-components-setup

### Example Code

The following code will register the component Counter and call it "Counter" in Builder.

```typescript
import { Builder } from "@builder.io/react";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
```

### Example with Children

The following code will register a component that can contain other elements:

// Hero
```typescript
import { Builder, withChildren } from "@builder.io/react";
import { PropsWithChildren } from "react";

const Hero = (props: PropsWithChildren) => {
  return (
    <>
      <div>Hero</div>
      {props.children}
    </>
  );
};

export default Hero;

const HeroWithBuilderChildren = withChildren(Hero);

export function RegisterHero() {
    Builder.registerComponent(HeroWithBuilderChildren, {
      name: "Hero",
      inputs: [],
      canHaveChildren: true,
      defaultChildren: [
        {
          "@type": "@builder.io/sdk:Element",
          component: {
            name: "Text",
            options: {
              text: "This is Builder text",
            },
          },
        },
      ],
    });
}
```

// HeroContainer
```typescript
import { withChildren } from "@builder.io/react";
import { Builder } from "@builder.io/sdk";
import { PropsWithChildren } from "react";

const HeroContainer = (props: PropsWithChildren) => {
  return (
    <>
      <div>Hero Container</div>
      {props.children}
    </>
  );
};

export default HeroContainer;

export function RegisterHeroContainer() {
  Builder.registerComponent(withChildren(HeroContainer), {
    name: "HeroContainer",
    inputs: [],
    canHaveChildren: true,
    childRequirements: {
      message: "Only Hero components can be added here",
      query: { "component.name": "Hero" },
    },
    defaultChildren: [
      {
        "@type": "@builder.io/sdk:Element",
        component: {
          name: "Hero",
        },
      },
    ],
  });
}
```

### Another Example

```typescript
Builder.registerComponent(HelloWorldComponent, {
  // Begin component options
  // Name your component (required)
  name: "Hello World",
  // Optional: provide CSS in an object to defaultStyles
  defaultStyles: {
    textAlign: "center",
    fontSize: "20px",
  },
  // Optional: specify whether your component is wrapped in a <div>
  noWrap: true,
  // Optional: specify if your component shows in the Insert tab
  hideFromInsertMenu: false,
  // End component options

  // Begin inputs:  
  inputs: [{ ... }],
});
```