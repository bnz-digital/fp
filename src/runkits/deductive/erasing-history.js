const code = `let mutableDollars = 1 // Mutable binding

// Increment mutableDollars
mutableDollars += 1

console.log(\`mutableDollars is \${mutableDollars}, but what was it a moment ago?\`)
console.log('History has been lost')

const dollars = 1 // Cannot be reassigned (hence, immutable here)

// We can only make a new copy
const newDollars = dollars + 1

console.log(\`dollars is still \${dollars}; newDollars is \${newDollars}\`)
console.log('History is preserved')

try {
  dollars += 1 // Error!
} catch (e) {
  console.log(\`Can't reassign dollars: \${e}\`)
}`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
