const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const fileData = fs.readFileSync(filename, "utf8");
// Set up regex
const links = fileData.match(/https?+:\w /g);

// Find matches
console.log(links);
console.log('hello');
// Print all matches
