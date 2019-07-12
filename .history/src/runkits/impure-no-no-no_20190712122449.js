const code = `// For the love of all that is holy and pure, DO NOT DO THIS!

// Do not let the evil "let" into your code!
let x = 'x'

function doEvil (y) {
  x = y
}

console.log(\`Oh, look what doEvil returns: \${doEvil('y')}\`)

console.log(\`And x is now \${x}! Oh, the humanity!\`)
console.log('doEvil changed something other than through its result. That\'s is just so wrong.')

// More evil!

let i = 1

function inc (n) {
  return n + i
}

console.log(\`The inc function increments by 1: inc(5) is \${inc(5)}\`)

i = 5

console.log(\`Or does it: inc(5) is \${inc(5)}\`)
console.log('Calling inc(5) at different times got different results. Ack!')
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
