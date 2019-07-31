const code = `// We can declare a variable with let:
let x

// And then assign it:
x = 'let is evil'

// But let's not! (heh, heh)
console.log(\`\\\`x\\\` === '\${x}'\`)

// This does not work! And no, a semicolon won't save you.
// Uncomment the next line to see what happens. (Hint: it breaks)
// const y; y = 'We broken'

// Declare and assign at the same time
const z = 'We cool'

console.log(\`Assigning const when declaring works! \\\`z\\\` === '\${z}'\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
