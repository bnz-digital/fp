const code = `const { map, reduce } = require('ramda')

// As with map, we take a function and an array to apply it to
const reduceMap = (f, arr) => reduce(
  (acc, v) => ([...acc, f(v)]),  // Apply the function to each item in turn
  [],                            // Start with an empty new array
  arr                            // Loop through the original array
)

const nums = [1, 2, 3, 4, 5]

const oldSquares = map(x => x * x, nums)
const squares = reduceMap(x => x * x, nums) // Works the same way

console.log('The squares using map:', oldSquares)
console.log('The squares using our reduceMap:', squares)
console.log('And nums remains unchanged:', nums)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
