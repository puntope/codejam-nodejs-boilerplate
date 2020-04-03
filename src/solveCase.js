const solveCase = (lines = []) => {
    let data =  lines[0].toString();
    let numA = data.replace(/4/g, 1);
    let numB = data - numA;

    return `${numA} ${numB}`;

};

export default solveCase;