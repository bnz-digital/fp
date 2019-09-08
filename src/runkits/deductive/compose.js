const code = `import { add, compose, negate, pipe, sum } from 'ramda'

// compose applies the functions from  right to left
const compute = compose(
  negate,   // 3. Negate (= -25)
  add(10),  // 2. Add 10 (= 25)
  sum       // 1. Sum 1-5 (= 15)
)

console.log('Right to left', compute([1, 2, 3, 4, 5])) // -25

// pipe applies the functions from left to right
const computeAgain = pipe(
  sum,      // 1. Sum 1-5 (= 15)
  add(10),  // 2. Add 10 (= 25)
  negate    // 3. Negate (= -25)
)

console.log('Left to right', computeAgain([1, 2, 3, 4, 5]))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
