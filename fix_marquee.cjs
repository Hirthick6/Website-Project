const fs = require('fs');

const filePath = 'css/styles.css';
let content = fs.readFileSync(filePath, 'utf8');

// The original block
const oldBlock = `
.marquee-text {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  color: var(--primary);
  opacity: 0.9;
}
`;

// New block
const newBlock = `
.marquee-text {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  word-spacing: 2.5rem;
  color: var(--primary);
  opacity: 0.9;
}
`;

// It might have \r\n, so we'll just do a replace on the specific line
content = content.replace('letter-spacing: 0.3em;', 'letter-spacing: 0.1em;\n  word-spacing: 2.5rem;');

fs.writeFileSync(filePath, content, 'utf8');
console.log('styles.css updated for marquee text');
