const code = `function testN (n) {
  if (n <= -1) { return false }
  if (n >= 1) { return true}

  return undefined
}

console.log('Testing -5:', testN(-5))
console.log('Testing 7:', testN(7))
console.log('Testing 0:', testN(0))`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
