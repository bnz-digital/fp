const code = `const { filter } = require('ramda')

const names = [
  'Bob', 'Carol', 'Ted', 'Alice', 'Samson', 'Delilah'
]

// Vanilla JS:
const vjsLongNames = names.filter(s => s.length > 4)

// Ramda:
const ramdaLongNames = filter(s => s.length > 4, names)

console.log('The longer names by Array.filter:', vjsLongNames)
console.log('The longer names by Ramda\\'s filter:', ramdaLongNames)
console.log('The original list is unchanged:', names)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
