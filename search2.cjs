const fs = require('fs');

const css = fs.readFileSync('css/styles.css', 'utf8');

// just dump lines 1500 to 1600
const lines = css.split('\n');
for (let i = 1500; i < 1600; i++) {
  console.log(lines[i]);
}
