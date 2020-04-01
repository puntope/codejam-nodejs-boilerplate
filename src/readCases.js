import processCase from './processCase';
const fs = require('fs');
const readline = require('readline');
let lineNumber = 0;

export async function readCases() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (lineNumber) {
      processCase(line, lineNumber);
    }
    lineNumber++;
  }
}

export default readCases;
