#!/bin/bash

# Debugging info
echo "Current directory: $(pwd)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"
echo "Listing node_modules/.bin:"
ls -la ./node_modules/.bin

# Run TypeScript compiler directly
node ./node_modules/typescript/bin/tsc

# Run Vite build directly
node ./node_modules/vite/bin/vite.js build