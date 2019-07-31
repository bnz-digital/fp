const code = `const { none } = require('ramda')

const tests = ['Bob', 'Sally', 'Samuel', 'Ruth']

// Vanilla JS
console.log('tests.every(name => name.length <= 1)', tests.every(name => name.length <= 1))
console.log('tests.every(name => name.length <= 4)', tests.every(name => name.length <= 4))

// Or perhaps more clearly
console.log('tests.every(name => !(name.length > 4))', tests.every(name => !(name.length > 4)))
console.log('tests.every(name => !(name.length > 10))', tests.every(name => !(name.length > 10)))

// Ramda
console.log('none(name => name.length > 4, tests)', none(name => name.length > 4, tests))
console.log('none(name => name.length > 10, tests)', none(name => name.length > 10, tests))
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
