import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Highlighter ({ code = '', preamble = '' }) {
  const codeString = `${preamble}${code}`

  return (
    <SyntaxHighlighter language='javascript' style={solarizedLight}>
      {codeString}
    </SyntaxHighlighter>
  )
}
