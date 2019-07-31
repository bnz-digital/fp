const code = `function addToN (n) {
  // This function takes an x and adds n to it
  // n is "remembered" even though addToN has returned and left scope
  return x => n + x
}

const addToFive = addToN(5)
const addToTen = addToN(10)

console.log(\`addToFive(3) is \${addToFive(3)}\`)
console.log(\`addToFive(8) is \${addToFive(8)}\`)
console.log(\`addToTen(17) is \${addToTen(17)}\`)
console.log(\`addToTen(1) is \${addToTen(1)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
