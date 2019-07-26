const code = `function sum (nums = [], total = 0) {
  if (nums.length < 1) { return total } // If nums is empty, return the total

  const [head, ...tail] = nums // Get the head (first number) and the tail (remaining numbers)

  return sum(tail, total + head) // The function calls itself!
}

console.log(\`The sum of [] is \${sum([])}\`)
console.log(\`The sum of [5] is \${sum([5])}\`)
console.log(\`The sum of [1, 2, 3] is \${sum([1, 2, 3])}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
