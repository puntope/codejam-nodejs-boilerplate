import solveCase from './solveCase';

const processCase = (line = null, testNumber) => {
  console.log(`Case #${testNumber}: ${solveCase(line)}`);
};

export default processCase;
