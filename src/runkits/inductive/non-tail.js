const code = `// Not the best way to go about this, usually
function sum (nums = []) {
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
