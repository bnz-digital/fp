import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

const code = `const nums = [1, 4, 9, 16, 25]

map(Math.sqrt, nums)`

export default function VariableScope () {
  const [showEmbed, setShowEmbed] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowEmbed(true), 1)

    return undefined
  }, [])

  return showEmbed ? (
    <Embed source={code} preamble='const { map } = require("ramda")' />
  ) : null
}
