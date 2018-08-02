const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}
    
const filename = args[0];

// !!!! IMPLEMENT ME

var data = fs.readFileSync(filename);
//console.log("Synchronous read: " + data.toString());



// Read file

var boo = data.toString()
var regex = /href\s*=\s*(['"])(https?:\/\/.+?)\1/ig;

var myArray = boo.match(regex)

console.log(myArray[1])
// Set up regex

// Find matches

for( let i =0; i < myArray.length; i++){
    console.log(myArray[i].substr(5))
}


// Print all matches
