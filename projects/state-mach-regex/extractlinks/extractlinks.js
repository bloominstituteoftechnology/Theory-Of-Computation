const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error('usage: extractlinks inputfile');
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const file = fs.readFileSync(filename).toString();
// console.log(file)

// Set up regex
const links = file.match(/(http.+?\")/g);

console.log(links);

// Find matches
// const urls = [];
// links.forEach(link => {
//   const url = link.match(/(http.+?\")/g);
//   if (url) {
//     urls.push(url[0]);
//   }
// });

// // Print all matches
// console.log(urls);
