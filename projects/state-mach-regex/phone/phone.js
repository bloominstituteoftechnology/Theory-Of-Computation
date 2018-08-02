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
    const regex = /([0-9]{10})|(\D*[0-9]{3}\D*[0-9]{3}\D*[0-9]{4})/g;
    
    // Find matches
    let answer = line.match(regex);
    
    // If match found, print number with no spaces, parens, or dashes
    if(answer) {
      answer = answer.toString();
      answer = answer.replace(/\D*/g, '');
      areaCode = answer.substring(0,3)
      prefix = answer.substring(3,6)
      suffix = answer.substring(6,9)
      console.log(`Area code: ${areaCode}\nPrefix: ${prefix} \nSuffix: ${suffix}`)
    } else {
      console.log('No number was found!')
    }

    // Else print that no number was found
});
