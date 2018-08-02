const fs = require('fs');
const args = process.argv.slice(2);

if (args.length != 1) {
  console.error('usage: extractlinks inputfile');
  process.exit(1);
}

const filename = args[0];

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) return console.log('Error: Could not read file');
  const links = data
    .match(/\bhref=".*?"/gi)
    .filter(link => link !== 'href="#"')
    .map(link => link.replace('href="', '').replace('"', ''))
    .forEach(link => console.log(link));
});
