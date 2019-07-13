const code = `function sum (nums = []) {
  if (nums.length < 1) { return 0 } // If nums is empty, return 0

  const [head, ...tail] = nums // Get the head (first number) and the tail (remaining numbers)

  return head + sum(tail) // The function calls itself!
}

console.log('The sum of [] is:', sum([]))
console.log('The sum of [5] is:', sum([5]))
console.log('The sum of [1, 2, 3] is:', sum([1, 2, 3]))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
