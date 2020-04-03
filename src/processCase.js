import solveCase from './solveCase';

const processCase = (testNumber, lines = []) => {
  let solution = solveCase(lines);
  console.log(`Case #${testNumber}: ${solution}`);
};

export default processCase;
