const fs = require('fs');
let content = fs.readFileSync('src/components/service-page/ServiceHero.tsx', 'utf8');

content = content.replace(
  /className="w-full h-auto object-cover aspect-\[4\/3\] transform transition-transform duration-700 hover:scale-105"/,
  'className="w-full h-full object-cover aspect-[4/3] transform transition-transform duration-700 hover:scale-105"'
);

fs.writeFileSync('src/components/service-page/ServiceHero.tsx', content);
