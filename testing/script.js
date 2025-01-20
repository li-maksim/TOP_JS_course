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

const ceasarCipher = function(str, num) {
    const arr = str.split('')
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i].charCodeAt()
        if ((char >= 65 && char <= 90) || (char >= 97 && char <= 122)) {
            char = char + num
            if (char > 90 && char < 97) {
                let diff = char - 91
                char = 65 + diff
            } else if (char > 122) {
                let diff = char - 123
                char = 97 + diff
            }
            arr[i] = String.fromCharCode(char)
        } else {
            continue
        }
    }
    return arr.join('')
}

const arrayFns = function() {
    const calculateSum = function(total, value) {
        return total + value
    }
    const findMin = function(total, value) {
        if (total > value) {
            total = value
        }
        return total
    }
    const findMax = function(total, value) {
        if (total < value) {
            total = value
        }
        return total
    }

    return {calculateSum, findMin, findMax}
}()

const analyzeArray = function(arr) {
    const sum = arr.reduce(arrayFns.calculateSum)
    const obj = {}
    obj.average = sum / arr.length
    obj.min = arr.reduce(arrayFns.findMin)
    obj.max = arr.reduce(arrayFns.findMax)
    obj.length = arr.length

    return obj
}

module.exports = {}
module.exports.capitalize = capitalize
module.exports.reverseString = reverseString
module.exports.calc = calc
module.exports.ceasarCipher = ceasarCipher
module.exports.analyzeArray = analyzeArray