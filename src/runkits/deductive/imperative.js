const code = `// This is not a good way to do things
const nums = [1, 2, 3, 4, 5]
const square = x => x * x

let out = []

for (let i = 0; i < nums.length; i++) {
  out[i] = square(nums[i])
}

console.log('by for loop', out)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
