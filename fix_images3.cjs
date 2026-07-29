const fs = require('fs');

function replaceImages(filePath, width, height) {
    let content = fs.readFileSync(filePath, 'utf8');
    let counter = 1;
    content = content.replace(/https:\/\/picsum\.photos\/800\/600\?random=\$RANDOM/g, () => {
        return `https://picsum.photos/${width}/${height}?random=${Math.floor(Math.random() * 10000) + counter++}`;
    });
    fs.writeFileSync(filePath, content);
}

replaceImages('src/data/logoPortfolio.ts', 800, 600);
