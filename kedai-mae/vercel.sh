#!/bin/bash

# Print debugging information
echo "Current directory: $(pwd)"
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Add node_modules/.bin to PATH
export PATH="$PATH:$(pwd)/node_modules/.bin"
echo "Updated PATH: $PATH"

# Check if vite is available
which vite
if [ $? -ne 0 ]; then
  echo "ERROR: vite command not found in PATH"
  echo "Listing node_modules/.bin:"
  ls -la ./node_modules/.bin
  
  # Try to install vite globally as a last resort
  echo "Installing vite globally..."
  npm install -g vite
  
  # Check again
  which vite
  if [ $? -ne 0 ]; then
    echo "ERROR: vite still not found after global install"
    exit 1
  fi
fi

# Run TypeScript compiler
echo "Running TypeScript compiler..."
npx tsc

# Run Vite build
echo "Running Vite build..."
npx vite build