const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file

const search = fs.readFile(filename, "utf8", (err, data) => {
  if (err) throw err;
  processFile(data);
});

// Set up regex

function processFile(data) {
//   const regex = new RegExp("/\bhttps?//S+/g", "i");


const regex = /\bhttps?:\/\/\S+/g

  // // Find matches

  const match = data.match(regex);

  // // Print all matches

  match.forEach(element => console.log(element));
}
