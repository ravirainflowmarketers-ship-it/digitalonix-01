const fs = require('fs');

let content = fs.readFileSync('src/data/services.ts', 'utf8');

// The Digital Marketing service is the first one in the list (or we can just replace its heroImage)
// We will replace heroImage for "Premium Digital Marketing Services"

content = content.replace(/"h1":\s*"Premium Digital Marketing Services",\s*"subtitle":\s*"(.*?)",\s*"heroImage":\s*"[^"]+"/g, 
  '"h1": "Premium Digital Marketing Services",\n    "subtitle": "$1",\n    "heroImage": "/images/Premium Digital Marketing Services.webp"');

fs.writeFileSync('src/data/services.ts', content);
