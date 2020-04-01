import solveCase from './solveCase';

const processCase = (testNumber, line = 'test') => {
  let solution = solveCase(line);
  console.log(`Case #${testNumber}: ${solution}`);
};

export default processCase;
