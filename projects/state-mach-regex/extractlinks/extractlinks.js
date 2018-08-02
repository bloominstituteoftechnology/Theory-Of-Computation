const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file

// Set up regex

// Find matches

// Print all matches


const data = fs.readFileSync(filename, {encoding: 'utf8'});

// console.log(data);

// https://wordpress.stackexchange.com',

const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

const links = data.match(regex);

console.log(links.length);
let i = 1
for (let link of links) {
    console.log(i, link);
    i+= 1;
}