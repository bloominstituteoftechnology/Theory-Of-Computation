const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];
console.log(filename);

// !!!! IMPLEMENT ME

// Read file
const htmlFile = args[1];
console.log(htmlFile);

// Set up regex
const searchExpression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
let regex = new RegExp(searchExpression);

// Find matches
// if ()

// Print all matches
console.log("it's working");
