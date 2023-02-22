const capitalize = require('./capitalize');

let hello = "hello"

test('capitalize first letter', () => {
    expect(capitalize(hello)).toMatch(/Hello/);
});