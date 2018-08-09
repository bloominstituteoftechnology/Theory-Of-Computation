const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// !!!! IMPLEMENT ME
//const path = "stackoverflow.html";
// Read file
// const readData = fs.readFile(file, 'utf8');


//console.log(readData)

fs.readFile("stackoverflow.html", "utf8", (err, links) => {
  if (err) {
    return console.log("22", err);
  }
  // links is the data we are going to parse through
  // Set up regex
  console.log("2nd block")
    
  const regex = /https?:\/\/[^\\'">\s]+/ig;
    console.log("regex", regex)
  //I run the regex against my data using .match, and put it in a allLink variable
  // Find matches
  const allLinks = links.match(regex);
  // Print all matches
  console.log(allLinks);
});






