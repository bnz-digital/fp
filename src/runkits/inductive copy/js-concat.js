const code = `const { concat } = require('ramda')

const things = ['a', 'b', 'c']
const moreThings = ['d', 'e']
const andMore = ['f', 'g']

// Ramda's concat is easy peasy
console.log('concat(things, moreThings)', concat(things, moreThings))

// concat only takes two parameters
console.log('concat(moreThings, things, andMore)', concat(moreThings, things, andMore))

// The vanilla JS Array.concat is a bit trickier as you need to call
// it on one of the arrays: it is a method, after all
// But at least it RETURNS A COPY!
console.log('things.concat(moreThings)', things.concat(moreThings))
console.log('moreThings.concat(things)', moreThings.concat(things))

// The Array.concat method takes any number of arrays
console.log('things.concat(moreThings, andMore)', things.concat(moreThings, andMore))

// But we can easily create our own in vanilla JS
const vjsConcat = (left, right) => ([...left, ...right])
console.log('vjsConcat(things, moreThings)', vjsConcat(things, moreThings))
console.log('vjsConcat(moreThings, things, andMore)', vjsConcat(moreThings, things, andMore))

// Or make one that takes any number of arrays
const superConcat = (x, ...xs) => xs.length < 1
  ? x
  : [...x, ...superConcat(...xs)]

console.log('superConcat(things, moreThings, andMore)')
superConcat(things, moreThings, andMore)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
