const code = `// DON'T DO THIS EITHER
const nums = [1, 2, 3, 4, 5]
const len = nums.length

let sum = 0 // Ugh

for (i in nums) {
  // console.log(typeof i) // uncomment this for a surprise
  sum += nums[i] // i is the INDEX -- ick!
}

console.log(\`The sum is \${sum}\`) // Working, but definitely not intuitive`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
