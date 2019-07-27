const code = `// Impure functions (AVOID THESE!)
// This function yields a different result when called multiple times,
// hence it's not a pure function
const getRandomNumber = () => Math.random().toFixed(2)

console.log(\`First call impure: \${getRandomNumber()}\`)
console.log(\`Second call impure: \${getRandomNumber()}\`)

// Pure functions
// Calling this function with the same arguments yields the same result,
// even when called multiple times
const add = (x, y) => x + y

console.log(\`First call pure: \${add(2, 3)}\`)
console.log(\`Second call pure: \${add(2, 3)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
