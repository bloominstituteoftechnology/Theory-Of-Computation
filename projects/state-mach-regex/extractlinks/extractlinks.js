const fs = require("fs");
const { promisify } = require("util");
const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

try {
  // Read file
  const fileString = fs.readFileSync(filename, { encoding: 'utf8' });
  
  // Set up regex
  const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

  // Find matches
  const urls = fileString.match(urlRegex);
  if (!urls.length) throw 'No urls found.';

  // Print all matches
  urls.forEach(url => console.log(url));

} catch(err) {
  console.log(err.message);
}
