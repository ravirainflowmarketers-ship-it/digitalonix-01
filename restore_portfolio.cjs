const fs = require('fs');

let content = fs.readFileSync('src/data/portfolio.ts', 'utf8');

const originalImages = [
    "'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'",
    "'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80'",
    "'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'",
    "'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80'",
    "'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'",

    "'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'",
    "'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80'",
    "'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80'",
    "'https://images.unsplash.com/photo-1558769132-cb1fac08b042?w=800&q=80'",
    "'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80'",

    "'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80'",
    "'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80'",
    "'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80'",
    "'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80'",

    "'/images/digitalonix_portfolio_1.webp'",
    "'/images/digitalonix_portfolio_1_full.webp'",
    "'https://images.unsplash.com/photo-1616803140344-6682afb13cda?w=800&q=80'",
    "'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&q=80'"
];

let i = 0;
// We'll replace any string that looks like an image URL, since my script put unsplash everywhere.
content = content.replace(/['"]https:\/\/images\.unsplash\.com\/photo-[^'"]+['"]/g, () => {
    if (i < originalImages.length) {
        return originalImages[i++];
    }
    return "'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'";
});

fs.writeFileSync('src/data/portfolio.ts', content);
