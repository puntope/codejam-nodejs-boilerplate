import solveCase from "./solveCase";

test('4 is equal to 1 + 3', () => {
    expect(solveCase([4])).toBe('1 3');
});

test('940 is equal to 910 + 30', () => {
    expect(solveCase([940])).toBe('910 30');
});

test('4444 is equal to 1111 + 3333', () => {
    expect(solveCase([4444])).toBe('1111 3333');
});