'use strict mode'
const fs = require('fs');

const args = process.argv.slice(2);
console.log(args)
if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME
const fileContent = fs.readFileSync(filename, {encoding: 'utf8'});

// Read file
let regex = /https?:\/\/.[^"\s<>',+]+/g;
let matches = fileContent.match(regex)
// Set up regex
console.log(matches.length)
for (const url of matches) {
    console.log(url);
}
