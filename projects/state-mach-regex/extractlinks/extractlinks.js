const fs = require("fs");
const { promisify } = require("util");
const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

/**
 * removes the last character of a string and returns the result
 * @param {string} str
 * @returns {string} 
 */
function chopLast(str) {
  return str.slice(0, -1);
}

try {
  // Read file
  const fileString = fs.readFileSync(filename, { encoding: 'utf8' });
  
  // Set up regex
  const urlRegex = /https?[a-z]+:\/\/.+?"/g;

  // Find matches
  const urls = fileString.match(urlRegex);
  if (!urls.length) throw 'No urls found.';

  // Print all matches
  urls.forEach(url => console.log(chopLast(url)));

} catch(err) {
  console.log(err.message);
}
