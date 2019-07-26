const code = `function sum (nums = []) {
  if (nums.length < 1) { return 0 }

  const [head, ...tail] = nums

  return head + sum(tail)
}`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
