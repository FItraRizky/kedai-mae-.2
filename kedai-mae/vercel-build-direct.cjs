// Direct build script for Vercel using CommonJS
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Log environment info
console.log('Current directory:', process.cwd());
console.log('Node version:', process.version);
console.log('NPM version:', execSync('npm -v').toString().trim());

// List all files in node_modules/.bin
try {
  console.log('\nContents of node_modules/.bin:');
  const binPath = path.join(process.cwd(), 'node_modules', '.bin');
  if (fs.existsSync(binPath)) {
    const files = fs.readdirSync(binPath);
    console.log(files.join('\n'));
  } else {
    console.log('node_modules/.bin directory not found!');
  }
} catch (error) {
  console.error('Error listing bin directory:', error.message);
}

// Function to run a command and log output
function runCommand(command) {
  console.log(`\nExecuting: ${command}`);
  try {
    const output = execSync(command, { stdio: 'inherit' });
    return output;
  } catch (error) {
    console.error(`Command failed: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

// Try to find TypeScript and Vite in various locations
const possibleTscPaths = [
  './node_modules/.bin/tsc',
  './node_modules/typescript/bin/tsc',
  'npx tsc'
];

const possibleVitePaths = [
  './node_modules/.bin/vite',
  './node_modules/vite/bin/vite.js',
  'npx vite'
];

// Find working TypeScript command
let tscCommand = null;
for (const cmd of possibleTscPaths) {
  try {
    console.log(`Trying TypeScript command: ${cmd}`);
    execSync(`${cmd} --version`, { stdio: 'pipe' });
    tscCommand = cmd;
    console.log(`✅ Found working TypeScript command: ${cmd}`);
    break;
  } catch (e) {
    console.log(`❌ Command failed: ${cmd}`);
  }
}

// Find working Vite command
let viteCommand = null;
for (const cmd of possibleVitePaths) {
  try {
    console.log(`Trying Vite command: ${cmd}`);
    execSync(`${cmd} --version`, { stdio: 'pipe' });
    viteCommand = cmd;
    console.log(`✅ Found working Vite command: ${cmd}`);
    break;
  } catch (e) {
    console.log(`❌ Command failed: ${cmd}`);
  }
}

// If commands not found, try installing globally
if (!tscCommand) {
  console.log('Installing TypeScript globally...');
  runCommand('npm install -g typescript');
  tscCommand = 'tsc';
}

if (!viteCommand) {
  console.log('Installing Vite globally...');
  runCommand('npm install -g vite');
  viteCommand = 'vite';
}

// Run the build
console.log('\n=== Starting Build Process ===');

// Run TypeScript compiler
console.log('\n=== Running TypeScript Compiler ===');
runCommand(tscCommand);

// Run Vite build
console.log('\n=== Running Vite Build ===');
runCommand(`${viteCommand} build`);

console.log('\n✅ Build completed successfully!');