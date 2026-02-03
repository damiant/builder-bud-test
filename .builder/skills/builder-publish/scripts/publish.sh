#!/bin/bash

# Check if BUILDER_PUBLIC_KEY is set
if [ -z "$BUILDER_PUBLIC_KEY" ]; then
  echo "Error: BUILDER_PUBLIC_KEY is not set in environment."
  exit 1
fi

# Run the publish command
npx "@builder.io/dev-tools@latest" figma publish "$@"
