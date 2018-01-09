var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


// This code reads a line at a time from stdin

rl.on('line', function (line) {
  // const myReStr = '\(?(\d{3})?\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})';

  // let myRe = new RegExp(myReStr, 'g');
  let myRe = /\(?(\d{3})\)?\s*-?\s*(\d{3})\s*-?\s*(\d{4})/g;

  let parsedNumArr = line.match(myRe);
  // console.log(parsedNumArr);

  let validNumArr = parsedNumArr[0].match(/\d/g);

  const finalNum = validNumArr.join('')
  // console.log(finalNum);
  if (finalNum.length !== 10) console.log('number must have 10 digits');
  
  else console.log(finalNum);
  
  // beejs solutions
  // const matches = line.match(myRe);
  // if (matches === null) {
  //   console.log("No phone number found");
  // } else {
  //   console.log(`${matches[1]}${matches[2]}${matches[3]}`);
  // }
});
