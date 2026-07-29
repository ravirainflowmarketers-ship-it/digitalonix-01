const fs = require('fs');

let content = fs.readFileSync('src/data/services.ts', 'utf8');

// The file has a structure with id: "something" and then heroImage: "..."
// We will replace heroImage: "https://images.unsplash..." with heroImage: "/images/" + id + ".webp"
content = content.replace(/id:\s*['"]([^'"]+)['"]([\s\S]*?)heroImage:\s*['"]([^'"]+)['"]/g, (match, id, middle) => {
    return `id: "${id}"${middle}heroImage: "/images/${id.replace(/-/g, '_')}.webp"`;
});

fs.writeFileSync('src/data/services.ts', content);
