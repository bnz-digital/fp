const code = `const { adjust } = require('ramda')

const names = [
  'Bob', 'Carole', 'Ted', 'Alice', 'Samson', 'Delilah'
]

// Vanilla JS: let's create our own function
function vadjust (index, f, arr) {
  return [
    ...arr.slice(0, index),
    f(arr[index]),
    ...arr.slice(index + 1)
  ]
}

const vjsUpdatedNames = vadjust(1, () => 'Carol', names)

// Ramda's adjust
const ramdaUpdatedNames = adjust(1, () => 'Carol', names)

console.log('Update Carole to Carol by vanilla JS:', vjsUpdatedNames)
console.log('Update Carole to Carol by Ramda\\'s adjust:', ramdaUpdatedNames)
console.log('The original list is unchanged:', names)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
