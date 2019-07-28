const code = `// Beauty, eh?
function pipe (f, ...fs) {
  if (fs.length < 1) { return f } // No tail? Return the function
  
  // Return a function that takes arguments
  // applies \`f\` to them, then passes that result
  // the the function returned from calling pipe
  // again on the remaining functions
  return (...args) => pipe(...fs)(f(...args))
}

// add is a function that takes x
// and returns a function that takes y
// adds it to x, and returns the sum
const add = x => y => y + x

// These work the same way
const subtract = x => y => y - x
const multiply = x => y => y * x
const divide = x => y => y / x

// Equivalent to \`y => ((((y + 5) - 7) * 10) / 4)\`
const doTheMath = pipe(add(5), subtract(7), multiply(10), divide(4))

console.log(\`doTheMath(12) is \${doTheMath(12)}\`)
console.log(\`((((12 + 5) - 7) * 10) / 4) is  \${((((12 + 5) - 7) * 10) / 4)}\`)
console.log('doTheMath(12) === ((((12 + 5) - 7) * 10) / 4)')
console.log(doTheMath(12) === ((((12 + 5) - 7) * 10) / 4))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
