const fs = require('fs');

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');
content = content.replace(/https:\/\/images\.unsplash\.com\/photo-1497366216548-37526070297c\?w=1200&q=80/g, '/images/digitalonix_why_choose_us_1.webp');

fs.writeFileSync('src/pages/Home.tsx', content);
