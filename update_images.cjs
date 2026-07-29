const fs = require('fs');
const path = require('path');

const photos = [
    '1460925895917-afdab827c52f', // analytics
    '1611162617474-5b21e879e113', // social media
    '1432888117047-9dc4b1b3fb49', // laptop
    '1550751827-4bd374c3f58b', // AI
    '1542744094-3a31f272c490', // branding
    '1507238692062-79482390a4df', // web design
    '1499364615650-99f5a2fc1ad0', // content
    '1522071820081-009f0129c71c', // team
    '1551288049-bebda4e38f71', // mobile
    '1497366216548-37526070297c', // office
    '1552664730-d307ca884978', // success
    '1504384308090-c894fdcc538d', // general
    '1498050108023-c5249f4df085', // code
    '1555066931-4365d14bab8c', // tech
    '1441986300917-64674bd600d8', // workspace
    '1558769132-cb1fac08b042', // design
    '1607082348824-0a96f2a4b9da', // marketing
    '1534438327276-14e5300c3a48', // strategy
    '1540420773420-3366772f4999', // meeting
    '1571019614242-c5c5dee9f50b'  // presentation
];

function getRandomPhoto() {
    return photos[Math.floor(Math.random() * photos.length)];
}

function processFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace all picsum.photos with unsplash
    content = content.replace(/https:\/\/picsum\.photos\/\d+\/\d+\?random=\d+/g, (match) => {
        return `https://images.unsplash.com/photo-${getRandomPhoto()}?q=80&w=1200`;
    });

    // Also replace unsplash URLs that have missing parameters or look bad, but let's just do picsum for now since I replaced them before
    fs.writeFileSync(filePath, content);
}

['src/data/services.ts', 'src/data/portfolio.ts', 'src/data/logoPortfolio.ts', 'src/pages/Home.tsx', 'src/pages/About.tsx'].forEach(f => {
    processFile(path.join(__dirname, f));
});
console.log('Images updated.');
