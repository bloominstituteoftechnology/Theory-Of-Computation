const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error('usage: extractlinks inputfile');
  process.exit(1);
}

const filename = args[0];
let html = '';
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) {
    return console.error(err);
  }
  let reg = /(?<=href=").*?(?=")/;
  const links = new RegExp(reg, 'g');

  console.log(data.match(links));

});

// !!!! IMPLEMENT ME

// Read file

// Set up regex

// Find matches

// Print all matches
