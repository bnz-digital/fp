const code = `const { any } = require('ramda')

const tests = ['Bob', 'Sally', 'Samuel', 'Ruth']

// Vanilla JS
console.log('tests.some(name => name.length > 4)', tests.some(name => name.length > 4))
console.log('tests.some(name => name.length > 10)', tests.some(name => name.length > 10))

// Ramda
console.log('any(name => name.length > 4, tests)', any(name => name.length > 4, tests))
console.log('any(name => name.length > 10, tests)', any(name => name.length > 10, tests))
`

const imports = ``

const requires = ``

export default {
  code,
  imports,
  requires
}
