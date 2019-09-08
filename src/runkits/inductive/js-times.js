const code = `import { identity, times } from 'ramda'

// Ramda's times takes a function and a number n
// Calls the function n times passing it 0, 1, 2, etc. (the index)
// identity is equivalent to x => x
console.log('times(identity, 5)', times(identity, 5))
console.log('times(n => (n + 1) * (n + 1), 5)', times(n => (n + 1) * (n + 1), 5))
console.log(\`times(() => '', 3)\`, times(() => '', 3))
console.log('times(n => n.toString(2), 12)', times(n => n.toString(2), 12))

// In vanilla JS, we can use the new keyword to instantiate an array and pass a length
console.log('new Array(5) has undefined values:', new Array(5))
console.log('new Array(5).map((_, i) => i) does not work:', new Array(5).map((_, i) => i))
console.log(\`new Array(5).fill('').map((_, i) => i) works:\`, new Array(5).fill('').map((_, i) => i))
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
