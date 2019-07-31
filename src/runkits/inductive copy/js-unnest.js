const code = `const { curry } = require('ramda')

const nested = [[1, 2, 3], [4, 5], [6, 7, 8]]
const deeplyNested = [1, [2, [3, [4, [5, [6]]]]]]

const unnest = curry((n, list) => list.flat(n))

console.log('unnest(3, deeplyNested)', unnest(3, deeplyNested))
console.log('unnest(5, deeplyNested)', unnest(5, deeplyNested))

const unnestTwoLevels = unnest(2)
console.log('unnestTwoLevels(deeplyNested)', unnestTwoLevels(deeplyNested))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
