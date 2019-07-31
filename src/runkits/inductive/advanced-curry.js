const code = `// Ramda's double underscore __ works like the _ in FP
const { __, curry } = require('ramda')

const doSomeArithmetic = curry((a, b, c, d) => a + b * c - d)

// This is da bomb!
console.log(\`doSomeArithmetic(10)(7)(5)(3) is \${doSomeArithmetic(10, 7, 5, 3)}\`)

// Arguments are supplied to the first empty parameter, so do observe ordering
console.log('doSomeArithmetic(__, __, __, 3)(10, 7, 5) is '
  + \`\${doSomeArithmetic(__, __, __, 3)(10, 7, 5)}\`)
console.log('doSomeArithmetic(__, 7, __, 3)(10, 5) is '
  + \`\${doSomeArithmetic(__, 7, __, 3)(10, 5)}\`)
console.log('doSomeArithmetic(__, __, __, 3)(10, __, 5)(7) is '
  + \`\${doSomeArithmetic(__, __, __, 3)(10, __, 5)(7)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
