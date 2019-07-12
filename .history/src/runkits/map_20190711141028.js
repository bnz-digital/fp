const code = `const nums = [1, 4, 9, 16, 25]

map(Math.sqrt, nums)`

const imports = `import { map } from 'ramda'

`

const requires = `const { map } = require('ramda')

`

const source = {
  code,
  imports,
  requires
}

export default source
