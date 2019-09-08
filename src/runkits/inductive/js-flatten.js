const code = `import { flatten, unnest } from 'ramda'

const nested = [[1, 2, 3], [4, 5], [6, 7, 8]]
const deeplyNested = [1, [2, [3, [4, [5, [6]]]]]]

// Ramda flatten does so recursively
console.log('flatten(nested)', flatten(nested))
console.log('flatten(deeplyNested)', flatten(deeplyNested))

// Ramda unnest flattens just one level deep
console.log('unnest(nested)', unnest(nested))
console.log('unnest(deeplyNested)', unnest(deeplyNested))

// Vanilla JS flatMap workes like unnest
console.log('nested.flatMap(n => n)', nested.flatMap(n => n))
console.log('deeplyNested.flatMap(n => n)', deeplyNested.flatMap(n => n))

// Vanilla JS flat works a bit like unnest, but it can specify the
// levels of nesting to flatten
console.log('deeplyNested.flat(3)', deeplyNested.flat(3))
console.log('deeplyNested.flat(5)', deeplyNested.flat(5))

console.log('deeplyNested remains unchanged:', deeplyNested)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
