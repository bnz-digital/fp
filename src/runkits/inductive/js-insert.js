const code = `import { insert } from 'ramda'

const names = [
  'Bob', 'Carol', 'Ted', 'Samson', 'Delilah'
]

// Ramda returns a copy
console.log('insert(3, \\'Alice\\', names)', insert(3, 'Alice', names))
console.log('names is unchanged:', names)

// Splice mutates in place: DO NOT DO THIS!
console.log('splice returns []', names.splice(3, 0, 'George'))
console.log('But names has been mutated!', names)

// Let's remove George
// Does this look intuitive to you?
names.splice(3, 1)

// Best method with vanilla JS
const vjsInsert = (index, item, list) =>
  index > -1 && index < list.length
    ? [
        ...list.slice(0, index),
        item,
        ...list.slice(index)
      ]
    : [...list, item]

console.log('Vanilla JS: vjsInsert(3, \\'Alice\\', names)', vjsInsert(3, 'Alice', names))
console.log('Out of bounds appends, same as Ramda insert (try it):')
console.log('vjsInsert(-1, \\'Alice\\', names)', vjsInsert(-1, 'Alice', names))
console.log('vjsInsert(7, \\'Alice\\', names)', vjsInsert(7, 'Alice', names))
console.log('names unchanged:', names)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
