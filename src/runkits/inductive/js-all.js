const code = `const { all } = require('ramda')

const tests = ['Bob', 'Sally', 'Samuel', 'Ruth']

// Vanilla JS
console.log('tests.every(name => name.length > 1)', tests.every(name => name.length > 1))
console.log('tests.every(name => name.length > 4)', tests.every(name => name.length > 4))

// Ramda
console.log('all(name => name.length > 1, tests)', all(name => name.length > 1, tests))
console.log('all(name => name.length > 4, tests)', all(name => name.length > 4, tests))
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
