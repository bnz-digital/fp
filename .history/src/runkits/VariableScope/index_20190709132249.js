import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../../components/Highlighter'

const preamble = `const { map } = require('ramda')

`

const code = `const nums = [1, 4, 9, 16, 25]

map(Math.sqrt, nums)`

export default function VariableScope () {
  const [showEmbed, setShowEmbed] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowEmbed(true), 1000)

    return undefined
  }, [])

  return showEmbed ? (
    <Embed source={code} preamble={preamble} />
  ) : (
    <Highlighter>
      {preamble}
      {code}
    </Highlighter>
  )
}
