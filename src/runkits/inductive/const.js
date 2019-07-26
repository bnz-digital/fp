const code = `const x = 7

try {
  x = 'seven'
} catch (e) {
  console.log(\`Can't change the type of x: \${e}\`)
}

try {
  x = 3
} catch (e) {
  console.log(\`Can't change the value of x: \${e}\`)
}`

const imports = ``

const requires = ``

const theme = 'light'

export default {
  code,
  imports,
  requires,
  theme
}
