const code = `// With shared state, the order in which function calls are made
// changes the result of the function calls
const x = { value: 2 }

// These operate on the shared state x
const incrementX = () => x.value += 1
const doubleX = () => x.value *= 2

incrementX()
doubleX()

console.log(\`The value of x after increment then double is \${x.value}\`)

// Reset x
x.value = 2

// Run the functions in reverse order
doubleX()
incrementX()

console.log(\`The value of x after double then increment is \${x.value}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
