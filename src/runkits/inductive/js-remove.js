const code = `import { remove } from 'ramda'

const names = [
  'Bob', 'Carol', 'Ted', 'Alice', 'Samson', 'Delilah'
]

// Ramda returns a copy
console.log('remove(4, 1, names) removes Samson', remove(4, 1, names))
console.log('names is unchanged:', names)
console.log('remove(4, 2, names) removes Samson and Delilah', remove(4, 2, names))

// Splice mutates in place: DO NOT DO THIS!
console.log('splice returns an array of the removed items:', names.splice(4, 1))
console.log('But names has been mutated!', names)

// Let's reinsert Samson
// Does this look intuitive to you?
names.splice(4, 0, 'Samson')

// Best method with vanilla JS
const vjsRemove = (index, len, list) =>
  index > -1 && index < list.length
    ? [
        ...list.slice(0, index),
        ...list.slice(index + len)
      ]
    : [...list]

console.log('Vanilla JS: vjsRemove(4, 1, names)', vjsRemove(4, 1, names))
console.log('Out of bounds does nothing, same as Ramda remove (try it):')
console.log('vjsRemove(-1, 1, names)', vjsRemove(-1, 1, names))
console.log('vjsRemove(7, 1, names)', vjsRemove(7, 1, names))
console.log('names unchanged:', names)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
