const code = `// DON'T DO THIS EITHER
const nums = [1, 2, 3, 4, 5]
const len = nums.length

let sum = 0 // Ugh

for (num in nums) {
  sum += num // Sum is still a mutant!
}

console.log(\`The sum is \${sum}\`) // Oh, look what happened here!`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
