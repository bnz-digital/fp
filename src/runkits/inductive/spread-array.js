const code = `// The spread syntax is used to distribute multiple values from a collection:
const digits = [0, 1, 2, 3, 4, 5]
const moreDigits = [6, 7, 8, 9]

console.log(\`[...digits, ...moreDigits] === \${JSON.stringify([...digits, ...moreDigits])}\`)
console.log(\`[5, ...moreDigits] === \${JSON.stringify([5, ...moreDigits])}\`)
console.log(\`[...digits, 6, 7] === \${JSON.stringify([...digits, 6, 7])}\`)
console.log(\`[-1, ...digits, 6] === \${JSON.stringify([-1, ...digits, 6])}\`)

// We're making copies!
console.log(\`digits is not changed:\`, digits)
console.log(\`moreDigits is not changed:\`, moreDigits)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
