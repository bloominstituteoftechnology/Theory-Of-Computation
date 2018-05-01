const fs = require("fs");

const args = process.argv.slice(2);

if (args.length != 1) {
  console.error("usage: extractlinks inputfile");
  process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME

// Read file
const fileContent = fs.readFileSync(filename, "utf-8");

// console.log(fileContent);

// Set up regex
let rgx = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

// Find matches
// let array1 = [];
// while ((array1 = rgx.exec(fileContent)) !== null) {
//   console.log(array1);
// }


const allMatch = fileContent.match(rgx)

allMatch.forEach((el) => {
  console.log(el)
})


//Part 1 done