const fs = require('fs');
let content = fs.readFileSync('src/data/services.ts', 'utf8');

const imageMapping = {
    "digital-marketing-company-in-bhopal": "digital_marketing_hero_1784322879394.jpg",
    "ai-automations": "software_dev_hero_1784322956930.jpg",
    "google-ads-agency-in-bhopal": "google_ads_hero_1784322935867.jpg",
    "social-media-marketing-company-in-bhopal": "social_media_hero_1784322903154.jpg",
    "google-my-business": "branding_hero_1784322971222.jpg",
    "seo-company-in-bhopal": "seo_hero_1784322891309.jpg",
    "website-design-company-in-bhopal": "website_design_hero_1784322913631.jpg",
    "pr-management": "branding_hero_1784322971222.jpg",
    "content-creation": "graphic_design_hero_1784322924334.jpg",
    "video-editing": "graphic_design_hero_1784322924334.jpg",
    "graphic-design-company-in-bhopal": "graphic_design_hero_1784322924334.jpg",
    "ai-automation-company-in-bhopal": "software_dev_hero_1784322956930.jpg"
};

const rawServicesMatch = content.match(/const rawServices = (\[[\s\S]*?\]);\n\nexport const servicesData/);
if (rawServicesMatch) {
    let services = eval(rawServicesMatch[1]);
    services.forEach(service => {
        if (imageMapping[service.id]) {
            service.heroImage = "/images/" + imageMapping[service.id];
        }
    });
    let newRawServices = "const rawServices = " + JSON.stringify(services, null, 2) + ";";
    content = content.replace(/const rawServices = \[[\s\S]*?\];/, newRawServices);
    fs.writeFileSync('src/data/services.ts', content);
    console.log("Updated services.ts successfully!");
} else {
    console.log("Could not parse rawServices");
}
