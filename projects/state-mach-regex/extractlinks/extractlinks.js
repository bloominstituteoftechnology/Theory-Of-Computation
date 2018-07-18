const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const content = fs.readFileSync(filename, 'utf8')
// Set up regex
const regex = /(http|https)\::\/\/([\w\W][^"|']+)/g;
// Find matches
const links = content.match(regex);
// Print all matches
links.forEach(match => {
    console.log(match);
});