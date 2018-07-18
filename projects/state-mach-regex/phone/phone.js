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

    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found

    number = '';
    for(i = 0; i < line.length; i++){
      if(line[i] != ' ' && line[i] != '-' && line[i] != '(' && line[i] != ')' && !isNaN(line[i])){
        number += line[i];
      }
    }
    if(number.length == 0){
      console.log('no number found');
    }
    else{
      console.log(number);
    }
});
