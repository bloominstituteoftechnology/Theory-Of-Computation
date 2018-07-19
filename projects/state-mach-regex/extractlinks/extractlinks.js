const fs = require('fs')
const util = require('util')

const readFile = util.promisify(fs.readFile)

const args = process.argv.slice(2)

if (args.length != 1) {
  console.error('usage: extractlinks inputfile')
  process.exit(1)
}

const filename = args[0]

// !!!! IMPLEMENT ME

// Read file
async function getTheFile(filename) {
  return await readFile(filename)
}

// Set up regex
const regex = /<a.+(href=")(.+?)".+?>/g

// Find matches
function findMatches(str, regex) {
  return str.match(regex)
}

// Print all matches
async function doTheThing() {
  const fileContents = await getTheFile(filename).then(data => data.toString())
  console.log(findMatches(fileContents, regex))
}

doTheThing()
