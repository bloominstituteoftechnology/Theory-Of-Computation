const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
// fs.readFile(filename, "utf8", (err, data) => {
//     if (err) {
//         throw err;
//     }
//     // Set up regex
//     let regexToken = /(?:ht|f)tps?:\/\/[-a-zA-Z0-9.]+\.[a-zA-Z]{2,3}(\/[^"<]*)?/g;
//     // Find matches
//     data
//       .split("\n")
//       .map(file => {
//         file.match(regexToken);
//       })
//       .filter(link => link)
//       .reduce((links, current) => {
//         links.concat(current);
//       })
//       // Print all matches
//       .forEach(link => {
//         console.log(link);
//       });
// });

// !!!! IMPLEMENT ME

// Read file
const reader = fs.readFileSync(filename, 'utf8');

// Set up regex
const regex = /https?:\/\/[^\\'">\s]+?\.[^\\'">\s]+/g;

// Find matches
const matches = reader.match(regex);
// Print all matches

for (let url of matches) {
    console.log(url);
}






// fs.readFile(filename, "utf8", (err, data) => {
//   if (err) throw err;

//   // Set up regex
//   const re = /https?:\/\/[^"]+(?=")/g;

//   // Find matches
//   data
//     .split("\n") // Get lines
//     .map(datum => datum.match(re)) // Array of arrays (matches for each line)
//     .filter(link => link) // Remove nulls
//     .reduce((links, cur) => links.concat(cur)) // Merge results (some lines have multiple matches)
//     .forEach(link => console.log(link)); // Print links
// });