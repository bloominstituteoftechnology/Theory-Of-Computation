var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {

  const digits = line.replace(/\D/g, '');
  if (digits === '') {
    console.log("No phone numbers were found");
  }

  const areaCode = digits.substring(0,3);
  const prefix = digits.substring(3,6);
  const suffix = digits.substring(6,10);

  console.log(`Area code: ${areaCode} \nPrefix: ${prefix} \nSuffix: ${suffix}`)


  // EXAMPLE SOLUTION
  // const regex = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/;

  // const matches = line.match(regex);

  // if(!matches) {
  //   console.log('No number found')
  // } else {
  //   console.log(`Area code: ${matches[1]} \nPrefix: ${matches[2]} \nSuffix: ${matches[3]}`)
  // }

});
