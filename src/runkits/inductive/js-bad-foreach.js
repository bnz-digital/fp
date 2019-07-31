const code = `// EVIL! PURE EVIL!
// forEach is used only for side effects

const output = ['a', 'b', 'c'].forEach(
  (value, index, array) => {
    console.log(\`The value is \${value}\`)
    console.log(\`The index is \${index}\`)
    console.log(\`The array is [\${array}]\`)
  }
)

// How can forEach do anything if the result is undefined?
// Only by side effects. Ugh.
console.log(\`The output of Array.forEach is \${output}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
