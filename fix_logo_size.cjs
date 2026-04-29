const fs = require('fs');

const filePath = 'css/styles.css';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace('.logo-img {\n  height: 2.5rem;', '.logo-img {\n  height: 3rem;');
content = content.replace('.logo-name-img {\n  height: 2.2rem;', '.logo-name-img {\n  height: 3.2rem;');
content = content.replace('  .logo-img {\n    height: 3.5rem;\n  }\n  .logo-name-img {\n    height: 3rem;\n  }', '  .logo-img {\n    height: 3.8rem;\n  }\n  .logo-name-img {\n    height: 4.5rem;\n  }');

fs.writeFileSync(filePath, content, 'utf8');
console.log('styles.css updated with larger sizes');
