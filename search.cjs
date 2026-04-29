const fs = require('fs');

const css = fs.readFileSync('css/styles.css', 'utf8');
const lines = css.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('process-step')) {
    console.log('Line ' + (i + 1) + ': ' + lines[i]);
    // print some context
    for (let j = Math.max(0, i - 2); j < Math.min(lines.length, i + 15); j++) {
      console.log(lines[j]);
    }
    break; // just show the first match block
  }
}
