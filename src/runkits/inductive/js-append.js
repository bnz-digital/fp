const code = `import { append } from 'ramda'

const nums = [1, 2, 3]

// Vanilla
const vjsManual = [...nums, 4]

// Our own append function
const vappend = (x, arr) => ([...arr, x])

const vjsAppend = vappend(4, nums)

// Ramda
const ramdaAppend = append(4, nums)

console.log('[...nums, 4]:', vjsManual)
console.log('vappend(4, nums):', vjsAppend)
console.log('append(4, nums):', ramdaAppend)
console.log('nums is unchanged:', nums)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
