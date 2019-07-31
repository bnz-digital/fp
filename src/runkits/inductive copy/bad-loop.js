const code = `// JUST DON'T DO THIS!
const nums = [1, 2, 3, 4, 5]
const len = nums.length

let sum = 0 // DON'T DO THIS!

for (let i = 0; i < len; i++) {
  sum += nums[i] // Sum is a mutant!
}

console.log(\`The sum is \${sum}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
