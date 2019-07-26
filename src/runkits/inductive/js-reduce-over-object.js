const code = `const { keys, reduce, toUpper } = require('ramda')

// Takes same three parameters as reduce, but last is an object
const reduceOverObject = (f, acc, obj) => reduce(
  (a, key) => f(a, key, obj[key]), // function passed gets value as third parameter
  acc,
  keys(obj)
)

const bob = {
  name: 'Bob',
  age: 'indeterminate',
  iq: 180,
  speaksFrench: true
}

// Now takes the value as a third parameter
const upcaseStrings = (acc, key, value) => ({
  ...acc,                          // copy current accumulator
  [key]: typeof value === 'string' // add this key-value pair
    ? toUpper(value)               // uppercase if string
    : value                        // otherwise, pass unchanged
})

const upcased = reduceOverObject(upcaseStrings, {}, bob)

console.log('Ramda result:', upcased)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
