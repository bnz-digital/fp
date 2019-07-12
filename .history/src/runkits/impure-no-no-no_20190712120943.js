const code = `// For the love of all that is holy and pure, DO NOT DO THIS!

// Do not let the evil "let" into your code!
let x = 'x'

function doEvil (y) {
  x = y
}

doEvil('y')

console.log(\`x is \${x}. Ack! Kill me now!\`)
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
