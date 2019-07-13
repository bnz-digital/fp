const code = `function addToN (n) {
  // This function takes an x and adds n to it
  // n is "remembered" even though addToN has returned and left scope
  return x => n + x
}

const addToFive = addToN(5)
const addToTen = addToN(10)

console.log(\`3 + 5 is \${addToFive(3)}\`)
console.log(\`8 + 5 is \${addToFive(8)}\`)
console.log(\`17 + 10 is \${addToTen(17)}\`)
console.log(\`1 + 10 is \${addToTen(1)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
