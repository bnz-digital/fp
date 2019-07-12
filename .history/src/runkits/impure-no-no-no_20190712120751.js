const code = `// For the love of all that is holy and pure, DO NOT DO THIS!

let x = 'x'

function breakEverything (y) {
  x = y
}

breakEverything('y')

console.log(\`x is \${x}\`)
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
