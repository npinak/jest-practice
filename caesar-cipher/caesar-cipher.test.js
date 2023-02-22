const CaesarCipher = require('./caesar-cipher');

let hello = "hello"

test('caesar-cipher', () => {
    expect(CaesarCipher(hello,1)).toMatch(/ifmmp/);
});