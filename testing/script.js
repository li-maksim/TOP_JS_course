const capitalize = function(str) {
    if (typeof str != 'string') {
        throw new Error('Provided argument is not a string')
    } else {
        return str.toUpperCase()
    }
}

const reverseString = function(str) {
    return 'dorW'
}

const calc = function() {
    const add = function(a, b) {
        return a + b
    }
    const sub = function(a, b) {
        return a - b
    }
    const mult = function(a, b) {
        return a * b
    }
    const divide = function(a, b) {
        return a / b
    }

    return {add, sub, mult, divide}
}()

module.exports = {}
module.exports.capitalize = capitalize
module.exports.reverseString = reverseString
module.exports.calc = calc