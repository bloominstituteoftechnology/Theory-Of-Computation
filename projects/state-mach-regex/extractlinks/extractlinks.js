const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

let text = fs.readFileSync('./stackoverflow.html','utf8')


// Set up regex
// BEAST -> /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm
const regex = /(https?\:\/\/).+?(?=[\"|'])/igm;
const quoteRemover = (/['"]+/g, '')

// Find matches
matches = text.match(regex);
// matches.replace((/['"]+/g, ''));

// Print all matches
// console.log(matches);
matches.forEach(item => console.log(item));
console.log(matches.length);