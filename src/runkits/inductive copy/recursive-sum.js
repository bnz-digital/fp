const code = `function sum (nums = [], total = 0) {
  console.log(\`Total is \${total}\`)
  
  // If nums is empty, return the total to stop the loop
  if (nums.length < 1) {
    console.log(\`Returning the total of \${total}\`)
    
    return total
  }

  // Get the head (first number) and the tail (remaining numbers)
  // The tail must approach the base case above so the loop terminates
  const [head, ...tail] = nums

  console.log(\`Adding \${head} to \${total}\`)
  
  // The function calls itself with the remaining numbers and the new total
  return sum(tail, total + head) 
}

console.log(\`\u21AA The sum of [] is \${sum([])}\`)
console.log(\`\u21AA The sum of [5] is \${sum([5])}\`, '')
console.log(\`\u21AA The sum of [5, 7, 9] is \${sum([5, 7, 9])}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
