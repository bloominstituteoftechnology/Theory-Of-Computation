const fs = require('fs');
const path = require('path');
const args = process.argv.slice(2);

if (args.length != 1) {
  console.error('usage: extractlinks inputfile');
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const printLinks = () => {
  fs
    .readFileSync(path.resolve(__dirname, filename))
    .toString()
    .split('\n')
    .forEach(line => {
      line = line.trim();
      const matches = line.match(/(https?:\/\/)(\w+[(\-\w)]+\.)+\w+/g);
      if (matches) {
        matches.forEach(match => {
          console.log(match);
        });
      }
    });
};
printLinks();
// // console.log(path.resolve(__dirname, filename).toString());
//
// // Set up regex
//
// // Find matches
//
// // Print all matches

// const fs = require('fs');
// const path = require('path');
//
// const args = process.argv.slice(2);
//
// if (args.length != 1) {
//   console.error('usage: extractlinks inputfile');
//   process.exit(1);
// }
//
// const filename = args[0];
//
// const run = () => {
//   let count = 0;
//   // Read file
//   fs
//     .readFileSync(path.resolve(__dirname, filename))
//     .toString()
//     .split('\n')
//     .forEach(line => {
//       line = line.trim();
//       // Find matches
//       // Set up regex
//       const match = line.match(
//         /((https:\/\/)|(http:\/\/))(\w+[(\-\w)]+\.)+\w+/g
//       ); // 172 matches
//       if (match !== null)
//         match.forEach(url => console.log(`${++count}: ${url}`)); // Print all matches
//     });
// };
//
// run();
