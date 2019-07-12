import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../Highlighter'

export default function CodeBlock ({ code }) {
  const [show, setShow] = useState(false)

  console.log('show', show)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(Boolean(window) && Boolean(window.RunKit))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return show ? <Embed source={code} /> : <Highlighter code={code} />
}
