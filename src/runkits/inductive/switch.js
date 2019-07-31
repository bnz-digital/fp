const code = `const { sort } = require('ramda')

function selectComparator (type) {
  switch(type) {
    case 'DESC':
      return (a, b) => b - a
    case 'LENGTH_ASC':
      return (a, b) => a.length - b.length
    case 'LENGTH_DESC':
      return (a, b) => b.length - a.length
    default:
      return (a, b) => a - b
  }
}

const names = ['Bob', 'Carol', 'Ted', 'Alice', 'Samson', 'Delilah']

// Array.sort sorts in place mutating the array
// DO NOT USE THIS!
console.log('names is:', names)
console.log('names.sort() is', names.sort())
console.log('names is now:', names)
console.log('Bad sort. Bad! Let\\'s try again:')

// USE THIS
console.log(
  \`sort(selectComparator('LENGTH_DESC'), names) is:\`,
  sort(selectComparator('LENGTH_DESC'), names)
)
console.log('names is unchanged:', names)
console.log(
  \`sort(selectComparator('LENGTH_ASC'), names) is:\`,
  sort(selectComparator('LENGTH_ASC'), names)
)
console.log(
  \`sort(selectComparator('DESC'), [2, 5, 3, 9, 1]) is:\`,
  sort(selectComparator('DESC'), [2, 5, 3, 9, 1])
)
console.log(
  \`sort(selectComparator('ASC'), [2, 5, 3, 9, 1]) is:\`,
  sort(selectComparator('ASC'), [2, 5, 3, 9, 1])
)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
