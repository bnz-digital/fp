const code = `const { add, reduce } = require('ramda') // add(1, 2) returns 3

const nums = [1, 2, 3, 4, 5]

// Vanilla JS
const vjsSum = nums.reduce(add, 0)

// Ramda
const ramdaSum = reduce(add, 0, nums)

console.log(\`The Array.reduce sum is \${vjsSum}\`)
console.log(\`The Ramda reduce sum is \${ramdaSum}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
