const code = `function sum (nums = []) {
  if (nums.length < 1) { return 0 }

  const [head, ...tail] = nums
  
  const total = sum(tail) // no different from our other version, really
  
  console.log(\`Adding \${head} to \${total} (non-tail).\`)

  return head + total
}

console.log(\`sum([1,2,3,4,5]) is \${sum([1,2,3,4,5])}\`)

function tailSum (nums = [], total = 0) {
  if (nums.length < 1) {
    return total
  }

  const [head, ...tail] = nums

  console.log(\`Adding \${head} to \${total} (tail version).\`)
  
  return tailSum(tail, total + head) 
}

console.log(\`tailSum([1,2,3,4,5]) is \${tailSum([1,2,3,4,5])}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
