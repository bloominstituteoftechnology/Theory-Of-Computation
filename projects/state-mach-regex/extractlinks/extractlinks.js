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
  const regex = /https?:\/\/[a-z0-9]*\.+[^"']*/gi;
  // buggier way below
  // const regex = /https?:\/\/[a-z][^"]+/gi;
  // Find matches
  let matches = data.match(regex);
  // Print all matches
  for (let i = 0; i < matches.length; i++) {
    console.log("\n" + matches[i]);
  }
  console.log(
    "\n=======================================\nThe number of links is " +
      matches.length
  );
});
