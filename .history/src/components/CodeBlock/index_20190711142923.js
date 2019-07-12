import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../Highlighter'

export default function CodeBlock ({ code, imports, requires }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(Boolean(window) && Boolean(window.RunKit))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return show ? (
    <Embed source={`${requires}${code}`} />
  ) : (
    <Highlighter code={`${imports}${requires}`} />
  )
}
