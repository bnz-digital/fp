import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { solarizedLight } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function Highlighter ({ code = '', showLineNumbers = true }) {
  return (
    <SyntaxHighlighter
      language='javascript'
      style={solarizedLight}
      showLineNumbers={showLineNumbers}
    >
      {code}
    </SyntaxHighlighter>
  )
}
