const fs = require('fs');

const filePath = 'css/styles.css';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace('height: 3.5rem;', 'height: 2.5rem;');
content = content.replace('height: 5.46rem;', 'height: 2.2rem;');
content = content.replace('margin-left: -1.5rem;', '/* margin-left removed */\n}\n\n@media (min-width: 768px) {\n  .logo-img {\n    height: 3.5rem;\n  }\n  .logo-name-img {\n    height: 3rem;\n  }\n');

fs.writeFileSync(filePath, content, 'utf8');
console.log('styles.css updated');
