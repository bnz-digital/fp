const code = `function mapSquares (nums = [], accumulator = []) {
  // When nums is empty, return the accumulated squares
  if (nums.length < 1) { return accumulator }

  // Get the head and tail
  const [head, ...tail] = nums
  
  // Append the square of the head and call again with the tail
  return mapSquares(tail, [...accumulator, head * head])
}

console.log(\`[] mapped to its squares is \${JSON.stringify(mapSquares([]))}\`)
console.log(\`[5] mapped to its squares is \${JSON.stringify(mapSquares([5]))}\`)
console.log(\`[1,2,3] mapped to its squares is \${JSON.stringify(mapSquares([1,2,3]))}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
