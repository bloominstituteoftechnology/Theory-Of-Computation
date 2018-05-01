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
const regEx = new RegExp("(http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?");
// Find matches
const parse = regEx.exec(file);
// Print all matches
if (parse === null){
    console.log(`No matches found`);
} else {
    console.log(parse);
}
