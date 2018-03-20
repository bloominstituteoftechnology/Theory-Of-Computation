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
    const re = /\(?\d+\)?[-.\s]?\d+[-.\s]?\d+/g;

    // Find matches
    const matchArr = line.match(re);

    // If match found, print number with no spaces, parens, or dashes
    if (matchArr !== null) {
      matchArr.forEach(item => {
        const array = item.split('');
        const result = array.filter(element => Number.isInteger(Number(element)) === true && element !== ' ');
        console.log(result.join(''));
      });
    } else {
      // Else print that no number was found
      console.log("No phone number was found!")
    }   
});
