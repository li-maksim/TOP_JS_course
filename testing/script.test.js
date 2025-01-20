const script = require('./script')

// test('Capitalizes word', () => {
//     expect(script.capitalize('word')).toBe('WORD')
// })
// test('Capitalizes apple', () => {
//     expect(script.capitalize('applE')).toBe('APPLE')
// })
// // test('Throws an error when argument is not a string', () => {
// //     expect(script.capitalize(1)).toThrow()
// // })

// test('Reverses "Word"', () => {
//     expect(script.reverseString('Word')).toBe('dorW')
// })

// test('Adds 2 + 3', () => {
//     expect(script.calc.add(2, 3)).toBe(5)
// })
// test('Subtracts 2 - 3', () => {
//     expect(script.calc.sub(2, 3)).toBe(-1)
// })
// test('Multiplies 2 * 3', () => {
//     expect(script.calc.mult(2, 3)).toBe(6)
// })
// test('Divides 10 / 4', () => {
//     expect(script.calc.divide(10, 4)).toBe(2.5)
// })

// test('Turns "abc" into "def"', () => {
//     expect(script.ceasarCipher('abc', 3)).toBe('def')
// })

// test('Turns "ayz" into "dbc"', () => {
//     expect(script.ceasarCipher('ayz', 3)).toBe('dbc')
// })
// test('Turns "bbBX" into "eeEA"', () => {
//     expect(script.ceasarCipher('bbBX', 3)).toBe('eeEA')
// })
// test('Turns "Hello, world!" into "Khoor, Zruog!"', () => {
//     expect(script.ceasarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
// })

// test('Returns average', () => {
//     expect(script.analyzeArray([1, 2, 3, 4])).toBe(2.5)
// })
// test('Returns min', () => {
//     expect(script.analyzeArray([0, 2, 3, 1, -4])).toBe(-4)
// })
// test('Returns max', () => {
//     expect(script.analyzeArray([0, 2, 3, 1, -4])).toBe(3)
// })
// test('Returns length', () => {
//     expect(script.analyzeArray([0, 2, 3, 1, -4])).toBe(5)
// })
test('Returns object with right properties', () => {
    expect(script.analyzeArray([0, 2, 3, 1])).toEqual({
        average: 1.5,
        min: 0,
        max: 3,
        length: 4
    })
})