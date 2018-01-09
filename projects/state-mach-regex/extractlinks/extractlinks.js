const fs = require('fs');

const args = process.argv.slice(2);

if (args.length != 1) {
    console.error("usage: extractlinks inputfile");
    process.exit(1);
}

const filename = args[0];

// read file
const file = fs.readFileSync(filename).toString();
// console.log(file);

// create regex str
const myReStr = '(http|https)://([a-z])+.(com|net)+';
// const soReStr = '(http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?';
const soReStr = '(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])';

// let soRe = /(http|ftp|https):/ / ([\w_ -] + (?: (?: \.[\w_-]+)+)) ([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])/g;
let myRe = new RegExp(myReStr, 'g');
let soRe = new RegExp(soReStr, 'igm');

// find matches
// var links = file.match(myRe);
let links = file.match(soRe);

console.log(links.length);
// Print all matches
links.forEach(link => console.log(link));