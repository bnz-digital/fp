const code = `import { map, toUpper } from 'ramda'

const colours = ['red', 'green', 'blue']

// Uppercase e's if length > 4
const longWordBigE = s => s.length > 4 ? s.replace(/e/g, 'E') : s

// Vanilla JS
const vjsUppers = colours.map(longWordBigE)

// The purely functional way with Ramda: pass the array
const ramdaUppers = map(longWordBigE, colours)

console.log(\`The uppercased colours by Array.map: [\${vjsUppers}]\`)
console.log(\`The uppercased colours by Ramda's map: [\${ramdaUppers}]\`)
console.log(\`Remember, the original array is unchanged: [\${colours}]\`)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
