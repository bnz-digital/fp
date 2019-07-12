const code = `const name = 'Bob'

function toUpper (name) {
  return name.toUpperCase()
}

console.log(\`toUpper(name) yields \${toUpper(name)}\`)
console.log(\`But name is still \${name}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
