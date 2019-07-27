const code = `const add = (x, y) => x + y
const subtract = (x, y) => x - y
const evaluate = (f, x, y) => f(x, y)

// evaluate is a function promoting reuse
console.log(\`evaluate(add, 3, 2) yields \${evaluate(add, 3, 2)}\`)
console.log(\`evaluate(subtract, 3, 2) yields \${evaluate(subtract, 3, 2)}\`)

// A real world vanilla JS example
// Array.sort takes a comparator function that takes 2 parameters and returns:
//   * a negative number if the second goes before the first
//   * zero if they are the same
//   * a positive number if the first goes before the second
console.log('Ascending sort', [3, 7, 1, 9, 4].sort((a, b) => a - b))
console.log('Descending sort', [3, 7, 1, 9, 4].sort((a, b) => b - a))

// We can do more than that: how about sorting strings by length
// rather than alphabetically?
console.log(
  'By length',
  ['red', 'green', 'blue'].sort((a, b) => a.length - b.length)
)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
