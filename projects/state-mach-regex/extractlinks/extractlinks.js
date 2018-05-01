const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];
// !!!! IMPLEMENT ME

// Read file
let file = fs.readFileSync(filename, 'utf8');
// Set up regex
const regex = /https?:\/\/\w?.[^"'\)\s]+/g
// Find matches
const links = file.match(regex);
// Print all matches
links.forEach(link => {
    console.log(link);
})
