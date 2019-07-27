const code = `// curryN takes the number of parameters and the function
const curryN = (n, f) => (...args) => // return a function that takes some arguments
  args.length === n  // if all the arguments have been supplied
    ? f(...args)     // then call the function with the args and return the result
    : curryN(
      n - args.length,
      (...newArgs) => f(...args, ...newArgs)
    )                // else recurse for the remaining arguments

const curry = f => curryN(f.length, f) // Create a closure on the number of parameters
  
// A function that takes 3 parameters
const uncurried = (x, y, z) => ([x, y, z])

// Try applying it without currying
console.log(\`uncurried(1, 2, 3) is \${JSON.stringify(uncurried(1, 2, 3))}\`)

// Oops
try {
  console.log(\`uncurried(1, 2)(3) is \${JSON.stringify(uncurried(1, 2)(3))}\`)
  console.log(\`uncurried(1)(2, 3) is \${JSON.stringify(uncurried(1)(2, 3))}\`)
  console.log(\`uncurried(1)(2)(3) is \${JSON.stringify(uncurried(1)(2)(3))}\`)
} catch (e) {
  console.log(\`Uh, oh: \${e}\`)
}

// Now let's try again, but with our function curried properly
const curried = curry((x, y, z) => ([x, y, z]))

// Everything works
console.log(\`curried(4, 5, 6) is \${JSON.stringify(curried(4, 5, 6))}\`)
console.log(\`curried(4, 5)(6) is \${JSON.stringify(curried(4, 5)(6))}\`)
console.log(\`curried(4)(5, 6) is \${JSON.stringify(curried(4)(5, 6))}\`)
console.log(\`curried(4)(5)(6) is \${JSON.stringify(curried(4)(5)(6))}\`)

// We can partially apply our function to create new functions
// that "remember" one or more arguments
const prependSeven = curried(7)
const prependSevenAndEight = prependSeven(8)
console.log(\`prependSevenAndEight(9) is \${JSON.stringify(prependSevenAndEight(9))}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
