const sum = require('../src/sum');
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
}); 
// file này  giúp chạy test cho hàm sum trong sum.js