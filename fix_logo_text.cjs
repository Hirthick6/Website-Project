const fs = require('fs');

// 1. Update index.html
let htmlPath = 'index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// Add fonts to head
if (!html.includes('fonts.googleapis.com/css2?family=Montserrat')) {
    html = html.replace(
        '<link rel="stylesheet" href="css/styles.css">',
        '<link rel="preconnect" href="https://fonts.googleapis.com">\n  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Nunito:wght@900&display=swap" rel="stylesheet">\n  <link rel="stylesheet" href="css/styles.css">'
    );
}

// Replace logo image with text
const oldLogoRegex = /<div class="logo-name-wrap">\s*<img src="images\/logosname\.png" alt="GenZova" class="logo-name-img">\s*<\/div>/g;
const newLogoHtml = `<div class="logo-wrapper">
          <div class="logo-main">GenZova</div>
          <div class="logo-sub">Software Solutions</div>
        </div>`;
html = html.replace(oldLogoRegex, newLogoHtml);

fs.writeFileSync(htmlPath, html, 'utf8');


// 2. Update styles.css
let cssPath = 'css/styles.css';
let css = fs.readFileSync(cssPath, 'utf8');

// The old logo text CSS we want to remove
const oldCssRegex = /\.logo-name-img \{[\s\S]*?\}[\s\S]*?\.logo-name-wrap \{[\s\S]*?\}[\s\S]*?\.logo-name-wrap \.logo-subtitle \{[\s\S]*?\}/g;

// Add new css
const newCss = `
.logo-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.logo-main {
  font-family: 'Nunito', sans-serif;
  font-weight: 900;
  font-size: 1.8rem;
  letter-spacing: -0.04em;
  line-height: 1;
  background: linear-gradient(to bottom, #38bdf8 0%, #1d4ed8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.1rem;
  width: 100%;
  text-align: center;
}

.logo-sub {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 0.35rem;
  color: #333333;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  display: block;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .logo-main {
    font-size: 2.2rem;
  }
  .logo-sub {
    font-size: 0.45rem;
  }
}
`;

// Append it right after logo-img
css = css.replace('.logo-img {\n  height: 4.5rem;', '.logo-img {\n  height: 3.5rem;'); // reset circle size to normal

// We'll just append it to the end or replace the existing media query stuff
// It's safer to just append the new classes to the file.
css += "\n\n/* New text logo styles */\n" + newCss;

fs.writeFileSync(cssPath, css, 'utf8');
console.log('Update complete');
