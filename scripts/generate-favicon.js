// scripts/generate-favicon.js
// Run with: node scripts/generate-favicon.js
// First install sharp: npm install sharp

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure public folder exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// SVG source matching your navbar logo
const svgBuffer = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF7A3D"/>
      <stop offset="50%" style="stop-color:#FF5C35"/>
      <stop offset="100%" style="stop-color:#4D7CFF"/>
    </linearGradient>
  </defs>
  <rect x="5" y="5" width="90" height="90" rx="22" ry="22" fill="url(#grad)"/>
  <rect x="35" y="35" width="30" height="30" rx="6" ry="6" fill="white" transform="rotate(45 50 50)"/>
</svg>`);

// Save SVG first
fs.writeFileSync(path.join(publicDir, 'favicon.svg'), svgBuffer);
console.log('✅ Saved favicon.svg');

// Generate PNGs for different sizes
const sizes = [16, 32, 96, 192, 512];

async function generateFavicons() {
  for (const size of sizes) {
    try {
      await sharp(svgBuffer)
        .resize(size, size)
        .png()
        .toFile(path.join(publicDir, `favicon-${size}x${size}.png`));
      console.log(`✅ Generated favicon-${size}x${size}.png`);
    } catch (err) {
      console.error(`❌ Error generating ${size}px favicon:`, err.message);
    }
  }
  
  // Also create ICO file (optional)
  try {
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✅ Generated favicon.ico');
  } catch (err) {
    console.log('⚠️ Could not generate ICO (this is optional)');
  }
  
  console.log('\n✨ All favicons generated successfully!');
  console.log('📁 Location: public/ folder');
}

generateFavicons();