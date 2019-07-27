const code = `const state1 = { saved: false }
const state2 = { saved: false }

// MUTATION! DON'T DO THIS!
function saveByMutation (obj) {
  obj.saved = true

  return obj
}

// IMMUTABLE - returns a copy. DO THIS!
const saveByCopy = obj => ({ ...obj, saved: true })

console.log('saveByMutation(state1) returns:', saveByMutation(state1))
console.log('Now state1 is:', state1)
console.log('saveByCopy(state2) returns:', saveByCopy(state2))
console.log('Now state2 is:', state2)`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
