const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error('usage: extractlinks inputfile');
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) return console.log(err);

  printLinks(findMatches(data));
});

// Set up regex

const urlParser = /(https|http)\:\/\/[a-zA-Z0-9.\/-]+[\.][a-zA-Z0-9.\/-]+/gi;

// Find matches

const findMatches = data => {
  return data.match(urlParser);
};

// Print all matches

const printLinks = links => {
  links
    .reduce((res, link) => (res.includes(link) ? res : res.concat(link)), [])
    .forEach((link, i) => console.log(`${i + 1}: ${link}`));

  console.log(`${links.length} total URLs found`);
};
