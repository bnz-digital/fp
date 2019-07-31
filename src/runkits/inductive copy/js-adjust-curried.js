const code = `const { adjust, toUpper } = require('ramda')

const upcaseThirdElement = adjust(2, toUpper)

const names = [
  'Bob', 'Carole', 'Ted', 'Alice', 'Samson', 'Delilah'
]

const colours = [
  'red', 'yellow', 'green', 'cyan', 'blue', 'magenta'
]

console.log('Uppercase the third name:', upcaseThirdElement(names))
console.log('Uppercase the third colour:', upcaseThirdElement(colours))
console.log('The original lists are unchanged:', names, colours)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
