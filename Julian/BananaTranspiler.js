const bananaTranspiler = require("./bananaScriptbnf.js");

/*
<expressions> := <expression+\>
<expression> := <type> <name> = <value>
                <while-loop>
                <print> <name>
                <print> <value>
                <embiggen> <value>
<while-loop> := <while> <conditional> | <expressions> \
<conditional> := <name> <lt> <value>
                 <name> <gt> <value>
                 <name> <eq> <value>
<type> := d_int | d_string | banana
<name> := d_string
<value> := integer or a string
<print> := 'console.log(<name>)' | 'console.log(<value>)'
<lt> := '<'
<gt> := '>'
<eq> := '='
<while> := 'go bananas  <conditional>'
make x be 5;

expressions < global js document
expression < javascript line like function but this includes none of that syntax
<type> <name> = <value>

*/
fs = require('fs');
os = require('os');
// os.EOL is the end of line character to help this work on different operating systems.

// fs.readFile('./BananaScript.bnf', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   const transpiler = {};
//   let temp;
//   const lines = data.split('\n');
//   lines.forEach((line, i) => {
//     const key = line.split(':=')[0].trim();
//     const value = line.split(':=')[1];
//     if (!value) transpiler[temp] = key;
//     else {
//       transpiler[key] = value;
//       temp = key;
//     }
//   });
//   console.log(transpiler);
// });
const bSFile = process.argv[2];
const bananaScriptFile = fs.readFileSync(bSFile, 'utf8').split(os.EOL);
console.log("BananaScriptFile: \n");
bananaScriptFile.forEach(line => {
  console.log(line);
})
console.log(bananaTranspiler(bananaScriptFile));


eval();