import React, { useEffect, useState } from 'react'
import Embed from 'react-runkit'

import Highlighter from '../Highlighter'

export default function CodeBlock ({ code }) {
  const [show, setShow] = useState(false)

  console.log('show', show)

  useEffect(() => {
    useEffect(() => {
      const interval = setInterval(() => {
        console.log('This will run every second!')
      }, 1000)
      return () => clearInterval(interval)
    }, [])
  }, [])

  return show ? <Embed source={code} /> : <Highlighter code={code} />
}
