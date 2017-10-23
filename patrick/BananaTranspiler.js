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
const bananaScriptExecFile = process.argv[3]


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
let grammar = {};
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
    let existingExpansion = grammar[token];
    if(existingExpansion === undefined) {
      grammar[token] = newExpansions;
    }
    else {
      existingExpansion.push(newExpansions);
    }
  }
  else {
    grammar[previousToken].push(newLine[0].trim());
  }
}
console.log('This is the table of tokens: ');
console.log(grammar);


/******************************************************************************
 * 4. Read arg for exec bananascript
 * custom bananascript programming language
 ******************************************************************************/
console.log(bananaScriptExecFile);
const bananaScript = fs.readFileSync(bananaScriptExecFile, 'utf8').split(os.EOL);
// console.log('4. Array containing each line from text file:\n', bananaScript);
let bananaSplit = [];
for (let i = 0; i < bananaScript.length; i++){
  bananaSplit.push(bananaScript[i].trim().split(' '));
}
bananaSplit = bananaSplit.reduce((prev, current) => {
  return prev.concat(current);
});
let bananaProgramLexxed = bananaSplit;

// JS to BS Transpilation Table:
let js2bsTranspilationTable = {
  '<type>' : 'let %s be %s',
  '<eq>' : '==',
  '<gt>' : '>',
  '<lt>' : '<'
}


/******************************************************************************
 * 5. Parse it using a pushdown automata and accumulate
 * the results into a string variable program
 * LL(1) parser
 ******************************************************************************/

let findTokenOrTerminalInBNF = (tokenOrTerminal, bnf) => {
  let bnfKeys = Object.keys(bnf);
  let result = undefined;
  bnfKeys.forEach((key) => {
    let currentExpansion = bnf[key];
    console.log(currentExpansion);
    currentExpansion.forEach((token) => {
      console.log(token);
      let isInExpansion = token.indexOf(tokenOrTerminal);
      if(isInExpansion >= 0) {
        console.log("\n\n\n");
        console.log("Found the token in:");
        console.log("{" + key + ": " + token + "}");
        console.log("\n\n\n");
        result = {key:key, token:token};
      }
    });
  });
  console.log(result);
  return result;
}

console.log('Parse via LL(1)');
// Prepping for parse process
let output = "";
let pda = [];
bananaProgramLexxed = bananaProgramLexxed.reverse();
let exitLoop = false;
while(bananaProgramLexxed.length > 0) {
  console.log("/*********************************");
  console.log(" * Processing the next token in program!");
  console.log(" *********************************/");
  let current = bananaProgramLexxed.pop();
  console.log("Currently parsing: " + current);
  let foundTokenOrTerminal = findTokenOrTerminalInBNF(current, grammar);
  if(foundTokenOrTerminal === undefined) {
    console.log("Syntax Error on " + current);
    process.exit();
  }
  // if foundTokenOrTerminal = undefined
  // Syntax Error! Unknown Symbol on line xxx
  pda.push(foundTokenOrTerminal);
  if(pda.length === 1) {
    console.log('Only one candidate for this expression, lets do LR(1) to map it, then add to program');
    let currentToken = pda.pop();
    console.log(bananaProgramLexxed);
    if(currentToken.key === "<type>") {
      let name = bananaProgramLexxed.pop();
      // try to cast name[0] into a character, if it fails, syntax error via
      // javascript
      let be = bananaProgramLexxed.pop();
      if(be !== 'be') {
        console.log("BananaScript Invalid Syntax: make must be `make name be value`");
        console.log("Exiting transpilation...");
        process.exit();
      }
      let value = bananaProgramLexxed.pop();
      // cast value to a number, if there's an error, cast value to a string
      // if there's an error, then quit as above

      let typeOutput = "let " + name + " = " + value + ";\n";
      output = output + typeOutput;
    }
    if(currentToken.key === "<while>") {
      let bananas = bananaProgramLexxed.pop();
      let name = bananaProgramLexxed.pop();
      let conditional = bananaProgramLexxed.pop();
      let foundConditionalTerminal = findTokenOrTerminalInBNF(conditional, grammar);
      let conditionalOutput = js2bsTranspilationTable[foundConditionalTerminal.key];
      let than = bananaProgramLexxed.pop();
      let value = bananaProgramLexxed.pop();
      let whileOutput = "while( " + name + conditionalOutput  + value + ") {";
      output = output + whileOutput;
    }
    if(currentToken.key  === "<end>") {
      output = output + '}';
    }
  }
}


/******************************************************************************
 * 6. let bananascript_executable = eval(program);
 ******************************************************************************/
console.log('6. TO BE DONE');
console.log(output);
console.log('\n');
console.log('\n');
eval(output);

console.log("What's left");
console.log(bananaProgramLexxed);

/******************************************************************************
 * 7. program();
 ******************************************************************************/
console.log('7. TO BE DONE');
