import processCase from './processCase';
const readline = require('readline');
let lineNumber = 0;

export async function readCases() {

  const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (lineNumber) {
      processCase(lineNumber, line);
    }
    lineNumber++;
  }
}

export default readCases;
