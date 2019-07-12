import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../Highlighter'

export default function CodeBlock ({ code }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (window && window.RunKit) {
      setShow(true)
    }
  })

  return (
    <>
      <p>Loaded: {show}</p>
      {show ? <Embed source={code} /> : <Highlighter code={code} />}
    </>
  )
}
