var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin
rl.on('line', function (line) {
  const regex = /(\(\d{3}\)\s)|(\d{3}|-|\s)|(\d*)/g;
  newnumber="";
  const match = line.match(regex);
  if(match !== null){
    const regextwo = /[0-9]/g;
    const matchtwo = line.match(regextwo);
    if(matchtwo !== null && matchtwo.length === 10){
      console.log(matchtwo.join(""));
    } else {
      console.error("US Phone Number not found!");
    }
  } else{
    console.error("US Phone Number not found");
  }
  
    // !!!! IMPLEMENT ME

    // Come up with the phone regex
    // Find matches

    // If match found, print number with no spaces, parens, or dashes

    // Else print that no number was found
});
