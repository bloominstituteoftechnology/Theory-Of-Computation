const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
// console.log(data)


// Set up regex
//const regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
//const regex = /https?:\/\/(\w)+\-?(\w)+\.(\w*\/?\w*\.?\??\=?\-?&?;?)*/g 
//const regex = /https?:\/\/\w+\.\w+[^'"]+/g
//const regex = /(?<=href=").*?(?=")/g;

const data = fs.readFileSync(filename, 'UTF8');
const regex = /https?:\/\/[^'">\s]+?\.[^'">\s]+/g;


// Find matches
const links = data.match(regex)
const numLinks = links.length


// Print all matches
links.forEach( (item, index) => console.log(index+1, item))
console.log("Number of Links: ", numLinks)