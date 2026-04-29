const fs = require('fs');

const filePath = 'css/styles.css';
let content = fs.readFileSync(filePath, 'utf8');

// Reduce circle logo size
content = content.replace('.logo-img {\n  height: 3.5rem;', '.logo-img {\n  height: 2.2rem;');
content = content.replace('  .logo-img {\n    height: 4.5rem;\n  }', '  .logo-img {\n    height: 2.8rem;\n  }');

// Reduce text logo size
content = content.replace('font-size: 1.8rem;', 'font-size: 1.5rem;');
content = content.replace('font-size: 0.35rem;', 'font-size: 0.4rem;');

content = content.replace('    font-size: 2.2rem;', '    font-size: 1.8rem;');
content = content.replace('    font-size: 0.45rem;', '    font-size: 0.5rem;');

fs.writeFileSync(filePath, content, 'utf8');
console.log('styles.css updated with reduced logo sizes');
