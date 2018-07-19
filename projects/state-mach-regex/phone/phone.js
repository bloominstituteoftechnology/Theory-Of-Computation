var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

  // !!!! IMPLEMENT ME

  // Come up with the phone regex
  const regx = /(\d{3})[\W]?[\W]?(\d{3})[\W]?(\d{4})/g;  // finds digits in groups of 3 3 4 for area prefix and suffix

  // Find matches
  const match = line.match(regx);
  console.log('match --> ', match[0]);
  // If match found, print number with no spaces, parens, or dashes
  if (match) {
    let nums = match[0].trim().replace(/[\(\)\- ]/g, "");  //replaces ( ) - and ' ' -> spaces with "" -> no spaces
    console.log('nums --> ', nums);
    let area = nums[0] + nums[1] + nums[2];
    let Prefix = nums[3] + nums[4] + nums[5];
    let Suffix = nums[6] + nums[7] + nums[8] + nums[9];

    console.log(`Area Code: ${area}`)
    console.log(`Prefix: ${Prefix}`)
    console.log(`Suffix: ${Suffix}`)
  }
  // Else print that no number was found
  else {
    console.log("No number on this line");
  }
});