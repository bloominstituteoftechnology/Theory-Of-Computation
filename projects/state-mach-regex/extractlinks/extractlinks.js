const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const readFile = fs.readFile(`./${filename}`, (err, data) => {
  data = String(data);
  if (err) {
    console.log("Unable to read file");
  }

  // Set up regex
  const regexLinks = new RegExp(/http[s]?.*?(?=")/g);

  // Find matches
  const matched = data.match(regexLinks);

  // Print all matches
  console.log(matched);
});
