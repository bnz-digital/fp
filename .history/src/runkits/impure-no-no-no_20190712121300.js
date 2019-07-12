const code = `// For the love of all that is holy and pure, DO NOT DO THIS!

// Do not let the evil "let" into your code!
let x = 'x'

function doEvil (y) {
  x = y
}

doEvil('y')

console.log(\`x is now \${x}! Oh, the humanity!\`)
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
