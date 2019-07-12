import React, { useEffect, useState } from 'react'

import Highlighter from '../Highlighter'

// import Runkit from '../Runkit'

export default function CodeBlock ({ code }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (window && window.RunKit) {
      setShow(true)
    }
  })

  return (
    <>
      <p>
        <strong>{show ? 'Loaded' : 'Not loaded'}</strong>
      </p>
      <Highlighter code={code} />
    </>
  )
}
