import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../Highlighter'

export default function CodeBlock ({ code }) {
  const [show, setShow] = useState(false)
  const renderHighlighter = () => 
  const renderRunkit = () => 

  console.log('show', show)

  useEffect(() => {
    if (window && window.RunKit) {
      setShow(true)
    }
  })

  return (
    show ? <Embed source={code} /> : <Highlighter code={code} />
  )
}
