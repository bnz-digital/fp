const code = `import { curry } from 'ramda'

const doSomeArithmetic = curry((a, b, c, d) => a + b * c - d)

console.log(\`doSomeArithmetic(10, 7, 5, 3) is \${doSomeArithmetic(10, 7, 5, 3)}\`)
console.log(\`doSomeArithmetic(10, 7, 5)(3) is \${doSomeArithmetic(10, 7, 5, 3)}\`)
console.log(\`doSomeArithmetic(10, 7)(5, 3) is \${doSomeArithmetic(10, 7, 5, 3)}\`)
console.log(\`doSomeArithmetic(10)(7, 5, 3) is \${doSomeArithmetic(10, 7, 5, 3)}\`)
console.log(\`doSomeArithmetic(10, 7)(5)(3) is \${doSomeArithmetic(10, 7, 5, 3)}\`)
console.log(\`doSomeArithmetic(10)(7)(5, 3) is \${doSomeArithmetic(10, 7, 5, 3)}\`)
console.log(\`doSomeArithmetic(10)(7)(5)(3) is \${doSomeArithmetic(10, 7, 5, 3)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
