const code = `import { map } from 'ramda'

const squares = [1, 4, 9, 16, 25]

// Vanilla JS with the Array.map method
console.log('Array.map', squares.map(Math.sqrt))

// The Ramda map equivalent
console.log('Ramda map', map(Math.sqrt, squares))

// But the Ramda map is curried!
const mapSquareRoots = map(Math.sqrt)

console.log('[1, 4, 9, 16, 25]', mapSquareRoots([1, 4, 9, 16, 25]))
console.log('[36, 49, 64, 81, 100]', mapSquareRoots([36, 49, 64, 81, 100]))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
