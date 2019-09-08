const code = `import { prepend } from 'ramda'

const nums = [1, 2, 3]

// Vanilla
const vjsManual = [0, ...nums]

// Our own prepend function
const vprepend = (x, arr) => ([x, ...arr])

const vjsAppend = vprepend(0, nums)

// Ramda
const ramdaAppend = prepend(0, nums)

console.log('[0, ...nums]:', vjsManual)
console.log('vprepend(0, nums):', vjsAppend)
console.log('prepend(0, nums):', ramdaAppend)
console.log('nums is unchanged:', nums)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
