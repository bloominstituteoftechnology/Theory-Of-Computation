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
  let reg = /[\W1]?(\d{3})[\W]?[\W]?(\d{3})[\W]?[\W]?[\W]?(\d+)/;
  // Find matches  
  /* For Debugging Purposes and Building the Script
    let testArr = [
      '555-123-4567',
      '5551234567',
      '(555) 123 - 4567',
      '555 123 4567'];
    If match found, print number with no spaces, parens, or dashes
    let returnArray = []
    testArr.forEach(item => {
      let extracted = item.match(reg)
      returnArray.push(extracted[1] + extracted[2] + extracted[3]);
    })
    console.log(returnArray);
  //End of Debugging Section*/
  let extracted = line.match(reg);
  if (extracted !== null) {
    console.log(`Area Code:\t${extracted[1]}\nPrefix:\t\t${extracted[2]}\nSuffix:\t\t${extracted[3]}`);
  } else {
    console.log("No USA Format Phone Number Found");
  }

  // Else print that no number was found
});
