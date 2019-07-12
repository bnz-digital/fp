import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../Highlighter'

export default function CodeBlock ({ code }) {
  const [show, setShow] = useState(<Highlighter code={code} />)

  useEffect(() => {
    if (window && window.RunKit) {
      setShow(<Embed source={code} />)
    }
  })

  return (
    <>
      <p>Loaded: {show}</p>
      {show}
    </>
  )
}
