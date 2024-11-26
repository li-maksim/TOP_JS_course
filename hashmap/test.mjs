import { HashMap } from "./hash.mjs"

const test = new HashMap(0.75, 16) // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('jacket', 'red')
// test.set('moon', 'silver')

// console.log(test.buckets)
console.log(test.get('hat'))