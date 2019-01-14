const square = require('./square');

test('square(1) dovarie dar -1',() => {
    expect(square(1)).toBe(-1)
});
test('square(test) dovarie dar 16',() => {
    expect(square('test')).toBe(16)
});
test('square(1) dovarie dar -1',() => {
    expect(square(null)).toBe(-1)
});