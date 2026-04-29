const fs = require('fs');

const filePath = 'css/styles.css';
let content = fs.readFileSync(filePath, 'utf8');

// Reduce word spacing
content = content.replace('word-spacing: 2.5rem;', 'word-spacing: 1rem;');

fs.writeFileSync(filePath, content, 'utf8');
console.log('styles.css updated with reduced word spacing');
