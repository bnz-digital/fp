import React from 'react'

const code = `import { add, map } from 'ramda'

const nums = [1, 2, 3, 4, 5]

map(add, nums)`

export default function VariableScope () {
  return <pre id='runkit'>{code}</pre>
}
