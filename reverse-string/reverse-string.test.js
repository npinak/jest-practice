const reverseString = require('./reverse-string');

let hello = "hello"

test('capitalize first letter', () => {
    expect(reverseString(hello)).toMatch(/olleh/);
});