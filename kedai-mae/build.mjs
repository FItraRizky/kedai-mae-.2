// ESM build script for Vercel
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';

// Get current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Log environment info
console.log('Current directory:', process.cwd());
console.log('Node version:', process.version);

// Check if node_modules exists
const nodeModulesPath = resolve(__dirname, 'node_modules');
if (!fs.existsSync(nodeModulesPath)) {
  console.error('Error: node_modules directory not found!');
  process.exit(1);
}

// Check TypeScript and Vite binaries
const tscPath = resolve(nodeModulesPath, 'typescript/bin/tsc');
const vitePath = resolve(nodeModulesPath, 'vite/bin/vite.js');

if (!fs.existsSync(tscPath)) {
  console.error('Error: TypeScript binary not found at', tscPath);
  process.exit(1);
}

if (!fs.existsSync(vitePath)) {
  console.error('Error: Vite binary not found at', vitePath);
  process.exit(1);
}

console.log('TypeScript binary found at:', tscPath);
console.log('Vite binary found at:', vitePath);

// Helper function to run commands
function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    console.log(`Running: ${command} ${args.join(' ')}`);
    
    const proc = spawn(command, args, { stdio: 'inherit' });
    
    proc.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
    
    proc.on('error', (err) => {
      reject(new Error(`Failed to start command: ${err}`));
    });
  });
}

// Main build process
async function build() {
  try {
    // Run TypeScript compiler
    console.log('\n=== Running TypeScript Compiler ===');
    await runCommand('node', [tscPath]);
    
    // Run Vite build
    console.log('\n=== Running Vite Build ===');
    await runCommand('node', [vitePath, 'build']);
    
    console.log('\n✅ Build completed successfully!');
  } catch (error) {
    console.error('\n❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Start the build
build();