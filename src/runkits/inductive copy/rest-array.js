const code = `// The rest syntax is used to collect multiple values to a single variable:
const [x, ...xs] = [1, 2, 3, 4, 5]

console.log(\`\\\`x\\\` === \${x}\`)
console.log(\`\\\`xs\\\` === \${JSON.stringify(xs)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
