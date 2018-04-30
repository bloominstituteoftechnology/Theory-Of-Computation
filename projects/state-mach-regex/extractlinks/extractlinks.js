/* eslint-disable indent*/
const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error('usage: extractlinks inputfile');
    process.exit(1);
}

const filename = args[ 0 ];

// !!!! IMPLEMENT ME

// Read file
let lines = fs.readFileSync(`./${filename}`, 'utf-8').split(' ');

// Set up regex
let exp = new RegExp(/"http.+"/, 'i');

// Find matches
lines = lines.filter(line => exp.test(line));
lines = lines.map(line => {
    line = line.match(exp)[ 0 ];
    return line.slice(1, line.length - 1)

});

// Print all matches

lines.forEach(line => {
    console.log(line);
});
