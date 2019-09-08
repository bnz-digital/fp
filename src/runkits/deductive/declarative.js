const code = `// This is a much better way to code
import { map } from 'ramda'

const nums = [1, 2, 3, 4, 5]
const square = x => x * x

let out = map(square, nums) // It's almost plain English

console.log('by function', out)

// Or, using the Array.map method (still better than a loop)
console.log('by method', nums.map(square))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
