const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const filename = args[0] || 'stackoverflow.html';
console.log(filename, args)
// const rf = args[1].toString();
// !!!! IMPLEMENT ME
// Read file
const filePath = path.join(__dirname, (filename));
const rf = fs.readFileSync(filePath, { encoding: 'utf-8' }, (error, file) => {
    if (error) throw error;
    else {
        return file.toString();
    }
});

// Set up regex
const reg = /(https?:\/\/[^\\'"\>\}\)\]\s]+?\.[^\\'"\>\}\)\]\s]+)/g;
// Find matches
console.log(rf.match(reg));
// Print all matches
