const code = `function sum (nums = [], total = 0) {
  console.log(\`total is \${total}\`)

  if (nums.length < 1) {
    console.log(\`Returning the total of \${total}\`)
    return total
  }

  const [head, ...tail] = nums

  console.log(\`head is \${head} and tail is \${JSON.stringify(tail)}\`)

  console.log(\`Calling sum(\${JSON.stringify(tail)}, \${total + head})\`, '')

  return sum(tail, total + head)
}

console.log(\`The sum of [1, 2, 3, 4, 5] is \${sum([1, 2, 3, 4, 5])}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
