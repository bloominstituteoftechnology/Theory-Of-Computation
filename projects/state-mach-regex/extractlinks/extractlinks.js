const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];


// !!!! IMPLEMENT ME

const data = fs.readFileSync(filename,  'utf8', function(err, data) {
    if (err) throw err
    console.log(data);
})


var string = "";
// regex
const url = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g

const regex = new RegExp(url)

console.log(regex)
// Read file

const file = data.match(regex);
// console.log(file)
// Print all matches
const count = 0

for (urls of file) {
    
    string += urls + "\n"
}
console.log(string)
console.log('count', count)
