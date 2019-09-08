const code = `import { map } from 'ramda'

const nums = [1, 2, 3, 4, 5]

// Vanilla JS: map as a method on array
const vjsSquares = nums.map(x => x * x)

// The purely functional way with Ramda: pass the array
const ramdaSquares = map(x => x * x, nums)

console.log(\`The squares by Array.map: \${JSON.stringify(vjsSquares)}\`)
console.log(\`The squares by Ramda's map: \${JSON.stringify(ramdaSquares)}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
