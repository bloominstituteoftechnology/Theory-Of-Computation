const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err;
  processFile(data);
})

function processFile(content) {
  // Set up regex
  let reg = /(https?|http?):\/\/[\w./=-?]+\"/g;
  // Find matches
  let matched = content.match(reg);
  // Print all matches
  matched.forEach(match => console.log(match));
}



