const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

fs.readFile(filename, 'UTF-16le', (err, data) => {
  if (err) return;
  // Set up regex
  const regex = /(htt(p|ps)\:\/\/([\w\W][^"|']+))/g;
  // Find matches
  const links = data.match(regex);
  // Print all matches
  links.forEach(match => {
      console.log(match);
  });
});