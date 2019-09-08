const code = `import { curry } from 'ramda'

const addEmUp = curry((x, y, z) => x + y + z)

console.log('addEmUp(1, 2, 3) is:', addEmUp(1, 2, 3))
console.log('addEmUp(1)(2, 3) is:', addEmUp(1)(2, 3))
console.log('addEmUp(1, 2)(3) is:', addEmUp(1, 2)(3))
console.log('addEmUp(1)(2)(3) is:', addEmUp(1)(2)(3))

const addOne = addEmUp(1)
const addOneAndTwo = addOne(2)

console.log('addOneAndTwo(3) is:', addOneAndTwo(3))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
