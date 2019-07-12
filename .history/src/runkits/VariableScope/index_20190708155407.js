import React from 'react'

const code = `const R = require('ramda')

const nums = [1, 2, 3, 4, 5]

R.map(R.add, nums)`

export default function VariableScope () {
  return <div id='runkit'>{code}</div>
}
