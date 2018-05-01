var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// let rgx = new RegExp(/[0-9]/g);

console.log("Enter your phone number");

// This code reads a line at a time from stdin
rl.on("line", (line) => {
  // console.log("this is what i typed",line);
  let rgx = new RegExp(/[0-9]/g);
  const works = line.toString().match(rgx).join('');
  console.log("Your phone number should look like this:", works);
})
// !!!! IMPLEMENT ME
// Come up with the phone regex
// let rgx = new RegExp(/[0-9]/g);


// const allMatch = rl.match(rgx)
// // If match found, print number with no spaces, parens, or dashes
// allMatch.forEach((el) => {
//   console.log(el);
// });
// Else print that no number was found
