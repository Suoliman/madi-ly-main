const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '..', 'dist');
const src = path.join(distDir, 'index.html');
const dest = path.join(distDir, '404.html');

if (!fs.existsSync(src)) {
  console.error('Source index.html not found:', src);
  process.exit(1);
}

fs.copyFileSync(src, dest);
console.log('Copied index.html to dist/404.html');
