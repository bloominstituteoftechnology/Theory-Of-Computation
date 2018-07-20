var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on("line", function(line) {
  // !!!! IMPLEMENT ME

  // Come up with the phone regex
  const searchExpression = /[0-9]+/g;
  const regex = new RegExp(searchExpression);

  // Find matches
  if (line.match(regex)) {
    let phoneNumber = line.match(regex);
    // check if each section of phone number have right number of digits
    if (
      // if not: join all the string first
      phoneNumber[0].length !== 3 ||
      phoneNumber[1].length !== 3 ||
      phoneNumber[2].length !== 4
    ) {
      // slice out numbers
      let fixedNumber = [];
      phoneNumber = line.match(regex).join("");
      fixedNumber[0] = phoneNumber.slice(0, 3);
      fixedNumber[1] = phoneNumber.slice(3, 6);
      fixedNumber[2] = phoneNumber.slice(6, 10);
      // print
      console.log("\nPhone number:", `${fixedNumber[0]}-${ fixedNumber[1]}-${fixedNumber[2]}`)
      console.log("Area code: ", fixedNumber[0]);
      console.log("Prefix: ", fixedNumber[1]);
      console.log("Suffix: ", fixedNumber[2]);
    } else {
      // if all is good: just print them out
      console.log("\nPhone number:", `${phoneNumber[0]}-${ phoneNumber[1]}-${phoneNumber[2]}`)
      console.log("Area code: ", phoneNumber[0]);
      console.log("Prefix: ", phoneNumber[1]);
      console.log("Suffix: ", phoneNumber[2]);
    }
  } else {
    // ERROR
    console.log("Cannot process number");
  }
  // If match found, print number with no spaces, parens, or dashes
  // console.log(myNumber);
  // Else print that no number was found
});
