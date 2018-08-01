const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const loadedFile = fs.readFileSync(filename, {encoding: 'utf8'});

// Set up regex
//const regex = /https?:\/\/\w.[^\\"'>()\s]+/ig;
const regex = /<\s*a.*?href\s*=\s*(?:"|')(.*?)(?:"|')[^>]*>(.*?)<\s*?\/\s*?a\s*?>|(https?:\/\/\w.[^\\"'>()\s]+)/ig;
// const regex = /<\s*a.*?href\s*=\s*(?:"|')(.*?)(?:"|')[^>]*>(.*?)<\s*?\/\s*?a\s*?>/ig;

// Find matches
const matches = loadedFile.match(regex);

// Print all matches
let count = 0;

for (let link of matches) {
    count++;
    link = link.match(regex);
    const match = regex.exec(link);
    
    if (match[1] === undefined || match[2] === undefined) {
        console.log(count, match[3]);
    } else {
        console.log(count, match[1], match[2]);
    }
}
