const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];
const htmlData = null;
// !!!! IMPLEMENT ME

// Set up regex
const searchExpression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
let regex = new RegExp(searchExpression);

// Read file
console.log(filename);
fs.readFile(filename, "utf8", function(err, data) {
  // return error if error
  if (err) {
    return console.log(err);
  }
  // Find matches and print them out
  if (data.match(regex)) {
    console.log(data.match(regex));
  }
});

