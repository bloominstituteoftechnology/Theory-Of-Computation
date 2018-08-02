const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const file = fs.readFileSync(filename, "utf8");

// Set up regex
const regex = /(https?:\/\/.+?[^"']+)/g;

// Find matches
const links = file.match(regex);

// Print all matches
if (links) {
  console.log(links.length);
  for (link of links) {
    console.log(link);
  }
  console.log(`Found ${links.length} matches.`);
} else {
  console.log("No URLs.");
}
