const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const data = fs.readFileSync('./stackoverflow.html', 'UTF8');
// console.log(data)


// Set up regex
//const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;


// Find matches
const links = data.match(regex)
const numLinks = links.length


// Print all matches
links.forEach( item => console.log(item))
console.log("Number of Links: ", numLinks)