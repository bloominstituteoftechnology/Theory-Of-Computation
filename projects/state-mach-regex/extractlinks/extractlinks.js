const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

const filedata = fs.readFileSync(filename, {encoding: 'utf8'});
// Set up regex

// strict http, 0 or 1 s, stict two '/', ay amount of char until Lazy '.',  
const regFile = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;
// Find matches
regFile = filedata.match(regFile);
for (let url of matches) {
    console.log(url);
}
// Print all matches
