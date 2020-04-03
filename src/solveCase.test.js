import solveCase from "./solveCase";

const tests = [
   [[4],'1 3'],
   [[940],'910 30'],
   [[4444],'1111 3333'],
];

for (let i = 0; i < tests.length; i++) {
    test(`${tests[i][0].join(' ')} is equal to ${tests[i][1]}`, () => {
        expect(solveCase(tests[i][0])).toBe(tests[i][1]);
    });
}