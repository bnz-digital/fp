const code = `const { map, toUpper } = require('ramda')

const colours = ['red', 'green', 'blue']

// Vanilla JS
const vjsUppers = colours.map(s => s.toUpperCase())

// The purely functional way with Ramda: pass the array
const ramdaUppers = map(toUpper, colours)

console.log(\`The uppercased colours by Array.map: [\${vjsUppers}]\`)
console.log(\`The uppercased colours by Ramda's map: [\${ramdaUppers}]\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
