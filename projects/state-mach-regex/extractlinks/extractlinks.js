const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const lines = fs.readFileSync(filename, 'utf8').split("\n");
let rawData = '';

// Set up regex
lines.forEach(line => {
    rawData += line.trim();
    rawData += '\n';
});

rawData = rawData.trim();
// console.log(rawData)
// Find matches

let pattern = new RegExp('((([A-Za-z]{3,9}:(?:\/\/)?)' +
               '(?:[\-;:&=\+\$,\w]+@)' + 
               '?[A-Za-z0-9\.\-]+|' +
               '(?:www\.|[\-;:&=\+\$,\w]+@)' +
               '[A-Za-z0-9\.\-]+)' + 
               '((?:\/[\+~%\/\.\w\-_]*)?\??' +
               '(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)', 'g');
// let pattern = /https?:\/\/(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*\(\),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+/g
// let urls = pattern.exec(rawData)
let urls = rawData.match(pattern);

// Print all matches(
urls.forEach(url => console.log(url))

