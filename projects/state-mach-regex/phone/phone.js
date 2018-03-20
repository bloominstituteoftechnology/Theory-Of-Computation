var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

/**
 * Takes a string and returns a string containing only the numbers found in the input string
 * @param {string} input
 * @returns {string}
 */
function extractNumbers(input) {
  return input.match(/\d/g).join('');
}

rl.on('line', function (line) {

    // !!!! IMPLEMENT ME
    
    // Come up with the phone regex
    const phoneRegex = /\(?[0-9]{3}\)?[- ]?[0-9]{3}[- ]?[0-9]{4}/g;
    // Find matches
    const numbers = line.match(phoneRegex) || [];
    // If match found, print number with no spaces, parens, or dashes
    if (numbers.length) console.log(extractNumbers(numbers[0]));
    // Else print that no number was found
    else console.log("No number found");
});
