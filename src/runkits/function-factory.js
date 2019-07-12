const code = `function addToN (n) {
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
