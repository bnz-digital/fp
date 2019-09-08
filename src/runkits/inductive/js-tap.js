const code = `import { __, add, curry, map, pipe, reduce, tap } from 'ramda'

const binaries = ['1', '100', '1001', '10000', '11001']

// We can curry the JS parseInt function
// Then partially apply it by supplying the second parameter
// parseBinary takes a binary number string and converts it to an integer
const parseBinary = curry(parseInt)(__, 2)

// We can use tap to log out the value at any point in the pipe
// THIS IS A SIDE EFFECT! DO NOT USE tap TO CHANGE STATE!
const sumBinary = pipe(
  tap(console.log),
  map(parseBinary),    // map the binary strings to integers
  tap(console.log),
  map(Math.sqrt),      // map the integers to their square roots
  tap(console.log),
  reduce(add, 0),      // add the square roots up to get the sum
  tap(console.log),
  n => n.toString(2),  // convert the integer sum to a binary number string
  tap(console.log)
)

console.log(\`binaries is [\${binaries}]\`)
console.log('Tapping the pipe:')

const sum = sumBinary(binaries)

console.log('Pipe complete')
console.log(\`The sum of the squares of the binaries is binary \${sum}\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
