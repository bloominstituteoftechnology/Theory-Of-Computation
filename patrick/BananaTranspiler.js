'use-strict';
/* eslint no-console: 0 */

const process = require('process'); // <~~~ Not needed, just making linter happy

/* 1. script name to be read in from node argument value
 * e.g. node BananaTranspiler.js BananaScript.bnf */
const bnfScriptName = process.argv[2];
console.log(bnfScriptName);
