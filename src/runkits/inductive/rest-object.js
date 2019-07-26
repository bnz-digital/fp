const code = `const {
  colour, ...rest
} = {
  colour: 'pink',
  food: 'Tiramisu',
  show: 'Game of Thrones',
  song: 'Swimming Pools (Drank)'
}

console.log(\`\\\`colour\\\` === \${colour}\`)
console.log(\`\\\`rest\\\` === \${JSON.stringify(rest)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
