const code = `// The pure version
const addPure = (x, y) => x + y

console.log(\`First call to  \\\`addPure(2, 3)\\\`: \${addPure(2, 3)}\`)
console.log(\`Second call to  \\\`addPure(2, 3)\\\`: \${addPure(2, 3)}\`)

let x = 2 // Shared state: DON'T DO THIS!

// Our impure version depends on a variable outside its scope
const addImpure = y => x + y

console.log(\`\\\`x\\\` is \\\`2\\\`. Let's call \\\`addImpure(3)\\\`: \${addImpure(3)}\`)

x = 6

console.log(\`\\\`x\\\` is now \\\`6\\\`. Now let's call \\\`addImpure(3)\\\` again: \${addImpure(3)}\`)
console.log('Oops.')`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
