import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../Highlighter'

export default function CodeBlock ({ code = '', imports = '', requires = '' }) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(Boolean(window) && Boolean(window.RunKit))
    }, 1000)

    if (show) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [])

  return show ? (
    <div className='code-block'>
      <Embed
        source={`${requires}${code}`}
        nodeVersion='12'
        theme='solarized-light'
      />
    </div>
  ) : (
    <Highlighter code={`${imports}${code}`} />
  )
}
