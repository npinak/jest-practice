const analyzeArray = require('./analyzeArray'); //change


test('analyzeArray', () => {
    expect(analyzeArray([1,1,2,1])).toMatchObject({
        average:1.25,
        min: 1,
        max: 2,
        length: 4
    }); 
});