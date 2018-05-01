const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const file = fs.readFileSync(filename, 'utf8');

// Set up regex
// const regex = RegExp(/"(https?:\/\/.*\.A-z+)"/, 'g');
const regex = new RegExp(/(https?:\/\/.*?)"/, "g");

// Find matches
let urls = regex.exec(file);

// Print all matches
while (urls !== null) {
    console.log(urls[1]);
    urls = regex.exec(file);
}