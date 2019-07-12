import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../Highlighter'

export default function CodeBlock ({ source }) {
  const [show, setShow] = useState(false)

  const { code } = require(`../../runkits/${source}`)

  console.log('source', source)
  console.log('code', code)

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(Boolean(window) && Boolean(window.RunKit))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return null

  // return show ? (
  //   <Embed source={`${requires}${code}`} />
  // ) : (
  //   <Highlighter code={`${imports}${requires}`} />
  // )
}
