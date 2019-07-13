const code = `// For the love of all that is sacred and true, DO NOT DO THIS!

// Do not let the evil "let" into your code!
// Be constant to "const"
let x = 'x'

function doEvil (y) {
  x = y // Aieeee!
}

console.log(\`Oh, look what doEvil returns: \${doEvil('y')}\`)

console.log(\`And x is now \${x}! Oh, the humanity!\`)
console.log(\`doEvil changed something other than through its result. That's just so wrong.\`)

// More evil!

let i = 1 // Global

function inc (n) {
  return n + i // Reaching out to the global. Ugh.
}

console.log(\`The inc function increments by 1: inc(5) is \${inc(5)}\`)

i = 5 // The global mutates. Ack!

console.log(\`Or does it: inc(5) is \${inc(5)}\`)
console.log('Calling inc(5) at different times got different results. Ack! No! No! No!')
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
