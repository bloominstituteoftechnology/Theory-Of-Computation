const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  // Set up regex
  const regex = /"https?:\/\/.*\.[a-z]+"/g;
  // Find matches
  let matches = data.match(regex);
  // Print all matches
  for (let i = 0; i < matches.length; i++) {
    // take out extra quotation marks as I go in an inefficient manner
    // since there is a way I don't know to make them not appear in the first place probably
    matches[i] = matches[i].replace(/[""]/g, "");
    console.log(matches[i]);
  }
});
