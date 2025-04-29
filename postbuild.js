// postbuild.js
const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'release/app/dist/main/preload.js');
const dest1 = path.join(__dirname, 'release/app/.erb/dll/preload.js');
const dest2 = path.join(__dirname, 'release/app/dist/main/preload.js'); // redundante, mas deixa explícito

// Garante que a pasta existe
fs.mkdirSync(path.dirname(dest1), { recursive: true });

try {
  fs.copyFileSync(src, dest1);
  fs.copyFileSync(src, dest2);
  console.log('Preload.js copiado para os dois destinos!');
} catch (err) {
  console.error('Erro ao copiar preload.js:', err);
  process.exit(1);
}
