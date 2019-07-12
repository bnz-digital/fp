import React from 'react'
import Embed from 'react-runkit'

const code = `const { map } = require 'ramda'

const nums = [1, 4, 9, 16, 25]

map(Math.sqrt, nums)`

export default function VariableScope () {
  return <Embed source={code} />
}
