import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import convertImports from '../../utilities/convertImports'
import Highlighter from '../Highlighter'

export default function CodeBlock ({
  code = '',
  imports = '',
  requires = '',
  theme = 'light',
  warn = () => null
}) {
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
      {warn()}
      <Embed
        source={`${requires}${convertImports(code)}`}
        nodeVersion='12'
        theme={`solarized-${theme}`}
      />
    </div>
  ) : (
    <Highlighter code={`${imports}${code}`} theme={theme} warn={warn} />
  )
}
