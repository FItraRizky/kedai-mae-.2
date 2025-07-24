// Simple and direct build script for Vercel
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('=== Vercel Build Script Started ===');
console.log('Current directory:', process.cwd());
console.log('Node version:', process.version);

// Function to execute command with proper error handling
function executeCommand(command, description) {
  console.log(`\n${description}`);
  console.log(`Executing: ${command}`);
  
  try {
    const result = execSync(command, { 
      stdio: 'inherit',
      cwd: process.cwd(),
      env: {
        ...process.env,
        PATH: process.env.PATH + path.delimiter + path.join(process.cwd(), 'node_modules', '.bin')
      }
    });
    console.log(`✅ ${description} completed successfully`);
    return result;
  } catch (error) {
    console.error(`❌ ${description} failed:`);
    console.error('Exit code:', error.status);
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.error('❌ node_modules directory not found!');
  process.exit(1);
}

// Try different approaches to run TypeScript and Vite
try {
  // Method 1: Try using node directly with full paths
  const tscPath = path.join(process.cwd(), 'node_modules', 'typescript', 'bin', 'tsc');
  const vitePath = path.join(process.cwd(), 'node_modules', 'vite', 'bin', 'vite.js');
  
  if (fs.existsSync(tscPath) && fs.existsSync(vitePath)) {
    console.log('\n=== Using direct node execution ===');
    executeCommand(`node "${tscPath}"`, 'TypeScript compilation');
    executeCommand(`node "${vitePath}" build`, 'Vite build');
  } else {
    // Method 2: Use npx with explicit PATH
    console.log('\n=== Using npx with explicit PATH ===');
    executeCommand('npx tsc', 'TypeScript compilation');
    executeCommand('npx vite build', 'Vite build');
  }
  
  console.log('\n🎉 Build process completed successfully!');
  
} catch (error) {
  console.error('\n💥 Build process failed:', error.message);
  process.exit(1);
}