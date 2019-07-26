const code = `let name = 'Bob'

function toUpper (name) {
  // \`toUpperCase\` doesn't mutate in place, but returns a new string, as it should
  // Here we're overwriting the local \`name\` variable with an uppercase version
  name = name.toUpperCase()
  
  // We return the VALUE of the updated LOCAL variable
  // The outer \`name\` is unaffected
  return name 
}

console.log(\`toUpper(name) yields \${toUpper(name)}\`)
console.log(\`But name is still \${name}\`)

// Now let's mutate the outer variable
name = name.toUpperCase() // Why we don't use "let"

console.log(\`But now it isn't: \${name}. Oh, Bob!\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
