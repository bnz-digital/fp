import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Highlighter ({ code = '' }) {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={solarizedLight}
      showLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  )
}
