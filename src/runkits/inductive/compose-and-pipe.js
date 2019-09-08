const code = `import { __, add, compose, divide, multiply, pipe, subtract } from 'ramda'

// The hard-to-read way
const doTheMathNested = x => divide(
  multiply(
    9,
    subtract(
      20,
      add(5, x)
    ),
  ),
  60
)

// add and multiply are commutative, so ordering of parameters doesn't matter
// subtract and divide are not cummutative, so ordering counts
// Here we want to divide our number by 60, not divide 60 by it, so we need the __ placeholder
// compose runs right to left, which is more traditional, but possibly harder to read
const doTheMathByCompose = compose(
  divide(__, 60),
  multiply(9),
  subtract(20),
  add(5)
)

// pipe runs left to right, which may be easier to comprehend
const doTheMathByPipe = pipe(
  add(5),
  subtract(20),
  multiply(9),
  divide(__, 60)
)

// ((20 - (7  + 5)) * 9) / 60
console.log(\`doTheMathNested(7) is \${doTheMathNested(7)}\`)
console.log(\`doTheMathByCompose(7) is \${doTheMathByCompose(7)}\`)
console.log(\`doTheMathByPipe(7) is \${doTheMathByPipe(7)}\`)
console.log(\`((20 - (7  + 5)) * 9) / 60 is \${((20 - (7  + 5)) * 9) / 60}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
