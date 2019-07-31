const code = `const { head, tail } = require('ramda')

const nums = [1, 2, 3, 4, 5]

// In vanilla JS we can use Array.slice to get the head and tail:
const x = nums[0]
const xs = nums.slice(1)

console.log(\`x is \${x}\`)
console.log(\`xs is \${JSON.stringify(xs)}\`)
console.log('nums is unchanged:', nums)

// We can also use destructuring, which is often easier and clearer
const [y, ...ys] = nums

console.log(\`y is \${y}\`)
console.log(\`ys is \${JSON.stringify(ys)}\`)
console.log('nums is unchanged:', nums)

// Look what happens with an empty list:
const [z, ...zs] = []

console.log(\`z (the head of []) is \${z}\`)
console.log(\`zs (the tail of []) is \${JSON.stringify(zs)}\`)

// Ramda also offers head and tail functions
const r = head(nums)
const rs = tail(nums)

console.log(\`r is \${r}\`)
console.log(\`rs is \${JSON.stringify(rs)}\`)
console.log('nums is unchanged:', nums)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
