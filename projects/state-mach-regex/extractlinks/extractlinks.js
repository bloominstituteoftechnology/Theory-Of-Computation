const fs = require('fs');

const args = process.argv.slice(2);


const filename = args[0];
if (args.length != 1) {
    console.log(args);
    console.error("usage: Error extractlinks inputfile");
    process.exit(1);
}
// !!!! IMPLEMENT ME

// Read file
let fe = fs.readFileSync(filename, 'utf8');
// Set up regex
const re = /.+/g
// Find matches
const navLink = file.match(re);

// Print all matches
navLink.forEach(element => {
    console.log(element);
});



