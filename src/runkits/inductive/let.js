const code = `// DO NOT DO ANY OF THIS. JUST DON'T.
try {
  // \`x\` does not yet exist so this will throw and Error
  console.log(\`x === \${x} (x is not declared)\`)
} catch (e) {
  console.log(e)
}

let x // declares x but does not assign a value

console.log(\`x === \${x} (\\\`x\\\` has been declared but not assigned a value)\`)

x = 7 // assigning the number 7 to x

console.log(\`x === \${x} (\\\`x\\\` is a number type)\`)

x = 'seven' // reassigning x to the string 'seven'

console.log(\`WTF? Now x === '\${x}' (\\\`x\\\` is a string type). Is that crazy or what?\`)`

const imports = ``

const requires = ``

const theme = 'dark'

export default {
  code,
  imports,
  requires,
  theme
}
