const code = `function getColour (a, b) {
  if (a && b) { return 'blue' }
  
  if (a) { return 'cyan' }
  
  if (b) { return 'magenta' }
  
  return 'white'
}

console.log(\`getColour(true, true) is \${getColour(true, true)}\`)
console.log(\`getColour(true, false) is \${getColour(true, false)}\`)
console.log(\`getColour(false, true) is \${getColour(false, true)}\`)
console.log(\`getColour(false, false) is \${getColour(false, false)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
