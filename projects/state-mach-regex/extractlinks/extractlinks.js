const fs = require('fs');

const args = process.argv.slice(2);
console.log(args);

if (args.length != 1) {
  console.error('usage: extractlinks inputfile');
  process.exit(1);
}

const filename = args[0];
console.log(filename);

// !!!! IMPLEMENT ME

// Read file
fs.readFile(`${filename}`, 'utf8', (err, data) => {
  err && console.log('Something went wrong rading the file.');
  // console.log('data', data);
  // Set up regex
  const regx = /http?s:\/\/[\w\./\-?@=&;%]+/g;
  // Find matches
  const matches = data.match(regx);

  // Print all matches
  for (let url of matches) {
    console.log(url);
  }
  console.log(matches.length);
});
