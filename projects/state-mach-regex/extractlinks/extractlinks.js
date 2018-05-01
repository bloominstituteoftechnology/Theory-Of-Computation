const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
let file;
file = fs.readFileSync(filename);

// Set up regex
const mask = /href\=\"(http.*?)\"/g;
// Find matches
let match = mask.exec(file);
while (match !== null) {
    console.log(`${match[1]}\n`);
    match = mask.exec(file);
}