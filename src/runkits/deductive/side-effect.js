const code = `// This function depends on a side effect (AVOID THIS)
const displayName = name => console.log(\`My name is \${name}\`)

const result = displayName('Prateek') // Logs 'My name is Prateek' to the console

console.log(\`displayName('Prateek') returned \${result}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
