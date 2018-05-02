const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const file = fs.readFileSync(filename, "utf-8");

// Set up regex
const regex = /href\=\"(http.*?)\"/g;
// Find matches
const match = regex.exec(file);

// Print all matches
if(match === null){
    console.log(`Error, no matches.`);
}else {
    console.log(match);
}