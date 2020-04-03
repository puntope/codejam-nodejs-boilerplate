import processCase from './processCase';
const readline = require('readline');
let lineNumber = 0;
let linesPerCase = 1;
let linesToProcess = [];
let caseNumber = 0;

export async function readCases() {

  const rl = readline.createInterface({
    input: process.stdin,
    crlfDelay: Infinity
  });

  for await (const line of rl) {

    if (lineNumber) {
      linesToProcess.push(line);

      if (!(lineNumber % linesPerCase)) {
        processCase(caseNumber, linesToProcess);
        linesToProcess = [];
        caseNumber++;
      }
    }
    lineNumber++;
  }
}

export default readCases;
