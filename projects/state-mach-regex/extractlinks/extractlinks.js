const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const data = fs.readFileSync(filename,'utf8');

// Set up regex
const links = data.match(/(http.+?(?="))/gm);
// Find matches

// Print all matches
console.log({links});
