const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const read = fs.readFileSync(filename, { encoding: "utf8" });

// Set up regex
const regex = /(https?:\/\/)[\w-.]+[\w\/\.-]+[\w\?\w\=]+[ -~]/gm;

// Find matches
const matches = read.match(regex);

// Print all matches
let count = 0;
matches.forEach(match => {  
  count = count + 1; 
  console.log(match);
  console.log(count);
});
