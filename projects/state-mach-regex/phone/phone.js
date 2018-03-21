//https://regexr.com 
//https://www.regexpal.com
//https://forum.freecodecamp.org/t/freecodecamp-algorithm-challenge-guide-validate-us-telephone-numbers/16090
// https://www.youtube.com/watch?v=JB71tFPsm2s
//https://regexone.com/  -- good turorial
//https://regexcrossword.com

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
      regex = "/^(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/";
      
   
   telephoneCheck("555-555-5555");
    // Find matches
    return regex.test(str);
    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
