const code = `function add (x, y) {
  return x + y
}

console.log('Is it 12?', add(5, 7) === 12 ? 'Yes!' : 'No')
console.log('Is it still 12?', add(5, 7) === 12 ? 'Yes!!' : 'No')
console.log('What about now?', add(5, 7) === 12 ? 'Yes, still 12! Amazing!' : 'Not 12')
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
