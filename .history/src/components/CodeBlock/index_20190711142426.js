import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../Highlighter'

export default function CodeBlock (props) {
  const [show, setShow] = useState(false)

  console.log('props', props)

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
