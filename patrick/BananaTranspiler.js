'use-strict';
/* eslint no-console: 0 */
const process = require('process'); // <~~~ Not needed, just making linter happy
const fs = require('fs');
const os = require('os');


/* 1. script name to be read in from node argument value
 * e.g. node BananaTranspiler.js BananaScript.bnf */
const bnfScriptName = process.argv[2];
console.log(bnfScriptName);

/* 2. read in file contents, separating each line into an array of strings */
const bnfScript = fs.readFileSync(bnfScriptName, 'utf8').split(os.EOL);
console.log(bnfScript);
