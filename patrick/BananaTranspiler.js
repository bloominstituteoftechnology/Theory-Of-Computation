'use-strict';
/* eslint no-console: 0 */
const process = require('process'); // <~~~ Not needed, just making linter happy
const fs = require('fs');
const os = require('os');

/******************************************************************************
 * 1. Read "BananaScript.bnf" file from an argument to a node program
 * "BananaTranspiler.js"
 * Script name to be read in from node 3rd argument value
 * e.g. `$ node BananaTranspiler.js BananaScript.bnf`
 ******************************************************************************/
const bnfScriptFile = process.argv[2];
console.log(`1. File to be ingested and parsed: "${bnfScriptFile}"`);


/******************************************************************************
 * 2. Read each line of file...
 * read in file contents, separating each line into an array of strings
 * NOTE: should this file be entered as a fourth parameter?
 ******************************************************************************/
const bnfScriptOriginal = fs.readFileSync(bnfScriptFile, 'utf8').split(os.EOL);
console.log('2. Array containing each line from text file:\n', bnfScriptOriginal);
/* ...separating by tokens, that is: stuff in <>, :=, | */
for (let i = 0; i < bnfScriptOriginal.length; i++) {
  // remove white spaces and empty strings?
  // parse each string into components

}

/******************************************************************************
 * 3. Put the tokens from the read into a hash table
 * "BNF_table" by the left side of the line delimited by :=
 ******************************************************************************/
console.log('3. Put the tokens from the read into a hash table');
/* ...separating by tokens, that is: stuff in <>, :=, | */
let map = {};
let previousToken = undefined;
for (let i = 0; i < bnfScriptOriginal.length; i++) {
  // remove white spaces and empty strings?
  // parse each string into components
  const newLine = bnfScriptOriginal[i].split(":=");
  if(newLine[1] != undefined) { // there is a LHS and a RHS of the BNF rule
    let token = newLine[0].trim();
    previousToken = token;
    let newExpansions = newLine[1].split('|');
    newExpansions = newExpansions.map((exp) => {return exp.trim()});
    let existingExpansion = map[token];
    if(existingExpansion === undefined) {
      map[token] = newExpansions;
    }
    else {
      existingExpansion.push(newExpansions);
    }
  }
  else {
    map[previousToken].push(newLine[0].trim());
  }
}
console.log('This is the table of tokens: ');
console.log(map);


/******************************************************************************
 * 4. Read "BananaScript.bs" file containing
 * custom bananascript programming language
 ******************************************************************************/
const bananaScript = fs.readFileSync('./BananaScript.bs', 'utf8').split(os.EOL);
// console.log('4. Array containing each line from text file:\n', bananaScript);
let bananaSplit = [];
let carrotStrip;
for (let i = 0; i < bananaScript.length; i++){
  carrotStrip = bananaScript[i].replace(/</g, '').replace(/>/g, '');
  bananaSplit.push(carrotStrip.split(' '));
}
console.log(bananaSplit);

const stringObj = {
  1: 'd_string',
  2: 'let',
};

let jsString = '';

if (bananaSplit[0][0] === stringObj[1]) {
  console.log('Jesh doesnt share his cheap candy');
  // let newJS = jsString.concat(stringObj[2], );
  bananaSplit[0][0] = stringObj[2];
  console.log(bananaSplit);
}


/******************************************************************************
 * 5. Parse it using a pushdown automata and accumulate
 * the results into a string variable program
 ******************************************************************************/
console.log('5. TO BE DONE');


/******************************************************************************
 * 6. let bananascript_executable = eval(program);
 ******************************************************************************/
console.log('6. TO BE DONE');


/******************************************************************************
 * 7. program();
 ******************************************************************************/
console.log('7. TO BE DONE');
