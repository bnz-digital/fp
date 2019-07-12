const code = `function add (x, y) {
  return x + y
}

console.log('Does 5 + 7 equal 12?', add(5, 7) === 12 ? 'Yes!' : 'No')
console.log('Is 5 + 7 still 12?', add(5, 7) === 12 ? 'Yes!!' : 'No')
console.log('What about now?', add(5, 7) === 12 ? 'Yes, still 12! Unbelievable! Who knew?' : 'Uh, oh')
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
