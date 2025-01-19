const script = require('./script')

test('Capitalizes word', () => {
    expect(script.capitalize('word')).toBe('WORD')
})
test('Capitalizes apple', () => {
    expect(script.capitalize('applE')).toBe('APPLE')
})
// test('Throws an error when argument is not a string', () => {
//     expect(script.capitalize(1)).toThrow()
// })

test('Reverses "Word"', () => {
    expect(script.reverseString('Word')).toBe('dorW')
})

test('Adds 2 + 3', () => {
    expect(script.calc.add(2, 3)).toBe(5)
})
test('Subtracts 2 - 3', () => {
    expect(script.calc.sub(2, 3)).toBe(-1)
})
test('Multiplies 2 * 3', () => {
    expect(script.calc.mult(2, 3)).toBe(6)
})
test('Divides 10 / 4', () => {
    expect(script.calc.divide(10, 4)).toBe(2.5)
})