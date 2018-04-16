const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

const content = fs.readFileSync("./stackoverflow.html", "utf-8");

// Set up regex

const regex = /(https?):\/\/[0-9?a-z./=-]/gi;

// Find matches

const matches = content.match(regex);

// Print all matches

for (let i = 0; i < matches.length; i) {
  console.log(matches[i]);
}
