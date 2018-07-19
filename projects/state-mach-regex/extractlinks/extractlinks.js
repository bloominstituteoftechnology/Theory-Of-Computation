const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const file = fs.readFileSync(filename, {encoding: 'UTF-8'});
// Set up regex

// my first working regexp pattern:
// https?:\/\/[\w\.]+(\/[\w\.\-\@]+)*(\?\w+=\w+(&[\w;]+=[\w\%\.-]+)*)?\/?

//  my shorter regexp pattern (less accurate):
// // /https?:\/\/[^"' ]+/

const regexp = new RegExp(/https?:\/\/[^"' ]+/, 'g');
// Find matches
const links = file.match(regexp);
// Print all matches
console.log(links);
