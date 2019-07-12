const code = `let name = 'Bob'

function toUpper (name) {
  name = name.toUpperCase() // name inside the function is a COPY of the string passed in
  
  return name // This returns the updated COPY
}

console.log(\`toUpper(name) yields \${toUpper(name)}\`)
console.log(\`But name is still \${name}\`)

name = name.toUpperCase() // Why we don't use "let"

console.log(\`But now it isn't: \${name}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
