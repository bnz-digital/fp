const code = `let name = 'Bob'

function toUpper (name) {
  name = name.toUpperCase()
  
  return name
}

console.log(\`toUpper(name) yields \${toUpper(name)}\`)
console.log(\`But name is still \${name}\`)

name = name.toUpperCase()

console.log(\`But now it isn't: \${name}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
