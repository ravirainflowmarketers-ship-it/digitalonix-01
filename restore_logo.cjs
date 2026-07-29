const fs = require('fs');

let content = fs.readFileSync('src/data/logoPortfolio.ts', 'utf8');

// I will just replace the specific lines based on line numbers!
const lines = content.split('\n');

lines[19] = "    thumbnail: 'https://images.unsplash.com/photo-1616803140344-6682afb13cda?w=800&q=80',";
lines[20] = "    featuredImage: 'https://images.unsplash.com/photo-1616803140344-6682afb13cda?w=1600&q=80',";
lines[44] = "      'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80',";
lines[45] = "      'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80',";
lines[46] = "      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80'";
lines[56] = "      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',";
lines[69] = "    thumbnail: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80',";
lines[70] = "    featuredImage: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1600&q=80',";
lines[94] = "      'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80',";
lines[95] = "      'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80',";
lines[96] = "      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80'";
lines[106] = "      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',";
lines[119] = "    thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',";
lines[120] = "    featuredImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',";
lines[144] = "      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',";
lines[145] = "      'https://images.unsplash.com/photo-1582407947304-fd86f1f8ea23?w=800&q=80',";
lines[146] = "      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80'";
lines[156] = "      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80',";
lines[169] = "    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',";
lines[170] = "    featuredImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',";
lines[194] = "      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',";
lines[195] = "      'https://images.unsplash.com/photo-1616803140344-6682afb13cda?w=800&q=80',";
lines[196] = "      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'";
lines[206] = "      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80',";

fs.writeFileSync('src/data/logoPortfolio.ts', lines.join('\n'));
