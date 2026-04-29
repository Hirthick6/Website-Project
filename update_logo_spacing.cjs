const fs = require('fs');

const filePath = 'css/styles.css';
let content = fs.readFileSync(filePath, 'utf8');

// Update letter-spacing based on user's new code
content = content.replace('letter-spacing: -0.04em;', 'letter-spacing: 0.01em;');

fs.writeFileSync(filePath, content, 'utf8');
console.log('styles.css updated with new letter-spacing');
