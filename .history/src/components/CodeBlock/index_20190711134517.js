import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../Highlighter'

// import Runkit from '../Runkit'

export default function CodeBlock ({ code }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (window && window.RunKit) {
      setShow(true)
    }
  })

  return show ? <Embed /> : <Highlighter code={code} />
}
