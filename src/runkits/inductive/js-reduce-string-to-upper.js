const code = `import { keys, reduce, toUpper } from 'ramda'

const bob = {
  name: 'Bob',
  age: 'indeterminate',
  iq: 180,
  speaksFrench: true
}

const upcaseStrings = (acc, key) => {
  const value = bob[key]
  
  return {
    ...acc,                          // copy current accumulator
    [key]: typeof value === 'string' // add this key-value pair
      ? toUpper(value)               // uppercase if string
      : value                        // otherwise, pass unchanged
  }
}

const vjsUpcase = Object.keys(bob).reduce(upcaseStrings, {})

const ramdaUpcase = reduce(upcaseStrings, {}, keys(bob))

console.log('Vanilla JS result:', vjsUpcase)
console.log('Ramda result:', ramdaUpcase)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
