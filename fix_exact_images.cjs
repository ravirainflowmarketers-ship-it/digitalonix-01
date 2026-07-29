const fs = require('fs');
const path = require('path');

const mappings = {
    'digital-marketing': '1432888117047-9dc4b1b3fb49',
    'ai-automations': '1550751827-4bd374c3f58b',
    'paid-ads': '1460925895917-afdab827c52f', // analytics
    'social-media-marketing': '1611162617474-5b21e879e113',
    'gmb-optimization': '1552664730-d307ca884978',
    'seo': '1551288049-bebda4e38f71', // seo/mobile
    'website-design': '1507238692062-79482390a4df',
    'pr-management': '1540420773420-3366772f4999',
    'content-creation': '1499364615650-99f5a2fc1ad0',
    'video-editing': '1536240478700-b86922d1cd27',
    'graphic-designing': '1542744094-3a31f272c490',
    'ai-automation-bhopal': '1550751827-4bd374c3f58b'
};

function updateServices() {
    const file = path.join(__dirname, 'src/data/services.ts');
    let content = fs.readFileSync(file, 'utf8');
    
    // Instead of regex, we can just replace the image per service by finding the object
    // Or simpler: just do a string replace of "heroImage": "..." where id is matched
    
    for (const [id, photoId] of Object.entries(mappings)) {
        const idRegex = new RegExp(`id:\\s*["']${id}["'],[\\s\\S]*?heroImage:\\s*["'][^"']+["']`, 'g');
        content = content.replace(idRegex, (match) => {
            return match.replace(/heroImage:\s*["'][^"']+["']/, `heroImage: "https://images.unsplash.com/photo-${photoId}?q=80&w=1200"`);
        });
    }
    
    fs.writeFileSync(file, content);
}

function updateHome() {
    const file = path.join(__dirname, 'src/pages/Home.tsx');
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/<img\s+src="https:\/\/images\.unsplash\.com\/photo-[^"]+"\s+alt="Digitalonix Team"/g, '<img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt="Digitalonix Team"');
    content = content.replace(/<img\s+src=\{"https:\/\/images\.unsplash\.com\/photo-[^"]+"\}\s+alt="Why Leading Brands Choose Digitalonix"/g, '<img src={"https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"} alt="Why Leading Brands Choose Digitalonix"');
    fs.writeFileSync(file, content);
}

function updateAbout() {
    const file = path.join(__dirname, 'src/pages/About.tsx');
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/src="https:\/\/images\.unsplash\.com\/photo-[^"]+"\s+alt=""/g, 'src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80" alt=""');
    content = content.replace(/src="https:\/\/images\.unsplash\.com\/photo-[^"]+"\s+alt="Founder"/g, 'src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" alt="Founder"');
    fs.writeFileSync(file, content);
}

updateServices();
updateHome();
updateAbout();
console.log('Exact mappings applied.');
