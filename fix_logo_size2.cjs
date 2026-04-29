const fs = require('fs');

const filePath = 'css/styles.css';
let content = fs.readFileSync(filePath, 'utf8');

// Replace mobile sizes
content = content.replace('.logo-img {\n  height: 3rem;', '.logo-img {\n  height: 3.5rem;');
content = content.replace('.logo-name-img {\n  height: 3.2rem;', '.logo-name-img {\n  height: 4.5rem;');

// Replace desktop sizes
content = content.replace('  .logo-img {\n    height: 3.8rem;\n  }\n  .logo-name-img {\n    height: 4.5rem;\n  }', '  .logo-img {\n    height: 4.5rem;\n  }\n  .logo-name-img {\n    height: 6.5rem;\n  }');

fs.writeFileSync(filePath, content, 'utf8');
console.log('styles.css updated with VERY large sizes');
