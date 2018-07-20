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
      console.log("\n\x1b[32mPhone number:\x1b[0m", `${fixedNumber[0]}-${ fixedNumber[1]}-${fixedNumber[2]}`)
      console.log("\x1b[33mArea code:\x1b[0m", fixedNumber[0]);
      console.log("\x1b[33mPrefix:\x1b[0m", fixedNumber[1]);
      console.log("\x1b[33mSuffix:\x1b[0m", fixedNumber[2]);
    } else {
      // if all is good: just print them out
      console.log("\n\x1b[32mPhone number:\x1b[0m", `${phoneNumber[0]}-${ phoneNumber[1]}-${phoneNumber[2]}`)
      console.log("\x1b[33mArea code:\x1b[0m", phoneNumber[0]);
      console.log("\x1b[33mPrefix:\x1b[0m", phoneNumber[1]);
      console.log("\x1b[33mSuffix:\x1b[0m", phoneNumber[2]);
    }
  } else {
    // ERROR
    console.log("Cannot process number");
  }
  // If match found, print number with no spaces, parens, or dashes
  // console.log(myNumber);
  // Else print that no number was found
});
