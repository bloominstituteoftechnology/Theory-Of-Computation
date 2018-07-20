const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

const file = fs
  .readFileSync(filename, "utf8")
  .match(regex)
  .forEach(link => {
    console.log(link);
  });
// !!!! IMPLEMENT ME

// Read file (line 15)

// Set up regex (line 12)

// Find matches (line 16)

// Print all matches (lines 17, 18)
