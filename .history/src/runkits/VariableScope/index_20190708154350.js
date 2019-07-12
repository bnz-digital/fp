import React, { useLayoutEffect, useState } from 'react'
import Embed from 'react-runkit'

export default function VariableScope () {
  const [showEmbed, setShowEmbed] = useState(false)

  useLayoutEffect(() => setShowEmbed(true), [])

  return showEmbed ? <Embed source={`console.log('Variable scope!')`} /> : null
}
