const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf8');

const imageMapping = {
    "google-my-business": "/images/google_my_business.webp",
    "pr-management": "/images/pr_management.webp",
    "content-creation": "/images/content_creation.webp",
    "video-editing": "/images/video_editing.webp"
};

const rawServicesMatch = content.match(/const rawServices = (\[[\s\S]*?\]);\n\nexport const servicesData/);
if (rawServicesMatch) {
    let services = eval(rawServicesMatch[1]);
    services.forEach(service => {
        if (imageMapping[service.id]) {
            service.heroImage = imageMapping[service.id];
        }
    });
    let newRawServices = "const rawServices = " + JSON.stringify(services, null, 2) + ";";
    content = content.replace(/const rawServices = \[[\s\S]*?\];/, newRawServices);
    fs.writeFileSync('src/data/services.ts', content);
    console.log("Updated services.ts successfully!");
} else {
    console.log("Could not parse rawServices");
}
