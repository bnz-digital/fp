const code = `import { zip } from 'ramda'

const digits = [1, 2, 3, 4, 5, 6]
const numerals = [
  'one', 'two', 'three', 'four', 'five'
]

// Ramda's zip zips while elements exist in both arrays and drops extras
console.log('zip(digits, numerals)', zip(digits, numerals))
console.log('zip(numerals, digits)', zip(numerals, digits))

// Implementing this is vanilla JS is no mean feat
// Behold the power of reduce!
const vjsZip = (left, right) => left.reduce(
  (acc, val, idx) => right[idx]    // If there is an equivalent element in right
    ? [...acc, [val, right[idx]]]  // zip left and right together
    : acc,                         // else return the accumulator unchanged
  []
)

console.log('vjsZip(digits, numerals)', vjsZip(digits, numerals))

console.log('vjsZip(numerals, digits)')
vjsZip(numerals, digits)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
