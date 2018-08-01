const fs = require('fs');
const escapeStringRegexp = require('escape-string-regexp');

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error('usage: extractlinks inputfile');
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const file = escapeStringRegexp(fs.readFileSync(filename).toString());

// Set up regex
const links = file.match(/(href.+\>)/g);

// Find matches
const urls = [];
links.forEach(link => {
  const url = link.match(/(http.+?\")/g);
  if (url) {
    urls.push(url[0]);
  }
});

// Print all matches
console.log(urls);
