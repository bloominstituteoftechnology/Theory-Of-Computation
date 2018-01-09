const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// This code reads a line at a time from stdin

rl.on("line", function(line) {
  const re = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;

  const phoneNum = line.match(re);

  if (phoneNum) {
    console.log(phoneNum[1] + phoneNum[2] + phoneNum[3]);
  } else {
    console.log("No phone number found");
  }
});
