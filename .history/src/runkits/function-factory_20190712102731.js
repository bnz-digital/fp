const code = `function addToN (n) {
  return x => n + x
}

const addToFive = addToN(5)
const addToTen = addToN(10)

console.log(\`3 + 5 is \${addToFive(3)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
