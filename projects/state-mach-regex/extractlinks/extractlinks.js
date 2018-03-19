const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];
// !!!! IMPLEMENT ME

// Read file
let content;
content = fs.readFileSync('./stackoverflow.html','utf-8');
//Async version
// fs.readFile('./stackoverflow.html', (err,data) => {
//     if(err) throw err;
//     content = data;
//     processFile();
// })

// function processFile(){
    
// }

// Set up regex
const regex = /(https?):\/\/[0-9?a-z./=-]+/gi

// Find matches
let matchesArr = content.match(regex);
// Print all matches
for(let i = 0; i < matchesArr.length; i++){
    console.log(matchesArr[i])
}
