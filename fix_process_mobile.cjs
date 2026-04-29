const fs = require('fs');

const filePath = 'css/styles.css';
let content = fs.readFileSync(filePath, 'utf8');

const targetStr = `
.process-step p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  max-width: 190px;
  margin: 0 auto;
  text-align: center;
}`;

const mediaQuery = `

@media (max-width: 767px) {
  .process-steps {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  .process-step {
    width: 100%;
  }
  .process-step p {
    max-width: 300px;
  }
  .process-connector {
    display: none;
  }
}
`;

content = content.replace(targetStr, targetStr + mediaQuery);

fs.writeFileSync(filePath, content, 'utf8');
console.log('styles.css updated for mobile process-steps alignment');
