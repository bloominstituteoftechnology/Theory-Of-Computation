'use-strict';
/* eslint no-console: 0 */
const process = require('process'); // <~~~ Not needed, just making linter happy
const fs = require('fs');
const os = require('os');

/* 1. Read "BananaScript.bnf" file from an argument to a node program BananaTranspiler.js
 * script name to be read in from node argument value
 * e.g. node BananaTranspiler.js BananaScript.bnf */
const bnfScriptName = process.argv[2];
console.log(`1. File to be ingested and parsed: "${bnfScriptName}"`);

/* 2. Read each line of file, separating by tokens, that is: stuff in <>, :=, |
 * read in file contents, separating each line into an array of strings */
const bnfScript = fs.readFileSync(bnfScriptName, 'utf8').split(os.EOL);
console.log('2. Array containing each line from text file:\n', bnfScript);
/* ...separating by tokens, that is: stuff in <>, :=, | */

/* 3. Put the tokens from the read into a hash table "BNF_table" by the left side of the line delimited by := */
console.log('3. TO BE DONE');
/* 4. Read "BananaScript.bs" file containing custom bananascript programming language */
const bananaScript = fs.readFileSync('./BananaScript.bs', 'utf8').split(os.EOL);
console.log('4. Array containing each line from text file:\n', bananaScript);

/* 5. Parse it using a pushdown automata and accumulate the results into a string variable program */
console.log('5. TO BE DONE');

/* 6. let bananascript_executable = eval(program); */
console.log('6. TO BE DONE');

/* 7. program(); */
console.log('7. TO BE DONE');
