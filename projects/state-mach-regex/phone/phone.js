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
  const regex = /([0-9}{10}]) | (\D*[0-9]{3}\D*[0-9]{3}\D*[0-9]{4})/g;
    
  let match = line.match(regex);

  if (match) {
    match = match.toString();
  match = match.replace(/\D*/g, '');
  console.log(match);
  }

  if (match === null) {
    console.log("Invalid phone number");
  }

    // Else print that no number was found
});
